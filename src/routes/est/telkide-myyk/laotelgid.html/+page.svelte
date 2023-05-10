<script>
	import { scale } from 'svelte/transition';
</script>
<div class="col-main span6">
	<div>
		<h1 in:scale>
			<img
				src="/telk-pilt/laotelgid/statik-logo.png"
				align="right"
				alt="Pop-up teltat"
				title="Pop-up kergtelgid"
			/>
			Laotelgid & tulekindlad telgid
		</h1>
		<br />
		<p in:scale>
			Profiseeria laotelgid on saadaval väga erinevates pikkustes, laiustes ja kõrgustes. Antud
			kategoorias on kõik tooted ja hinnad vaid näidised ja seega palume ühendust võtta ning
			kirjutada, mis on minimaalsed-maksimaalsed mõõdud, mida soovite ja kindlasti ka, kunas jakus
			peab telk kohal olema. Samuti, mis pinnasele on soov telk paigaldada. All paremal nurgas on
			oranž kontaktvormi / live chat'i link, kust saab kogu info meile saata ning saame teha
			hinnapakkumise.
		</p>
		<p in:scale>
			<strong
				>Kõikidele meie müüdavatele laotelkidele on võimalik osta varuosasid ning uusi
				kattematerjale nii, et meie laotelgid on soodsaim lahendus ka pikemas perspektiivis.</strong
			>
		</p>
	</div>

	<div class="category-products" in:scale>
		<ol class="products-list" id="products-list">
			<li class="item">
				<a
					href="/est/telkide-myyk/laotelgid/soodne-laotelk.html"
					title="A-tüüpi soodne laotelk"
					class="product-image"
				>
					<img
						src="https://cms.crewnew.com/assets/a31206e7-2c47-4b82-b5f7-6bc474e50014"
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
								PVC laotelgid Premium, PRO & PRO+</a
							>
						</h2>
						<p>Soodsaima ruutmeetri hinnaga aastaringselt kasutatav laotelk.</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> 480€ </span>
							</p>
						</div>

						<p>
							<button
								type="button"
								title="Vaata tooteid"
								class="button btn-cart"
								onclick="setLocation('/est/telkide-myyk/laotelgid/soodne-laotelk.html')"
								><span><span>Vaata tooteid</span></span></button
							>
						</p>
						<div class="desc std">
							<strong>Kattematerjal:</strong
							>
							PVC 500-550g/m² (tulekindel)<br />
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
					title="Tööstuslikud PVC hallid"
					class="product-image"
				>
					<img
						src="https://i.imgur.com/HiXenY4.png"
						width="170"
						height="170"
						alt="Tööstuslikud PVC hallid"
					/></a
				>
				<div class="product-shop">
					<div class="f-fix">
						<h2 class="product-name">
							<a
								href="/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
								title="Tööstuslikud PVC hallid"
							>
								Tööstuslikud PVC hallid</a
							>
						</h2>
						<p>Tugevaima konstruktsiooniga, pingutussüsteemide ja suurema kõrgusega PVC laohallid.</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> 1100€ </span>
							</p>
						</div>

						<p>
							<button
								type="button"
								title="Vaata tooteid"
								class="button btn-cart"
								onclick="setLocation('/est/telkide-myyk/laotelgid/vastupidav-laotelk.html')"
								><span><span>Vaata tooteid</span></span></button
							>
						</p>
						<div class="desc std">
							<strong
								>Kattematerjal:</strong
							>
							PVC 550g/m², PVC 720g/m² Prime (tulekindel) 15a. garantii!<br />
							<a
								href="/est/telkide-myyk/laotelgid/vastupidav-laotelk.html"
								title="Tööstuslikud PVC hallid"
								class="link-more">Vaata lähemalt >></a
							>
						</div>
					</div>
				</div>
			</li>
		</ol>
	</div>
</div>
