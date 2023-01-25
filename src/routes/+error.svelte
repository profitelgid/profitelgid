<script lang="ts">
	import AsExpected from '$lib/components/errors/AsExpected.svelte';
	import FinnishError2 from '$lib/components/errors/FinnishError2.svelte';
	import Stone from '$lib/components/errors/Stone.svelte';
	let message = Math.floor(Math.random() * 3);

	function nextError() {
		if (message < 2) message++;
		else message = 0;
	}
</script>

<svelte:head>
	<title>Ouch, Oooh-Uuuh-Aaargh</title>
</svelte:head>
<section class="hero container max-w-screen-lg mx-auto pb-10">
	<div class="container flex flex-col items-center">
		{#if message == 0}
			<AsExpected />
		{/if}
		{#if message == 1}
			<FinnishError2 />
		{/if}
		{#if message == 2}
			<Stone />
		{/if}
		<p class="p-8 text-blue-500"><button on:click={nextError}>I don't like this error ➡️</button></p>
	</div>
</section>
<style>
	
</style>