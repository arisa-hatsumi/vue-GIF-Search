<template>
  <input class="search" @input="change"  placeholder="ex) cat"/>
</template>

<script>
  export default {
    methods: {
      change(e) {
        const keyword = e.target.value;
        this.$store.dispatch("search/doSearch", keyword)
      }
    }
  }

</script>

<style scoped>
.search{
  margin-top: 20px;
  appearance: none;
  background-color: transparent;
  background-image: none;
  border: 1px solid rgba(54, 54, 54, 0.16);
  border-radius: 5px;
  color: inherit;
  font-family: 'Roboto', sans-serif;;
  font-size: 1em;
  padding: 0.4em 0.8em;
  background: rgb(255, 255, 255);
}
.search:focus{
  border:solid 2px #EEA34A;
}

</style>
