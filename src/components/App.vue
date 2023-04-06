<template>
    <main>
        <header class="header">
            <img src="../sourse/logo.svg" class="header-logo" alt="logo" />
            <h2>Мои любимые фильмы</h2>
        </header>
        <div class="tabs">
            <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]">
                Любимые фильмы
            </button>
            <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]">
                Поиск
            </button>
        </div>
        <div class="movies" v-if="movieStore.activeTab === 1">
            <h3>Все фильмы</h3>
            <Movie
                v-for="movie in movieStore.movies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
        <div v-else class="search">Поиск</div>
    </main>
</template>
<script lang="ts" setup>
import { useMovieStore } from '../stores/MuvieStore';
import Movie from './Movie.vue';

const movieStore = useMovieStore();
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.header-logo {
    max-width: 50px;
    margin-right: 10px;
}
.btn {
    border: none;
    width: fit-content;
    height: 40px;
    font-size: 14px;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
}
.btn:hover {
    opacity: 0.7;
}
.btn_green {
    background: #37df5c;
}
.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
</style>
