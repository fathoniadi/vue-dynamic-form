<template>
  <div class="form">
    <section class="form-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card">
              <div class="card-header">
                <h2 v-show = "titleEdit == false" @dblclick = "titleEdit = true" >{{ title }}</h2>
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
              <div :class="{'box-selected':key === pointer}"
              @click="clicked(key)"
              v-for="(form, key) in forms" :key="key" class="card-body">
                <component  :is="form" />
              </div>
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

export default {
  name: 'Form',
  components: {TextBox, TextArea, Dropdown},
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
        this.forms.push(TextBox)
      } else if (name === 'TextArea') {
        this.forms.push(TextArea)
      } else if (name === 'Dropdown') {
        this.forms.push(Dropdown)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
