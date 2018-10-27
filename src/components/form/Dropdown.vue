<template>
  <div class="dropdown" >
    <div class="form-group" >
      <FormTitle v-bind:form="form" />
      <div>
        <input type="text" name="question_type[]" value="dropdown" class="d-none">
        <select name="question[]" id="" class="form-control">
          <option :value="dropdownOption.value" v-for="(dropdownOption, key) in form.form.options" :key="key"> {{ dropdownOption.value }} </option>
        </select>
      </div>
      <div style="margin-top:10px">
        List Options
        <div class="row">
          <div class="col-md-6">
            <div v-for="(option, key) in form.form.options " :key="key">
              <input type="text" class="form-control input-option" placeholder="Option" v-model="option.value">
            </div>
          </div>
          <div class="col-md-6 text-right">
            <button @click="addOption()" class="btn btn-sm btn-secondary">Add Options</button>
          </div>
        </div>
      </div>
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
  props: ['componentKey', 'forms', 'form'],
  methods: {
    addOption: function () {
      this.form.form.options.push({value: 'Option ' + (this.form.options.length + 1)})
    }
  }
}
</script>

<style>

</style>
