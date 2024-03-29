import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import categories from "./modules/categories";
import user from "./modules/user";
import skills from "./modules/skills";
import works from "./modules/works";

export default new Vuex.Store({
  modules: {
		categories,
		user,
		skills,
		works
	}
});