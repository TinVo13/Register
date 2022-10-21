import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import register from './component/register.js';
import ConfirmOTPScreen from './component/ConfirmOTPScreen.js';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Dang Ky' component={register}></Stack.Screen>
        <Stack.Screen name='Xac nhan otp' component={ConfirmOTPScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },

});
