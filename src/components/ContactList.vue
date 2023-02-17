<template>
    <div class="contact-list">
        <h3>Контакты:</h3> 
        <ul>
            <li class="contact-list__phone">
                Тел: <a href="tel:+79370000000">+7(937)-000-00-00</a>
            </li>
            <li class="contact-list__email">email: 
                <a href="mailto:mail@ya.ru">mail@ya.ru</a>
            </li>
            <li class="contact-list__whatsapp">
                <a href="whatsapp://send?phone=79370000000&amp;text=">WhatsApp</a>
            </li>
            <li class="contact-list__telegram">
                <a href="viber://chat?number=%2B79370000000">Telegram</a>
            </li>
            <li class="contact-list__viber">
                <a href="viber://chat?number=%2B79370000000">Viber</a>
            </li>
        </ul> 
    </div> 
</template>

<script>
export default {

}
</script>

<style lang="scss">

.contact-list {
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