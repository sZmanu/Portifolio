import styled from "styled-components/native";

// criar componentes e definir estilo deles com css, sem precisar ficar repetindo codigo

export const ContainerComponentes = styled.View`
    background-color: white;
    width: 100%;
    height: 90%;
    justify-content: flex-start;
    align-items: center;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    row-gap: 0;
`;
export const ContainerTopo = styled.View`
   width: 100%;
   height: 10%;
   justify-content: center;
   align-items: center;
`;

export const FundoBG = styled.View`
   background-color: #5D17EB;
   flex: 1;
   justify-content: flex-end;
   align-items: center;
`;
export const TitlePequeno = styled.Text`
  font-size: 20px;
  color: white;
  font-family: 'Bryndan Write_fix';
 
`;
export const TitleMedio = styled.Text`
  font-size: 25px;
  color: white;
  font-family: 'Bryndan Write_fix';
  
`;
export const TitleGrande = styled.Text`
  font-size: 30px;
  color: white;
  font-family: 'Bryndan Write_fix';
  
`;
export const LogoLogin = styled.Image`
  height: 170px;
  width: 120px;
`;
export const FundoPicker = styled.View`
  background-color: #ECE9E9;
  border-width: 2px;
  border-color: #5D17EB;
  border-radius: 15px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  height: 52px;
  width: 100%;
`;
export const FundoPickerEventos = styled.View`
  background-color: #ECE9E9;
  border-width: 2px;
  border-color: #5D17EB;
  border-radius: 30px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  height: 52px;
  width: 100%;
`;
export const InputLogin = styled.TextInput`
background-color: #ECE9E9;
border-width: 2px;
border-color: #5D17EB;
border-radius: 15px;
flex-direction: row;
justify-content: flex-start;
align-items: flex-end;
padding: 10px;
height: 52px;
width: 100%;
font-size: 20px; 
font-family: 'Bryndan Write_fix';
color: #999393;
`;
export const ContainerJogos = styled.View`
background-color: #ffff;
border-width: 1px;
border-color: #5D17EB;
border-radius: 15px;
justify-content: center;
align-items: flex-start;
padding: 10px;
height: 86px;
width: 90%;
`;
export const InputFormEventos = styled.TextInput`
background-color: #ECE9E9;
border-width: 2px;
border-color: #5D17EB;
border-radius: 30px;
flex-direction: row;
justify-content: flex-start;
align-items: flex-end;
padding: 10px;
height: 52px;
width: 100%;
font-size: 20px; 
font-family: 'Bryndan Write_fix';
color: #999393;
`;



