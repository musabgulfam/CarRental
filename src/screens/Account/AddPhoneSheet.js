import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import { useStoreActions } from "easy-peasy";
import { AccountTextField } from "../../components";

const { height, width } = Dimensions.get('window');

export function AddPhoneSheet({ close, navigation }) {

    const [phone, setPhone] = useState('');

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1
            }}>
                <SafeAreaView style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <SafeAreaView style={{
                        position: 'absolute',
                        top: Platform.OS === "ios" ? 15 : null,
                        left: 5,
                        paddingHorizontal: 20
                    }}>
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
                    }}>Phone number</Text>
                </SafeAreaView>

                <View style={{
                    marginTop: 39,
                    paddingHorizontal: 20
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16
                    }}>Add your phone number?</Text>
                    <View style={{
                        marginTop: 18
                    }}>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}>Add your active number so that we can contact you regarding your trip and booking.</Text>
                    </View>
                    <AccountTextField 
                        value={phone}
                        onChange={text => setPhone(text)}
                    />
                </View>
            </View>
            <SafeAreaView>
                <View style={{
                    paddingHorizontal: 15
                }}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: '#F7941D',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            width: '100%',
                            height: 51
                        }}
                        onPress={_ => {
                            close()
                        }}
                    >
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 20,
                            color: 'white'
                        }}>Save and continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
} 