export const splashReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SHOW_SPLASH':
      return {...state, showSplash: true};
    case 'HIDE_SPLASH':
      return {...state, showSplash: false};
    default:
      return state;
  }
};
