<template>
    <div class="FromTitle">
        <div v-show = "titleEdit == false">
            <h4 @dblclick = "titleEdit = true"> {{title}} </h4>
        </div>
        <div v-show = "titleEdit == true">
            <input class="form-control form-control-lg" v-show = "titleEdit == true" v-model = "title"
            v-on:blur= "endTitleEditing()"
            @keyup.enter = "endTitleEditing()">
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormTitle',
  data: function () {
    return {
      titleEdit: false,
      title: 'Untitled Question'
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
