<template>
  <body>
    <div class="main">
      <div class="search__box">
        <h1　class="title">GIF image search</h1>
        <p class="text">Find your favorite GIF images!</p>
        <Search />
      </div>
      <div class="wrapper">
        <template v-for="(url,index) in results">
          <AppImage :url="url" :key="index" />
        </template>
        </div>
    </div>
  </body>
</template>

<script>
  import Search from './components/Search';
  import AppImage from './components/Image';

  export default {
    components: {
      Search,
      AppImage
    },
    name: 'App',
    computed: {
      results() {
        return this.$store.getters["search/results"];
      },
    }
  }

</script>

<style>
  body {
    background:  #91A8D0 ;
    font-family:  'Roboto', sans-serif;
  }
  .main {
    min-width: 1200px;
    display: block;
  }
  .title{
    margin: 0;
    color: rgb(255, 255, 255);
  }
  .text{
    margin: 0;
    color: rgb(255, 255, 255);
  }
  .search__box{
    text-align: center;
    margin-top: 70px;
  }

  .wrapper {
    width: 1200px;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }


</style>
