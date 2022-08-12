import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

export function Card(props){
    return (
        <TouchableOpacity
            style={{
                width: 172,
                height: 221,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 8
            }}
        >
            <Image 
                source={require('../../../assets/los_angeles.png')}
                style={{
                    width: 153,
                    height: 153,
                    resizeMode: 'contain',
                    marginBottom: 5
                }}
            />
            <Text style={{
                fontSize: 15,
                fontWeight: '700'
            }}>Los Angeles</Text>
        </TouchableOpacity>
    );
}