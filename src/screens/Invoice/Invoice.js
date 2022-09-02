import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStoreState } from 'easy-peasy';
import moment from 'moment';
import RBSheet from 'react-native-raw-bottom-sheet';
import { CheckoutSheet } from './CheckoutSheet';

const { height, width } = Dimensions.get('window');

export function Invoice(props) {

    const startDate = useStoreState(state => state.startDate);

    const endDate = useStoreState(state => state.endDate);

    const UI_startDate = useStoreState(state => state.UI_startDate);

    const UI_endDate = useStoreState(state => state.UI_endDate);

    const UI_endTime = useStoreState(state => state.UI_endTime);

    const UI_startTime = useStoreState(state => state.UI_startTime);

    const [daysApart, setDaysApart] = useState(0);

    const refRBSheetCheckout = useRef();

    useEffect(_ => {

        let startDateMoment = moment(startDate.split('-'));
        let endDateMoment = moment(endDate.split('-'));
        const diff = startDateMoment.diff(endDateMoment, 'days')
        console.log('DIFF: ', diff);
        setDaysApart(isNaN(diff) ? 1 : diff);

    }, [startDate, endDate])

    const {
        title,
        car_model: model,
        year,
        rent,
        features,
        basics,
        id,
        city
    } = props.route.params;

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 15,
                paddingTop: 30
            }}
        >
            <RBSheet
                ref={refRBSheetCheckout}
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
                <CheckoutSheet close={_ => refRBSheetCheckout.current.close()} navigation={props.navigation.navigate} />
            </RBSheet>
            {/* <SafeAreaView style={{
                // flexDirection: 'row'
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <SafeAreaView style={{
                    position: 'absolute',
                    // top: 10,
                    left: 5
                }}>
                    <TouchableOpacity
                        onPress={_ => {
                            props.navigation.goBack()
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
                <Text style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: 17
                }}>Checkout</Text>
            </SafeAreaView> */}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 20,
                        color: 'black'
                    }}>{title} {model} {year}</Text>
                </View>
                <View>
                    <Image
                        source={require('../../../assets/sample_car.png')}
                        style={{
                            resizeMode: 'contain',
                            width: 125,
                            height: 70,
                            borderRadius: 7
                        }}
                    />
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 30
            }}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>{UI_startDate}</Text>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>{UI_endTime}</Text>
                </View>
                <View>
                    <Image
                        source={require('../../../assets/right_arrow.png')}
                        style={{
                            resizeMode: 'contain',
                            width: 56,
                            height: 25
                        }}
                    />
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>{UI_endDate}</Text>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>{UI_endTime}</Text>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                marginVertical: 36,
                alignItems: 'center'
            }}>
                <View>
                    <Image
                        source={require('../../../assets/car_icon.png')}
                        style={{
                            resizeMode: 'contain',
                            width: 25,
                            height: 25,
                            marginRight: 12
                        }}
                    /></View>
                <View>
                    <Text style={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontWeight: '600',
                        fontSize: 16
                    }}>{city}</Text>
                </View>
            </View>

            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>US ${rent} x {daysApart} days</Text>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>US ${rent * daysApart}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>Total</Text>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                        color: 'black'
                    }}>US ${rent * daysApart}</Text>
                </View>
            </View>

            <View style={{
                marginVertical: 30
            }}>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderBottomWidth: 1,
                    height: 70,
                    marginTop: 10,
                    // paddingHorizontal: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            color: 'black'
                        }}>Promo Code</Text>

                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../assets/submit.png')}
                            style={{
                                width: 36,
                                height: 36,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                marginBottom: 30,
                marginTop: 15
            }}>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderBottomWidth: 1,
                    height: 70,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            color: 'black'
                        }}>Payment Info</Text>

                    </View>
                    <TouchableOpacity
                        onPress={_ => {
                            refRBSheetCheckout.current.open();
                        }}
                    >
                        <Image
                            source={require('../../../assets/submit.png')}
                            style={{
                                width: 36,
                                height: 36,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        width: 345,
                        height: 51,
                        backgroundColor: '#F7941D',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginTop: 30
                    }}
                >
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 20,
                        color: 'white'
                    }}>Book Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}