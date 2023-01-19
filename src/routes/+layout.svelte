<script>
	import SidebarRight from '../lib/components/SidebarRight.svelte';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Sidebar from '../lib/components/Sidebar.svelte';
</script>

<svelte:head>
	<style>
		@import '/src/styles/navbar.css';
	</style>
</svelte:head>
<body class="catalog-category-view categorypath-telkide-myyk-pop-up-html category-pop-up">
	<div class="wrapper">
		<div class="inner-wrapper">
			<div class="page">
				<div class="header-container">
					<Header />
					<div class="main-container col3-layout">
						<div class="main row">			
							<Sidebar />
							<slot />
							<SidebarRight />
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
		</div>
	</div></body
>
