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
    <button @click="$store.commit('increment', { amount: 3 })">증가</button>
    <button @click="$store.commit('decrement', { amount: 3 })">감소</button>
    {{ count }}
    <p>a: {{ countObj.a }}</p>
    <p>b: {{ countObj.b }}</p>
    <button @click="increment('a')">a 숫자 증가</button>
    <button @click="increment('b')">b 숫자 증가</button>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
