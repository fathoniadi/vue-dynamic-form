<template>
    <div class="FromTitle">
        <div v-show = "form.form.titleEdit == false">
            <h4 @dblclick = "form.form.titleEdit = true"> {{form.form.title}} </h4>
        </div>
        <div v-show = "form.form.titleEdit == true">
            <input class="form-control form-control-lg" v-show = "form.form.titleEdit == true" v-model = "form.form.title"
            v-on:blur= "endTitleEditing()"
            @keyup.enter = "endTitleEditing()">
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props: ['form'],
  methods: {
    endTitleEditing: function () {
      this.form.form.titleEdit = false
    }
  }
}
</script>

<style>

</style>
