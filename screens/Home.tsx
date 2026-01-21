import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo2.jpg')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Bem-vindo ao restaurante Fogo na Brasa!</Text>

     <Text style={styles.descricao}>
        O restaurante Fogo na Brasa é o destino ideal para quem aprecia carnes assadas no ponto perfeito.{"\n"} 
        Além dos pratos principais, oferece uma seleção irresistível de sobremesas e drinks variados.{"\n"}
        O restaurante também realiza reservas para eventos privados com atendimento personalizado.
      </Text>
    </View>
  );
}
