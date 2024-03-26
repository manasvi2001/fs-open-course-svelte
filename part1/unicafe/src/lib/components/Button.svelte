<script lang="ts">
  export let clickHandler: (() => void) | null = null;
  export let text = '';
</script>

<button on:click={clickHandler}>{text}</button>
