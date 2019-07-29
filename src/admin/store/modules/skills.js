export default {
	namespaced: true,
  state: {
		skills: []
	},
	mutations: {
		SET_SKILLS(state, skills) {
			state.skills = skills
		},
		ADD_SKILL(state, skill) {
			state.skills.push(skill);
		},
		EDIT_SKILL(state, editedSkill) {
			state.skills = state.skills.map(skill => {
				return skill.id === editedSkill.id ? editedSkill : skill;
			})
		},
		REMOVE_SKILL(state, removedSkillId) {
			state.skills = state.skills.filter(skill => skill.id !== removedSkillId);
		}
	},
	actions: {
		async addSkill({commit}, newSkill) {
			try {
				const response = await this.$axios.post("/skills", newSkill);
				commit("ADD_SKILL", response.data);
				return response;
			} catch (error) {
				throw new Error(
					error.response.data.error || error.response.data.message
				)
			}		
		},
		async removeSkill({commit}, skillId){
			try {
				const response = await this.$axios.delete(`/skills/${skillId}`);
				commit("REMOVE_SKILL", skillId);
				return response
			} catch (error) {
				//ошибка
			}
		},
		async editSkill({commit}, skill) {
			try {
				const response = await this.$axios.post(`/skills/${skill.id}`, skill);
				commit("EDIT_SKILL", response.data.skill);
				return response
			} catch (error) {
				// ошибка
			}

		},
		async fetchSkills({commit}, skill) {
			try {
				const {data: skills} = await this.$axios.get("./skills/158", skill);
				commit("SET_SKILLS", skills);
			} catch (error) {
				
			}
		}
	}
}