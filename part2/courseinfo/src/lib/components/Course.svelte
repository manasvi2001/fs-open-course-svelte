<script lang="ts">
  import Content from './Content.svelte';
  import Header from './Header.svelte';
  import Total from './Total.svelte';

  export let course: {
    name: string;
    id: number;
    parts: {
      name: string;
      exercises: number;
      id: number;
    }[];
  };

  $: sum = course ? course.parts.reduce((acc, part) => acc + part.exercises, 0) : 0;
</script>

<div>
  {#if course}
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total {sum} />
  {/if}
</div>
