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

              <draggable v-model="forms" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                <div :class="{'box-selected':key === pointer}"
                @click="clicked(key)"
                v-for="(form, key) in forms" :key="key" class="card-body">
                  <component v-bind:forms="forms" v-bind:componentKey="key" :is="form.component" />
                </div>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto text-right">
            <br>
            <button class="btn btn-info btn-lg">Get Form Code</button>
          </div>
        </div>
      </div>
    </section> -->
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
      forms: [],
      title: 'Untitled Form',
      description: 'Form description',
      pointer: -1,
      titleEdit: false,
      descriptionEdit: false
    }
  },
  methods: {
    addTextBox: function (name) {
      if (name === 'TextBox') {
        this.forms.push({'component': TextBox, 'order': (this.forms.length + 1), 'fixed': false})
      } else if (name === 'TextArea') {
        this.forms.push({'component': TextArea, 'order': (this.forms.length + 1), 'fixed': false})
      } else if (name === 'Dropdown') {
        this.forms.push({'component': Dropdown, 'order': (this.forms.length + 1), 'fixed': false})
      }
    },
    clicked: function (key) {
      this.pointer = key
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
