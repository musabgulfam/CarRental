import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';

export function Trips(props) {

    const [selectedTab, setSelectedTab] = useState('Booked');

    return (
        <View style={{
            flex: 1
        }}>
            <SafeAreaView />
            <View style={{
                flex: 0.15,
            }}>
                <View style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 17
                    }}>Trips</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    flexDirection: 'row',
                    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
                    borderBottomWidth: 1.5
                }}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottomWidth: selectedTab === "Booked" ? 3 : null,
                            borderBottomColor: selectedTab === "Booked" ? '#F7941D' : null,
                            width: '50%'
                        }}
                        onPress={_ => {
                            setSelectedTab('Booked');
                        }}
                    >
                        <Text style={{
                            fontWeight: selectedTab === "Booked" ? '700' : '600',
                            fontSize: 16,
                            color: selectedTab === "Booked" ? '#F7941D' : 'rgba(0, 0, 0, 0.6)'
                        }}>Booked</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50%',
                            borderBottomWidth: selectedTab === "History" ? 3 : null,
                            borderBottomColor: selectedTab === "History" ? '#F7941D' : null,
                        }}
                        onPress={_ => {
                            setSelectedTab('History');
                        }}
                    >
                        <Text style={{
                            fontWeight: selectedTab === "History" ? '700' : '600',
                            fontSize: 16,
                            color: selectedTab === "History" ? '#F7941D' : 'rgba(0, 0, 0, 0.6)'
                        }}>History</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 0.85,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    {selectedTab === "Booked" ? <><Image
                        source={require('../../../assets/booked_trips.png')}
                        style={{
                            width: 345,
                            height: 225,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 30
                    }}>No trips booked</Text>
                    </> : <><Image
                        source={require('../../../assets/past_trips.png')}
                        style={{
                            width: 345,
                            height: 225,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 30
                    }}>No past trips</Text>
                    </>}
                </View>
            </View>
        </View>
    );
}