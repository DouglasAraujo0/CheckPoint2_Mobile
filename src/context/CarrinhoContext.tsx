import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext({
  carrinho: [],
  quantidadeItens: 0,
  adicionarAoCarrinho: (item: any) => {},
  setQuantidadeItens: (quantidade: number) => {},
});

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeItens, setQuantidadeItens] = useState(0);

  useEffect(() => {
    const carregarCarrinhoSalvo = async () => {
      try {
        const carrinhoSalvo = await AsyncStorage.getItem('carrinho');
        if (carrinhoSalvo !== null) {
          const carrinhoParseado = JSON.parse(carrinhoSalvo);
          setCarrinho(carrinhoParseado);
          setQuantidadeItens(carrinhoParseado.length);
        }
      } catch (error) {
        console.error('Erro ao carregar o carrinho:', error);
      }
    };

    carregarCarrinhoSalvo();
  }, []);

  const adicionarAoCarrinho = (item) => {
    if (Array.isArray(item) && item.length === 0) {
      setCarrinho([]);
      setQuantidadeItens(0);
      salvarCarrinho([]);
    } else {
      const novoCarrinho = [...carrinho, { ...item }];
      setCarrinho(novoCarrinho);
      setQuantidadeItens(novoCarrinho.length);
      salvarCarrinho(novoCarrinho);
    }
  };


  const salvarCarrinho = async (carrinho) => {
    try {
      await AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
      console.log('Carrinho salvo com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar o carrinho:', error);
    }
  };

  
  return (
    <CarrinhoContext.Provider value={{ carrinho, quantidadeItens, adicionarAoCarrinho, setQuantidadeItens }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;
