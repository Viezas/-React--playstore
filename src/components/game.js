import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-native-shared-element';

export function Game({ game }) {
  const navigation= useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.push('Game Detail', {game: game})}>
      <View style={styles.container}>
        <SharedElement id={`game.${game.id}`}>
          <Image source={game.cover_image} style={styles.coverImage}></Image>
        </SharedElement>
        <View style={styles.infos}>
          <Image source={game.icon_image} style={styles.gameIcon}></Image>
          <View>
            <Text style={styles.title}>{game.title}</Text>
            <Text>{
              game.categories.map((category, index) =>{
                let my_string = category.name;
                if (game.categories.length > 0 && game.categories.length != category.id+1 && index < 1 ) {
                  my_string+= ' - '
                }
                if (index < 2) {
                  return my_string
                }
              })
            }</Text>
            <Text>{game.rating} ⭐</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 50,
    height: 180,
    width: 220,
    marginTop: 15
  },
  coverImage: {
    height: 100,
    width: 220,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black'
  },
  gameIcon: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 10
  },
  infos: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  }
});