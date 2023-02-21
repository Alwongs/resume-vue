export default {
    goToUrl: (url) => {
        window.location.href = url;
    },
    goToItem: (name, params) => {
        this.$router.push({
            name, 
            params
        })
    }    
}

