export const authReducer = (state: any, action: any) => {
  // Remove the misplaced dispatch call
  // dispatch({ type: 'LOGIN', payload: { user } });

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
