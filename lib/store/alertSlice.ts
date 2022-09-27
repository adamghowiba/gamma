import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertProps } from '../../components/alert/Alert';
import { store } from './store';

export const alertSlice = createSlice({
  name: 'alert',
  initialState: [] as AlertProps[],
  reducers: {
    addAlert: (state, action: PayloadAction<AlertProps>) => {
      state = [...state, { ...action.payload, id: Math.floor(Math.random() * 2000) }];

      return state;
    },
    removeAlert: (state, action: PayloadAction<number>) => {},
    setAlert: (state, action: PayloadAction<AlertProps[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addAlert, setAlert } = alertSlice.actions;

export default alertSlice.reducer;
