<template>
    <dx-popup
        width="50%"
        height="65%"
        :title="regionTitle"
        :close-on-back-button="false"
        :close-on-outside-click="false"
        :show-close-button="false"
        :visible="true"
        shading-color="rgba(125,125,125,0.5)"
        :resize-enabled="true"
      >
      <template slot="title">
          <div class="p-0 kw-popup-title">
              <h5 class="pt-2 pl-3 kw-popup-chapter">
                  {{ regionTitle }}
              </h5>
              <!-- инструментальная панель -->
              <dx-toolbar 
                  class="kw-toolbar"
                  :items.sync="toolbar">
              </dx-toolbar>
          </div>
      </template>
      <template slot="content">
          <div style="overflow: hidden; height: 100%;" class="kw-content">

          </div>
        </template>
    </dx-popup>
</template>

<script>
import { DxPopup, DxToolbar } from "devextreme-vue"

export default {
    props: {
        type    : String,
        name    : String
    },
    data() {
        return {
            toolbar: [
                {
                    location: 'after',
                    widget: 'dxButton',
                    disabled: false,
                    options: {
                        elementAttr: {
                            id: "close",
                            class: "mx-auto"
                        },
                        icon: "fas fa-door-closed",
                        hint: "Закрыть",
                        onClick: () => {
                            this.$emit("closedialog")
                        }
                    }
                }
            ]
        }
    },
    components: {
        DxToolbar,
        DxPopup
    },
    computed: {
        attr: function () {
            return {
                    style: 'width: 100%; height: 100%;'
            } 
        },
        regionTitle: function() {
          let regionName = this.name ? this.name : 'Регион';
          return regionName;
        },
    }
}
</script>

<style scoped>
div.kw-title {
    box-sizing: border-box;
    background-color: rgb(59, 126, 165);
    color: white;
}
h5.kw-chapter {
    font-weight: bolder;
    padding-top: 5px;
    font-family: "Raleway", sans-serif;
    font-size: 0.9rem;
}
.kw-alert-msg {
    overflow-y: auto;
    height: 100%;
} 
</style>
