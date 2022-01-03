import Axios from '../utils/axios';
import { User, NewUser } from '../interfaces/Users';
import { SingleResponse } from '../interfaces/SingleResponse';

export const getUsersRequest = (): any => {
  return Axios.get('users');
};

export const getUserDetailsRequest = (
  id: string
): Promise<SingleResponse<User>> => {
  return Axios.get('users/' + id);
};

export const postUserRequest = (newUser: NewUser) => {
  return Axios.post('users', newUser);
};

export const deleteUserRequest = (id: string): Promise<unknown> => {
  return Axios.delete('users/' + id);
};
