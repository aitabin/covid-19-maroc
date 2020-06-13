<template>
  <div id="provinces" width="600" height="500"></div>
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
    var maximum = 600

    var minimumColor = '#ffffff'
    var maximumColor = '#ff0000'

    var allProvinces = d3.map()

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

    var svg = d3.select('#provinces')
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
      .text('الحالة الوبائية لفيروس كورونا باقاليم المغرب')

    svg.append('text')
      .attr('x', 30)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
    // .style("text-decoration", "underline")
      .text('عدد المرضى')
*/
    var path = d3.geoPath()
      .projection(projection)

    d3.queue()
      .defer(d3.json, 'static/data/provinces.json')
      .defer(d3.csv, 'static/data/provinces.csv', function (d) { allProvinces.set(d.NAME, +d.confiremed) })
      // eslint-disable-next-line handle-callback-err
      .await(function (error, provinces, data) {
        console.log(provinces)
        provinces = topojson.feature(provinces, provinces.objects.provinces)
        let mouseOver = function (d) {
          d3.select(this)
            .transition()
            .duration(200)
            .style('opacity', 1)
          // .style("stroke", "green")
          tooltip.transition()
          // .duration(200)
            .style('opacity', 1)
          tooltip.html('اقليم ' + '<strong>' + d.properties.NAME + '</strong>' + '</br>' + '  عدد المرضى:' + d.total +
                                 '</br><hr style="height:2px;border-width:0;color:gray;background-color:gray">' + '  عن كل 10 الاف نسمة هناك: ' + '%' + casePerProvinceRate(d) + ' مريض' +
                                 '</br>' + 'عدد السكان: ' + d.properties.pop_total_ + 'نسمة')
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY - 28) + 'px')
        }

        let mouseLeave = function (d) {
          d3.select(this)
            .transition()
          // .duration(200)
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
            d.total = allProvinces.get(d.properties.NAME) || 0
            return colorScale(d.total)
          })
          .attr('d', path)
          .attr('class', 'province-border')
          .attr('d', path)
          .style('stroke', 'gray')
          .attr('class', function (d) { return 'Province' })
          .style('opacity', 0.8)
          .on('mouseover', mouseOver)
          .on('mouseleave', mouseLeave)
      })

    function casePerProvinceRate (d) {
      return ((d.total / 10000) * 100).toPrecision(2)
    }

    // Legend
    svg = d3.select('svg')

    svg.append('g')
      .attr('class', 'legendLinear')
      .attr('transform', 'translate(30,60)')

    var legendLinear = d3SvgLegend.legendColor()
      .shapeWidth(30)
    // .title("string")
      .labels(['0', '150', '300', '450', '600'])
      .cells(5)
      .labelWrap(30)
      .shape('circle')
      .shapeWidth(40)
      .labelAlign('start')
      .shapePadding(10)
      .labelOffset(35)
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
background: rgb(199, 216, 248);
display: block;
margin: auto;
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
