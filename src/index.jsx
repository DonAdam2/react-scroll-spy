import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
//import meta image
import '@/public/assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//root component
import App from './App';
//styles
import './scss/global.scss';
/* PLOP_INJECT_PWA_IMPORTS */

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

/* PLOP_INJECT_PWA_REGISTERER */
