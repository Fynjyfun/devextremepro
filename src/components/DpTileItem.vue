<template>
<div style="">
  <div
    :style="{backgroundImage: 'url(' + itemData.path + ')'}"
    class="kw-ct-tile-image"
  />
  <div class="kw-ct-tile-titel">
    {{ itemData.PatternName }}
  </div>
</div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped>
  .kw-ct-tile-image {
    height: 80%;
    width: 100%;
    background-position: center;
    background-size: cover;
    display: block;
    cursor: pointer;
  }

  .kw-ct-tile-titel {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e9e9;
    color: #666;
    font-size: .7vw;
    cursor: pointer;
  }
</style>
