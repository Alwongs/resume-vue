const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "/resume-vue/" : "/",
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/style.scss";
                `
            }
        }
    }    
})
