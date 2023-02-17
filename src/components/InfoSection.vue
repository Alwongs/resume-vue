<template>
    <ul class="info__skill-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>git</li>
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
    }    
}
.info__skill-list li {
    margin-right: 24px;
    color: rgb(0, 105, 0);
    font-weight: 500;
    font-size: 14px;
    padding: 2px 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    background-color: $beige;
    @media (max-width: $mobile-max) {
        margin-bottom: 8px;    
    }      
}
</style>