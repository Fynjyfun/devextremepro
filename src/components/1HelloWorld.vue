<template>
  <div>
    <dx-vector-map
      @click="onMapClick"
      @initialized="onInit"
      :projection='customProjection'
      :zoom-factor=6
      :center="center"
      :tooltip="{enabled: true, customizeTooltip: customizeTooltip}"
    >

    <dx-layer

      :data-source="mapData"
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

    <dx-tab-panel
      ref="tabpanel"
      :data-source="tabsList"
      :selected-index.sync="selectedIndex"
    >
      <div slot="title"
        slot-scope="{ data: detGrid }"
        :title= detGrid.obj_title
      >
        <span> {{ detGrid.obj_title }} </span>
      </div>
      <div slot="item"
        slot-scope="{ data: detGrid }"
      >

        <dx-data-grid
        :col="cols"
        :data-source="data"
        >
        </dx-data-grid>

      </div>
    </dx-tab-panel>

    <dx-button
      text= "Click"
      @click="onClick"
    >
    </dx-button>

    <dx-responsive-box
      :cols="[{}, {}, {}]"
      :rows="[{}, {}, {}]"
    >

      <dx-item>
        <dx-location
          :row="0"
          :col="0"
          :colspan="3"
          screen="lg"
        />
        <dx-location
          :row="0"
          :col="0"
          :colspan="2"
          screen="sm"
        />
        <template #default>
          <div class="header item">
            <p>Header</p>
          </div>
        </template>
      </dx-item>
      <dx-item>
        <dx-location
          :row="1"
          :col="1"
          screen="lg"
        />
        <dx-location
          :row="1"
          :col="0"
          :colspan="2"
          screen="sm"
        />
        <template #default>
          <div class="content item">
            <p>Content</p>
          </div>
        </template>
      </dx-item>
      <dx-item>
        <dx-location
          :row="1"
          :col="0"
          screen="lg"
        />
        <dx-location
          :row="2"
          :col="0"
          screen="sm"
        />
        <template #default>
          <div class="left-side-bar item">
            <p>Left Bar</p>
          </div>
        </template>
      </dx-item>
      <dx-item>
        <dx-location
          :row="1"
          :col="2"
          screen="lg"
        />
        <dx-location
          :row="2"
          :col="1"
          screen="sm"
        />
        <template #default>
          <div class="right-side-bar item">
            <p>Right Bar</p>
          </div>
        </template>
      </dx-item>
      <dx-item>
        <dx-location
          :row="2"
          :col="0"
          :colspan="3"
          screen="lg"
        />
        <dx-location
          :row="3"
          :col="0"
          :colspan="2"
          screen="sm"
        />
        <template #default>
          <div class="footer item">
            <p>Footer</p>
          </div>
        </template>
      </dx-item>

    </dx-responsive-box>
  </div>
</template>

<script>
import { DxButton, DxTabPanel, DxDataGrid } from 'devextreme-vue'
import { DxResponsiveBox, DxItem, DxLocation, DxCol, DxRow } from 'devextreme-vue/responsive-box'
import { DxVectorMap, DxLabel, DxLayer, DxTooltip } from 'devextreme-vue/vector-map'
import * as mData from '../../static/admin_level_4.json'

var shift = 30
var border = (180 + shift) / 180

export default {
  data () {
    return {
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
      mapData: mData,
      colsResp: [
        {},
        {}
      ],
      rowsResp: [
        {},
        {},
        {}
      ],
      // selectedTab
      cols: [],
      data: [],
      selectedTab: {},
      selectedIndex: null,
      loadedTabs: {},
      tabsList: [
        {
          obj_key: 'id_planout',
          obj: 'md_planout',
          obj_title: 'План расходов сводный'
        },
        {
          obj_key: 'id_plan_delivery',
          obj: 'md_plan_delivery',
          obj_title: 'План расходов детальный'
        }
      ],
      tabData: {
        md_planout: {
          grid: {
            cols: [{caption: 'ИД', dataField: 'id_planout'}, {caption: 'Ид. бюджета', dataField: 'id_budget'}],
            data: [{id_planout: 72, id_budget: 38}, {id_planout: 73, id_budget: 38}]
          }
        },
        md_plan_delivery: {
          grid: {
            cols: [{caption: 'Ид. расхода', dataField: 'id_plan_delivery'}, {caption: 'Год', dataField: 'id_year'}],
            data: [{id_plan_delivery: 54, id_year: 2019}, {id_plan_delivery: 64, id_year: 2019}]
          }
        }
      }
    }
  },
  computed: {
    instance () {
      return this.$refs['tabpanel'].instance
    }
  },
  components: {
    DxTooltip,
    DxLayer,
    DxLabel,
    DxVectorMap,
    DxResponsiveBox,
    DxItem,
    DxLocation,
    DxCol,
    DxRow,
    DxTabPanel,
    DxDataGrid,
    DxButton
  },
  methods: {
    tooltipTemplate (info) {
      return info.attribute('name')
    },
    customizeTooltip (e) {
      // return { text: this.vectorMap.getLayerByName('areas').getDataSource()._items[0].features[e.index].properties.name }
      console.log('NAMENAMENAME: ', e.attribute('name'))
      return {text: e.attribute('name')}
    },
    onMapClick (e) {
      //
      // console.log('TARGET: ', e.target.attribute('name'))
    },
    onInit (e) {
      this.vectorMap = e.component
    },
    onClick (e) {
      alert('123!')
    },
    getTabData (index) {
      return this.$refs['tabpanel'].instance.getDataSource().items()[index]
    }
  },
  watch: {
    selectedIndex (val, oldVal) {
      this.selectedTab = { data: this.getTabData(val), index: val }
    },
    selectedTab: {
      handler: function (val, oldVal) {
        //
        this.cols = this.tabData[this.selectedTab.data.obj].grid.cols
        this.data = this.tabData[this.selectedTab.data.obj].grid.data
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
