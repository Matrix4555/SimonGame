<template>
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
</template>

<script>
export default {
    name: 'DifficultyRadio',
    props: {
        value: { type: String, required: true },
        checked: { type: Boolean, default: false }
    }
};
</script>
