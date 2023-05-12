<script lang="ts">
	import { scale } from 'svelte/transition';

	export let data: any;

	let modal = false;
	let image: string;
	import Modal from '$lib/components/Modal.svelte';
	function switchModal(img: string) {
		modal = !modal;
		image = img;
	}

	let meta_description = data.cms.meta_description;
	if (!data.cms.meta_description && data.cms.description_short)
		meta_description = data.cms.description_short;
	if (!data.cms.meta_description && !data.cms.description_short && data.cms.description)
		meta_description = data.cms.description.slice(0, 155) + '…';
	let title_tag = data.cms.title_tag;
	if (!data.cms.title_tag && data.cms.title) title_tag = data.cms.title_tag;
	if (!data.cms.title_tag && !data.cms.title) title_tag = data.cms.name;
</script>

<svelte:head>
	<title>{data.cms.title_tag} | PVCfactory.ee</title>
	<meta name="description" content={meta_description} />
</svelte:head>

{#if modal}
	<Modal on:cancel={() => switchModal('')}
		><img src="http://cms.crewnew.com/assets/{image}" alt={data.cms.title} /></Modal
	>
{/if}

<div class="col-main span6" in:scale>
	<div>
		<h1>{data.cms.title}</h1>
		<br />
	</div>
	<div class="category-products">
		<ol class="products-list" id="products-list">
			{#each data.cms.products as product}
				<li class="item">
					{#if product.image}
						<button class="product-image" on:click={() => switchModal(product.image)}>
							<img
								src="http://cms.crewnew.com/assets/{product.image}"
								class="product"
								alt={data.cms.title}
							/>
						</button>
					{/if}
					<div class="product-shop">
						<div class="f-fix">
							<h2 class="product-name">
								{#if product.image}
									<button class="product-url" on:click={() => switchModal(product.image)}>
										{product.title}
									</button>
								{:else}
									{product.title}
								{/if}
							</h2>

							<div class="price-box">
								<p class="special-price">
									<span class="price-label"> Hind:</span>
									<span class="price" id="product-price-101"> {product.selling_price} </span>
								</p>
							</div>
							{#if product.description}
								<div class="desc std">
									{@html product.description}
								</div>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</div>

<style>
	.product {
		width: 80%;
	}
	.product-image {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}
	.product-url {
		border: none;
		background: none;
		cursor: pointer;
		font-weight: bold;
		font-size: large;
		text-decoration: underline;
	}
	button.product-url:hover {
		border-bottom: 1px dotted #000;
		text-decoration: none;
	}
	.product:hover {
		width: 85%;
	}
</style>
