import React from 'react';
import {
    View,
    TextInput
} from 'react-native';

export function AccountTextField({
    value,
    onChange
}){
    return (<View style={{
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 5,
        borderWidth: 1,
        padding: 11,
        marginTop: 10
    }}>
        <TextInput
            value={value}
            onChangeText={onChange}
            style={{
                color: 'rgba(0, 0, 0, 0.7)',
                fontSize: 16,
                fontWeight: '600'
            }}
            keyboardType="phone-pad"
        />
    </View>);
}