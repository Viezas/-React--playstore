import React from 'react';
import { Button, Image, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { SharedElement } from 'react-native-shared-element';

export function GameDetail({ route }) {
  const game = route.params.game;
  const navigation= useNavigation();
  console.log("game -> ", route.params.game.id);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack(0)}>
          <LottieView 
            source={require('./../assets/animations/right-arrow.json')} 
            autoPlay loop 
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      
      {/* Details */}
      <View style={styles.detailsContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false}
        >
        {/* Header */}
          <View style={styles.header}>
            <Image source={game.icon_image} style={styles.gameIcon}></Image>
            <View style={styles.subHeader}>
              <Text style={styles.title}>{game.title}</Text>
              <View style={styles.download}>
                <Text style={styles.editor}>{game.editor}</Text>
                <Button title="Installer" color="green" style={styles.downloadBtn}></Button>
              </View>
            </View>
          </View>

          <View style={styles.littleDetails}>
            <View style={{ borderRightWidth: 1, paddingRight: '5%', borderColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15, color: 'black' }}>{game.rating} ⭐</Text>
              <Text>2M avis</Text>
            </View>
            <View style={{ borderRightWidth: 1, paddingHorizontal: '5%', borderColor: 'gray', maxWidth: '39%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15, color: 'black' }}>Plus de 50 M</Text>
              <Text style={{ textAlign: 'center' }}>Téléchargements</Text>
            </View>
            <View style={{ borderRightWidth: 1, paddingHorizontal: '5%', borderColor: 'gray', maxWidth: '39%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15, color: 'black' }}>Choix de l'équipe</Text>
            </View>
            <View style={{ borderRightWidth: 1, paddingHorizontal: '5%', borderColor: 'gray', maxWidth: '39%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./../assets/img/pegi7.png')} style={{height: 50, width: 50}}></Image>
            </View>
          </View>

          {/* Images */}
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={styles.imagesContainer}
          >
            <SharedElement id={`game.${game.id}`}>
              <Image source={game.cover_image} style={styles.image}></Image>
            </SharedElement>
            {
              game.images.map((image, index) => {
                return <Image key={index} source={image.url} style={styles.image}></Image>
              })
            }
          </ScrollView>

          {/* About */}
          <View style={{ marginHorizontal: '10%', marginBottom: 30 }}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
              <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>A propos de ce jeu</Text>
              <TouchableOpacity>
                <LottieView 
                  source={require('./../assets/animations/right-arrow.json')} 
                  autoPlay loop
                  style={{ height: 30, width: 60,}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{color: 'black'}}>{game.description}</Text>
          </View>

          {/* Categories */}
          <ScrollView 
            style={{ marginHorizontal: '10%', marginBottom: 30 }}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
          >
            {
              game.categories.map((category, index) => {
                return ( 
                  <TouchableOpacity key={index} style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 50, paddingVertical: 5, paddingHorizontal: 15, marginRight: 15, fontSize: 20, fontWeight: 'bold' }}>
                    <Text>{category.name}</Text>
                  </TouchableOpacity>
                )
            })
          }
          </ScrollView>

          {/* Choix de l'équipe */}
          <View style={{ marginHorizontal: '10%', paddingBottom: 100 }}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>Choix de l'équipe</Text>
              <TouchableOpacity>
                <LottieView 
                  source={require('./../assets/animations/right-arrow.json')} 
                  autoPlay loop
                  style={{ height: 30, width: 60,}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{color: 'gray', fontSize: 13, fontWeight: '400', marginBottom: 30}}>Points forts</Text>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ marginRight: 10, borderWidth: 1, borderColor: 'gray', fontSize: 15, fontWeight: 'bold', color: 'black', width: 20, height: 20, borderRadius: 50, textAlign: 'center' }}>1</Text>
              <Text style={{ width: '90%'}}>Graphismes de qualité et commandes intuitives en font un incontournable du genre</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ marginRight: 10, borderWidth: 1, borderColor: 'gray', fontSize: 15, fontWeight: 'bold', color: 'black', width: 20, height: 20, borderRadius: 50, textAlign: 'center' }}>2</Text>
              <Text style={{ width: '90%'}}>Driftez, slalomez et boostez votre bolide pour finir premier</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ marginRight: 10, borderWidth: 1, borderColor: 'gray', fontSize: 15, fontWeight: 'bold', color: 'black', width: 20, height: 20, borderRadius: 50, textAlign: 'center' }}>3</Text>
              <Text style={{ width: '90%'}}>Participez à des courses endiablées sur des circuits du monde entier</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  image: {
    height: 175,
    width: 275,
    borderColor: 'gray',
    borderRadius: 10,
    marginRight: 15
  },  
  imagesContainer: {
    marginLeft: '10%',
    marginBottom: 30
  },
  headerContainer: {
    padding: '2%'
  },
  arrow: {
    height: 30,
    width: 60,
    transform: [{ rotate: '90deg' }]
  },
  container: {
    paddingTop: '2%'
  },
  detailsContainer: {
    paddingTop: '5%'
  },
  gameIcon: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 10
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    marginBottom: 30
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    paddingBottom: 5
  },
  editor: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  download: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '76%'
  },
  littleDetails: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
    paddingHorizontal: '10%',
  },
});

export default GameDetail;