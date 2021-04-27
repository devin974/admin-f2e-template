<template>
  <div id="app">
    <TheHeader />

    <div
      class="sd-layout"
    >
      <div
        class="sd-layout__sidebar"
      >
        <TheSidebar />
      </div>

      <div class="sd-layout__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from '@/components/TheHeader';
import TheSidebar from '@/components/TheSidebar';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
  },
  computed: {
    ...mapState({
      locale: state => state.config.locale,
    }),
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  created() {
    this.$i18n.locale = this.locale;
  },
};
</script>
<style lang="scss">
@import "~@/assets/css/core";

.sd-layout {
  display: flex;
  justify-content: center;
  padding: 40px 0 64px;

  &__sidebar {
    width: 256px;
  }

  &__content {
    padding: 0 64px;
    // flex: 1;
    flex: auto;
    min-width: 0;
    // overflow: hidden; // flex 宽度自适应
  }

  &--wide  &__sidebar {
    display: none;
  }

  &--wide  &__content {
    max-width: 1600px;
  }
}
</style>
