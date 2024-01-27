import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";


const Stack = createNativeStackNavigator()

export const HomeNavigator = () => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor:'#fff'}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false

        }} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}