<template>
  <div>
    <vf-template-header :logo="logo" />
    <b-container>
      <div class="main-content">
        <vf-position name="contentTop" class="py-3" />
        <b-row>
          <b-col v-if="checkModules('columnLeft')" sm="3" class="d-none d-md-block">
            <vf-position name="columnLeft" />
          </b-col>
          <b-col :sm="contentWidth">
            <vf-position name="columnCenterTop" />
            <slot></slot>
            <vf-position name="columnCenterBottom" />
          </b-col>
          <b-col v-if="checkModules('columnRight')" sm="3" class="d-none d-md-block">
            <vf-position name="columnRight" />
          </b-col>
        </b-row>
        <vf-position name="contentBottom" class="py-3" />
      </div>
    </b-container>
    <vf-template-footer :logo="footerLogo" />
  </div>
</template>
<script>
import Layout from "vuefront/lib/components/templates/common/layout";
export default {
  mixins: [Layout]
};
</script>