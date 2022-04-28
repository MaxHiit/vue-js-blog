<template>
	<main class="layout home">
		<h1 class="page-title text-4xl">Home</h1>
		<p class="mb-10">
			Leace a comment below. It could be anything!<br />
			Appreciation, Information, Wisdom, or even Humor. Surprise me!
		</p>

		<router-link :to="{ name: 'create' }" class="btn">Add post</router-link>
		<div
			class="flex justify-between items-center py-2.5 my-10 border-y-[1px] border-[#ececec] border-solid"
		>
			<h2>Latest Post</h2>
			<router-link :to="{ name: 'blog' }" class="text-xs underline underline-offset-1"
				>View all</router-link
			>
		</div>

		<Post />
	</main>
</template>

<script>
import Post from '@/components/SinglePost.vue';
// @ is an alias to /src

export default {
	name: 'Home',
	components: {
		Post
	}
};
</script>

<style>
.home {
	height: calc(100vh - 1rem);
}

.page-title {
	margin-bottom: 1.5rem;
}

.page-subtitle {
	margin-bottom: 1.2rem;
}
</style>
