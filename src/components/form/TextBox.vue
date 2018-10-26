<template>
  <div class="textbox">
    <div class="form-group">
          <div v-show = "titleEdit == false">
            <label @dblclick = "titleEdit = true"> {{title}} </label>
          </div>
          <div v-show = "titleEdit == true">
            <input class="form-control" v-show = "titleEdit == true" v-model = "title"
            v-on:blur= "endTitleEditing()"
            @keyup.enter = "endTitleEditing()">
          </div>
          <input type="text" name="question_type[]" value="input" class="d-none">
          <input type="text" name="question[]" class="form-control" id="" :placeholder="placeholder">
      </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  data: function () {
    return {
      titleEdit: false,
      title: 'Untitled Question',
      placeholder: 'Short answer text'
    }
  },
  methods: {
    endTitleEditing: function () {
      this.titleEdit = false
    }
  }
}
</script>

<style>

</style>
