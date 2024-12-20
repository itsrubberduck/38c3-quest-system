<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0F000A] p-6">
    <div class="max-w-4xl w-full relative">
      <!-- Glitch scan line effect -->
      <div class="scan-lines fixed inset-0 pointer-events-none"></div>

      <div class="text-center mb-16">
        <!-- Title with glitch build-up -->
        <h1 class="text-6xl text-[#FF5053] font-display mb-4 glitch-container opacity-0"
            :class="{ 'glitch-reveal': isRevealed }">
          <span class="glitch-text" data-text="str.title">{{ str.title }}</span>
          <div class="glitch-bars"></div>
        </h1>

        <!-- Description with typewriter effect -->
        <div class="text-xl text-[#B2AAFF] glitch-text-container opacity-0 max-w-2xl mx-auto"
             :class="{ 'glitch-reveal': isRevealed }">
          <div class="typewriter-container text-left">
            <span class="whitespace-pre-line">{{ displayedText }}</span>
            <span class="cursor" :class="{ 'cursor-blink': isTypingDone }">_</span>
          </div>
        </div>
      </div>

      <!-- Button with glitch reveal -->
      <button
          @click="startQuiz"
          class="w-full p-6 border-2 border-[#FF5053] bg-transparent
                 hover:bg-[#FF5053]/10 text-[#FEF2FF] text-xl
                 transition-all duration-300 flex items-center justify-center
                 hover:translate-y-[-2px] hover:shadow-[0_4px_0_0_#FF5053]
                 glitch-button opacity-0"
          :class="{ 'glitch-reveal': isRevealed && isTypingDone }"
      >
        <span class="relative">
          {{ str.startButton }}
          <div class="glitch-button-overlay"></div>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const quest = useQuest()
await quest.fetchQuest()
const {strings} = quest.quest.value

const quizStore = useQuizStore();
const str = computed(() => strings[quizStore.language ?? 'en'].startScreen);
const isRevealed = ref(false);
const isTypingDone = ref(false);
const displayedText = ref('');
const currentCharIndex = ref(0);
const typingSpeed = 50; // ms per character

const typeNextChar = () => {
  const fullText = str.value.description;

  if (currentCharIndex.value < fullText.length) {
    // Add next character to displayed text
    displayedText.value = fullText.substring(0, currentCharIndex.value + 1);
    currentCharIndex.value++;

    // Add random delay variation for more realistic typing
    const randomDelay = typingSpeed + Math.random() * 100 - 25;

    // Schedule next character
    setTimeout(typeNextChar, randomDelay / 2);
  } else {
    // Typing finished
    isTypingDone.value = true;
  }
};

const startQuiz = () => {
  quizStore.gotToStepIndex(0);
};

onMounted(() => {
  // Start reveal animation
  setTimeout(() => {
    isRevealed.value = true;
    // Start typing after title reveal
    setTimeout(typeNextChar, 1000);
  }, 500);
});
</script>

<style scoped>
/* Existierende Style-Definitionen bleiben gleich */
.scan-lines {
  background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(106, 95, 219, 0.05) 51%
  );
  background-size: 100% 4px;
  z-index: 50;
  pointer-events: none;
}

/* Title glitch effect */
.glitch-container {
  position: relative;
  transition: opacity 0.5s ease-out;
}

.glitch-text {
  position: relative;
  display: inline-block;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0F000A;
}

.glitch-text::before {
  left: 2px;
  color: #FF0000;
  animation: glitchText 3s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  color: #00FF00;
  animation: glitchText 2s infinite linear alternate-reverse;
}

@keyframes glitchText {
  0% {
    clip-path: inset(50% 0 50% 0);
    transform: skew(0deg);
  }
  10% {
    clip-path: inset(10% 0 85% 0);
    transform: skew(0.5deg);
  }
  20% {
    clip-path: inset(75% 0 20% 0);
    transform: skew(-0.5deg);
  }
  30% {
    clip-path: inset(40% 0 60% 0);
    transform: skew(0.5deg);
  }
  40% {
    clip-path: inset(25% 0 75% 0);
    transform: skew(-0.5deg);
  }
  50% {
    clip-path: inset(60% 0 40% 0);
    transform: skew(0.5deg);
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: skew(0deg);
  }
}

/* Typewriter container */
.typewriter-container {
  display: inline-block;
  position: relative;
  min-height: 6rem; /* Verhindert Springen beim Tippen */
}

/* Cursor */
.cursor {
  display: inline-block;
  margin-left: 2px;
  color: #B2AAFF;
  font-weight: bold;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Button reveal */
.glitch-button {
  transition: opacity 0.5s ease-out;
  position: relative;
  overflow: hidden;
}

.glitch-button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 80, 83, 0.2),
      transparent
  );
  animation: buttonGlitch 2s infinite;
  transform: translateX(-100%);
}

@keyframes buttonGlitch {
  100% {
    transform: translateX(100%);
  }
}

/* Reveal animations */
.glitch-reveal {
  opacity: 1 !important;
}

.glitch-container.glitch-reveal {
  animation: revealGlitch 0.5s ease-out forwards;
}

.glitch-text-container.glitch-reveal {
  opacity: 1 !important;
}

@keyframes revealGlitch {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
