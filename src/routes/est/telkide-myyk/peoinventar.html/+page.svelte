<script lang="ts">
	export let data: any;
	import { scale } from 'svelte/transition';	
	console.log(data);

	let meta_description = data.cms.meta_description;
    if (!data.cms.meta_description && data.cms.description_short) meta_description = data.cms.description_short;
    if (!data.cms.meta_description && !data.cms.description_short && data.cms.description) meta_description = data.cms.description.slice(0, 155) + "…";
    let title_tag = data.cms.title_tag;
    if (!data.cms.title_tag && data.cms.title) title_tag = data.cms.title_tag;
    if (!data.cms.title_tag && !data.cms.title) title_tag = data.cms.name;
</script>

<svelte:head>
    <title>{data.cms.title_tag} | PVCfactory.ee</title>
    <meta name="description" content={meta_description} />
</svelte:head>

<div class="col-main span6" in:scale>
	<div>
		<h1>{data.cms.title}</h1>
		<br />
	</div>
	<div class="category-products">
		<ol class="products-list" id="products-list">
			{#each data.cms.products as product}
				<li class="item">
					<a
						href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
						title="Peoinventari müük"
						class="product-image"
					>
						<img
							src="http://cms.crewnew.com/assets/{product.image}"
							class="product"
							alt="Peoinventari müük"
						/></a
					>
					<div class="product-shop">
						<div class="f-fix">
							<h2 class="product-name">
								<a
									href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
									title="Peoinventari müük"
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

						
							<div class="desc std">
								{@html product.description}
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</div>

<style>
	.cat_image {
		float: right;
		margin-left: 7px;
	}
</style>
