import React from 'react';
import ReactDOM from 'react-dom';

import store from "./redux/store"
import {Provider} from 'react-redux'
import {primary} from './ui/theme/index'
import {MuiThemeProvider} from '@material-ui/core/styles'

import './index.css';

import * as serviceWorker from './serviceWorker';
import A2p from './A2p.js';

ReactDOM.render(
        <MuiThemeProvider theme={primary}>
                <Provider store={store}>
                        <A2p />
                </Provider>
        </MuiThemeProvider>
, document.getElementById('root'));

serviceWorker.unregister();
