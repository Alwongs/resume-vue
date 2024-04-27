<template>
    <header>
        <div class="person-info">
            <base-info />
            <contact-list />            
        </div>
        <nav class="navigation">
            <router-link to='/'>Навыки</router-link>
            <router-link to='/projects'>Проекты</router-link>
        </nav>
    </header> 
</template>

<script>
import BaseInfo from  '@/components/BaseInfo.vue';
import ContactList from  '@/components/ContactList.vue';

export default {
    name: 'AppHeader',
    components: {
        BaseInfo,
        ContactList,
    }, 
}
</script>

<style lang="scss" scoped>

.navigation {
    background-color: $zian;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 40px;
    a {
        color: white;
        text-decoration: none;
        transition: 0.4s;
    }
    a.router-link-active {
        color: rgb(255, 196, 0);
        text-decoration: underline;
    }
    a:hover {
        color: rgb(255, 196, 0);
    }
}

.person-info {
    background-color: $zian;
    color: $beige;
    padding: 24px 128px;
    display: flex;   
    justify-content: space-between;
    border-bottom: 1px solid rgb(75, 91, 112);
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 24px 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 24px 64px;
    }      
    @media (max-width: $mobile-max) {
        border-bottom: none;        
        padding: 16px 16px 0;
        flex-direction: column;        
    }  

}
</style>