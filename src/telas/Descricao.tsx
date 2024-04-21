import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Descricao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHECKPOINT 2 MOBILE</Text>
      <View style={styles.memberContainer}>
        <Text style={styles.memberText}>Realizado por:</Text>
        <Text style={styles.memberName}>Douglas Magalhães de Araújo</Text>
        <Text style={styles.memberText}>RM: 552008</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  memberContainer: {
    alignItems: 'center',
  },
  memberText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  memberName: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});
