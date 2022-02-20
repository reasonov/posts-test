<template>
  <div class="posts-list">
    <article class="post" v-for="(item, index) in postsList" :key="index">
      <nuxt-link :to="{name: 'detailsPost', params: { id: item.id }}">
        <p class="post__user">ID пользователя: {{ item.userId }}</p>
        <h2 class="post__title">{{ item.title }}</h2>
        <p class="post__text">{{ item.body }}</p>
        <p class="post__number">Пост номер №{{ item.id }}</p>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import { useStore } from '@nuxtjs/composition-api';

export default {
  name: "post-block",
  props: {
    pageNumber: Number
  },
  setup(props) {
    const store = useStore();

    const postsList = computed(() => {

      const postNumber = props.pageNumber * 10;

      return store.state.postsList.filter((item) => {
        if(item.id > postNumber && item.id <= postNumber + 10) {
          return item;
        }
      })

    });

    store.dispatch('getData');

    return { postsList }
  }
}
</script>

<style scoped>

</style>
