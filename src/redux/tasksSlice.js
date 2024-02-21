import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, deleteTask } from './operations';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, () => {})
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, () => {}),
});

export default slice.reducer;

// reducers: {
//   fetchPending(state, action) {
//     state.error = false;
//     state.loading = true;
//   },
//   fetchSuccess(state, action) {
//     state.loading = false;
//     state.error = false;
//     state.items.push(...action.payload);
//   },
//   fetchError(state, action) {
//     state.loading = false;
//     state.error = true;
//   },
// },

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchPending());
// const response = await axios.get(
//   'https://62584f320c918296a49543e7.mockapi.io/tasks'
// );
//     dispatch(fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchError());
//   }
// };
