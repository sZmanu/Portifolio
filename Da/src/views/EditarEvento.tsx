import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TitlePequeno, InputFormEventos, TitleGrande, FundoPickerEventos } from "../styles/styled";
import { Picker } from '@react-native-picker/picker';
import { ThemeProvider, Button, Overlay } from "@rneui/themed";
import theme from "../styles/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";


export const ConjuntoFotos = () => {

    return (
        <View style={{
            height: 45, width: 45, alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#ECE9E9', borderWidth: 2, borderColor: '#999393', borderStyle: 'dashed', borderRadius: 5,
        }}>
            <Image source={require('../images/icons/mais.png')} />
        </View>

    )
}
const EditarEvento = () => {
    const [visible, setVisible] = useState(false);
    const [selecioneCategoria, setSelecioneCategoria] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const navigation = useNavigation();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const formattedDate = date.toLocaleDateString();
        setSelectedDate(formattedDate);
        hideDatePicker();
    };

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingBottom: 35 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-start', left: 15, top: 20 }}>
                    <Image source={require('../images/icons/setaEsquerda.png')} />
                </TouchableOpacity>
                <View style={styles.containerTopo}>
                    <TitlePequeno style={{ color: '#5D17EB', textAlign: 'center' }}>EDITAR EVENTO</TitlePequeno>
                    <View style={styles.containerFotos}>
                        <TouchableOpacity>
                            <Image source={require('../images/icons/quadradoMais.png')} />
                        </TouchableOpacity>
                        <TitlePequeno style={styles.corTexto}>Adicionar fotos</TitlePequeno>
                    </View>
                    <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between' }}>
                        <ConjuntoFotos />
                        <ConjuntoFotos />
                        <ConjuntoFotos />
                        <ConjuntoFotos />
                        <ConjuntoFotos />
                    </View>
                </View>

                {/*seção do form */}
                <View style={styles.containerForm}>
                    <TitlePequeno style={{ color: '#5D17EB', textAlign: 'left', alignSelf: 'flex-start' }}>Detalhes do evento:</TitlePequeno>
                    <InputFormEventos placeholder="Nome do evento:" />

                    {/*picker para selecionar o tipo do evento*/}
                    <FundoPickerEventos >
                        <TitlePequeno style={styles.corTexto}>Nicho do evento:</TitlePequeno>
                        <Picker style={{ width: 160, backgroundColor: 'transparent', left: 40, color: '#999393', }}
                            dropdownIconColor={'#5D17EB'}
                            dropdownIconRippleColor={'#5D17EB'}
                            selectedValue={selecioneCategoria}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelecioneCategoria(itemValue)
                            }>
                            <Picker.Item label="Esporte" value="esporte" style={styles.font} />
                            <Picker.Item label="Art." value="art" style={styles.font} />
                            <Picker.Item label="Comunicação" value="comunicacao" style={styles.font} />
                            <Picker.Item label="Festa" value="festa" style={styles.font} />
                        </Picker>
                    </FundoPickerEventos>

                    {/*data picker para selecionar a data do evento*/}
                    <View style={styles.containerData}>
                        <TitlePequeno style={styles.corTexto}>Selecione a data:</TitlePequeno>
                        <View style={{ width: 165, flexDirection: 'row', columnGap: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                            <TitlePequeno style={styles.corTexto}>{selectedDate}</TitlePequeno>
                            <TouchableOpacity onPress={showDatePicker} style={{ height: 25, alignItems: 'center', columnGap: 15, justifyContent: 'center', flexDirection: 'row' }}>
                                <Image source={require('../images/icons/relogioCalendario.png')} style={{ width: 15, height: 15 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker} />
                    <InputFormEventos placeholder="Horário:" />
                    <InputFormEventos placeholder="Localização:" />
                    <ThemeProvider theme={theme}>
                        <Button containerStyle={{ width: '100%' }} buttonStyle={{ width: '100%', borderRadius: 30 }} title={'publicar'}
                            onPress={toggleOverlay} />

                        {/*modal de evento cadastrado com sucesso*/}
                        <Overlay
                            isVisible={visible} onBackdropPress={toggleOverlay}
                            overlayStyle={{ width: '80%', height: '50%', justifyContent: 'center', borderRadius: 15 }}>
                            <View style={{ width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', top: 100 }}>
                                    <Image source={require('../images/fundoCirculo.png')} style={{ position: 'absolute' }} />
                                    <Image source={require('../images/circuloVerificado.png')} style={{ position: 'absolute' }} />
                                </View>
                                <TitleGrande style={{ color: '#5D17EB', textAlign: 'center', top: 90 }}>Evento editado com sucesso</TitleGrande>
                                <Button title={'OK'}
                                    onPress={toggleOverlay}
                                    buttonStyle={{ height: 38, borderRadius: 20, width: 200 }} titleStyle={{ fontSize: 23, height: 30 }} />
                            </View>
                        </Overlay>

                    </ThemeProvider>
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
    },
    containerTopo: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    corTexto: {
        color: '#999393'
    },
    containerFotos: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECE9E9',
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#999393',
        borderStyle: 'dashed',
        borderRadius: 10,
        height: 149,
        rowGap: 25,
        marginBottom: 20
    },
    containerForm: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 15,
        rowGap: 15,
        borderTopWidth: 1,
        borderColor: '#d6d6d6',
        height: 450,
        backgroundColor: 'white'
    },
    containerData: {
        backgroundColor: '#ECE9E9',
        borderWidth: 2,
        borderColor: '#5D17EB',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        columnGap: 15,
        alignItems: 'center',
        padding: 10,
        height: 52,
        width: '100%',
        fontSize: 20,
        fontFamily: 'Bryndan Write_fix',
        color: '#999393',

    },
    font: {
        fontFamily: 'Bryndan Write_fix',
        fontSize: 20,
        color: '#999393'
    }

})
export default EditarEvento;