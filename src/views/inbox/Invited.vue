<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Invited Candidates" subtitle="Invited candidates are listed below">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Inbox</b-breadcrumb-item>
          <b-breadcrumb-item active>Invited</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
    <div class="mail-box">
      <aside class="lg-side">
        <div class="inbox-head">
          <form action="#" class="pull-right position">
            <div class="input-append">
              <input type="text" class="sr-input" placeholder="Search Mail" />
              <button class="btn sr-btn" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="inbox-body">
          <div class="mail-option">
            <div class="chk-all">
              <input
                type="checkbox"
                class="mail-checkbox mail-group-checkbox"
              />
              <div class="btn-group">
                <a
                  data-toggle="dropdown"
                  href="#"
                  class="btn mini all"
                  aria-expanded="false"
                >
                  All
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#"> None</a></li>
                  <li><a href="#"> Read</a></li>
                  <li><a href="#"> Unread</a></li>
                </ul>
              </div>
            </div>

            <div class="btn-group">
              <a
                data-original-title="Refresh"
                data-placement="top"
                data-toggle="dropdown"
                href="#"
                class="btn mini tooltips"
              >
                <i class="fa fa-refresh"></i>
              </a>
            </div>
            <div class="btn-group hidden-phone">
              <a
                data-toggle="dropdown"
                href="#"
                class="btn mini blue"
                aria-expanded="false"
              >
                More
                <i class="fa fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#"><i class="fa fa-trash-o"></i> Delete</a>
                </li>
              </ul>
            </div>

            <ul class="unstyled inbox-pagination">
              <li><span>1-50 of 234</span></li>
              <li>
                <a class="np-btn" href="#"
                  ><i class="fa fa-angle-left pagination-left"></i
                ></a>
              </li>
              <li>
                <a class="np-btn" href="#"
                  ><i class="fa fa-angle-right pagination-right"></i
                ></a>
              </li>
            </ul>
          </div>
          <table class="table table-inbox table-hover">
            <tbody>
              <tr class="unread" v-for="(item,index) in $store.state.firestoreData.inbox.invited" :key="index">
                <td class="inbox-small-cells">
                  <input type="checkbox" class="mail-checkbox" />
                </td>
                <td class="view-message dont-show">{{item.email}}</td>
                <td @click="email=item.body" v-b-modal.modal-block-popin class="view-message text-center">
                  {{item.subject.slice(0,60)}}...
                </td>
                <td class="view-message text-right">{{Date(item.time).toString().slice(0,15)}}</td>
              </tr>
            </tbody>
          </table>
        </div>
          <!-- Pop In Block Modal -->
          <b-modal id="modal-block-popin" size="xl" dialog-class="modal-dialog-popin" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-popin')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p v-html="email">
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-popin')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-popin')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Pop In Block Modal -->
      </aside>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      email: ''
    }
  }
}
</script>
<style>
.mail-box {
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}
.mail-box aside {
  display: table-cell;
  float: none;
  height: 100%;
  padding: 0;
  vertical-align: top;
}
.mail-box .lg-side {
  background: none repeat scroll 0 0 #fff;
  border-radius: 0 4px 4px 0;
  width: 75%;
}
a.mail-dropdown {
  background: none repeat scroll 0 0 #80d3d9;
  border-radius: 2px;
  color: #01a7b3;
  font-size: 10px;
  margin-top: 20px;
  padding: 3px 5px;
}
.inbox-body {
  padding: 20px;
}
ul.inbox-nav {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
}
.inbox-divider {
  border-bottom: 1px solid #d5d8df;
}
ul.inbox-nav li {
  display: inline-block;
  line-height: 45px;
  width: 100%;
}
ul.inbox-nav li a {
  color: #6a6a6a;
  display: inline-block;
  line-height: 45px;
  padding: 0 20px;
  width: 100%;
}
ul.inbox-nav li a:hover,
ul.inbox-nav li.active a,
ul.inbox-nav li a:focus {
  background: none repeat scroll 0 0 #d5d7de;
  color: #6a6a6a;
}
ul.inbox-nav li a i {
  color: #6a6a6a;
  font-size: 16px;
  padding-right: 10px;
}
ul.inbox-nav li a span.label {
  margin-top: 13px;
}
ul.labels-info li h4 {
  color: #5c5c5e;
  font-size: 13px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  text-transform: uppercase;
}
ul.labels-info li {
  margin: 0;
}
ul.labels-info li a {
  border-radius: 0;
  color: #6a6a6a;
}
ul.labels-info li a:hover,
ul.labels-info li a:focus {
  background: none repeat scroll 0 0 #d5d7de;
  color: #6a6a6a;
}
ul.labels-info li a i {
  padding-right: 10px;
}
.nav.nav-pills.nav-stacked.labels-info p {
  color: #9d9f9e;
  font-size: 11px;
  margin-bottom: 0;
  padding: 0 22px;
}
.inbox-head {
  background: none repeat scroll 0 0 #41cac0;
  border-radius: 0 4px 0 0;
  color: #fff;
  min-height: 80px;
  padding: 20px;
}
.inbox-head h3 {
  display: inline-block;
  font-weight: 300;
  margin: 0;
  padding-top: 6px;
}
.inbox-head .sr-input {
  border: medium none;
  border-radius: 4px 0 0 4px;
  box-shadow: none;
  color: #8a8a8a;
  float: left;
  height: 40px;
  padding: 0 10px;
}
.inbox-head .sr-btn {
  background: none repeat scroll 0 0 #00a6b2;
  border: medium none;
  border-radius: 0 4px 4px 0;
  color: #fff;
  height: 40px;
  padding: 0 20px;
}
.table-inbox {
  border: 1px solid #d3d3d3;
  margin-bottom: 0;
}
.table-inbox tr td {
  padding: 12px !important;
}
.table-inbox tr td:hover {
  cursor: pointer;
}
.table-inbox tr td .fa-star.inbox-started,
.table-inbox tr td .fa-star:hover {
  color: #f78a09;
}
.table-inbox tr td .fa-star {
  color: #d5d5d5;
}
.table-inbox tr.unread td {
  background: none repeat scroll 0 0 #f7f7f7;
  font-weight: 600;
}
ul.inbox-pagination {
  float: right;
}
ul.inbox-pagination li {
  float: left;
}
.mail-option {
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
}
.mail-option .chk-all,
.mail-option .btn-group {
  margin-right: 5px;
}
.mail-option .chk-all,
.mail-option .btn-group a.btn {
  background: none repeat scroll 0 0 #fcfcfc;
  border: 1px solid #e7e7e7;
  border-radius: 3px !important;
  color: #afafaf;
  display: inline-block;
  padding: 5px 10px;
}
.inbox-pagination a.np-btn {
  background: none repeat scroll 0 0 #fcfcfc;
  border: 1px solid #e7e7e7;
  border-radius: 3px !important;
  color: #afafaf;
  display: inline-block;
  padding: 5px 15px;
}
.mail-option .chk-all input[type="checkbox"] {
  margin-top: 0;
}
.mail-option .btn-group a.all {
  border: medium none;
  padding: 0;
}
.inbox-pagination a.np-btn {
  margin-left: 5px;
}
.inbox-pagination li span {
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
}
.fileinput-button {
  background: none repeat scroll 0 0 #eeeeee;
  border: 1px solid #e6e6e6;
}
.inbox-body .modal .modal-body input,
.inbox-body .modal .modal-body textarea {
  border: 1px solid #e6e6e6;
  box-shadow: none;
}
.btn-send,
.btn-send:hover {
  background: none repeat scroll 0 0 #00a8b3;
  color: #fff;
}
.btn-send:hover {
  background: none repeat scroll 0 0 #009da7;
}
.modal-header h4.modal-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}
.modal-body label {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
}
.heading-inbox h4 {
  border-bottom: 1px solid #ddd;
  color: #444;
  font-size: 18px;
  margin-top: 20px;
  padding-bottom: 10px;
}
.sender-info {
  margin-bottom: 20px;
}
.sender-info img {
  height: 30px;
  width: 30px;
}
.sender-dropdown {
  background: none repeat scroll 0 0 #eaeaea;
  color: #777;
  font-size: 10px;
  padding: 0 3px;
}
.view-mail a {
  color: #ff6c60;
}
.attachment-mail {
  margin-top: 30px;
}
.attachment-mail ul {
  display: inline-block;
  margin-bottom: 30px;
  width: 100%;
}
.attachment-mail ul li {
  float: left;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 150px;
}
.attachment-mail ul li img {
  width: 100%;
}
.attachment-mail ul li span {
  float: right;
}
.attachment-mail .file-name {
  float: left;
}
.attachment-mail .links {
  display: inline-block;
  width: 100%;
}

.fileinput-button {
  float: left;
  margin-right: 4px;
  overflow: hidden;
  position: relative;
}
.fileinput-button input {
  cursor: pointer;
  direction: ltr;
  font-size: 23px;
  margin: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-300px, 0px) scale(4);
}
.fileupload-buttonbar .btn,
.fileupload-buttonbar .toggle {
  margin-bottom: 5px;
}
.files .progress {
  width: 200px;
}
.fileupload-processing .fileupload-loading {
  display: block;
}
* html .fileinput-button {
  line-height: 24px;
  margin: 1px -3px 0 0;
}
* + html .fileinput-button {
  margin: 1px 0 0;
  padding: 2px 15px;
}
@media (max-width: 767px) {
  .files .btn span {
    display: none;
  }
  .files .preview * {
    width: 40px;
  }
  .files .name * {
    display: inline-block;
    width: 80px;
    word-wrap: break-word;
  }
  .files .progress {
    width: 20px;
  }
  .files .delete {
    width: 60px;
  }
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
</style>