import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import "./i18next.js"
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>The content is loading...</div>)}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
