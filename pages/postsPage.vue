<template>
  <div class="wrapper">

    <post-block :pageNumber="pageNumber" />

  </div>
</template>

<script>
import { useRoute } from '@nuxtjs/composition-api';
import { ref } from '@vue/composition-api';

export default {
  name: 'page',
  layout: 'default',
  setup() {
    const route = useRoute();

    const pageNumber = ref(0)

    pageNumber.value = Number(route.value.params.id);

    return {
      pageNumber
    }
  }
}
</script>

<style scoped>

</style>
