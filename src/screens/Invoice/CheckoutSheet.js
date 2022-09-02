import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { StripeProvider, CardField } from '@stripe/stripe-react-native';

export function CheckoutSheet({close}) {
    return (
        <StripeProvider
            publishableKey="pk_test_51JFydUSIM90cAhQ35WIzHS6ESS4dNhvozKq1xNKQa7plueeyAJPSWiPiRM92gZHyvRDxr6u91eYYSUKjWxAjHXIG00FRSZ43UM"
            urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
        >
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1
                }}>
                    <SafeAreaView style={{
                        // flexDirection: 'row'
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <SafeAreaView style={{
                            position: 'absolute',
                            top: Platform.OS === "ios" ? 15 : null,
                            left: 5,
                            paddingHorizontal: 20
                        }}>
                            {/* <SafeAreaView /> */}
                            <TouchableOpacity
                                onPress={_ => {
                                    close()
                                }}
                            >
                                <Image
                                    source={require('../../../assets/cross.png')}
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
                        }}>Payment info</Text>
                    </SafeAreaView>
                    <CardField
                        postalCodeEnabled={true}
                        placeholders={{
                            number: '4242 4242 4242 4242',
                        }}
                        cardStyle={{
                            backgroundColor: '#FFFFFF',
                            textColor: '#000000',
                        }}
                        style={{
                            width: '100%',
                            height: 50,
                            marginVertical: 30,
                        }}
                        onCardChange={(cardDetails) => {
                            console.log('cardDetails', cardDetails);
                        }}
                        onFocus={(focusedField) => {
                            console.log('focusField', focusedField);
                        }}
                    />
                </View>
                <View style={{
                    paddingHorizontal: 20,
                    paddingBottom: 30
                }}>
                    <TouchableOpacity
                        onPress={_ => {
                            navigation('Location');
                            close();
                        }}
                        style={{
                            width: '100%',
                            height: 51,
                            backgroundColor: '#F7941D',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: '600',
                                fontSize: 25
                            }}
                        >Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </StripeProvider>
    );
}