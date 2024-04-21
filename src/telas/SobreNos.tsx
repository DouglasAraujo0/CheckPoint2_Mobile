  import React from "react";
  import { View, Text, StyleSheet, ScrollView } from "react-native";

  export default function SobreNos() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Nossa Loja de Tênis</Text>
          <Text style={styles.sectionContent}>
            Nossa loja de tênis é apaixonada por oferecer os melhores produtos
            para os amantes do esporte e da moda. Trabalhamos com as melhores
            marcas e estamos comprometidos em fornecer a mais alta qualidade e
            variedade em nosso catálogo.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa Missão</Text>
          <Text style={styles.sectionContent}>
            Nossa missão é inspirar e equipar atletas e entusiastas de todas as
            idades e níveis de habilidade, fornecendo produtos excepcionais e um
            serviço excepcional.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa Visão</Text>
          <Text style={styles.sectionContent}>
            Queremos ser reconhecidos como a melhor loja de tênis do país,
            oferecendo uma experiência de compra inigualável e construindo
            relacionamentos duradouros com nossos clientes.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Entre em Contato</Text>
          <Text style={styles.sectionContent}>
            Estamos sempre aqui para ajudar! Se você tiver alguma dúvida,
            sugestão ou precisar de assistência, não hesite em nos contatar
            através do email: contato@lojatênis.com.br.
          </Text>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    sectionContent: {
      fontSize: 16,
      lineHeight: 24,
    },
  });
