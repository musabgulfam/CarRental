import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export function Card({ 
    navigation, 
    title,
    rent,
    model
}){
    return (
        <TouchableOpacity
            style={{
                width: width-40,
                height: 341,
                backgroundColor: '#FFFFFF',
                borderRadius: 14,
                marginVertical: 20
            }}
            onPress={_ => {
                navigation.navigate('Detail');
            }}
        >
            <View style={{
                height: 194,
                width: width-40,
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14
                // justifyContent: 'center',
                // alignItems: 'center'
            }}>
                <Image 
                    source={require('../../../assets/sample_car.png')}
                    style={{
                        width: width-40,
                        height: 194,
                        resizeMode: 'contain'
                    }}
                />
            </View>
            <View style={{
                paddingTop: 10,
                paddingHorizontal: 15,
                width: width - 40
            }}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 25,
                    color: 'black'
                }}>{title}
                </Text>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 25,
                    color: 'black'
                }}>{model}</Text>
                <Text style={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontSize: 15,
                    fontWeight: '600'
                }}>19 Trips</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    marginTop: 13,
                    justifyContent: 'center',
                    height: 40

                }}>
                    <Text style={{
                        alignSelf: 'flex-end',
                        color: '#00000099',
                        fontWeight: '500',
                        fontSize: 20
                    }}>US <Text style={{
                        fontSize: 20,
                        fontWeight: '900',
                        color: '#00000099'
                    }}>${rent}</Text>/day</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}