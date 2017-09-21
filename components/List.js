import React from 'react';
import {View, Text, ActivityIndicator, ListView, Image} from 'react-native';
import axios from 'axios';
import WeatherRow from './weather/Row';

export default class List extends React.Component {
    
    static navigationOptions = ({navigation}) => {
       return {
           title: `Météo / ${navigation.state.params.city}`,
           tabBarIcon: () => {
            return <Image source={require('./icons/search.png')} />
           }
       }
    }

    constructor (props) {
        super(props)
        this.state = {
            city : this.props.navigation.state.params.city,
            report: null,
        },
        this.fetchWeather()
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=5ecae7e95e7f28e2954869ab27e68673`)
        .then((response) => {
            this.setState({report: response.data})
        })
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator size="large"  />
            )
        } else {

            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(rowData,j,k) => <WeatherRow day={rowData} index={parseInt(k, 10)}/>}
                />
            )
        }
    }
}