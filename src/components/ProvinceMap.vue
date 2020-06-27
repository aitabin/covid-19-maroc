<template>
  <div id="provinces"></div>
</template>

<script>

const d3 = require('d3')
const d3SvgLegend = require('d3-svg-legend')
const topojson = require('topojson')

export default {
  mounted: function () {
    (function () {
      var width = 800
      var height = 550

      var minimum = 0
      var maximum = 500

      var provincesName = d3.map()
      var recoverers = d3.map()
      var deaths = d3.map()

      var colorScale = d3.scaleLinear()
        .domain([minimum, maximum])
        .range(['rgb(166,206,227)', 'rgb(31,120,180)', 'rgb(178,223,138)'])

      var tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)

      var projection = d3.geoMercator()
        .center([ -7.0926, 31.7917 ])
        .translate([width / 2, (height / 2) - 140])
        .scale([height + 800])

      var svg = d3.select('#provinces')
        .append('svg')
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 ' + width + ' ' + height)

      svg.append('text')
        .attr('x', 50)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('text-decoration', 'underline')
        .text('عدد المرضى')
      var path = d3.geoPath()
        .projection(projection)

      d3.queue()
        .defer(d3.json, 'static/data/provinces.json')
        .defer(d3.csv, 'static/data/provinces.csv', function (d) {
          provincesName.set(d.NAME, +d.CONFIRMEDS)
          recoverers.set(d.NAME, +d.RECOVERERS)
          deaths.set(d.NAME, +d.DEATHS)
        })
      // eslint-disable-next-line handle-callback-err
        .await(function (error, provinces, cases) {
          provinces = topojson.feature(provinces, provinces.objects.provinces)
          let mouseOver = function (d) {
            d3.select(this)
              .transition()
              .duration(200)
              .style('opacity', 1)
              // .style('stroke', 'green')
            tooltip.transition()
            // .duration(200)
              .style('opacity', 1)
            tooltip.html('اقليم ' + '<strong>' + d.properties.NAME + '</strong><br>' + 'عدد المرضى: ' + '<strong>' +
                  provincesName.get(d.properties.NAME) + '</strong><br>' + ' عدد المتعافين: ' + '<strong>' +
                  recoverers.get(d.properties.NAME) + '</strong><br>' + ' عدد الوفيات: ' + '<strong>' +
                  deaths.get(d.properties.NAME) + '</strong>')
              .style('left', (d3.event.pageX) + 'px')
              .style('top', (d3.event.pageY - 28) + 'px')
          }

          let mouseLeave = function (d) {
            d3.select(this)
              .transition()
              .style('opacity', 0.8)
            tooltip.transition()
              .duration(500)
              .style('opacity', 0)
          }
          // Provinces
          svg.append('g')
            .attr('class', 'province')
            .selectAll('path')
            .data(provinces.features)
            .enter()
            .append('path')
            .style('fill', function (d) {
              d.total = provincesName.get(d.properties.NAME) || 0
              return colorScale(d.total)
            })
            .attr('d', path)
            .attr('d', path)
            .attr('stroke', function (d) {
              return '#008000'
            })
            .attr('stroke-width', function (d) {
              return 0.5
            })
            .style('opacity', 0.8)
            .on('mouseover', mouseOver)
            .on('mouseleave', mouseLeave)
        })
      // Legend
      svg = d3.select('svg')

      svg.append('g')
        .attr('class', 'legendLinear')
        .attr('transform', 'translate(30,60)')

      var legendLinear = d3SvgLegend.legendColor()
        .shapeWidth(30)
        .labels(['0', '125', '250', '375', '500'])
        .cells(5)
        .labelWrap(30)
        .shapeWidth(15)
        .labelAlign('start')
        .shapePadding(5)
        .labelOffset(30)
        .orient('vertical')
        .scale(colorScale)

      svg.select('.legendLinear')
        .call(legendLinear)
    })()
  }
}
</script>

<style>
.svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    vertical-align: top;
    overflow: hidden;
}
.svg-content {
    /*background: white;*/
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
}

path {
fill: rgb(2, 2, 2);
}
.province {
fill:  #FFA07A;
stroke:  rgb(250, 102, 43);
stroke-width: 0.5;
}
.selected {
fill: #FFA07A;
}
.contamination {
fill: #f31212;
stroke: #f31212;
stroke-width: 0.5;
}
circle {
fill: #CD5C5C;
}
circle.selected {
stroke: rgb(85, 85, 85);
stroke-width: 2px;
}
.incident {
fill: steelblue;
}
.sphere {
fill: #fff;
}
.land {
fill: #000;
}
div.tooltip {
  position: absolute;
  width: auto;
  height: auto;
  padding: 5px;
  background-color: rgb(250, 234, 234);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  pointer-events: none;
}
div.tooltip hr {
  color: #000;
}
/* chart progress bar */
div.tooltip span{
    position: relative;
    top: 24px;
    left: 1%;
    font-size: 12px;
}
div.tooltip .conteneur {
  font-family: sans-serif;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(1, 200px);
  grid-gap: 20px;
  padding-top: 20px;
  padding-bottom: 25px;
}
.conteneur .box {
  width: 100%;
  height: 100%;
}

.conteneur .box h2 {
  display: block;
  text-align: center;
  color: rgb(3, 3, 3);
}

.conteneur .box .chart {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  line-height: 140px;
  height: 140px;
  color: rgb(10, 10, 10);
}

.conteneur .box canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media (min-width: 220px) and (max-width: 419px) {
  div.tooltip {
    width: 60px;
    height: auto;
    font-size: 10px;
  }
}
@media (min-width: 420px) and (max-width: 659px) {
  div.tooltip {
    width: 120px;
    height: auto;
    font-size: 10px;
  }
}

@media (min-width: 660px) and (max-width: 899px) {
  div.tooltip {
    width: 150px;
    height: auto;
    font-size: 15px;
  }
}

@media (min-width: 900px) {
  div.tooltip {
    width: auto;
    height: auto;
  }
}
</style>
