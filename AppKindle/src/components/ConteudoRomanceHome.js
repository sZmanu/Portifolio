import React, {useState} from "react";
import { Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { books, lancamentos, forYou } from './Livros';

const ConteudoRomance = () => {
    const [genre2, setGenre2] = useState('romance');
    const [genre3, setGenre3] = useState('livrosLancamentos');

    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: '#eeebebff'}}>
            <ScrollView>
            <View style={{height: 285, backgroundColor: 'white', justifyContent: 'center', marginTop: 10, paddingLeft: 10, paddingVertical: 10}}>
    <Text style={{fontSize: 13, color: 'black', marginLeft: 5, marginTop: 10}}>Mais vendidos</Text>
    <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {lancamentos[genre3].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
                <View style={{marginHorizontal: 5, alignItems: 'flex-end', marginTop: 10}}>
                <Image source={require('../images/kindle.png')} style={{width:80, height:13}}/>
              <Image source={book.image} style={{ width: 100, height: 150, top: 5 }} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
       <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
            <Button
              textColor='#2360a7ff'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
              data: forYou['livrosNovos'], 
              title: 'Novos livros' 
            })}
            >
             Ver tudo
            </Button>
          </View>
           </View>

           <View style={{height: 285, backgroundColor: 'white', justifyContent: 'center', marginTop: 10, paddingLeft: 10, paddingVertical: 10}}>
    <Text style={{fontSize: 13, color: 'black', marginLeft: 5, marginTop: 10}}>Lançamentos</Text>
    <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {books[genre2].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
                <View style={{marginHorizontal: 5, alignItems: 'flex-end', marginTop: 10}}>
                <Image source={require('../images/kindle.png')} style={{width:90, height:13}}/>
              <Image source={book.image} style={{ width: 100, height: 150, top: 5 }} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
       <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
            <Button
              textColor='#2360a7ff'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
              data: forYou['livrosNovos'], 
              title: 'Novos livros' 
            })}
            >
             Ver tudo
            </Button>
          </View>
           </View>

           <View style={{height: 285, backgroundColor: 'white', justifyContent: 'center', marginTop: 10, paddingLeft: 10, paddingVertical: 10, marginBottom: 10}}>
    <Text style={{fontSize: 13, color: 'black', marginLeft: 5, marginTop: 10}}>Com base no seu histórico de navegação</Text>
    <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {books.terror.map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
                <View style={{marginHorizontal: 5, alignItems: 'flex-end', marginTop: 10}}>
                <Image source={require('../images/primeImage.png')} style={{width:50, height:13}}/>
              <Image source={book.image} style={{ width: 100, height: 150, top: 5 }} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
       <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
            <Button
              textColor='#2360a7ff'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
              data: forYou['livrosNovos'], 
              title: 'Novos livros' 
            })}
            >
             Ver tudo
            </Button>
          </View>
           </View>
           </ScrollView>
        </View>
    )
}
export default ConteudoRomance;