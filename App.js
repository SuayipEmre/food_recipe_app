import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { RootNavigator } from './src/routes/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/app';
export default function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
   </Provider>
  );
}


