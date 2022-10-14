import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailedPage from '../Pages/DetailedPage';
const HomeStack1 = createNativeStackNavigator();
function HomeStack() {
    return (
        <HomeStack1.Navigator>
            <HomeStack1.Screen name='Detailed' component={DetailedPage}/>
      </HomeStack1.Navigator>
  )
}

export default HomeStack