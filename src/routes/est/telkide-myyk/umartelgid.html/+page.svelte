<script lang="ts">
	import { scale } from 'svelte/transition';
	import SidebarRelated from '$lib/components/SidebarRelated.svelte';
	import SidebarRight from '$lib/components/SidebarRight.svelte';

	export let data: any;
	const items = data.item.data.products_categories_by_pk;

	let modal = false;
	let image: string;
	let imageDesc: string;
	import Modal from '$lib/components/Modal.svelte';
	function switchModal(img: string, desc: string) {
		modal = !modal;
		image = img;
		imageDesc = desc;
	}

	let meta_description = items.meta_description;
	if (!items.meta_description && items.description_short)
		meta_description = items.description_short;
	if (!items.meta_description && !items.description_short && items.description)
		meta_description = items.description.slice(0, 155) + '…';
	let title_tag = items.title_tag;
	if (!items.title_tag && items.title) title_tag = items.title_tag;
	if (!items.title_tag && !items.title) title_tag = items.name;
</script>

<svelte:head>
	<title>{items.title_tag} | PVCfactory.ee</title>
	<meta name="description" content={meta_description} />
</svelte:head>

{#if modal}
	<Modal title={imageDesc} on:cancel={() => switchModal('', '')}
		><img src="http://cms.crewnew.com/assets/{image}" alt={imageDesc} /></Modal
	>
{/if}

<div class="main-container col2-right-layout">
	<div class="main row" in:scale>
		<div class="col-main span9">
			<div id="messages_product_view" />

			<div class="product-view">
				<div class="product-essential">
					<div class="product-shop">
						<div class="product-name">
							<h1>{items.title}</h1>
						</div>

						<ul class="add-to-links" />

						<div class="short-description">
							<div class="std">
								<p style="font-size:large; margin-top: 1em;">{items.description_short}</p>
								{@html items.description}
							</div>
						</div>

						<p />
					</div>

					<div class="product-img-box">
						<p class="product-image">
							<img
								class="mainImage"
								src="https://cms.crewnew.com/assets/{items.image}"
								alt="Tugevad profitelgid"
								title="Tugevad profitelgid"
							/>
						</p>

						<div class="more-views" style="margin-top:-40px">
							<h2>KLÕPSA, ET NÄHA PILTE SUURELT!</h2>

							<ul>
								{#each items.products_categories_files as image}
									<li>
										<button
											class="group"
											on:click={() =>
												switchModal(image.directus_file.filename_disk, image.directus_file.title)}
										>
											<img
												in:scale
												class="productImage"
												src="http://cms.crewnew.com/assets/{image.directus_file.filename_disk}"
												alt={image.directus_file.title}
											/>
										</button>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<div class="clearer" />
				</div>
			</div>
		</div>
		<SidebarRight />
	</div>
</div>
<div class="main-container col3-layout">
	<div class="main row">
		<div class="col-left sidebar span3">
			<div class="block block-leftnav">
				<div class="block-title"><strong><span>{items.products_category.name}</span></strong></div>
				<div class="block-content">
					<ul id="leftnav">
						{#each items.products_category.products_categories as cat}
							<li class="level0 nav-1">
								<a href="/est/telkide-myyk/pop-up/{cat.slug}.html"><span>{cat.name}</span></a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="col-main span6" in:scale>
			<div class="category-products">
				<ol class="products-list" id="products-list">
					{#each items.products as product}
						<li class="item">
							<a
								href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
								title="PopUp ehk EasyUp telgid"
								class="product-image"
							>
								<img
									src="http://cms.crewnew.com/assets/{product.image}"
									class="product"
									alt="PopUp ehk EasyUp telgid"
								/></a
							>
							<div class="product-shop">
								<div class="f-fix">
									<h2 class="product-name">
										<a
											href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
											title="PopUp ehk EasyUp telgid"
										>
											{product.title}</a
										>
									</h2>

									<div class="price-box">
										<p class="special-price">
											<span class="price-label"> Hind:</span>
											<span class="price" id="product-price-101"> {product.selling_price} </span>
										</p>
									</div>

									<p>
										<button type="button" title="Vaata tooteid" class="button btn-cart"
											><span><span>Vaata tooteid</span></span></button
										>
									</p>
									<div class="desc std">
										<strong>Värvid:</strong>
										{product.colors}<br />
										<a
											href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
											title="PopUp ehk EasyUp telgid"
											class="link-more">Vaata lähemalt >></a
										>
									</div>
								</div>
							</div>
						</li>
					{/each}
				</ol>
			</div>
		</div>
		<SidebarRelated />
	</div>
</div>

<style>
	.productImage {
		object-fit: cover;
		width: 65px;
		height: 65px;
	}
	.mainImage {
		width: 350px;
		padding-bottom: 4em;
		padding-top: 2em;
	}
	.product {
		width: 13em;
	}
	.group {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
