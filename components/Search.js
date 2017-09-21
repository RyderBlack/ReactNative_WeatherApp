import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'nachos-ui';
import List from './List';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Search extends React.Component {
    
    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Icon size={32} color="white" name="search" />
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
                <Image source={require('./home-wall.jpg')} style={styles.homeWall} >
                <View style={styles.viewSearch}>
                
                    <TextInput style={styles.searchInput}
                    value={this.state.city}
                    clearButtonMode={'while-editing'}
                    onChangeText={(text) => this.setCity(text)} />
                    <Button style={{width: 250, backgroundColor: '#F50057' }} onPress={() => this.submit()}>Rechercher une ville</Button>
                
                </View>
                </Image>
            )
    }
}

const styles = StyleSheet.create({
  homeWall: {
    width: null,
    height: null,
    resizeMode: 'cover',
    flex:1,
  },
  viewSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput:{
      height: 60,
      borderColor: '#F50057',
      borderWidth: 2,
      padding: 10,
      margin: 20,
      marginTop: 30,
      fontSize: 28,
      textAlign: 'center',
      borderRadius: 3,
      color: '#f1f1f1',
  }
});

export default StackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: List
    }
});