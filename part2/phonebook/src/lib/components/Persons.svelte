<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let persons: { name: string; number: string; id: number }[] = [];
  const dispatch = createEventDispatcher();
  const deletePerson = (id: number | string, name: string) => {
    dispatch('message', {
      id,
      name
    });
  };
</script>

{#each persons as person}
  <div>
    {person.name}
    {person.number}
    <button on:click={() => deletePerson(person.id, person.name)}>delete</button>
  </div>
{/each}
