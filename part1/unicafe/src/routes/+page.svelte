<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Statistics from '$lib/Statistics.svelte';

  let good = 0;
  let neutral = 0;
  let bad = 0;
</script>

<div>
  <h1>give feedback</h1>
  <Button clickHandler={() => (good += 1)} text={'good'} />
  <Button clickHandler={() => (neutral += 1)} text={'neutral'} />
  <Button clickHandler={() => (bad += 1)} text={'bad'} />

  <Statistics {good} {neutral} {bad} />
</div>
