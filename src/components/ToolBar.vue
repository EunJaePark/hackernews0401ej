<template>
    <header>
        <h1>Hacker News</h1>
        <div class="routerBtn">
            <router-link 
                :class="{'click':click === 'yes' && index === 1}"
                @click.native="clickBg(1, 'yes')"
                to="/news">News</router-link>
            <router-link
                :class="{'click':click === 'yes' && index === 2}"
                @click.native="clickBg(2, 'yes')"
                to="/ask">Ask</router-link>
            <router-link
                :class="{'click':click === 'yes' && index === 3}"
                @click.native="clickBg(3, 'yes')"
                 to="/jobs">Jobs</router-link>
        </div>
    </header>
</template>

<script>
export default{
    data() {
        return {
            index: 1,
            click: 'yes'
        }
    },
    methods: {
        clickBg(index, click) {
            this.click = click   
            this.index = index     
        }
    }
}
</script>

<style>
header{ position:relative; }
header > h1{ border-bottom:5px solid #353434; font-size:40px; text-align:right;}
header > .routerBtn{ position:absolute; bottom:10px; }
header > .routerBtn > *{ margin:5px; padding:0 7px; font-size:20px; color:#353434; text-decoration:none; }
header > .routerBtn > *:hover{ background-color:rgba(53, 52, 52, .3);}


 @media screen and (max-width:700px) {
     header{ height:100px; }
     header > h1{ text-align:center; }
     header > .routerBtn{ bottom:0; left:50%; transform:translateX(-50%); }
 }


.click{ background-color:rgba(53, 52, 52, .3); }
</style>