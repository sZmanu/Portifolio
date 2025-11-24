import { View, Image, Text,} from 'react-native'
import { Divider } from "react-native-paper"

export function LivroGaleria ({imageGaleria, autor, titulo, mb}){
    return(
        <View style={{height: 130, flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#d6d6d6'}}>
            <Image  source={imageGaleria} style={{height: 120, width: 70}}/>
           
            <View style={{flexDirection: 'column', marginLeft: 20}}>
                 <View>
            <Text style={{fontSize: 18, color: 'black'}}>{titulo}</Text>
            </View>
            <Text style={{fontSize: 16, color: 'black', marginTop: 3}}>{autor}</Text>
            <View style={{flexDirection: 'row', columnGap: 5, marginTop: 10}}>
            <Text style={{backgroundColor: 'black', color: 'white', paddingHorizontal: 5,}}>sample</Text>
           
            <Text style={{fontSize: 16, color: 'black'}}>{mb}</Text>
            </View>
            <Divider style={{backgroundColor: '#d6d6d6'}}/>
            </View>
            


        </View>
    )
}