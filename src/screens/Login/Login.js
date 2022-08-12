import React, {
    useState
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Image
} from 'react-native'
import {
    TextField,
    DropDown
} from '../../components'

export function Login(props){
    return (
        <ImageBackground
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 20
            }}
            source={require('../../../assets/background.png')}
        >
            <StatusBar 
                barStyle='light-content'
            />
            
            <TextField 
                placeholder={"Email"}
            />

            <TextField 
                placeholder={"Password"}
            />

            <TextField 
                placeholder={"Driver license #"}
            />

            <DropDown text={"Driver license state"} />

            <TouchableOpacity style={{
                marginLeft: 120
            }}>
                <Text style={{
                    color: '#0196EC',
                    fontSize: 16
                }}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={_ => {
                    props.navigation.navigate('Main');
                }}
                style={{
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#0196EC',
                    width: 105,
                    height: 44,
                    marginBottom: 10,
                    marginTop: 100
                }}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 21,
                }}>Login</Text>
            </TouchableOpacity>

            {/* <Text style={{
                fontSize: 20
            }}>Already have an account? <TouchableOpacity>
                    <Text style={{
                        color: '#0196EC',
                        fontSize: 20
                    }}>Login</Text>
                </TouchableOpacity></Text> */}

        </ImageBackground>
    );
}