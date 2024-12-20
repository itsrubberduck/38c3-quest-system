<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0F000A]">
    <div class="relative w-full max-w-2xl mx-auto p-8">

      <!-- Glitchy title -->
      <div class="flex items-end mb-12 justify-start">
        <h1 class="font-display text-6xl text-[#FF5053] glitch-text relative">
          <span class="absolute top-0 left-0 -translate-x-[2px] opacity-70 text-[#B2AAFF]">38C3</span>
          <span class="relative">38C3</span>
          <span class="absolute top-0 left-0 translate-x-[2px] opacity-70 text-[#6A5FDB]">38C3</span>
        </h1>

        <!-- ... in C-38 -->
        <p class="text-[#B2AAFF] text-xl mb-2 ms-2 glitch-text2">
          <span class="relative">... in C-38</span>
          <span class="absolute top-0 left-0 translate-x-[2px] opacity-70">... in C-38</span>
        </p>
      </div>

      <!-- Language selection -->
      <div class="relative z-10 space-y-6">
        <button
            v-for="lang in ['DE', 'EN']"
            :key="lang"
            @click="selectLanguage(lang.toLowerCase())"
            class="w-full p-4 border-2 border-[#FF5053] bg-transparent hover:bg-[#FF5053]/10
                 text-[#FEF2FF] transition-all duration-300 flex items-center justify-between
                 hover:translate-x-1 hover:shadow-[4px_4px_0_0_#FF5053]"
        >
          <span class="text-xl">{{ lang }}</span>
          <span class="text-[#B2AAFF]">>_</span>
        </button>
      </div>

      <!-- Decorative blobs -->
      <div class="absolute -bottom-20 -right-20 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" class="w-full h-full">
          <path
              d="M40,-50C52.8,-41.9,64.6,-29.8,69.4,-15.1C74.2,-0.4,72,16.9,64.4,31.5C56.8,46.1,43.8,58,28.7,63.8C13.6,69.6,-3.6,69.3,-19.5,64.2C-35.4,59.1,-49.9,49.2,-59.8,35.1C-69.7,21,-74.9,2.7,-71.2,-13.7C-67.5,-30.1,-54.8,-44.7,-40.4,-52.8C-26,-60.9,-9.8,-62.5,3.1,-66.4C15.9,-70.2,27.2,-58.1,40,-50Z"
              transform="translate(100 100)" class="fill-[#6A5FDB]"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const selectLanguage = (lang: string) => {
  router.push(`/quiz/${lang}`);
};
</script>

<style>
.glitch-text {
  animation: glitch 3s infinite;
}

.glitch-text2 {
  animation: glitch2 2s infinite;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  20.5% {
    transform: translate(2px, -2px);
  }
  21% {
    transform: translate(0);
  }
  95% {
    transform: translate(0);
  }
  95.5% {
    transform: translate(2px, -2px);
  }
  96% {
    transform: translate(-2px, 2px);
  }
  96.5% {
    transform: translate(0);
  }
}

@keyframes glitch2 {
  0% {
    transform: translate(0);
  }
  30% {
    transform: translate(0);
  }
  31% {
    transform: translate(3px, 0) skewX(15deg);
  }
  31.5% {
    transform: translate(-3px, 0) skewX(-15deg);
  }
  32% {
    transform: translate(0);
  }
  75% {
    transform: translate(0);
  }
  76% {
    transform: translate(5px, 2px);
    opacity: 0.75;
  }
  76.5% {
    transform: translate(-2px, -1px);
    opacity: 0.25;
  }
  77% {
    transform: translate(0);
    opacity: 1;
  }
}

</style>
