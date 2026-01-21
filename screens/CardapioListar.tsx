import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList, Button, Alert } from "react-native";
import styles from "../styles";

import { Cardapio } from "../model/Cardapio";
import { CardapioService } from "../database/CardapioService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";

export default function ListarCardapio() {
    const [dados, setDados] = useState({})
    const [load, setLoad] = useState(true)

    const navigation = useNavigation();

    useFocusEffect( 
        React.useCallback(() => {
            Carregar();
        }, [])
    )

    const Carregar = async() =>{
        try {
            const resultado = await CardapioService.findAll();
            setDados(resultado);
            setLoad(false)
        } catch {

        }
    }

    const editar = (item : Cardapio) => {
        navigation.navigate("Cadastro de Cardápios", {cardapio: item})
    }

    const excluir = async (cardapio: Cardapio) => {
  try {
    await CardapioService.delete(cardapio); 
    alert("Cardápio excluído com sucesso!");
    await Carregar(); 
  } catch (error) {
    console.error(error);
    alert("Erro ao excluir cardápio!");
  }
};

    const confirmarExclusao = (item: Cardapio) => {
  Alert.alert(
    "Excluir cardápio",
    `Deseja realmente excluir "${item.nome}"?`,
    [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", onPress: () => excluir(item) }
    ]
  );
};

    return (
        <View>
            <FlatList 
                data={dados}
                keyExtractor={item => item.id}
                renderItem={ ({item} : {item:Cardapio}) => 
                    <TouchableOpacity
                    style={styles.cardapioItem}
                        onPress={ () => editar(item) }
                        onLongPress={ () => excluir(item) }
                        onLongPress={() => confirmarExclusao(item)}
                    >
     <Text style={styles.cardapioTexto}>ID: <Text style={styles.cardapioLabel}>{item.id}</Text></Text>
      <Text style={styles.cardapioTexto}>Nome: <Text style={styles.cardapioLabel}>{item.nome}</Text></Text>
      <Text style={styles.cardapioTexto}>Descrição: <Text style={styles.cardapioLabel}>{item.descricao}</Text></Text>
                    </TouchableOpacity>
                }
                onRefresh={() => Carregar()}
                refreshing={load}
            />
        </View>
    )

}
