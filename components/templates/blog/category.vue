<template>
  <section class="blog-category">
    <template v-if="loaded">
      <vf-category-blog :category="category" class="mb-5" />
      <vf-posts-grid :posts="posts.content" :grid-size="4" />
      <vf-pagination :page="page" :totalPages="posts.totalPages" @input="handleChangePage" />
    </template>
    <template v-else>
      <vf-category-blog-loader class="mb-5" />
      <vf-posts-grid-loader class="mb-4" :grid-size="1" />
    </template>
  </section>
</template>
<script>
import Category from "vuefront/lib/components/templates/blog/category";
export default {
  mixins: [Category]
};
</script>
