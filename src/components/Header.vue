<template>
<div class="yellow-bg">
    <h1 >To Do List</h1>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        <v-container>
    <v-progress-linear background-color="red" color="green" height="10" rounded="true" value="50"></v-progress-linear>
     <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1"  step="1"></v-stepper-step>

      <v-divider style="border-top:10px dotted orange"></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

      <v-divider ></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3"></v-stepper-step>
         <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4"></v-stepper-step>
         <v-divider></v-divider>

      <v-stepper-step step="5"></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
           <vue-dropzone
      ref="imgDropZone"
      id="customdropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone></v-card>

        <v-btn
          color="warning"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="warning"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="warning"
          @click="e1 = 4"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
       <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="warning"
          @click="e1 = 5"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
       <v-stepper-content step="5">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="warning"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </v-container>
    </div>
</div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  
   name: 'header',
   components: {
         vueDropzone: vue2Dropzone
   },
      data () {
      return {
            dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 50,
        thumbnailHeight: 50,
        addRemoveLinks: false,
        acceptedFiles: ".jpg, .jpeg, .png",
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag Images or Click Here</p>
          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
          `
      },
        e1: 1,
      }
    },
}
</script>

<style scoped>
.yellow-bg {
    background-color: yellow;
}
</style>