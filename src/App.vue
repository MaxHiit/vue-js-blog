<template>
	<Navbar />
	<router-view />
</template>

<script>
import '@/assets/styles/index.css';
import Navbar from '@/components/Navbar.vue';

export default {
	components: { Navbar }
};
</script>
<style>
#app {
	min-height: 100vh;
}
</style>
