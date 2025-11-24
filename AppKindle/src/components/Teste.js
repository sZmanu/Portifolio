import { Image, ScrollView, Text, View } from "react-native";
import { Icon } from "@rneui/themed";

const Teste = () => {
return(
    <View style={{marginTop: 10}}>
        <View style={{width: '100%', height: 210, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', marginHorizontal: 15, columnGap: 15, alignItems: 'center', marginTop: 10}}>
            <Icon
            name='book-sharp'
            type='ionicon'
            color='#070707ff'
            size={24}/>

            <Text style={{fontSize: 20, color: 'black', fontWeight: '400'}}>Da sua biblioteca</Text>
            </View>
            <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row', columnGap: 18, margin: 8, marginLeft: 15}}>
               
            <Image source={require('../images/percy3.jpg')} style={{width: 100, height: 150}}/>
            <Image source={require('../images/percy5.jpg')} style={{width: 100, height: 150}}/>
            <Image source={require('../images/rainhaVermelha.jpg')} style={{width: 100, height: 150}}/>
            <Image source={require('../images/garotaLago.jpg')} style={{width: 100, height: 150}}/>
            <Image source={require('../images/jardimSecreto.jpg')} style={{width: 100, height: 150}}/>
            
            </View>
            </ScrollView>
        </View>
       
   
    </View>
)
}
export default Teste;