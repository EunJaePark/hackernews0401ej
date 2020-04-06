<template>
  <ol>
    <div class="loading">
        <span>loading...</span>
        <div class="loadingBar"></div>
    </div>

      <li v-for="item in list" :key="item.id">
          <a :href="item.url" target="blank">{{ item.title }}</a>
          <span class="time">{{ item.time_ago }}</span>
      </li>
  </ol>
</template>

<script>
export default {
    computed: {
        list () {
            return this.$store.state.list
        }
    },
    created() {
        this.$store.dispatch('FETCH_LIST', 'jobs')
    },
    mounted() { //beforeUpdate()
        let loading = document.querySelector('.loading');
        let routerView = document.querySelector('ol');
        let loadingBar = document.querySelector('.loadingBar')
        console.log(loading);
        console.log(routerView); 
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

<style scoped>
</style>