<template>
  <div class="form">
    <section class="form-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card">
              <div class="card-header">
                <h1 v-show = "forms.title.isEdit == false" @dblclick = "forms.title.isEdit = true" >{{ forms.title.content }}</h1>
                <div v-show = "forms.title.isEdit == true">
                  <input class="form-control form-control-lg" v-show = "forms.title.isEdit == true" v-model = "forms.title.content"
                  v-on:blur= "endTitleEditing()"
                  @keyup.enter = "endTitleEditing()">
                </div>
                <p v-show="forms.description.isEdit == false" @dblclick = "forms.description.isEdit = true" > {{ forms.description.content }} </p>
                <div v-show="forms.description.isEdit == true">
                  <textarea class="form-control" v-show="forms.description.isEdit == true" v-model="forms.description.content"
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

              <draggable v-model="forms.components" @start="drag=true" @end="drag=false">
                <div :class="{'box-selected':form.form === selected_form}"
                @click="clicked(form.form)"
                v-for="(form, key) in forms.components" :key="key" class="card-body form-component">
                  <div v-show="form.form === selected_form" class="text-center">
                    <i class="fa fa-arrows text-secondary"></i>
                  </div>
                  <component v-bind:form="form" :is="form.form.content" />
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
        this.$store.dispatch('addForm', {'content': TextBox, 'order': (this.forms.length + 1), 'fixed': false, 'type': 'textbox', 'title': 'Untitled Question', titleEdit: false, options: [], required: false})
      } else if (name === 'TextArea') {
        this.$store.dispatch('addForm', {'content': TextArea, 'order': (this.forms.length + 1), 'fixed': false, 'type': 'textarea', 'title': 'Untitled Question', titleEdit: false, options: [], required: false})
      } else if (name === 'Dropdown') {
        this.$store.dispatch('addForm', {'content': Dropdown, 'order': (this.forms.length + 1), 'fixed': false, 'type': 'dropdown', 'title': 'Untitled Question', titleEdit: false, options: [{value: 'Option 1'}], required: false})
      }
    },
    clicked: function (form) {
      this.selected_form = form
    },
    endTitleEditing: function () {
      this.forms.title.isEdit = false
    },
    endDescriptionEditing: function () {
      this.forms.description.isEdit = false
    }
  }
}
</script>
