import React, {useState} from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { books, lancamentos, forYou } from './Livros';

const ConteudoKindle = () => {
     const [selectedGenre, setSelectedGenre] = useState('prime');
      const [genre2, setGenre2] = useState('livrosNovos');
      const [genre3, setGenre3] = useState('livrosLancamentos');
    

    const navigation = useNavigation();
    return(
        <View>
            <ScrollView>
                <View style={{backgroundColor:'#eeebebff', paddingTop: 10}}>
            <Image source={require('../images/kindleBanner.jpeg')} style={{width:'100%', height: 250}}/>

              <View style={{height: 285, backgroundColor: 'white', justifyContent: 'center', marginTop: 10, paddingLeft: 10, paddingVertical: 10}}>
    <Text style={{fontSize: 13, color: 'black', marginLeft: 5, }}>Ficção clássica no Kindle Unlimited</Text>
    <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {forYou[genre2].map((book) => (
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

               <View style={{ backgroundColor: 'white', marginTop: 10, marginBottom: 10}}>
               <LinearGradient
        colors={['#ffffffff', '#fcfbf9ff', '#fff1e3ff']}
    >
                 <View style={{paddingVertical: 5, paddingLeft: 5,}}>
                   <View style={{marginLeft:5, marginTop:5, alignItems: 'center', width: 300, alignSelf: 'center'}}>
                      <Text style={{fontSize:24, color:'#131313ff', fontWeight: '450', textAlign: 'center'}}>Principais leituras no Kindle Unlimited</Text>
                   
                   </View>
                  
                    <ScrollView horizontal={true}>
                           <View style={{ marginTop:15, marginBottom: 10, flexDirection: 'column', rowGap: 5 }}>
                     <View style={{ flexDirection: 'row', columnGap: 10, padding: 5 }}>
                         <TouchableOpacity
                           onPress={() => setSelectedGenre('prime')}
                           style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'prime' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'prime' ? 3 : 1,
                                backgroundColor: selectedGenre === 'prime' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'prime' ? '600' : '400'}]}>Tudo</Text>
                   </TouchableOpacity>
           
                        <TouchableOpacity
                           onPress={() => setSelectedGenre('romance')}
                           style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'romance' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'romance' ? 3 : 1,
                                backgroundColor: selectedGenre === 'romance' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'romance' ? '600' : '400'}]}>Romance</Text>
                   </TouchableOpacity>
             
                         <TouchableOpacity
                           onPress={() => setSelectedGenre('literaturaFiccao')}
                           style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'literaturaFiccao' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'literaturaFiccao' ? 3 : 1,
                                backgroundColor: selectedGenre === 'literaturaFiccao' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'literaturaFiccao' ? '600' : '400'}]}>Literatura e ficçao</Text>
                   </TouchableOpacity>
             
                        <TouchableOpacity
                           onPress={() => setSelectedGenre('terror')}
                           style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'terror' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'terror' ? 3 : 1,
                                backgroundColor: selectedGenre === 'terror' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'terror' ? '600' : '400'}]}>Terror</Text>
                   </TouchableOpacity>
                       </View>
                     <View style={{ flexDirection: 'row', columnGap: 10, padding: 5 }}>
                         <TouchableOpacity
                           onPress={() => setSelectedGenre('maisVendido')}
                          style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'maisVendido' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'maisVendido' ? 3 : 1,
                                backgroundColor: selectedGenre === 'maisVendido' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'maisVendido' ? '600' : '400'}]}>Livros mais vendidos</Text>
                   </TouchableOpacity>
             
                        <TouchableOpacity
                           onPress={() => setSelectedGenre('fantasiaFiccao')}
                           style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'fantasiaFiccao' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'fantasiaFiccao' ? 3 : 1,
                                backgroundColor: selectedGenre === 'fantasiaFiccao' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'fantasiaFiccao' ? '600' : '400'}]}>Ficção científica e fantasia</Text>
                   </TouchableOpacity>
             
                         <TouchableOpacity
                           onPress={() => setSelectedGenre('misterioSuspense')}
                           style={[
                            styles.button,
                            {
                                borderColor: selectedGenre === 'misterioSuspense' ? '#126E7F' : '#575757ff',
                                borderWidth: selectedGenre === 'misterioSuspense' ? 3 : 1,
                                backgroundColor: selectedGenre === 'misterioSuspense' ? '#e5f8fdff' : '#fcfcfcff'
                            },
                            ]}
                   >
                     <Text style={[styles.textBtn, {fontWeight: selectedGenre === 'misterioSuspense' ? '600' : '400'}]}>Mistério e suspense</Text>
                   </TouchableOpacity>
             
                       </View>
                   </View>
                   </ScrollView>
                   {selectedGenre && (
                     <View>
                       <ScrollView horizontal={true}>
                   <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                     {books[selectedGenre].map((book, index) => (
                       <TouchableOpacity
                         key={book.id}
                         onPress={() => navigation.navigate('BookDetail', { book })} 
                       >
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontSize: 25, top: 25, color: 'black', fontWeight: '600'}}>{index + 1}</Text>
                         <View
                    style={{
                      marginHorizontal: 10,
                      alignItems: 'flex-end',
                      marginTop: 10,
                      marginBottom: 30,
                    }}
                  >
                    <Image source={require('../images/kindle.png')} style={{ width: 100, height: 15 }}/>

                    <View
                      style={{
                        width: 100,
                        height: 150,
                        marginTop: 5,
                        backgroundColor: '#fff',     
                        shadowColor: '#000',
                        shadowOpacity: 0.20,
                        shadowRadius: 4,
                        shadowOffset: { width: 2, height: 2 },
                        elevation: 5,           
                      }}
                    >
                      <Image
                        source={book.image}
                        style={{ width: '100%', height: '100%'}}
                      />
                    </View>
                  </View>

              </View>
                       </TouchableOpacity>
                     ))}
                   </View>
                 </ScrollView>
                     </View>
                   )}
                 </View>
                 </LinearGradient>
               </View>

            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 28, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 17,
    height: 35
  },
  textBtn: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600'
  }


})
export default ConteudoKindle;