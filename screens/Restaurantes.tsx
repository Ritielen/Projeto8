import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [posicao, setPosicao] = useState({
    latitude: -31.34398, 
    longitude: -54.10579,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nossas Unidades em Bagé - RS</Text>

      <MapView 
        style={styles.mapa}
        region={{
          latitude: -31.34398, 
          longitude: -54.10579,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        }}
        mapType='satellite'
        onPress={ ponto => {
          setPosicao({
            ...posicao,
            latitude: ponto.nativeEvent.coordinate.latitude,
            longitude: ponto.nativeEvent.coordinate.longitude,
            latitudeDelta: ponto.nativeEvent.coordinate.latitudeDelta,            
            longitudeDelta: ponto.nativeEvent.coordinate.longitudeDelta,
          });
        }}
      > 

        <Marker 
  coordinate={posicao}
  title='Fogo na Brasa Bagé - Centro'
  description='Rua General Osório, 123'
  image={require('../assets/pin.png')}
/>

<Marker 
  coordinate={{ 
    latitude: -31.31043, 
    longitude: -54.08916 
  }}
  title='Fogo na Brasa Bagé - Zona Sul'
  description='Av. Santa Tecla, 456'
  image={require('../assets/pin.png')}
  />
  </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e59a59',
    marginBottom: 20,
  },
  mapa: {
    width: "90%",
    height: "50%"

  }
});
