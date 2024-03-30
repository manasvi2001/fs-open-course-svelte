<script lang="ts">
	import { onMount } from 'svelte';

	const { country }: { country: any } = $props();

	const capitalCity = country.capital[0];
	const capitalCoordinates = country.capitalInfo.latlng;
	let weatherData: any = $state(null);

	onMount(() => {
		const api_key = import.meta.env.VITE_WEATHER_API;

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${capitalCoordinates[0]}&lon=${capitalCoordinates[1]}&appid=${api_key}&units=metric`
		)
			.then((response) => response.json())
			.then((data) => {
				weatherData = data;
			});
	});
</script>

<div>
	<h2>
		{country.name.common}
	</h2>
	<div>
		capital {capitalCity}
	</div>
	<div>
		area {country.area}
	</div>
	<h3>languages:</h3>
	<ul>
		{#each Object.values(country.languages) as lang}
			<li>{lang}</li>
		{/each}
	</ul>
	<div>
		<img style="width: 100px;" src={country.flags.svg} alt={country.flags.alt} />
	</div>
	{#if weatherData}
		<h3>Weather in {capitalCity}</h3>
		<div>
			temperature {weatherData.main.temp} Celcius
		</div>
		{#if weatherData.weather.length > 0}
			{#each weatherData.weather as weather}
				<div>
					<img
						style="width: 75px;"
						src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
						alt={weather.description}
					/>
				</div>
			{/each}
		{/if}
		<div>
			wind {weatherData.wind.speed} m/s
		</div>
	{/if}
</div>
