<template>
  <ol>
        <li v-for="item in list" :key="item.id">
          <a :href="item.url" target="blank" class="title">{{ item.title }} </a>
          <router-link 
            class="comments"
            :to="`/item/${item.id}`"> ( {{ item.comments_count }} )</router-link>
          <span class="user">by <span>{{ item.user }}</span></span>
          <span class="time">{{item.time_ago}}</span>
        </li>
  </ol>

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
    }
}
</script>

<style>

</style>