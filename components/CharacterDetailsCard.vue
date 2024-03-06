<script setup lang="ts">
import type { Character } from "../interfaces/CharacterInterface";

interface Props {
  character: Character;
}
const { character } = defineProps<Props>();

const isDead = computed(() => {
  return character.status === "Dead" ? { grayscale: true } : {};
});
</script>
<template>
  <div class="flex m-3 rounded-xl">
    <NuxtImg
      :src="character.image"
      :modifiers="isDead"
      width="200"
      height="200"
      class="rounded-l-xl"
    />
    <div class="m-3">
      <p class="text-xl mb-3">{{ character.name }}</p>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <p>Location: {{ character.location.name }}</p>
    </div>
  </div>
</template>
