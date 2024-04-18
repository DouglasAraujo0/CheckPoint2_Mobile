import React, { createContext, useState, ReactNode } from 'react';

interface CarrinhoContextType {
  carrinho: any[];
  adicionarAoCarrinho: (produto: any) => void;
}

const CarrinhoContext = createContext<CarrinhoContextType>({
  carrinho: [],
  adicionarAoCarrinho: () => {},
});

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  const adicionarAoCarrinho = (produto: any) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;
