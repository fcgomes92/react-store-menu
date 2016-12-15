/** Created by gomes on 14/12/16. */
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

injectTapEventPlugin();

render(
    <Root store={store}/>,
    document.getElementById('root')
);