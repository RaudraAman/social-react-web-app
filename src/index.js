import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import './styles/index.css';
import App from './components/App';
import { AuthProvider, PostsProvider } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <ToastProvider
              autoDismiss
              autoDismissTimeout={5000}
              placement="top-left"
            >
              <AuthProvider>
                <PostsProvider>
                  <App />
                </PostsProvider>
              </AuthProvider>
            </ToastProvider>
          }
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
