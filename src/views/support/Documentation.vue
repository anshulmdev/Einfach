<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Documentation">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Support</b-breadcrumb-item>
          <b-breadcrumb-item active>Documentation</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content content-boxed">
      <!-- Frequently Asked Questions -->
      <base-block rounded content-full>
        <div class="p-sm-4 p-xl-7">
          <!-- Introduction -->
          <h2 class="h3">
            <strong>1.</strong> Get Started
          </h2>
          <div class="mb-5" role="tablist">
            <!-- Introduction -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq1-q1>Welcome to Einfach</a>
              </template>
              <template #content>
                <b-collapse id="faq1-q1" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Einfach is a complete hiring package that helps you recruit tech teams with ease
                    </p>
                    <p>
                      We help fast-growing companies in technical recruiting by structuring, automating, and scaling technical hiring
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <!-- Dashboard -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq1-q2>Dashboard</a>
              </template>
              <template #content>
                <b-collapse id="faq1-q2" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dashboard inculdes realtime applicants performance and activities. You can checkout Applied, Invited, Shortlisted, Rejected with grphacial representation
                    </p>
                    <p>
                      if a candidate leave test in middle, you can take action right from dashboard under Ongoing Section
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <!-- Mailbox -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq1-q3>Mailbox</a>
              </template>
              <template #content>
                <b-collapse id="faq1-q3" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Mailbox consist of all the emails forwarded from your account to respective applicants.
                    </p>
                    <p>
                      Mails are categorized according to email templated used. Custom emails are also supported. You can use upto 30k emails.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
          </div>
          <!-- END Introduction -->

          <h2 class="h3">
            <strong>2.</strong> Account Setup
          </h2>

          <div class="mb-5" role="tablist">

            <!-- Hosted Forms -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq2-q1>Hosted Forms</a>
              </template>
              <template #content>
                <b-collapse id="faq2-q1" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      <b>Path: </b>Applications => Forms => Create Form
                    </p>
                    <p>
                      This is the starting point for receiving applications. You have to submit company details and assignment description. You can deploy forms with your respective company url
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <!-- Email Templates -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq2-q2>Email Templates</a>
              </template>
              <template #content>
                <b-collapse id="faq2-q3" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      <b>Path: </b>Applications => Forms => Email Template
                    </p>
                    <p>
                      You get default email templates for Inviting, Shortlisting and Rejecting applications. You can modify and save as per content requirements
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
          </div>
          <!-- Assignment -->
          <h2 class="h3">
            <strong>3.</strong> Assignment
          </h2>
          <div class="mb-5" role="tablist">
            <!-- Create Assignment -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq3-q1>Deploy Assignment</a>
              </template>
              <template #content>
                <b-collapse id="faq3-q1" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      You can start creating your assignment from dashboard or directly from library
                    </p>
                    <p>
                      Library consist of 4 sections currently: MCQ, REST APIs, REGEX, PROGRAMMING. You can test and add your own custom questions
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <!-- Sending Invitations -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq3-q2>Sending Invitations</a>
              </template>
              <template #content>
                <b-collapse id="faq3-q2" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      <b>Path: </b>Applications => Applicants => Applied
                    </p>
                    <p>
                      After successfull deployment of assignment you can start inviting candidates and your stored templted (Invitation) will be forwarded easily
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <!-- Shortlist/Rejected -->
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq3-q3>Shortlist/Rejected</a>
              </template>
              <template #content>
                <b-collapse id="faq3-q3" accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      <b>Path: </b>Applications => Applicants => Shortlisted
                    </p>
                    <p>
                      <b>Path: </b>Applications => Applicants => Rejected
                    </p>
                    <p>
                      Based on cutoff set by you in assignment, candidated get sorted automatically for further review. You can either send saved custom email or move to completed
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
          </div>
          <!-- END Introduction -->
        </div>
      </base-block>
      <!-- END Frequently Asked Questions -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
