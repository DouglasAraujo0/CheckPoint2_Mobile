import React from "react";
import { View, Text, StyleSheet} from "react-native"

export default function Descricao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHECKPOINT 2 - MOBILE</Text>
      <View style={styles.memberContainer}>
        <Text style={styles.memberName}>Realizado por Douglas Magalhães de Araújo - RM 552008</Text>
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