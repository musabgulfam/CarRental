import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

export function Loading(props){
    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <ActivityIndicator 
            size={"large"}
        />
    </View>;
}