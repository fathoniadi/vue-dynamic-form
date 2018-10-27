<template>
  <div class="textbox">
    <div class="form-group">
      <FormTitle v-bind:form="form" />
      <input type="text" name="question_type[]" value="input" class="d-none">
      <input type="text" name="question[]" class="form-control" id="" :placeholder="placeholder">
    </div>
    <FooterComponent v-bind:form="form" />
  </div>
</template>

<script>
import FooterComponent from '@/components/form/FooterComponent'
import FormTitle from '@/components/form/FormTitle'

export default {
  name: 'TextBox',
  components: {FooterComponent, FormTitle},
  props: ['forms', 'componentKey', 'form'],
  data: function () {
    return {
      placeholder: 'Short answer text'
    }
  }
}
</script>

<style>

</style>
