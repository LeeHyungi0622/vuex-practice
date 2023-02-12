<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <h4>
      Mutations에 등록된 변이 핸들러 method를 commit method를 통해 호출한다.
    </h4>
    store를 Module별로 분리를 한 후에 분리된 module에서 mutations으로 정의된 method에 접근하기 위해서는<br/>
    module_name/mutation_method_name으로 commit을 통해 호출해야한다.(namespace 적용했기 때문에)<br/>
    <button @click="$store.commit('counter/INCREMENT', { amount: 3 })">증가</button>
    <button @click="$store.commit('counter/DECREMENT', { amount: 3 })">감소</button>
    {{ count }}
    <p>a: {{ countObj.a }}</p>
    <p>b: {{ countObj.b }}</p>
    <button @click="increment('a')">a 숫자 증가</button>
    <button @click="increment('b')">b 숫자 증가</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers("counter");

export default {
  name: "App",
  data() {
    return {
      countObj: {
        a: 0,
      },
    };
  },
  mounted() {
    // this.countObj["b"] = 0;
    // 객체에 동적으로 반응성 속성을 추가, 컴포넌트가 제대로 업데이트
    this.$set(this.countObj, "b", 0);
  },
  methods: {
    increment(type) {
      this.countObj[type]++;
    },
  },
  computed: {
    count() {
      // count 상태값이 변경되면, 자동으로 계산된 속성이 변경되고, 관련 DOM이 업데이트
      return this.$store.state.count;
    },
    ...mapState(["count"]),
  },
};
</script>
