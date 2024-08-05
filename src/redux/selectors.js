export const selectUser = (state) => state.auth.user;

export const selectUserName = (state) => state.auth.user.displayName;

export const selectLoading = (state) => state.auth.loading;

export const selectPsychologies = (state) => state.psychologies.psychologies;
