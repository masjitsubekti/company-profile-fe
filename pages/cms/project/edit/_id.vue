<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <ProjectForm />
  </div>
</template>

<script>
import ProjectForm from '~/components/pages/project/ProjectForm.vue';

export default {
  components: {
    ProjectForm
  },
  data() {
    return {
      items: [
        {
          text: 'Project',
          to: {
            name: 'cms-project'
          }
        },
        {
          text: 'Edit Project',
          active: true
        }
      ]
    }
  }
}
</script>

<style>

</style>
