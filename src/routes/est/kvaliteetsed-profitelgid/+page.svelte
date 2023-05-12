<script lang="ts">
	import { scale } from 'svelte/transition';
</script>


<svelte:head>
    <title>PVC materjali tutvustus | PVCfactory</title>
    <meta name="description" content="Tutvu PVC materjaliga, mille märksõnadeks on vastupidavus, mitmekülgsus ja kvaliteet (tööstuslikeks) ehitisteks." />
</svelte:head>

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view" in:scale>
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>PVC materjali tutvustus</h1>
					<p>&nbsp;</p>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std" in:scale>
						<h1>PVC materjal: vastupidavus, mitmekülgsus ja kvaliteet tööstuslikeks ehitisteks</h1>    </div><div class="std">
							<p>&nbsp;</p>
							<p><strong>Mis on PVC materjal?</strong></p>
							<p>PVC on sünteetiline termoplastiline materjal, mis koosneb peamiselt kloriidist ja vinüülühenditest. See on valmistatud polümerisatsiooni protsessi abil, kus PVC graanulid kuumutatakse ja vormitakse erinevateks toodeteks. PVC on tuntud oma vastupidavuse, paindlikkuse ja kerguse poolest, muutes selle ideaalseks materjaliks erinevate tööstuslike ehitiste, laotelkide, aastaringselt kasutatavate peotelkide ja kõikvõimalike muude vastupidavate toodete jaoks, mida saab üldjuhul soodsama hinna eest soetada.</p>
							<p><strong>Vastupidavus</strong></p>
							<p>PVC materjal on äärmiselt vastupidav erinevatele ilmastikutingimustele, sealhulgas päikesevalgusele, sademetele, tuulele ja temperatuurimuutustele. Paksem PVC materjal säilitab oma omadused aastakpmneteks ilma märkimisväärse kulumise või värvimuutusteta. Tääkimata rebenemisest või aukude tekkimisest. PVC materjal ei roosteta ega mädane, tagades pikaajalise vastupidavuse ja lihtsa hooldamise.</p>
							<p><strong>Kvaliteet</strong></p>
							<p>Euroopa Liidus müüdav PVC materjal vastab rangetele kvaliteedistandarditele ja on testitud vastupidavuse, tulekindluse ja muude oluliste omaduste osas. See tagab, et PVCfactory toodetel on kõrge kvaliteet ja vastupidavus.</p>
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
						src="/images/pvc-materjal.png"
						alt="PVC - tugev ja kvaliteetne materjal"
						title="PVC materjalist saab teha tööstuslikke telke ning laohalle"
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
