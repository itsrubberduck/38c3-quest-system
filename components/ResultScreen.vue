<template>
  <div class="min-h-screen bg-[#0F000A] p-6">
    <div class="max-w-4xl mx-auto relative pt-24">
      <!-- Glitchy result announcement -->
      <div class="text-center mb-16">
        <h2 class="text-[#FF5053] text-5xl font-display mb-4 glitch-text">
          {{ framework.name }}
        </h2>
        <p class="text-[#B2AAFF] text-xl glitch-text2">
          {{ str.description }}
        </p>
      </div>

      <!-- Framework description card -->
      <div class="bg-[#190B2F] border-2 border-[#FF5053] p-8 relative overflow-hidden">
        <!-- Decorative corner -->
        <div class="absolute top-0 right-0 w-16 h-16">
          <div class="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#6A5FDB]"></div>
          <div class="absolute top-2 right-2 w-2 h-2 bg-[#FF5053]"></div>
        </div>

        <div class="prose prose-invert max-w-none">
          <p class="text-[#FEF2FF] text-xl leading-relaxed mb-8">
            {{ framework.description[lang] }}
          </p>
        </div>

        <a
            :href="framework.repoUrl"
            target="_blank"
            class="inline-flex items-center space-x-2 text-[#B2AAFF] hover:text-[#FF5053] transition-colors"
        >
          <span>{{ str.repoButton }}</span>
          <span class="font-mono">>_</span>
        </a>
      </div>

      <!-- Matrix-style raining code effect in background -->
      <div class="fixed inset-0 pointer-events-none opacity-10">
        <!-- Matrix rain effect here -->
      </div>
    </div>
  </div>
</template>
<script setup>
import {strings} from '~/data/steps';
const quizStore = useQuizStore();
const str = computed(() => strings[quizStore.language].resultScreen);
const lang = computed(() => quizStore.language);
const framework = computed(() => quizStore.result);
</script>
