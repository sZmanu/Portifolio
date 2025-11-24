import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AirbnbRating } from '@rneui/themed';
import { forYou } from '../Livros';
import { explore } from '../Livros';
import BarraPesquisa from '../BarraPesquisa';


const Tela3 = () => {
  const navigation = useNavigation();
  const [genre2, setGenre2] = useState('livrosNovos');
  const [selectGenre, setSelectGenre] = useState('livrosExplore');

return(
<View style={{flex: 1, backgroundColor: 'white'}}>
    <Text style={{fontSize: 16, marginLeft: 13, marginTop: 21}}>DISCOVER NEW BOOKS</Text>
    <BarraPesquisa/>


    <View style={{height: 265, backgroundColor: 'white', justifyContent: 'center', marginTop: 30, paddingLeft: 20, paddingVertical: 10}}>
    <Text style={{fontSize: 16, color: 'black', marginLeft: 10}}>Mais livros para explorar</Text>
    <Divider style={{color: '#d6d6d6', top: 7, marginRight: 20, marginLeft: 10}}/>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {forYou[genre2].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
              <Image source={book.image} style={{ width: 120, height: 170, margin: 10, top: 5, }} />
              <View>
             <View style={{flexDirection: 'row', height: 23, alignItems: 'center', bottom: 1, marginLeft:5}}>
            <AirbnbRating 
            size={11}
            isDisabled={true}
            reviews={''}
            starContainerStyle={{marginBottom: 9}}
           />
           <Text style={{color: 'black', fontSize: 10, }}>({book.avaliacoes})</Text>
              </View>
              <Text style={{marginLeft: 10}}>{book.preco}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
      <Divider style={{color: '#d6d6d6', top: 7, marginRight: 20, marginLeft: 10}}/>
            <Button
              textColor='#308CF4'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', paddingRight: 30, alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('MoreBooks', { genre: genre2 })}
            >
              See All
            </Button>
          </View>
        
      </View>


    <View style={{height: 265, backgroundColor: 'white', justifyContent: 'center', marginTop: 60, paddingLeft: 20, paddingVertical: 10}}>
    <Text style={{fontSize: 16, color: 'black', marginLeft: 10}}>Preferidos entre os leitores</Text>
    <Divider style={{color: '#d6d6d6', top: 7, marginRight: 20, marginLeft: 10}}/>
    {selectGenre && (
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {explore[selectGenre].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
             <Image source={book.image} style={{ width: 120, height: 170, margin: 10, top: 5 }} />
            <View>
             <View style={{flexDirection: 'row', height: 23, alignItems: 'center', bottom: 1, marginLeft:5}}>
            <AirbnbRating 
            size={11}
            isDisabled={true}
            reviews={''}
            starContainerStyle={{marginBottom: 9}}
           />
           <Text style={{color: 'black', fontSize: 10, }}>({book.avaliacoes})</Text>
              </View>
              <Text style={{marginLeft: 10}}>{book.preco}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
      <Divider style={{color: '#d6d6d6', top: 7, marginRight: 20, marginLeft: 10}}/>
            <Button
              textColor='#308CF4'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', paddingRight: 30, alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('MoreBooks', { genre: selectGenre })}
            >
              See All
            </Button>
          </View>
        )}
      </View>
  </View>
  
)
}
export default Tela3;
