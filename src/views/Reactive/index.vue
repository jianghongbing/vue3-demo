<template>
  <div class="reactive">
    <div class="counter">
      <button @click="decrease">-</button>
      <span>{{ state.count }}</span>
      <button @click="increase">+</button>
    </div>
    <br />
    <!-- <input type="text" v-model="message" />
    <span>{{ message }}</span> -->
    <br />
    <label>
      name:
      <input type="text" v-model="state.userInfo.name" />
      <button @click="state.userInfo.name = ''">clear name</button>
    </label>
    <br />
    <label>
      age:
      <input type="number" v-model="state.userInfo.age" />
      <button @click="state.userInfo.age = 0">clear age</button>
    </label>
    <br />
    <span>{{ JSON.stringify(state.userInfo) }}</span>
    <br />
    <label>
      city:
      <input type="text" v-model="state.userInfo.addressInfo.city" />
    </label>
    <br />
    <label>
      area:
      <input type="text" v-model="state.userInfo.addressInfo.area" />
    </label>
    <button @click="clearAddressInfo">clear address info</button>
    <br />
    <span>{{ JSON.stringify(state.userInfo.addressInfo) }}</span>
    <hr />
    <span>readOnlyState:{{ JSON.stringify(readOnlyState) }}</span>
    <br />
    <button @click="changeReadonlyState">change readonly state</button>
    <hr />
    <button @click="toRaw">toRaw</button>
    <br />
    <span>{{ JSON.stringify(point) }}</span>
    <button @click="changePoint">change point</button>
    <br />
    <span>{{ JSON.stringify(student) }}</span>
    <button @click="changeStudentInfo">change student info</button>
    <button @click="changeStudentFatherInfo">change student father info</button>
    <br />
    <span>{{ JSON.stringify(studentB) }}</span>
    <button @click="changeStudentBInfo">change studentB info</button>
    <button @click="changeStudentBFatherInfo">change studentB father info</button>
  </div>
</template>

<script>
import {
  reactive,
  isReactive,
  readonly,
  isReadonly,
  toRaw,
  markRaw,
  shallowReactive,
  shallowReadonly,
} from 'vue'
export default {
  name: 'v3-reative',
  data() {
    return {
      countA: 100,
    }
  },
  setup() {
    let state = {
      count: 0,
      userInfo: {
        name: '',
        age: 0,
        addressInfo: {
          city: '武汉',
          area: '洪山区',
        },
      },
    }
    console.log(`isReactive: ${isReactive(state)}`)
    state = reactive(state) // 将state转换成一个响应式对象
    console.log(`isReactive: ${isReactive(state)}`)

    const readOnlyState = readonly({
      user: 'root',
      id: '001',
      onwer: {
        name: 'boss1',
        sex: 'male',
      },
    })

    const markRawInfo = markRaw({
      x: 100,
      y: 100,
    })
    const point = reactive(markRawInfo)
    console.log(`point is a reactive obj: ${isReactive(point)}`)

    const student = shallowReactive({
      name: '小明',
      father: {
        name: '老王',
        age: 40,
      },
    })
    console.log(`student is a reactive obj: ${isReactive(student)}`)

    const studentB = shallowReadonly({
      name: '小红',
      father: {
        name: '老吴',
        age: 41,
      },
    })
    console.log(`studentB is a reactive obj: ${isReactive(studentB)}`)

    const origin = {
      name: '小李',
      age: 15,
      father: {
        name: '老李',
        age: 45
      }
    }

    const studentC = reactive(origin)
    studentC.age = 16
    console.log(origin, studentC)
    return {
      state,
      readOnlyState,
      point,
      student,
      studentB,
      studentC,
    }
  },
  methods: {
    decrease() {
      this.state.count--
    },
    increase() {
      this.state.count++
      console.log(`isReactive: ${isReactive(this.state)}`)
      console.log(this.state)
      const { count } = this.state
      console.log(count)
    },
    clearAddressInfo() {
      this.state.userInfo.addressInfo = {}
    },
    changeReadonlyState() {
      console.log(this.readOnlyState)
      // readonly产生的响应式的对象属性不能修改, 控制会有警告信息
      this.readOnlyState.id = '002'
      this.readOnlyState.user = 'admin'
      this.readOnlyState.onwer.name = 'boss2'
      this.readOnlyState.onwer = {}
      // this.readOnlyState = {}
      console.log(isReadonly(this.readOnlyState))
    },
    toRaw() {
      const stateRaw = toRaw(this.state)
      alert(`stateRaw:${JSON.stringify(stateRaw)}, isReactive:${isReactive(stateRaw)}`)
    },
    changePoint() {
      // 因为point不是响应式的数据, 因此point的值修改后, 不能改变页面上所展示的数据. 必须通过强制刷新来将改变的数据体现到元素上.
      this.point.x++
      this.point.y++
      console.log(this.point)
      // this.$forceUpdate()
    },
    changeStudentInfo() {
      // shallowReactive返回的对象, 修改直接属性的值, 会触发响应式系统, 修改的数据会立即体现到元素上
      this.student.name = '大明'
    },
    changeStudentFatherInfo() {
      // shallowReactive响应式对象, 修改更深层次的属性的值, 不会触发响应式系统, 进而页面上的数据不会得到更新.
      this.student.father.name = '老老王'
      this.student.father.age++
    },
    changeStudentBInfo() {
      // shadllowReadonly返回的对象, 不能修改直接属性的值, 控制台会有警告输出
      this.studentB.name = '大红'
    },
    changeStudentBFatherInfo() {
      // shadllowReadonly返回的对象, 可以修改非直接属性的值, 但该对象不是响应式的, 因此也不会立即反映到元素上.
      this.studentB.father.name = '老老吴'
      this.studentB.father.age = 42
      console.log(this.studentB)
    },
  },
}
</script>

<style scoped lang="scss">
.reactive {
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
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>
