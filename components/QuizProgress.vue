<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-[#29114C] z-50">
    <div
        class="h-full bg-[#FF5053] smooth-transition"
        :style="{ width: `${(currentStepIndex / totalStepCount) * 100}%` }"
    />
  </div>
</template>

<script setup>
import {steps} from '~/data/steps';

const quizStore = useQuizStore();
const {currentStep, totalSteps} = storeToRefs(quizStore);
const currentStepIndex = computed(() => steps.findIndex(step => step.id === currentStep.value));
const totalStepCount = steps.length;
</script>

<style scoped>
.smooth-transition {
  transition: width 0.3s ease-in-out;
}
</style>
