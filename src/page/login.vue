<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1></h1>
    </div>
    <group title="">
      <x-input title="" v-model="username" placeholder="请输入帐号"></x-input>
    </group>
    <group title="">
      <x-input title="" type="password" v-model="password" placeholder="请输入密码"></x-input>
    </group>
    <group title="">
    <x-button text="" @click.native="login" type="primary" :disabled='!(username && password)'>登录</x-button>
    </group>
    <group title="">
    <x-button text="" @click.native="register" type="primary" plain >注册</x-button>
    </group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('login', ['token'])
  },
  methods: {
    ...mapMutations('login', ['setToken']),
    login () {
      var self = this
      // let username = this.username
      // let pwd = this.password
      self.$vux.loading.show({
        text: '登录中'
      })
      setTimeout(() => {
        self.$vux.loading.hide()
        self.setToken('true')
        self.$router.push({name: 'index'})
      }, 2000)
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
