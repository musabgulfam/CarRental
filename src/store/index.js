import { action, createStore, thunk } from 'easy-peasy';
import Api from '../services/api';

const api = Api.createApiClient();

const store = createStore({
    user: null,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    createUserAction: thunk(async (action, payload) => {
        const response = await api.createUser(payload);
        console.log('Res: ', response.data);
        // if(response?.error){

        // }
    }),
    getLocationAction: thunk(async (action, payload) => {
        // const res = await api.getLocation(payload);
        // console.log('Res: ', res.data);
    })
});

export default store;
