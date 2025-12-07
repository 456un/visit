import axios from 'axios';

const host = import.meta.env.VITE_API_URL;

// Устанавливаем базовый URL для запросов
const api = axios.create({
    baseURL: host,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// decode post gis hex wkb
export const decodePostGisHexWkb = async (data) => {
    try {
        const response = await api.post('/api/service/postgis/decode', data);
        return response.data; // Возвращаем данные ответа
    } catch (error) {
        throw 'ошибка отправки данных';
    }
};

// encode post gis hex wkb
export const encodePostGisHexWkb = async (data) => {
    try {
        const response = await api.post('/api/service/postgis/encode', data);
        return response.data; // Возвращаем данные ответа
    } catch (error) {
        throw 'ошибка отправки данных';
    }
};

// sha + hmac hash
export const shaHash = async (data) => {
    try {
        const response = await api.post('/api/service/sha/hash', data);
        return response.data; // Возвращаем данные ответа
    } catch (error) {
        throw 'ошибка отправки данных';
    }
};