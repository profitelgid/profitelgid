<script lang="ts">
	export let data: any;
</script>

<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view">
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>{data.cms.title}</h1>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std">
						{@html data.cms.description}
					</div>
				</div>

				<p />
			</div>

			<div class="product-img-box">
				<p class="product-image">
					<img
						id="image"
						style="height:350px"
						src="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat-profiteltat.jpg"
						alt="Tugevad profitelgid"
						title="Tugevad profitelgid"
					/>
				</p>

				<div class="more-views" style="margin-top:-40px">
					<h2>KLÕPSA, ET NÄHA PILTE SUURELT!</h2>

					<ul>
						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat-profiteltat.jpg"
								title="Kõrgemad ja madalamad tugevad profitelgid"
							>
								<img
									src="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat-profiteltat-s.jpg"
									alt="Kõrgemad ja tugevad profitelgid"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat2.jpg"
								title="Tugeva raamiga profitelgid"
							>
								<img
									src="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat2-s.jpg"
									alt="Tugeva raamiga profitelgid"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat3.jpg"
								title="Tugevad profitelgid"
							>
								<img
									src="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat3-s.jpg"
									alt="Tugevad profitelgid"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat4.jpg"
								title="Mööda maad jooksev karkass tagamaks suuremat tugevust"
							>
								<img
									src="http://profitelgid.ee/est/teltta-kuva/vahvat/vahvat4-s.jpg"
									alt="Mööda maad jooksev karkass tagamaks suuremat tugevust"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/3x6m-profi.jpg"
								title="Roheline katus ning valged seinad"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/3x6m-profi-s.jpg"
									alt="Roheline katus ning valged seinad"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/tugev-profitelk.jpg"
								title="Ülitugeva raamiga telgid"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/tugev-profitelk-s.jpg"
									alt="Ülitugeva raamiga telgid"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/5x6punasetriibuline.jpg"
								title="Punasetriibuline"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/5x6punasetriibuline-s.jpg"
									alt="Punasetriibuline"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/4x8sinisetriibuline.jpg"
								title="Sinisetriibuline"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/4x8sinisetriibuline-s.jpg"
									alt="Sinisetriibuline"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/4x10rohelisetriibuline_akendega.jpg"
								title="Rohelisetriibuline telk"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/4x10rohelisetriibuline_akendega-s.jpg"
									alt="Rohelisetriibuline telk"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/6x12_profitelk_kylg.jpg"
								title="Akendega profitelk"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/6x12_profitelk_kylg-s.jpg"
									alt="Akendega profitelk"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/roheline-profitelk.jpg"
								title="Üleni tumeroheline profitelk"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/roheline-profitelk-s.jpg"
									alt="Üleni tumeroheline profitelk"
								/>
							</a>
						</li>

						<li>
							<a
								class="group"
								rel="group"
								href="http://profitelgid.ee/telk-pilt/profitelgid/suur-peotelk.jpg"
								title="Suur peotelk"
							>
								<img
									src="http://profitelgid.ee/telk-pilt/profitelgid/suur-peotelk-s.jpg"
									alt="Suur peotelk"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="clearer" />
		</div>

		<div class="product-collateral">
			<div class="product-tabs">
				<h2 class="tab-title">
					<span class="tabs-controller">Mõned näidishinnad eri mõõtudel</span>
				</h2>

				<div class="product-tabs-content" id="product_tabs_additional_contents">
					<table class="data-table" id="product-attribute-specs-table">
						<col width="25%" />

						<col />

						<tbody>
							{#each data.cms.products as pageitem}
								<tr>
									<th class="label">{pageitem.title}</th>
									<td class="data"> HIND: {pageitem.selling_price}€ </td>
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
