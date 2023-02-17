<template>
    <div class="contact-list">
        <h3>Контакты:</h3> 
        <ul>
            <li class="contact-list__phone" @click="goTo('tel:+79378773757')">
                <a href="tel:+79378773757">+7(937)-000-00-00</a>
            </li>
            <li class="contact-list__email" @click="goTo('mailto:alwong@ya.ru')">
                <a href="mailto:alwong@ya.ru">alwong@ya.ru</a>
            </li>
            <li class="contact-list__whatsapp" @click="goTo('whatsapp://send?phone=79378773757&amp;text=')">
                <a href="whatsapp://send?phone=79378773757&amp;text=">WhatsApp</a>
            </li>
            <li class="contact-list__telegram" @click="goTo('https://t.me/Alwongs')">
                <a href="https://t.me/Alwongs">Telegram</a>
            </li>
            <li class="contact-list__viber" @click="goTo('viber://chat?number=%2B79378773757')">
                <a href="viber://chat?number=%2B79378773757">Viber</a>
            </li>
        </ul> 
    </div> 
</template>

<script>
export default {
    name: 'ContactList',
    methods: {
        goTo(url) {
            window.location.href = url
        }
    }
}
</script>

<style lang="scss">

.contact-list {
    @media (max-width: $mobile-max) {
        border-bottom: 1px solid grey;
        padding-bottom: 8px;
        ul {
            // border: 1px solid red;
            height: 54px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;               
        } 
        ul li a {
            line-height: 0;
            font-size: 0;
            color: transparent;
        }   
        ul li::before {
            // content: '';
            // position: absolute;
            // background-repeat: no-repeat;
            width: 44px;
            height: 44px;
            background-size: 100%;
            border-radius: 50%;
            box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
        }              
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
    &__whatsapp {
        &::before {
            background-image: url("../assets/images/icons/whatsapp.svg");
        }
    }
    &__telegram {
        &::before {
            background-image: url("../assets/images/icons/telegram.svg");
        }
    }
    &__viber {
        &::before {
            background-image: url("../assets/images/icons/viber.svg");
        }
    }
    &__phone {
        &::before {
            background-image: url("../assets/images/icons/phone.svg");
        }
    }
    &__email {
        &::before {
            background-image: url("../assets/images/icons/email.svg");
        }
    }    
    a {
        color: white;   
    }
}
</style>