import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const DEFAULT_STATE = {
  recycled_material_weights: [{
    material: 'aluminum',
    weight: 3
  }, {
    material: 'batteries',
    weight: 15
  }, {
    material: 'bottles',
    weight: 4
  }, {
    material: 'cans',
    weight: 5
  }, {
    material: 'cardboard',
    weight: 2
  }, {
    material: 'computer_parts',
    weight: 30
  }, {
    material: 'glass',
    weight: 4
  }, {
    material: 'paper',
    weight: 1
  }, {
    material: 'wood',
    weight: 3
  }]
};

export default function configureStore(initialState = DEFAULT_STATE) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}
