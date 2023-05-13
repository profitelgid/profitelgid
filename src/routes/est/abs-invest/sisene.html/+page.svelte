<script lang="ts">
	import { scale } from 'svelte/transition';

	let modal = false;
	import Modal from '$lib/components/Modal.svelte';
	function switchModal() {
		modal = !modal;
	}
</script>

<svelte:head>
	<title>PVC telkide ja PVC hallide edasmüük | PVCfactory.ee</title>
	<meta
		name="description"
		content="Soovid hakata turustama PVC tooteid nagu telgid, laohallid ja paljud muud tooted? Kandideeri edasmüüjaks siin."
	/>
</svelte:head>

{#if modal}
	<Modal title="VIGA!" on:cancel={() => switchModal()}
		><h2>Vale emaili address ja/või parool! Palun kontrolli oma kasutajanime ja parooli ning proovi uuesti! Kui viga kordub, palume kontakteeruda edasimyyjad@pvcfactory.ee kuna edasimüüjate kontod luuakse kõik manuaalselt.</h2></Modal
	>
{/if}

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view" in:scale>
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>PVCfactory edasimüüjate hinnakirjad</h1>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						<p>
							<strong>Logi sisse, et näha oma tellimusi ja hulgihindu</strong>
						</p>

						<div class="container">
							<form>
								<input type="email" placeholder="E-mail" required /><br />
								<input type="password" placeholder="Parool" required /><br />
								<input type="submit" value="Logi sisse" on:click={switchModal}/>
							</form>
						</div>
						<p>
							<br /><br /><a href="/api/docmentation.md">Edasimüüjate API dokumentatsioon>></a>
							<em
								>Soovid hakata edasimüüjaks? Kirjuta <a href="mailto:edasimyyjad@pvcfactory.ee"
									>edasimyyjad@pvcfactory.ee</a
								></em
							>
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
						style="height:250px; margin-top:20px;"
						src="https://i.imgur.com/KorPVSa.png"
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
	.container {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		margin-top: 30px;
		margin-left: 0px;
		margin-right: auto;
	}

	.container input[type='email'],
	.container input[type='password'] {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin-bottom: 15px;
		box-sizing: border-box;
	}

	.container input[type='submit'] {
		width: 100%;
		background-color: #4caf50;
		color: #fff;
		padding: 10px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.container input[type='submit']:hover {
		background-color: #45a049;
	}
</style>
