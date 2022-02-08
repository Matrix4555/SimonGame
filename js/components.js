Vue.component('game-field', {
    data() {
        return {
            colors: ['red', 'yellow', 'green', 'blue']
        }
    },
    props: {
        litColor: { type: String, required: true },
    },
    template: fieldTemplate
});

Vue.component('game-button', {
    props: {
        color: { type: String, required: true },
        isLit: { type: Boolean, required: true }
    },
    template: buttonTemplate
});

Vue.component('game-round', {
    props: {
        counter: { type: Number, required: true }
    },
    template: roundTemplate
});

Vue.component('game-start_btn', {
    props: {
        gameIsActive: { type: Boolean, required: true },
        isDisabled: { type: Boolean, required: true }
    },
    template: startBtnTemplate
});

Vue.component('game-difficulty', {
    data() {
        return {
            difficulties: ['easy', 'medium', 'hard'],
            labels: ['Легкий', 'Средний', 'Сложный'],
        }
    },
    template: difficultyTemplate
});

Vue.component('difficulty-radio', {
    props: {
        value: { type: String, required: true },
        checked: { type: Boolean, default: false }
    },
    template: radioTemplate
});

Vue.component('game-sound', {
    props: {
        colors: { type: Array, required: true }
    },
    template: soundTemplate,
});
