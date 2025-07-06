import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@map': new URL('./src/map', import.meta.url).pathname,
    },
  },
}); 