<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AsExpected from '$lib/components/errors/AsExpected.svelte';
	import FinnishError2 from '$lib/components/errors/FinnishError2.svelte';
	import Stone from '$lib/components/errors/Stone.svelte';
	let message = Math.floor(Math.random() * 3);

	function nextError() {
		if (message < 2) message++;
		else message = 0;
	}
</script>

<svelte:head>
	<title>Ups, Oooh-Uuuh-Ääääh</title>
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
									<section class="hero container max-w-screen-lg mx-auto pb-10">
										<div class="container flex flex-col items-center">
											{#if message == 0}
												<AsExpected />
											{/if}
											{#if message == 1}
												<FinnishError2 />
											{/if}
											{#if message == 2}
												<Stone />
											{/if}
											<p class="p-8 text-blue-500">
												<button on:click={nextError}>Mulle ei meeldi see error ➡️</button>
											</p>
										</div>
									</section>
								</div>
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
