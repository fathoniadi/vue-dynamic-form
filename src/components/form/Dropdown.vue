<template>
  <div class="dropdown" >
    <div class="form-group" >
      <FormTitle />
      <div>
        <input type="text" name="question_type[]" value="dropdown" class="d-none">
        <select name="question[]" id="" class="form-control">
          <option :value="dropdownOption.value" v-for="(dropdownOption, key) in inputDropdownOptions" :key="key"> {{ dropdownOption.value }} </option>
        </select>
      </div>
      <div style="margin-top:10px">
        List Options
        <div class="row">
          <div class="col-md-6">
            <div v-for="(option, key) in inputDropdownOptions " :key="key">
              <input type="text" class="form-control input-option" placeholder="Option" v-model="option.value">
            </div>
          </div>
          <div class="col-md-6 text-right">
            <button @click="addOption()" class="btn btn-sm btn-secondary">Add Options</button>
          </div>
        </div>
      </div>
    </div>
    <DeleteButton v-bind:forms="forms" v-bind:componentKey="componentKey" />
  </div>
</template>

<script>
import FormTitle from '@/components/form/FormTitle'
import DeleteButton from '@/components/form/DeleteButton'

export default {
  name: 'TextArea',
  components: {FormTitle, DeleteButton},
  props: ['forms', 'componentKey'],
  data: function () {
    return {
      inputDropdownOptions: [{value: 'Option 1'}]
    }
  },
  methods: {
    addOption: function () {
      this.inputDropdownOptions.push({value: 'Option ' + (this.inputDropdownOptions.length + 1)})
    }
  }
}
</script>

<style>

</style>
