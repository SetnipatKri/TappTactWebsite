import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import LoginMainPage from './screens/LoginMainPage';
// import RegisterMainPage from './screens/RegisterMainPage';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<LoginMainPage/>, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
