import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    alignItems: 'center',
  },
    logo: {
    width: '100%', 
    height: 200, 
    marginBottom: 40, 
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#e59a59', 
  },
  descricao: {
  fontSize: 16,
  color: '#000000',
  marginBottom: 10,
  textAlign: 'center',
  paddingHorizontal: 20,
  lineHeight: 22,
},
imagemPromocao: {
  width: '100%',
  height: 200,
  marginBottom: 20,
  borderRadius: 10, 
},
subtitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#e59a59',
  marginBottom: 10,
  textAlign: 'center',
},
  input: {
    backgroundColor: '#e8e8e8',
    borderBottomColor: '#e59a59',
    borderBottomWidth: 2,
    padding: 10,
    width: '80%',
    marginBottom: 20,
    color: '#000000',
  },
  botao: {
    backgroundColor: '#e59a59', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '60%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff', 
    fontWeight: '900',
  },
  cardapioItem: {
  backgroundColor: '#ffffff',
  padding: 15,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 10,
  elevation: 2, // sombra leve no Android
},
cardapioTexto: {
  fontSize: 16,
  color: '#e59a59',
  marginBottom: 5,
},
cardapioLabel: {
  fontSize: 14,
  color: '#000000',
}
   
});
