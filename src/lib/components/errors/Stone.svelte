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
			<h1 class="text-center text-4xl font-bold py-5">FATAALNE KIVI ERROR NR 4758r56</h1>
			<img
				class="errorMess mx-auto pb-5 max-w-lg h-auto rounded-lg"
				src="https://projects.crewnew.com/error-messages/error475-stone/1.png"
				alt="Fataalne ERRIRRRIIIRIRRR"
			/>
		</div>
	{:else}
		<div transition:slide>
			<h1 class="text-center text-4xl font-bold py-5">PÄRISELT KAA?</h1>
			<img
				class="errorMess mx-auto pb-5 max-w-lg h-auto rounded-lg"
				src="https://projects.crewnew.com/error-messages/error475-stone/2.png"
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
	class="bg-brightRedLight hover:bg-brightRed text-white font-bold py-2 px-4 rounded">KEERA KIVI</button
>
<style>
	.errorMess {
		width: 70em;
	}
</style>
