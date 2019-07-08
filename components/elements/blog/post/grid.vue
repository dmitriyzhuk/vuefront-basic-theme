<template>
  <b-container fluid class="p-0">
    <b-row>
      <b-col sm="12" :md="column ? 12 : 12 / gridSize" v-for="(value, index) in posts" :key="index">
        <vf-post-thumb :post="value" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import PostsGrid from "vuefront/lib/components/elements/blog/postsGrid";
export default {
  mixins: [PostsGrid]
};
</script>
