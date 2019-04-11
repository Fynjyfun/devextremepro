<template>
  <b-modal
    ref='modal'
  >

    {{ data.event.rowIndex }}

    <b-row>
      <b-button
        variant='secondary'
        @click= 'onClick'
      >
        {{ this.buttons[0].caption }}
      </b-button>

            <b-button
        variant='secondary'
        @click= 'onClick2'
      >
        {{ this.buttons[1].caption }}
      </b-button>

            <b-button
        variant='secondary'
        @click= 'onClick3'
      >
        {{ this.buttons[2].caption }}
      </b-button>

      <b-button
        variant='secondary'
        @click= 'onClick4'
      >
        {{ this.buttons[3].caption }}
      </b-button>
    </b-row>

  </b-modal>
</template>

<script>
export default {
  name: 'formform',
  data () {
    return {
      data: {event: {rowIndex: 0}},
      buttons: [
        { caption: '<', state: true},
        { caption: '+', state: false },
        { caption: '-', state: true },
        { caption: '>', state: false }
      ]
    }
  },
  methods: {
    onClick: function () {
      console.log('but clicked!')
      this.$emit('formBack', this.data.event.rowIndex - 1)
    },
    onClick2: function () {
      console.log('but2 clicked!')
      this.$emit('formAdd')
    },
    onClick3: function () {
      console.log('but3 clicked!')
      this.$emit('formDelete')
    },
    onClick4: function () {
      console.log('but4 clicked!')
      this.$emit('formForward')
    },
    onClick5: function () {
      console.log('but5 clicked!')
      this.$emit('formCopy')
      //
    }
  },
  // computed: {
  //   rowIndex: function() {
  //     return this.data.event.rowIndex
  //   }
  // }
}
</script>

<style scoped>

</style>
