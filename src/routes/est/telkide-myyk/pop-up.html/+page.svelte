<script lang="ts">
	export let data: any;
	import { scale } from 'svelte/transition';
	import SubCategories from '$lib/components/SubCategories.svelte';
	const parent: String = "7";

	let meta_description = data.cms.meta_description;
    if (!data.cms.meta_description && data.cms.description_short) meta_description = data.cms.description_short;
    if (!data.cms.meta_description && !data.cms.description_short && data.cms.description) meta_description = data.cms.description.slice(0, 155) + "…";
    let title_tag = data.cms.title_tag;
    if (!data.cms.title_tag && data.cms.title) title_tag = data.cms.title_tag;
    if (!data.cms.title_tag && !data.cms.title) title_tag = data.cms.name;
</script>

<svelte:head>
    <title>{data.cms.title_tag} | PVCfactory.ee</title>
    <meta name="description" content={meta_description} />
</svelte:head>

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
