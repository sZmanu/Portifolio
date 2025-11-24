import React from 'react';
import { Tab, Icon} from '@rneui/themed';
import { View, Text, ScrollView } from "react-native";
import BarraPesquisa from "../BarraPesquisa";
import { LivroGaleria } from '../LivroBiblioteca';


function Tela2() {
  const [index, setIndex] = React.useState(0);

  const livros = [
    {
      image: require("../../images/percy3.jpg"),
      titulo: "Percy Jackson e o ladrão de raios",
      autor: "Rick Riordan",
      mb: "2 MB",
    },
    {
      image: require("../../images/percy5.jpg"),
      titulo: "Percy Jackson e o último olímpiano",
      autor: "Rick Riordan",
      mb: "3 MB",
    },
    {
      image: require("../../images/rainhaVermelha.jpg"),
      titulo: "A Rainha vermelha",
      autor: "Victoria Aveyard",
      mb: "2 MB",
    },
    {
      image: require("../../images/jardimSecreto.jpg"),
      titulo: "O Jardim secreto",
      autor: "Frances Hodgson",
      mb: "3 MB",
    },
    {
      image: require("../../images/homeGiz.jpg"),
      titulo: "O homem de giz",
      autor: "C. J. Tudor",
      mb: "2 MB",
    },
  ];


  const livrosAll = livros.slice(0, 3); 
  const livrosDownloaded = livros.slice(-2);

  return (
    <View style={{ flex: 1, backgroundColor: "#eeebebff" }}>
      <BarraPesquisa />

      <View
        style={{
          height: 55,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderTopColor: "#d6d6d6",
          borderBlockColor: "#d6d6d6",
          backgroundColor: "white",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon name="filter" type="material-community" />
        <Tab
          value={index}
          onChange={setIndex}
          dense
          style={{ width: "65%" }}
          indicatorStyle={{
            backgroundColor: "#245E9F",
            bottom: -5,
          }}
        >
          <Tab.Item
            titleStyle={{ fontSize: 16, color: "black" }}
          >
            TODOS
          </Tab.Item>
          <Tab.Item
            titleStyle={{ fontSize: 16, color: "black" }}
          >
            BAIXADO
          </Tab.Item>
        </Tab>
        <Icon name="segment" type="material-community" />
      </View>

      {/* Conteúdo das Tabs */}
      <ScrollView style={{ marginBottom: 40 }}>
        <View style={{ padding: 20 }}>
          {index === 0 &&
            livrosAll.map((livro, i) => (
              <LivroGaleria
                key={i}
                imageGaleria={livro.image}
                titulo={livro.titulo}
                autor={livro.autor}
              />
            ))}

          {index === 1 &&
            livrosDownloaded.map((livro, i) => (
              <LivroGaleria
                key={i}
                imageGaleria={livro.image}
                titulo={livro.titulo}
                autor={livro.autor}
                mb={livro.mb}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Tela2;