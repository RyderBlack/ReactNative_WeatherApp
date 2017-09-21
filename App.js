import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { TabNavigator} from 'react-navigation';


const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
},{

  swipeEnabled: true,
  tabBarOptions: {
    activeBackgroundColor: '#F9A825',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#00B0FF',
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.viewTabs}>
        <Tabs style={styles.tabsY}/>
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
