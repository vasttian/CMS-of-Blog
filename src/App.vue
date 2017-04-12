<template>
  <div id="CMS2" style="height: 100%">
    <my-canvas></my-canvas>
    <spinner v-show="isLoading"></spinner>
    <Toast v-show="isToasting"></Toast>
    <router-view ></router-view>
  </div>
</template>

<script>
	import { mapState } from 'vuex';
	import MyCanvas  from './components/share/MyCanvas.vue';
	import Spinner  from './components/share/Spinner.vue';
	import Toast  from './components/share/Toast.vue';
	export default {
		components: {
			MyCanvas,
			Spinner,
			Toast,
		},
	  computed: mapState(['isLoading', 'isToasting']),
	}
</script>

<style>
	@import '../dist/index.css';
	@import '../dist/styles.css';
</style>
