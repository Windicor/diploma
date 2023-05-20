export default {
    text: "Команда большого размера?",
    answerYes: {
        text: "Есть ли проблемы с обменом информацией?",
        answerYes: {
            text: "Нужно ли команде визуализировать работу?",
            answerYes: {
                answer: "Критическая цель / Канбан",
                description: "GHBDTN"
            },
            answerNo: {
                text: "Проект сложный?",
                answerYes: {
                    answer: "Шесть сигм",
                    description: "GHBDTN"
                },
                answerNo: {
                    answer: "Бережливый / PRINCE2",
                    description: "GHBDTN"
                }
            }
        },
        answerNo: {
            answer: "Водопад",
            description: "GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN "
        }
    },
    answerNo: {
        text: "Есть ли проблемы с соблюдением сроков?",
        answerYes: {
            text: "Нужно ли разбиение работы на мелкие задачи?",
            answerYes: {
                text: "Есть ли ограничение по ресурсам?",
                answerYes: {
                    answer: "Критическая цепь",
                    description: "GHBDTN"
                },
                answerNo: {
                    answer: "Шесть сигм",
                    description: "GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN "
                }
            },
            answerNo: {
                answer: "Шесть сигм",
                description: "GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN GHBDTN ",
                text: "Часто ли у команды меняются проекты?",
                answerYes: {
                    answer: "Scrum",
                    description: "GHBDTN"
                },
                answerNo: {
                    answer: "XP",
                    description: "GHBDTN"
                }
            }
        },
        answerNo: {
            text: "У команды есть навыки самоуправления?",
            answerYes: {
                text: "Часто ли у команды меняются проекты?",
                answerYes: {
                    answer: "Scrum",
                    description: "GHBDTN"
                },
                answerNo: {
                    answer: "XP",
                    description: "GHBDTN"
                }
            },
            answerNo: {
                answer: "Канбан",
                description: "GHBDTN"
            }
        }
    },
}