import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../../global/constant';
import APICALL from '../../../global/axios';

const initialState = {
  loading: false,
  response: [],
  error: '',
};

export const Reduxgetproduct = createAsyncThunk('product/getproduct', () => {
  //console.log('payload');
  return APICALL(
    'get',
    `${API.BASE_URL.LOGIN + API.END_POINTS.PRODUCT}`,
    {},
    {},
    {}
  );
});

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Reduxgetproduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Reduxgetproduct.fulfilled, (state, action) => {
      // return (
      state.loading = false;
      state.response = action.payload;
      state.error = '';
      // );
    });
    builder.addCase(Reduxgetproduct.rejected, (state, action) => {
      state.loading = false;
      state.response = [];
      state.error = action.error.message;
    });
  },
});

// export const { USER_LOGOUT } = loginSlice.actions;
export default ProductSlice.reducer;
