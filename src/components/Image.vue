<template>
<div class="image__list">
<img class="images" :src="url" alt="gif画像"/>
</div>
</template>

<script>
  export default {
    props: {
      url: String
    }
  }
</script>
<style >
.image__list{
  width: 25%;
  margin: 0 auto;

}
.images{
  width: 100%;

}

</style>