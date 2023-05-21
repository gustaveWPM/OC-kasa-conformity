import { useReducer } from 'react';
import KasaFooter from './components/KasaFooter';
import KasaRouter from './components/KasaRouter';
import { AppContext, reducer, useAppContext } from './contexts/AppContext';
import initializeKasaTheme from './retrieveOrInferTheme';

export default function App() {
  initializeKasaTheme();
  const { state } = useAppContext();
  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <AppContext.Provider value={{ state: currentState, dispatch }}>
      <KasaRouter />
      <KasaFooter />
    </AppContext.Provider>
  );
}
