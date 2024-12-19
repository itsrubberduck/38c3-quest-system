<template>
  <div class="min-h-screen bg-[#0F000A] p-6">
    <QuizProgress/>

    <!-- Full screen glitch overlay -->
    <div v-show="isTransitioning" class="fixed inset-0 z-50 glitch-overlay">
      <div class="glitch-lines"></div>
      <div class="glitch-text">PROCESSING...</div>
    </div>

    <div class="max-w-4xl mx-auto relative">
      <!-- Dystopian decorative elements -->
      <div class="absolute top-0 right-0 -translate-y-12 opacity-30">
        <pre class="text-[#6A5FDB] text-xs glitch-element">
          ERROR://
          undefined is not a function
          at Object.&lt;anonymous>
          at Runtime.js:45:21
        </pre>
      </div>

      <!-- Step content -->
      <div class="relative z-10 space-y-8 p-8" ref="contentRef">
        <h2 class="text-[#FF5053] text-3xl font-display mb-6 glitch-element"
            :class="{ 'glitch-active': isGlitching }">
          {{ step.title[lang] }}
        </h2>

        <img :src="'/steps/' + step.id + '.jpg'" alt=""
             class="w-full h-64 object-cover glitch-image"
             :class="{ 'glitch-active': isGlitching }"/>

        <div class="prose prose-invert max-w-none">
          <p class="text-[#FEF2FF] text-xl glitch-element"
             :class="{ 'glitch-active': isGlitching }">
            {{ step.description[lang] }}
          </p>
        </div>

        <!-- Choices -->
        <div class="space-y-4">
          <button
              v-for="choice in step.choices"
              :key="choice.id"
              @click="handleChoice(choice)"
              class="w-full p-6 border border-[#6A5FDB] bg-[#190B2F] hover:bg-[#261A66]
                     text-left text-[#FEF2FF] transition-all group relative overflow-hidden"
              :class="{ 'glitch-active': isGlitching }"
          >
            <div class="flex items-center glitch-element">
              <span class="text-[#B2AAFF] mr-4 font-mono">>_</span>
              <span class="group-hover:translate-x-2 transition-transform">
                {{ choice.text[lang] }}
              </span>
            </div>
            <div class="glitch-button-overlay"></div>
          </button>
        </div>
      </div>

      <!-- Decorative circuits -->
      <svg class="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 400 100">
        <path d="M0,50 L400,50" class="stroke-[#FF5053]" fill="none" stroke-width="0.5"/>
        <path d="M100,0 L100,100" class="stroke-[#6A5FDB]" fill="none" stroke-width="0.5"/>
        <path d="M200,0 L200,100" class="stroke-[#6A5FDB]" fill="none" stroke-width="0.5"/>
        <path d="M300,0 L300,100" class="stroke-[#6A5FDB]" fill="none" stroke-width="0.5"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';

const quizStore = useQuizStore();
const step = computed(() => quizStore.currentStepData);
const lang = computed(() => quizStore.language);
const contentRef = ref(null);
const isGlitching = ref(false);
const isTransitioning = ref(false);

const handleChoice = async (choice) => {
  document.activeElement.blur();

  // Trigger glitch effects
  isGlitching.value = true;
  isTransitioning.value = true;

  // Wait for glitch animation
  await new Promise(resolve => setTimeout(resolve, 500));

  // Make the choice
  quizStore.makeChoice(choice);

  // Smooth scroll and reset effects
  setTimeout(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    isGlitching.value = false;
    isTransitioning.value = false;
  }, 0);
};

onMounted(() => {
  document.activeElement?.blur();

  // am anfang auch transition
  isTransitioning.value = true;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 1000);
});
</script>

<style scoped>
/* Base glitch styles */
.glitch-element {
  position: relative;
  transition: transform 0.2s;
}

.glitch-active {
  animation: glitch 0.5s infinite;
}

/* Glitch animations */
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

/* Image glitch effect */
.glitch-image.glitch-active {
  animation: imageGlitch 0.5s infinite;
  position: relative;
}

.glitch-image.glitch-active::before,
.glitch-image.glitch-active::after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  background-position: center;
  background-size: cover;
  mix-blend-mode: hard-light;
}

.glitch-image.glitch-active::before {
  animation: glitchShift 0.4s infinite;
  left: 2px;
  background-color: #ff0000;
}

.glitch-image.glitch-active::after {
  animation: glitchShift 0.4s infinite reverse;
  left: -2px;
  background-color: #00ff00;
}

@keyframes glitchShift {
  0% {
    transform: translate(0)
  }
  20% {
    transform: translate(-2px, 2px)
  }
  40% {
    transform: translate(-2px, -2px)
  }
  60% {
    transform: translate(2px, 2px)
  }
  80% {
    transform: translate(2px, -2px)
  }
  100% {
    transform: translate(0)
  }
}

/* Full screen transition overlay */
.glitch-overlay {
  background: rgba(15, 0, 10, 0.9);
  animation: overlayGlitch 0.5s infinite;
}

.glitch-lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 1px,
      rgba(106, 95, 219, 0.2) 2px,
      rgba(106, 95, 219, 0.2) 3px
  );
  animation: linesMove 3s linear infinite;
}

.glitch-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: monospace;
  font-size: 2rem;
  color: #FF5053;
  text-shadow: 2px 2px #6A5FDB;
  animation: textGlitch 0.3s infinite;
}

@keyframes overlayGlitch {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}

@keyframes linesMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

@keyframes textGlitch {
  0%, 100% {
    transform: translate(-50%, -50%) skew(0deg);
  }
  20% {
    transform: translate(-52%, -48%) skew(-4deg);
  }
  40% {
    transform: translate(-48%, -52%) skew(4deg);
  }
  60% {
    transform: translate(-51%, -49%) skew(-2deg);
  }
  80% {
    transform: translate(-49%, -51%) skew(2deg);
  }
}

/* Button glitch effect */
.glitch-button-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent 65%, rgba(106, 95, 219, 0.1) 70%, transparent 75%);
  animation: none;
  pointer-events: none;
}

button:hover .glitch-button-overlay {
  animation: buttonGlitch 1s infinite;
}

@keyframes buttonGlitch {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
