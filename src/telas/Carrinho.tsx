import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import CarrinhoContext from '../context/CarrinhoContext';

const Carrinho = ({ navigation }) => {
  const { carrinho, adicionarAoCarrinho, setQuantidadeItens } = useContext(CarrinhoContext);
  const [carrinhoComChavesUnicas, setCarrinhoComChavesUnicas] = useState([]);

  useEffect(() => {
    const carrinhoAtualizado = carrinho.map((item, index) => ({
      ...item,
      id: item.id + '_' + index,
    }));
    setCarrinhoComChavesUnicas(carrinhoAtualizado);
  }, [carrinho]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            adicionarAoCarrinho([]);
            setQuantidadeItens(0); 
            navigation.goBack();
          }}
          title={`Limpar (${carrinho.length})`} 
          color="#fff"
        />
      ),
    });
  }, [navigation, adicionarAoCarrinho, setQuantidadeItens, carrinho.length]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <FlatList
        data={carrinhoComChavesUnicas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        title="Finalizar Compra"
        onPress={() => {
          adicionarAoCarrinho([]);
          setQuantidadeItens(0); 
          alert('Compra finalizada com sucesso!');
        }}
      />
      <Button
        title="Esvaziar Carrinho"
        onPress={() => {
          adicionarAoCarrinho([]);
          setQuantidadeItens(0); 
        }}
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
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
});

export default Carrinho;
