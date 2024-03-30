<script lang="ts">
  import Part from './Part.svelte';

  export let parts: { name: string; exercises: number }[] = [];
</script>

{#each parts as part}
  <Part {part} />
{/each}
