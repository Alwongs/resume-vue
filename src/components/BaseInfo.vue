<template>
    <div class="person-info__left">
        <div class="person-info__image">
            <router-link :to="{name: 'home'}">
                <img src="@/assets/images/me.jpg" alt="photo">
            </router-link>
        </div> 

        <div class="person-info__info">         
            <h1>Мартынов<br>Александр</h1>
            <h2>web-разработчик</h2>
            <p>г.Ульяновск</p>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'BaseInfo',
}
</script>

<style lang="scss" scoped>
.person-info__left {
    display: flex; 
    @media (max-width: $mobile-max) {
        border-bottom: 1px solid grey;
        margin-bottom: 8px;
    }     
}
.person-info__image {   
    height: 160px;
    margin-right: 24px;
    @media (max-width: $mobile-max) {       
        margin-bottom: 16px;
    } 
    img {
        height: 100%;
        border: 1px solid white;       
    }
}
.person-info__info {
    h1 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 16px;
        letter-spacing: 1.5px;       
    }
    h2 {
        font-size: 20px;        
        font-weight: 400;
        color: yellow;
        margin-bottom: 16px;
        @media (max-width: $mobile-max) {
            font-size: 16px;  
        }         
    }
    small {
        font-weight: 300;
        font-size: 14px;
        color: white;   
        @media (max-width: $mobile-max) {
            font-size: 12px;  
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
</style>