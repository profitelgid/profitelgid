<script lang="ts">
	import { scale } from 'svelte/transition';
</script>

<svelte:head>
	<title>PVC materjali garantii | PVCfactory</title>
	<meta
		name="description"
		content="Ainukesena Eestis pakume oma PVC telkide ja laohallide kattematerjalile lisagarantiid."
	/>
</svelte:head>

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view" in:scale>
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>Garantii, mis päriselt loeb</h1>
					<p>&nbsp;</p>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						<h1>Kas teadsid, et telkidele üldiselt ei anta garantiid?</h1>
					</div>
					<div class="std">
						<p>&nbsp;</p>
						<p><strong>Aga kõik on kohustatud andma garantii?</strong></p>
						<p>
							Jah, kõik on kohustatud andma garantii aga garantiitingimustes on ka kirjas, et kui halvad ilmastikuolud lõhuvad Teie telki, siis garantii ei kehti. Tegelikult ongi tugev tuul ainuke oht Teie telgile, kui välja jätta UV, mis kahjustab telki alles nii mitmete aastate jooksul, et see ei lähe enam garantii alla. Telk või PVC laohoone tuleb esmasel püstitusel üle vaadata, et ükski komponent poleks tehase praak, kuid peale seda pole enam mingit garantiid. Kui tunni aja pärast tuleb tugev tuuleiil ja telki kahjustab, siis see garantii tingimuste alla ei lähe.
						</p>
						<p><strong>PVCfactory garantii</strong></p>
						<p>
							PVCfactory annab PRO seeria telkide, laohallide ja muudele tööstuslike hoonete PVC kattematerjalile sõltuvalt materjali paksusest 1-2 aastat garantiid. Me teame, et meie PVC materjal on piisavalt tugev, et vastu pidada ka tugeivamatele tuultele. Kui tuleb keeristorm ja majade katused hakkavad lendama, siis võib loomulikult ka PVCfacory telk puruneda, kuid enne puruneb kanderaam, kui meie PRO seeria PVC. Seetõttu julgeme ka oma PVC materjalile anda garantii lisaks tavagarantiile, mida kõik annavad.
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
						src="/images/pvc-garantii.png"
						alt="PVC - tugev ja kvaliteetne materjal, millele saab garantii"
						title="PVC telkide materjali garantii"
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
		padding: 4em;
	}
</style>
