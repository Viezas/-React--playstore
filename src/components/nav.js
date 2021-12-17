import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'

export function Nav() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text style={styles.isActive}>Pour vous</Text>
        <Text style={styles.nav}>Meilleurs Classement</Text>
        <Text style={styles.nav}>Enfants</Text>
        <Text style={styles.nav}>Évéments</Text>
        <Text style={styles.nav}>Prenium</Text>
        <Text style={styles.nav}>Catégories</Text>
        <Text style={styles.nav}>Choix de l'équipe</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: '15%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  nav:{
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 20,
  },
  isActive: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 20,
    color: "green",
    borderBottomWidth: 3,
    paddingBottom: 10,
    borderColor: 'green'
  }
});