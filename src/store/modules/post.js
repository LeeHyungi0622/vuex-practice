// initial state
const state = () => ({
    isLoading: false,
    posts: [],
});

// getters
const getters = {
    postCount(state) {
        return state.posts.length;
    },
};

// mutations
const mutations = {
    CHANGE_LOAD_STATUS(state, status=true) {
        state.isLoading=status;
    },
    SET_POST_DATA(state, posts) {
        state.posts=posts;
    }
}

// actions (비동기 처리 method)
const actions = {
    
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}