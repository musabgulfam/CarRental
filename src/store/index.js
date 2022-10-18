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
    selectedCar: null,
    reservation: null,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    setReservation: action((state, payload) => {
        state.reservation = payload;
    }),
    setCar: action((state, payload) => {
        // console.log('Pay: ', payload);
        state.selectedCar = payload;
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
        console.log('Signup resp: ', response.data);
        if(response.data.msg === "success !" && response.ok){
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
        console.log('Response (Login): ', response.data);
        if(response.data.error === "invalid credentials"){
            alert('Invalid credentials');
        }
        else if(!response.data.error && response.ok){
            // console.log('res: ', response.data);
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
    getCarsAction: thunk(async (action, payload) => {
        const response = await api.getCars();
        action.setCar(response.data)
    }),
    cityFilterAction: thunk(async (action, payload) => {
        const response = await api.cityFilter(payload);
        if(response.ok){
            action.setCarList(response.data);
        }
        return response;
    }),
    availableCarsAction: thunk(async (action, payload) => {
        const response = await api.availableCars(payload);
        return response;
    }),
    saveReservationAction: thunk(async (actions, payload) => {
        const res = await api.saveReservation(payload);
        actions.setReservation(res.data[0]);
        return res;
    }),
    updateReservation: thunk(async (action, payload) => {
        const res = await api.updateReservation(payload);
        return res;
    }),
    updateUserInfoAction: thunk(async (action, payload) => {
        console.log("Payload: ", payload);
        const res = await api.updateUserInfo(payload);
        console.log('New user: ', res.data);
        if(res.ok){
            const jsonValue = JSON.stringify(res.data);
            await AsyncStorage.setItem('user', jsonValue);
            action.setUser(res.data);
        }
    })
});

export default store;
