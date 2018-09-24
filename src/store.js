import { createStore, combineReducers, compose } from 'redux';

import { colors, selectedColor } from './components/reducers';

const combined = combineReducers({
  colors,
  selectedColor
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers()
);

export default store;