<template>
    <li class="portfolio-item">
        <header class="portfolio-item__header">
            <h3 class="portfolio-item__title">{{ title }}</h3>
        </header>
        <main class="portfolio-item__main">
            <div class="portfolio-item__image-block">
                <img :src="require(`@/assets/images/preview/${image}.jpg`)" alt="image">
            </div>
            <ul class="portfolio-item__stack-list">
                <h6>Стэк:</h6>
                <li>- one</li>
                <li>- two</li>
                <li>- three</li>
                <li>- four</li>
            </ul>
        </main>
        <footer class="portfolio-item__footer">
            <p>Подробнее</p>
        </footer>
    </li>  
</template>

<script>
export default {
    name: 'PortfolioItem',
    props: [ 'title', 'image'],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
/* ---- screen sizes ---- */

$desktop-max: 1439px;
$desktop-min: 1024px;
$tablet-max: 1023px;
$tablet-min: 768px;
$mobile-max: 767px;


//-------------------------
.portfolio-item {
    width: 300px;
    height: 200px;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.4);
    border: 2px solid white;
    border-radius: 20px;
    margin: 0 44px 44px 0;
    overflow: hidden;
    &:hover {
        box-shadow: 1px 1px 10px 3px rgba(0, 136, 255, 0.5);        
    }
    // @media (max-width: $mobile-max) {
    //     flex-direction: column;
    // }   
}
.portfolio-item__header {
    background-color: rgb(68, 92, 227);
    border-bottom: 1px solid white;
    height: 32px;
    line-height: 32px;        
    color: white;       
}
.portfolio-item__title {
    text-align: center;
    font-size: 15px;
    font-weight: normal;  
}
.portfolio-item__main {
    height: 132px; 
    display: flex;
}
.portfolio-item__image-block {
    height: 132px;
    img {
        height: 100%;
    } 
}
.portfolio-item__stack-list {
    padding: 8px 8px 8px 16px;
    li {
        font-size: 12px;
    }
}

.portfolio-item__footer {
    background-color: rgb(68, 92, 227);
    border-top: 1px solid white;
    height: 32px;
    line-height: 32px;        
    padding: 0 16px;
    color: white;
    p {
        font-size: 12px;
        text-align: right;
        cursor: pointer;
    }
}
</style>