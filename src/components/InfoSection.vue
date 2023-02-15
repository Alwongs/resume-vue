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

/* ---- screen sizes ---- */
$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;

$zian: rgb(37, 69, 129);

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
        padding: 6px 16px 0;      
    }    
}
.info__skill-list li {
    margin-right: 24px;
    color: $zian;
    font-size: 14px;
    padding: 2px 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    background-color: #dcdcdc;
}
</style>