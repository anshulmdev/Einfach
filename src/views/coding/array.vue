<template>
  <div>
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
                    <a v-b-modal.modal-block-extra-large @click="question = index">{{ques.heading.slice(0,60)}}...</a>
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge :variant="ques.type[1]">{{ques.type[0]}}</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">{{ques.marks}}</b-td>
                <b-td class="px-5">
              <b-button :variant="`alt-${ques.type[1]}`" @click="check(index)">Add</b-button>
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
                <b-button type="submit" size="sm" variant="primary" @click="addQuestion()">
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
                <b-col>
              <b-form-group label="Marks" label-for="example-textarea-input">
                <b-form-input v-model="customQuestion.marks" type="number" placeholder="40"></b-form-input>
              </b-form-group>
                </b-col>
                <b-col>
                  
              <b-form-group label="Difficulty" label-for="example-select">
                <b-form-select id="example-select" v-model="customQuestion.type" :options="tags" plain></b-form-select>
              </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
              <b-form-group label="TestCases Input" label-for="example-textarea-input">
                <b-form-textarea v-model="customQuestion.testCases.input" rows="4" placeholder="Input"></b-form-textarea>
              </b-form-group>
                </b-col>
                <b-col>
                  
              <b-form-group label="Output" label-for="example-select">
                <b-form-textarea v-model="customQuestion.testCases.output" rows="4" placeholder="Output"></b-form-textarea>
              </b-form-group>
                </b-col>
              </b-row>
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
            <h3 class="block-title">{{firebaseData[question].marks}} Marks Question</h3>
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
            <h5>{{firebaseData[question].heading}}</h5>
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
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DB } from "../../firebase";
import CKEditor from "@ckeditor/ckeditor5-vue2";
export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data (){
    return {
      customQuestion: {heading: 'Question Heading', description: 'Problem Statement', marks: 10, type: 'Hard', testCases: {input: '', output: ''}},
      tags: ['Hard', 'Medium', 'Easy'],
      question: 0,
      currentPage: 1,
      rows: 10,
      perPage: 5,
      ckeditor: ClassicEditor,
      ckeditorConfig: {
        // The configuration of the editor
      },
      firebaseData: [{
  "heading" : "Which type of JavaScript language is ___",
  "marks" : 30,
  "options": ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
  "type" : [ "Javascript", "warning" ]
}]
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
    async addQuestion() {
      const tempQues = this.customQuestion
      const tags = {'Hard': 'danger', 'Medium': 'warning', 'Easy': 'success'}
      tempQues.type = [tempQues.type, tags[tempQues.type]]
      await DB.ref(`coding/array/${this.firebaseData.length}`).set(tempQues)
      this.fetch()
    },
    async update(value){
      await DB.ref(`coding/array/${value}`).set(this.firebaseData[value])
    },
    check(value){
      this.$store.state.newAssignment.active = true;
      this.$store.commit('addQuestions', {time: 5,
       marks: this.firebaseData[value].marks, questions: 1, tag: 'array', value})
    },
    async fetch() {
      const list = DB.ref("coding/array");
      const snapshot = await list.once("value");
      this.firebaseData = snapshot.val()
    }
  }
}
</script>