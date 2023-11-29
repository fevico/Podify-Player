import AppContainer from '@components/AppContainer';
import AppNavigator from '@src/navigation/Index';
import store from '@src/store';
import { Provider } from 'react-redux';


const App = () => {

  return(
    <Provider store={store}>
      <AppContainer>
      <AppNavigator/> 
      </AppContainer>
    </Provider>

  ) 
};


export default App;     
