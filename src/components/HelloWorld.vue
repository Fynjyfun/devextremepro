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
  </div>
</template>

<script>
import { DxButton, DxTabPanel, DxDataGrid } from 'devextreme-vue'

export default {
  data () {
    return {
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
