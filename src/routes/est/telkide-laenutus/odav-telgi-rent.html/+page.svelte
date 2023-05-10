<script lang="ts">
	import { scale } from 'svelte/transition';

	let modal = false;
	let image: string;
	let imageDesc: string;
	import Modal from '$lib/components/Modal.svelte';
	function switchModal(img: string, desc: string) {
		modal = !modal;
		image = img;
		imageDesc = desc;
	}
</script>

{#if modal}
	<Modal title={imageDesc} on:cancel={() => switchModal('', '')}
		><img src="http://cms.crewnew.com/assets/1" alt="Telgirent" /></Modal
	>
{/if}

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view" in:scale>
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>Soodne suuremate ja väiksemate telkide rent Tartus, Valgas, Viljandis, Pärnus ja üle Eesti</h1>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						<p><strong>Rendime kolme tüüpi telke:</strong></p>
						<p>
							<strong>Pop-up ehk easy-up tüüpi kergtelgid</strong>, mille üles panemine võtab 1-2min aega kahel inimesel (<a href="https://www.youtube.com/watch?v=9SMRGmjVWrM" target="_blank">vaata videot>></a>), kes ei pea olema 
								tugevad ja seega saate rentida ilma üles panemiseta ning hind on seega soodne. Pop-up telke rendime mõõtudes 
								3x3m, 3x6m, 4x6m, 6x6m.
						</p>
							<p><strong>Star-telgid</strong>, mis on soodsaima ruutmeetri hinnaga telk üldse. Telgil on keskel üks pikk 5m post ning sellele 
									toetub telgi ühes tükis kattematerjal. Mõõtudes 10x10m kuni 14x14m läbimõõduga.
									<a class="group" rel="group" href="/est/teltta-kuva/vuokraus/telttojen-vuokraus8.jpg" 
									   title="Telkide rent" >Vaata pilti>></a>
						</p>
						<p><strong>Suured profitelgid</strong>, mis on ka vastupidavama raami ja kattematerjaliga, ning sobilikud kasutamaks ka 
							karmimate ilmastikutingimuste korral. Pakutavad mõõdud on 10x20m, … , 50x100m.</p>
						<p><strong>Asume Tartus aga meil on telkide paigaldajad ka Valgas ja Viljandis. Lisaks paigaldame telke ka üle Eesti 
								€0.45 - €0.85 iga läbitav kilomeeter. Tellides telgi ilma paigalduseta saadame telgi Teile kulleriga, mis maksab oluliselt vähem (al. €10) ning telgi saate tagastada samuti kulleriga või tuua ise tagasi. Soovi korral võime ka saata kulleri Teie aadressile ja tasute meile veidi vähem (meil soodsamad hinnad).</strong></p>
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
						src="/est/teltta-kuva/vuokraus/telttojen-vuokraus1.jpg"
						alt="Tugevad profitelgid"
						title="Tugevad profitelgid"
					/>
				</p>
			</div>

			<div class="clearer" />
		</div>

		<div class="product-collateral">
			<div class="product-tabs">
				<h2 class="tab-title">
					<span class="tabs-controller">Hinnad eri mõõtudel, mudelitel ja värvidel</span>
				</h2>

				<div class="product-tabs-content" id="product_tabs_additional_contents">
					<table class="data-table" id="product-attribute-specs-table">
						<col width="60%" />
						<tbody>
								<tr in:scale>
									<th class="label">3x3m popup</th>
									<td class="data"> HIND: 60€ </td>
								</tr>
								<tr in:scale>
									<th class="label">3x4.5m popup</th>
									<td class="data"> HIND: 70€ </td>
								</tr>
								<tr in:scale>
									<th class="label">3x6m popup</th>
									<td class="data"> HIND: 80€ </td>
								</tr>
								<tr in:scale>
									<th class="label">4x6m popup</th>
									<td class="data"> HIND: 100€ </td>
								</tr>
								<tr in:scale>
									<th class="label">4x8m popup</th>
									<td class="data"> HIND: 120€ </td>
								</tr>
								<tr in:scale>
									<th class="label">12x12m - 14x14m star-telk</th>
									<td class="data"> HIND: 125€ </td>
								</tr>
								<tr in:scale>
									<th class="label">5x10m peotelk</th>
									<td class="data"> HIND: 160€ </td>
								</tr>
								<tr in:scale>
									<th class="label">6x12m peotelk</th>
									<td class="data"> HIND: 250€ </td>
								</tr>
								<tr in:scale>
									<th class="label">6x14m peotelk</th>
									<td class="data"> HIND: 270€ </td>
								</tr>
						</tbody>
					</table>
				</div>

				&nbsp;&nbsp;&nbsp;&nbsp;*Hinnad ei sisalda käibemaksu.
			</div>
		</div>
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
	.group {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
