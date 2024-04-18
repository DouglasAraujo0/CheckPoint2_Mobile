import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import CarrinhoContext from '../context/CarrinhoContext';

const Detalhes = ({ route, navigation }) => {
  const { adicionarAoCarrinho, carrinho } = useContext(CarrinhoContext);
  const { tenis } = route.params;

  const addCarrinho = () => {
    adicionarAoCarrinho(tenis);
    console.log("Item adicionado ao carrinho:", tenis);
    console.log("Carrinho atual:", carrinho);
    navigation.navigate('Carrinho'); // Navegue para o carrinho após adicionar o item
  }

  return (
    <View style={styles.container}>
      <Image source={tenis.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{tenis.name}</Text>
        <Text style={styles.price}>{tenis.price}</Text>
        <Text style={styles.description}>
          Descrição do produto...
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

export default Detalhes;
