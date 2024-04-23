<template>
    <header>
        <div class="person-info">
            <base-info />
            <contact-list />            
        </div>
        <education-info />
        <job-info />
        <additional-info />
        <skill-list />
    </header> 
</template>

<script>
import BaseInfo from  '@/components/BaseInfo.vue';
import ContactList from  '@/components/ContactList.vue';
import EducationInfo from  '@/components/EducationInfo.vue';
import JobInfo from  '@/components/JobInfo.vue';
import AdditionalInfo from  '@/components/AdditionalInfo.vue';
import SkillList from '@/components/SkillList.vue';

export default {
    name: 'AppHeader',
    components: {
        BaseInfo,
        ContactList,
        EducationInfo,
        JobInfo,
        AdditionalInfo,
        SkillList,
    },
    // computed: {
    //     isHomePage() {
    //         return (this.$route.name === 'home') ? true : false;
    //     }
    // },
    // data() {
    //     return {
    //         isOpenHeader: false
    //     }
    // },
    // watch:{
    //     $route (to, from) {
    //         if(to != from) {
    //             this.isOpenHeader = false;
    //         }
    //     }
    // }    
}
</script>

<style lang="scss" scoped>

.person-info {
    background-color: $zian;
    color: $beige;
    padding: 24px 128px;
    display: flex;   
    justify-content: space-between;
    border-bottom: 1px solid rgb(75, 91, 112);
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 24px 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 24px 64px;
    }      
    @media (max-width: $mobile-max) {
        border-bottom: none;        
        padding: 16px 16px 0;
        flex-direction: column;        
    }  

}
</style>