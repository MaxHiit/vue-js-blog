<template>
	<main class="layout">
		<form action="">
			<div class="input-box">
				<label class="input-label" for="content">Content</label>
				<textarea class="input-text" type="text" name="content" />
			</div>
			<div class="input-box">
				<label class="input-label" for="author">Author</label>
				<input class="input-text" type="text" name="author" />
			</div>
			<button type="submit" class="btn input-button">Add</button>
		</form>
	</main>
</template>

<script>
export default {
	name: 'create'
};
</script>

<style>
form {
	display: flex;
	flex-direction: column;
}

.input-box {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.input-box + .input-box {
	margin: 2rem 0;
}

.input-label {
	font-size: 1.3rem;
	text-transform: uppercase;
}

.input-text {
	width: 100%;
	border-radius: 3px;
	background: #ececec;
	outline: none;
	padding: 5px 1rem;
}

.input-button {
	padding: 10px 0;
	width: 100%;
}
</style>
