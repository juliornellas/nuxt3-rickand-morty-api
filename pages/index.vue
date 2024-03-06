<template>
  <div class="flex flex-wrap">
    <CharacterCard
      v-for="character in data?.characters?.results"
      :key="character.id"
      :character="character"
    />
  </div>
</template>
<script lang="ts" setup>
import type { CharactersResults } from "../types/CharactersResultsType";
import { GET_CHARACTERS } from "../queries/queries";
const { data } = await useAsyncQuery<CharactersResults>(GET_CHARACTERS);
</script>
