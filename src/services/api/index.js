import { create } from 'apisauce';
import apiMonitor from './Monitor';
import { BASE_URL } from '../../config';

export const URIS = {
    signup: 'auth/signup/',
    login: 'auth/login/',
    cars: 'car/get-cars/',
    city: cityName => `dashboard/search/?city=${cityName}`,
    availableCars: `dashboard/car-available/`
};

const createApiClient = (baseURL = BASE_URL) => {
    const api = create({
        baseURL: BASE_URL,
        headers: {
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        timeout: 15000,
    });

    api.addMonitor(apiMonitor);

    const createUser = payload => {
        return api.post(URIS.signup, payload)
    };

    const login = payload => api.post(URIS.login, payload);

    const getCars = _ => api.get(URIS.cars);

    const cityFilter = cityName => api.get(URIS.city(cityName));

    const availableCars = payload => api.post(URIS.availableCars, payload);

    return {
        createUser,
        login,
        getCars,
        cityFilter,
        availableCars
    };
};

export default { createApiClient };
