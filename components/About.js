import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class About extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: () => {
            return <Icon size={32} color="white" name="account-circle" />
        }
    }

    render() {
            return (
                <View style={styles.viewabout}>
                    <Text style={styles.aboutTitle}>A propos de React Native Weather App :</Text>
                    <Text style={styles.aboutText}>Bacon ipsum dolor amet leberkas doner filet mignon beef, pork belly biltong pork hamburger t-bone picanha meatball shank short ribs porchetta kielbasa. Rump shoulder tongue, short loin chicken strip steak frankfurter flank. Kevin pork bacon jowl turducken. Short loin bresaola flank swine, cow alcatra ribeye andouille doner pastrami tail ham hock filet mignon pork loin. Ground round hamburger chicken, ribeye pig burgdoggen corned beef filet mignon flank cow ham hock alcatra tongue short loin.</Text>
                     <Text style={styles.aboutCredits}>Made by Ryderblack</Text>
                </View>
            )
    }
}

const styles = StyleSheet.create({
  viewabout: {
    flex: 1,
    margin: 30,
  },
  aboutTitle: {
    fontSize: 24,
    color: '#29B6F6',
    margin: 15,
    textAlign: 'center',
  },
  aboutText: {
    fontFamily: 'Helvetica',
    textAlign: 'justify',
    fontSize: 16,
  },
  aboutCredits:{
    fontFamily: 'Helvetica',
    textAlign: 'justify',
    fontSize: 16,
    marginTop: 15,
  },
  icons: {
      
  }
});
