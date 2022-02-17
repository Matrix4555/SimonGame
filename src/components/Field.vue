<template>
    <div class="game-field">
        <Button
            v-for="(color, index) in colors"
            :key="index"
            :color="color"
            :isLit="litColor === color"
            @step="$emit('step', color)"
        />
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'GameField',
    components: { Button },
    data() {
        return {
            colors: ['red', 'yellow', 'green', 'blue']
        };
    },
    props: {
        litColor: { type: String, required: true },
    }
};
</script>
