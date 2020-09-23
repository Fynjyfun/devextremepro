<template>
    <dx-popup
        width="70%"
        height="70%"
        :title="mapTitle"
        :close-on-back-button="false"
        :close-on-outside-click="false"
        :show-close-button="false"
        :toolbar-items="btns"
        :visible="true"
        shading-color="rgba(125,125,125,0.5)"
        :resize-enabled="true"
      >
      <template slot="title">
          <div class="kw-title">
              <h5 class="kw-chapter">
                  {{ mapTitle }}
              </h5>
          </div>
      </template>
      <template slot="content">
          <!-- <div style="overflow: hidden; height: 100%;" class="kw-content"> -->

            <dx-vector-map
              :element-attr="attr"
              @click="onMapClick"
              @initialized="onInit"
              :center="center"

              :projection='customProjection'
              :zoom-factor=6
              :tooltip="{enabled: true, customizeTooltip: customizeTooltip}"
            >

              <dx-layer

                :data-source="mDat"
                name="areas"
                type='area'
              >
                <dx-label
                  :enabled="true"
                  data-field="name"
                />
              </dx-layer>
              <!-- <dx-tooltip
                :enabled="true"
                :content-template="tooltipTemplate"
              /> -->
              <!-- :customize-tooltip="customizeTooltip" -->
            </dx-vector-map>

          <!-- </div> -->
        </template>
    </dx-popup>
</template>

<script>
import { DxPopup } from "devextreme-vue"
import { DxVectorMap, DxLabel, DxLayer, DxTooltip } from 'devextreme-vue/vector-map'
import * as mData from '../../static/admin_level_4.json'

var shift = 30
var border = (180 + shift) / 180

export default {
    props: {
        type    : String,
    },
    data() {
        return {
            center: [92, 60],
            vectorMap: null,
            btns:
                [
                    {
                    toolbar: "bottom",
                    location: "center",
                    widget: 'dxButton',
                    options: {
                        // icon    : "fas fa-door-closed",
                        text    : "Закрыть",
                        onClick : () => {
                        this.$emit("closedialog")
                            }
                        }
                    }
                ],
            customProjection: {
              aspectRatio: 1,
              to ([l, lt]) {
                let x
                if (l > 0) {
                  x = (l + shift) / 180
                } else {
                  // ((a % b) + b) % b = a mod b (св - во неотрицательности)
                  x = (180 + shift + ((l % 180) + 180) % 180) / 180
                }
                return [
                  x,
                  lt / 90
                ]
              },
              from ([x, y]) {
                let lonx
                if (x > border) {
                  lonx = (-1 + x - border) * 180
                } else {
                  lonx = x * 180 - shift
                }
                return [
                  lonx,
                  y * 90
                ]
              }
            },
            mDat: null
        }
    },
    components: {
        DxTooltip,
        DxPopup,
        DxVectorMap,
        DxLabel,
        DxLayer
    },
    computed: {
        attr: function () {
            return {
                    style: 'width: 100%; height: 100%;'
            }
        },
      // mDat: function () {
      //   return JSON.parse(mData)
      // },
        mapTitle: function() {
            switch(this.type) {
                case 'Карта субъектов федерации' :
                    return 'Карта субъектов федерации'
                case 'Карта федеральных округов':
                    return 'Карта федеральных округов'
                default:
                    return 'Карта'
            }
        },
    },
    methods: {
        tooltipTemplate (info) {
          return info.attribute('name')
        },
        customizeTooltip (e) {
          console.log("NAMENAMENAME: ", e.attribute('name'));
          return {text: e.attribute('name')}
          // return {text: e.text}
        },
        onMapClick (e) {
          //
          // console.log('TARGET: ', e.target.attribute('name'))
        },
        onInit (e) {
          this.vectorMap = e.component
        },
        onHidden() {

        }
    },
    created() {
      //
      // this.mDat = mData.default;
      this.mDat = mData;
      // console.log("DATA: ", this.mDat);
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
