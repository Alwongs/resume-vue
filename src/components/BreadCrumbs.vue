<template>
    <ul v-if="buildBreadcrumbs" class="breadcrumbs-component">
        <li><router-link :to="{name: 'home'}">{{ buildBreadcrumbs.home }}</router-link></li>
        <li>/</li>
        <li>{{ buildBreadcrumbs.app }}</li>
    </ul>
</template>

<script>
export default {

    data() {
        return {

        }
    },
    computed: {
        buildBreadcrumbs() {
            if (this.$route.name === 'project') {
                return {
                    home: 'ГЛАВНАЯ',
                    app: 'ПРОСМОТР ПРИЛОЖЕНИЯ'
                }
            } else {
                return null
            } 
        }  
    },
}
</script>

<style lang="scss" scoped>

.breadcrumbs-component {
    padding: 4px 128px 0;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 6px 64px 0;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 6px 64px 0;
    }     
    @media (max-width: $mobile-max) {
        padding: 6px 16px 0;   
        margin-bottom: 8px;   
    }    
}
.breadcrumbs-component li {
    margin-right: 4px;
    color: $zian;
    font-size: 17px;
}
</style>