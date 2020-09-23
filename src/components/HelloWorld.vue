<template>
  <div class="dp-flex-container">
  <div class="dp-header">
    Header
  </div>
  <div style="display: flex; flex-direction:column; overflow: auto; flex-grow: 1;">
    <div style="height: 500px; background: yellow;">
      Gallery
    </div>
    <DxTileView
      ref="tileVidget"
      :items="categories"
      height="100%"
      :base-item-height="192"
      :base-item-width="300"
      width="100%"
      :item-margin="10"
      direction="vertical"
      class="dp-tile-view"
      :show-scrollbar="true"
    >
      <template  #item="{ data }">
        <DpTileItem :item-data="data"/>
      </template>
    </DxTileView>
  </div>
    <div class="dp-footer">
      Footer
  </div>
  </div>
</template>

<script>
import DxTileView from 'devextreme-vue/tile-view'
import DpTileItem from './DpTileItem.vue'
export default {
  data () {
    return {
      categories: [
        {
          ID: '1',
          PatternName: 'Авиация',
          path: './tileversion/categories/5_Авиация.png'
        },
        {
          ID: '2',
          PatternName: 'Автомобили и специальная техника',
          path: './tileversion/categories/6_Автомобили_и_спецтехника.png'
        },
        {
          ID: '3',
          PatternName: 'Железнодорожный транспорт',
          path: './tileversion/categories/7_Железнодорожный_транспорт.png'
        },
        {
          ID: '4',
          PatternName: 'Комплексные решения',
          path: './tileversion/categories/8_Комплексные_решения.png'
        },
        {
          ID: '5',
          PatternName: 'Машиностроение',
          path: './tileversion/categories/9_Машиностроение.png'
        },
        {
          ID: '6',
          PatternName: 'Медицина',
          path: './tileversion/categories/44_Медицина.png'
        },
        {
          ID: '7',
          PatternName: 'Металлургия',
          path: './tileversion/categories/2_Металлургия.png'
        },
        {
          ID: '8',
          PatternName: 'Артика',
          path: './tileversion/categories/213_Арктика.png'
        },
        {
          ID: '9',
          PatternName: 'Радиоэлектроника',
          path: './tileversion/categories/3_Радиоэлектроника.png'
        },
        {
          ID: '10',
          PatternName: 'Станкостроение',
          path: './tileversion/categories/12_Станкостроение.png'
        },
        {
          ID: '11',
          PatternName: 'Судостроение',
          path: './tileversion/categories/13_Судостроение.jpg'
        },
        {
          ID: '12',
          PatternName: 'ТЭК',
          path: './tileversion/categories/14_ТЭК.png'
        },
        {
          ID: '13',
          PatternName: 'Фармацевтика',
          path: './tileversion/categories/96_Фармацевтика.png'
        },
        {
          ID: '14',
          PatternName: 'Фотоника',
          path: './tileversion/categories/15_Фотоника.png'
        },
        {
          ID: '15',
          PatternName: 'Химия и специальная химия',
          path: './tileversion/categories/16_Химия.png'
        },
        {
          ID: '16',
          PatternName: 'Потребительская и прочая продукция',
          path: './tileversion/categories/11_Потребительские_товары.png'
        }
      ]
    }
  },
  components: {
    DxTileView,
    DpTileItem
  }
}
</script>

<style scoped>
.dp-tile-view {
  /* flex-grow: 1; */
}
.dp-flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
.dp-header{
  background: chartreuse;
}
.dp-footer {
  background: coral;
}
</style>
