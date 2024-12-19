export const steps: Step[] = [
    {
        id: 'entry',
        title: {
            en: 'The Entrance',
            de: 'Der Eingang'
        },
        description: {
            en: 'The Security Bot scans your badge with `typeof`. There are two entrances to choose from:',
            de: 'Der Sicherheitsbot scannt deinen Ausweis mit `typeof`. Es gibt zwei Eingänge zur Auswahl:'
        },
        choices: [
            {
                id: 'entry-typescript',
                text: {
                    en: 'Take the productive entrance with TypeScript validation',
                    de: 'Nimm den produktiven Eingang mit TypeScript-Validierung'
                },
                nextStep: 'keynote',
                frameworks: ['jquery', 'is-ten-thousand']
            },
            {
                id: 'entry-backdoor',
                text: {
                    en: 'Sneak in through an undocumented backdoor script',
                    de: 'Schleich dich durch ein undokumentiertes Hintertür-Skript'
                },
                nextStep: 'keynote',
                frameworks: ['fuckit-js', 'penis-js', 'thanos-js']
            },
        ]
    },
    {
        id: 'keynote',
        title: {
            en: 'The Keynote',
            de: 'Die Keynote'
        },
        description: {
            en: 'When you reach the main hall, the talk "Cyber Astrology: Why Full Stack Developers in the NPM Star Sign Will Rule the World" is already running. Morpheus in a black hoodie appears next to you and offers you two npm packages:',
            de: 'Als du die Haupthalle erreichst, läuft bereits der Vortrag "Cyber-Astrologie: Warum Full-Stack-Entwickler im NPM-Sternzeichen die Welt beherrschen werden". Morpheus in einem schwarzen Hoodie erscheint neben dir und bietet dir zwei npm-Pakete an:'
        },
        choices: [
            {
                id: 'keynote-red',
                text: {
                    en: 'red-pill-js: "Shows you how deep the node_modules folder really goes"',
                    de: 'red-pill-js: "Zeigt dir, wie tief der node_modules-Ordner wirklich geht"'
                },
                nextStep: 'hackcenter',
                frameworks: ['thanos-js', 'alternative-true', 'penis-js']
            },
            {
                id: 'keynote-blue',
                text: {
                    en: 'blue-pill-js: "Stay with create-react-app and live happily ever after"',
                    de: 'blue-pill-js: "Bleib bei create-react-app und lebe glücklich bis ans Ende deiner Tage"'
                },
                nextStep: 'hackcenter',
                frameworks: ['jquery', 'comcastify-js']
            },
            {
                id: 'keynote-both',
                text: {
                    en: 'Run npm install * and take both',
                    de: 'Führe npm install * aus und nimm beide'
                },
                nextStep: 'hackcenter',
                frameworks: ['fuckit-js', 'thaw-carrots', 'is-ten-thousand']
            }
        ]
    },
    {
        id: 'hackcenter',
        title: {
            en: 'The Hack Center',
            de: 'Das Hack Center'
        },
        description: {
            en: 'Arriving at the hack center, you see a group desperately debugging Production with `console.log`. Between error stack traces and cold Club-Mate, they ask for help:',
            de: 'Im Hack Center angekommen siehst du eine Gruppe, die verzweifelt die Produktion mit `console.log` debuggt. Zwischen Fehlermeldungen und kaltem Club-Mate bitten sie um Hilfe:'
        },
        choices: [
            {
                id: 'hack-alerts',
                text: {
                    en: 'Suggest replacing all logs with alert popups and pushing directly to main',
                    de: 'Schlage vor, alle Logs durch Alert-Popups zu ersetzen und direkt in den Main-Branch zu pushen'
                },
                nextStep: 'crisis',
                frameworks: ['fuckit-js', 'penis-js', 'thaw-carrots']
            },
            {
                id: 'hack-bugs',
                text: {
                    en: 'Recommend the latest innovation: Bug-Driven-Development (Bugs first, Code later)',
                    de: 'Empfehle die neueste Innovation: Bug-Driven-Development (erst Bugs, dann Code)'
                },
                nextStep: 'crisis',
                frameworks: ['alternative-true', 'is-ten-thousand']
            },
            {
                id: 'hack-mining',
                text: {
                    en: 'Secretly install a Bitcoin mining script in the production environment',
                    de: 'Installiere heimlich ein Bitcoin-Mining-Skript in der Produktionsumgebung'
                },
                nextStep: 'crisis',
                frameworks: ['thanos-js', 'comcastify-js', 'jquery']
            }
        ]
    },
    {
        id: 'crisis',
        title: {
            en: 'The Big Crisis',
            de: 'Die große Krise'
        },
        description: {
            en: 'Sudden panic in the hall: The central build system has crashed! A being lies crying in the corner, surrounded by empty Club-Mate bottles. A Post-it on the wall reveals: "98% of all world conflicts in C38 are caused by missing semicolons". You:',
            de: 'Plötzliche Panik in der Halle: Das zentrale Build-System ist abgestürzt! Ein Wesen liegt weinend in der Ecke, umgeben von leeren Club-Mate-Flaschen. Ein Post-it an der Wand verrät: "98% aller Weltkonflikte in C38 werden durch fehlende Semikolons verursacht". Du:'
        },
        choices: [
            {
                id: 'crisis-delete',
                text: {
                    en: 'Delete node_modules and reinstall',
                    de: 'Lösche node_modules und installiere neu'
                },
                nextStep: 'symposium',
                frameworks: ['jquery', 'is-ten-thousand', 'thaw-carrots']
            },
            {
                id: 'crisis-brain',
                text: {
                    en: 'Write a quick & dirty package manager in Brainfuck',
                    de: 'Schreibe schnell einen unsauberen Paketmanager in Brainfuck'
                },
                nextStep: 'symposium',
                frameworks: ['penis-js', 'alternative-true', 'fuckit-js']
            },
            {
                id: 'crisis-feature',
                text: {
                    en: 'Claim it\'s a feature, not a bug',
                    de: 'Behaupte, es sei ein Feature, kein Bug'
                },
                nextStep: 'symposium',
                frameworks: ['thanos-js', 'comcastify-js']
            }
        ]
    },
    {
        id: 'symposium',
        title: {
            en: 'The Symposium',
            de: 'Das Symposium'
        },
        description: {
            en: 'In a darkened workshop room, a group discusses the question "How many frameworks does a being need?". The discussion gets heated:',
            de: 'In einem abgedunkelten Workshopraum diskutiert eine Gruppe die Frage "Wie viele Frameworks braucht ein Wesen?". Die Diskussion wird hitzig:'
        },
        choices: [
            {
                id: 'symposium-vanilla',
                text: {
                    en: '"None! Vanilla JS forever!"',
                    de: '"Keins! Vanilla JS für immer!"'
                },
                nextStep: 'conspiracy',
                frameworks: ['jquery', 'thanos-js']
            },
            {
                id: 'symposium-new',
                text: {
                    en: '"A new one every day! Framework monogamy is so 2024!"',
                    de: '"Jeden Tag ein neues! Framework-Monogamie ist so 2024!"'
                },
                nextStep: 'conspiracy',
                frameworks: ['is-ten-thousand', 'fuckit-js', 'penis-js']
            },
            {
                id: 'symposium-conspiracy',
                text: {
                    en: '"Frameworks are a conspiracy!"',
                    de: '"Frameworks sind eine Verschwörung!"'
                },
                nextStep: 'conspiracy',
                frameworks: ['alternative-true', 'thaw-carrots', 'comcastify-js']
            }
        ]
    },
    {
        id: 'conspiracy',
        title: {
            en: 'The Conspiracy',
            de: 'Die Verschwörung'
        },
        description: {
            en: 'In the basement, you find mysterious documents: "Project Semicolon - The True Story". They reveal that:',
            de: 'Im Keller findest du mysteriöse Dokumente: "Projekt Semikolon - Die wahre Geschichte". Sie enthüllen, dass:'
        },
        choices: [
            {
                id: 'conspiracy-unicorn',
                text: {
                    en: 'When typing a semicolon, unicorns sneeze glitter',
                    de: 'Beim Tippen eines Semikolons niesen Einhörner Glitzer'
                },
                nextStep: 'demo',
                frameworks: ['is-ten-thousand', 'thaw-carrots', 'penis-js']
            },
            {
                id: 'conspiracy-cats',
                text: {
                    en: 'Every semicolon has a tiny hat that only cats can see',
                    de: 'Jedes Semikolon hat einen winzigen Hut, den nur Katzen sehen können'
                },
                nextStep: 'demo',
                frameworks: ['alternative-true', 'fuckit-js', 'jquery']
            },
            {
                id: 'conspiracy-spaghetti',
                text: {
                    en: 'Semicolons are disguised spaghetti monsters on vacation',
                    de: 'Semikolons sind getarnte Spaghetti-Monster im Urlaub'
                },
                nextStep: 'demo',
                frameworks: ['thanos-js', 'comcastify-js']
            }
        ]
    },
    {
        id: 'demo',
        title: {
            en: 'The Demonstration',
            de: 'Die Demonstration'
        },
        description: {
            en: 'An excited being shows you their new innovation:',
            de: 'Ein aufgeregtes Wesen zeigt dir seine neue Innovation:'
        },
        choices: [
            {
                id: 'demo-thanos',
                text: {
                    en: 'A performance framework that randomly deletes 50% of your code',
                    de: 'Ein Performance-Framework, das zufällig 50% deines Codes löscht'
                },
                nextStep: 'final',
                frameworks: ['thanos-js', 'fuckit-js', 'penis-js']
            },
            {
                id: 'demo-slow',
                text: {
                    en: '"The internet needs deceleration too" for that and more nostalgia',
                    de: '"Auch das Internet braucht Entschleunigung" für mehr Nostalgie'
                },
                nextStep: 'final',
                frameworks: ['comcastify-js', 'jquery', 'alternative-true']
            }
        ]
    },
    {
        id: 'final',
        title: {
            en: 'The Final Decision',
            de: 'Die finale Entscheidung'
        },
        description: {
            en: 'The Congress is coming to an end. Time for the last commit:',
            de: 'Der Kongress neigt sich dem Ende zu. Zeit für den letzten Commit:'
        },
        choices: [
            {
                id: 'final-pullrequest',
                text: {
                    en: 'Forget the entire Congress for a pull request to your favorite open-source repo',
                    de: 'Vergiss den ganzen Kongress für einen Pull Request in deinem Lieblings-Open-Source-Repo'
                },
                nextStep: 'END',
                frameworks: ['thanos-js', 'alternative-true', 'penis-js']
            },
            {
                id: 'final-time',
                text: {
                    en: 'Build a time machine and bring Brendan Eich here',
                    de: 'Baue eine Zeitmaschine und hole Brendan Eich hierher'
                },
                nextStep: 'END',
                frameworks: ['jquery', 'is-ten-thousand', 'fuckit-js']
            },
            {
                id: 'final-wordpress',
                text: {
                    en: 'Just give up and install WordPress',
                    de: 'Gib einfach auf und installiere WordPress'
                },
                nextStep: 'END',
                frameworks: ['comcastify-js', 'thaw-carrots']
            }
        ]
    }
];

export const strings = {
    de: {
        startScreen: {
            title: 'Willkommen bei C-38',
            description: 'Du betrittst den CCC im Paralleluniversum C-38, wo alle Lebensformen gezwungen sind, ' +
                'ausschließlich in JavaScript zu kommunizieren - wirklich die dunkelste aller Zeitlinien. Die Luft ist ' +
                'erfüllt vom Summen endloser Promise-Ketten und den Schreien von undefined-Fehlern.',
            startButton: 'Starte deine Reise'
        },
        resultScreen: {
            description: 'Du bist in der dunkelsten Zeitlinie gelandet.',
            repoButton: 'Zum GitHub Repo'
        }
    },
    en: {
        startScreen: {
            title: 'Welcome to C-38',
            description: 'You enter the CCC in parallel universe C-38, where all life forms are forced ' +
                'to communicate exclusively in JavaScript - truly the darkest of all timelines. The air is ' +
                'filled with the humming of endless Promise chains and the screams of undefined errors.',
            startButton: 'Begin your journey'
        },
        resultScreen: {
            description: 'You have landed in the darkest timeline.',
            repoButton: 'To GitHub Repo'
        }
    }
};
