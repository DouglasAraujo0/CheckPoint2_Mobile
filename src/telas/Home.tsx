import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'; 
import CarrinhoContext from '../context/CarrinhoContext';

const HomeScreen = ({ navigation }) => {
  const { quantidadeItens } = useContext(CarrinhoContext);
  const Estoque = [
    { id: '1', name: 'Nike Air Force Preto', price: '$100', image: require('../../assets/forcepreto.png') },
    { id: '2', name: 'Nike Vomero 17', price: '$150', image: require('../../assets/vomero.png')},
    { id: '3', name: 'Nike Air Max 97', price: '$134', image: require('../../assets/airmax.png')},
    { id: '4', name: 'Nike Dunk Low Retro SE', price: '$244', image: require('../../assets/retro.png')},
    { id: '5', name: 'Nike Journey Run', price: '$122', image: require('../../assets/run.png')},
    { id: '6', name: 'Nike Air Max 90', price: '$200', image: require('../../assets/noventa.png')},
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detalhes', { tenis: item })}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const goToCarrinho = () => {
    navigation.navigate('Carrinho');
  };

  const goToSobreNos = () => {
    navigation.navigate('SobreNos');
  };

  const goToDescricao = () => {
    navigation.navigate('Descricao');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Tênis</Text>
      <Text style={styles.carrinhoText}>Itens no Carrinho: {quantidadeItens.toString()}</Text>  
      <TouchableOpacity style={styles.button} onPress={goToCarrinho}>
        <Text style={styles.buttonText}>Ir para o Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToSobreNos}>
        <Text style={styles.buttonText}>Sobre Nós</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToDescricao}>
        <Text style={styles.buttonText}>Descrição</Text>
      </TouchableOpacity>
      <FlatList
        data={Estoque}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carrinhoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#888',
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
