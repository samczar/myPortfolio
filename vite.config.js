import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Export configuration
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/' : '/', // Adjust base for production
    plugins: [react()],
  };
});