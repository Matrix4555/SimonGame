const gameTemplate = `
    <div class="game">
        <h1 class="game-header">Саймон</h1>
        <div class="game-round_and_start">
            <game-start_btn @start="startOver" :gameIsActive="gameIsActive" :isDisabled="buttonsDisabled"></game-start_btn>
            <game-round :counter="round"></game-round>
        </div>
        <game-field :litColor="litColor" @step="makeStep"></game-field>
        <game-difficulty @difficulty="changeDifficulty"></game-difficulty>
        <game-sound :colors="colorsToSound"></game-sound>
    </div>
`;

const fieldTemplate = `
    <div class="game-field">
        <game-button
            v-for="(color, index) in colors"
            :key="index"
            :color="color"
            :isLit="litColor === color"
            @step="$emit('step', color)"
        ></game-button>
    </div>
`;

const buttonTemplate = `
    <button class="game-button" :class="isLit ? 'lit' : ''" :id="color" @click="$emit('step')"></button>
`;

const roundTemplate = `
    <h2 class="game-round">Раунд: {{counter}}</h2>
`;

const startBtnTemplate = `
    <button class="game-start_btn" :disabled="isDisabled" @click="$emit('start')">
        {{gameIsActive ? 'Начать заново' : 'Старт'}}
    </button>
`;

const difficultyTemplate = `
    <div class="game-difficulty">
        <h2>Уровень сложности:</h2>
        <div class="game-difficulty-radios">
            <difficulty-radio
                v-for="(difficulty, index) in difficulties"
                :key="index"
                :value="difficulty"
                :checked="index === 0 ? true : false"
                @difficulty="$emit('difficulty', index + 1)"
            >
                {{labels[index]}}
            </difficulty-radio>
        </div>
    </div>
`;

const radioTemplate = `
    <div>
        <input type="radio"
            name="difficulty"
            :id="value"
            :value="value"
            :checked="checked"
            @click="$emit('difficulty')">
        <label :for="value">
            <slot></slot>
        </label>
    </div>
`;

const soundTemplate = `
    <div class="game-sound">
        <audio v-for="(color, index) in colors" :key="index" autoplay>
            <source :src="'./audio/' + color + '.mp3'"/>
        </audio>
    </div>
`;
