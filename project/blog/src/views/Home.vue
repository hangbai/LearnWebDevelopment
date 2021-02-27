<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SignIn></SignIn>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignIn from "@/views/User/SignIn";

export default {
  name: 'Home',
  components: {
    HelloWorld,SignIn
  }
}
</script>
