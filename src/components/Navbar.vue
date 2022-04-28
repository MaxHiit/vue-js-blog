<template>
	<header class="layout">
		<nav class="navbar w-full">
			<ul class="navbar-list flex items-center justify-center gap-x-8">
				<router-link :to="{ name: 'home' }" class="navbar-item">Home</router-link>
				<router-link :to="{ name: 'blog' }" class="navbar-item">Blog</router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Navbar'
};
</script>

<style></style>
