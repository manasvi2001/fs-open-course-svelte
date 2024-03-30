<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let newName = '';
  export let newNumber = '';

  const dispatch = createEventDispatcher();

  const addPerson = () => {
    dispatch('message');
  };
</script>

<form on:submit|preventDefault={addPerson}>
  <div>
    name: <input bind:value={newName} />
  </div>
  <div>
    number: <input bind:value={newNumber} />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
