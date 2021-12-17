import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Searchbar } from '../components/searchbar';
import { Nav } from '../components/nav';
import { HomeCategory } from '../components/HomeCategory';

export function HomeScreen({ navigation }) {
  return (
    <View>
      {/* Header */}
      <Searchbar></Searchbar>
      <Nav></Nav>

      {/* Body */}
      <View>
        <SafeAreaView>
          <ScrollView>
            <HomeCategory title="Jeux bourrés d'action" subtitle="Jouez à vos jeux préférés"></HomeCategory>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View> 
  )
}