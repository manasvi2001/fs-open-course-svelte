<script lang="ts">
  import Filter from '$lib/components/Filter.svelte';
  import Notification from '$lib/components/Notification.svelte';
  import PersonForm from '$lib/components/PersonForm.svelte';
  import Persons from '$lib/components/Persons.svelte';
  import personsService from '$lib/services/persons';
  import { onMount } from 'svelte';

  let persons: {
    name: string;
    number: string;
    id: number;
  }[] = [];
  let newName = '';
  let newNumber = '';
  let filter = '';
  let successMessage: string | null = null;
  let errorMessage: string | null = null;

  onMount(() => {
    personsService.getAll().then((data) => {
      persons = data;
    });
  });

  const addPerson = () => {
    if (newName.trim() === '' || newNumber.trimEnd() === '') {
      return;
    }

    const personIsPresent = persons.find((person) => person.name === newName);
    if (personIsPresent) {
      const result = confirm(
        `${newName} is already added to phonebook, replace the old number with the new one?`
      );
      if (result) {
        updatePerson(personIsPresent.id);
      }
      return;
    }

    personsService
      .create({
        name: newName,
        number: newNumber,
        id: `${Number(persons[persons.length - 1].id) + 1}`
      })
      .then((person) => {
        persons = [...persons, person];
        newName = '';
        newNumber = '';
        successMessage = `Added ${person.name}`;
        setTimeout(() => {
          successMessage = null;
        }, 5000);
      });
  };

  const updatePerson = (id: number | string) => {
    personsService
      .update({
        name: newName,
        number: newNumber,
        id: id
      })
      .then((updatedPerson) => {
        persons = persons.map((person) => (person.id === id ? updatedPerson : person));
        newName = '';
        newNumber = '';
      })
      .catch((_) => {
        errorMessage = `Information of ${newName} has already been removed from server`;
        setTimeout(() => {
          errorMessage = null;
        }, 5000);
      });
  };

  const deletePerson = (id: number | string, name: string) => {
    const result = confirm(`Delete ${name}?`);
    if (result) {
      personsService.remove(id).then((_) => {
        persons = persons.filter((person) => person.id !== id);
      });
    }
  };

  $: filteredPersons = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(filter.toLowerCase()) || person.number.includes(filter)
  );
</script>

<div>
  <h2>Phonebook</h2>
  <Notification {successMessage} {errorMessage} />
  <Filter bind:filter />
  <h2>add a new</h2>
  <PersonForm bind:newName bind:newNumber on:message={addPerson} />
  <h2>Numbers</h2>
  <Persons
    persons={filteredPersons}
    on:message={(event) => deletePerson(event.detail.id, event.detail.name)}
  />
</div>
