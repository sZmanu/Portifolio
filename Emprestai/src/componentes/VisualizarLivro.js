import { Overlay } from '@rneui/themed';
import { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const VisualizarLivro = () => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
      };

    return(
   <View>
      <TouchableOpacity onPress={toggleOverlay} style={styles.buttonDetalhes}>
                 <Text style={styles.textButton}>Detalhes</Text>
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <ScrollView>
          <View style={{justifyContent: 'space-between', rowGap: 30, alignItems: 'center'}}>
        <View style={styles.containerTitle}>
          <Text style={styles.label}>Titulo</Text>
        </View>
        <View style={{width: '50%', height: 150, backgroundColor: '#d6d6d6'}}></View>
        <View style={{alignSelf: 'flex-start'}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', columnGap: 5}}>
        <Text style={styles.textInform}>Autor:</Text>
        <Text style={styles.textInform}></Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', columnGap: 5}}>
        <Text style={styles.textInform}>Data de publicação:</Text>
        <Text style={styles.textInform}></Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', columnGap: 5}}>
        <Text style={styles.textInform}>Sipnose:</Text>
        <Text style={styles.textInform}></Text>
        </View>
        </View>
          </View>
          </ScrollView>
      </Overlay>
    </View>

    )
}
const styles = StyleSheet.create({
    overlay: {
    height: '78%',
    width: '78%',
    borderRadius: 10
    },
    containerTitle: {
        backgroundColor: '#374151',
        height: 'auto',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10
    },
    label: {
        color: 'white', 
        fontSize: 20,
        fontFamily: 'Quicksand Regular',
    },
    textInform: {
      fontSize: 17,
      fontFamily: 'Quicksand Regular',
      color: '#374151'

    },
    buttonDetalhes: {
      width: 45,
      height: 15,
      backgroundColor: '#3B82F6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
  },
  textButton: {
    fontSize: 8,
    fontFamily: 'Quicksand Bold',
    color: 'white'
},
})
export default VisualizarLivro;