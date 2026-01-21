import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import styles from "../styles";

import { Cardapio } from "../model/Cardapio";
import { CardapioService } from "../database/CardapioService";
import { useRoute } from "@react-navigation/native";

export default function CadastroCardapio() {
    const[formCardapio, setFormCardapio] = useState<Partial<Cardapio>>({});

    const route = useRoute();

    useEffect( () => {
        if (route.params) {
            setFormCardapio(route.params.cardapio)
        }
    }, [route.params])


    const salvar = async() => {
        if (formCardapio.id) {
            const updCardapio = new Cardapio(formCardapio);
            const resultado = await CardapioService.update(updCardapio);
            alert("Cardapio Atualizado!")
        } else {
            const novoCardapio = new Cardapio(formCardapio);
            const resultado = await CardapioService.create(novoCardapio);
            alert("Cardapio Cadastrado!")
        }
        limpar();
    }

    const limpar = () => {
        setFormCardapio({});
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Cardápios</Text>

            <TextInput 
                placeholder="Nome do cardápio" 
                style={styles.input} 
                onChangeText={ valor => setFormCardapio({
                    ...formCardapio, nome: valor
                })}
                value={formCardapio.nome}
            />

            <TextInput 
                placeholder="Descrição" 
                style={styles.input} 
                onChangeText={ valor => setFormCardapio({
                    ...formCardapio, descricao: valor
                })}
                value={formCardapio.descricao}
            />


            <TouchableOpacity style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>SALVAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={limpar}>
                <Text style={styles.botaoTexto}>LIMPAR</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
