import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './authService';

const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',

}
export const registerUserData = createAsyncThunk('auth/register', async (data, thunkAPI
) => {
    try {
        return await authService.registerUser(data)

    } catch (error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message)
    }
}

)







export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = ''
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = action.payload
            })

            .addCase(registerUserData.fulfilled, (state, action) => {
                state.isLoading = true;
                state.isSuccess = true;
                state.user = action.payload
            })
    }

})


export const { reset } = authSlice.actions
export default authSlice.reducer;
