<script lang="ts">
	export let data: any;
	import { scale } from 'svelte/transition';
</script>

<div class="col-main span6" in:scale>
	<div>
		<h1>
			<img
				class="cat_image"
				src="https://cms.crewnew.com/assets/{data.cms.image}"
				alt="Pop-up telgid"
				title="Pop-up kergtelgid"
			/>
			{data.cms.title}
		</h1>
		<br />
		{@html data.cms.description}
	</div>

	<div class="category-products">
		<ol class="products-list" id="products-list">
			<li class="item">
				<a href="/est/vaba-aeg/hobispordi-kaubad/piljard-lauatennis-hokilaud" title="Piljardilauad, Pinksilauad, Õhuhoki" class="product-image">
					<img
						src="http://cms.crewnew.com/assets/8df700df-46e7-43df-b6c2-145bb874fd4b.jpg"
						width="170"
						height="170"
						alt="Piljardilauad, Pinksilauad, Õhuhoki"
					/></a
				>
				<div class="product-shop">
					<div class="f-fix">
						<h2 class="product-name">
							<a href="/est/vaba-aeg/hobispordi-kaubad/piljard-lauatennis-hokilaud" title="Piljardilauad, Pinksilauad, Õhuhoki">
								Piljardilauad, Pinksilauad, Õhuhoki</a
							>
						</h2>
						<p>Piljardilauad, mis on ideaalsed ettevõtte vaba aja ruumi või noortekeskusesse</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> 129€ </span>
							</p>
						</div>
						<div class="desc std">
							<a href="/est/vaba-aeg/hobispordi-kaubad/piljard-lauatennis-hokilaud" title="Piljardilauad, Pinksilauad, Õhuhoki" class="link-more"
								>Vaata lähemalt >></a
							>
						</div>
					</div>
				</div>
			</li>

			<li class="item">
				<a
					href="/est/vaba-aeg/hobispordi-kaubad/basseinid-veehoidlad"
					title="Basseinid ja PVC veehoidlad"
					class="product-image"
				>
					<img
						src="http://cms.crewnew.com/assets/71267a0e-1211-4dc1-9ce7-3d3d01430aa6.png"
						width="170"
						height="170"
						alt="Basseinid ja PVC veehoidlad"
					/></a
				>
				<div class="product-shop">
					<div class="f-fix">
						<h2 class="product-name">
							<a
								href="/est/vaba-aeg/hobispordi-kaubad/basseinid-veehoidlad"
								title="Basseinid ja PVC veehoidlad"
							>
							Basseinid / Veehoidlad</a
							>
						</h2>
						<p>Basseinid koduaeda kui ka PVC veehoidlad kalakasvatustesse</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> 175€ </span>
							</p>
						</div>
						<div class="desc std">
							<a
								href="/est/vaba-aeg/hobispordi-kaubad/basseinid-veehoidlad"
								title="Basseinid ja PVC veehoidlad"
								class="link-more">Vaata lähemalt >></a
							>
						</div>
					</div>
				</div>
			</li>
			<li class="item">
				<a
					href=/est/vaba-aeg/hobispordi-kaubad/lauajalgpall.html
					title=" Lauajalgpalli lauad"
					class="product-image"
				>
					<img
						src="https://cms.crewnew.com/assets/b05159a2-c3a0-46a5-b406-d21741d26d95.jpg"
						width="170"
						height="170"
						alt=" Lauajalgpalli lauad"
					/></a
				>
				<div class="product-shop">
					<div class="f-fix">
						<h2 class="product-name">
							<a
								href=/est/vaba-aeg/hobispordi-kaubad/lauajalgpall.html
								title=" Lauajalgpalli lauad"
							>
							Lauajalgpalli lauad</a
							>
						</h2>
						<p>Lauajalgpall harrastajatele soodsama hinnaga.</p>

						<div class="price-box">
							<p class="special-price">
								<span class="price-label"> Hinnad alates:</span>
								<span class="price" id="product-price-101"> 90.85€ </span>
							</p>
						</div>
						<div class="desc std">
							<a
								href=/est/vaba-aeg/hobispordi-kaubad/lauajalgpall.html
								title=" Lauajalgpalli laud"
								class="link-more">Vaata lähemalt >></a
							>
						</div>
					</div>
				</div>
			</li>
		</ol>
	</div>
</div>

<style>
	.cat_image {
		float: right;
		margin-left: 7px;
		width: 140px;
	}
</style>
