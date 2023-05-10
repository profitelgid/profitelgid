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
		><img src="http://cms.crewnew.com/assets/1" alt="PVC Factory telkide müügi kontakt" /></Modal
	>
{/if}

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
						<p><strong>Kontor:</strong> V&otilde;ru 4/6, Tartu 51010. Vahelaod
							asuvad Aakres ja Leedus. Tootmine Poolas.<strong>
							</strong>.</p>
						<h2>Kontaktvorm</h2>
						<p>All paremas nurgas oranž kontaktvorm saadab e-maili <strong><a
									href="mailto:myyk@pvcfactory.ee">info@pvcfactory.ee</a></strong>
						</p>
						<p><img style="float: right; margin: 5px;"
								src="http://profitelgid.ee/sms/sms.jpg"
								alt="Saada SMS telgiproffidele" width="120" /><strong>
								<strong>Kui &uuml;ritus on ukse ees ja soovite <span
										style="color:red">KIIRESTI TELEFONI TEEL</span>
									&uuml;hendust saada siis: 515 9889 & 52 0123 7</p>
						<p><em>Baltic24 OÜ (Reg. nr: 14282580 / KMKR: EE102286997) - Eesti
								tarned</em><br />
							<em>Innovate Invest OÜ (Reg. nr: 14504365 / KMKR: EE102077931) -
								Otsetarned Saksamaalt</em><br />
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
						src="https://i.imgur.com/swkh286.png"
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
	.productImage {
		object-fit: cover;
		width: 65px;
		height: 65px;
	}
	.mainImage {
		width: 250px;
		padding: 4em;
	}
	.group {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}
</style>
