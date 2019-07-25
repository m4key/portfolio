<template lang="pug">
	form.about__skills-form
		.about__skills-add-wrap
			input(type="text" v-model="skillTitle" placeholder="Название новой группы").about__skills-group-name
			.about__skills-btns
				button(type="button" @click="addSkillGroup").about__skills-btn-accept
				button(type="button").about__skills-btn-cancel
		ul.about__skills-item
			li.about__skills-list
				.about__skills-item-btns-wrap
					button(type="button").about__skills-item-edit
					button(type="button").about__skills-item-delete
		.about__skills-new
			input(type="text" placeholder="Новый навык").about__skills-name
			input(type="text" value="100%").about__skills-value
			button(type="button").button.about__skills-btn-add +
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      skillTitle: ""
    };
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>