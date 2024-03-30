<script lang="ts">
	import { onMount } from 'svelte';
	import CountryDetails from '$lib/components/CountryDetails.svelte';

	let filter = $state('');
	let allCountries: any[] = $state([]);
	let selectedCountry = $state(null);
	let filteredCountries = $derived(
		allCountries.filter((country) =>
			country.name.common.toLowerCase().includes(filter.toLowerCase())
		)
	);

	const showCountryDetails = (country: string) => {
		selectedCountry = allCountries.find((countryObj) => countryObj.name.common === country);
	};

	const removeSelectedCountry = () => {
		if (selectedCountry) {
			selectedCountry = null;
		}
	};

	onMount(() => {
		fetch(`https://studies.cs.helsinki.fi/restcountries/api/all`)
			.then((response) => response.json())
			.then((data) => {
				allCountries = data;
			});
	});
</script>

{#if allCountries.length}
	<div>
		find countries <input bind:value={filter} on:input={removeSelectedCountry} />
	</div>
	<div>
		{#if filteredCountries.length > 10}
			<div>Too many matches, specify another filter</div>
		{:else if filteredCountries.length === 1}
			<CountryDetails country={filteredCountries[0]} />
		{:else}
			<div>
				{#each filteredCountries as country}
					<div>
						{country.name.common}
						<button on:click={() => showCountryDetails(country.name.common)}>show</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	{#if selectedCountry}
		<CountryDetails country={selectedCountry} />
	{/if}
{/if}
