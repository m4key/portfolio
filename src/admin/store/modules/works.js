
export default {
	namespaced: true,
  state: {
		works: []
	},
	mutations: {
		SET_WORKS(state, works) {
			state.works = works
		},
		ADD_WORK(state, work) {
			state.works.push(work);
		},
		EDIT_WORK(state, editedWork) {
			state.works = state.works.map(work => {
				return work.id === editedWork.id ? editedWork : work;
			})
		},
		REMOVE_SKILL(state, removedWorkId) {
			state.works = state.works.filter(work => work.id !== removedWorkId);
		}
	},
	actions: {
		async addWork({commit}, newWork) {
			try {
				const response = await this.$axios.post("/works", newWork);
				commit("ADD_WORK", response.data);
				return response;
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				)
			}		
		},
		async fetchWorks({commit}, work) {
			try {
				const {data: works} = await this.$axios.get("./skills/158", work);
				commit("SET_WORKS", works);
			} catch (error) {
	
			}
		}
	}
};

