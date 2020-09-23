<template>
<div>
    <DxCheckBox
      :value="true"
      :width="80"
      text="Check"
    />
    <dx-popup
        width="70%"
        height="53%"
        :title="mapTitle"
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
                  {{ mapTitle }}
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

                  <!-- :tooltip="{enabled: true, customizeTooltip: customizeTooltip}" -->
                <dx-vector-map
                  :element-attr="attr"
                  @click="onMapClick"
                  @initialized="onInit"
                  :center="center"
                  :projection='customProjection'
                  @zoom-factor-changed="onZoomFactorChanged"
                  :zoom-factor="zFactor"
                  :zooming-enabled="true"
                >
                  <dx-layer
                    :data-source="mDat"
                    name="areas"
                    type='area'
                  >
                    <dx-label
                      :enabled="regionLabelsVis"
                      data-field="name"
                    />
                  </dx-layer>
                  <dx-layer
                    elementType='dot'
                    :data-source="mDt"
                    name="markers"
                    type='marker'
                  >
                    <dx-label
                      :enabled="citiesLabelsVis"
                      data-field="name"
                    />
                  </dx-layer>
                  <dx-tooltip
                    :enabled="true"
                    :customize-tooltip="customizeTooltip"
                    :z-index='10000'
                  />
                </dx-vector-map>

          <dx-responsive-box
            id="responsiveBoxID"
          >

          <dx-row :ratio="1"/>

          <dx-col :ratio="4"/>
          <dx-col :ratio="1"/>

          <dx-item>
            <dx-location
              :row="0"
              :col="0"
              :colspan="4"
            />
            <template #default>




            </template>
          </dx-item>

          <dx-item>
            <dx-location
              :row="0"
              :col="1"
              :colspan="1"
            />
            <template #default>
              <!--  -->
              <!-- <DxCheckBox
                :value="true"
                :width="80"
                text="Check"
              /> -->
            </template>
          </dx-item>

        </dx-responsive-box>
        </div>
        </template>
    </dx-popup>

    <kw-region-info
      v-if="regionInfoVis"
      @closedialog="onRegionInfoClose"
      :name="regionName"
    >
    </kw-region-info>
</div>
</template>

<script>
import { DxCheckBox } from 'devextreme-vue/check-box'
import { DxPopup, DxToolbar, DxDrawer } from "devextreme-vue"
import {
  DxResponsiveBox,
  DxItem,
  DxLocation,
  DxCol,
  DxRow
} from 'devextreme-vue/responsive-box';
import { DxVectorMap, DxLabel, DxLayer, DxTooltip } from 'devextreme-vue/vector-map'
import KwRegionInfo from './KwRegionInfo.vue'
import * as mData from './admin_level_4.json'
import * as mD from './city.json'

var shift = 30
var border = (180 + shift) / 180

export default {
    props: {
        type    : String,
    },
    data() {
        return {
            regionLabelsVis: false,
            citiesLabelsVis: true,
            citiesVisZFactor: 45,
            zFactor: 6,
            regionName: null,
            regionInfoVis: false,
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
            ],
            center: [92, 60],
            vectorMap: null,
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
            mDat: null, // регионы
            mDt: null // маркеры городов
        }
    },
    components: {
        DxToolbar,
        DxTooltip,
        DxPopup,
        DxVectorMap,
        DxLabel,
        DxLayer,
        KwRegionInfo,
        DxResponsiveBox,
        DxItem,
        DxLocation,
        DxCol,
        DxRow,
        DxCheckBox,
        DxDrawer
    },
    computed: {
        cityDs: function () {
          let cityDs = [];
          mD.forEach(city => {
            if (city.population > 200000) {
              cityDs.push({coordinates: [city.geo_lon, city.geo_lat], attributes: {name: city.city}});
            }
          });
          return cityDs;
        },
        getRegionColor: function () {
          return this.getCssProp('--region-color-map-6-level');
        },
        getBackground: function () {
          return { borderColor: this.getCssProp('--background-border-color-map-6-level'), color: this.getCssProp('--background-color-map-6-level') };
        },
        getHoveredColor: function () {
          return this.getCssProp('--hover-color-map-6-level');
        },
        getBorderColor: function () {
          return this.getCssProp('--border-color-map-6-level');
        },
        getHoveredBorderColor: function () {
          return this.getCssProp('--hovered-border-color-map-6-level');
        },
        attr: function () {
            return {
                    style: 'width: 100%; height: 100%;'
            }
        },
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
        onZoomFactorChanged (e) {
          console.log("ZFCH: ", e);
          if (e.zoomFactor > this.citiesVisZFactor) {
            this.mDt = this.cityDs;
          } else {
            this.mDt = null;
          }
        },
        onRegionInfoClose () {
          this.regionInfoVis = false;
        },
        getCssProp (prop) {
          return getComputedStyle(document.querySelector(':root')).getPropertyValue(prop);
        },
        customizeTooltip (e) {
          return {text: e.attribute('name')};
        },
        onMapClick (e) {
          this.regionName = e.target.attribute('name');
          this.regionInfoVis = true;
        },
        onInit (e) {
          this.vectorMap = e.component;
          this.vectorMap.zoomFactor(6);
        },
        onHidden() {

        }
    },
    created() {
      this.mDat = mData;
      console.log("mD: ", mD);
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
