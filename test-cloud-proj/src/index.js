import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // AWS Amplify configuration

Amplify.configure(awsconfig); // Configure AWS Amplify with the settings from aws-exports.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
