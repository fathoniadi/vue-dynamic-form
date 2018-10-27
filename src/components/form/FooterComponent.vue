<template>
    <div class="FooterComponent text-right">
        <div class="row">
          <div class="col-md-10 col-8">
            <i @click="deleteButton" class=" fa fa-trash fa-2x text-secondary delebutton"></i>
          </div>
          <div class="col-md-2 col-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  Required
                </label>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: ['form'],
  methods: {
    deleteButton: function () {
      this.$store.dispatch('removeForm', this.form)
    }
  }
}
</script>

<style>
</style>
