import axios from 'axios';

const host = import.meta.env.VITE_API_URL;

// Устанавливаем базовый URL для запросов
const api = axios.create({
    baseURL: host,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});

// Функция для отправки данных формы
export const sendFormData = async (data) => {
    try {
        const response = await api.post('/api/telegram/send', data);
        return response.data; // Возвращаем данные ответа
    } catch (error) {
        throw 'Произошла ошибка при отправке данных';
    }
};