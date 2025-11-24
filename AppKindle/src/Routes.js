import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Icon} from '@rneui/themed';
import Tela1 from "./components/pages/Home";
import Tela2 from "./components/pages/Biblioteca";
import BookApp from "./components/ConteudoHome";
import BookListScreen from "./components/ListaLivros";
import BookDetailScreen from "./components/DetalheLivro";
import Tela4 from "./components/pages/Config";
import ConteudoPrime from "./components/ConteudoPrimeHome";
import { Image, View } from "react-native";
import { color } from "@rneui/base";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const RotasTela1 = () => {
    return (
      <Stack.Navigator initialRouteName="Home" options={{ headerShown: false}} >
        <Stack.Screen name="Home" component={BookApp} options={{ headerShown: false }}/>
        <Stack.Screen name="DESCUBRA NOVOS LIVROS" component={BookListScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="DESCOBRIR NOVOS LIVROS" component={ConteudoPrime}/>
    
      </Stack.Navigator>
    );
  };

function Routes() {
    return (
        <Tab.Navigator
        initialRouteName="INÍCIO"
            screenOptions={{
                tabBarActiveTintColor: '#236ec4ff',
                tabBarInactiveTintColor: '#575757',
                tabBarLabelStyle: { fontSize: 10, color: '#123358ff', fontWeight: '600' },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    paddingBottom: 15,
                    height: 70
                    
                }
            }}
        >
           <Tab.Screen
                name="*"
                component={() => null}
                options={{
                   tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <View style={{elevation: 10,backgroundColor: 'white', bottom: 12, marginTop: 10}}>
                    <Image
                        source={require("./images/percy3.jpg")}
                        style={{ width: 50, height: 80, }}
                        resizeMode="cover"
                    />
                    </View>
                    ),
                }}
                />
            <Tab.Screen 
                name="INÍCIO" 
                component={Tela1}  
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" type='material-community' size={22} color={color} />
                    )
                }} 
            />
            <Tab.Screen 
                name="BIBLIOTECA" 
                component={Tela2} 
                options={{
                    headerShown: false,
                    
                    tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return (
                        <Icon  name="book" type="ionicon" size={22} color={color} 
                        />
                        );
                    } else {
                        return (
                        <Icon name="book-outline" type="ionicon" size={22} color={color} 
                        />
                        );
                    }
                    },
                }} 
                />
            <Tab.Screen 
                name="MAIS" 
                component={Tela4} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bars" type='antdesign' size={24} color={color} />
                    )
                }} 
            />
        </Tab.Navigator>
    );
}


export const Rotas = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
};
