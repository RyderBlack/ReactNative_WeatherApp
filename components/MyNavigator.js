import { createStackNavigator } from 'react-navigation';
import List from './List';
import Search from './Search';

const MyNavigator = createStackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: List
    }
});

export default MyNavigator;