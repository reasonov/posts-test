<template>
  <div class="post-info">
    <p class="post-info__id">Пост номер № {{ postNumber }}</p>
    <h2 class="post-info__author">ID автора поста: {{ postsList[postNumber].userId }}</h2>
    <p class="post-info__title">Заголовок: {{ postsList[postNumber].title }}</p>
    <p class="post-info__text"> <b>Текст:</b> {{ postsList[postNumber].body }}</p>

    <nuxt-link class="post-info__back" to="/">Вернуться к постам</nuxt-link>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
import { useStore, useRoute } from "@nuxtjs/composition-api";

export default {
  name: "post-details",
  setup() {
    const store = useStore();

    const postsList = computed(() => {
      return store.state.postsList;
    })

    const route = useRoute();

    const postNumber = computed(() => {
      return route.value.params.id;
    })

    return { postsList, postNumber }
  }
}
</script>

<style scoped>

  .post-info {
    max-width: 500px;
    margin: 0 auto;
  }

  .post-info__id {
    margin-bottom: 50px;

    font-size: 20px;
  }

  .post-info__author {
    margin-bottom: 50px;

    font-size: 25px;
  }

  .post-info__title {
    margin-bottom: 60px;

    font-size: 30px;
  }

  .post-info__text {
    font-size: 22px;
    line-height: 35px;
  }

  .post-info__back {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 30px;
    margin: 40px auto;

    border: 1px solid #000;
  }
</style>
