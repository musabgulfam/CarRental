import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from "@react-native-community/datetimepicker";
import moment from 'moment';

const { height, width } = Dimensions.get('window');

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(2, 'days').format(_format)

export function CalendarSheet({ close }){

    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [startDate, setStartDate] = useState(_today);

    const [endDate, setEndDate] = useState(_maxDate);

    const [markedDates, setMarkedDates] = useState({
    //    [startDate]: {selected: true, selectedColor: '#F7941D'}
    });

    return (
        <View style={{
            height,

        }}>
            <SafeAreaView style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    paddingHorizontal: 20,
                   position: 'absolute',
                   left: 10,
                   top: 20
                }}>
                    <TouchableOpacity
                        onPress={_ => {
                            close();
                        }}
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
                </View>
                <View style={{
                    alignSelf: 'center' 
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 16
                    }}>Trip Dates</Text>
                </View>
            </SafeAreaView>
            <View style={{
                height: 176,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 24
                        }}>Mon, 06 July</Text>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 18
                        }}>10:00 AM</Text>
                    </View>
                    <View>
                        <Image 
                            source={require('../../../assets/double_arrow.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                                marginHorizontal: 17
                            }}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 24
                        }}>Mon, 06 July</Text>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 18
                        }}>10:00 AM</Text>
                    </View>
                </View>
            </View>
            <Calendar 
                theme={{
                    arrowColor: '#F7941D',
                    selectedDayTextColor: 'white',
                    // backgroundColor: '#F7941D',
                    // calendarBackground: '#F7941D',
                    // textSectionTitleColor: '#F7941D',
                    textSectionTitleDisabledColor: '#F7941D',
                    selectedDayBackgroundColor: '#F7941D',
                    todayTextColor: markedDates[moment().format(_format)] ? 'white' : '#F7941D',
                    // dayTextColor: '#F7941D',
                    textDisabledColor: '#F7941D',
                    dotColor: '#F7941D',
                    selectedDotColor: '#F7941D',
                    disabledArrowColor: '#F7941D',
                    // monthTextColor: '#F7941D',
                    indicatorColor: '#F7941D',
                    // textDayFontFamily: 'monospace',
                    // textMonthFontFamily: 'monospace',
                    // textDayHeaderFontFamily: 'monospace',
                    // textDayFontWeight: '300',
                    // textMonthFontWeight: 'bold',
                    // textDayHeaderFontWeight: '300',
                    // textDayFontSize: 16,
                    // textMonthFontSize: 16,
                    // textDayHeaderFontSize: 16,
                    textDayFontSize: 20,
                    textDayFontWeight: '400',
                    textDayHeaderFontSize: 13,
                    textDayHeaderFontWeight: '400',
                    textMonthFontSize: 17,
                    textMonthFontWeight: '600',
                    // todayBackgroundColor: '#F7941D'
                }}
                style={{
                    // borderWidth: 4,
                    // borderColor: 'red'
                }}
                onDayPress={day => {
                    console.log('length: ', Object.keys(markedDates).length);
                    if(Object.keys(markedDates).length >= 2){
                        setMarkedDates({});
                        return;
                    }
                    let selectedDate = moment(day.dateString).format(_format);
                    let selected = true;
                    if(markedDates[selectedDate]){
                        selected = !(markedDates[selectedDate].selected);
                    }
                    setMarkedDates({...markedDates, ...{ [selectedDate]: { selected, selectedColor: '#F7941D'} }});
                }}
                markedDates={markedDates}
            />
            <View style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                marginTop: 20,
                width,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 16
                }}>Start time</Text>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode='time'
                    value={new Date()}
                    // locale="en-EN"
                    is24Hour={false}
                    // onConfirm={handleConfirm}
                    // onCancel={hideDatePicker}
                    style={{
                        width: 100
                    }}
                />
            </View>
            <View style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                marginTop: 20,
                width,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 16
                }}>End time</Text>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode='time'
                    value={new Date()}
                    // locale="en-EN"
                    is24Hour={false}
                    // onConfirm={handleConfirm}
                    // onCancel={hideDatePicker}
                    style={{
                        width: 100
                    }}
                />
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50
            }}>
                <TouchableOpacity
                style={{
                    width: 345,
                    height: 51,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F7941D',
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontWeight: '600',
                        fontSize: 20,
                        color: 'white'
                    }}
                >Save</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}