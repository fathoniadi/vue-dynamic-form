<template>
    <div class="DeleteButton">
        <div class="text-right">
            <button @click="deleteButton" class="btn btn-danger btn-sm">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DeleteButton',
  props: ['componentKey', 'forms'],
  methods: {
    deleteButton: function () {
      this.forms.splice(this.componentKey, 1)
    }
  }
}
</script>

<style>

</style>
