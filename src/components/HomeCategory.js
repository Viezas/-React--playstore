import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import { Game } from './game';
import { GAMES } from "../assets/utiles/games"

export function HomeCategory({ subtitle, title, ...props }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
        <TouchableOpacity>
          <LottieView source={require('./../assets/animations/right-arrow.json')} autoPlay loop style={styles.arrow}/>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView 
        horizontal={true} 
        style={styles.gameContainer}
        showsHorizontalScrollIndicator={false}
      >
        {
          GAMES.map((item, index) => {
            if(index < 5) {
             return(
              <Game key={index} game={item}/>
             ) 
            }
        })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10%'
  },
  gameContainer: {
    marginLeft: '10%'
  },
  arrow: {
    height: 30,
    width: 60
  }
});