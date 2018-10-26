<template>
  <div class="textbox">
    <div class="form-group">
      <FormTitle />
      <input type="text" name="question_type[]" value="input" class="d-none">
      <input type="text" name="question[]" class="form-control" id="" :placeholder="placeholder">
    </div>
    <DeleteButton v-bind:forms="forms" v-bind:componentKey="componentKey" />
  </div>
</template>

<script>
import FormTitle from '@/components/form/FormTitle'
import DeleteButton from '@/components/form/DeleteButton'

export default {
  name: 'TextBox',
  props: ['forms', 'componentKey'],
  components: {FormTitle, DeleteButton},
  data: function () {
    return {
      placeholder: 'Short answer text'
    }
  }
}
</script>

<style>

</style>
