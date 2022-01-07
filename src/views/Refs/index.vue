<template>
  <div class="refs">
    <div class="counter">
      <button @click="decrease">-</button>
      <span>{{ count }}</span>
      <button @click="increase">+</button>
    </div>
    <span>{{ `count-a:${countA}` }}</span>
    <br />
    <input type="text" v-model="message" />
    <span>{{ message }}</span>
    <br />
    <label>
      name:
      <input type="text" v-model="userInfo.name" />
    </label>
    <br />
    <label>
      age:
      <input type="number" v-model="userInfo.age" />
    </label>
    <br />
    <span>{{ JSON.stringify(userInfo) }}</span>
  </div>
</template>

<script>
import { ref, reactive, isRef, isReactive } from 'vue'
export default {
  name: 'v3-ref',
  data() {
    return {
      // count: 100,
      countA: 100,
    }
  },
  setup() {
    const count = ref(0)
    const message = ref('')
    // 通过ref将对象转换成响应式时, 它将被reactive函数处理为深层的响应式对象
    // const userInfo = ref({
    //   name: '',
    //   age: '',
    // })
    // 和上面注释的定义相同
    const userInfo = reactive({
      name: '',
      age: '',
    })
    console.log(count, isRef(count), isReactive(count))
    console.log(message)
    console.log(userInfo, isRef(userInfo), isReactive(userInfo))

    // 修改ref对象的值
    count.value++
    console.log(count.value)

    return {
      count,
      message,
      userInfo,
    }
  },
  methods: {
    decrease() {
      this.count--
    },
    increase() {
      this.count++
      console.log(`isRef: ${isRef(this.count)}`)
      console.log(this.count)
    },
  },
}
</script>

<style scoped lang="scss">
.ref {
  padding: 15px 10px;
  .counter {
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    span {
      color: orange;
      margin: 0 10px;
    }
  }
  button {
    background: orange;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>
