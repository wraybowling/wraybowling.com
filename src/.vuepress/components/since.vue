<template>
	<span>{{timeSince}} years</span>
</template>

<script>
export default {
	name:'timeSince',
	props: ['time'],
	computed: {
		timeSince() {
			const now = new Date().getTime();
			const then = Date.parse(this.time);
			let diff = now - then;
			diff /= 365.24 * 24 * 60 * 60 * 1000
			diff = diff.toFixed(3);
			return diff;
		}
	}
}
</script>
