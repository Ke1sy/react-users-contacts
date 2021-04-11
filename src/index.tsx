import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from '@material-ui/styles';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import store from './redux/store';
import App from './App';
import './assets/fonts/fonts.scss';
import './index.scss';


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
);


reportWebVitals();
