import React from 'react';
import { useState } from 'react';
import { Button, ThemeProvider, Switch, } from '@rneui/themed';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FundoBG, ContainerComponentes, TitlePequeno, LogoLogin, ContainerTopo, TitleMedio, InputLogin } from '../styles/styled';
import theme from '../styles/theme';

const Login = () => {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation(); 

    return (
        <ScrollView>
        <FundoBG>
            <ContainerTopo>
                <TitlePequeno style={{ marginTop: 20 }}>Bem Vindo</TitlePequeno>
            </ContainerTopo>
            <ContainerComponentes>
                <ThemeProvider theme={theme}>
                    <LogoLogin source={require('../images/logoLogin.png')} />
                    <TitleMedio style={{ color: '#5D17EB' }}>Eu sou:</TitleMedio>
                    <View style={{ flexDirection: 'row', columnGap: 10, width: '100%', justifyContent: 'center', marginTop: 20 }}>
                        <TitlePequeno style={{ color: '#999393' }}>Aluno</TitlePequeno>
                        <TitlePequeno style={{ color: '#999393', left: '15%' }}>Organização</TitlePequeno>
                    </View>
                    <View>
                        <Switch thumbColor={'#F3C04D'} value={checked} onValueChange={(value) => setChecked(value)} />
                    </View>
                    <View style={{ width: '90%', marginTop: 40, justifyContent: 'space-between', height: 130 }}>
                        <InputLogin placeholder='Nome de usuário:' placeholderTextColor={'#999393'} />
                        <InputLogin placeholder='Senha:' placeholderTextColor={'#999393'} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('RedefinePassword')}>
                        <TitlePequeno style={{ fontSize: 15, color: '#999393', marginBottom: 30 }}>Esqueci minha senha</TitlePequeno>
                    </TouchableOpacity>
                    <View>
                        <Button title='ENTRAR' onPress={() => navigation.navigate('TabBar')}/>
                        <View style={{ zIndex: 1, marginRight: 200, marginTop: -50 }}>
                            <Image source={require('../images/nuvem.png')} />
                        </View>
                    </View>
                </ThemeProvider>
                <View style={{ flexDirection: 'row', height: 150, alignItems: 'flex-end', columnGap: 9, bottom: 50}}>
                    <TitlePequeno style={{ color: '#5D17EB',  }}>Não tem uma conta?</TitlePequeno>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <TitlePequeno style={{ color: '#5D17EB', borderBottomColor: '#F3C04D', borderBottomWidth: 2 }}>Criar conta</TitlePequeno>
                    </TouchableOpacity>
                </View>
            </ContainerComponentes>
        </FundoBG>
        </ScrollView>
    );
};

export default Login;
