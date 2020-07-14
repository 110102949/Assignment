/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import {Profilereducer} from './Reducer/Profilereducer';

const store = createStore(Profilereducer);

const Providerstore = () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);


AppRegistry.registerComponent(appName, () => Providerstore);
