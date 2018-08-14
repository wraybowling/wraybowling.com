<template>
	<div>
		<input type="number" min="1" v-model="resX">
		<span v-for="q in reX">X</span>
	</div>
</template>

<script>
export default {
	name: 'resolution',
	data() {
		return {
			resX: 10
		}
	}
}
</script>