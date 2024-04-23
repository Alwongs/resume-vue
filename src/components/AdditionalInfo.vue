<template>
    <div class="additional-info">
        <h3>Дополнительные навыки:</h3>

        <ul>
            <li>Английский - средний уровень</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AdditionalInfo'
}
</script>

<style lang="scss" scoped>

.additional-info {
    color: $beige;
    background-color: $zian;
    border-bottom: 1px solid rgb(75, 91, 112);    
    padding: 16px 128px 16px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 10px 64px 10px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 10px 64px 10px;
    }     
    @media (max-width: $mobile-max) {
        padding: 10px 16px 10px;  
        flex-direction: column;  
        align-items: center;  
    }     
}

h3 {
    font-size: 18px;        
    font-weight: 400;  
    margin-bottom: 16px; 
    text-decoration: underline;              
}
ul {
    font-size: 14px;        
    font-weight: 300;
    letter-spacing: 1.2px;

    list-style-type: disc; 
    padding-left: 32px;   
}
li {
    font-style: italic;
    margin-bottom: 8px;
}
li ul {
        list-style-type: none; 
        li:before {
            content: "—";
            position: relative;
            left: -5px;
        }
}
li p {
    margin-bottom: 6px;
}
</style>