import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

// Асинхронный thunk для получения данных пользователя
export const fetchData = createAsyncThunk(
    'data/fetchData', // Имя действия
    async (_, { rejectWithValue }) => {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage

        try {
            const response = await axios.get('https://backend.examify.uz/api/user/profile', {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            return response.data; 
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Если ошибка 401 (неавторизован), удаляем токен
                // localStorage.removeItem('token');
            }
            // Возвращаем ошибку с помощью rejectWithValue
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);

// Slice для управления состоянием данных
const MyinfoSlice = createSlice({
    name: 'data',
    initialState: {
        data: null, // Здесь будут храниться данные пользователя
        status: 'idle', // Состояние запроса: 'idle', 'loading', 'succeeded', 'failed'
        error: null, // Ошибка, если запрос завершился неудачей
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Когда запрос начинается
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
                state.error = null; // Очищаем предыдущую ошибку
            })
            // Когда запрос успешно завершен
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; // Сохраняем полученные данные
            })
            // Когда запрос завершился ошибкой
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'An error occurred'; // Сохраняем сообщение об ошибке
            });
    },
});

// Экспортируем редюсер
export default MyinfoSlice.reducer;