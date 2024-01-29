import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";


const Stack = createNativeStackNavigator()

export const HomeNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false

        }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
  )
}