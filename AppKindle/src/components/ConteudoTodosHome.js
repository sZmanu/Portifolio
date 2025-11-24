import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { books, lancamentos, forYou } from './Livros';
import Teste from './Teste';


export function Todos (){
  const [selectedGenre, setSelectedGenre] = useState('prime');
  const [genre2, setGenre2] = useState('livrosNovos');
  const [genre3, setGenre3] = useState('livrosLancamentos');
  const [selected, setSelected] = useState('');

  LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

    const navigation = useNavigation();

  return (
    <View style={{backgroundColor:'#eeebebff'}}>
      <Teste/>
      <View style={{height: 285, backgroundColor: 'white', justifyContent: 'center', marginTop: 10, paddingLeft: 5, paddingVertical: 10}}>
    <Text style={{fontSize: 16, color: 'black', marginLeft: 5, marginTop: 10}}>Outros Similares aos Seus Livros Recentes</Text>
    <Text style={{fontStyle: 'italic', marginLeft: 5}}>Toque em uma categoria ou capa de livro</Text>
    <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {forYou[genre2].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
              <Image source={book.image} style={{ width: 100, height: 150, margin: 10, top: 5 }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
       <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
            <Button
              textColor='#176ECE'
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
    <View style={{ marginTop: 10, backgroundColor: 'white'}}>
<View style={{ justifyContent: 'center', alignItems: 'center', padding: 10,}}>
  <ScrollView horizontal={true}>
   
    <View style={{ width: 370, borderWidth: 1, borderColor: '#4d4d4dff', marginRight: 20, padding: 10, backgroundColor:'white', elevation: 5, alignItems: 'center'}}>

      <Image source={require('../images/iconRecorde.jpeg')} style={{width: 50, height: 50}}/>
      <Text style={{fontSize: 17, color:'black', fontWeight:'600', textAlign: 'center', marginTop: 5}}>Você bateu o seu recorde de sequência de leitura!</Text>
      <Text style={{fontSize: 14, color:'#575757ff', textAlign: 'center', marginTop: 5}}>Você ainda adicionou mais uma semana à sua sequência e ultrapassou sua melhor marca! Esse é o caminho! </Text>

      <View style={{flexDirection:'row', columnGap: 15, justifyContent: 'center', marginTop:15}}>
      <View style={{backgroundColor: '#e2e9ffff', width: 160, height: 160, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'black', fontWeight: '600'}}>Semanas consecutivas</Text>
        <Text style={{fontSize: 55, color: 'black'}}>2</Text>
      </View>
      <View style={{backgroundColor: '#4a6bc5ff', width: 160, height: 160, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'white', fontWeight: '600'}}>Dias consecutivos</Text>
        <Text style={{fontSize: 55, color: 'white'}}>1</Text>
      </View>
      </View>

    </View>

             <Calendar
      current={'2025-08-19'}
      onDayPress={day => setSelected(day.dateString)}
      markedDates={{
        [selected]: { selected: false, disableTouchEvent: true, selectedDotColor: 'orange', },
        '2025-08-03': { selected: true, selectedColor: '#3263adff', selectedDayBackgroundColor: 'green'},
        '2025-08-04': { selected: true, selectedColor: '#3263adff' },
        '2025-08-05': { selected: true, selectedColor: '#3263adff' }
      }}
      
      theme={{
        backgroundColor: '#fff',
        calendarBackground: '#fff',
        textSectionTitleColor: '#000',
        selectedDayBackgroundColor: '#3263adff',
        selectedDayTextColor: '#fff',
        todayTextColor: '#3263adff',
        dayTextColor: '#000',
        textDisabledColor: '#bebebeff',
        selectedDayBackgroundColor: 'red',
        textDayFontWeight: 'bold',         
        textMonthFontWeight: 'bold',      
        arrowColor: '#000000ff',
        daySpacing: 7,              
        textDayMarginTop: 3 ,
           
      }}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        width: 350,
      }}
    />
  
     </ScrollView>
     <View style={{alignSelf: 'flex-start', left: -10, width: '100%', }}>
                  <Button
                    textColor='#176ECE'
                    icon='chevron-right'
                    rippleColor={'transparent'}
                    source='material-community'
                    contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', marginTop: 5, width: '100%', backgroundColor: 'white' }}
                    title="Ver mais livros"
                  >
                   Veja mais informações de leitura
                  </Button>
                  </View>
    
      </View>
    
     
    </View>
     <View style={{marginTop:10, backgroundColor:'white', left:5}}>
        <View style={{marginLeft:5, marginTop:5}}>
           <Text style={{fontSize:15, color:'#131313ff', fontWeight: '450'}}>Encontre livros</Text>
           <Text style={{fontStyle: 'italic'}}>Toque em uma categoria ou capa de livro</Text>
          <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 5, top: 5,}}></View>

        </View>
       
         <ScrollView horizontal={true}>
                <View style={{ marginVertical: 15, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', columnGap: 10, padding: 5 }}>
              <TouchableOpacity
                onPress={() => setSelectedGenre('prime')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'prime' ? 2 : 1,
                  borderColor: selectedGenre === 'prime' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'prime' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{color: selectedGenre === 'prime' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'prime' ? '700' : '500'}}>Prime Reading</Text>
        </TouchableOpacity>

             <TouchableOpacity
                onPress={() => setSelectedGenre('romance')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'romance' ? 2 : 1,
                  borderColor: selectedGenre === 'romance' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'romance' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{ color: selectedGenre === 'romance' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'romance' ? '700' : '500'}}>Romance</Text>
        </TouchableOpacity>
  
              <TouchableOpacity
                onPress={() => setSelectedGenre('literaturaFiccao')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'literaturaFiccao' ? 2 : 1,
                  borderColor: selectedGenre === 'literaturaFiccao' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'literaturaFiccao' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{ color: selectedGenre === 'literaturaFiccao' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'literaturaFiccao' ? '700' : '500'}}>Literatura e ficçao</Text>
        </TouchableOpacity>
  
             <TouchableOpacity
                onPress={() => setSelectedGenre('terror')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'terror' ? 2 : 1,
                  borderColor: selectedGenre === 'terror' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'terror' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{color: selectedGenre === 'terror' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'terror' ? '700' : '500'}}>Terror</Text>
        </TouchableOpacity>
            </View>
          <View style={{ flexDirection: 'row', columnGap: 10, padding: 5 }}>
              <TouchableOpacity
                onPress={() => setSelectedGenre('maisVendido')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'maisVendido' ? 2 : 1,
                  borderColor: selectedGenre === 'maisVendido' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'maisVendido' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{ color: selectedGenre === 'maisVendido' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'maisVendido' ? '700' : '500'}}>Livros mais vendidos</Text>
        </TouchableOpacity>
  
             <TouchableOpacity
                onPress={() => setSelectedGenre('fantasiaFiccao')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'fantasiaFiccao' ? 2 : 1,
                  borderColor: selectedGenre === 'fantasiaFiccao' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'fantasiaFiccao' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{color: selectedGenre === 'fantasiaFiccao' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'fantasiaFiccao' ? '700' : '500'}}>Ficção científica e fantasia</Text>
        </TouchableOpacity>
  
              <TouchableOpacity
                onPress={() => setSelectedGenre('misterioSuspense')}
                style={{
                  height: 40,
                  borderRadius: 5,
                  borderWidth: selectedGenre === 'misterioSuspense' ? 2 : 1,
                  borderColor: selectedGenre === 'misterioSuspense' ? '#176ECE' : '#575757ff',
                  backgroundColor: selectedGenre === 'misterioSuspense' ? '#E6F2FF' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 14
                }}
        >
          <Text style={{ color: selectedGenre === 'misterioSuspense' ? '#000000ff' : '#2e2e2eff', fontWeight: selectedGenre === 'misterioSuspense' ? '700' : '500'}}>Mistério e suspense</Text>
        </TouchableOpacity>
  
            </View>
        </View>
        </ScrollView>
        {selectedGenre && (
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {books[selectedGenre].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
              <Image source={book.image} style={{ width: 100, height: 150, margin: 10 }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
       <View style={{height:1, backgroundColor: '#c4c4c4ff', marginTop: 7, top: 3, marginRight:15, marginLeft:10}}></View>
            <Button
              textColor='#176ECE'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
                data: books[selectedGenre], 
                title: 'Livros por categoria' 
              })}
            >
              {selectedGenre === 'prime' ? 'Mais do Prime Reading' : 'Mais desta categoria'}
            </Button>
          </View>
        )}
      </View>
   <View style={{height: 255, backgroundColor: 'white', justifyContent: 'center', marginTop: 10, paddingLeft: 5, paddingVertical: 10, marginBottom: 40}}>
    <Text style={{fontSize: 16, color: 'black', marginLeft: 10, marginTop: 10}}>Novos lançamentos na Loja Kindle</Text>
     <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3,marginRight:15, marginLeft:10}}></View>
   
          <View>
            <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {lancamentos[genre3].map((book) => (
            <TouchableOpacity
              key={book.id}
              onPress={() => navigation.navigate('BookDetail', { book })} 
            >
              <Image source={book.image} style={{ width: 100, height: 150, margin: 10, top: 5 }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  
       <View style={{height:1, backgroundColor: '#c7c7c7ff', marginTop: 7, top: 3, marginRight:10, marginLeft:5}}></View>
            <Button
              textColor='#176ECE'
              icon='chevron-right'
              rippleColor={'transparent'}
              source='material-community'
              contentStyle={{ justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', marginTop: 5 }}
              title="Ver mais livros"
              onPress={() => navigation.navigate('DESCUBRA NOVOS LIVROS', { 
              data: lancamentos['livrosLancamentos'], 
              title: 'Novos livros' 
            })}
            >
             Ver tudo
            </Button>
          </View>
      
      </View>
    </View>
  )
}