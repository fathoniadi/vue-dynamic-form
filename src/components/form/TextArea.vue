<template>
  <div class="text-area" >
    <div class="form-group" >
        <div v-show = "titleEdit == false">
            <label @dblclick = "titleEdit = true"> {{title}} </label>
        </div>
        <div v-show = "titleEdit == true">
            <input class="form-control" v-show = "titleEdit == true" v-model = "title"
            v-on:blur= "endTitleEditing()"
            @keyup.enter = "endTitleEditing()">
        </div>
        <input type="text" name="question_type[]" value="textarea" class="d-none">
        <textarea name="question[]" id="" cols="30" rows="5" class="form-control" :placeholder="placeholder"></textarea>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  data: function () {
    return {
      titleEdit: false,
      title: 'Untitled Question',
      placeholder: 'Long answer text'
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
