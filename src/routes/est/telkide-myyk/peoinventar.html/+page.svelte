<script lang="ts">
	export let data: any;
	import { scale } from 'svelte/transition';	
	console.log(data);
</script>

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

<style>
	.cat_image {
		float: right;
		margin-left: 7px;
	}
</style>
