interface Framework {
    id: string;
    name: string;
    description: string;
    repoUrl: string;
}

interface Step {
    id: string;
    title: string;
    description: string;
    choices: Choice[];
}

interface Choice {
    id: string;
    text: string;
    nextStep: string;
    frameworks: string[]; // IDs der Frameworks, zu denen diese Wahl tendiert
}
