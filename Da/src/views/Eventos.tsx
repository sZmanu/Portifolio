import React, { useState} from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { Button, SearchBar } from '@rneui/themed';
import { ItensMenu } from "./Calendar";
import { Overlay } from '@rneui/themed'
import { TitleGrande,  } from "../styles/styled";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

interface props {
  titulo: string;
  inscritos: string;
  endereco: string;
  dataEvento: string;
  tipoEvento: string;
  imagem: undefined;
  desabilitarBotao: boolean;
}

{/* card de eventos da atletica e DA */}

 export const CardEventos = ({titulo, inscritos, endereco, dataEvento, tipoEvento, imagem, desabilitarBotao}:props)=>{ 
  const route = useRoute();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const { eventType } = route.params || { eventType: 'todos' }; 

  const navigateToEvents = (type: string) => {
    navigation.navigate('DetalhesEventos', { eventType: type });
};
const modalDesistir = () => {
  setVisible(!visible);
};

  return(
    <View style={{backgroundColor: 'white',borderWidth: 1, borderColor: '#5D17EB', borderRadius: 15, justifyContent: 'flex-start', alignItems: 'flex-start', height: 275, width: 350}}>
      <Image source={imagem} style={{width: 347, height: 182, marginBottom: 5,  borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomWidth: 5, borderColor: 'green'}}/>
      <View style={{backgroundColor: '#5D17EB', borderRadius: 3, alignSelf: 'flex-end', top: 10, right: 10, position: 'absolute'}}>
                  <Text style={{color: 'white', paddingHorizontal: 6, fontSize: 13, fontFamily: 'Bryndan Write_fix'}}>{dataEvento}</Text>
              </View>
              <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
      <View style={{left: 10, width: 245}}>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}> 
          <Text style={{fontSize: 15, color: 'black', fontFamily: 'Sprite Graffiti Regular'}}>{titulo}</Text>
          
          </View>
          <View style={{flexDirection: 'row', columnGap: 10, marginTop: 6, alignItems: 'center'}}>
              <View style={{borderWidth: 1, borderColor: '#5D17EB', borderRadius: 5, height: 19, width: 44, alignItems: 'center', justifyContent: 'center', bottom: 4}}>
                  <Text style={{fontSize: 10, color: '#5D17EB', textAlign: 'center', fontFamily: 'Bryndan Write_fix'}}>{tipoEvento}</Text>
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
                  <Image source={require('../images/icons/localizacao.png')}/>
                  <Text style={{fontSize: 10, color: 'black', fontFamily: 'Bryndan Write_fix'}}>{endereco}</Text>
              </View>
              </View>
             
              {eventType === "Eventos que participei" && (
                <View style={{marginLeft: 15, rowGap: 10}}>
                  <Button buttonStyle={styles.buttonCard} title={'Detalhes'} titleStyle={styles.textButtonCard} onPress={() => navigateToEvents("Eventos que participei")}/>
                </View>
            )}
            
            {eventType === "Eventos" && (
                <TouchableOpacity style={{marginLeft: 53, top: 5}} onPress={() => navigateToEvents("Eventos")}>
                  <Icon name='arrowright' type='ant-design' color={'#5D17EB'} size={27}/>

                    </TouchableOpacity>
            )}
            {eventType === "Meus eventos" && (
                <View style={{marginLeft: 15, rowGap: 10}}>
                <Button buttonStyle={styles.buttonCard} title={'Detalhes'} titleStyle={styles.textButtonCard} onPress={() => navigateToEvents("Meus eventos")} disabled={desabilitarBotao} disabledStyle={{borderColor: 'white', backgroundColor: 'white'}} disabledTitleStyle={{color: 'white'}}/>
                <Button buttonStyle={styles.buttonCard}title={'Desistir'} titleStyle={styles.textButtonCard} onPress={modalDesistir} disabled={desabilitarBotao} disabledStyle={{borderColor: 'white', backgroundColor: 'white'}} disabledTitleStyle={{color: 'white'}}/>
                <Overlay
                isVisible={visible} onBackdropPress={modalDesistir} 
                overlayStyle={{width: '100%', height: '70%', justifyContent: 'flex-start', borderTopRightRadius: 50, borderTopLeftRadius: 50, top: '15%' }} >
                    <View style={{width: '100%', height: '90%', justifyContent: 'flex-start', alignItems: 'center', padding: 15, rowGap: 30, top: 10}}>
                    <CardEventos  titulo='INTERFACE: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul' imagem={require('../images/imagemEvento.png')} tipoEvento="Esporte"
                    desabilitarBotao={true}/>
            <TitleGrande style={{color: 'black', textAlign: 'center', fontSize: 24}}>Desistir do Evento?</TitleGrande>
            <View style={{flexDirection: 'row', columnGap: 35}}>
                    <Button title={'Cancelar'} 
                    onPress={modalDesistir}
                    buttonStyle={{height: 48, borderRadius: 30, width: 150, backgroundColor: 'white', borderColor: '#5D17EB', borderWidth: 1}} titleStyle={{fontSize: 20, height: 30, color: '#5D17EB'}}/>
                    
                    <Button title={'Desistir'} 
                    onPress={modalDesistir}
                    buttonStyle={{height: 48, borderRadius: 30, width: 150, backgroundColor: '#5D17EB'}} titleStyle={{fontSize: 20, height: 30}}/>
                    </View>
                    </View>
                </Overlay>
              </View>
            )} 
              </View>
             </View>
  )
}
{/* barra de pesquisa*/}

 export const BarraPesquisa = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  return(
    <SearchBar 
        containerStyle={{width: 320, borderTopColor: 'transparent', borderBottomColor: 'transparent', backgroundColor: 'transparent', }} 
        lightTheme={true} 
        inputContainerStyle={{height: 35, borderRadius: 30, paddingLeft: 10, borderColor: '#5D17EB', borderWidth: 1, backgroundColor: 'white', borderBottomWidth: 1}} 
        clearIcon 
        placeholderTextColor={'#999393'} 
        placeholder="Pesquise por eventos" 
        inputStyle={{fontSize: 13, justifyContent: 'center', alignSelf: 'center', fontFamily: 'Sprite Graffiti Regular' }}
        onChangeText={updateSearch} 
        value={search} 
        searchIcon={{size: 30, color: '#5D17EB'}}
   />
  )
}

const Eventos = () => {
    const [menu, setMenu] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();
    const { eventType } = route.params || { eventType: 'todos' }; 

    function mostrarMenu() {
    setMenu(!menu); 
  }
    return(
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width: '65%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity style={{left: 0}} onPress={() => navigation.goBack()}>
                <Icon name='arrowleft' type='ant-design' color={'white'} size={27}/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>D.A FATEC JD</Text>
                </View>
            </View>
            <TouchableOpacity style={{alignSelf: 'flex-end', right: 20}}
      onPress={mostrarMenu} >
      <Icon name='more-horizontal' type='feather' color={'#5D17EB'} size={44}/>
      </TouchableOpacity>

      {/* menu com os eventos*/}
      {menu && ( 
        <View style={{ marginTop: 20, zIndex: 2, position: 'absolute', top: 75, right: 10,}}>
            <ItensMenu />
            </View>
      )}
      {eventType === "Eventos que participei" && (
                <View style={styles.containerTitleParticipei}>
                    <Text style={styles.estiloTitle}>EVENTOS QUE{'\n'}PARTICIPEI</Text>
                    <BarraPesquisa />
                </View>
            )}
             {eventType === "Eventos" && (
                <View style={styles.containerTitle}>
                    <Text style={styles.estiloTitle}>EVENTOS</Text>
                    <BarraPesquisa />
                </View>
            )}
             {eventType === "Meus eventos" && (
                <View style={styles.containerTitle}>
                    <Text style={styles.estiloTitle}>MEUS EVENTOS</Text>
                    <BarraPesquisa />
                </View>
            )}
      {/* botoes para cada tipo de evento */}
      <View style={{height: 50, marginTop: 10}}>
      <ScrollView horizontal>
      <View style={styles.containerBotoes}>
        <Button buttonStyle={styles.estiloBotaoTd} title="Todos" titleStyle={styles.titleStyleTd} containerStyle={styles.containerEstiloBotoes}/>
        <Button buttonStyle={styles.estiloBotoes} title="Esporte" titleStyle={styles.titleStyle} containerStyle={styles.containerEstiloBotoes}/>
        <Button buttonStyle={styles.estiloBotoes} title="Art" titleStyle={styles.titleStyle} containerStyle={styles.containerEstiloBotoes}/>
        <Button buttonStyle={styles.estiloBotoes} title="Comunicação" titleStyle={styles.titleStyle} containerStyle={styles.containerEstiloBotoes}/>
        <Button buttonStyle={styles.estiloBotoes} title="Festas" titleStyle={styles.titleStyle} containerStyle={styles.containerEstiloBotoes}/>

      </View>
      </ScrollView>
      </View>
      <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
      <View style={{rowGap: 30, width: '100%'}}>
      {eventType === "Eventos que participei" && (
                <><CardEventos  imagem={require('../images/imagemEvento.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul' tipoEvento="Esporte" desabilitarBotao={false}/>
                <CardEventos imagem={require('../images/feedDA.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='5-9 Ago' tipoEvento="Comum" desabilitarBotao={false}/></>
            )}
             {eventType === "Eventos" && (
                <><CardEventos  imagem={require('../images/imagemEvento.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul' tipoEvento="Esporte" desabilitarBotao={false}/>
                <CardEventos imagem={require('../images/feedDA.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='5-9 Ago' tipoEvento="Comum" desabilitarBotao={false}/></>
            )}
             {eventType === "Meus eventos" && (
                <><CardEventos imagem={require('../images/imagemEvento.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul' tipoEvento="Esporte" desabilitarBotao={false}/>
                <CardEventos imagem={require('../images/feedDA.png')} titulo='INTERFATEC: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='5-9 Ago' tipoEvento="Comum" desabilitarBotao={false} /></>
            )}
                  
      </View>
      </View>
      
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        alignItems: 'center',
        paddingBottom: 30  
    },
    header: {
        backgroundColor: '#5D17EB', 
        width: '100%',
        height: 60,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    titleHeader:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Sprite Graffiti Regular'
    },
    menu:{
        alignSelf: 'flex-end',
        marginTop: 10,
      },
      containerTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        marginTop: 15, 
      },
      containerTitleParticipei: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 140,
        marginTop: 15, 
      },
      containerEstiloBotoes: {
        width: 98, 
        height: 25,
        borderRadius: 20
      },
      estiloTitle: {
        fontSize: 30,
        color: '#5D17EB',
        fontFamily: 'Sprite Graffiti Regular' ,
        textAlign: 'center'
      },
      containerBotoes: {
        flexDirection: 'row',
        height: 30,
        columnGap: 10,
        marginLeft: 10,
        marginTop: 3,
        marginBottom: 2
      },
      titleStyle: {
        color: '#5D17EB',
        fontSize: 12,
        fontFamily: 'Bryndan Write_fix'
      },
      titleStyleTd: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Bryndan Write_fix'
      },
      estiloBotoes: {
        backgroundColor: 'white', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#5D17EB', 
        borderWidth: 1, 
        width: 98, 
        height: 25, 
        padding: 1, 
        borderRadius: 20
      },
      estiloBotaoTd: {
        backgroundColor: '#5D17EB', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#5D17EB', 
        borderWidth: 1, 
        width: 98, 
        height: 25, 
        padding: 1, 
        borderRadius: 20

      },
      buttonCard: {
        width: 74, 
        height: 27, 
        borderRadius: 5, 
        padding: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: '#5D17EB', 
        borderWidth: 1, 
        backgroundColor: 'white'
      },
      textButtonCard: {
        color: '#5D17EB',
        fontSize: 10,
        fontFamily: 'Bryndan Write_fix'
      }
     

      
})
export default Eventos;