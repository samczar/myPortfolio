import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Export configuration
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/myPortfolio/' : '/', // Adjust base for production
    plugins: [react()],
  };
});