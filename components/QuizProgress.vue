<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-[#29114C] z-50">
    <div
        class="h-full bg-[#FF5053] smooth-transition"
        :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup>
const quest = useQuest()
await quest.fetchQuest()

const quizStore = useQuizStore();
const {progress} = storeToRefs(quizStore);
</script>

<style scoped>
.smooth-transition {
  transition: width 0.3s ease-in-out;
}
</style>
