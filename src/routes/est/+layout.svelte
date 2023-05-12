<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<style>
		@import '/styles/navbar.css';
	</style>
</svelte:head>
<body class=" cms-index-index cms-home">
	<div class="wrapper">
		<div class="inner-wrapper">
			<div class="page">
				<div class="header-container">
					<Header />
					<div class="main-container col1-layout">
						<div class="main row">
							<div class="col-main span12">
								<div class="wired-home">
									<slot />
									<div class="subpromo">
										<div class="offers">
											<a href="/est/telkide-laenutus/odav-telgi-rent.html"
												><img
													src="/skin/frontend/default/hellowired/images/media/telgi-laenutus.jpg"
													alt="Telkide laenutus &amp; ent"
												/></a
											>
											<a href="/est/telkide-myyk/laotelgid.html"
												><img
													src="/skin/frontend/default/hellowired/images/media/pvc-laohallid.png"
													alt="PVC laotelgid ja laohallid"
												/></a
											>
										</div>
										<div class="brands">
											<a href="/est/pvc-materjal"
												><img
													src="/skin/frontend/default/hellowired/images/media/pvc-toostuslik-materjal.png"
													alt="PVC materjal on vastupidav, soodne ja kvaliteetne tööstuslikeks ehitisteks"
												/></a
											>
										</div>
									</div>
									<div class="promo-bottom">
										<a href="/est/kvaliteetsed-profitelgid"
											><img
												src="/skin/frontend/default/hellowired/images/media/promo4.jpg"
												alt="Puhtad ja kvaliteetsed rendi telgid"
											/></a
										>
									</div>
								</div>
								<br />
								<h2>
									Peotelkide, PVC laotelkide, PVC hallide ja muude PVC toodete müük & tootmine.
								</h2>
								<p>
									<a href="/est/telkide-myyk/profitelk-muuk.html"
										>Kvaliteetsed &uuml;litugeva raamiga peotelgid,</a
									>
									mida v&otilde;ib tänu paksule PVC kattele aastaringselt kasutada. Alates 2009 müüme
									ja alates 2018 ka toodame (sealjuures kvaliteetseimast PVC materjalist) erinevaid
									<a href="/est/telkide-myyk/pop-up.html">pop-up ehk easy-up kergtelke</a>,
									soodsamaid
									<a href="/est/telkide-myyk/pop-up/popup-koduaeda.html">kodukasutajale mõeldud telke</a>
									vahel harva telki vajavale inimesele,
									<a href="/est/telkide-myyk/teisaldatav-garaaz-telk.html"
										>teisaldatavaid garaaž-telke</a
									>,
									<a href="/est/telkide-myyk/laotelgid.html"
										>suuri (tulekindlaid) tööstuslikke halle</a
									>,
									<a href="/est/telkide-myyk/umartelgid.html">star- ja rotund telke</a>
									ning lisaks sellele
									<a href="/est/vaba-aeg/hobispordi-kaubad.html">valikud PVC hobispordi ja vaba aja tooteid.</a>.
								</p>
							</div>
						</div>
					</div>
				</div>
				<Footer />
				<!--Start of Tawk.to Script-->
				<script type="text/javascript">
					var Tawk_API = Tawk_API || {},
						Tawk_LoadStart = new Date();
					(function () {
						var s1 = document.createElement('script'),
							s0 = document.getElementsByTagName('script')[0];
						s1.async = true;
						s1.src = 'https://embed.tawk.to/56578d485ced5f6455f3f0a8/default';
						s1.charset = 'UTF-8';
						s1.setAttribute('crossorigin', '*');
						s0.parentNode.insertBefore(s1, s0);
					})();
				</script>
				<!--End of Tawk.to Script-->

				<script>
					(function (i, s, o, g, r, a, m) {
						i['GoogleAnalyticsObject'] = r;
						(i[r] =
							i[r] ||
							function () {
								(i[r].q = i[r].q || []).push(arguments);
							}),
							(i[r].l = 1 * new Date());
						(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
						a.async = 1;
						a.src = g;
						m.parentNode.insertBefore(a, m);
					})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

					ga('create', 'UA-80333352-1', 'auto');
					ga('send', 'pageview');
				</script>
			</div>
		</div>
		<!-- end .inner-wrapper-->
	</div>
</body>
