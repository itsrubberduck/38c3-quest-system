import {defineStore} from 'pinia';
import {frameworks} from "~/data/frameworks";
import {steps} from "~/data/steps";

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        currentStep: 'start',
        choices: [] as choice[],
        language: 'de',
        isComplete: false,
        result: null as typeof frameworks[0] | null,
    }),

    getters: {
        currentStepData: (state) =>
            steps.find(s => s.id === state.currentStep),

        progress: (state) => {
            const currentIndex = steps.findIndex(s => s.id === state.currentStep);
            return currentIndex / (steps.length - 1);
        }
    },

    actions: {
        setLanguage(lang: string) {
            this.language = lang;
        },

        makeChoice(choice) {
            console.log('makeChoice called', choice);

            const currentIndex = steps.findIndex(s => s.id === this.currentStep);
            const step = steps[currentIndex];

            if (!choice) {
                console.error('Choice not found');
                return;
            }

            this.choices.push(choice);

            if (currentIndex === steps.length - 1) {
                this.completeQuiz();
            } else {
                this.currentStep = steps[currentIndex + 1].id;
            }

            console.log('choices', this.choices);
        },

        gotToStepIndex(index: number) {
            this.currentStep = steps[index].id;
        },

        completeQuiz() {
            // Berechne das am besten passende Framework basierend auf den Choices
            const frameworkScores = new Map<string, number>();

            this.choices.forEach(choice => {
                steps.forEach(step => {
                    if (!choice) return;

                    choice.frameworks.forEach(frameworkId => {
                        const currentScore = frameworkScores.get(frameworkId) || 0;
                        frameworkScores.set(frameworkId, currentScore + 1);
                    });
                });
            });

            // Finde das Framework mit dem höchsten Score
            let maxScore = 0;
            let resultFrameworkId = '';

            frameworkScores.forEach((score, frameworkId) => {
                if (score > maxScore) {
                    maxScore = score;
                    resultFrameworkId = frameworkId;
                }
            });

            this.result = frameworks.find(f => f.id === resultFrameworkId) || frameworks[0];
            this.isComplete = true;
        },

        reset() {
            this.currentStep = 'start';
            this.choices = [];
            this.isComplete = false;
            this.result = null;
        }
    }
});
