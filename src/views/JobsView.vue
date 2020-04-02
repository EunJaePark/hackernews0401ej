<template>
  <ol>jobs
      <li v-for="item in list" :key="item.id">
          <a :href="item.url">{{ item.title }}</a>
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
    }
}
</script>

<style>

</style>