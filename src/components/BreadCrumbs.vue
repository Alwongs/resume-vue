<template>
    <ul 
        v-if="buildBreadcrumbs" 
        class="breadcrumbs-component"
    >
        <li>
            <router-link :to="{name: 'home'}">
                {{ buildBreadcrumbs.home }}
            </router-link>
        </li>

        <li class="breadcrumbs-component__devider"></li>

        <li>
            {{ buildBreadcrumbs.app }}
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        buildBreadcrumbs() {
            if (this.$route.name === 'home') {

                return {
                    home: 'Главная',
                    app: ''
                }
                
            } else if (this.$route.name === 'projects') {

                return {
                    home: 'Главная',
                    app: 'проекты'
                }

            } else if (this.$route.name === 'project') {

                return {
                    home: 'Главная',
                    app: 'проект'
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
    padding: 5px 128px 5px;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 6px 64px 5px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 6px 64px 5px;
    }     
    @media (max-width: $mobile-max) {
        padding: 6px 16px 5px;   
        margin-bottom: 10px;   
    }    
    &__devider {
        background-image: url("../assets/images/icons/breadcrumbs.svg");   
        background-repeat: no-repeat;
        background-size: 120%;
        background-position: -1px -2px;
        width: 20px;
        height: 20px;   
        margin: 0;    
    }
}
.breadcrumbs-component li {
    color: $zian;
    font-size: 17px;
}
</style>