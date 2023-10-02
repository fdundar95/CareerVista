import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, } from '../../utils/localStorage';
import { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk, } from './userThunk';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  isDropdownShown: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    registerUserThunk
);
export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);
export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);
export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      state.isDropdownShown = false;
      toast.success('Logged Out');
      removeUserFromLocalStorage();
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDropdown: (state) => {
      state.isDropdownShown = !state.isDropdownShown;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, { payload }) => {
          const { user } = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Hello there ${user.name}`);
        })
        .addCase(registerUser.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        })
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
          const { user } = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Welcome Back ${user.name}`);
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        })
        .addCase(updateUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state, { payload }) => {
          const { user } = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user);
          toast.success('User Updated');
        })
        .addCase(updateUser.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        })
        .addCase(clearStore.rejected, () => {
          toast.error(`There was an error`);
        });
  },
});

export const { logoutUser, toggleSidebar, toggleDropdown } = userSlice.actions;
export default userSlice.reducer;
