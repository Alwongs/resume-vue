<template>
    <header class="header">
        <div class="header__left">
            <div class="header__image">
                <router-link :to="{name: 'home'}">
                    <img src="@/assets/images/me.jpg" alt="photo">
                </router-link>
            </div> 

            <div class="header__info">         
                <h1>Мартынов<br>Александр</h1>
                <h2>web-разработчик<br><small>(без опыта)</small></h2>
                <p>г.Ульяновск</p>
            </div>
        </div>

        <contact-list class="header__right"/>
    </header>  
</template>

<script>
import ContactList from  '@/components/ContactList.vue'

export default {
    name: 'AppHeader',
    components: {
        ContactList
    }
}
</script>

<style lang="scss" scoped>

.header {
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
.header__left {
    display: flex; 
    @media (max-width: $mobile-max) {
        border-bottom: 1px solid grey;
        margin-bottom: 8px;
    }     
}
.header__image {   
    height: 160px;
    margin-right: 24px;
    @media (max-width: $mobile-max) {
        margin-right: 12px;        
        margin-bottom: 16px;
    } 
    img {
        height: 100%;
        border: 1px solid white;
    }
}
.header__info {
    h1 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 16px;
        letter-spacing: 1.5px;       
    }
    h2 {
        font-size: 20px;        
        font-weight: 400;
        margin-bottom: 16px;
        @media (max-width: $mobile-max) {
            font-size: 16px;  
        }         
    }
    p {
        position: relative;
        font-size: 16px;        
        font-weight: 400;
        padding-left: 22px;
        @media (max-width: $mobile-max) {
            font-size: 16px;  
        }        
    }  
    p::before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        background-image: url("../assets/images/icons/location.svg");        
        background-size: 65%;
        left: 0;
        top: 3px;
    }       
}
.header__right {
    
}
</style>