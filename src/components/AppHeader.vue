<template>
    <header class="header">
        <div class="container flex-wrap"> 
            <div class="header__image">
                <img src="@/assets/images/me.jpg" alt="photo">
            </div> 
            <div class="header__info">         
                <h1>Винни Пух</h1>
                <h2>web-разработчик</h2>
                <h3>45 лет</h3>
                <p>Урюпинск</p>
            </div>
        </div>
    </header>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

/* ---- screen sizes ---- */
$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;

.header {
    background-color: rgb(68, 92, 227);
    color: white;
    padding: 64px 0;
    h1 {
        font-weight: 400;
    }
    h2 {
        font-weight: 400;
        margin-bottom: 24px;
    }
    p {
        font-size: 130%;
        font-weight: 300;
    }
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 32px 0;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 32px 0;
    }      
    @media (max-width: $mobile-max) {
        padding: 16px 0;
    }     
}
.flex-wrap {
    display: flex;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    } 
}
.header__image {
    height: 200px;
    margin-right: 32px;
    @media (max-width: $mobile-max) {
        margin-bottom: 16px;
    } 
    img {
        height: 100%;
        border: 1px solid white;
    }
}
</style>