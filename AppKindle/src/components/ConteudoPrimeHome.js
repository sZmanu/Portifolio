import { Icon, Tab, TabView } from "@rneui/themed";
import React, {useState} from "react";
import { Text, View, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AirbnbRating } from '@rneui/themed';
import { forYou, lancamentos } from "./Livros";

export function MyTabs({ navigation, forYou, lancamentos, genre2, genre3 }) {
  const [index, setIndex] = useState(0);

  const tabs = [
    { title: "TUDO", width: 80 },
    { title: "EBOOKS", width: 100 },
    { title: "DESCUBRA", width: 120 },
    { title: "REVISTAS", width: 110 },
    { title: "FICÇÃO", width: 100 }
  ];

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          {tabs.map((tab, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={{
                backgroundColor: index === i ? '#fafafaff' : '#eeebebff',
                borderColor: index === i ? 'transparent' : '#d6d4d4ff',
                borderWidth: 1,
                width: tab.width,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: index === i ? '#111111ff' : '#131313fb',
                  fontWeight: index === i ? '700' : '500',
                }}
              >
                {tab.title}
              </Text>
              {/* Indicador */}
              {index === i && (
                <View style={{
                  height: 4,
                  backgroundColor: '#3081ccff',
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                }}/>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={{ flex: 1 }}>
        {index === 0 && (
          <View style={{backgroundColor: 'white', justifyContent: 'center', paddingLeft: 5, paddingVertical: 10, paddingTop: 25, marginBottom: 40}}>
            <Text style={{fontSize: 18, color: 'black', marginLeft: 10, fontWeight:'700'}}>
              Novidades no Amazon Prime
            </Text>
            <ScrollView horizontal>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {forYou[genre2].map((book) => (
                  <TouchableOpacity
                    key={book.id}
                    onPress={() => navigation.navigate('BookDetail', { book })}
                  >
                    <Image source={book.image} style={{ width: 150, height: 200, margin: 10, top: 5 }} />
                    <View style={{marginLeft:5, paddingLeft:5}}>
                      <Text style={{color:'black', fontSize: 15,fontWeight:'600'}}>{book.titulo}</Text>
                      <View style={{flexDirection: 'row', height: 23, alignItems: 'center', bottom: 1}}>
                        <Text style={{fontSize:14, fontWeight: '500', color:'black'}}>4,7</Text>
                        <AirbnbRating 
                          size={12}
                          isDisabled
                          reviews={''} 
                          starContainerStyle={{marginBottom: 9, marginLeft: 2}}
                        />
                        <Text style={{color: 'black', fontSize: 14, fontWeight: '500', marginLeft: 2}}>
                          {book.avaliacoes}
                        </Text>
                      </View>
                      <Image source={require('../images/primeImage.png')} style={{width:50, height: 14, right:3}}/>
                      <Text style={{color:'#5e5e5eff', fontWeight:'500'}}>eBook Kindle</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <Button
              textColor='#2360a7ff'
              icon='chevron-right'
              rippleColor={'transparent'}
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', paddingRight: 30, alignItems: 'center', marginTop: 5 }}
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
                data: forYou['livrosNovos'], 
                title: 'Novos livros' 
              })}
            >
              Veja mais
            </Button>
          </View>
        )}

        {index === 1 && (
          <View style={{backgroundColor: 'white', justifyContent: 'center', paddingLeft: 5, paddingVertical: 10, paddingTop: 25, marginBottom: 40,}}>
            <Text style={{fontSize: 18, color: 'black', marginLeft: 10, fontWeight:'700'}}>
              Novidades no Amazon Prime
            </Text>
            <ScrollView horizontal>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {lancamentos[genre3].map((book) => (
                  <TouchableOpacity
                    key={book.id}
                    onPress={() => navigation.navigate('BookDetail', { book })}
                  >
                    <Image source={book.image} style={{ width: 140, height: 200, margin: 10, top: 5 }} />
                    <View style={{marginLeft:5, paddingLeft:5, width: 140}}>
                      <Text style={{color:'black', fontSize: 15,fontWeight:'600'}}>{book.titulo}</Text>
                      <View style={{flexDirection: 'row', height: 23, alignItems: 'center', bottom: 1}}>
                        <Text style={{fontSize:14, fontWeight: '500', color:'black'}}>4,7</Text>
                        <AirbnbRating 
                          size={12}
                          isDisabled
                          reviews={''} 
                          starContainerStyle={{marginBottom: 9, marginLeft: 2}}
                        />
                        <Text style={{color: 'black', fontSize: 14, fontWeight: '500', marginLeft: 2}}>
                          {book.avaliacoes}
                        </Text>
                      </View>
                      <Image source={require('../images/primeImage.png')} style={{width:50, height: 14, right:3}}/>
                      <Text style={{color:'#5e5e5eff', fontWeight:'500'}}>eBook Kindle</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            <Button
              textColor='#2360a7ff'
              icon='chevron-right'
              rippleColor={'transparent'}
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', paddingRight: 30, alignItems: 'center', marginTop: 5}}
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
                data: lancamentos['livrosLancamentos'], 
                title: 'Novos livros' 
              })}
            >
              Veja mais
            </Button>
          </View>
        )}

        {index === 2 && (
          <View style={{ backgroundColor: 'green', height: 360, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Cart</Text>
          </View>
        )}

      </View>
    </>
  );
}

const ConteudoPrime = () => {
    const [verImagem, setVerImage] = useState(true)
    const [index, setIndex] = React.useState(0);
    const navigation = useNavigation();
    
    const [genre2, setGenre2] = useState('livrosNovos');
    const [genre3, setGenre3] = useState('livrosLancamentos');
    

    return(
        <ScrollView contentContainerStyle={{paddingBottom:60}}>
        <View style={{flex:1}}>
            <View style={styles.containerPesquisa}>
            <TextInput style={styles.pesquisa} placeholder="Pesquisar em Prime Reading">
            </TextInput>

            <View style={{backgroundColor: '#555555ff', width: 50, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='search' type="feather" size={20} color={'white'}/>
            </View>
            </View>
            <TouchableOpacity onPress={() => setVerImage(!verImagem)} activeOpacity={1}>
          {verImagem ? (
            <Image
              source={require('../images/imagePrime.jpeg')}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../images/imagePrime2.jpeg')}
              style={styles.image2}
            />
          )}
        </TouchableOpacity>
        <View style={{flexDirection: 'row', columnGap: 5, flexWrap: 'wrap', alignItems: 'center', marginTop: 10, marginLeft: 10, marginBottom: 30}}>
            <Text style={styles.text}>Navegue pelo catálogo</Text>
            <View style={{backgroundColor: 'black', height: 15, width: 1}}></View>
            <Text style={styles.text}>Saiba mais sobre Prime Reading</Text>
            <View style={{backgroundColor: 'black', height: 15, width: 1}}></View>
            <Text style={styles.text}>Ver minha biblioteca</Text>

        </View>

          <MyTabs
            navigation={navigation}       
            forYou={forYou}              
            lancamentos={lancamentos}     
            genre2={genre2}              
            genre3={genre3}               
          />
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    pesquisa: {
        backgroundColor: '#eeebebff',
        paddingHorizontal: 10,
        height: 40,
        width: '89%',
        fontSize: 15,
        fontWeight: '400'
    
    },
    containerPesquisa: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10, 
        flexDirection: 'row'
        
    },
    image: {
        width: '100%',
        height: 110
    },
    image2: {
        width: '100%',
        height: 256
    },
     text: {
        color: 'rgba(19, 100, 167, 1)',
        fontSize: 15
     }
})
export default ConteudoPrime;