import React from "react";
import { View, Text, StyleSheet} from "react-native"

export default function Descricao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descrição dos Membros da Equipe</Text>
      <View style={styles.memberContainer}>
        <Text style={styles.memberName}>Nome do Membro 1</Text>
        <Text style={styles.memberRole}>Função: Desenvolvedor Front-end</Text>
        <Text style={styles.memberInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend turpis at mi blandit, sed tempor metus finibus. Ut rutrum aliquet ex sit amet lacinia.</Text>
      </View>
      <View style={styles.memberContainer}>
        <Text style={styles.memberName}>Nome do Membro 2</Text>
        <Text style={styles.memberRole}>Função: Desenvolvedor Back-end</Text>
        <Text style={styles.memberInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend turpis at mi blandit, sed tempor metus finibus. Ut rutrum aliquet ex sit amet lacinia.</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memberContainer: {
    marginBottom: 20,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 16,
    color: '#666',
  },
  memberInfo: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
  },
});