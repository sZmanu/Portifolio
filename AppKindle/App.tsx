import { Text, View } from "react-native";
import { Rotas } from "./src/Routes";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
    return(
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
     <View style={{flex:1}}>
      <Rotas />
     </View>
     </SafeAreaView>
     </SafeAreaProvider>
    )
}
export default App;