<template>
    <ul class="info__skill-list">
        <li>HTML</li> 
        <li>CSS</li> 
        <li>JavaScript</li> 
        <li>Vue.js</li> 
        <li>PHP</li> 
        <li>Laravel</li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.info__skill-list {
    background-color: $zian;
    border-bottom: 1px solid green;
    padding: 6px 128px 0;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 6px 64px 0;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 6px 64px 0;
    }     
    @media (max-width: $mobile-max) {
        padding: 8px 16px 0;  
        // flex-direction: column;  
        align-items: center;  
    }    
}
.info__skill-list li {
    position: relative;
    margin-right: 20px;
    color: yellow;
    font-weight: 400;
    font-size: 14px;
    padding: 2px 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    @media (max-width: $mobile-max) {
        margin-bottom: 8px;    
    }     
    &:before {
        content: '\00B7';  
        font-size: 20px;       
        position: absolute;
        background-repeat: no-repeat;
        left: -2px;
        top: -2px;   
    }     
    &:after {
        content: '\00B7';  
        font-size: 20px;      
        position: absolute;
        background-repeat: no-repeat;
        right: -2px;
        top: -2px;   
    }     
}
</style>