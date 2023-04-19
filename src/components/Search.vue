<template>
    <form @submit.prevent="">
        <input
            type="text"
            class="search-input"
            placeholder="Поиск фильмов"
            v-model="searchMovie"
        />
    </form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const searchMovie = ref('');
</script>
<style lang="scss" scoped>
.search-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
}
</style>
