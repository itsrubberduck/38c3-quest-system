interface Quest {
    id: string
    title: string
    description: string
    questions: Array<{
        id: string
        text: string
        answers: Array<{
            id: string
            text: string
            score: Record<string, number>
        }>
    }>
    results: Array<{
        id: string
        title: string
        description: string
        framework: string
        thresholdScore: number
    }>
}

export const useQuest = (questId: string = 'which-js-framework-are-you') => {
    const quest = ref<Quest | null>({
        languages: [],
        outcomes: [],
        steps: [],
        strings: {}
    })
    const loading = ref(false)
    const error = ref<Error | null>(null)

    const fetchQuest = async () => {
        loading.value = true
        error.value = null

        try {
            const response = await fetch(`/quests/${questId}.json`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            quest.value = await response.json()
        } catch (e) {
            error.value = e instanceof Error ? e : new Error('Unknown error occurred')
            console.error('Error loading quest:', error.value)
        } finally {
            loading.value = false
        }
    }

    // Lade die Quest-Daten beim ersten Aufruf
    if (!quest.value && !loading.value) {
        fetchQuest()
    }

    return {
        quest,
        loading,
        error,
        fetchQuest // Exposed für manuelle Aktualisierungen
    }
}
