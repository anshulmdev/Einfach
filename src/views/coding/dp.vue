<template>
<div>
  <div v-if="firebaseData.length">
    <!-- Hero -->
    <base-page-heading title="Arrays" subtitle="Data Structure and Algorithms">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Coding</b-breadcrumb-item>
          <b-breadcrumb-item active>Array</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
          <!-- Block Tabs Default Style -->
          <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
            <b-tab title="Library" active>
              <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
       <!-- Search -->
    <div v-if="firebaseData" class="content">
          <!-- Projects -->
          <div class="font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light">
      <b-form>
        <b-input-group>
          <b-form-input class="form-control" placeholder="Search.."></b-form-input>
          <template #append>
            <b-input-group-text>
              <i class="fa fa-fw fa-search"></i>
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-form>
          </div>
          <b-table-simple striped table-class="table-vcenter">
            <b-thead>
              <b-tr>
                <b-th style="width: 50%;">Project</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 12%;">Topic</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 12%;">Marks</b-th>
                <b-th class="text-center" style="width: 12%;">Select</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(ques, index) in filteredArray" :key="index">
                <b-td>
                  <p class="h5 mt-3 mb-2">
                    <a v-b-modal.modal-block-extra-large @click="question = ((perPage)*(currentPage-1) + index)">{{ques.heading.slice(0,60)}}...</a>
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge :variant="ques.type[1]">{{ques.type[0]}}</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">{{ques.marks}}</b-td>
                <b-td class="px-5">
              <b-button :variant="`alt-${ques.type[1]}`" @click="check((perPage)*(currentPage-1) + index)">Add</b-button>
                  </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Projects -->
    </div>
    <div v-else class="m-5">
            <b-spinner />
      </div>
    <!-- END Search -->
            </b-tab>
            <b-tab title="Custom">
          <b-form>
            <base-block rounded title="Create your own Question" header-bg>
              <template #options>
                <b-button   size="sm" variant="primary" @click="addQuestion()">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="alt-primary" @click="this.customQuestion = {heading: 'Question Heading', description: 'Problem Statement', marks: 10, type: 'Hard', testCases: {input: '', output: ''}}">
                  Reset
                </b-button>
              </template>
              <b-row class="py-sm-1 py-md-1">
                <b-col>
      <base-block rounded content-full>
              <b-form-group label="Heading" label-for="example-textarea-input">
                <b-form-input v-model="customQuestion.heading" id="example-text-input" placeholder="Question Heading"></b-form-input>
              </b-form-group>
              <b-form-group label="Problem Statement" label-for="example-textarea-input">
          <ckeditor
            :editor="ckeditor"
            v-model="customQuestion.description"
            :config="ckeditorConfig"
          ></ckeditor>
              </b-form-group>
              <b-row>
              </b-row>
              <b-row  v-for="(item, index) in customQuestion.testCases.input" :key="index">
                <b-col>
              <b-form-group :label="`TestCases Input ${index + 1}`" label-for="example-textarea-input">
                <b-form-textarea v-model="customQuestion.testCases.input[index]" rows="4" placeholder="Input"></b-form-textarea>
              </b-form-group>
                </b-col>
                <b-col>
                  
              <b-form-group :label="`Output ${index + 1}`" label-for="example-select">
                <b-form-textarea v-model="customQuestion.testCases.output[index]" rows="4" placeholder="Output"></b-form-textarea>
              </b-form-group>
                </b-col>
              </b-row>
              
                      <base-block rounded title="Parameters" header-bg>
                        <template #options>
                          <b-row
                            ><b-col>
                              <b-form-select
                                id="example-select"
                                v-model="customQuestion.type"
                                :options="tags"
                                plain
                              ></b-form-select> </b-col
                            ><b-col>
                              <b-form-input
                                type="number"
                                v-model="customQuestion.marks"
                                placeholder="Marks"
                              ></b-form-input
                            ></b-col>

                            <b-col>
                              <b-button
                                block
                                @click="addOption('add')"
                                 
                                expanded
                                variant="success"
                              >
                                Add
                              </b-button> </b-col
                            ><b-col>
                              <b-button
                                block
                                @click="addOption('remove')"
                                 
                                variant="danger"
                              >
                                Remove
                              </b-button> </b-col
                            ><b-col>
                              <b-button
                                block
                                @click="submitQuestion"
                                variant="primary"
                              >
                                Submit
                              </b-button></b-col
                            ><b-col>
                              <b-button
                                block
                                @click="reset"
                                variant="alt-primary"
                              >
                                Reset
                              </b-button></b-col
                            >
                          </b-row></template
                        ></base-block
                      >
      </base-block>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
            </b-tab>
            <b-tab title-item-class="ml-auto">
              <template #title>
                <i class="si si-settings"></i>
              </template>
              <h4 class="font-w400">Settings Content</h4>
              <p>...</p>
            </b-tab>
          </b-tabs>
      <!-- END Your Block -->
    </div>
          <b-modal
        id="modal-block-extra-large"
        size="xl"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div v-if="firebaseData" class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header" :class="`bg-${firebaseData[question].type[1]}`">
            <h3 class="block-title">{{firebaseData[question].heading}}</h3>
            <div class="block-options">
              <button
                type="button"
                class="btn-block-option"
                @click="$bvModal.hide('modal-block-extra-large')"
              >
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content font-size-sm">
          <ckeditor
            :editor="ckeditor"
            v-model="firebaseData[question].description"
            :config="ckeditorConfig"
          ></ckeditor>
          </div>
          <div class="block-content block-content-full text-right border-top">
            <b-button
              variant="alt-primary"
              class="mr-1"
              @click="$bvModal.hide('modal-block-extra-large')"
              >Close</b-button
            >
            <b-button
              variant="primary"
              @click="update(question)"
              >Update</b-button
            >
          </div>
        </div>
      </b-modal>
  </div>

  <div v-else>
    <div class="d-flex justify-content-center mt-10">
            <i class="fa fa-3x fa-cog fa-spin text-success"></i>
    </div>
  </div></div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DB } from "../../firebase";
import CKEditor from "@ckeditor/ckeditor5-vue2";
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

const options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
};
// Register Vue SweetAlert2 with custom options
Vue.use(VueSweetalert2, options);
export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data (){
    return {
      customQuestion: {heading: 'Question Heading', description: 'Problem Statement', marks: 10, type: 'Hard', testCases: {input: [], output: []}},
      tags: ['Hard', 'Medium', 'Easy'],
      question: 0,
      currentPage: 1,
      rows: 10,
      perPage: 5,
      ckeditor: ClassicEditor,
      ckeditorConfig: {
        // The configuration of the editor
      },
      firebaseData: []
    }
  },
  mounted(){
    this.fetch()
  },
  computed:{
    filteredArray (){
      return this.firebaseData.slice(((this.currentPage-1)*this.perPage),((this.currentPage)*this.perPage));
    }
  },
  methods:{
    addOption(value) {
      if(value === 'add') {
        this.customQuestion.testCases.input.push('Add with line breaks')
        this.customQuestion.testCases.output.push('Add with line breaks')
        }
      if(value === 'remove') {
        this.customQuestion.testCases.input.pop()
        this.customQuestion.testCases.output.pop()
      }
    },
    async submitQuestion() {
      try{
      const tempQues = this.customQuestion
      const tags = {'Hard': 'danger', 'Medium': 'warning', 'Easy': 'success'}
      const finalSubmission = {heading: tempQues.heading, marks: tempQues.marks, description: tempQues.description, type: [tempQues.type, tags[tempQues.type]]}
      const answers = {answers: tempQues.testCases.output, testCases: tempQues.testCases.input}
      console.log(answers)
      const index = this.firebaseData ? this.firebaseData.length : 0;
      await DB.ref(`coding/dp/${index}`).set(finalSubmission)
      await DB.ref(`coding/dpAnswers/${finalSubmission.heading}`).set(answers)
      this.$swal("Successfully Added").then(() => {
            this.fetch();
          });
      this.fetch()}catch (err) {
          this.$swal(err.message);
        }
    },
    async update(value){
      await DB.ref(`coding/dp/${value}`).set(this.firebaseData[value])
    },
    check(value){
      this.$store.state.newAssignment.active = true;
      this.$store.commit('addQuestions', {time: 30,
       marks: parseInt(this.firebaseData[value].marks), questions: 1, tag: 'dp', value: {index: value, marks: this.firebaseData[value].marks}})
    },
    async fetch() {
      const list = DB.ref("coding/dp");
      const snapshot = await list.once("value");
      this.firebaseData = snapshot.val()
    },
    reset () {
      this.customQuestion = {heading: 'Question Heading', description: 'Problem Statement', marks: 10, type: 'Hard', testCases: {input: [], output: []}}
    }
  }
}
</script>


<style lang="scss">
// SweetAlert2
@import "~sweetalert2/dist/sweetalert2.min.css";
</style>