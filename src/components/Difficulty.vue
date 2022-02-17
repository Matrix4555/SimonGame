<template>
    <div class="game-difficulty">
        <h2>Уровень сложности:</h2>
        <div class="game-difficulty-radios">
            <DifficultyRadio
                v-for="(difficulty, index) in difficulties"
                :key="index"
                :value="difficulty"
                :checked="index === 0 ? true : false"
                @difficulty="$emit('difficulty', index + 1)"
            >
                {{labels[index]}}
            </DifficultyRadio>
        </div>
    </div>
</template>

<script>
import DifficultyRadio from './DifficultyRadio.vue';

export default {
    name: 'GameDifficulty',
    components: { DifficultyRadio },
    data() {
        return {
            difficulties: ['easy', 'medium', 'hard'],
            labels: ['Легкий', 'Средний', 'Сложный'],
        };
    }
};
</script>
