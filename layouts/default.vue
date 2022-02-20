<template>
  <div class="wrapper">
    <Nuxt />
    <ul class="pages-list" v-show="!isDetailsPage">
      <li class="pages__item" v-for="index in numberOfPages" :key="index">
        <nuxt-link
          class="pages__link"
          active-class="link--active"
          :to="{name: 'postsPage', params: {id: index, postsList: postsList}}"
        >
          {{ index }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, watch } from '@vue/composition-api';
import { useStore, useRoute } from '@nuxtjs/composition-api';

export default {
  name: 'default',
  setup() {
    const store = useStore();

    const postsList = computed(() => {
      return store.state.postsList;
    })

    const numberOfPages = computed(() => {
      if(postsList.value.length > 0) {
        return (postsList.value.length / 10 - 1);
      }
      return 0;
    })

    const route = useRoute();

    const isDetailsPage = ref(false)

    watch(route, () => {
      if(route.value.meta.isDetails) {
        isDetailsPage.value = true;
      } else {
        isDetailsPage.value = false;
      }
    }, {deep: true})

    return {
      numberOfPages,
      postsList,
      isDetailsPage
    }
  }
}
</script>

<style src="../styles/style.css"></style>
