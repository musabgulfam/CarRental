import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper'
import { useStoreState, useStoreActions } from 'easy-peasy';

export function Profile(props){

    const user = useStoreState(state => state.user);

    const setUser = useStoreActions(action => action.setUser);

    return (
        <ImageBackground 
            style={{
                flex: 1,
            }}
            source={require('../../../assets/profile_background.png')}
        >
            <SafeAreaView />
            <View style={{
                flex: 1
            }}>
                <View style={{
                    alignItems: 'center',
                    paddingTop: isIphoneX() ? 20 : null
                }}>
                    <Image 
                        source={require('../../../assets/user.png')}
                        style={{
                            width: 99,
                            height: 99,
                            resizeMode: 'contain',
                            borderRadius: 50
                        }}
                    />
                    <Text style={{
                        marginTop: 10,
                        fontWeight: '700',
                        fontSize: 17,
                        color: 'rgba(0, 0, 0, 0.8)'
                    }}>{user.first_name}</Text>
                </View>
                <View style={{
                    paddingTop: 72,
                    paddingHorizontal: 20
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image 
                            source={require('../../../assets/user.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Account info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image 
                            source={require('../../../assets/payment.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Payment info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image 
                            source={require('../../../assets/licence.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Licence approval</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image 
                            source={require('../../../assets/contact.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Contact support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image 
                            source={require('../../../assets/legal.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Legal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 133,
                            height: 45,
                            backgroundColor: '#F7941D',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: "#F7941D",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            
                            elevation: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Image 
                            source={require('../../../assets/logout.png')}
                            style={{
                                width: 23,
                                height: 25,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            color: 'white',
                            fontWeight: '700',
                            fontSize: 18
                        }}>Log out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    );
}