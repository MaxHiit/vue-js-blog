<template>
	<main class="layout">
		<h1 class="page-title text-4xl">Guestbook</h1>
		<p class="mb-10">
			Leace a comment below. It could be anything!<br />
			Appreciation, Information, Wisdom, or even Humor. Surprise me!
		</p>

		<router-link :to="{ name: 'create' }" class="btn">Add post</router-link>

		<div v-if="posts.length">
			<div v-for="post in posts" :key="post.id">
				<SinglePost :post="post" />
			</div>
		</div>
		<div v-else>Loading...</div>
	</main>
</template>

<script>
import getPosts from '@/composables/getPosts';
import SinglePost from '@/components/SinglePost.vue';

export default {
	name: 'blog',
	components: {
		SinglePost
	},
	setup() {
		const { posts, error, load } = getPosts();
		load();
		return { posts, error };
	}
};
</script>

<style>
.btn {
	background: #1f1f1f;
	padding: 10px 1rem;
	border-radius: 3px;
	transition: all 0.3s ease;
	color: #ececec;
}

.btn:hover {
	background: #ececec;
	color: #1f1f1f;
}
</style>
