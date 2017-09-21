import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export default class WeatherRow extends React.Component {

    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }

    icon(size = 70) {
        const type = this.props.day.weather[0].main.toLowerCase() 
        let image
        switch (type) {
            case 'cloud' : 
            image = require('./icons/cloudy.png')
            break;
            case 'cloud' : 
            image = require('./icons/rain.png')
            break;
            default:
            image = require('./icons/sun.png')
        }

        return <Image source={image} style={{width: size, height: size}} />
        
    }

    day() {
       let day = moment(this.props.day.dt * 1000).format('ddd')
       return (
           <Text style={[styles.white,styles.bold]}>{day.toUpperCase()}</Text>
       )
    }

     date() {
       let date = moment(this.props.day.dt * 1000).format('DD/MM')
       return (
           <Text style={styles.white}>{date}</Text>
       )
    }

    render() {
        if (this.props.index === 0) {
            return (
            <View style={styles.viewFirst}>
                <View>
                    <View style={styles.iconFirst}>{this.icon(120)}</View>
                    <Text style={styles.dateFirst}>{this.day()} {this.date()}</Text>
                </View>
                <Text style={[styles.tempFirst, styles.white]}>{Math.round(this.props.day.temp.day)}ºC</Text>
            </View>
            )
        } else {
            return (
            <View style={styles.view}>
                <View>
                    {this.icon()}
                    <Text style={styles.date}>{this.day()} {this.date()}</Text>
                </View>
                <Text style={styles.temp}>{Math.round(this.props.day.temp.day)}ºC</Text>
            </View>
        )
        }
    }
}

const styles = StyleSheet.create({
  white: {
    color: "#FFF",
  },
  bold: {
    fontWeight: 'bold',
  },
  view: {
    backgroundColor: '#00B0FF',
    borderBottomWidth: 1,
    borderBottomColor: '#40C4FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 20,
  },
  temp: {
    color: "#f2f2f2",
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 30,
  },
  viewFirst: {
    backgroundColor: '#F50057',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateFirst: {
    fontSize: 26
  },
  tempFirst: {
    fontSize: 60,
    paddingVertical: 30,
    fontWeight: 'bold'
  }
});