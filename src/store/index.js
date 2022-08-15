import { action, createStore, thunk } from 'easy-peasy';
import Api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = Api.createApiClient();

const store = createStore({
    user: null,
    cars: [],
    UI_startDate: '',
    UI_endDate: '',
    endDate: '',
    startDate: '',
    UI_endTime: '',
    UI_startTime: '',
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    setCar: action((state, payload) => {
        state.cars = payload;
    }),
    setCarList: action((state, payload) => {
        state.cars = payload
    }),
    setAllDates: action((state, payload) => {
        state.UI_startDate = payload.UI_startDate;
        state.UI_endDate = payload.UI_endDate;
        state.startDate = payload.startDate;
        state.endDate = payload.endDate;
        state.UI_endTime = payload.UI_endTime,
        state.UI_startTime = payload.UI_startTime
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
        console.log('Payload: ', payload);
        const response = await api.cityFilter(payload);
        if(response.data?.error === "failure !"){
            Alert.alert(respone.data.error);
        }
        else{
            action.setCarList(response.data);
        }
    }),
    availableCarsAction: thunk(async (action, payload) => {
        const response = await api.availableCars(payload);
        return response;
    })
});

export default store;
