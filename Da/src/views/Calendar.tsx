import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Icon } from '@rneui/themed';
import {ContainerJogos} from '../styles/styled';
import { useNavigation } from '@react-navigation/native';
import { Calendar, DateData } from 'react-native-calendars';

interface props {
    titulo: string;
    inscritos: string;
    endereco: string;
    dataEvento: string;
}
export const CardEventos = ({titulo, inscritos, endereco, dataEvento}:props)=>{ 
    return(
        <ContainerJogos>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}> 
            <Text style={{fontSize: 15, color: 'black', fontFamily: 'Sprite Graffiti Regular',}}>{titulo}</Text>
            <View style={{backgroundColor: '#5D17EB', borderRadius: 3}}>
                    <Text style={{color: 'white', paddingHorizontal: 6, fontSize: 13, fontFamily: 'Bryndan Write_fix', paddingVertical: 2}}>{dataEvento}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', columnGap: 10, marginTop: 10}}>
                <View style={{borderWidth: 1, borderColor: '#5D17EB', borderRadius: 5, height: 19, width: 44, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 10, color: '#5D17EB', textAlign: 'center', fontFamily: 'Bryndan Write_fix'}}>Esporte</Text>
                </View>
                <View style={{width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{width: 80, height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../images/icons/perfilCalendar.png')} />
                <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 2, marginLeft: -15, }}/>
                <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 3, marginLeft: -15}}/>
                <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 4, marginLeft: -15}}/>
                </View>
                <Text style={{fontSize: 12, color: '#999393', bottom: 5, fontFamily: 'Bryndan Write_fix'}}>+{inscritos}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
                    <Icon name='location-pin' type='entypo' size={13}/>
                    <Text style={{fontSize: 10, color: 'black', fontFamily: 'Bryndan Write_fix'}}>{endereco}</Text>
                </View>
        </ContainerJogos>
    )
}
export const ItensMenu = () =>{
  const navigation = useNavigation();

  const navigateToEvents = (type: string) => {
      navigation.navigate('Eventos', { eventType: type });
  };
    return(
        <View style={{backgroundColor: '#5D17EB', borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly', width: 174, height: 170}}>
            <TouchableOpacity onPress={() => navigateToEvents("Eventos")} style={{ width: '100%',alignItems: 'center', borderBottomColor: 'white', borderBottomWidth:2, height:54, justifyContent: 'center'}}>
                <Text style={{fontSize: 22, textAlign: 'center', color: 'white', fontFamily: 'Bryndan Write_fix'}}>Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToEvents("Meus eventos")} style={{ width: '100%', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth:2,height:54, justifyContent: 'center'}}>
                <Text style={{fontSize: 22, textAlign: 'center',color: 'white', fontFamily: 'Bryndan Write_fix'}}>Meus Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToEvents("Eventos que participei")} style={{ width: '100%', alignItems: 'center', height:60, justifyContent: 'center'}}>
                <Text style={{fontSize: 22, textAlign: 'center', color: 'white', fontFamily: 'Bryndan Write_fix'}}>Eventos que participei</Text>
            </TouchableOpacity>
        </View>
    )
}

const Calendario = () => {
    const [menu, setMenu] = useState(false);
    const[day, setDay] = useState<DateData>()
    const navigation = useNavigation();

    function mostrarMenu() {
    setMenu(!menu); 
  }
    
    return (
        <ScrollView style={{backgroundColor: 'white', paddingBottom: 50}}>
        <View style={styles.container}>
            <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Image source={require('../images/icons/perfilHome.png')} style={styles.profileIcon} />
          </View>
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignSelf: 'flex-end', right: 20}}
      onPress={mostrarMenu} >
       <Icon name='more-horizontal' type='feather' color={'#5D17EB'} size={44}/>
      </TouchableOpacity>
      {menu && ( 
        <View style={{ marginTop: 20, zIndex: 2, position: 'absolute', top: 75, right: 10,}}>
            <ItensMenu />
            </View>
      )}
      
      <View style={styles.containerTitle}>
            <Text style={styles.title}>CALENDARIO</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.containerCalendario}>
              <Calendar 
              headerStyle={{paddingBottom: 10, marginBottom: 10, borderWidth: 2, borderColor: '#5D17EB', borderRadius: 10, backgroundColor: '#ffff'}}
              theme={{
                textMonthFontSize: 23,
                monthTextColor: '#5D17EB',
                todayTextColor: '#F3C04D',
                selectedDayBackgroundColor: '#F3C04D',
                selectedDayTextColor: '#5D17EB',
                textDayStyle: {color: '#ffff', fontFamily: 'Bryndan Write_fix'},
                calendarBackground: '#5D17EB',
                textDisabledColor: '#9F9F9F',
                textMonthFontFamily: 'Bryndan Write_fix',
                textDayHeaderFontFamily: 'Bryndan Write_fix',
                textDayHeaderFontSize: 16,
                arrowColor: '#5D17EB',

              }}
              style={styles.calendarContent}
              onDayPress={setDay}
              markedDates={day && {
                [day.dateString]: {selected: true} 
              }}
              />

            
            </View>
            
            <View style={styles.containerAdd}>
                <View style={styles.dataAtual}>
                <Text style={{fontSize: 16, color: '#5D17EB', fontFamily: 'Bryndan Write_fix'}}>SEG</Text>
                <Text style={{fontSize: 16, color: '#5D17EB', fontFamily: 'Bryndan Write_fix'}}>9</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("FormEvento")}>
                <View style={styles.add}>
                    <Icon name='add' type='ionicons' color={'#5D17EB'} size={27}/>
                <Text style={{fontSize: 18, color: '#5D17EB', fontFamily: 'Bryndan Write_fix'}}>ADD</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{width:'90%', marginTop: 30}}>
            <Text style={styles.dataCompleta}>segunda-feira, dia 9 de setembro de 2024:</Text>
            </View>
           <CardEventos titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul'/>
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#5D17EB',
        padding: 15,
        width: '100%'
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileIconContainer: {
        backgroundColor: '#D9D9D9', 
        borderRadius: 20, 
        padding: 5, 
      },
      profileIcon: {
        width: 30,
        height: 30,
      },
      profileText: {
        color: '#FFF',
        fontSize: 18,
        marginLeft: 8,
        fontFamily: 'Bryndan Write_fix'
      },
      menu:{
        alignSelf: 'flex-end',
        marginTop: 10
      },
      containerTitle:{
        height: 80,
        alignItems: 'center',
        justifyContent: 'center', marginBottom: 20
      },
      title: {
        fontSize: 40,
        color: '#5D17EB',
        fontFamily: 'Sprite Graffiti Regular'
      },
      containerCalendario:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      calendarContent: {
        backgroundColor: 'transparent',
        width: 350
      },
      add: {
        height: 47,
        width: 74,
        borderWidth: 1,
        borderColor: '#5D17EB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 3
      },
      containerAdd: {
        flexDirection: 'row', 
        width: '50%', 
        alignSelf: 'flex-end', 
        justifyContent: 'flex-end',  
        marginTop: 20,
        columnGap: 10, 
      },
      dataAtual: {
        height: 47,
        width: 74,
        borderWidth: 1,
        borderColor: '#5D17EB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      dataCompleta:{
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 25,
        fontFamily: 'Bryndan Write_fix'
      }

      

})
export default Calendario;