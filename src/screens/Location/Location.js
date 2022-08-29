import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export function Location({ navigation }){
    return (
        <View style={{
            flex: 1,

        }}>

            <View style={{
                flex: 0.15,
                // paddingHorizontal: 20
            }}>
                <SafeAreaView style={{
                    // flexDirection: 'row'
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <SafeAreaView style={{
                        position: 'absolute',
                        top: Platform.OS === "ios" ? 40 : null,
                        left: 5,
                        paddingHorizontal: 20
                    }}>
                        {/* <SafeAreaView /> */}
                        <TouchableOpacity
                            onPress={_ => {
                                navigation.goBack()
                            }}
                        >
                            <Image
                                source={require('../../../assets/back.png')}
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
                    <View>
                        <Text style={{
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 17,
                            textAlign: 'center'
                        }}>Location</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10
                        }}>
                            <View>
                                <Image 
                                    source={require('../../../assets/location_icon.png')}
                                    style={{
                                        width: 12,
                                        height: 18,
                                        resizeMode: 'contain',
                                        marginRight: 10
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={{
                                    fontWeight: '600',
                                    fontSize: 16,
                                    color: 'rgba(0, 0, 0, 0.4)'
                                }}>Jinnah Int. Airport, Karachi</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <View style={{
                flex: 0.9,
            }}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />
            </View>
        </View>
    );
}