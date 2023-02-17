<template>
    <li class="portfolio-item">
        <header class="portfolio-item__header">
            <h3 class="portfolio-item__title">{{ project.title }}</h3>
        </header>
        <main class="portfolio-item__main">
            <div class="portfolio-item__main-cover" @click="goTo()">
                {{ project.description }}
            </div>
            <div class="portfolio-item__image-block">
                <img :src="require(`@/assets/images/preview/${project.image}.jpg`)" alt="image">
            </div>
            <div class="portfolio-item__stack-list">
                <ol>
                    <li 
                        v-for="tech in project.stack" 
                        :key="tech.id"
                    >
                        {{ tech.title }}
                    </li>
                </ol>
            </div>
        </main>
        <footer class="portfolio-item__footer">
            <a :href="project.github">github</a>
            <span v-if="project.isReady">&#9734;</span>
            <a :href="project.website">website</a>
        </footer>
    </li>  
</template>

<script>
export default {
    name: 'ProjectItem',
    props: ['project'],
    methods: {
        goTo() {
            this.$router.push({name: 'project', params: {id: this.project.id}})
        }
    }
}
</script>

<style lang="scss" scoped>

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
}
.portfolio-item__header {
    background-color: $project-item-color;
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
    position: relative;
    height: 132px; 
    display: flex;  
}
.portfolio-item__main-cover {
    position: absolute;
    left: 0; 
    right: 0;
    top: 0; 
    bottom: 0;
    padding: 8px;
    font-size: 16px;
    font-style: italic;
    background-color: transparent;
    color: transparent;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.94);
        color: darker($project-item-color, 4);
    }      
}
.portfolio-item__image-block {
    height: 132px;
    border-right: 2px solid $project-item-color;
    margin-right: 4px;
    padding: 10px;
    img {
        border: 1px solid $project-item-color;
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
    background-color: $project-item-color;
    border-top: 1px solid white;
    height: 32px;
    line-height: 32px;        
    padding: 0 16px;
    color: white;
    a {
        position: relative;
        padding-left: 14px;
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
    span {
        color: yellow;
    }
    a:before {
        content: '';        
        position: absolute;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-size: 100%;
        left: -4px;
        top: 7px;   
    }
    a:first-child::before {
        background-image: url("../assets/images/icons/github.svg");        
    }
    a:last-child::before {
        background-image: url("../assets/images/icons/website.svg");               
    }
}

</style>