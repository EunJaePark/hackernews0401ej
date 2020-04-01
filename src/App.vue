<template>
  <div id="app">
    <div class="NewsPaper">
      <tool-bar></tool-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,900&display=swap');
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: sans-serif/*antialiased*/;
  -moz-osx-font-smoothing: sans-serif/*grayscale*/;
  font-size:15px;
  font-weight:400;
  
  margin:-8px;
  padding:50px;
  background-color:#616060;
}
.NewsPaper{ 
  border:3px solid #353434;
  width:90%; max-width:800px;
  margin:0 auto;
  padding:30px 50px;
  background-color:#e7e7e6;
  color:#353434;
 }

 @media screen and (max-width:900px) {
   .NewsPaper{ width:calc(100% + -100px); min-width:300px; }
 }

 @media screen and (max-width:500px) {
   #app{ padding:20px; }
 }

</style>
