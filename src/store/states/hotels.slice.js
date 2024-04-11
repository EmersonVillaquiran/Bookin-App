import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotels:(state, action) => action.payload
    }
})

export const { setHotels } = hotelsSlice.actions;

export default hotelsSlice.reducer;

export const getHotelesThunk = (url) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setHotels(res.data)))
        .catch(err => console.log(err))
}
