<template>
  <div class="form">
    <section class="form-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card">
              <div class="card-header">
                <h1 v-show = "titleEdit == false" @dblclick = "titleEdit = true" >{{ title }}</h1>
                <div v-show = "titleEdit == true">
                  <input class="form-control form-control-lg" v-show = "titleEdit == true" v-model = "title"
                  v-on:blur= "endTitleEditing()"
                  @keyup.enter = "endTitleEditing()">
                </div>
                <p v-show="descriptionEdit == false" @dblclick = "descriptionEdit = true" > {{ description }} </p>
                <div v-show="descriptionEdit == true">
                  <textarea class="form-control" v-show="descriptionEdit == true" v-model="description"
                  v-on:blur= "endDescriptionEditing()"
                  @keyup.enter = "endDescriptionEditing()"></textarea>
                </div>
              </div>
              <div class="card-body">
                <div class="text-right">
                  <b-dropdown id="ddown-dropup" text="Add" variant="info" class="m-2">
                    <b-dropdown-item @click="addTextBox('TextBox')" href="#">Text Box</b-dropdown-item>
                    <b-dropdown-item @click="addTextBox('TextArea')" href="#">Text Area</b-dropdown-item>
                    <b-dropdown-item @click="addTextBox('Dropdown')" href="#">Dropdown</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>

              <draggable v-model="forms" :options="{draggable:'.form-component'}" @start="drag=true" @end="drag=false">
                <div :class="{'box-selected':form.form === selected_form}"
                @click="clicked(form.form)"
                v-for="(form, key) in forms" :key="key" class="card-body form-component">
                  <div v-show="form.form === selected_form" class="text-center">
                    <i class="fa fa-arrows text-secondary"></i>
                  </div>
                  <component v-bind:form="form" :is="form.form.component" />
                </div>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import TextBox from '@/components/form/TextBox'
import TextArea from '@/components/form/TextArea'
import Dropdown from '@/components/form/Dropdown'
import draggable from 'vuedraggable'

export default {
  name: 'Form',
  components: {TextBox, TextArea, Dropdown, draggable},
  data () {
    return {
      title: 'Untitled Form',
      description: 'Form description',
      selected_form: {},
      titleEdit: false,
      descriptionEdit: false
    }
  },
  computed: {
    forms: {
      get: function () {
        return this.$store.state.forms
      },
      set: function (form) {
        this.$store.dispatch('updateForm', form)
      }
    }
  },
  methods: {
    addTextBox: function (name) {
      if (name === 'TextBox') {
        this.$store.dispatch('addForm', {'component': TextBox, 'order': (this.forms.length + 1), 'fixed': false, 'type': 'textbox', 'title': 'Untitled Question', titleEdit: false, options: []})
      } else if (name === 'TextArea') {
        this.$store.dispatch('addForm', {'component': TextArea, 'order': (this.forms.length + 1), 'fixed': false, 'type': 'textarea', 'title': 'Untitled Question', titleEdit: false, options: []})
      } else if (name === 'Dropdown') {
        this.$store.dispatch('addForm', {'component': Dropdown, 'order': (this.forms.length + 1), 'fixed': false, 'type': 'dropdown', 'title': 'Untitled Question', titleEdit: false, options: [{value: 'Option 1'}]})
      }
    },
    clicked: function (form) {
      this.selected_form = form
    },
    endTitleEditing: function () {
      this.titleEdit = false
    },
    endDescriptionEditing: function () {
      this.descriptionEdit = false
    }
  }
}
</script>
