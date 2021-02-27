<template>
  <a-form
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
          type="primary"
          html-type="submit"
          :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  <a-button type="primary" @click="info">主页</a-button>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const router = useRouter()
    const formState = reactive({
      user: '',
      password: '',
    });
    const handleFinish = values => {
      console.log('handleFinish')
      if(formState.user == 'asd' && formState.password =='123'){
        console.log('登录成功')
        router.push('/')
      }else {
        console.log('登录失败')
        message.error('用户名密码不正确');
      }
      console.log(values, formState);
    };
    const handleFinishFailed = errors => {
      console.log('handleFinishFailed')
      console.log(errors);
    };
    const info = () => {
      router.push('/')
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
      info
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>