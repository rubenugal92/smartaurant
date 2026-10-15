// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@prisma/nuxt'
  ],

   typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['node']
      }
    }
  },

  app:{

    head: {
      title: 'Mi tienda de servicios',
      meta: [{
        name: 'description',
        content:'Bienvenido a mi tienda de servicios'


      }]
    }
  },


  /*SPA -Single Page Application
  ssr:false,
  nitro:{
    preset: 'static',
    static:true
  }
    */

//Prerender - Todo el sitio

nitro:{
  prerender: {
    routes: ['/','/about','/contact','/pricing','/products'],
    ignore: ['/dashboard', '/dashboard/**'],
    //Habilitar el crawling para descubrir nuevas rutas automáticamente
    crawlLinks: false
  }
}

})