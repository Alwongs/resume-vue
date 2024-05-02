<template>
    <div class="contact-list">
        <h3>Контакты:</h3> 
        <ul>
            <li 
                class="contact-list__phone" 
                @click="goToUrl('tel:+79378773757')"
            >
                <a href="tel:+79378773757">
                    +7(937)-877-37-57
                </a>
            </li>

            <li 
                class="contact-list__email" 
                @click="goToUrl('mailto:alwong@ya.ru')"
            >
                <a href="mailto:alwong@ya.ru">
                    alwong@ya.ru
                </a>
            </li>

            <li 
                class="contact-list__whatsapp" 
                @click="goToUrl('whatsapp://send?phone=79378773757&amp;text=')"
            >
                <a href="whatsapp://send?phone=79378773757&amp;text=">
                    WhatsApp
                </a>
            </li>

            <li 
                class="contact-list__telegram" 
                @click="goToUrl('https://t.me/Alwongs')"
            >
                <a href="https://t.me/Alwongs">
                    Telegram
                </a>
            </li>

            <li 
                class="contact-list__viber" 
                @click="goToUrl('viber://chat?number=%2B79378773757')"
            >
                <a href="viber://chat?number=%2B79378773757">
                    Viber
                </a>
            </li>
        </ul> 
    </div> 
</template>

<script>
export default {
    name: 'ContactList'
}
</script>

<style lang="scss">

.contact-list {
    @media (max-width: $mobile-max) {
        border-bottom: 1px solid grey;
        padding-bottom: 8px;
        ul {
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
        transition: 0.3s;
        &:hover {
            color: rgb(248, 223, 0);
            text-shadow: 2px 2px 5px rgba(0, 204, 255, 0.8);
        }         
    }
}
</style>