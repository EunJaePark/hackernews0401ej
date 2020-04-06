
<template>
<div > 
  <ol>
    <div class="loading">
      <span>loading...</span>
      <div class="loadingBar"></div>
    </div>

    <li v-for="item in list" :key="item.id">
      <a :href="item.url" target="blank" class="title">{{ item.title }} </a>
      <router-link 
        class="comments"
        :to="`/item/${item.id}`"> ( {{ item.comments_count }} )</router-link>
      <span class="user">by <span>{{ item.user }}</span></span>
      <span class="time">{{item.time_ago}}</span> 
    </li>
  </ol>
</div>
</template>

<script>
// import axios from 'axios'
export default {
    computed: {
        list () {
            return this.$store.state.list
        }
    },
    created() {
        this.$store.dispatch('FETCH_LIST', 'news')
    },
    mounted() { //beforeUpdate()    
    let routerView = document.querySelector('ol');
    let loading = document.querySelector('.loading');
    let loadingBar = document.querySelector('.loadingBar')
    console.log(loadingBar);
    requestAnimationFrame(function() {
      setTimeout(function() {
      loadingBar.style.width = '50%'
      }, 0)
    })
    setTimeout(function() {
      loading.style.display = 'none';
    }, 300)
   
  }
}
</script>

<style>
</style>