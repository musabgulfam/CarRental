import { action, createStore, thunk } from 'easy-peasy';
import Api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = Api.createApiClient();

const store = createStore({
    user: null,
    cars: [],
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    setCar: action((state, payload) => {
        state.cars = payload;
    }),
    setCarList: action((state, payload) => {
        state.cars = payload
    }),
    createUserAction: thunk(async (action, payload) => {
        const response = await api.createUser(payload);
        if(response.data.msg === "success !"){
            action.setUser({
                "id": response.data?.id || '',
                "first_name": response.data?.first_name || '',
                "email": response.data?.email || '',
                "phone": response.data?.phone || ''
            });
            try {
                const jsonValue = JSON.stringify({
                    "id": response.data?.id || '',
                    "first_name": response.data?.first_name || '',
                    "email": response.data?.email || '',
                    "phone": response.data?.phone || ''
                })
                await AsyncStorage.setItem('user', jsonValue)
              } catch (e) {
                console.error(e);
              }
        }
    }),
    loginAction: thunk(async (action, payload) => {
        const response = await api.login(payload);
        action.setUser({
            "id": response.data?.id || '',
            "first_name": response.data?.first_name || '',
            "email": response.data?.email || '',
            "phone": response.data?.phone || ''
        });
    }),
    getCarsAction: thunk(async (action, payload) => {
        const response = await api.getCars();
        action.setCar(response.data)
    }),
    cityFilterAction: thunk(async (action, payload) => {
        const response = await api.cityFilter(payload);
        if(response.data?.error === "failure !"){
            Alert.alert(respone.data.error);
        }
        else{
            action.setCarList(response.data);
        }
    })
});

export default store;
