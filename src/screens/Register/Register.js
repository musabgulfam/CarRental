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
    TextField
} from '../../components'
import { useStoreActions } from "easy-peasy";

export function Register(props) {

    const createUserAction = useStoreActions(actions => actions.createUserAction);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <ImageBackground
            style={{
                flex: 1,
                justifyContent: 'center',
                paddingTop: 80,
                alignItems: 'center',
                paddingBottom: 20
            }}
            source={require('../../../assets/background.png')}
        >
            <StatusBar
                barStyle='light-content'
            />

            <Text style={{
                color: 'white',
                fontSize: 20,
                lineHeight: 24,
                textAlign: 'center',
                fontWeight: '700'
            }}>Lets create a new account here.</Text>

            <TextField
                placeholder={"Full Name"}
                value={fullName}
                onChange={text => setFullName(text)}
            />

            <TextField
                placeholder={"Email"}
                value={email}
                onChange={text => setEmail(text)}
            />

            {/* <TextField
                placeholder={"Phone"}
                value={phone}
                onChange={text => setPhone(text)}
            /> */}

            <TextField
                placeholder={"Password"}
                value={password}
                onChange={text => setPassword(text)}
                secureTextEntry={true}
            />

            <TextField
                placeholder={"Confirm Password"}
                value={confirmPassword}
                onChange={text => setConfirmPassword(text)}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={{
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#0196EC',
                    width: 105,
                    height: 44,
                    marginVertical: 10
                }}
                onPress={_ => {
                    createUserAction({
                        email,
                        first_name: fullName,
                        password,
                        phone
                    });
                }}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 21,
                }}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginBottom: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black'
                }}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={_ => {
                        props.navigation.navigate('Login');
                    }}
                >
                    <Text style={{
                        color: '#F7941D',
                        fontSize: 20
                    }}> Login</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}