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

        <div class="header__contacts">
            <h3>Контакты:</h3> 
            <ul>
                <li class="header__phone">Тел: <a href="tel:+79370000000">+7(937)-000-00-00</a></li>
                <li class="header__email">email: <a href="mailto:mail@ya.ru">mail@ya.ru</a></li>
                <li class="header__whatsapp"><a href="whatsapp://send?phone=79370000000&amp;text=">WhatsApp</a></li>
                <li class="header__telegram"><a href="viber://chat?number=%2B79370000000">Telegram</a></li>
                <li class="header__viber"><a href="viber://chat?number=%2B79370000000">Viber</a></li>
            </ul> 
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

$beige: #fffae4;
$zian: rgb(37, 69, 129);

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
    // h3 {
    //     font-size: 20px;        
    //     font-weight: 400;
    //     margin-bottom: 16px;        
    // }
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
.header__contacts {
    @media (max-width: $mobile-max) {
        border-bottom: 1px solid grey;
        padding-bottom: 8px;         
    }     
    h3 {
        font-size: 18px;        
        font-weight: 400;  
        margin-bottom: 16px; 
        text-decoration: underline;              
    }
    ul {
        padding: 0 32px;
    }
    li {
        position: relative;
        font-size: 16px;
        font-style: italic;
        margin-bottom: 8px;         
    }
    li::before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        background-size: 65%;
        left: -22px;
        top: 3px;
    } 

    a {
        color: white;   
    }
}
.header__whatsapp {
    &::before {
        background-image: url("../assets/images/icons/whatsapp.svg");
    }
}
.header__telegram {
    &::before {
        background-image: url("../assets/images/icons/telegram.svg");
    }
}
.header__viber {
    &::before {
        background-image: url("../assets/images/icons/viber.svg");
    }
}
.header__phone {
    &::before {
        background-image: url("../assets/images/icons/phone.svg");
    }
}
.header__email {
    &::before {
        background-image: url("../assets/images/icons/email.svg");
    }
}
</style>