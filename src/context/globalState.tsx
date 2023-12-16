import React, {createContext, useContext, useReducer, ReactNode} from 'react';

// Uygulama durumu için başlangıç değerleri
interface GlobalState {
  isBooting: boolean;
  // Diğer durumları ekleyebilirsiniz.
}

// Eylem türleri
type GlobalStateAction = {type: 'SET_IS_BOOTING'; payload: boolean};
// Diğer eylem türlerini ekleyebilirsiniz.

// Bağlam oluştur
const GlobalStateContext = createContext<
  | {
      state: GlobalState;
      dispatch: React.Dispatch<GlobalStateAction>;
    }
  | undefined
>(undefined);

// Başlangıç durumu
const initialState: GlobalState = {
  isBooting: true,
  // Diğer başlangıç durumlarını ekleyebilirsiniz.
};

// Reducer fonksiyonu
const globalStateReducer = (
  state: GlobalState,
  action: GlobalStateAction,
): GlobalState => {
  switch (action.type) {
    case 'SET_IS_BOOTING':
      return {...state, isBooting: action.payload};
    // Diğer durumları ekleyebilirsiniz.
    default:
      return state;
  }
};

// GlobalStateProvider bileşeni
const GlobalStateProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// useGlobalState hook'u
const useGlobalState = (): [GlobalState, React.Dispatch<GlobalStateAction>] => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return [context.state, context.dispatch];
};

export {GlobalStateProvider, useGlobalState};
