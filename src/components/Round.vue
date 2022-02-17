<template>
    <h2 class="game-round">Раунд: {{counter}}</h2>
</template>

<script>
export default {
    name: 'GameRound',
    props: {
        counter: { type: Number, required: true }
    }
};
</script>
