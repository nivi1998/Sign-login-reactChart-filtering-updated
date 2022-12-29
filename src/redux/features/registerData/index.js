import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: [],
};

const userCollectionSlice = createSlice({
  name: 'collectionSlice',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { addUsers } = userCollectionSlice.actions;
export default userCollectionSlice.reducer;
