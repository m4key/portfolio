export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    REMOVE_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(category => category.id !== removedCategoryId)
    },
    EDIT_CATEGORY(state, editedCategory) {
      state.categories = state.categories.map(category => {
        return category.id === editedCategory.id ? editedCategory : category;
      })
    },
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories/158");
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategory({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId);
        return response;
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    },
    async editCategory({commit}, categoryId) {
      try {
        const response = await this.$axios.post(`/categories/${categoryId}`);
        commit("EDIT_CATEGORY",  categoryId);
        return response
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    }
  }
};