<template>
<div>
  <div v-if="Object.keys(tags).length && $store.state.firestoreData">
    <!-- Hero -->
    <base-page-heading title="Assignment" subtitle="Check deployed assignment">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Assignment</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Configurator" subtitle="Change assignment parameters">
        <template #options>
          <div class="block-options-item">
            <b-badge variant="success"> Marks: {{ $store.state.firestoreData.assignment.marks }} </b-badge>
          </div>
          <div class="block-options-item">
            <b-badge variant="primary"> Questions: {{ $store.state.firestoreData.assignment.questions }} </b-badge>
          </div>
          <div class="block-options-item">
            <b-badge variant="warning"> Cutoff: {{ $store.state.firestoreData.assignment.cutoff }} </b-badge>
          </div>
          <div class="block-options-item">
            <b-badge variant="danger"> Time: {{ $store.state.firestoreData.assignment.time }} mins </b-badge>
          </div>
        </template>
        <b-form>
          <div class="form-group form-row">
            <div class="col-3">
              <b-input-group prepend="Total Marks">
                <b-form-input v-model="$store.state.firestoreData.assignment.marks">{{ $store.state.firestoreData.assignment.marks }}</b-form-input>
              </b-input-group>
            </div>
            <div class="col-3">
              <b-input-group prepend="Questions">
                <b-form-input v-model="$store.state.firestoreData.assignment.questions">{{ $store.state.firestoreData.assignment.questions }}</b-form-input>
              </b-input-group>
            </div>
            <div class="col-3">
              <b-input-group prepend="Cutoff">
                <b-form-input v-model="$store.state.firestoreData.assignment.cutoff">{{ $store.state.firestoreData.assignment.cutoff }}</b-form-input>
              </b-input-group>
            </div>
            <div class="col-3">
              <b-input-group prepend="Time in minutes">
                <b-form-input v-model="$store.state.firestoreData.assignment.time">{{ $store.state.firestoreData.assignment.time }}</b-form-input>
              </b-input-group>
            </div>
          </div>
        </b-form>
        <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content overflow-hidden">
          <div v-for="(tag, index) in Object.keys($store.state.firestoreData.assignment.tags)" :key="index">
            <b-tab v-if="$store.state.firestoreData.assignment.tags[tag].length" :title="`${tag[0].toUpperCase() + tag.slice(1)}`" class="fade-right">
              <b-table-simple responsive borderless hover table-class="table-vcenter">
                <b-thead>
                  <b-tr>
                    <b-th class="text-center" style="width: 50px">Index</b-th>
                    <b-th>Question</b-th>
                    <b-th class="text-center" style="width: 20px">Marks</b-th>
                    <b-th class="text-center" style="width: 100px">Actions</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody v-if="tags['coding']">
                  <b-tr v-for="(question, index) in $store.state.firestoreData.assignment.tags[tag]" :key="index" :variant="variants[Math.floor(Math.random() * 5)]">
                    <b-td class="text-center">
                      {{ question.index }}
                    </b-td>
                    <b-td v-if="['mcq', 'regex', 'rest'].includes(tag)" class="font-w600 font-size-sm">
                      {{ tags[tag][question.index].heading || tags[tag][question.index].question }}
                    </b-td>
                    <b-td v-if="['mcq', 'regex', 'rest'].includes(tag)" class="font-w600 font-size-sm">
                      {{ tags[tag][question.index].marks }}
                    </b-td>
                    <b-td v-if="['array', 'dp'].includes(tag)" class="font-w600 font-size-sm">
                      {{ tags["coding"][tag][question.index].heading }}
                    </b-td>
                    <b-td v-if="['array', 'dp'].includes(tag)" class="font-w600 font-size-sm">
                      {{ tags["coding"][tag][question.index].marks }}
                    </b-td>
                    <b-td class="text-center">
                      <b-button-group>
                        <b-button @click="remove(tag, index)" size="sm" variant="light-danger">
                          <i class="fa fa-fw fa-times"></i>
                        </b-button>
                      </b-button-group>
                    </b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </b-tab>
          </div>
        </b-tabs>
      </base-block>

      <base-block rounded header-bg>
        <b-button @click="update" type="reset" class="mb-3 offset-md-10" size="md" variant="warning"> Update Assignment </b-button>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
  <div v-else>
    <div class="d-flex justify-content-center mt-10">
            <i class="fa fa-3x fa-cog fa-spin text-success"></i>
    </div>
  </div>
</div>
</template>

<script>
import { DB } from "../../firebase"
import firebase from "../../firebase"
export default {
  name: "Assignment",
  data() {
    return {
      quesData: {},
      variants: ["success", "info", "warning", "primary", "danger"],
    }
  },
  methods: {
    remove(category, index) {
      this.$store.state.firestoreData.assignment.marks -= this.$store.state.firestoreData.assignment.tags[category][index].marks
      this.$store.state.firestoreData.assignment.tags[category].splice(index, 1)
      
    },
    async fetchQuestions() {
      const mcq = DB.ref("mcq")
      const rest = DB.ref("rest")
      const regex = DB.ref("regex")
      const coding = DB.ref("coding")

      const snapshot = await mcq.once("value")
      const snapshot3 = await regex.once("value")
      const snapshot2 = await rest.once("value")
      const snapshot4 = await coding.once("value")

      this.quesData = {'mcq': snapshot.val(), 'rest': snapshot2.val(), 'regex': snapshot3.val(), 'coding': snapshot4.val()}

    },
    async update(){

      const confirmation = await this.$swal({
        title: "Are you sure?",
        text: "All ongoing tests will be affected as well",
        icon: "warning",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn btn-warning m-1",
          cancelButton: "btn btn-secondary m-1",
        },
        confirmButtonText: "Yes, Updated It",
        html: false,
        preConfirm: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 50)
          })
        },
      })
      if (confirmation.isConfirmed) {
        const newAssignment = {'assignment': this.$store.state.firestoreData.assignment}
        await firebase.firestore().collection('accounts').doc(this.$store.state.firestoreData.docId).set(newAssignment, { merge: true })
        this.$bvToast.toast(`Assignment updated successfully, Please reload`, { title: `Assignment Updated`, toaster: 'b-toaster-top-right', variant: 'success', autoHideDelay: 5000, appendToast: false})
      }
    }
  },
	computed: {
		tags() {
			return this.quesData
		},
	},
  created() {
    this.fetchQuestions()
  },
}
</script>
