<template>
  <ol>
    <div class="loading">
        <span>loading...</span>
        <div class="loadingBar"></div>
    </div>

      <li v-for="item in list" :key="item.id">
          <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          <router-link 
            class="comments"
            :to="`/item/${item.id}`"> ( {{ item.comments_count }} )</router-link>
          <span class="user">by <span>{{ item.user }}</span></span>
          <span class="time">{{ item.time_ago }}</span>
      </li>
  </ol>
</template>

<script>
// import axios from 'axios'
export default {
    computed: {
        list() {
            return this.$store.state.list
        }
    },
    created() {
        this.$store.dispatch('FETCH_LIST', 'ask')
    },
    mounted() { //beforeUpdate()
        let loading = document.querySelector('.loading');
        let routerView = document.querySelector('ol');
        let loadingBar = document.querySelector('.loadingBar')
        
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