<template>
  <div>
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

    >
    <dx-row :ratio="1"/>
      <dx-row
        :ratio="2"
        screen="xs"
      />
      <dx-row :ratio="2"/>
      <dx-row :ratio="1"/>

      <dx-col :ratio="1"/>
      <dx-col
        :ratio="2"
        screen="lg"
      />
      <dx-col :ratio="1"/>
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
import { DxResponsiveBox, DxItem, DxLocation, DxCol, DxRow } from 'devextreme-vue/responsive-box';
export default {
  data () {
    return {
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
