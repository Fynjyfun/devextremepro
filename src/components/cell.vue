<template>
  <dx-select-box
    :items="dataS"
    value-expr= "amount"
    display-expr= "city"
  />
</template>

<script>

import { DxSelectBox } from 'devextreme-vue'

export default {
  props: {
    dataS: Object
  },
  components: {
    DxSelectBox
  }
}
</script>
