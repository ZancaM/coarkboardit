import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Enable hot reloading (use with caution, if you see bugginess you should
// just refresh the page manually. It's nice when it works, but because
// JavaScript is so dynamic, it's hard to catch all edge cases).
if (module.hot) {
    module.hot.accept();
}
