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
    <br />
    <span>{{ JSON.stringify(obj) }}</span>
    <br />
    <span>{{ JSON.stringify(obj2) }}</span>
    <br />
    <span>{{ JSON.stringify(obj3) }}</span>
    <button @click="changeObj3Name">改变obj3的name</button>
  </div>
</template>

<script>
import { ref, isRef, isReactive, unref, toRef, reactive, toRefs, shallowRef, triggerRef } from 'vue'
export default {
  name: 'v3-ref',
  data() {
    return {
      // count: 100,
      countA: 100,
    }
  },
  setup() {
    // 通过ref将基础值转换成响应式对象
    const count = ref(0)
    // 通过isRef来判断某个对象是否为ref对象
    console.log(isRef(count))
    const message = ref('')
    // 通过ref将对象转换成响应式时, 它将被reactive函数处理为深层的响应式对象
    const userInfo = ref({
      name: 'jiangxiaoyu',
      age: 10,
    })
    // 和上面注释的定义相同
    // const userInfo = reactive({
    //   name: '',
    //   age: '',
    // })
    console.log(count, isRef(count), isReactive(count))
    console.log(userInfo, isRef(userInfo), isReactive(userInfo))
    // ref对象有个一个value, 可以通过value访问ref对象内部包裹的值. 修改ref对象的值
    count.value++
    console.log(count.value)

    // unref: 该函数接收一个参数, 如果参数是ref对象, 则返回ref的value, 如果不是, 则返回该参数
    let unrefValue = unref(count)
    console.log(unrefValue)
    console.log(isRef(unrefValue))
    unrefValue = unref(userInfo)
    console.log(unrefValue)
    console.log(isRef(unrefValue))
    // toRef: 将响应式对象的某个属性转换成ref, 然后ref可以被传递, 它会保持对其源property的响应式连接.
    const obj = reactive({
      name: '张三',
      age: 10,
    })
    const ageRef = toRef(obj, 'age')
    ageRef.value++
    console.log(obj)
    obj.age++
    console.log(obj)

    const obj2 = reactive({
      name: '李四',
      age: 12,
    })
    // toRefs: 将响应式对象转换为普通对象, 其中结果对象的每个property都是指向原始对象相应property的ref, 该ref会保持对其源property的响应式连接
    const obj2Refs = toRefs(obj2)
    console.log(obj2Refs)
    obj2Refs.name.value = '王五'
    obj2Refs.age.value++

    const obj3 = shallowRef({})
    obj3.value = {
      name: '赵六',
      age: 11,
    }
    console.log(obj3)
    console.log(isReactive(obj3))
    console.log(isReactive(obj3.value))
    // obj3.value.age++
    return {
      count,
      message,
      userInfo,
      obj,
      obj2,
      obj3,
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
    changeObj3Name() {
      this.obj3.name = '朱八'
    },
  },
}
</script>

<style scoped lang="scss">
.refs {
  padding: 15px 10px;
  button {
    background: orange;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
  }
  .counter {
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    span {
      color: orange;
      margin: 0 10px;
    }
  }
}
</style>
