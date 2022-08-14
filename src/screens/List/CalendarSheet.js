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
import DateTimePickerModal from "@react-native-community/datetimepicker"
import DatePicker from 'react-native-date-picker'
import moment, { months } from 'moment';

const { height, width } = Dimensions.get('window');

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(2, 'days').format(_format)

export function CalendarSheet({ close }) {

    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [startTime, setStartTime] = useState(new Date());

    const [endTime, setEndTime] = useState(new Date());

    const [startTimeModal, setStartTimeModal] = useState(false);

    const [endTimeModal, setEndTimeModal] = useState(false);

    const [markedDates, setMarkedDates] = useState({
        //    [startDate]: {selected: true, selectedColor: '#F7941D'}
    });

    function renderTripStartDate(dates) {
        const tempObj = { ...dates };
        if (!Object.keys(tempObj).length) {
            return '--'
        }
        if (Object.keys(tempObj).length === 1) {
            let [day] = Object.keys(tempObj)
            return `${moment(day).format('ddd')}, ${moment(day).date()} ${moment(day).format('MMM')}`
        }
        let [day1, day2] = Object.keys(tempObj);
        day1 = moment(day1).format(_format);
        day2 = moment(day2).format(_format);
        // console.log('Day1: ', day1, ' Day2: ', day2);
        if (day1 < day2) {
            return `${moment(day1).format('ddd')}, ${moment(day1).date()} ${moment(day1).format('MMM')}`
        }
        else if (day2 < day1) {
            return `${moment(day2).format('ddd')}, ${moment(day2).date()} ${moment(day2).format('MMM')}`
        }
    }

    function renderTripEndDate(dates) {
        const tempObj = { ...dates };
        if (Object.keys(tempObj).length <= 1) {
            // console.log('Dates: ', tempObj);
            return '--'
        }
        let [day1, day2] = Object.keys(tempObj);
        day1 = moment(day1).format(_format);
        day2 = moment(day2).format(_format);
        // console.log('Day1: ', day1, ' Day2: ', day2);
        if (day1 > day2) {
            return `${moment(day1).format('ddd')}, ${moment(day1).date()} ${moment(day1).format('MMM')}`
        }
        else if (day2 > day1) {
            return `${moment(day2).format('ddd')}, ${moment(day2).date()} ${moment(day2).format('MMM')}`
        }
    }

    // console.log('MD: ', markedDates);

    return (
        <View style={{
            height,

        }}>
            <DatePicker
                modal
                open={endTimeModal}
                date={endTime}
                onConfirm={(date) => {
                    setEndTimeModal(false)
                    setEndTime(date)
                }}
                onCancel={() => {
                    setEndTimeModal(false)
                }}
                mode="time"
            />
            <DatePicker
                modal
                open={startTimeModal}
                date={startTime}
                onConfirm={(date) => {
                    setStartTimeModal(false)
                    setStartTime(date)
                }}
                onCancel={() => {
                    setStartTimeModal(false)
                }}
                mode="time"
            />
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
                        }}>{renderTripStartDate({ ...markedDates })}</Text>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 18
                        }}>{moment(startTime).format('LT')}</Text>
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
                        }}>{renderTripEndDate({ ...markedDates })}</Text>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 18
                        }}>{moment(endTime).format('LT')}</Text>
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
                    let selectedDate = moment(day.dateString).format(_format);
                    if (_today > selectedDate) {
                        return;
                    }
                    // console.log('length: ', Object.keys(markedDates).length);
                    if (Object.keys(markedDates).length >= 2) {
                        setMarkedDates({});
                        return;
                    }
                    let tempObj = { ...markedDates };
                    let selected = true;
                    if (markedDates[selectedDate]) {
                        // selected = !(markedDates[selectedDate].selected);
                        delete tempObj[selectedDate];
                    }
                    else {
                        tempObj[selectedDate] = { selected: true, selectedColor: '#F7941D' }
                    }
                    setMarkedDates({ ...tempObj });
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
                {/* <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode='time'
                    value={startTime}
                    onConfirm={date => setStartTime(new Date(date.timestamp))}
                    // locale="en-EN"
                    is24Hour={false}
                    // onConfirm={handleConfirm}
                    // onCancel={hideDatePicker}
                    style={{
                        width: 100
                    }}
                /> */}
                <TouchableOpacity
                    onPress={_ => {
                        setStartTimeModal(true);
                    }}
                    style={{
                        width: 98,
                        height: 34,
                        borderRadius: 8,
                        backgroundColor: 'rgba(118, 118, 128, 0.12)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 17
                    }}>{moment(startTime).format('LT')}</Text>
                </TouchableOpacity>
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
                {/* <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode='time'
                    value={endTime}
                    onConfirm={date => {
                        // console.log('date: ', date)
                        setEndTime(date)
                    }}
                    // locale="en-EN"
                    is24Hour={false}
                    // onConfirm={handleConfirm}
                    // onCancel={hideDatePicker}
                    style={{
                        width: 100
                    }}
                /> */}
                <TouchableOpacity
                    onPress={_ => {
                        setEndTimeModal(true);
                    }}
                    style={{
                        width: 98,
                        height: 34,
                        borderRadius: 8,
                        backgroundColor: 'rgba(118, 118, 128, 0.12)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        fontWeight: '400',
                        fontSize: 17
                    }}>{moment(endTime).format('LT')}</Text>
                </TouchableOpacity>
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