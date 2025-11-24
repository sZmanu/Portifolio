import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button,} from '@rneui/themed';
import { Rating } from "react-native-ratings";
import { color } from '@rneui/base';


const TabCustom = ({ tabs, content }) => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <View style={styles.tabHeader}>
        {tabs.map((tab, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setIndex(i)}
            style={[styles.tabButton, index === i && styles.activeTab]}
          >
            <Text style={[styles.tabText, index === i && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conteúdo da aba */}
      <View style={styles.tabContent}>
        <ScrollView>
          {content[index]}
        </ScrollView>
      </View>
    </View>
  );
};

const BookDetailScreen = ({ route }) => {
    const { book } = route.params; 
    const [index, setIndex] = React.useState(0);

    return (
      
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 40}}>
        <View style={styles.containerTopo}>
        <Image source={book.image} style={styles.image} />
        <View style={styles.containerText}>
          <View style={{width:250}}>
        <Text style={styles.title} numberOfLines={0}>{book.titulo}</Text>
        </View>
        <Text style={styles.autor}>{book.autor}</Text>
        <View style={{flexDirection: 'row', height: 23, alignItems: 'center', bottom: 1,}}>
            <Text style={{fontSize: 13, color: '#245E9F', marginRight: 3}}>4,8</Text>
             <Rating
              type="star"
              fractions={1}
              startingValue={4}
              ratingCount={5}
              readonly={false}
              imageSize={13} 
              ratingColor='#ff8725ff'
              ratingBackgroundColor="#ffffffff" 
            
          
      />
           <Text style={{color: 'black', fontSize: 13, color: '#245E9F', marginLeft: 3 }}>({book.avaliacoes})</Text>
              </View>
              <Text style={{color: '#245E9F', fontSize: 15 }}>Livro 1 de 2</Text>
        <Text style={styles.preco}>{book.preco}</Text>
        <Text style={styles.descrition}>Compre na Amazon.com.br</Text>
        </View>
        </View>
        <Text style={{ fontSize: 15, marginTop: 13, color: 'black',}}>Adicione isso à sua lista para comprar na Amazon.com.br mais tarde.</Text>
        <Button title={"Adicionar à Lista"} containerStyle={{marginTop: 13}} titleStyle={{color: 'black'}} buttonStyle={{backgroundColor: '#eeb312ff'}}/>
        <Button title={"Envie amostra agora"} containerStyle={{marginTop: 10, marginBottom: 13}} buttonStyle={{backgroundColor: '#DFDCDC'}} titleStyle={{color: 'black'}}/>
        <Text style={{fontSize: 16, color: '#245E9F', textAlign: 'center', marginBottom: 15}}>Por que não consigo comprar pelo app?</Text>
        <View style={{height:1, backgroundColor: '#c7c7c7ff',  marginRight:5, marginLeft:5}}></View>

        <View style={{ borderTopWidth: 2, borderBottomWidth:2, borderTopColor: '#c7c7c7ff', borderBottomColor: '#c7c7c7ff', marginTop: 15,}}>
          <Text style={{fontSize: 24, fontWeight:'700', color:'black', marginBottom: 10, marginTop:10}}>Detalhes do livro</Text>
          <ScrollView horizontal={true}>
            <View style={styles.containerDetalhe2}>
              <Text style={styles.detText}>Número de páginas</Text>
              <Image source={require('../images/iconPage.jpeg')} style={{width:32, height:40, marginBottom:15, top: 8,}}/>
              <Text style={styles.detText3}>366 páginas</Text>
            </View>
            <View style={styles.containerDetalhe}>
              <Text style={styles.detText}>Idioma</Text>
              <Image source={require('../images/iconWorld.jpeg')} style={{width:32, height:40}}/>
              <Text style={styles.detText2}>Português</Text>
            </View>
            <View style={styles.containerDetalhe}>
              <Text style={styles.detText}>Editora</Text>
              <Image source={require('../images/iconEdit.jpeg')} style={{width:32, height:40}}/>
              <Text style={styles.detText2}>Bertrand</Text>
            </View>
            <View style={styles.containerDetalhe}>
              <Text style={styles.detText}>Acessibilidade</Text>
              <Image source={require('../images/iconAcess.jpeg')} style={{width:60, height:40}}/>
              <Text style={styles.detText3}>Saiba mais</Text>
            </View>
            <View style={styles.containerDetalhe}>
              <Text style={styles.detText}>Data da publicação</Text>
              <Image source={require('../images/iconCalendar.jpeg')} style={{width:32, height:40}}/>
              <Text style={styles.detText2}>20 de setembro</Text>
            </View>
          </ScrollView>
          <Text style={{color:'#2e4ca1ff', marginTop:20, marginBottom: 15}}>Ver todos os detalhes</Text>

        </View>
         
   <TabCustom
      tabs={['Descrição', 'Avaliações editoriais']}
      content={[
        <View style={{borderBottomColor: '#c7c7c7ff', borderBottomWidth:4, paddingBottom:20,}}>
        <Text style={{ fontSize: 16,color: 'black', marginTop: 10 }}>{book.descrition}</Text>
        </View>,
        <View style={{borderBottomColor: '#c7c7c7ff', borderBottomWidth:4, paddingBottom:20}}>
          <Text style={{color:'black', fontSize:20, fontWeight: '600', marginTop:15, marginBottom:5}}>Sobre o Autor</Text>
        <Text style={{ fontSize: 16, color: 'black' }}>{book.autor} é um escritor apaixonado por histórias que conectam pessoas. Desde cedo desenvolveu o gosto pela leitura e pela escrita, encontrando nas palavras uma forma de expressar ideias e emoções. Ao longo de sua trajetória, participou de projetos literários, publicou contos em coletâneas e vem se dedicando à criação de obras que unem criatividade, reflexão e entretenimento. Seu objetivo é inspirar leitores a explorarem novos mundos e perspectivas por meio da literatura</Text>
        </View>
      ]}
    />
    <View style={{marginTop: 15, height:350}}>
      <Text style={{color:'black', fontWeight:'600', fontSize: 20}}>Detalhes do produto</Text>
      <View style={styles.item}>
        <Text style={styles.label}>ASIN: </Text>
        <Text style={styles.value}>B0BXBG35DJ</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Editora: </Text>
        <Text style={styles.value}>Essência</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Data da publicação: </Text>
        <Text style={styles.value}>24 março 2023</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Edição: </Text>
        <Text style={styles.value}>1ª</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Idioma: </Text>
        <Text style={styles.value}>Português</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Tamanho do arquivo: </Text>
        <Text style={styles.value}>4.8 MB</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Leitor de tela: </Text>
        <Text style={styles.value}>Compatível</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Configuração de fonte: </Text>
        <Text style={[styles.value, styles.link]}>Habilitado</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Dicas de vocabulário: </Text>
        <Text style={[styles.value, styles.link]}>Não habilitado</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Número de páginas: </Text>
        <Text style={styles.value}>408 páginas</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>ISBN-13: </Text>
        <Text style={styles.value}>978-8542221404</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Page Flip: </Text>
        <Text style={[styles.value, styles.link]}>Habilitado</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Idade de leitura: </Text>
        <Text style={styles.value}>14 anos a acima</Text>
      </View>
    </View>
    <View style={{height:1, backgroundColor: '#c7c7c7ff', marginBottom: 10}}></View>

    <View style={{marginBottom: 50, borderBottomColor: '#c7c7c7ff', borderBottomWidth:2, paddingBottom:20}}>
      <Text style={{fontSize:20, color:'black', fontWeight:'600'}}>Sobre o autor</Text>
      <Text style={{fontSize:16, color:'black',}}>Siga autores para obter atualizações de novos lançamentos e recomendações</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginTop:20}}>
        <Image source={require('../images/autor.jpeg')} style={{width:95, height:95, borderRadius:50}}/>
        <View style={{right:20}}>
          <Text style={{color:"#0073bb", fontSize: 20, marginBottom: 15, }}>{book.autor}</Text>
          <View style={{width: 250, backgroundColor:'#e7e7e7ff', justifyContent:'center', alignItems:'center', height:50}}>
            <Text style={{fontSize:18, color:'black'}}>Seguir</Text>
          </View>
        </View>
      </View>
    </View>
      </ScrollView>
      </View>
     
     
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',

  },
    item: {
    flexDirection: "row",
    marginBottom: 1,
    flexWrap: "wrap",
  },
label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
  link: {
    color: "#0073bb", 
  },
  containerTopo: {
    flexDirection: 'row',
    left: 25

  },
  containerText:{
    paddingLeft: 20,
  },
  image: {
    width: 110,
    height: 170,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  fontWeight: 'bold',
  color: 'black',
  flexShrink: 1, 
  flexWrap: 'wrap',
   
  },
  descrition: {
    fontSize: 15,
    color: 'black',
  },
  autor:{
    color: '#245E9F',
    fontSize: 15
  },
  preco: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',

  },
   tabHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabText: {
    fontWeight: '400',
    fontSize: 16,
    color: "#245E9F",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#245E9F",
  },
  activeTabText: {
  fontWeight: '400',
    color: "#245E9F",
  },
  tabContent: {
    flex: 1,
  },
  detText:{
  fontSize: 15,
  color: 'black',
  width: 100,
  textAlign:'center'
},
detText2:{
  fontSize: 15,
  fontWeight:'700',
  color:'black'
},
detText3:{
  fontSize: 15,
  fontWeight:'700',
  color:'#245E9F'
},
containerDetalhe:{
  borderLeftColor:'#b8b8b8ff', 
  borderLeftWidth: 1, 
  rowGap:15, 
  padding:15, 
  justifyContent:'center', 
  alignItems:'center'
},
containerDetalhe2:{
  borderLeftColor:'#b8b8b8ff', 
  borderLeftWidth: 1, 
  padding:15, 
  justifyContent:'center', 
  alignItems:'center'
}
});

export default BookDetailScreen;