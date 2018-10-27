<template>
  <div class="text-area" >
    <div class="form-group" >
        <FormTitle v-bind:form="form" />
        <input type="text" name="question_type[]" value="textarea" class="d-none">
        <textarea name="question[]" id="" cols="30" rows="5" class="form-control" :placeholder="placeholder"></textarea>
    </div>
    <FooterComponent v-bind:form="form" />

  </div>
</template>

<script>
import FooterComponent from '@/components/form/FooterComponent'
import FormTitle from '@/components/form/FormTitle'

export default {
  name: 'TextArea',
  components: {FooterComponent, FormTitle},
  props: ['forms', 'componentKey', 'form'],
  data: function () {
    return {
      placeholder: 'Long answer text'
    }
  }
}
</script>

<style>

</style>
