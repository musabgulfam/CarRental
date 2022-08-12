import React from 'react';
import {
    TextInput,
    View
} from 'react-native';

export function TextField({
    value,
    onChange,
    placeholder,
    secureTextEntry=false
}){
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
            <TextInput 
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={'rgba(0, 0, 0, 0.51)'}
            />
        </View>
    );
}