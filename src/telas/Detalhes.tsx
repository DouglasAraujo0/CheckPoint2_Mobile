import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Detalhes({ route }) {
  const { tenis } = route.params;
  const [carrinho, setCarrinho] = useState([]);

  const addCarrinho = () => {
    const novoCarrinho = [...carrinho, tenis];
    setCarrinho(novoCarrinho);
    alert('Volte para Home e Entre no Carrinho de compras!')
  }

  return (
    <View style={styles.container}>
      <Image source={tenis.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{tenis.name}</Text>
        <Text style={styles.price}>{tenis.price}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra suscipit est, nec facilisis arcu tempor nec. Integer luctus, nisl non pellentesque fermentum, lorem lorem accumsan odio, a varius nulla est nec dui.
        </Text>
        <Button title="Adicionar ao Carrinho" onPress={addCarrinho} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});
