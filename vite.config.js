import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins:[
    react(),
    VitePWA({
      registerType:'autoUpdate',
      manifest:{
        name:'SceneWord 3.0',
        short_name:'SceneWord',
        display:'standalone',
        theme_color:'#66c6c0',
        background_color:'#f7f8f8'
      }
    })
  ]
})