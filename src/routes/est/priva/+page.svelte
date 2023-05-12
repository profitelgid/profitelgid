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


<svelte:head>
    <title>PVCfactory privaatsuspoliitika</title>
    <meta name="description" content="Tutvu PVCfactory privaatsuspoliitika ning andmete käitlemise tingimustega." />
</svelte:head>

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
					<h1>Privaatsus ja isiklukud andmed</h1>
					<p>&nbsp;</p>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						<h1>Privaatsuspoliitika ning isiklike andmetega töötlemine</h1>    </div><div class="std">
							<p>&nbsp;</p>
							<p><strong>Andmete kaitse &amp; privaatsus</strong></p>
							<p>Meil on karm poliitika, et me ei jaga kunagi mitte mingeid kliendi andmeid mitte &uuml;hegi teise ettev&otilde;ttega. Samuti ei saada me ka ise kunagi r&auml;mpsposti. Kui oled vabatahtlikult ise liitunud meie uudiskirjaga siis saadame maksimaalselt 3 kirja aastas parimate pakkumistega v&otilde;i loosime v&auml;lja lisavarustust. Kui Sa aga pole uudiskirjaga liitunud siis me ei saada Sulle &uuml;htegi kirja mitte kunagi!&nbsp;</p>
							<p><strong>Turvaline online poodlemine</strong></p>
							<p>Online tellimused toimuvad turvalises keskkonnas kasutades t&auml;nap&auml;eva tehnika viimast s&otilde;na, et kaitsta Sinu privaatsust. Kasutame turvalisusele suurt r&otilde;hku panevat servermajutuse teenusepakkujat ning meie e-pood on tellitud tipp programmeerijate poolt (<a href="http://e-stonia.ee" target="_blank">e-Stonia.ee</a>).</p>
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
						src="https://i.imgur.com/vc2btJP.png"
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
