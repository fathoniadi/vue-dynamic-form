<template>
  <div class="text-area" >

    <div class="form-group" >
        <FormTitle />
        <input type="text" name="question_type[]" value="textarea" class="d-none">
        <textarea name="question[]" id="" cols="30" rows="5" class="form-control" :placeholder="placeholder"></textarea>
    </div>
    <DeleteButton v-bind:forms="forms" v-bind:componentKey="componentKey" />
  </div>
</template>

<script>
import FormTitle from '@/components/form/FormTitle'
import DeleteButton from '@/components/form/DeleteButton'

export default {
  name: 'TextArea',
  props: ['forms', 'componentKey'],
  components: {FormTitle, DeleteButton},
  data: function () {
    return {
      placeholder: 'Long answer text'
    }
  }
}
</script>

<style>

</style>
