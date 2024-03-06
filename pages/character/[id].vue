<script lang="ts" setup>
import { GET_CHARACTER } from "~/queries/queries";
import type { CharacterIndividualResults } from "~/types/CharacterIndividualResultsType";
const { params } = useRoute();

const { data } = await useAsyncQuery<CharacterIndividualResults>({
  query: GET_CHARACTER,
  variables: { id: params.id },
});
</script>
<template>
  <CharacterDetailsCard :character="data?.character" />
</template>
