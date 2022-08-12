import React, { useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import { Card } from './Card';
import RBSheet from 'react-native-raw-bottom-sheet';
import { CalendarSheet } from './CalendarSheet';

const { height } = Dimensions.get('window');

export function List(props) {

    const refRBSheet = useRef();

    return (
        <View style={{
            flex: 1,
            // paddingHorizontal: 20
        }}>
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
                <CalendarSheet close={_ => refRBSheet.current.close()} />
            </RBSheet>
            <SafeAreaView />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingTop: 18,
                paddingHorizontal: 10
            }}>
                <TouchableOpacity
                    onPress={_ => {
                        props.navigation.goBack()
                    }}
                >
                    <Image
                        source={require('../../../assets/back.png')}
                        style={{
                            width: 16,
                            height: 18,
                            resizeMode: 'contain',
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    width: 302,
                    height: 47,
                    backgroundColor: 'rgba(217, 217, 217, 0.6)',
                    borderRadius: 7,
                    shadowColor: "rgba(0, 0, 0, 0.35)",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    // marginLeft: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '400'
                            }}>Los Angeles, CA</Text>
                            <TouchableOpacity
                                onPress={_ => {
                                    refRBSheet.current.open()
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '700',
                                    color: '#F7941D'
                                }}>Select date</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../../assets/arrow_down.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 21,
                                    height: 21
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <ScrollView 
                style={{
                    marginTop: 30,
                    marginHorizontal: 20
                }}
                showsVerticalScrollIndicator={false}
            >
                <Card navigation={props.navigation}/>
                <Card navigation={props.navigation}/>
                <Card navigation={props.navigation}/>
                <Card navigation={props.navigation}/>
            </ScrollView>
        </View>
    );
}