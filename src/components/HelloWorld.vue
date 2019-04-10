<template>
  <div class="hello">

    <tree>
      data="this.treeData"
    </tree>

    <dx-data-grid
      :columns="datadata.col"
      :dataSource="datadata.data"
      :allowColumnResizing= true
      :allowColumnReordering= true
      :selection= "{
        allowSelectAll: true,
        mode: 'multiple',
        showCheckBoxesMode: 'onClick',
        selectAllMode: 'page'
      }"
      key-expr="ID"
      @editorPreparing="onEditorPreparing"
      :columnChooser= "{
        enabled: true,
        mode: 'dragAndDrop'
      }"
    >

      <dx-editing
        :allow-updating="true"
        :allow-adding="true"
        :allow-deleting="true"
        mode="batch"
        :width="500"
      />

    </dx-data-grid>

    <dx-select-box
      :items="dat"
      value-expr= "price"
      display-expr= "name"
    />

    <dx-select-box
      :items="dataSource.store"
      value-expr= "amount"
      display-expr= "city"
    />

<dx-pivot-grid
      ref="grid"
      :data-source="dataSource"
      :allow-sorting-by-summary="true"
      :allow-filtering="true"
      :show-borders="true"
      :show-column-grand-totals="false"
      :show-row-grand-totals="false"
      :show-row-totals="false"
      :show-column-totals="false"
    >

    <dx-field-chooser
        :enabled="true"
        :height="400"
      />

    </dx-pivot-grid>

<b-row>
    <b-col sm="3">
    <h1>{{ msg }}</h1>
    <img src="../assets/logo.png">
    </b-col>

    <b-col sm="9">
    <dx-button
      :text='text'
      :onClick="onButClick"
    />
    <!-- <div @contextmenu.prevent></div> -->

    <!-- :onContextMenuPreparing="onContext" -->
    <!-- ОБСУЖДЕНИЕ ДВОЙНОГО КЛИКА -->
    <!-- https://www.devexpress.com/Support/Center/Question/Details/T143438/dxdatagrid-provide-the-row-double-click-event -->

      <form-form
        ref="form"
        v-on:doubleClickedRow="onDoubleClickedRow"
        v-on:formBack="onFormBack"
      >

      </form-form>

      <dx-data-grid

        :headerFilter = "{ visible: true }"

        key-expr="gr6"

        ref='refrefref'

        :onRowClick= "doubleClickOnRow"

        :columnChooser= "{
            enabled: true,
            mode: 'dragAndDrop'
        }"

        :loadPanel= "{
            enabled: true
        }"

        :rowAlternationEnabled= true

        :grouping= "{
            contextMenuEnabled: true
        }"

        :sorting= "{
            mode: 'multiple'
        }"

        :selection= "{
            mode: 'multiple',
            selectAllMode: 'page'
        }"
        :dataSource="datas"
        :focusedRowEnabled= true
        :focusedRowIndex= 0
        :allowColumnReordering= true
        :filterRow= "{
          visible: true,
          applyFilter: 'onClick'
        }"
        :filterPanel="{ visible: true }"
        :paging="{
            pageSize: 4,
            pageIndex: 1
        }"
        :summary= "{
            totalItems: [
              {
                  column: 'height',
                  summaryType: 'sum'
              },
                            {
                  column: 'hillname',
                  summaryType: 'count'
              }
            ]
        }">

        <dx-group-panel :visible="true"/>
        <dx-search-panel :visible="true"/>

      </dx-data-grid>
    </b-col>
</b-row>

<b-row>
  <b-col>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
  </b-col>
  <b-col>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </b-col>
</b-row>
  </div>

</template>

<script>

import formform from './form.vue'

import LiquorTree from 'liquor-tree'

import { datadata } from '../../static/columns.js'

import { dat } from '../../static/cBox.js'

import { DxSelectBox } from 'devextreme-vue'

import {
  DxPivotGrid,
  DxFieldChooser
} from 'devextreme-vue/pivot-grid'

import { sales } from '../../static/data.js'

import DxButton from 'devextreme-vue/button'
import { DxDataGrid, DxLookup, DxEditing, DxGroupPanel, DxSearchPanel } from 'devextreme-vue/data-grid'
import mj from '../../static/munros.json'

import ruMessages from 'devextreme/localization/messages/ru.json'

import { locale, loadMessages } from 'devextreme/localization'

import themes from 'devextreme/ui/themes'

loadMessages(ruMessages)
locale(navigator.language || navigator.browserLanguage)

var cT, lRCI

export default {
  name: 'HelloWorld',
  data () {
    return {
      treeData: [
        { text: 'Item 1' },
        { text: 'Item 2' },
        { text: 'Item 3', state: { selected: true } },
        { text: 'Item 4' }
      ],
      datadata: datadata,
      msg: 'Welcome to Your Vue.js App',
      text: 'Hello!',
      datas: mj,
      themeIter: 0,
      dataSource: {
        fields: [{
          caption: 'Region',
          width: 120,
          dataField: 'region',
          area: 'row',
          sortBySummaryField: 'Total'
        }, {
          caption: 'City',
          dataField: 'city',
          width: 150,
          area: 'row'
        }, {
          dataField: 'date',
          dataType: 'date',
          area: 'column'
        }, {
          groupName: 'date',
          groupInterval: 'month',
          visible: false
        }, {
          caption: 'Total',
          dataField: 'amount',
          dataType: 'number',
          summaryType: 'sum',
          format: 'currency',
          area: 'data'
        }],
        store: sales
      },
      dat: dat
    }
  },
  components: {
    DxButton,
    DxDataGrid,
    DxPivotGrid,
    DxFieldChooser,
    DxSelectBox,
    DxLookup,
    DxEditing,
    DxGroupPanel,
    DxSearchPanel,
    'tree': LiquorTree,
    'form-form': formform
  },
  methods: {
    onFormBack () {
      console.log('@onFormBackEvent!')
      //
      // this.$refs.refrefref.
    },
    // ??
    onEditorPreparing (e) {
      if (e.parentType === 'dataRow' && e.dataField === 'CityID') {
        e.editorOptions.disabled = (typeof e.row.data.StateID !== 'number')
      }
    },
    onContext (e) {
      console.log(e.columnIndex)
      e.items = [
        {
          text: 'edit',
          onItemClick: () => { console.log('item ckicked!!') },
          onItemContextMenu: () => { console.log('!#@$%$') }
        }
      ]
    },

    // вариант, требующий уникальных ключей
    doubleClickOnRow (e) {
      var component = e.component
      // console.log(this)
      function initialClick (context) {
        console.log('initial click for key ' + e.key)
        component.clickCount = 1
        component.clickKey = e.key
        component.clickDate = new Date()
      }
      function doubleClick (context) {
        console.log('second click')

        let data = {}
        data.event = e
        data.context = context
        console.log(data)
        context.$refs.form.$emit('doubleClickedRow', data)
        component.clickCount = 0
        component.clickKey = 0
        component.clickDate = null
      }
      if ((!component.clickCount) || (component.clickCount !== 1) || (component.clickKey !== e.key)) {
        initialClick(this)
      }
      else if (component.clickKey === e.key) {
        if (((new Date()) - component.clickDate) <= 300) {
          doubleClick(this)
        }
        else {
          initialClick(this)
        }
      }
    },

    onDoubleClickedRow (data) {
      console.log('1!111!!!!11!!1!!')

      if (data.event.rowType === 'data') {
        this.$refs.form.data = data
        this.$refs.form.$refs.modal.show()
      }
    },

    // Вариант без проверки одинаковости строки
    doubleClickOnRow2 (e) {
      var component = e.component
      var prevClickTime = component.lastClickTime
      component.lastClickTime = new Date()
      if (prevClickTime && (component.lastClickTime - prevClickTime < 300)) {
        // Double click code
        console.log('double click')
      }
      else {
        // Single click code
        console.log('single click')
      }
    },

    // просто не работает
    doubleClickOnRow3 (e) {
      var clickTimer = cT
      var lastRowCLickedId = lRCI
      // var rows = instance.getSelectedRowsData()
      if (clickTimer && lastRowCLickedId === e.rowIndex) {
        clearTimeout(clickTimer)
        clickTimer = null
        lastRowCLickedId = e.rowIndex
        console.log('double')
      } else {
        clickTimer = setTimeout(function () {
          console.log('single')
        }, 250)
      }
      lastRowCLickedId = e.rowIndex
    },
    onButClick (e) {
      if (this.themeIter === 0) {
        themes.current('generic.mytheme-dark')
        this.themeIter++
        console.log(this.themeIter)
        this.$refs['refrefref'].instance.repaint()
      } else {
        themes.current('generic.mytheme-light')
        this.themeIter--
        console.log(this.themeIter)
        this.$refs['refrefref'].instance.repaint()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
