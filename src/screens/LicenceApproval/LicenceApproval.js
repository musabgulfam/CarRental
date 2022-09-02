import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';

export function LicenceApproval(props) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20
        }}>
            {false ? <View style={{
                flex: 1
            }}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 40,
                    marginTop: 40
                }}>
                    Not approved
                </Text>
                <Text style={{
                    lineHeight: 21,
                    marginTop: 10,
                    color: 'rgba(0, 0, 0, 0.7)',
                    fontSize: 16,
                    fontWeight: '600'
                }}>No license added yet!{'\n'}
                    For license approval kindly add your license number and license state.</Text>
                <TouchableOpacity
                    onPress={_ => {

                    }}
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
                        justifyContent: 'center',
                        marginTop: 10
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: '700',
                        fontSize: 18
                    }}>Add license</Text>
                </TouchableOpacity>
            </View> : <View style={{
                flex: 1
            }}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 40,
                    marginTop: 40
                }}>
                    You're approved
                </Text>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: 'rgba(0, 0, 0, 0.7)',
                    marginTop: 10
                }}>Congratulations! You are approved.</Text>
            </View>}
            <SafeAreaView>
                {false ? <Image 
                    source={require('../../../assets/unapproved.png')}
                    style={{
                        width: 300,
                        height: 270,
                        resizeMode: 'contain',
                        alignSelf: 'flex-end'
                    }}
                /> : <Image 
                source={require('../../../assets/approved.png')}
                style={{
                    width: 300,
                    height: 270,
                    resizeMode: 'contain',
                    alignSelf: 'flex-end'
                }}
            />}
            </SafeAreaView>
        </View>
    );
}