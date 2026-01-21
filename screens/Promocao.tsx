import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function Promocao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>PROMOÇÕES!</Text>

      <Text style={styles.subtitulo}>Happy Hour!</Text>
      <Text style={styles.descricao}>
        Todo sábado: Rodízio de caipirinhas por R$59{"\n"}
        Toda sexta-feira: Double chopp Heineken por R$35
      </Text>

      <Image
        source={require('../assets/capira.jpg')}
        style={styles.imagemPromocao}
      />

      <Text style={styles.subtitulo}>Sobremesa grátis para aniversariantes!</Text>
      <Text style={styles.descricao}>
        Comemore com a gente e ganhe uma sobremesa à sua escolha em nosso cardápio.{"\n"}
        A condição é válida com apresentação de documento com foto.
      </Text>

      <Image
        source={require('../assets/doce.jpg')}
        style={styles.imagemPromocao}
      />
    </View>
  );
}
