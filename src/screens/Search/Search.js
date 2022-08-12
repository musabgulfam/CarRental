import React, { useRef } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    TextInput,
    Platform,
    ScrollView
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "./Card";
import RBSheet from "react-native-raw-bottom-sheet";
import { SearchSheet } from "./SearchSheet";

const { height, width } = Dimensions.get('window');

export function Search(props) {

    const refRBSheet = useRef();

    return (
        <ScrollView
            style={{
                flex: 1
            }}
            showsVerticalScrollIndicator={false}
        >
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
                height={height}
            >
                <SearchSheet 
                    close={_ => refRBSheet.current.close()} 
                    navigation={props.navigation}
                />
            </RBSheet>
            <ImageBackground
                source={require('../../../assets/search_screen_background.png')}
                style={{
                    paddingHorizontal: 20
                }}
                imageStyle={{
                    width: 473,
                    height: 540,
                }}
            >

                <SafeAreaView />

                <View
                    style={{
                        width,
                        alignItems: 'center',
                        height: 48,
                        marginTop: Platform.OS === 'ios' ? -30 : 20,
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View style={{
                        width: 300,
                        height: 47,
                        borderRadius: 30,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        paddingLeft: 10,
                    }}>
                        <TextInput
                            placeholder="City, Airports, Hotels or Address"
                            onPressIn={_ => refRBSheet.current.open()}
                            // editable={false}
                            placeholderTextColor={'rgba(0, 0, 0, 0.51)'}
                        />
                    </View>
                </View>

                <View style={{
                    marginTop: Platform.OS === 'android' ? 400 : 350,
                    paddingHorizontal: 1
                }}>
                    <Text style={{
                        color: '#F7941D',
                        fontSize: 40,
                        fontWeight: "700"
                    }}>Jimmy Jas</Text>
                    <Text style={{
                        color: '#F7941D',
                        fontSize: 40,
                        fontWeight: "700"
                    }}>Car rental</Text>
                    <Text style={{
                        fontSize: 18,
                        color: '#0196EC'
                    }}>Ride in style</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 59
                    }}>
                        <Image
                            source={require('../../../assets/support.png')}
                            style={{
                                width: 47,
                                height: 47
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: '600',
                                color: '#F7941D'
                            }}
                        >24/7 Customer support</Text>
                    </View>
                    <Text
                        style={{
                            lineHeight: 26.6,
                            fontSize: 20,
                            fontWeight: '400',
                            color: '#747474',
                            paddingRight: 10,
                            paddingLeft: 50
                        }}
                    >Roadside Assistance Live Email Support24/7 Hotline for Emergencies After hour pick up and drop off.</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 47
                    }}>
                        <Image
                            source={require('../../../assets/options.png')}
                            style={{
                                width: 47,
                                height: 47
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: '600',
                                color: '#F7941D'
                            }}
                        >Endless options</Text>
                    </View>
                    <Text
                        style={{
                            lineHeight: 26.6,
                            fontSize: 20,
                            fontWeight: '400',
                            color: '#747474',
                            paddingRight: 10,
                            paddingLeft: 50
                        }}
                    >Choose from a wide variety of cars,trucks, vans and SUVs.Customize your own short-term rentalfor discounted daily or weekly rates.Select from our third-party insuranceplans for your rental coverage to limitany out-of-pocket expenses to you forany damages to your rental car.</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 47
                    }}>
                        <Image
                            source={require('../../../assets/confidence.png')}
                            style={{
                                width: 47,
                                height: 47
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: '600',
                                color: '#F7941D'
                            }}
                        >Drive in Confidence</Text>
                    </View>
                    <Text
                        style={{
                            lineHeight: 26.6,
                            fontSize: 20,
                            fontWeight: '400',
                            color: '#747474',
                            paddingRight: 10,
                            paddingLeft: 50
                        }}
                    >All rental vehicles receive regular maintenance and routine inspections.</Text>
                </View>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '700',
                    color: '#F7941D',
                    marginBottom: 20
                }}>Browse by destination</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        paddingBottom: 15,
                        // paddingLeft: -2
                    }}
                >
                    <Card />
                    <Card />
                    <Card />
                </ScrollView>
            </ImageBackground>
        </ScrollView>
    );
}