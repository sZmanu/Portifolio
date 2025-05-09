import React, { useState} from "react";
import { Button } from "@rneui/themed";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { Overlay } from '@rneui/themed'
import { TitleGrande,  } from "../styles/styled";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { CardEventos } from "./Eventos";
import { Icon } from "@rneui/themed";

const DetalhesEventos = () => {
    const [visible, setVisible] = useState(false);
    const [desistirVisible, setDesistirVisible] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();
    const { eventType } = route.params || { eventType: 'todos' };

    const toggleOverlay = () => {
        setVisible(!visible);
      };

      const modalDesistir = () => {
        setVisible(!visible);
      };
    return(
        <View style={styles.container}>
            <View style={{height: '93%'}}>
                <View>
                    <TouchableOpacity style={{position: 'absolute', zIndex: 2, top: 10, left: 10}} onPress={() => navigation.goBack()}>
                    <Icon name='arrowleft' type='ant-design' color={'#5D17EB'} size={27}/>
                    </TouchableOpacity>
            
            {/* imagens do evento */}
            <Image source={require('../images/imagemEvento.png')} style={styles.imagem}/>
            <View style={{zIndex: 2, position: 'absolute', alignSelf: 'center', bottom: 10, flexDirection: 'row', columnGap: 10}}>
            <Image source={require('../images/icons/proximaImage.png')} />
            <Image source={require('../images/icons/proximaImage.png')} />
            <Image source={require('../images/icons/proximaImage.png')} />
            <Image source={require('../images/icons/proximaImage.png')} />
            </View>
            </View>
            <ScrollView>
            <View style={styles.containerDetalhes}>
            <View style={styles.containerTopo}>
            <View style={{backgroundColor: '#5D17EB', borderRadius: 5, width: 44, alignItems: 'center', justifyContent: 'center', bottom: 4, paddingVertical: 2}}>
                  <Text style={{fontSize: 10, color: 'white', textAlign: 'center', fontFamily: 'Bryndan Write_fix'}}>Esporte</Text>
                  </View>
                  <View style={{width: 105, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
              <View style={{width: 80, height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../images/icons/perfilCalendar.png')} style={{width: 35, height: 35}}/>
              <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 2, marginLeft: -15, width: 35, height: 35}}/>
              <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 3, marginLeft: -15, width: 35, height: 35}}/>
              <Image source={require('../images/icons/perfilCalendar.png')} style={{zIndex: 4, marginLeft: -15, width: 35, height: 35}}/>
              </View>
              <Text style={{fontSize: 12, color: '#999393', bottom: 5, fontFamily: 'Bryndan Write_fix'}}>+30</Text>
              </View>
              </View>
               <Text style={styles.title}>INTERFATEC: JOGO DE FUTSAL</Text>
               
               <View style={styles.containerData}>
               <View style={styles.fundoCalendario}>
               <Icon name="date" type="fontisto" color={'black'} size={18} style={styles.icon}/>
               </View>

              {/* detalhes da data */}
               <View style={styles.containerDescData}>
                <Text style={styles.textDescricao}>16 de julho, 2024</Text>
                <Text style={{color: '#5D17EB', fontSize: 12, fontFamily: 'Bryndan Write_fix'}}>Terça - feira, 16H</Text>
                <Button title={'Add ao meu calendário'} buttonStyle={styles.buttonAdd} titleStyle={styles.textoButton} containerStyle={{marginTop: 10, borderRadius: 20, width: 150}}/>

               </View>
               </View>
               <View style={styles.containerData}>
               <View style={styles.fundoCalendario}>
               <Icon name='location-pin' type='entypo' size={30}/>
               </View>
               <View>

                {/* detalhes da local */}
                <Text style={styles.textDescricao}>FATEC - TATUAPÉ</Text>
                <Text style={{color: '#5D17EB', fontSize: 12, fontFamily: 'Bryndan Write_fix'}}>R. xxxxxxxx, n 24</Text>
                <Button title={'Abrir mapa'} buttonStyle={styles.buttonMapa} titleStyle={styles.textoButton} containerStyle={{marginTop: 10, borderRadius: 20, width: 85}}/>
                
               </View>
               </View>
               <View style={{marginTop: 30}}>
              <Text style={styles.textDescricao}>Acontece dia 16 de julho o grande confronto contra a Fatec Tatuapé, você não pode ficar de fora.
              VAMOS TORCER PARA GANHARMOS, te espero lá!</Text>
              </View>
              </View>
              </ScrollView>
              </View>

              {/* campo de compartilhamento, e confirmaçao de presença */}
              <View style={styles.containerCompartilhar}> 
              <View style={styles.containerPresenca}>
                <TouchableOpacity>
                <View style={styles.fdButtonCompartilhar}>
                <Image source={require('../images/icons/compartilhar.png')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.fdButtonInterrogacao}>
                <Image source={require('../images/icons/interrogacao.png')}/>
                </View>
                </TouchableOpacity>
                {eventType === "Eventos que participei" && (
               <Button  buttonStyle={styles.buttonPresenca} title={'Galeria'} titleStyle={styles.textPresenca} 
               containerStyle={{backgroundColor: 'red', borderRadius: 20}} onPress={() => navigation.navigate('GalleryEventos')}/>
            )}
            {eventType === "Eventos" && (
               <Button  buttonStyle={styles.buttonPresenca} title={'Confirmar presença'} titleStyle={styles.textPresenca} 
               containerStyle={{backgroundColor: 'red', borderRadius: 20}} onPress={toggleOverlay}/>
            )}
            {eventType === "Meus eventos" && (
               <Button  buttonStyle={styles.buttonPresenca} title={'Desistir'} titleStyle={styles.textPresenca} 
               containerStyle={{borderRadius: 20}} onPress={modalDesistir}/>
            )}
           
              </View>
              </View>
              
              {/*modal de evento cadastrado com sucesso*/}
              {eventType === "Eventos" && (
               <Overlay
               isVisible={visible} onBackdropPress={toggleOverlay} 
               overlayStyle={{width: '80%', height: '50%', justifyContent: 'center', borderRadius: 15}}>
                   <View style={{width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center', padding: 15}}>
                   <View style={{justifyContent: 'center', alignItems: 'center', top: 100}}>
       <Image source={require('../images/fundoCirculo.png')} style={{position: 'absolute'}}/>
           <Image source={require('../images/circuloVerificado.png')} style={{position: 'absolute'}}/>
           </View>
           <TitleGrande style={{color: '#5D17EB', textAlign: 'center', top: 90, fontSize: 29}}>Presença confirmada com sucesso</TitleGrande>
                   <Button title={'OK'} 
                   onPress={toggleOverlay}
                   buttonStyle={{height: 38, borderRadius: 20, width: 200, backgroundColor: '#5D17EB'}} titleStyle={{fontSize: 23, height: 30}}/>
                   </View>
               </Overlay>
            )}
            {/*modal de desistencia do evento*/}
            {eventType === "Meus eventos" && (
                <Overlay
                isVisible={visible} onBackdropPress={modalDesistir} 
                overlayStyle={{width: '100%', height: '70%', justifyContent: 'flex-start', borderTopRightRadius: 50, borderTopLeftRadius: 50, top: '15%' }} >
                    <View style={{width: '100%', height: '90%', justifyContent: 'flex-start', alignItems: 'center', padding: 15, rowGap: 30, top: 10}}>
                    <CardEventos  iconCard={require('../images/icons/setaDireita.png')} titulo='INTERFACE: JOGO DE FUTSAL' inscritos='30' endereco='R. XXXXXXXX, n 24' dataEvento='17 jul' imagem={require('../images/imagemEvento.png')} tipoEvento="Esporte"
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
            )}

              
        </View>
    )

}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
   },
   imagem:{
    width: '100%',
    height: 330
   },
   containerTopo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    
   },
   title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Sprite Graffiti Regular',
    marginTop: 20

   },
   containerDetalhes: {
    width: '90%',
    marginTop: 35, 
    alignSelf: 'center',
    
   },
   fundoCalendario:{
    backgroundColor: '#5D17EBB8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: '50%'
   },
   icon:{
    width: 20,
    height: 20,
    tintColor: 'black',
   },
   containerData: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 15,
    marginTop: 15
   },
   containerDescData: {
    marginBottom: 20
   },
   buttonAdd:{
    borderRadius: 20,
    padding: 3,
    backgroundColor: 'white',
    borderColor: '#5D17EB',
    borderWidth: 1,
    width: 150
   },
   buttonMapa:{
    borderRadius: 20,
    padding: 3,
    backgroundColor: 'white',
    borderColor: '#5D17EB',
    borderWidth: 1,
    width: 85
   },
   textoButton: {
    color: '#5D17EB',
    fontSize: 12,
    fontFamily: 'Bryndan Write_fix'
   },
   textDescricao: {
    color: 'black', 
    fontSize: 15, 
    fontFamily: 'Bryndan Write_fix'
   },
   containerPresenca: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: '#5D17EB',
    borderRightColor:'#5D17EB',
    borderLeftColor: '#5D17EB',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
   },
   containerCompartilhar: {
    height: '7%',
    justifyContent: 'flex-end',
   },
   buttonPresenca:{
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#5D17EB',
    borderWidth: 1,
    padding: 3,
    width: 201,
    paddingHorizontal: 5,
    height: 45
   },
   textPresenca:{
    color: '#5D17EB',
    fontSize: 20,
    fontFamily: 'Bryndan Write_fix', 
   },
   fdButtonCompartilhar: {
    height: 45,
    width: 45,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D17EBB8',
    paddingRight: 3
   },
   fdButtonInterrogacao: {
    height: 45,
    width: 45,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D17EBB8'
   }
})
export default DetalhesEventos;