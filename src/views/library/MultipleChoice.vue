<template>
<div>
  <div v-if="firebaseData.length">
    <!-- Hero -->
    <base-page-heading title="Multiple Choice Questions" subtitle="Select preferred MCQ package">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Library</b-breadcrumb-item>
          <b-breadcrumb-item active>MCQs</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Block Tabs Default Style -->
      <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
        <b-tab title="Library" active>
          <div v-if="firebaseData" class="px-1">
            <!-- MCQ Questions -->
            <b-table-simple striped table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th style="width: 55%">Questions</b-th>
                  <b-th class="d-none d-lg-table-cell text-center" style="width: 15%">Category</b-th>
                  <b-th class="d-none d-lg-table-cell text-center" style="width: 15%">Marks</b-th>
                  <b-th class="text-center" style="width: 15%">Select</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(ques, index) in filteredArray" :key="index">
                  <b-td>
                    <h4 class="h6 mt-3 mb-2">
                      <a v-b-modal.modal-block-extra-large @click="question = perPage * (currentPage - 1) + index">{{ ques.heading.slice(0, 60) }}...</a>
                    </h4>
                  </b-td>
                  <b-td class="d-none d-lg-table-cell text-center">
                    <b-badge :variant="ques.type[1]">{{ ques.type[0] }}</b-badge>
                  </b-td>
                  <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">{{ ques.marks }}</b-td>
                  <b-td>
                    <b-button :variant="`alt-${ques.type[1]}`" @click="check(perPage * (currentPage - 1) + index)">Add Question</b-button>
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
        <b-tab title="Create Question">
          <b-form>
            <base-block rounded title="Create your own Question" header-bg>
              <b-row class="py-sm-1 py-md-1">
                <b-col>
                  <base-block rounded content-full>
                    <b-form-group label="Question" label-for="block-form1-password">
                      <b-form-textarea v-model="customQuestion.question" rows="4"></b-form-textarea>
                    </b-form-group>
                    <b-form-group label="Options">
                      <b-row v-for="(item, index) in customQuestion.options" :key="index">
                        <b-col cols="7">
                          <base-block rounded>
                            <b-form-input class="form-control-alt" type="text" v-model="customQuestion.options[index].option"></b-form-input>
                          </base-block>
                        </b-col>
                        <b-col cols="3">
                          <base-block rounded>
                            <b-form-checkbox v-model="customQuestion.options[index].answer" class="custom-control-success mb-2" :value="true">Correct Option</b-form-checkbox>
                          </base-block>
                        </b-col>
                        <b-col cols="2">
                          <base-block rounded>
                            <b-button block @click="addOption(index)" variant="danger"> Remove </b-button>
                          </base-block>
                        </b-col>
                      </b-row>
                      <base-block rounded title="Parameters" header-bg>
                        <template #options>
                          <b-row
                            ><b-col> <b-form-select id="example-select" v-model="customQuestion.categorySelected" :options="Object.keys(customQuestion.category)" plain></b-form-select> </b-col><b-col> <b-form-input type="number" v-model="customQuestion.marks" placeholder="Marks"></b-form-input></b-col>

                            <b-col> <b-button @click="addOption('add')" expanded variant="success"> Add Option </b-button> </b-col><b-col> <b-button @click="submitQuestion" variant="primary"> Submit </b-button></b-col><b-col> <b-button @click="reset" variant="alt-primary"> Reset </b-button></b-col>
                          </b-row></template
                        ></base-block
                      >
                    </b-form-group>
                  </base-block>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-tab>
      </b-tabs>
      <!-- END Your Block -->
    </div>
    <b-modal id="modal-block-extra-large" size="xl" body-class="p-0" hide-footer hide-header>
      <div v-if="firebaseData" class="block block-rounded block-themed block-transparent mb-0">
        <div class="block-header" :class="`bg-${firebaseData[question].type[1]}`">
          <h3 class="block-title">{{ firebaseData[question].marks }} Marks Question</h3>
          <div class="block-options">
            <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-extra-large')">
              <i class="fa fa-fw fa-times"></i>
            </button>
          </div>
        </div>
        <div class="block-content font-size-sm">
          <h5>{{ firebaseData[question].heading }}</h5>
          <p v-for="(question, index) in firebaseData[question].options" :key="index">
            {{ question }}
          </p>
        </div>
        <div class="block-content block-content-full text-right border-top">
          <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-extra-large')">Close</b-button>
          <b-button variant="primary" @click="$bvModal.hide('modal-block-extra-large')">Ok</b-button>
        </div>
      </div>
    </b-modal>
  </div>

  <div v-else>
    <div class="d-flex justify-content-center mt-10">
            <i class="fa fa-3x fa-cog fa-spin text-success"></i>
    </div>
  </div>
  </div>

</template>

<style lang="scss">
// SweetAlert2
@import "~sweetalert2/dist/sweetalert2.min.css";
</style>

<script>
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2
import Vue from "vue"
import VueSweetalert2 from "vue-sweetalert2"

const options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
}
// Register Vue SweetAlert2 with custom options
Vue.use(VueSweetalert2, options)
import { DB } from "../../firebase"
export default {
  data() {
    return {
      customQuestion: {
        question: null,
        options: [],
        category: {
          Javascript: "warning",
          Python: "success",
          "Web Development": "danger",
          React: "info",
          VueJS: "success",
          Angular: "danger",
        },
        categorySelected: "Javascript",
        marks: 10,
      },
      question: 0,
      currentPage: 1,
      rows: 100,
      perPage: 10,
      firebaseData: [],
    }
  },
  mounted() {
    this.fetch()
  },
  computed: {
    filteredArray() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.rows = this.firebaseData.length
      return this.firebaseData.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },
  },
  methods: {
    addOption(value) {
      if (value === "add") this.customQuestion.options.push({ option: null, answer: false })
      else this.customQuestion.options.splice(value, 1)
    },
    check(value) {
      this.$store.state.newAssignment.active = true
      this.$store.commit("addQuestions", {
        time: 1,
        marks: this.firebaseData[value].marks,
        questions: 1,
        tag: "mcq",
        value: { index: value, marks: this.firebaseData[value].marks },
      })
    },
    async fetch() {
      const list = DB.ref("mcq")
      const snapshot = await list.once("value")
      this.firebaseData = snapshot.val()
    },
    async submitQuestion() {
      if (this.customQuestion.question != "Write your question" && this.customQuestion.options.length) {
        try {
          const data = this.customQuestion
          const options = []
          let correctAnswer = ""
          data.options.forEach((element) => {
            if (element.answer === true) {
              correctAnswer = element.option
            }
            options.push(element.option)
          })
          const index = this.firebaseData ? this.firebaseData.length : 0
          const details = {
            heading: data.question,
            marks: data.marks,
            options,
            type: [data.categorySelected, data.category[data.categorySelected]],
          }
          await DB.ref(`mcq/${index}`).set(details)
          await DB.ref(`mcqAnswers/${index}`).set(correctAnswer)
          this.$swal("Successfully Added").then(() => {
            this.fetch()
          })
        } catch (err) {
          this.$swal(err.message)
        }
      } else {
        this.$swal("Missing Information")
      }
    },
    reset() {
      this.customQuestion = {
        question: "Write your question",
        options: [],
        category: {
          Javascript: "warning",
          Python: "success",
          "Web Development": "danger",
          React: "info",
          VueJS: "success",
          Angular: "danger",
        },
        categorySelected: "Javascript",
        marks: 10,
      }
    },
  },
}
</script>
