<script lang="ts">
  import Part from './Part.svelte';

  export let parts: { name: string; exercises: number }[] = [];
</script>

<Part part={parts[0]} />
<Part part={parts[1]} />
<Part part={parts[2]} />
