<template>
    <div class="skill-page">
        <main class="skill-page__main">
            <div class="skill-page__items">
                <education-info />
                <job-info />
                <program-lang-info />
                <additional-info />
                <skill-list />
            </div>

            <a href="#top" title="home">
                <p class="icon-back"></p>
            </a> 
        </main>
    </div>
</template>

<script>
import EducationInfo from  '@/components/EducationInfo.vue';
import JobInfo from  '@/components/JobInfo.vue';
import AdditionalInfo from  '@/components/AdditionalInfo.vue';
import ProgramLangInfo from  '@/components/ProgramLangInfo.vue';
import SkillList from '@/components/SkillList.vue';

export default {
    name: 'ProjectPage',
    components: {
        EducationInfo,
        JobInfo,
        AdditionalInfo,
        ProgramLangInfo,
        SkillList,
    },
}
</script>

<style lang="scss" scoped>

.skill-page {
    padding: 0 128px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 64px;
    }     
    @media (max-width: $mobile-max) {
        padding: 0 16px;
    }  

    &__title {
        @include title;
    }
}
.skill-page__main {
    color: darker($zian, 2);  
    margin-bottom: 32px;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    }
}
.skill-page__items {
    margin-bottom: 30px;
}
.icon-back {
    background-image: url("../assets/images/icons/back.svg");   
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;  
    margin: 0 auto;    
}

</style>