<script>
	import { scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let width = '40rem';
	let left = 'calc(50% - 20rem)';

	export let title = null;
	export let wide = false;
	export let closable = 'yes';

	if (wide) {
		width = '67rem';
		left = 'calc(32% - 20rem)';
	}

	function closeModal() {
		dispatch('cancel');
	}
</script>

<div class="modal-backdrop" on:click={closeModal} />
<div
	class="modal"
	id="cn-modal"
	style="--theme-width: {width}; --theme-left: {left}"
	transition:scale
>
	{#if closable === 'yes'}
		<div id="messages">
			<img on:click={closeModal} id="close" width="20" src="/images/x.png" alt="X" />
		</div>
	{/if}
	{#if title}<h1>{title}</h1>{/if}
	<div class="content">
		<slot />
	</div>
	<footer>
		<slot name="footer" />
	</footer>
</div>

<style>
	#messages {
		padding: 10px;
	}
	img#close {
		cursor: pointer;
		float: right;
	}
	.modal-backdrop {
		position: fixed;
		background: rgba(64, 64, 64, 0.97);
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 10;
	}
	.modal {
		position: fixed;
		top: 3vh;
		left: 5%;
		width: 90%;
		max-height: 95vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		overflow: scroll;
		overflow-x: hidden;
	}
	.content {
		padding: 1rem;
	}
	h1 {
		padding: 1rem;
		margin: 0;
		font-size: larger;
		border-bottom: 1px solid #ccc;
		font-family: 'Roboto Slab', sans-serif;
	}
	footer {
		padding: 1rem;
	}
	@media (min-width: 768px) {
		.modal {
			width: var(--theme-width);
			left: var(--theme-left);
		}
	}
</style>
