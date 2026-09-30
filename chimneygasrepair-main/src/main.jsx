import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MaintenancePage } from './pages/MaintenancePage';
import './styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('React root element #root was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <MaintenancePage />
  </StrictMode>,
);
