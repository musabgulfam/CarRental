import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Platform,
    Dimensions
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export function Delivery({ navigation }) {
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
                    }}>Checkout</Text>
                </SafeAreaView>
                <View style={{
                    marginTop: 15,
                    width: '100%',
                    height: 148
                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={{
                            width: '100%',
                            height: 148
                        }}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    />
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{
                        paddingHorizontal: 20,
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>Pickup at cat location</Text>
                    <View style={{
                        marginTop: 10,
                        borderColor: 'rgba(0, 0, 0, 0.05)',
                        borderWidth: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 60,
                        paddingHorizontal: 20,
                    }}>
                        <TouchableOpacity style={{
                            width: '10%'
                        }}>
                            <Image
                                source={require('../../../assets/empty_circle.png')}
                                style={{
                                    width: 23,
                                    height: 23,
                                    resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{
                            width: '90%',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>Jinnah Int. Airport</Text>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>US $0.00</Text>
                        </View>
                    </View>
                    <Text style={{
                        marginTop: 30,
                        paddingHorizontal: 20,
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>Delivery locations</Text>
                    <View style={{
                        marginTop: 10,
                        borderColor: 'rgba(0, 0, 0, 0.05)',
                        borderWidth: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 60,
                        paddingHorizontal: 20,
                    }}>
                        <TouchableOpacity style={{
                            width: '10%'
                        }}>
                            <Image
                                source={require('../../../assets/empty_circle.png')}
                                style={{
                                    width: 23,
                                    height: 23,
                                    resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{
                            width: '90%',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>Jinnah Int. Airport</Text>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>US $0.00</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        borderColor: 'rgba(0, 0, 0, 0.05)',
                        borderWidth: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 60,
                        paddingHorizontal: 20,
                    }}>
                        <TouchableOpacity style={{
                            width: '10%'
                        }}>
                            <Image
                                source={require('../../../assets/empty_circle.png')}
                                style={{
                                    width: 23,
                                    height: 23,
                                    resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{
                            width: '90%',
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>Jinnah Int. Airport</Text>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 16,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>US $0.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 20,
                paddingBottom: 30
            }}>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: 51,
                        backgroundColor: '#F7941D',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '600',
                            fontSize: 25
                        }}
                    >Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}