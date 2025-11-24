import { useState } from "react";
import { View, } from "react-native";
import { SearchBar } from '@rneui/themed';
import { IconButton} from 'react-native-paper';
import { Icon } from "@rneui/themed";


function BarraPesquisa (){
    const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};
    return(
       <View>
           <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',paddingHorizontal: 7}}>
            <View style={{flex: 1}}>
            <SearchBar 
            placeholder="Pesquisar no Kindle" placeholderTextColor={'#636363ff'}
            value={search}
            style={{ fontSize: 13}}
            containerStyle={{backgroundColor: 'white', borderColor: 'white', paddingVertical: 9, alignItems: 'center'}}
            inputContainerStyle={{backgroundColor: '#eeebebff', height: 40, justifyContent: 'center',borderRadius:0 }}
           
            />
            </View>
            <Icon
                name="bell"
                type="evilicon"
                iconColor={'#030303ff'}
                size={28}
                onPress={() => console.log('Pressed')}
                />
                </View>
            </View>
      
       
    )

}
export default BarraPesquisa;
//