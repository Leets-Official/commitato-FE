import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/login/github': {
        target:
          'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080', // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/login\/github/, ''),
      },
    },
  },
  proxy: {
    '/api': {
      target:
        'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ''),
    },
  },
});
