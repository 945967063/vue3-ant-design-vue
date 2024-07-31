<template>
  <div class="w-full h-[calc(100vh-50px)] flex-c">
    <a-form ref="formRef" class="w-[368px] z-[2]" layout="horizontal" :model="loginFormModel">
      <div class="mb-[45px] select-none">
        <div class="text-[33px] font-bold text-center">显微影像信息系统</div>
        <div class="text-[14px] text-center">Microscopic Image Information System</div>
      </div>
      <a-form-item name="username" :rules="[{ required: true, message: '请输入账户名' }]">
        <a-input v-model:value="loginFormModel.username" size="large" placeholder="账户">
          <template #prefix><UserOutlined class="text-theme-color" /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
        <a-input-password
          v-model:value="loginFormModel.password"
          size="large"
          type="password"
          placeholder="密码"
          autocomplete="new-password"
        >
          <template #prefix><LockOutlined class="text-theme-color" /></template>
        </a-input-password>
      </a-form-item>
      <a-form-item class="mt-[42px]">
        <a-button type="primary" size="large" :loading="loading" block @click="handleSubmit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
    <div class="fixed bottom-[25px] z-[2] select-none">Copyright© 2024 深圳市生强科技有限公司</div>
    <div
      class="fixed top-0 left-0 z-0 w-full h-full pointer-events-none bg-[url('@/assets/svg/bg.svg')] bg-center bg-cover bg-no-repeat"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { FormInstance, message } from 'ant-design-vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  const router = useRouter();
  const formRef = ref<FormInstance>();
  const loading = ref(false);
  const loginFormModel = reactive({
    username: '',
    password: '',
  });
  const handleSubmit = async () => {
    formRef.value
      ?.validateFields()
      .then(() => {
        message.loading('登录中...', 0);
        loading.value = true;
        router.replace('/home');
        loading.value = false;
        message.destroy();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  //点击回车键登录
  const keyDown = (e: { keyCode: number }) => {
    if (loading.value) return;
    if (e.keyCode == 13) {
      handleSubmit();
    }
  };
  onMounted(() => {
    //绑定监听事件
    window.addEventListener('keydown', keyDown);
  });
  onMounted(() => {
    //绑定监听事件
    window.addEventListener('keydown', keyDown);
  });
</script>

<style lang="scss" scoped></style>
