import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUsersRequest,
  getUserDetailsRequest,
  postUserRequest,
  deleteUserRequest,
} from '../../api/users';
import { NewUser } from '../../interfaces/Users';

export const getUsers = createAsyncThunk('users/getUsers', () => {
  return getUsersRequest();
});

export const getUserDetails = createAsyncThunk(
  'users/getUserDetails',
  (id: string) => {
    return getUserDetailsRequest(id);
  }
);

export const resetUsers = createAction('users_reset');

export const postUser = createAsyncThunk(
  'users/postUser',
  (newUser: NewUser) => {
    return postUserRequest(newUser);
  }
);

export const deleteUser = createAsyncThunk('users/deleteUser', (id: string) => {
  return deleteUserRequest(id);
});
