<script lang="ts">
  import Content from '$lib/components/Content.svelte';
  import Header from '$lib/components/Header.svelte';
  import Total from '$lib/components/Total.svelte';

  let course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of Svelte',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
</script>

<div>
  <Header course={course.name} />
  <Content parts={course.parts} />
  <Total parts={course.parts} />
</div>
