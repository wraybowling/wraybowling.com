<template>
	<div>
		<svg height="400" width="800" preserveAspectRatio="xMidYMid meet">
			<path d="M 0 200 C 600 50 700 300 800 200" />
		</svg>
	</div>
</template>

<script>
export default {
	name: 'parametric eq',
	props: ['x','y','type'],
	data() {
	}
}
</script>

<style>
	svg {
		background-color:yellow;
	}
	path {
		stroke:black;
		stroke-width:4px;
		fill:lime;
	}
</style>