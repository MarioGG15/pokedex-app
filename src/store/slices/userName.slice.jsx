import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: "",
    reducers: {
        changeUserName: (state, action) => {
            const trainerName = action.payload
            return trainerName
        }
    }
})

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;