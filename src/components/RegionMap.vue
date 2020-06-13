
<template>
  <div id="regions" width="600" height="500"></div>
</template>

<script>
const d3 = require('d3')
const d3SvgLegend = require('d3-svg-legend')
const topojson = require('topojson')
export default {
  mounted: function () {
    var width = 900
    var height = 500
    var minimum = 0
    var maximum = 3000
    var minimumColor = '#ffffff'
    var maximumColor = '#ff0000'

    // Data and color scale
    var allRegions = d3.map()

    var colorScale = d3.scaleLinear()
      .domain([minimum, maximum])
      .range([minimumColor, maximumColor])

    var tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)

    var projection = d3.geoMercator()
      .center([ -7.0926, 31.7917 ])
      .scale(1400)
      .translate([450, 160])

    var svg = d3.select('#regions')
      .append('svg')
      .attr('preserveAspectRatio', 'xMidYMid')
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      .append('g')
      .attr('transform', 'translate(' + 30 + ',' + 30 + ')')
    /*
    svg.append('text')
      .attr('x', (width / 1.3))
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('text-decoration', 'underline')
      .text('الحالة الوبائية لفيروس كورونا بجهات المغرب')

    svg.append('text')
      .attr('x', 45)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
    // .style("text-decoration", "underline")
      .text('عدد الحالات المؤكدة')
*/
    var path = d3.geoPath()
      .projection(projection)

    d3.queue()
      .defer(d3.json, 'static/data/regions.json')
      .defer(d3.csv, 'static/data/regions.csv', function (d) { allRegions.set(d.code, ((+d.taux / 100) * 8030).toFixed(0)) })
      // eslint-disable-next-line handle-callback-err
      .await(function (error, regionsData, csvData) {
        var regions = topojson.feature(regionsData, regionsData.objects.regions)
        let mouseOver = function (d) {
          d3.select(this)
            .transition()
            .duration(200)
            .style('opacity', 1)
          tooltip.transition()
            .style('opacity', 1)
          tooltip.html('<strong>' + d.properties.name + '</strong>' + '</br>' + '  عدد الحالات:' + d.total +
             '</br><hr style="height:2px;border-width:0;color:gray;background-color:gray">' + 'نسبة الاصابات عن كل 10 الاف نسمة: ' + '%' + casePerRagionRate(d))
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
        // regions
        svg.append('g')
          .attr('class', 'region')
          .selectAll('path')
          .data(regions.features)
          .enter()
          .append('path')
          .style('fill', function (d) {
            d.total = allRegions.get(d.properties.code) || 0
            return colorScale(d.total)
          })
          .attr('d', path)
          .attr('class', 'region-border')
          .attr('d', path)
          .style('stroke', 'gray')
          .attr('class', function (d) { return 'Region' })
          .style('opacity', 0.8)
          .on('mouseover', mouseOver)
          .on('mouseleave', mouseLeave)
      })

    function casePerRagionRate (d) {
      return ((d.total / 10000) * 100).toPrecision(2)
    }
    // Legend
    svg = d3.select('svg')

    svg.append('g')
      .attr('class', 'legendLinear')
      .attr('transform', 'translate(30,60)')

    var legendLinear = d3SvgLegend.legendColor()
      .shapeWidth(30)
      // .title('string')
      // .titleWidth(100)
      .labels(['0', '600', '1200', '1800', '2400', '3000'])
      .cells(6)
      .labelWrap(20)
      .shape('circle')
      .shapeWidth(20)
      .labelAlign('start')
      .shapePadding(5)
      .labelOffset(40)
      .orient('vertical')
      .scale(colorScale)

    svg.select('.legendLinear')
      .call(legendLinear)
  }
}
</script>
<style>
path {
fill: rgb(2, 2, 2);
stroke: rgb(2, 2, 2);
stroke-width: .5px;
}
svg {
background: rgb(199, 216, 248);;
display: block;
margin: auto;
}
.region {
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
  padding: 10px;
  background-color: rgb(250, 234, 234);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  pointer-events: none;
}
</style>
