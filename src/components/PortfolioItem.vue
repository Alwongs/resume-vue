<template>
    <li class="portfolio-item">
        <header class="portfolio-item__header">
            <h3 class="portfolio-item__title">{{ title }}</h3>
        </header>
        <main class="portfolio-item__main">
            <div class="portfolio-item__image-block">
                <img :src="require(`@/assets/images/preview/${image}.jpg`)" alt="image">
            </div>
            <div class="portfolio-item__stack-list">
                <ol>
                    <li 
                        v-for="tech in stack" 
                        :key="tech.id"
                    >
                        {{ tech.title }}
                    </li>
                </ol>
            </div>
        </main>
        <footer class="portfolio-item__footer">
            <a :href="github" target="_blank">github</a>
            <a :href="website" target="_blank">website</a>
        </footer>
    </li>  
</template>

<script>
export default {
    name: 'PortfolioItem',
    props: [ 'title', 'image', 'github', 'website', 'description', 'stack'],
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

$beige: #fffae4;
$zian: rgb(0, 120, 112);


//-------------------------
.portfolio-item {
    width: 300px;
    height: 200px;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.4);
    border: 2px solid white;
    border-radius: 20px;
    overflow: hidden;
    &:hover {
        box-shadow: 1px 1px 10px 3px rgba(0, 136, 255, 0.5);        
    }
    // @media (max-width: $mobile-max) {
    //     flex-direction: column;
    // }   
}
.portfolio-item__header {
    background-color: $zian;
    border-bottom: 1px solid white;
    height: 32px;
    line-height: 32px;        
    color: $beige;       
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
    border-right: 2px solid $zian;
    margin-right: 4px;
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
    display: flex;
    justify-content: space-between;
    background-color: $zian;
    border-top: 1px solid white;
    height: 32px;
    line-height: 32px;        
    padding: 0 16px;
    color: white;
    a {
        font-size: 13px;
        color: $beige;
        letter-spacing: 0.7px;
        text-decoration: none;
        &:hover {
            color: yellow;
            transition: 0.2s;
            letter-spacing: 0.8px;            
        }
    }
}
</style>