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
            <div class="" style="padding-left: 15px" v-for="(option, key) in form.form.options " :key="key">
              <div class="row">
                <input type="text" class="form-control input-option col-md-10" placeholder="Option" v-model="option.value">
              <label class="col-sm-2 col-form-label col-form-label-sm text-center" @click="deleteOption(option)" style="padding: 15px"><i class="fa fa-times fa-lg text-danger align-bottom h-100"></i></label>
              </div>
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
  name: 'Dropdown',
  components: {FooterComponent, FormTitle},
  props: ['componentKey', 'forms', 'form'],
  methods: {
    addOption: function () {
      this.form.form.options.push({value: 'Option ' + (this.form.form.options.length + 1)})
    },
    deleteOption: function (option) {
      this.form.form.options.splice(this.form.form.options.indexOf(option), 1)
    }
  }
}
</script>

<style>

</style>
