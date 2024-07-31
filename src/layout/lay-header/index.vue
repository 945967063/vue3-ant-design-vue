<template>
  <a-layout-header
    style="padding-inline: 17px"
    :class="configuration.configuration.themeType === 'dark' ? '' : '!bg-[#ffffff]'"
  >
    <div class="flex justify-between">
      <div class="min-w-[200px]">
        <div>显微影像信息系统</div>
      </div>
      <div class="flex-[1] items-center min-w-0">
        <slot name="menu" />
      </div>
      <div>
        <a-tooltip placement="bottom" title="传输列表">
          <a-badge count="5">
            <a-button shape="circle">
              <template #icon>
                <UploadOutlined />
              </template>
            </a-button>
          </a-badge>
        </a-tooltip>

        <a-tooltip
          v-if="configuration.configuration.darkModeVisible"
          class="ml-[32px]"
          placement="bottom"
          title="模式切换"
        >
          <a-button shape="circle" @click="configuration.toggleDarkMode()">
            <template #icon>
              <MehOutlined />
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip
          v-if="configuration.configuration.languageVisible"
          class="ml-[32px]"
          placement="bottom"
          title="语言切换"
        >
          <a-button shape="circle" @click="localeClick">
            <template #icon>
              <TranslationOutlined />
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip class="ml-[32px]" placement="bottom" title="消息列表">
          <a-badge count="2">
            <a-button shape="circle">
              <template #icon>
                <BellOutlined />
              </template>
            </a-button>
          </a-badge>
        </a-tooltip>
        <a-tooltip class="ml-[32px]" placement="bottom" title="设置">
          <a-button shape="circle" @click="configuration.configuration.isDrawerOpen = true">
            <template #icon>
              <SettingOutlined />
            </template>
          </a-button>
        </a-tooltip>
        <a-popover class="ml-[42px]" placement="bottomRight">
          <template #content>
            <a-button type="primary" @click="doLogout">退出登录</a-button>
          </template>
          <a-avatar>
            <template #icon><UserOutlined /></template>
          </a-avatar>
        </a-popover>
      </div>
    </div>
  </a-layout-header>
</template>
<script setup lang="ts">
  import {
    SettingOutlined,
    MehOutlined,
    TranslationOutlined,
    UploadOutlined,
    BellOutlined,
    UserOutlined,
    QuestionCircleOutlined,
  } from '@ant-design/icons-vue';
  import useStore from '@/store';
  import useLocale from '@/hooks/locale';
  import { Modal } from 'ant-design-vue';
  import { resetRouter } from '@/router/guards';
  const router = useRouter();
  const route = useRoute();
  const { configuration, routers } = useStore();
  const { changeLocale, currentLocale } = useLocale();

  const localeClick = () => {
    changeLocale(currentLocale.value === 'en' ? 'cn' : 'en');
  };
  // 退出登录
  const doLogout = () => {
    Modal.confirm({
      title: '提示',
      icon: h(QuestionCircleOutlined),
      content: '您确定要退出登录吗？',
      okText: '确定',
      cancelText: '取消',
      centered: true,
      okType: 'primary',
      onOk() {
        resetRouter();
        routers.resetAllRouter();
        router.replace({
          name: 'Login',
          query: {
            redirect: route.fullPath,
          },
        });
      },
      onCancel() {
        // do nothing
      },
    });
  };
</script>
<style lang="scss" scoped></style>
