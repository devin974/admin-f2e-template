<template>
  <div id="aside">
    <ul>
      <li
        v-for="(navGroup, index) in formattedNav"
        :key="index"
        class="sd-aside__nav-group"
      >
        <ul>
          <li
            v-for="(navItem, navItemIndex) in navGroup"
            :key="navItemIndex"
          >
            <a
              v-if="navItem.href !== undefined"
              :href="navItem.href"
            >
              <i :class="`sd-icon sd-icon-${navItem.iconClass}` " />{{ navItem.title }}
            </a>
            <RouterLink
              v-else
              :to="{
                name: navItem.name,
              }"
            >
              <i :class="`sd-icon sd-icon-${navItem.iconClass}` " />{{ navItem.title }}
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  computed: {
    formattedNav() {
      // 普通专辑列表
      const homeListRouter = {
        name: 'Home',
        title: this.$t('page'),
        iconClass: 'cd',
      };

      const fullNavList = [
        [
          // 专辑管理，全部开启
          homeListRouter,
        ],
      ];

      const filterNavItemByGroup = navGroup => navGroup
        .filter(item => item !== null);

      const list = [];

      for (let i = 0; i < fullNavList.length; i += 1) {
        const formattedNavGroup = filterNavItemByGroup(fullNavList[i]);

        // 仅包含子菜单的才显示
        if (formattedNavGroup.length > 0) {
          list[i] = formattedNavGroup;
        }
      }

      return list;
    },
  },
};
</script>

<style lang="scss" scoped>
#aside {
  box-sizing: border-box;

  ul {
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    &::-webkit-scrollbar-track {
      background-color: #383E4B;
      box-shadow: inset 0 0 1px rgba(0, 0, 0, .7);
    }

    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #22262e;
    }
  }

  li {
    position: relative;
    color: #333;
    cursor: pointer;
  }

  a {
    display: block;
    padding-left: 96px;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    color: #333;
  }

  .sd-aside__nav-group {
    position: relative;
    padding: 8px 0;

    &:first-child {
      padding-top: 0;
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 160px;
      height: 1px;
      background: #EEE;
    }
  }

  .sd-icon {
    position: absolute;
    left: 64px;
    top: 12px;
  }

  .router-link-exact-active,
  .router-link-active {
    background: rgba(0, 64, 255, .08);
    color: #0040FF;
  }
}
</style>
