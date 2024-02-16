import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 50,
    a: 1,
    b: 2,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const persistConfig = {
  key: 'balance',
  storage,
  whitelist: ['value'],
};

export const balanceReducer = persistReducer(
  persistConfig,
  balanceSlice.reducer
);

// export const deposit = createAction('balance/deposit');

// export const withdraw = createAction('balance/withdraw');

// const initialState = {
//   value: 50,
// };

// export const balanceReducer = createReducer(initialState, builder =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     })
// );

// export const balanceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case 'balance/withdraw':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// };
