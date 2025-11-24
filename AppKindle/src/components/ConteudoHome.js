import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Button } from 'react-native-paper';
import BarraPesquisa from './BarraPesquisa';
import { StyleSheet } from 'react-native';
import { Todos } from './ConteudoTodosHome';
import ConteudoPrime from './ConteudoPrimeHome';
import ConteudoKindle from './ConteudoKindleHome';
import ConteudoRomance from './ConteudoRomanceHome';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const BookApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedGenre, setSelectedGenre] = useState('romance');

  const navigation = useNavigation();

   function renderCategoria() {
    if (selectedCategory === 'todos') {
      return <Todos selectedGenre={selectedGenre} />;
    }
    if (selectedCategory === 'conteudoKindle') {
      return <ConteudoKindle selectedGenre={selectedGenre} />;
    }
    if (selectedCategory === 'conteudoRomance') {
      return <ConteudoRomance selectedGenre={selectedGenre} />;
    }
    return null;
  }
  
  
  return (
    <ScrollView style={{marginBottom: 70}}>
    <View style={{flex:1, backgroundColor: '#DFDCDC'}}>
      <BarraPesquisa />
      <View style={{backgroundColor: 'white', paddingBottom: 10}}>
        <View style={{height:1, backgroundColor: '#c7c7c7ff', marginBottom: 10}}></View>
        <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', columnGap: 10, paddingLeft: 5}}>
           <LinearGradient
        colors={['#f32b24ff', '#f86c1bff', '#259e2fff']}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
    >
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: 34, paddingHorizontal: 16, backgroundColor: 'white', borderColor: 'white', borderWidth: 2}} activeOpacity={1}>
          <Text style={styles.textBtn}>Explorar</Text>
        </TouchableOpacity>
        </LinearGradient>
        <View style={{backgroundColor: '#292929ff', width: 1, height: 30, top: 3}}></View>
            <TouchableOpacity style={[
              styles.button,
              {
                borderColor: selectedCategory === 'todos' ? '#126E7F' : '#575757ff',
                borderWidth: selectedCategory === 'todos' ? 3 : 1,
                backgroundColor: selectedCategory === 'todos' ? '#e5f8fdff' : '#fcfcfcff'
              },
            ]} onPress={() => setSelectedCategory('todos')}>
          <Text style={[styles.textBtn, {fontWeight: selectedCategory === 'todos' ? '600' : '400'}]}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
              styles.button,
              {
                borderColor: selectedCategory === 'conteudoPrime' ? '#126E7F' : '#575757ff',
                borderWidth: selectedCategory === 'conteudoPrime' ? 3 : 1,
                backgroundColor: selectedCategory === 'conteudoPrime' ? '#e5f8fdff' : '#fcfcfcff', flexDirection: 'row',
                width: 160, 
              },
            ]}  onPress={() => navigation.navigate('DESCOBRIR NOVOS LIVROS')} >
          <Text style={[styles.textBtn, {fontWeight: selectedCategory === 'conteudoPrime' ? '600' : '400', marginLeft: 4}]}>Prime Reading</Text>
          <Icon type='material' name='chevron-right' style={{left: 2}}/>
            
        </TouchableOpacity>
        <TouchableOpacity style={[
              styles.button,
              {
                borderColor: selectedCategory === 'conteudoKindle' ? '#ff9e20ff' : '#575757ff',
                borderWidth: selectedCategory === 'conteudoKindle' ? 3 : 1,
                backgroundColor: selectedCategory === 'conteudoKindle' ? '#fdeddeff' : '#fcfcfcff',
                
              },
            ]} onPress={() => setSelectedCategory('conteudoKindle')}>
          <Text style={[styles.textBtn, {fontWeight: selectedCategory === 'conteudoKindle' ? '600' : '400'}]}>Kindle Unlimited</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
              styles.button,
              {
                borderColor: selectedCategory === 'conteudoRomance' ? '#126E7F' : '#575757ff',
                borderWidth: selectedCategory === 'conteudoRomance' ? 3 : 1,
                backgroundColor: selectedCategory === 'conteudoRomance' ? '#e5f8fdff' : '#fcfcfcff'
              },
            ]} onPress={() => setSelectedCategory('conteudoRomance')}>
          <Text style={[styles.textBtn, {fontWeight: selectedCategory === 'conteudoRomance' ? '600' : '400'}]}>Romance</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </View>
    
    {renderCategoria()}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius:23, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 17,
    height: 34
  },
  gradientBorder: {
    padding: 0.9, 
     justifyContent: 'center',
      alignItems: 'center',
  },
  textBtn: {
    fontSize: 13,
    color: 'black',
    fontWeight: '600'
  }


})


export default BookApp;