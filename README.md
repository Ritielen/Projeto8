# Sistema de cadastro de cardápio para restaurantes

Aplicativo mobile desenvolvido em **React Native** com **TypeScript** e **Expo**, com persistência de dados local via **SQLite**. O projeto simula um cadastro de cardápio para um restaurante, lista os cardápios e apresenta a tela promoções e a tela home restaurante.

## 📌 Visão Geral

O objetivo do projeto é praticar desenvolvimento mobile realista, integrando:

- Navegação entre telas
- Persistência de dados offline
- Modelagem de entidades com TypeScript
- UI responsiva com formulários, listas e mapas
- Boas práticas de arquitetura e separação de responsabilidades

O projeto está **em desenvolvimento**, mas já contém funcionalidades essenciais de cadastro, listagem e navegação.

## 🛠️ Tecnologias Utilizadas

- React Native  
- TypeScript  
- Expo  
- SQLite (`expo-sqlite`)  
- React Navigation (`DrawerNavigator`)  
- react-native-maps  
- StyleSheet centralizado (`styles.js`)  

## ⚙️ Funcionalidades Implementadas

- Cadastro de cardápio (CRUD)  
- Listagem de itens do cardápio com edição e exclusão  
- Informações de promoções do restaurante
- Visualização de filiais em mapa e lista  
- Tela “Sobre” apresentando o restaurante  
- Persistência local com SQLite  
- Navegação entre telas via **Drawer Navigator**

## 📂 Estrutura do Projeto

```text
📁 Projeto08
 ┣ 📁 assets           # Imagens e ícones
 ┣ 📁 database         # Camada de persistência (SQLite)
 ┃ ┣ Database.tsx
 ┃ ┗ CardapioService.tsx
 ┣ 📁 model            # Modelos de dados
 ┃ ┗ Cardapio.tsx
 ┣ 📁 screens          # Telas do aplicativo
 ┃ ┣ Cardapio.tsx
 ┃ ┣ CardapioListar.tsx
 ┃ ┣ Home.tsx
 ┃ ┣ Promocao.tsx
 ┃ ┗ Restaurantes.tsx
 ┣ 📄 app.tsx          # Entrada do app e navegação
 ┣ 📄 index.ts         # Registro do root component
 ┣ 📄 app.json         # Configuração do Expo
 ┣ 📄 package.json     # Dependências do projeto
 ┣ 📄 package-lock.json
 ┣ 📄 tsconfig.json    # Configuração do TypeScript
 ┗ 📄 styles.js        # Estilos centralizados
