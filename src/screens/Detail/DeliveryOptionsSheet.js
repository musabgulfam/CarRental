import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useStoreActions, useStoreState } from "easy-peasy";

export function DeliveryOptionsSheet({ close, navigation }) {

    const selectedCar = useStoreState(state => state.selectedCar)

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1
            }}>
                <SafeAreaView style={{
                    // flexDirection: 'row'
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <SafeAreaView style={{
                        position: 'absolute',
                        top: Platform.OS === "ios" ? 15 : null,
                        left: 5,
                        paddingHorizontal: 20
                    }}>
                        {/* <SafeAreaView /> */}
                        <TouchableOpacity
                            onPress={_ => {
                                close()
                            }}
                        >
                            <Image
                                source={require('../../../assets/cross.png')}
                                style={{
                                    width: 20,
                                    height: 30,
                                    resizeMode: 'contain',
                                    tintColor: 'white',
                                    tintColor: 'black'
                                }}
                            />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <Text style={{
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 17
                    }}>Pickup and return</Text>
                </SafeAreaView>
                <View style={{
                    marginTop: 15,
                    width: '100%',
                    flex: 1,
                    paddingBottom: 20
                }}>
                     <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={{
                            width: '100%',
                            flex: 1
                        }}
                        initialRegion={{
                            latitude: selectedCar.location.lat,
                            longitude: selectedCar.location.long,
                            // latitudeDelta: 0.000922,
                            // longitudeDelta: 0.000421,
                        }}
                    >
                        {/* // <Marker 
                        //     coordinate={{
                        //         latitude: selectedCar.location.lat,
                        //         longitude: selectedCar.location.long                               
                        //     }}
                        // /> */}
                    </MapView>
                </View>
                <View style={{
                    marginTop: 20,
                    flex: 0.5
                }}>
                    <Text style={{
                        paddingHorizontal: 20,
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>Car location</Text>
                    <View style={{
                        marginTop: 10,
                        borderColor: 'rgba(0, 0, 0, 0.05)',
                        borderWidth: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 60,
                        paddingHorizontal: 20,
                    }}>
                        <View style={{
                            width: '90%',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            {/* <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>{selectedCar.location.lat}, {selectedCar.location.long}</Text> */}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}