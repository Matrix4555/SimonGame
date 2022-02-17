<template>
    <button class="game-start_btn" :disabled="isDisabled" @click="$emit('start')">
        {{gameIsActive ? 'Начать заново' : 'Старт'}}
    </button>
</template>

<script>
export default {
    name: 'ButtonStart',
    props: {
        gameIsActive: { type: Boolean, required: true },
        isDisabled: { type: Boolean, required: true }
    }
};
</script>
