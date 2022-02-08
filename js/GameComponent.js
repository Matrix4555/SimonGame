Vue.component('game', {
    data() {
        return {
            gameIsActive: false,
            round: 0,
            sequence: [],
            delay: 1500,
            numberOfStepsTaken: 0,
            buttonsDisabled: false,
            litColor: '',
            colorsToSound: []
        }
    },
    methods: {
        
        makeStep(color) {
            if(this.gameNotActiveOrButtonsDisabled())
                return;
            if(this.isCurrentStepWrong(color)) {
                this.gameOver();
                return;
            }
            this.highlightElement(color, 100);
            this.numberOfStepsTaken++;
            if(this.isSequenceCompleted())
                this.nextRound();
        },

        gameNotActiveOrButtonsDisabled() {
            return !this.gameIsActive || this.buttonsDisabled;
        },

        isCurrentStepWrong(color) {
            return this.sequence[this.numberOfStepsTaken] !== color;
        },

        isSequenceCompleted() {
            return this.numberOfStepsTaken === this.sequence.length;
        },

        highlightElement(color, delay = this.delay) {
            this.litColor = color;
            this.playSoundOfElement(color);
            return new Promise(res => {
                setTimeout(() => {
                    this.litColor = '';
                    const delayBetweenLightings = 300;
                    setTimeout(() => res(), delayBetweenLightings);
                }, delay);
            });
        },

        async highlightAllFromSequence() {
            for(const color of this.sequence)
                await this.highlightElement(color);
        },

        playSoundOfElement(color) {
            this.colorsToSound.push(color);
        },

        nextRound() {
            const delayBetweenRounds = 1000;
            this.buttonsDisabled = true;
            this.round++;
            this.numberOfStepsTaken = 0;
            this.extendSequence();
            setTimeout(async () => {
                await this.highlightAllFromSequence();
                this.colorsToSound = [];
                this.buttonsDisabled = false;
            }, delayBetweenRounds);
        },

        extendSequence() {
            this.sequence.push(this.getNewColor());
        },

        getNewColor() {
            const colors = ['red', 'yellow', 'green', 'blue'];
            const index = Math.floor(Math.random() * colors.length);
            return colors[index];
        },

        startOver() {
            this.gameIsActive = true;
            this.clearData();
            this.nextRound();
        },

        gameOver() {
            alert(`Сделан неверный шаг. Вы закончили на ${this.round} раунде.`);
            this.gameIsActive = false;
            this.clearData();
        },

        clearData() {
            this.round = 0;
            this.sequence = [];
            this.numberOfStepsTaken = 0;
            this.colorsToSound = [];
        },

        changeDifficulty(difficulty) {
            switch(difficulty) {
                case 1:
                    this.delay = 1500;
                    break;
                case 2:
                    this.delay = 1000;
                    break;
                case 3:
                    this.delay = 400;
                    break;
            }
        }

    },
    template: gameTemplate
});
