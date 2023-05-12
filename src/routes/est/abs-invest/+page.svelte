<script lang="ts">
	import { scale } from 'svelte/transition';
</script>


<svelte:head>
    <title>Kontakt telgiproffidega | PVCfactory.ee</title>
    <meta name="description" content="Küsimuste korral ja abi saamiseks e-poest ostmisel, kontakteeru telgiproffidega Harjumaal ja Tartumaal." />
</svelte:head>

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view" in:scale>
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>PVCfactory kontaktinfo</h1>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						<p><br><br>
							<strong>Kontor:</strong> V&otilde;ru 4/6, Tartu 51010.<br><br> Vahelaod asuvad Aakres ja
							Leedus. Tootmine Poolas.<strong />.
						</p>
						<h2>Kontaktvorm</h2>
						<p>
							All paremas nurgas oranž kontaktvorm saadab e-maili <strong
								><a href="mailto:myyk@pvcfactory.ee">info@pvcfactory.ee</a></strong
							>
						</p>
						<p>
							<strong
								>Kui &uuml;ritus on ukse ees ja soovite <span style="color:red"
									>KIIRESTI TELEFONI TEEL</span
								>
								&uuml;hendust saada siis: 515 9889 & 64 8644</strong
							>. Vastasel juhul soovitame jätta enda esmaste soovide info ning Teiega võtab ühendust oma ala ekspert. Üldtelefonidel saate suhelda laotöötajaga, kes ei pruugi osata ekspertnõu anda.
						</p>
						<p>
							<em>Baltic24 OÜ (Reg. nr: 14282580 / KMKR: EE102286997) - Eesti tarned</em><br />
							<em
								>Innovate Invest OÜ (Reg. nr: 14504365 / KMKR: EE102077931) - Otsetarned Saksamaalt</em
							><br />
						</p>
					</div>
				</div>

				<p />
			</div>

			<div class="product-img-box">
				<p class="product-image">
					<img
						in:scale
						class="mainImage"
						style="height:350px"
						src="/images/pvc-laohallide-kontakt.png"
						alt="Tugevad profitelgid"
						title="Tugevad profitelgid"
					/>
				</p>
			</div>

			<div class="clearer" />
		</div>
	</div>
</div>

<style>
	.mainImage {
		width: 250px;
		padding-right: 4em;
	}
</style>
