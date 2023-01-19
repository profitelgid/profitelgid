<script>
	import Sidebar from './Sidebar.svelte';
</script>
<div class="main-container col3-layout">
	<div class="main row">
		<Sidebar/>
		<div class="col-main span6">
			<div>
				<h1>
					<img
						src="http://profitelgid.ee/telk-pilt/laotelgid/statik-logo.png"
						align="right"
						alt="Pop-up teltat"
						title="Pop-up kergtelgid"
					/>
					Laotelgid & tulekindlad telgid
				</h1>
				<slot />
			</div>

			<div class="category-products">
				<ol class="products-list" id="products-list">
					<li class="item">
						<a
							href="http://profitelgid.ee/est/telkide-myyk/laotelgid/soodne-laotelk.html"
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
										href="http://profitelgid.ee/est/telkide-myyk/laotelgid/soodne-laotelk.html"
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
										onclick="setLocation('http://profitelgid.ee/est/telkide-myyk/laotelgid/soodne-laotelk.html')"
										><span><span>Vaata tooteid</span></span></button
									>
								</p>
								<div class="desc std">
									<strong>Värvid:</strong> Valge, hall, tumeroheline<br /><strong
										>Kattematerjal:</strong
									>
									Tulekindel 600g/m<sup>2</sup> PVC<br />
									<a
										href="http://profitelgid.ee/est/telkide-myyk/laotelgid/soodne-laotelk.html"
										title="A-tüüpi soodne laotelk"
										class="link-more">Vaata lähemalt >></a
									>
								</div>
							</div>
						</div>
					</li>

					<li class="item">
						<a
							href="http://profitelgid.ee/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
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
										href="http://profitelgid.ee/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
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
										onclick="setLocation('http://profitelgid.ee/est/telkide-myyk/laotelgid/vastupidav-laotelk.html')"
										><span><span>Vaata tooteid</span></span></button
									>
								</p>
								<div class="desc std">
									<strong>Värvid:</strong> valge, hall ja tumeroheline<br /><strong
										>Kattematerjal:</strong
									>
									Tulekindel ülitugev 800-900g/m<sup>2</sup> PVC (5.a. garantii!)<br />
									<a
										href="http://profitelgid.ee/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
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
		<div class="col-right sidebar span3">
			<div class="block block-banner">
				<div class="block-content">
					<a href="http://profitelgid.ee/cofi"
						><img
							src="http://profitelgid.ee/media/liising-jarelmaks2.jpg"
							alt="Liisi ja maksa telgi või peoinventari eest järelmaksuga"
						/></a
					><br /><br />
					<a href="http://profitelgid.ee/best"
						><img
							src="http://profitelgid.ee/media/soodne.jpg"
							width="195"
							height="149"
							alt="Parima hinna garantii"
						/></a
					>
				</div>
			</div>
		</div>
	</div>
</div>