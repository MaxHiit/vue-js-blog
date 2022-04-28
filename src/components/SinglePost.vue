<template>
	<div class="post">
		<p class="post-content pb-3 text-lg text-[#595a59]">
			{{ post.content }}
		</p>
		<div class="post-footer flex items-center justify-between text-gray-600 opacity-50">
			<p class="post-author font text-xs">- {{ post.author }}</p>
			<p class="post-date text-xs">{{ post.date }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['post'],
	setup(props) {}
};
</script>

<style></style>
