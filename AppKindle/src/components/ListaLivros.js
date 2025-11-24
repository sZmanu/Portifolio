import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from "react-native-ratings";
import { useNavigation } from '@react-navigation/native';

const BookListScreen = ({ route }) => {
  const { data, title } = route.params; 
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor:'white' }}>
      <View style={{ padding: 15, backgroundColor: 'white' }}>
        <Text style={{ 
          left: 10, 
          marginBottom: 20, 
          color: '#7F7E7E', 
          fontSize: 18 
        }}>
          {title}
        </Text>

        <View style={{ flexDirection: 'column'}}>
          {data.map((book) => (
            <View style={{}}>
            <View key={book.id} style={{ marginBottom: 10, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BookDetail', { book })}
              >
                <Image 
                  source={book.image} 
                  style={{ width: 70, height: 120}} 
                />
              
              </TouchableOpacity>
              
              <View style={{ width: 230, alignItems: 'flex-start', paddingHorizontal: 10, flexWrap: 'wrap' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>
                  {book.titulo}
                </Text>
                <Text style={{ color: '#000000ff', fontSize: 15 }}>
                  {book.autor}
                </Text>

                <View style={{ flexDirection: 'row', height: 20, alignItems: 'center', bottom: 2 }}>
                  <Rating
                                type="star"
                                fractions={1}
                                startingValue={4}
                                ratingCount={5}
                                readonly={false}
                                imageSize={13} 
                                ratingColor='#ff8725ff'
                                ratingBackgroundColor="#ffffffff" 
                              
                            
                        />
                  <Text style={{ color: '#7F7E7E', fontSize: 14, left: 2, top: 2 }}>
                    {book.avaliacoes}
                  </Text>
                </View>

                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>
                  {book.preco}
                </Text>
              </View>
            </View>
            <View style={{height:1, backgroundColor: '#c7c7c7ff',  marginBottom:10,marginRight: 3}}></View>
            </View>
          ))}
          </View>
        </View>
         
     
    </ScrollView>
  );
};

export default BookListScreen;
