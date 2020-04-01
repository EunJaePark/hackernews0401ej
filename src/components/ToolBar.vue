<template>
    <header>
        <h1>Hacker News</h1>
        <div class="routerBtn">
            <router-link to="/news">News</router-link>
            <router-link to="/ask">Ask</router-link>
            <router-link to="/jobs">Jobs</router-link>
        </div>
    </header>
</template>

<script></script>

<style>
header{ position:relative; }
header > h1{ border-bottom:5px solid #353434; font-size:40px; text-align:right;}
header > .routerBtn{ position:absolute; bottom:10px; }
header > .routerBtn > *{ margin:5px; padding:0 7px; font-size:20px; color:#353434; text-decoration:none; }
header > .routerBtn > *:hover{ background-color:rgba(53, 52, 52, .3);}

</style>