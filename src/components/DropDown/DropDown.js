import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

export function DropDown({
    text
}) {
    return (
        <View style={{
            width: 248,
            height: 57,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: 'center',
            paddingLeft: 20,
            marginVertical: 7,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Text style={{
                    color: 'rgba(0, 0, 0, 0.51)',
                    fontSize: 15,
                    fontWeight: '400',
                    lineHeight: 24
                }}>{text}</Text>
                <TouchableOpacity style={{
                    marginRight: 12
                }}>
                    <Image
                        source={require('../../../assets/arrow_down.png')}
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}