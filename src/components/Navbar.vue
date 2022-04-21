<template>
	<header class="layout">
		<h1 class="title">Home</h1>
		<nav class="navbar">
			<ul class="navbar-list">
				<router-link :to="{ name: 'home' }" class="navbar-item">Home</router-link>
				<router-link :to="{ name: 'blog' }" class="navbar-item">Blog</router-link>
				<router-link :to="{ name: 'create' }" class="navbar-item">Add post</router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Navbar'
};
</script>

<style>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.navbar {
	padding: 0;
}
</style>
