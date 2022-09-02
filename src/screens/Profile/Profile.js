import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Modal
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper'
import { useStoreState, useStoreActions } from 'easy-peasy';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const { width } = Dimensions.get('window');

export function Profile(props) {

    const user = useStoreState(state => state.user);

    const setUser = useStoreActions(action => action.setUser);

    const [modalVisible, setModalVisible] = useState(false);

    const [profilePic, setProfilePic] = useState('');

    async function onCameraPressed(){
        const response = await launchCamera({ mediaType: 'photo', maxHeight: 150, maxWidth: 150 });
        processImages(response)
    }

    async function onGalleryPressed(){
        const response = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1, maxHeight: 150, maxWidth: 150 });
        processImages(response)
    }

    async function processImages(response){
        // console.log('result', response)
        if (response.didCancel) {
            // return Toast.show('')
            console.error('Your have cancel photo picker.')
        }
        else if (response.errorCode) {
            // return Toast.show(response.errorCode)
            console.error(response.errorCode)
        }
        else {
            const imageArray = []
            response.assets?.map((item) => {
                if (item.fileSize > 5000000) {
                    return Toast.show('Your image is too large, please select lower size of image.')
                }
                else {
                    imageArray.push({
                        name: item.fileName,
                        type: item.type,
                        uri: item.uri
                    })
                }
            })
            // onCloseIconPressed()
            setModalVisible(false)
            setProfilePic(imageArray[0].uri)
            
        }
    }

    return (
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={require('../../../assets/profile_background.png')}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={{
                                marginVertical: 15,
                                borderColor: 'grey',
                                borderWidth: 2,
                                padding: 10
                            }}
                            onPress={_ => {
                                onCameraPressed();
                            }}
                        >
                            <Text>Choose from Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                // marginVertical: 15,
                                borderColor: 'grey',
                                borderWidth: 2,
                                padding: 10,
                                // marginBottom: 10
                            }}
                            onPress={_ => onGalleryPressed()}
                        >
                            <Text>Choose from gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginTop: 20
                            }}
                            onPress={_ => {
                                setModalVisible(false);
                            }}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <SafeAreaView />
            <View style={{
                flex: 1
            }}>
                <View style={{
                    alignItems: 'center',
                    paddingTop: isIphoneX() ? 20 : null
                }}>
                    <View style={{
                        position: 'absolute',
                        right: (width / 2) - 45,
                        marginTop: isIphoneX() ? 10 : null
                    }}>
                        <TouchableOpacity
                            onPress={_ => {
                                setModalVisible(true)
                            }}
                            style={{
                                width: 28,
                                height: 28,
                                // resizeMode: 'contain'
                            }}
                        >
                            <Image
                                source={require('../../../assets/edit.png')}
                                style={{
                                    width: 28,
                                    height: 28,
                                    resizeMode: 'contain'
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    {profilePic === '' ? <Image
                        source={require('../../../assets/user.png')}
                        style={{
                            width: 99,
                            height: 99,
                            resizeMode: 'contain',
                            borderRadius: 50
                        }}
                    /> : <Image 
                        source={{
                            uri: profilePic
                        }}
                        style={{
                            width: 99,
                            height: 99,
                            resizeMode: 'contain',
                            borderRadius: 50
                        }}
                    />}
                    <Text style={{
                        marginTop: 35,
                        fontWeight: '700',
                        fontSize: 17,
                        color: 'rgba(0, 0, 0, 0.8)'
                    }}>{user?.first_name || ''}</Text>
                </View>
                <View style={{
                    paddingTop: 72,
                    paddingHorizontal: 20
                }}>
                    <TouchableOpacity 
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 35
                        }}
                        onPress={_ => {
                            props.navigation.navigate('Account');
                        }}
                    >
                        <Image
                            source={require('../../../assets/user.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Account info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image
                            source={require('../../../assets/payment.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Payment info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 35
                        }}
                        onPress={_ => {
                            props.navigation.navigate('LicenceApproval');
                        }}
                    >
                        <Image
                            source={require('../../../assets/licence.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Licence approval</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image
                            source={require('../../../assets/contact.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Contact support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 35
                    }}>
                        <Image
                            source={require('../../../assets/legal.png')}
                            style={{
                                width: 27,
                                height: 27,
                                resizeMode: 'contain',
                                marginRight: 20,
                                // tintColor: 'rgba(0, 0, 0, 0.6)'
                            }}
                        />
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.7)',
                            fontWeight: '600',
                            fontSize: 16
                        }}>Legal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async _ => {
                            setUser(null);
                            await AsyncStorage.removeItem("user");
                        }}
                        style={{
                            width: 133,
                            height: 45,
                            backgroundColor: '#F7941D',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: "#F7941D",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,

                            elevation: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        <Image
                            source={require('../../../assets/logout.png')}
                            style={{
                                width: 23,
                                height: 25,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            color: 'white',
                            fontWeight: '700',
                            fontSize: 18
                        }}>Log out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});