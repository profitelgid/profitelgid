<script>
	import SidebarRight from '$lib/components/SidebarRight.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SidebarRelated from '$lib/components/SidebarRelated.svelte';
</script>

<svelte:head>
	<style>
		@import '/styles/navbar.css';
	</style>
</svelte:head>
<body class="catalog-category-view catalog-category-view">
	<div class="wrapper">
		<div class="inner-wrapper">
			<div class="page">
				<div class="header-container">
					<Header />


					<div class="main-container col2-right-layout">
						<div class="main row">			
							<div class="col-main span9">
	<div id="messages_product_view" />

	<div class="product-view">
		<div class="product-essential">
			<div class="product-shop">
				<div class="product-name">
					<h1>kjkl</h1>
				</div>

				<ul class="add-to-links" />

				<div class="short-description">
					<div class="std">
						<p>alkjsdlkas</p>
					</div>
				</div>

				<p />
			</div>

			<div class="product-img-box">
				<p class="product-image">
					<img
						class="mainImage"
						src="https://cms.crewnew.com/assets/a393f996-c424-4552-a738-b21fcb0e2f5c"
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
								href="https://cms.crewnew.com/assets/a393f996-c424-4552-a738-b21fcb0e2f5c"
								title="j"
							>
								<img class="productImage"
									src="https://cms.crewnew.com/assets/a393f996-c424-4552-a738-b21fcb0e2f5c"
									alt="j"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="clearer" />
		</div>
	</div>
</div>
							<SidebarRight />
						</div>
					</div>



					<div class="main-container col3-layout">
						<div class="main row">			
							<Sidebar />
							<slot />
							<SidebarRelated />
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
<style>
	.productImage {
		height: 60px;
	}
	.mainImage {
		width:350px;
		padding-bottom: 4em;
		padding-top: 2em;
	}
</style>