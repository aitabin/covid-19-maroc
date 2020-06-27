<template>
  <div id="communes"></div>
</template>

<script>

const d3 = require('d3')
const topojson = require('topojson')

export default {
  mounted: function () {
    (function () {
      var margin = {top: 20, right: 40, bottom: 30, left: 30}
      var width = 800
      var height = 550

      var projection = d3.geoMercator()
        .center([ -10.1759, 29.3701 ])
        .translate([width / 2 - 200, (height / 2) - 90])
        .scale([height + 30000])

      var path = d3.geoPath()
        .projection(projection)
      // ['rgb(229,245,249)', 'rgb(153,216,201)', 'rgb(44,162,95)']
      // ['rgb(254,224,210)','rgb(252,146,114)','rgb(222,45,38)']
      // ['rgb(236,231,242)','rgb(166,189,219)','rgb(43,140,190)']
      var color = d3.scaleLinear()
        // .domain([minimum, maximum])
        .range(['rgb(166,206,227)', 'rgb(31,120,180)', 'rgb(178,223,138)'])

      var svg = d3.select('#communes')
        .append('svg')
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 ' + width + ' ' + height)

      d3.queue()
        .defer(d3.csv, 'static/data/communes.csv')
      // eslint-disable-next-line handle-callback-err
        .await(function (error, data) {
          color.domain([1, 10])
          d3.queue()
            .defer(d3.json, 'static/data/communes.json')
            // eslint-disable-next-line handle-callback-err
            .await(function (error, communes) {
              // Communes
              var json = topojson.feature(communes, communes.objects.sidi_ifni)
              for (var i = 0; i < data.length; i++) {
                var dataCommune = data[i].NAME
                var dataValue = data[i].CONFIRMEDS
                for (var j = 0; j < json.features.length; j++) {
                  var jsonCommune = json.features[j].properties.NAME
                  if (dataCommune === jsonCommune) {
                    json.features[j].properties.value = dataValue
                    break
                  }
                }
              }

              var mapTooltip = d3.select('body').append('div')
                .attr('class', 'tooltip')
                .attr('id', 'mapTooltip')
                .style('opacity', 0)

              svg.selectAll('path')
                .attr('class', 'commune')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path)
                .style('fill', function (d) {
                  var value = d.properties.value
                  if (value) {
                    return color(value)
                  } else {
                    return '#fff'
                  }
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
                .on('mouseover', function (d) {
                  mapTooltip.transition()
                    .duration(200)
                    .style('opacity', 1)
                  mapTooltip.transition()
                    // .duration(500)
                    .style('opacity', 1)

                  var tip = '<strong>' + d.properties.NAME + '</strong></br>'
                  tip = tip + '<strong>المرضى:</strong>' + d.properties.value

                  mapTooltip.html(tip)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY - 28) + 'px')
                })
                .on('mouseleave', function (d) {
                  mapTooltip.transition()
                    // .duration(500)
                    .style('opacity', 0.8)
                  mapTooltip.transition()
                    .duration(500)
                    .style('opacity', 0)
                })
              var legendData = []
              json.features.forEach(function (prop) {
                var val = parseInt(prop.properties.value)
                // 0 included
                legendData.push(val)
                // 0 excluded
                // if (val) { legendData.push(val) }
              })

              legendData.sort(function (a, b) {
                return a - b
              })

              svg.selectAll('rect')
                .data(legendData)
                .enter()
                .append('rect')
                .attr('x', function (d, i) {
                  return i * (width / legendData.length)
                })
                .attr('y', height - 140)
                .attr('width', function (d, i) {
                  return (width / legendData.length)
                })
                .attr('height', 10)
                .attr('fill', function (d) {
                  return color(d)
                })
              svg.selectAll('text')
                .data([legendData[0], legendData[legendData.length - 1]])
                .enter()
                .append('text')
                .text(function (d) { return (d) })
                .attr('x', function (d, i) {
                  return (width - (margin.left / 2)) * i
                })
                .attr('y', height - 150)
                .attr('font-size', '12px')
                .attr('font-family', 'sans-serif')
            })
        })
    })()
  }
}
</script>

<style>
.commune {
fill:  #FFA07A;
stroke:  rgb(250, 102, 43);
stroke-width: 0.5;
}

div.tooltip {
  position: absolute;
  width: auto;
  height: auto;
  padding: 5px;
  background-color: rgb(250, 234, 234);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  font-family: sans-serif;
}
</style>
