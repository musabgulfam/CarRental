import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useStoreState } from 'easy-peasy';

export function Location({ navigation }){

    const selectedCar = useStoreState(state => state.selectedCar)

    return (
        <View style={{
            flex: 1,

        }}>
            <View style={{
                flex: 1,
            }}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    region={{
                        latitude: selectedCar.location.lat,
                        longitude: selectedCar.location.long,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker 
                        coordinate={{
                            latitude: selectedCar.location.lat,
                            longitude: selectedCar.location.long                               
                        }}
                    />
                </MapView>
            </View>
        </View>
    );
}