<template>
  <div class="Amap">
    <div id="shenyang-amap"></div>
  </div>
</template>

<script>
import G2 from '@antv/g2'
import { DataSet } from '@antv/data-set'
import mapJson from '@/assets/json/mapJson'
export default {
  name: 'Amap',
  mounted () {
    // https://geo.datav.aliyun.com/areas/bound/210100_full.json
    var chart = new G2.Chart({
      container: 'shenyang-amap',
      width: document.getElementById('shenyang-amap').clientWidth,
      height: document.getElementById('shenyang-amap').clientHeight,
      padding: [20, 20]
    })
    chart.tooltip({
      showTitle: false
    })
    // 同步度量
    chart.scale({
      longitude: {
        sync: true
      },
      latitude: {
        sync: true
      }
    })
    chart.axis(false)
    chart.legend('trend', {
      position: 'left'
    })

    // 绘制世界地图背景
    var ds = new DataSet()
    var worldMap = ds.createView('back').source(mapJson, {
      type: 'GeoJSON'
    })
    var worldMapView = chart.view()
    worldMapView.source(worldMap)
    worldMapView.tooltip(false)
    worldMapView.polygon().position('longitude*latitude').style({
      fill: '#ccc',
      stroke: 'red',
      lineWidth: 1
    })
    chart.render()

    // 可视化用户数据
    // var userData = [{
    //   name: 'Russia',
    //   value: 86.8
    // }, {
    //   name: 'China',
    //   value: 106.3
    // }, {
    //   name: 'Japan',
    //   value: 94.7
    // }, {
    //   name: 'Mongolia',
    //   value: 98
    // }, {
    //   name: 'Canada',
    //   value: 98.4
    // }, {
    //   name: 'United Kingdom',
    //   value: 97.2
    // }, {
    //   name: 'United States of America',
    //   value: 98.3
    // }, {
    //   name: 'Brazil',
    //   value: 96.7
    // }, {
    //   name: 'Argentina',
    //   value: 95.8
    // }, {
    //   name: 'Algeria',
    //   value: 101.3
    // }, {
    //   name: 'France',
    //   value: 94.8
    // }, {
    //   name: 'Germany',
    //   value: 96.6
    // }, {
    //   name: 'Ukraine',
    //   value: 86.3
    // }, {
    //   name: 'Egypt',
    //   value: 102.1
    // }, {
    //   name: 'South Africa',
    //   value: 101.3
    // }, {
    //   name: 'India',
    //   value: 107.6
    // }, {
    //   name: 'Australia',
    //   value: 99.9
    // }, {
    //   name: 'Saudi Arabia',
    //   value: 130.1
    // }, {
    //   name: 'Afghanistan',
    //   value: 106.5
    // }, {
    //   name: 'Kazakhstan',
    //   value: 93.4
    // }, {
    //   name: 'Indonesia',
    //   value: 101.4
    // }];
    // var userDv = ds.createView().source(userData).transform({
    //   geoDataView: worldMap,
    //   field: 'name',
    //   type: 'geo.region',
    //   as: ['longitude', 'latitude']
    // }).transform({
    //   type: 'map',
    //   callback: function callback(obj) {
    //     obj.trend = obj.value > 100 ? '男性更多' : '女性更多';
    //     return obj;
    //   }
    // });
    // var userView = chart.view();
    // userView.source(userDv, {
    //   'trend': {
    //     alias: '每100位女性对应的男性数量'
    //   }
    // });
    // userView.polygon().position('longitude*latitude').color('trend', ['#F51D27', '#0A61D7']).opacity('value').tooltip('name*trend').animate({
    //   leave: {
    //     animation: 'fadeOut'
    //   }
    // });
    // chart.render();
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.Amap{
  height: 100%;
  // background:#ccc;
  #shenyang-amap{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 4px solid red;
  }
}
</style>
