import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomeNavigator} from './HomeNavigator'
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator()

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
        headerShown : false
    }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  )
}