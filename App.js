import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/Home';
import  GameDetail  from './src/views/GameDetail';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createSharedElementStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game Detail" component={GameDetail} 
          sharedElements={(route, otherRoute, showing) => {
            const {game} = route.params;
            return [
              {
                id: `game.${game.id}`,
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;