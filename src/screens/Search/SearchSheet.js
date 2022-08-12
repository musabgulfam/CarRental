import React from "react";
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    SafeAreaView,
    TouchableOpacity
} from "react-native";

const { height, width } = Dimensions.get('window');

export function SearchSheet ({ close, navigation }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20
        }}>
            <SafeAreaView>
                <TouchableOpacity
                    onPress={_ => close()}
                >
                    <Image
                        source={require('../../../assets/cross.png')}
                        style={{
                            width: 17,
                            height: 17,
                            resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>
            </SafeAreaView>
            
            <TextInput 
                placeholder="City, Airport, Hotel or Address"
                placeholderTextColor={"rgba(0, 0, 0, 0.48)"}
                style={{
                    fontWeight: '400',
                    fontSize: 16,
                    marginTop: 16,
                    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    color: 'black'
                }}
                onSubmitEditing={_ => {
                    close();
                    navigation.navigate('List');
                }}
            />

            <View style={{
                marginTop: 25,
                flexDirection: 'row'
            }}>
                <View style={{
                    marginRight: 25
                }}>
                    <Image 
                        source={require('../../../assets/location.png')}
                        style={{
                            width: 19,
                            height: 19,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
                <View>
                    <Text style={{
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: 17
                    }}>Current Location</Text>
                </View>
            </View>

            <View style={{
                marginTop: 20,
                flexDirection: 'row'
            }}>
                <View style={{
                    marginRight: 25
                }}>
                    <Image 
                        source={require('../../../assets/recent.png')}
                        style={{
                            width: 21,
                            height: 21,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
                <View>
                    <Text style={{
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: 17
                    }}>Karachi, Sindh</Text>
                </View>
            </View>

        </View>
    );
} 