<template>
  <div
    class="sd-header"
    :class="{
      'sd-header--select-role': $route.name === 'SelectRole',
    }"
  >
    <a
      :class="headerIconClass"
      href="/settings/copyright"
    />

    <!-- 用户菜单 -->
    <ElPopover
      v-model="showSettingsMenu"
      :visible-arrow="false"
      placement="bottom-end"
      trigger="click"
      popper-class="settings-menu-popover"
    >
      <span
        slot="reference"
        class="sd-user-name"
      >
        {{ $t('header.name') }}
        <i class="sd-icon sd-icon-arrow-down" />
      </span>

      <ul class="sd-header__settings-menu">
        <li>
          <a
            href="#"
          >
            <i class="sd-png-icon sd-png-icon-usercenter" />
            {{ $t('header.userCenter') }}
          </a>
        </li>
        <li>
          <a
            href="#"
          >
            <i class="sd-png-icon sd-png-icon-modify-password" />
            {{ $t('header.modifyPassword') }}
          </a>
        </li>
        <li>
          <a href="#">
            <i class="sd-png-icon sd-png-icon-logout" />
            {{ $t('header.logout') }}
          </a>
        </li>
      </ul>
    </ElPopover>

    <!-- 语言切换 -->
    <ElPopover
      v-model="showLocaleMenu"
      :visible-arrow="false"
      placement="bottom-end"
      trigger="hover"
    >
      <span
        slot="reference"
        class="sd-toggle-language"
      >
        {{ localeText }}
        <i class="sd-icon sd-icon-arrow-down" />
      </span>

      <ul class="sd-header__language-menu">
        <li @click="changeLocale('zh_CN')">
          简体中文
        </li>
        <li @click="changeLocale('zh_TW')">
          繁體中文
        </li>
        <li @click="changeLocale('en_US')">
          English
        </li>
      </ul>
    </ElPopover>

    <RouterLink
      v-if="false"
      class="sd-header__message"
      :to="{
        name: 'Message',
      }"
    >
      <i class="sd-icon sd-icon-message" />
    </RouterLink>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TheHeader',
  filters: {
    formatMaxCount(count) {
      if (count > 999) {
        return '999+';
      }

      return `${count}`;
    },
  },
  data() {
    return {
      showSettingsMenu: false,
      showLocaleMenu: false,
    };
  },
  computed: {
    ...mapState({
      locale: state => state.config.locale,
    }),
    localeText() {
      const localeObject = {
        zh_CN: '简体中文',
        zh_TW: '繁體中文',
        en_US: 'English',
      };

      return localeObject[this.locale];
    },
    headerIconClass() {
      return 'sd-logo';
    },
  },
  methods: {
    changeLocale(locale) {
      this.$store.commit('setLocale', locale);

      this.showLocaleMenu = false;
    },
  },
};
</script>

<style lang="scss">
.sd-header {
  position: relative;
  padding: 24px;
  height: 24px;
  line-height: 24px;
  background: #FFF;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, .16);
  z-index: 2;
}

.sd-logo {
  position: absolute;
  left: 24px;
  top: 21px;
  width: 120px;
  height: 30px;
  background-image: url(https://kanjian-static.oss-cn-hongkong.aliyuncs.com/assets/sd-logo-cn.png);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: auto 30px;

  &.sd-logo--en {
    background-image: url(https://kanjian-static.oss-cn-hongkong.aliyuncs.com/assets/sd-logo-en.png);
  }
}

.sd-passport {
  float: right;
  margin-right: 20px;
  width: 112px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #FFF;
  background-color: rgba(0, 185, 242, .34);
  border-radius: 4px;

  span {
    cursor: pointer;
  }
}

.sd-user-name {
  position: relative;
  float: right;
  padding-right: 12px;
  color: #333;
  cursor: pointer;

  .sd-icon-arrow-down {
    position: absolute;
    right: -12px;
    top: 0;
    color: #333;
  }

  &:hover {
    color: $blue;
  }
}

.sd-header__settings-menu,
.sd-header__language-menu {
  li {
    color: #333;
    cursor: pointer;

    &:hover {
      color: $blue;
    }
  }

  a:hover {
    color: $blue;
  }
}

.sd-header__settings-menu {
  width: 160px;
  text-align: left;

  a {
    display: block;
    padding: 12px 16px;
    line-height: 24px;

    &:hover {
      color: $blue;
    }
  }

  .sd-png-icon {
    float: left;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    background: url(~@/assets/img/icon-sprite.png) no-repeat 0 0;
    background-size: auto 48px;
  }

  li:nth-child(1) {
    a:hover {
      .sd-png-icon {
        background-position: 0 -24px;
      }
    }
  }

  li:nth-child(2) {
    .sd-png-icon {
      background-position: -24px 0;
    }

    a:hover {
      .sd-png-icon {
        background-position: -24px -24px;
      }
    }
  }

  li:nth-child(3) {
    margin-top: 4px;
    box-shadow: inset 0 1px 0 0 #EEE;

    .sd-png-icon {
      background-position: -48px 0;
    }

    a:hover {
      color: #FF6E69;
      .sd-png-icon {
        background-position: -48px -24px;
      }
    }
  }
}

.sd-header__language-menu {
  margin: -8px 0; // 此浮层没有上下 8px 留白

  li {
    padding: 0 16px;
  }
}

.sd-toggle-language {
  position: relative;
  float: right;
  margin: 0 32px;
  padding-right: 12px;
  color: #333;
  cursor: pointer;

  .sd-icon-arrow-down {
    position: absolute;
    right: -12px;
    top: 0;
    color: #333;
  }

  &:hover {
    color: $blue;
  }
}

.sd-header__language-menu {
  li {
    line-height: 40px;
    cursor: pointer;
  }
}

.sd-header__message {
  float: right;
  width: 24px;
  height: 24px;

  .sd-icon-message {
    color: #333;
  }
}

.sd-header--select-role {
  background: none;
  box-shadow: none;

  .sd-logo {
    background-image: url(~@/assets/img/logo--white.png);
  }

  .sd-toggle-language,
  .sd-user-name {
    color: #FAFAFA;
  }

  .sd-icon-arrow-down {
    color: #FAFAFA;
  }

  .sd-icon-message {
    color: #FAFAFA;
  }
}

// 覆写，通用组件 popover 和页头样式不同
.el-popover.settings-menu-popover {
  padding: 4px 0;
  border-radius: 6px;
}

.el-popper[x-placement^="bottom"].settings-menu-popover {
  margin-top: 16px;
}
</style>
