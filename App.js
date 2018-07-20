import React from 'react';
import { StyleSheet, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tabs = createBottomTabNavigator({
  Search: { 
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon size={32} color="white" name="search" />
      ),
    },
  },
  About: { screen: About }
},{
  tabBarOptions: {
    activeBackgroundColor: '#F9A825',
    showIcon: true,
    style: {
      backgroundColor: '#00B0FF',
    }
  }
})

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.viewTabs}>
        <Tabs style={styles.tabsY} title="about me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewTabs: {
    flex: 1,
  },
  tabsY: {
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 2,
    width: 200,
    height: 40,
  }
});
