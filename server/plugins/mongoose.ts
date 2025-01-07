   // server/plugins/mongoose.ts

   import { defineNitroPlugin } from '#imports';
   import mongoose from 'mongoose';

   export default defineNitroPlugin(async (nitroApp) => {
     const config = useRuntimeConfig();

     try {
       await mongoose.connect(config.MONGODB_URI);
       console.log('✅ Успешное подключение к MongoDB');
     } catch (err) {
       console.error('❌ Ошибка подключения к MongoDB:', err);
     }
   });