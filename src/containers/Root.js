import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {theme} from '../settings';
import App from './App';


const Root = ({store, history}) => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={theme}>
            {/*here goes the router or the App*/}
            <App />
        </MuiThemeProvider>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object,
};

export default Root;