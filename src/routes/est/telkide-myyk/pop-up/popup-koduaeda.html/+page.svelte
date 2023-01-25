<script lang="ts">
	import { scale } from 'svelte/transition';
	import SubCategories from '$lib/components/SubCategories.svelte';
	const parent: String = "7";
</script>

<div class="col-main span6" in:scale>
	<SubCategories {parent} />
</div>
