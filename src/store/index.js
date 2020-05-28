import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {},
    courses: [],
    paperWorks: [],
  },
  mutations: {
    CREATE_IDEAS(state, payload) {
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas }; //clone
    },
    SAVE_IDEAS_ORDERING(state, payload) {
      state.ideas = { ...payload }; //clone
    },
    SAVE_COURSES_ORDERING(state, payload) {
      state.courses = [...payload];
    },
    SAVE_PAPERWORKS_ORDERING(state, payload) {
      state.paperWorks = [...payload];
    },
  },
  actions: {
    createIdea(context, payload) {
      context.commit("CREATE_IDEAS", payload);
    },
    saveIdeasOrdering({ commit }, payload) {
      const ideas = {};
      payload.map((idea) => {
        ideas[idea.id] = idea;
      });
      commit("SAVE_IDEAS_ORDERING", ideas);
    },
    saveCoursesOrdering({ commit }, payload) {
      commit("SAVE_COURSES_ORDERING", payload);
    },
    savePaperWorksOrdering({ commit }, payload) {
      commit("SAVE_PAPERWORKS_ORDERING", payload);
    },
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map((key) => {
        const idea = state.ideas[key];
        idea.id = key;
        return idea;
      });
      return allIdeas;
    },
    allCourses (state){ 
      return state.courses;
    },
    allPaperWorks (state){ 
      return state.paperWorks;
    }
  },
});
