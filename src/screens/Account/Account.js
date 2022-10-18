import React, {
    useRef
} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Dimensions
} from 'react-native';
import { useStoreState } from 'easy-peasy';
import RBSheet from "react-native-raw-bottom-sheet";
import { AddPhoneSheet } from './AddPhoneSheet';

const { height, width } = Dimensions.get('window');

export function Account(props) {

    const user = useStoreState(state => state.user);

    const refRBSheet = useRef();

    return (
        <View style={{
            flex: 1,

            paddingTop: 40
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
                <AddPhoneSheet 
                    close={_ => refRBSheet.current.close()}
                />
            </RBSheet>
            <View style={{
                padding: 19,
                flexDirection: 'row',
                borderColor: 'rgba(0, 0, 0, 0.05)',
                borderWidth: 1,
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{
                        color: '#000000B2',
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Email</Text>
                </View>
                <View>
                    <Text style={{
                        color: '#F7941D',
                        fontWeight: '600',
                        fontSize: 16
                    }}>{user.email}</Text>
                </View>
            </View>
            <View style={{
                padding: 19,
                flexDirection: 'row',
                borderColor: 'rgba(0, 0, 0, 0.05)',
                borderWidth: 1,
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{
                        color: '#000000B2',
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Phone number</Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: '#F7941D',
                            fontWeight: '600',
                            fontSize: 16,
                            marginRight: 16
                        }}>{user?.phone || 'N/A'}</Text>
                        {!user.phone ? <TouchableOpacity
                            onPress={_ => refRBSheet.current.open()}
                        >
                            <Image 
                                source={require('../../../assets/submit.png')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity> : null}
                    </View>
                </View>
            </View>
        </View>
    );
}