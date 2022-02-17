<template>
    <button class="game-button" :class="isLit ? 'lit' : ''" :id="color" @click="$emit('step')"></button>
</template>

<script>
export default {
    name: 'GameButton',
    props: {
        color: { type: String, required: true },
        isLit: { type: Boolean, required: true }
    }
};
</script>
