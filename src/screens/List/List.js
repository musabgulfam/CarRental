import React, { useRef } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native';
import { Card } from './Card';
import RBSheet from 'react-native-raw-bottom-sheet';
import { CalendarSheet } from '../../components';
import { useStoreActions, useStoreState } from 'easy-peasy';

const { height } = Dimensions.get('window');

export function List(props) {

    const refRBSheet = useRef();

    const cars = useStoreState(state => state.cars);

    const setCar = useStoreActions(actions => actions.setCar);

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
                    style={{
                        alignSelf: 'flex-start',
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
                    height: 95,
                    backgroundColor: 'rgba(217, 217, 217, 0.6)',
                    borderRadius: 7,
                    shadowColor: "rgba(0, 0, 0, 0.35)",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    marginLeft: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        justifyContent: 'space-evenly',
                        width: '100%'
                    }}>
                        <View style={{ width: '100%' }}>
                            <Text style={{
                                fontSize: 17,
                                color: 'black',
                                fontWeight: '400'
                            }}>{cars[0].city}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity
                                onPress={_ => {
                                    refRBSheet.current.open()
                                }}
                                style={{
                                    backgroundColor: 'white',
                                    height: 38,
                                    justifyContent: 'center',
                                    paddingHorizontal: 7,
                                    borderRadius: 7,
                                    width: '90%'
                                }}
                            >
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '700',
                                    color: '#F7941D'
                                }}>Select date</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 10
                                }}
                            >
                                <Image 
                                    source={require('../../../assets/submit.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        width: 21,
                                        height: 21
                                    }}
                                />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </View>
            <FlatList
                data={cars}
                renderItem={({ item }) => <Card
                    navigation={props.navigation}
                    title={item.title}
                    rent={item.rent}
                    model={item.car_model}
                    onPress={_ => {
                        setCar(item);
                        props.navigation.navigate('Detail', {
                            data: item
                        })
                    }}
                />}
                style={{
                    marginTop: 30,
                    marginHorizontal: 20
                }}
            />
        </View>
    );
}