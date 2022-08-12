/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { 
    Navigation 
} from './src/navigation';
import { StoreProvider } from 'easy-peasy';
import store from './src/store';

function App(props) {
    return (
        <StoreProvider store={store}>
            <Navigation />
        </StoreProvider>
    );
}

export default App;
