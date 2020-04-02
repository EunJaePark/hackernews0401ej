<template>
  <ol>ask
      <li v-for="item in list" :key="item.id">
          <a :href="item.url">{{ item.title }}</a>
          <span class="user">by {{ item.user }}</span>
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
    }
}
</script>

<style>

</style>