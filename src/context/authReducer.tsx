export const authReducer = (state: any, action: any) => {
  // Yanlış konumda bulunan dispatch çağrısını kaldır
  // dispatch({ type: 'LOGIN', payload: { user } });

  // Action tipine göre durum güncellemelerini yöneten ana switch bloğu
  switch (action.type) {
    // Kullanıcının giriş yaptığı durum
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
    // Kullanıcının çıkış yaptığı durum
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    // Tanımlanmamış bir eylem durumunda mevcut durumu geri döndür
    default:
      return state;
  }
};
