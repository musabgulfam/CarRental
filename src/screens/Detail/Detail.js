import React, { useRef, useState } from "react";
import {
    Image,
    TouchableOpacity,
    View,
    Text,
    ScrollView,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import { useStoreActions, useStoreState } from "easy-peasy";
import RBSheet from 'react-native-raw-bottom-sheet';
import { CalendarSheet } from "../../components";
import { DeliveryOptionsSheet } from "./DeliveryOptionsSheet";

const { height, width } = Dimensions.get('window');

export function Detail(props) {

    const UI_startDate = useStoreState(state => state.UI_startDate);

    const UI_endDate = useStoreState(state => state.UI_endDate);

    const startDate = useStoreState(state => state.startDate);

    const endDate = useStoreState(state => state.endDate);

    const availableCarsAction = useStoreActions(actions => actions.availableCarsAction);

    const UI_endTime = useStoreState(state => state.UI_endTime);

    const UI_startTime = useStoreState(state => state.UI_startTime);

    const [loading, setLoading] = useState(false);

    const {
        title,
        car_model: model,
        year,
        rent,
        features,
        basics,
        id,
        city
    } = props.route.params.data;

    const refRBSheet = useRef();

    const refRBSheetDelivery = useRef();

    return (
        <ScrollView 
            style={{
                flex: 1
            }}
            showsVerticalScrollIndicator={false}    
        >
            <RBSheet
                ref={refRBSheetDelivery}
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
                <DeliveryOptionsSheet close={_ => refRBSheetDelivery.current.close()} navigation={props.navigation.navigate} />
            </RBSheet>
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
            <View style={{
                height: 300
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
                }}>
                    <View style={{
                        paddingHorizontal: 20,
                        position: 'absolute',
                        left: 1,
                        top: 40
                    }}>
                        <TouchableOpacity
                            onPress={_ => {
                                props.navigation.goBack();
                            }}
                        >
                            <Image
                                source={require('../../../assets/back.png')}
                                style={{
                                    width: 20,
                                    height: 30,
                                    resizeMode: 'contain',
                                    tintColor: 'white'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    source={require('../../../assets/sample_car.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover'
                    }}
                />
            </View>
            <View style={{
                paddingHorizontal: 15,
                marginTop: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: '700',
                        lineHeight: 33.25,
                        color: 'black'
                    }}>{`${title} ${model} ${year}`}</Text>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('../../../assets/star.png')}
                                style={{
                                    width: 16,
                                    height: 15,
                                    resizeMode: 'contain',
                                    marginRight: 5
                                }}
                            />
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 20,
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>4.5</Text>
                        </View>
                    </View>
                </View>
                <Text style={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontSize: 15,
                    fontWeight: '600',
                    marginTop: 10
                }}>{city} Trips</Text>
            </View>
            <View style={{
                paddingHorizontal: 15,
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Selected Dates</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderBottomWidth: 1,
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/calendar.png')}
                            style={{
                                width: 25,
                                height: 25,
                                resizeMode: 'contain',
                                marginRight: 15
                            }}
                        />
                        <View>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 16,
                                color: 'black'
                            }}>{UI_startDate !== "" ? `${UI_startDate}, ${UI_startTime}` : "Start date: N/A"}</Text>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 16,
                                color: 'black'
                            }}>{UI_endDate !== "" ? `${UI_endDate}, ${UI_endTime}` : "End date: N/A"}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={_ => {
                            refRBSheet.current.open()
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
            <View style={{
                paddingHorizontal: 15,
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Pickup & Return</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderBottomWidth: 1,
                    height: 70,
                    marginTop: 10,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/car_icon.png')}
                            style={{
                                width: 25,
                                height: 25,
                                resizeMode: 'contain',
                                marginRight: 15
                            }}
                        />
                        <View>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 16,
                                color: 'black'
                            }}>{city}</Text>
                            {/* <Text style={{
                                fontWeight: '400',
                                fontSize: 16,
                                color: 'black'
                            }}>Mon, 06 July, 10:00 AM</Text> */}
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={_ => {
                            refRBSheetDelivery.current.open();
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
            <View style={{
                paddingHorizontal: 15,
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Car basics</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderBottomWidth: 1,
                    height: 119,
                    marginTop: 10,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/door_icon.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginTop: 5
                        }}>2 doors</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/seat_icon.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginTop: 5
                        }}>2 seats</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../assets/gas_icon.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginTop: 5,
                            textAlign: 'center'
                        }}>Gas</Text>
                    </View>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 15,
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Description</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    borderBottomWidth: 1,
                    // height: 70,
                    marginTop: 10,
                    // paddingHorizontal: 15,
                    // alignItems: 'center',
                    // flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20,
                        letterSpacing: 0.1
                    }}>The Lamborghini Aventador is the most ferocious car in the lineup, with its 6.5-litre V12 generating an impressive 750 horsepower, while the basic engine develops a "mere" 700.</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Engine -	6,5 l V12</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Power -	700 hp @ 8,250 rpm (522 kW)</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Torque -	509 lb·ft @ 5,500 rpm (690 N·m)</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Induction -	Atmospheric</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Fuel type -	Premium</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Transmission -	7-speed automatic</Text>
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 19.53,
                        marginTop: 20,
                        color: '#000000',
                        lineHeight: 20
                    }}>Drivetrain -	AWD</Text>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 15,
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: 'rgba(0, 0, 0, 0.5)'
                }}>Features</Text>
                <View style={{
                    borderTopWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    // borderBottomWidth: 1,
                    // height: 70,
                    marginTop: 10,
                    // paddingHorizontal: 15,
                    // alignItems: 'center',
                    // flexDirection: 'row',
                    // justifyContent: 'space-between',
                    paddingTop: 20
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/auto_transmission_icon.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>Automatic transmission</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/4WD_icon.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>All-wheel drive</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/apple_play.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>Apple CarPlay</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/android_auto.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>Android Auto</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/bluetooth.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>Bluetooth</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/GPS_icon.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>GPS</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Image
                            source={require('../../../assets/sunroof.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 15,
                            color: 'black'
                        }}>Sunroof</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 12,
                }}
            >
                <View style={{
                    height: 90,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 12,
                    // justifyContent: 'center'
                    // borderWidth: 3,
                    // borderColor: 'green'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 15
                    }}>
                        <View style={{
                            height: 90,
                            // borderWidth: 3,
                            // borderColor: 'red',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                // alignSelf: 'flex-end',
                                color: '#00000099',
                                fontWeight: '500',
                                fontSize: 20
                            }}>US <Text style={{
                                fontSize: 20,
                                fontWeight: '900',
                                color: '#00000099'
                            }}>$ {rent}</Text>/day</Text>
                            {/* <Text style={{
                                fontWeight: '600',
                                fontSize: 14,
                                fontStyle: 'italic',
                                color: 'rgba(0, 0, 0, 0.5)'
                            }}>US $456/day est. total</Text> */}
                        </View>
                        <TouchableOpacity
                            onPress={async _ => {
                                // if(startDate === "" || endDate === ""){
                                //     alert("Please select start and end date.");
                                //     return;
                                // }
                                // setLoading(true)
                                // const response = await availableCarsAction({
                                //     car_id: id,
                                //     start_date: startDate,
                                //     end_date: endDate
                                // });
                                // console.log('RR: ', response.data);
                                // if(response.data.msg !== "success"){
                                //     alert("Car is not available in specified time period.")
                                // }
                                // else{
                                //     // props.navigation.navigate('Invoice', {
                                //     //     title,
                                //     //     rent,
                                //     //     id,
                                //     //     model,
                                //     //     year,
                                //     //     city
                                //     // });
                                //     // props.navigation.navigate('Delivery');
                                // }
                                // setLoading(false)
                                props.navigation.navigate('Invoice', {
                                    title,
                                    rent,
                                    id,
                                    model,
                                    year,
                                    city
                                });
                            }}
                            style={{
                                width: 124,
                                height: 42,
                                backgroundColor: '#F7941D',
                                borderRadius: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {!loading ? <Text
                                style={{
                                    fontWeight: '600',
                                    fontSize: 17,
                                    color: 'white'
                                }}
                            >Continue</Text> : <ActivityIndicator 
                                size={"large"}
                                color="white"
                            />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}