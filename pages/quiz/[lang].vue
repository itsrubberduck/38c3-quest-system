<template>
  <div>
    <QuizProgress v-if="currentStep !== 'start' && !isComplete"/>
    <component
        :is="currentComponent"
        :key="currentStep"
        v-bind="componentProps"
    />
    {{ currentStep }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const quizStore = useQuizStore();

const quest = useQuest();
await quest.fetchQuest();
quizStore.reset();

// Initialize quiz with language
onMounted(() => {
  quizStore.setLanguage(route.params.lang as string);
});

const currentStep = computed(() => quizStore.currentStep);
const isComplete = computed(() => quizStore.isComplete);

const currentComponent = computed(() => {
  console.log("current step", currentStep.value);
  if (currentStep.value === 'start') return resolveComponent('StartScreen');
  if (isComplete.value) return resolveComponent('ResultScreen');
  return resolveComponent('QuizStep');
});

const componentProps = computed(() => {
  if (isComplete.value) {
    return {framework: quizStore.result};
  }
  return {step: quizStore.currentStepData};
});
</script>
