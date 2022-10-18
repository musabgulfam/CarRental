import React, {
    useState
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Dimensions,
    ActivityIndicator
} from 'react-native'
import {
    TextField,
    DropDown
} from '../../components'
import { useStoreActions } from "easy-peasy";

const {height} = Dimensions.get('window');

export function Login(props){

    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');

    const loginAction = useStoreActions(actions => actions.loginAction);

    const [loading, setLoading] = useState(false);

    return (
        <ImageBackground
            style={{
                height,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 100
            }}
            source={require('../../../assets/background.png')}
        >
            <StatusBar 
                barStyle='light-content'
            />
            
            <TextField 
                placeholder={"Email"}
                value={email}
                onChange={text => setEmail(text)}
            />

            <TextField 
                placeholder={"Password"}
                value={password}
                onChange={text => setPassword(text)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={{
                marginLeft: 120
            }}>
                <Text style={{
                    color: '#0196EC',
                    fontSize: 16
                }}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={async _ => {
                    setLoading(true);
                    await loginAction({
                        email,
                        password
                    });
                    setLoading(false)
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
                {!loading ? <Text style={{
                    color: 'white',
                    fontSize: 21,
                }}>Login</Text> : <ActivityIndicator size={"large"} color="white" />}
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