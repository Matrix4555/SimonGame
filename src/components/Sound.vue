<template>
    <div class="game-sound">
        <audio v-for="(color, index) in colors" :key="index" autoplay>
            <source :src="'./audio/' + color + '.mp3'"/>
        </audio>
    </div>
</template>

<script>
export default {
    name: 'GameSound',
    props: {
        colors: { type: Array, required: true }
    }
};
</script>
