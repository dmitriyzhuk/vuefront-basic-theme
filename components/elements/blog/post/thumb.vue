<template>
  <b-card class="card-post" no-body>
    <b-link :to="url" class="card-post_image_wrapper">
      <amp-img
        v-if="$vuefront.isAMP"
        :src="mainImage"
        width="246"
        height="153"
        class="card-post__image"
      />
      <b-card-img-lazy
        v-else
        fluid
        :src="mainImage"
        :blank-src="mainImagelazy"
        class="card-post__image"
      />
    </b-link>

    <b-card-body class="pt-0">
      <h3 class="h6 mb-0 card-post__title">{{ post.title }}</h3>
      <div v-html="post.shortDescription" class="card-post__description text-sm mb-3"></div>
      <b-link class="btn btn-primary float-right" :to="url">Read more</b-link>
    </b-card-body>
  </b-card>
</template>
<script>
import PostThumb from "vuefront/lib/components/elements/blog/postThumb";
export default {
  mixins: [PostThumb],
  props: ["width"]
};
</script>