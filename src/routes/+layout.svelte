<script>
  import ScrollWrapper from "$lib/src/ScrollWrapper.svelte";
  const {
    children
  } = $props();
</script>

<ScrollWrapper settings={{smoothWheel: true}}>
  {@render children()}
</ScrollWrapper>