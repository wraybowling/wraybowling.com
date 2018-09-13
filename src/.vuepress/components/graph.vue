<template>
  <svg pointer-events="all" xlink:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
    <g v-for="node in nodes" :key="node.id" :transform="node.transform">
      <circle cx="0" cy="0" r="5"/>
      <text :r="5" x="0" y="-10">{{node.name}}</text>
    </g>
    <line v-for="node in nodes" x1="0" y1="0" x2="30" y2="40" />
  </svg>
</template>

<script>
export default {
  name:'graph',
  props: ['graphJSON'],
  data(){
    return {
      nodes: [],
      edges: []
    }
  },
//  computed: {
    
//  },
  mounted() {
    // import data
    const data = JSON.parse(this.graphJSON);
    this.nodes = data.nodes;
    this.edges = data.edges;
    
    // set x and y positions
    for(let i=0; i<this.nodes.length; i++) {
      let node = this.nodes[i];
      node.x = Math.random()*100;
      node.y = Math.random()*100;
      node.transform = `translate(${node.x},${node.y})`;
    }
    
//    for(let i=0; i<this.edges.length; i++) {
//      let edge = this.edges[i];
//      edge.x1 = node[
//    }
    setTimeout(this.move, 2000);
  },
  methods: {
    move() {
      for(let i=0; i<this.nodes.length; i++){
        this.nodes[i].x += 1;
      }
    }
  }
}
</script>

<style scoped>
  svg {
    background-color:orange
  }
  text {
    text-align: center;
  }
</style>


<!--

<script>
new Vue({
  el: '#app',
  data: function () {
  	var defaultSides = 10
  	var stats = Array.apply(null, { length: defaultSides })
    	.map(function () { return 100 })
  	return {
    	stats: stats,
    	points: generatePoints(stats),
      sides: defaultSides,
      minRadius: 50,
      interval: null,
      updateInterval: 500
    }
  },
  watch: {
  	sides: function (newSides, oldSides) {
    	var sidesDifference = newSides - oldSides
      if (sidesDifference > 0) {
      	for (var i = 1; i <= sidesDifference; i++) {
        	this.stats.push(this.newRandomValue())
        }
      } else {
        var absoluteSidesDifference = Math.abs(sidesDifference)
      	for (var i = 1; i <= absoluteSidesDifference; i++) {
        	this.stats.shift()
        }
      }
    },
    stats: function (newStats) {
			TweenLite.to(
      	this.$data, 
        this.updateInterval / 1000, 
        { points: generatePoints(newStats) }
    	)
    },
    updateInterval: function () {
    	this.resetInterval()
    }
  },
  mounted: function () {
  	this.resetInterval()
  },
  methods: {
    randomizeStats: function () {
    	var vm = this
    	this.stats = this.stats.map(function () {
      	return vm.newRandomValue()
      })
    },
    newRandomValue: function () {
    	return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
    },
    resetInterval: function () {
    	var vm = this
    	clearInterval(this.interval)
      this.randomizeStats()
    	this.interval = setInterval(function () { 
      	vm.randomizeStats()
      }, this.updateInterval)
    }
  }
})

function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.9
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return { x: tx, y: ty }
}

function generatePoints (stats) {
	var total = stats.length
	return stats.map(function (stat, index) {
    var point = valueToPoint(stat, index, total)
    return point.x + ',' + point.y
  }).join(' ')
}

</script>

-->
