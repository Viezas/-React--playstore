import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Searchbar() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.search}>
          <TextInput 
            placeholder="Rechercher des applis et jeux"
            editable={false}
            selectTextOnFocus={false}
          />
          <Image source={require('./../assets/img/pp.jpg')} style={styles.pp}></Image>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    paddingVertical: '5%'
  },
  search: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  pp: {
    maxWidth: 40,
    maxHeight: 40,
    borderRadius: 50,
    overflow: 'hidden'
  }
});