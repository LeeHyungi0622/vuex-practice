// initial state
const state = () => ({
    count: 0
});

// getters
const getters = {
    countNumber(state) {
        return state.count.length;
    },
};

// mutations
const mutations = {
    INCREMENT(state, payload) {
        state.count += payload.amount;
    },
    DECREMENT(state, payload) {
        state.count -= payload.amount;
    }
} 

// actions (비동기 처리 method)
const actions = {
    // 내부에서 비동기 처리를 통해 반환된 결과값을 상태값으로 SET하기 위해서는 아래와 같이 METHOD의 인자로 commit을 받아 mutation을 호출해서 처리해줘야 한다.
    /**
     * setCounter({ commit }) {
     *  commit("INCREMENT", { amount: n })
     * }
     */
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}