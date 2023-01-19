<script lang="ts">
	export let data: any;
</script>
<div class="col-main span6">
	<div>
		<h1>
			<img class="cat_image"
				src="https://cms.crewnew.com/assets/{data.cms.image}"
				alt="Pop-up telgid"
				title="Pop-up kergtelgid"
			/>
			{data.cms.title}
		</h1>
		<br />
		{@html data.cms.description}
	</div>

	<div class="category-products">
		<ol class="products-list" id="products-list">
			<li class="item">
				<a
					href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
					title="A-tüüpi soodne laotelk"
					class="product-image"
				>
					<img
						src="http://profitelgid.ee/telk-pilt/laotelgid/A/hall-laotelk-170.jpg"
						width="170"
						height="170"
						alt="A-tüüpi soodne laotelk"
					/></a
				>
				<div class="product-shop">
					<div class="f-fix">
						<h2 class="product-name">
							<a
								href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
								title="A-tüüpi soodne laotelk"
							>
								A-tüüpi laotelgid</a
							>
						</h2>
						<p>Soodsaima ruutmeetri hinnaga laotelk turul.</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> €375,00 </span>
							</p>
						</div>

						<p>
							<button
								type="button"
								title="Vaata tooteid"
								class="button btn-cart"
								><span><span>Vaata tooteid</span></span></button
							>
						</p>
						<div class="desc std">
							<strong>Värvid:</strong> Valge, hall, tumeroheline<br /><strong>Kattematerjal:</strong
							>
							Tulekindel 600g/m<sup>2</sup> PVC<br />
							<a
								href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
								title="A-tüüpi soodne laotelk"
								class="link-more">Vaata lähemalt >></a
							>
						</div>
					</div>
				</div>
			</li>

			<li class="item">
				<a
					href="/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
					title="B-tüüpi  vastupidav laotelk"
					class="product-image"
				>
					<img
						src="http://profitelgid.ee/telk-pilt/laotelgid/U/valge-laotelk-170.jpg"
						width="170"
						height="170"
						alt="B-tüüpi  vastupidav laotelk"
					/></a
				>
				<div class="product-shop">
					<div class="f-fix">
						<h2 class="product-name">
							<a
								href="/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
								title="B-tüüpi  vastupidav laotelk"
							>
								B-tüüpi laotelgid</a
							>
						</h2>
						<p>Vastupidavama konstruktsiooniga laotelk.</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> €1100,00 </span>
							</p>
						</div>

						<p>
							<button
								type="button"
								title="Vaata tooteid"
								class="button btn-cart"
								><span><span>Vaata tooteid</span></span></button
							>
						</p>
						<div class="desc std">
							<strong>Värvid:</strong> valge, hall ja tumeroheline<br /><strong
								>Kattematerjal:</strong
							>
							Tulekindel ülitugev 800-900g/m<sup>2</sup> PVC (5.a. garantii!)<br />
							<a
								href="/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
								title="B-tüüpi  vastupidav laotelk"
								class="link-more">Vaata lähemalt >></a
							>
						</div>
					</div>
				</div>
			</li>
		</ol>
	</div>
</div>
<style>
	.cat_image {
		float: right;
		margin-left: 7px;
	}
</style>