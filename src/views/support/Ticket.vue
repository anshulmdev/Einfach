<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Ticket" subtitle="Submit any ongoing queries">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Support</b-breadcrumb-item>
          <b-breadcrumb-item active>Ticket</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Basic -->
      <base-block rounded title="Basic" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Select category
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Select" label-for="example-select">
                <b-form-select id="example-select" v-model="selected" :options="options" plain></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Write query in detail
              </p>
            </b-col>
            <b-col lg="8" xl="5">
                <b-form-textarea id="example-textarea-input" rows="4" placeholder="Write in detail.."></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="8">
              <p class="font-size-sm text-muted">
                
              </p>
            </b-col>
            <b-col lg="4" class="mt-5">
              <b-form-group>
                <b-button type="submit" variant="primary">Raise Ticket</b-button>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Basic -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select' },
        { value: 1, text: 'Option #1' },
        { value: 2, text: 'Option #2' },
        { value: 3, text: 'Option #3' },
        { value: 4, text: 'Option #4' },
        { value: 5, text: 'Option #5' },
        { value: 6, text: 'Option #6' },
        { value: 7, text: 'Option #7' },
        { value: 8, text: 'Option #8' },
        { value: 9, text: 'Option #9' },
        { value: 10, text: 'Option #10' }
      ]}}}