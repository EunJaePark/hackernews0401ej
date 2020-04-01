<template>
  <ol>jobs
      <li v-for="item in list" :key="item.id">
          <a :href="item.url">{{ item.title }}</a>
          <span class="time">{{ item.time_ago }}</span>
      </li>
  </ol>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/jobs/1.json')
        .then(res => {
            this.list = res.data
        })
    }
}
</script>

<style>

</style>