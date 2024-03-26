<script lang="ts">
  import StatisticLine from './StatisticLine.svelte';

  export let good = 0;
  export let neutral = 0;
  export let bad = 0;

  $: total = good + neutral + bad;
  $: average = total ? (good * 1 + bad * -1) / total : 0;
  $: positive = total ? (good / total) * 100 : 0;
</script>

<h2>statistics</h2>
{#if total === 0}
  <div>No feedback give</div>
{:else}
  <table>
    <tbody>
      <StatisticLine text={'good'} value={good} />
      <StatisticLine text={'neutral'} value={neutral} />
      <StatisticLine text={'bad'} value={bad} />
      <StatisticLine text={'all'} value={total} />
      <StatisticLine text={'average'} value={average} />
      <StatisticLine text={'positive'} value={`${positive} %`} />
    </tbody>
  </table>
{/if}
