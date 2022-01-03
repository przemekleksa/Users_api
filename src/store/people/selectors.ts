export const selectUsers = (state: any) => {
  return state.users.data;
};

export const selectUser = (state: any) => {
  return state.users.detailedPerson;
};

export const selectIsLoadingUsers = (state: any) => {
  return state.users.status === 'PENDING';
};

export const selectIsRejectedUsers = (state: any) => {
  return state.users.status === 'REJECTED';
};

export const selectIsResetUsers = (state: any) => {
  return state.users.reset === true;
};
