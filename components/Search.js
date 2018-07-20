import React from 'react';
import {View, TextInput, StyleSheet, ImageBackground} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'nachos-ui';
import List from './List';
import Icon from 'react-native-vector-icons/FontAwesome';


class Search extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: () => {
            return <Icon size={32} color="white" name="home" />
        }
        
    }
    
    constructor (props) {
        super(props)
        this.state = {
            city : 'Marseille'
        }
    }

    setCity (city) {
        this.setState( {
            city: city
        })
    }

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }
        
    render() {
            return (
                <ImageBackground source={require('./home-wall.jpg')} style={styles.homeWall} >
                <View style={styles.viewSearch}>
                
                    <TextInput style={styles.searchInput}
                    value={this.state.city}
                    clearButtonMode={'while-editing'}
                    onChangeText={(text) => this.setCity(text)} />
                    <Button style={{width: 250, backgroundColor: '#F50057' }} textStyle={{fontSize: 16}} onPress={() => this.submit()}>Enter a city</Button>
                
                </View>
                </ImageBackground>
            )
    }
}

const styles = StyleSheet.create({
  homeWall: {
    width: '100%',
    height: '100%',
    flex:1
  },
  viewSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput:{
      width: '80%',
      height: 60,
      borderColor: '#F50057',
      borderWidth: 2,
      padding: 10,
      margin: 20,
      marginTop: 30,
      fontSize: 28,
      textAlign: 'center',
      borderRadius: 3,
      color: '#f1f1f1'
  }
});

const ModalNavigator = createStackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: List
    }
});

export default ModalNavigator;