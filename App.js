import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Menu from './screens/Menu';
import Payment from './components/CheckOut/Payment';

//import TaskScreen from '../front-native/screens/Taskhomescreen';
import { Button, Icon, Header, Badge } from 'react-native-elements';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
         
        <Stack.Screen name= "Menu" component={Menu}
         options={{
          
          headerShown: false,
         }}/>
         <Stack.Screen name= "Payment" component={Payment}
         options={{
          
          headerShown: false,
         }}/>
          
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={({ navigation }) => ({
              
              header: Headers,
              headerShown: true,
              headerStyle: {
               backgroundColor: '#222f3e'
              },
              headerTitleStyle: { color: '#f0f' },
              headerTintColor: '#f0f'
            })}>
            </Stack.Screen> */}

           
        
                   
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
