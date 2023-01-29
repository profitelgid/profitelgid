<script lang="ts">
	import { scale } from 'svelte/transition';

	export let data: any;

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
		><img src="http://cms.crewnew.com/assets/{image}" alt={imageDesc} /></Modal
	>
{/if}

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view">
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1 in:scale>{data.cms.title}</h1>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						{@html data.cms.description}
					</div>
				</div>

				<p />
			</div>

			<div class="product-img-box">
				<p class="product-image">
					<img
						in:scale
						class="mainImage"
						src="https://cms.crewnew.com/assets/{data.cms.image}"
						alt="Tugevad profitelgid"
						title="Tugevad profitelgid"
					/>
				</p>

				<div class="more-views" style="margin-top:-40px">
					<h2>KLÕPSA, ET NÄHA PILTE SUURELT!</h2>

					<ul>
						{#each data.cms.products_categories_files as image}
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

		<div class="product-collateral">
			<div class="product-tabs">
				<h2 class="tab-title">
					<span class="tabs-controller">Hinnad eri mõõtudel, mudelitel ja värvidel</span>
				</h2>

				<div class="product-tabs-content" id="product_tabs_additional_contents">
					<table class="data-table" id="product-attribute-specs-table">
						<col width="60%" />
						<tbody>
							{#each data.cms.products as item}
								<tr in:scale>
									<th class="label">{item.title}</th>
									<td>{item.colors[0]}</td>
									<td class="data"> HIND: {Math.ceil(item.selling_price / 10) * 10}€ </td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				&nbsp;&nbsp;&nbsp;&nbsp;*Hinnad ei sisalda käibemaksu.
			</div>

			<div class="product-tabs">
				<h2 class="tab-title"><span class="tabs-controller">Sarnased tootegatekooriad</span></h2>

				<div class="product-tabs-content" id="product_tabs_upsell_products_contents">
					<div class="box-collateral box-up-sell">
						<table class="mini-products-grid" id="upsell-product-table">
							<tr>
								<td>
									<a
										href="http://profitelgid.ee/est/telkide-myyk/teisaldatav-garaaz-telk.html"
										title="Telk garaaž tugev"
										class="product-image"
									>
										<img
											src="http://profitelgid.ee/telk-pilt/garaaz/garaaz-telk-125.jpg"
											width="125"
											height="125"
											alt="Garaaž telk talveks"
										/></a
									>

									<h3 class="product-name">
										<a
											href="http://profitelgid.ee/est/telkide-myyk/teisaldatav-garaaz-telk.html"
											title="Garaažtelgid"
										>
											Teisaldatavad garaažid aastaringseks kasutuseks</a
										>
									</h3>
								</td>

								<td>
									<a
										href="http://profitelgid.ee/est/telkide-myyk/moodul-pro.html"
										title="EasyFlex PRO suured moodultelgid"
										class="product-image"
									>
										<img
											src="http://profitelgid.ee/telk-pilt/easy-flex/easyflex1-125.jpg"
											width="125"
											height="125"
											alt="EasyFlex PRO suured moodultelgid"
										/></a
									>

									<h3 class="product-name">
										<a
											href="http://profitelgid.ee/est/telkide-myyk/moodul-pro.html"
											title="EasyFlex PRO suured moodultelgid"
										>
											EasyFlex PRO suured moodultelgid aastaringseks kasutuseks</a
										>
									</h3>
								</td>

								<td>
									<a
										href="http://profitelgid.ee/est/telkide-myyk/laotelgid.html"
										title="Tulekindlad laotelgid"
										class="product-image"
									>
										<img
											src="http://profitelgid.ee/telk-pilt/laotelgid/6x24_hall_xxl_4m-s.jpg"
											width="125"
											height="125"
											alt="Tulekindlad laotelgid"
										/></a
									>

									<h3 class="product-name">
										<a
											href="http://profitelgid.ee/est/telkide-myyk/laotelgid.html"
											title="Tulekindlad laotelgid"
											>Tulekindlad laotelgid aastaringseks kasutuseks</a
										>
									</h3>
								</td>

								<td>
									<a
										href="http://profitelgid.ee/est/telkide-myyk/laotelgid.html"
										title="PVC hallid ja kaarhallid"
										class="product-image"
									>
										<img
											src="http://profitelgid.ee/telk-pilt/pvc-hallid/pvc-hallid.jpg"
											width="125"
											height="125"
											alt="PVC hallid ja kaarhallid"
										/></a
									>

									<h3 class="product-name">
										<a
											href="http://profitelgid.ee/est/telkide-myyk/laotelgid.html"
											title="PVC hallid ja kaarhallid">PVC hallid ja kaarhallid</a
										>
									</h3>
								</td>

								<td>
									<a
										href="http://profitelgid.ee/est/telkide-myyk/pop-up/kuuskant-hex-profi-popup.html"
										title="Pop-up PRO HEX moodulitest 2x2m kuni 8x400m telgid"
										class="product-image"
									>
										<img
											src="http://profitelgid.ee/telk-pilt/pop-up/pro-hex/popup-lava-125.jpg"
											width="125"
											height="125"
											alt="Pop-up PRO HEX moodulitest 2x2m kuni 8x400m telgid"
										/></a
									>

									<h3 class="product-name">
										<a
											href="http://profitelgid.ee/est/telkide-myyk/pop-up/kuuskant-hex-profi-popup.html"
											title="Pop-up PRO HEX moodulitest 2x2m kuni 8x400m telgid"
										>
											Pop-up PRO HEX moodulitest 2x2m kuni 8x400m telgid</a
										>
									</h3>
								</td>

								<td class="empty">&nbsp;</td>
							</tr>
						</table>
					</div>
				</div>
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
