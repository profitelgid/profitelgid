<script lang="ts">
	export let data: any;
	import { scale } from 'svelte/transition';
	import SubCategories from '$lib/components/SubCategories.svelte';
	const parent: String = "7";
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
	<SubCategories {parent} />
</div>

<style>
	.cat_image {
		float: right;
		margin-left: 7px;
	}
</style>
