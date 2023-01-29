<script>
	import { slide } from 'svelte/transition';
	let page = true;
	function stoned() {
		if (page) page = false;
		else page = true;
	}
</script>

<div class="min-h-[420px]">
	{#if page}
		<div transition:slide>
			<h1 class="title">FATAALNE KIVI ERROR NR 4758r56</h1>
			<img
				class="errorMess mx-auto pb-5 max-w-lg h-auto rounded-lg"
				src="https://projects.crewnew.com/error-messages/error475-stone/1-et.png"
				alt="Fataalne ERRIRRRIIIRIRRR"
			/>
		</div>
	{:else}
		<div transition:slide>
			<h1 class="title">PÄRISELT KAA?</h1>
			<img
				class="errorMess mx-auto pb-5 max-w-lg h-auto rounded-lg"
				src="https://projects.crewnew.com/error-messages/error475-stone/2-et.png"
				alt="Fataalne ERRIRRRIIIRIRRR"
			/>
		</div>
	{/if}
</div>
<div>
	<p>&nbsp;</p>
</div>

<button
	on:click={stoned}
	class="button">KEERA KIVI>></button
>
<style>
	.errorMess {
		width: 95%;
	}
	.button {
		font-size: 2em;
		color: blue;
		margin-bottom: 1em;
		border: 1px;
	}
	.title {
		margin: 1em;
	}
</style>
