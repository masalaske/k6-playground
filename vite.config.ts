import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'k6/src/index.ts',
            name: 'MyLib'
        },
        rollupOptions: {
            external: id => /^k6/.test(id),
            output: {
                globals: {
                    k6: 'k6'
                }
            }
        }
    }
})
