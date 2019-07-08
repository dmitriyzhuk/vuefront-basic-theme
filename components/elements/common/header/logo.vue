<template>
  <div>
    <b-link to="/">
      <amp-img
        v-if="$vuefront.isAMP"
        :src="logo"
        width="180"
        height="40"
        class="nav-section__logo"
      />
      <img v-else :src="logo" alt class="nav-section__logo" />
    </b-link>
    <p class="slogan">Another VueFront Theme</p>
  </div>
</template>
<script>
import Logo from "vuefront/lib/components/elements/common/header/logo";
export default {
  mixins: [Logo]
};
</script>
