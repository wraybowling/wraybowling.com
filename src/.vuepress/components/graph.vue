<template>
  <svg pointer-events="all" xlink:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
    <g v-for="node in nodes" :key="node.id" :transform="node.transform">
      <circle cx="0" cy="0" r="5"/>
      <text :r="node.weight" x="0" y="-10">{{node.name}}</text>
    </g>
    <line x1="0" y1="0" x2="30" y2="40" />
  </svg>
</template>

<script>
export default {
  data(){
    return {
      nodes: [],
      edges: []
    }
  },
	name:'graph',
  props: ['graphJSON'],
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
  },
  methods: {
    move() {
      
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