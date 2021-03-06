import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from 'Store';

export default function configureStore(): Store {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
