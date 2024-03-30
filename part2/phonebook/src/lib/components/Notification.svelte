<script lang="ts">
  export let successMessage: string | null = null;
  export let errorMessage: string | null = null;
</script>

{#if successMessage}
  <div class="success">
    {successMessage}
  </div>
{/if}
{#if errorMessage}
  <div class="error">
    {errorMessage}
  </div>
{/if}

<style>
  .success {
    color: green;
    background: lightgrey;
    font-size: 20px;
    border-style: solid;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .error {
    color: red;
    background: lightgrey;
    font-size: 20px;
    border-style: solid;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
