<template>
  <!-- Page Content -->
  <div class="content">
    <b-row>
      <b-col md="5" xl="3">
        <!-- Toggle Inbox Side Navigation -->
        <div class="d-md-none push">
          <!-- Class Toggle, functionality initialized in Helpers.coreToggleClass() -->
          <b-button variant="primary" block v-toggle-class="{ targetId: 'one-inbox-side-nav', class: 'd-none' }">
            Inbox Menu
          </b-button>
        </div>
        <!-- END Toggle Inbox Side Navigation -->

        <!-- Inbox Side Navigation -->
        <div id="one-inbox-side-nav" class="d-none d-md-block push">
          <!-- New Message Modal -->
          <b-modal id="one-inbox-new-message" body-class="p-0" hide-footer hide-header>
            <b-form @submit="onSubmit" @reset="onReset">
              <div class="block block-rounded block-themed block-transparent mb-0">
                <div class="block-header bg-primary-dark">
                  <h3 class="block-title">
                    <i class="fa fa-pencil-alt mr-1"></i> New Message
                  </h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" @click="$bvModal.hide('one-inbox-new-message')">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <b-form-group label="Email" label-for="message-email">
                    <b-form-input v-model="form.email" id="message-email" class="form-control-alt" type="email" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Subject" label-for="message-subject">
                    <b-form-input v-model="form.subject" id="message-subject" class="form-control-alt" required></b-form-input>
                  </b-form-group>
                  <b-form-group label="Message" label-for="message-msg" description="Feel free to use common tags: <blockquote>, <strong>, <em>">
                    <b-form-textarea v-model="form.message" id="message-msg" class="form-control-alt" rows="6" required></b-form-textarea>
                  </b-form-group>
                </div>
                <div class="block-content block-content-full text-right border-top">
                  <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('one-inbox-new-message')">Cancel</b-button>
                  <b-button type="submit" variant="primary">
                    <i class="fa fa-paper-plane mr-1"></i> Send Message
                  </b-button>
                </div>
              </div>
            </b-form>
          </b-modal>
          <!-- END New Message Modal -->

          <!-- Inbox Menu -->
          <base-block title="Inbox" header-class="block-header-default" rounded>
            <template #options>
              <b-button
                variant="alt-primary"
                size="sm"
                class="btn btn-sm btn-alt-primary"
                v-b-modal.one-inbox-new-message
              >
                <i class="fa fa-pencil-alt mr-1"></i> Compose
              </b-button>
            </template>
            <b-nav class="font-size-sm push" pills vertical>
              <b-nav-item href="javascript:void(0)" class="my-1" link-classes="d-flex justify-content-between align-items-center" active>
                <span>
                  <i class="fa fa-fw fa-inbox mr-1"></i> Inbox
                </span>
                <b-badge pill variant="secondary">3</b-badge>
              </b-nav-item>
              <b-nav-item href="javascript:void(0)" class="my-1" link-classes="d-flex justify-content-between align-items-center">
                <span>
                  <i class="fa fa-fw fa-star mr-1"></i> Starred
                </span>
                <b-badge pill variant="secondary">48</b-badge>
              </b-nav-item>
              <b-nav-item href="javascript:void(0)" class="my-1" link-classes="d-flex justify-content-between align-items-center">
                <span>
                  <i class="fa fa-fw fa-paper-plane mr-1"></i> Sent
                </span>
                <b-badge pill variant="secondary">1480</b-badge>
              </b-nav-item>
              <b-nav-item href="javascript:void(0)" class="my-1" link-classes="d-flex justify-content-between align-items-center">
                <span>
                  <i class="fa fa-fw fa-pencil-alt mr-1"></i> Draft
                </span>
                <b-badge pill variant="secondary">2</b-badge>
              </b-nav-item>
              <b-nav-item href="javascript:void(0)" class="my-1" link-classes="d-flex justify-content-between align-items-center">
                <span>
                  <i class="fa fa-fw fa-folder mr-1"></i> Archive
                </span>
                <b-badge pill variant="secondary">1987</b-badge>
              </b-nav-item>
              <b-nav-item href="javascript:void(0)" class="my-1" link-classes="d-flex justify-content-between align-items-center">
                <span>
                  <i class="fa fa-fw fa-trash-alt mr-1"></i> Trash
                </span>
                <b-badge pill variant="secondary">10</b-badge>
              </b-nav-item>
            </b-nav>
          </base-block>
          <!-- END Inbox Menu -->

          <!-- Friends -->
          <base-block title="Friends" header-class="block-header-default" rounded>
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <ul class="nav-items font-size-sm">
              <li>
                <a class="media py-2" href="javascript:void(0)">
                  <div class="mr-3 ml-2 overlay-container overlay-bottom">
                    <img class="img-avatar img-avatar48" src="img/avatars/avatar7.jpg" alt="Avatar">
                    <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">Judy Ford</div>
                    <div class="font-w400 text-muted">Web Designer</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="media py-2" href="javascript:void(0)">
                  <div class="mr-3 ml-2 overlay-container overlay-bottom">
                    <img class="img-avatar img-avatar48" src="img/avatars/avatar16.jpg" alt="Avatar">
                    <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">Adam McCoy</div>
                    <div class="font-w400 text-muted">Graphic Designer</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="media py-2" href="javascript:void(0)">
                  <div class="mr-3 ml-2 overlay-container overlay-bottom">
                    <img class="img-avatar img-avatar48" src="img/avatars/avatar4.jpg" alt="Avatar">
                    <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-warning"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">Helen Jacobs</div>
                    <div class="font-w400 text-muted">Photographer</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="media py-2" href="javascript:void(0)">
                  <div class="mr-3 ml-2 overlay-container overlay-bottom">
                    <img class="img-avatar img-avatar48" src="img/avatars/avatar15.jpg" alt="Avatar">
                    <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-warning"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">Jack Greene</div>
                    <div class="font-w400 text-muted">Copywriter</div>
                  </div>
                </a>
              </li>
              <li>
                <a class="media py-2" href="javascript:void(0)">
                  <div class="mr-3 ml-2 overlay-container overlay-bottom">
                    <img class="img-avatar img-avatar48" src="img/avatars/avatar13.jpg" alt="Avatar">
                    <span class="overlay-item item item-tiny item-circle border border-2x border-white bg-danger"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">Scott Young</div>
                    <div class="font-w400 text-muted">UI designer</div>
                  </div>
                </a>
              </li>
            </ul>
          </base-block>
          <!-- END Friends -->

          <!-- Account -->
          <base-block title="Account" header-class="block-header-default" rounded>
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <!-- Vue Easy Pie Chart Container -->
            <vue-easy-pie-chart :percent="35" :line-width="3" :size="100" bar-color="#abe37d" track-color="#eeeeee" scale-color="#dddddd" class="push">
              <img class="img-avatar" :src="`img/avatars/avatar1.jpg`" alt="Avatar">
            </vue-easy-pie-chart>
            <base-block tag="a" href="javascript:void(0)" rounded bordered link-shadow content-full content-class="text-center">
              <div class="push">
                  <i class="si si-like fa-2x text-success"></i>
                </div>
                <div class="font-size-h2 font-w700">
                  <span class="text-muted">+</span> 2.5TB
                </div>
                <div class="font-size-sm text-muted text-uppercase">
                  Upgrade Now
                </div>
            </base-block>
          </base-block>
        </div>
        <!-- END Inbox Side Navigation -->
      </b-col>
      <b-col md="7" xl="9">
        <!-- View Message Modal -->
        <b-modal id="one-inbox-message" body-class="p-0" hide-footer hide-header>
          <div v-if="showMessage" class="block block-rounded block-themed block-transparent mb-0">
            <div class="block-header bg-primary-dark">
              <h3 class="block-title">
                {{ messages.find(x => x.id === showMessage).title }}
              </h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" @click="$bvModal.hide('one-inbox-message')">
                  <i class="fa fa-fw fa-times"></i>
                </button>
              </div>
            </div>
            <div class="block-content block-content-full font-size-sm d-flex justify-content-between align-items-center bg-body-light">
                <div>
                  <a class="font-w600" href="javascript:void(0)">{{ messages.find(x => x.id === showMessage).user }}</a><br>
                  <a href="javascript:void(0)">{{ messages.find(x => x.id === showMessage).email }}</a>
                </div>
                <span class="text-muted"><em>{{ messages.find(x => x.id === showMessage).received }}</em></span>
            </div>
            <div class="block-content font-size-sm">
              <p>Dear Admin,</p>
              <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
              <p>Best Regards</p>
            </div>
            <div v-if="messages.find(x => x.id === showMessage).files.length" class="block-content bg-body-light">
              <div class="row gutters-tiny items-push font-size-sm">
                <div v-for="file in messages.find(x => x.id === showMessage).files" :key="file" class="col-md-4 text-center py-2">
                  <div class="mb-2">
                    <i class="fa fa-file fa-2x text-muted opacity-50"></i>
                  </div>
                  <div class="text-muted">{{ file }}</div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <!-- END View Message Modal -->

        <!-- Message List -->
        <base-block rounded btn-option-fullscreen header-class="block-header-default">
          <template #title>
            15-30 <span class="font-w400 text-lowercase">from</span> 700
          </template>
          <template #options>
            <button
              type="button"
              class="btn-block-option"
              v-b-tooltip.hover.nofade.left="'Previous 15 Messages'"
            >
              <i class="si si-arrow-left"></i>
            </button>
            <button
              type="button"
              class="btn-block-option"
              v-b-tooltip.hover.nofade.left="'Next 15 Messages'"
            >
              <i class="si si-arrow-right"></i>
            </button>
          </template>

          <!-- Messages Options -->
          <div class="d-flex justify-content-between push">
            <div class="btn-group">
              <b-button variant="light" size="sm">
                <i class="fa fa-archive text-primary"></i>
                <span class="d-none d-sm-inline ml-1">Archive</span>
              </b-button>
              <b-button variant="light" size="sm">
                <i class="fa fa-star text-warning"></i>
                <span class="d-none d-sm-inline ml-1">Star</span>
              </b-button>
            </div>
            <b-button variant="light" size="sm">
              <i class="fa fa-times text-danger"></i>
              <span class="d-none d-sm-inline ml-1">Delete</span>
            </b-button>
          </div>
          <!-- END Messages Options -->

          <!-- Messages -->
          <div class="pull-x">
            <b-table-simple hover table-class="table-vcenter font-size-sm">
              <b-tbody>
                <b-tr v-for="message in messages" :key="message.id">
                  <b-td class="text-center" style="width: 60px;">
                    <b-form-checkbox
                      :id="`checkbox-${message.id}`"
                      :value="message.id"
                    ></b-form-checkbox>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell font-w600" style="width: 140px;">
                    {{ message.user }}
                  </b-td>
                  <b-td>
                    <a class="font-w600" href="javascript:void(0)" v-b-modal.one-inbox-message @click="showMessage = message.id">
                      {{ message.title }}
                    </a>
                    <div class="text-muted mt-1">
                      {{ message.contentPreview }}
                    </div>
                  </b-td>
                  <b-td class="d-none d-xl-table-cell text-muted" style="width: 80px;">
                    <span v-if="message.files.length > 0">
                      <i class="fa fa-paperclip mr-1"></i> ({{ message.files.length }})
                    </span>
                  </b-td>
                  <b-td
                    class="d-none d-xl-table-cell text-muted"
                    style="width: 120px;"
                  >
                    <em>{{ message.received }}</em>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
          <!-- END Messages -->
        </base-block>
        <!-- END Message List -->
      </b-col>
    </b-row>
  </div>
  <!-- END Page Content -->
</template>

<style lang="scss">
// Vue Easy Pie Chart
@import '~vue-easy-pie-chart/dist/vue-easy-pie-chart.css';
</style>

<script>
// Vue Easy Pie Chart, for more info and examples you can check out https://github.com/DotNetAge/vue-easy-pie-chart
import VueEasyPieChart from 'vue-easy-pie-chart'

export default {
  components: {
    VueEasyPieChart
  },
  data () {
    return {
      form: {
        email: '',
        subject: '',
        message: '',
      },
      showMessage: 0,
      messages: [
        {
          id: 1,
          user: 'Amanda Powell',
          email: 'amanda.powell@example.com',
          title: 'Welcome to our service',
          contentPreview: "It's a pleasure to have you on our service..",
          files: [
            'file1.zip',
            'file2.zip',
            'file3.zip',
          ],
          received: '2 min ago',
        },
        {
          id: 2,
          user: 'Betty Kelley',
          email: 'betty.kelley@example.com',
          title: 'Your subscription was updated',
          contentPreview: "We are glad you decided to go with a vip..",
          files: [
            'file1.zip',
            'file2.zip',
          ],
          received: '10 min ago',
        },
        {
          id: 3,
          user: 'Thomas Riley',
          email: 'thomas.riley@example.com',
          title: 'Update is available',
          contentPreview: "An update is under way for your app..",
          files: [],
          received: '25 min ago',
        },
        {
          id: 4,
          user: 'Megan Fuller',
          email: 'megan.fuller@example.com',
          title: 'New Sale!',
          contentPreview: "You had a new sale and earned..",
          files: [
            'file1.zip',
          ],
          received: '30 min ago',
        },
        {
          id: 5,
          user: 'Jack Greene',
          email: 'jack.greene@example.com',
          title: 'Action Required for your account!',
          contentPreview: "Your account is inactive for a long time and..",
          files: [],
          received: '1 hour ago',
        },
        {
          id: 6,
          user: 'Barbara Scott',
          email: 'barbara.scott@example.com',
          title: 'New Photo Pack!',
          contentPreview: "Our new photo pack is available now! You..",
          files: [],
          received: '2 hrs ago',
        },
        {
          id: 7,
          user: 'Marie Duncan',
          email: 'marie.duncan@example.com',
          title: 'Product is released!',
          contentPreview: "This is a notification about our new product..",
          files: [
            'file1.zip',
          ],
          received: '1 day ago',
        },
        {
          id: 8,
          user: 'Jose Mills',
          email: 'jose.mills@example.com',
          title: 'Now on Sale!',
          contentPreview: "Our Book is out! You can buy a copy and..",
          files: [
            'file1.zip',
            'file2.zip',
            'file3.zip',
            'file4.zip',
            'file5.zip',
            'file6.zip',
            'file7.zip',
            'file8.zip',
            'file9.zip',
          ],
          received: '1 day ago',
        },
        {
          id: 9,
          user: 'Lori Grant',
          email: 'lori.grant@example.com',
          title: 'Monthly Report',
          contentPreview: "The monthly report you requested for..",
          files: [
            'file1.zip',
            'file2.zip',
            'file3.zip',
            'file4.zip',
            'file5.zip',
            'file6.zip',
          ],
          received: '3 days ago',
        },
        {
          id: 10,
          user: 'Megan Fuller',
          email: 'megan.fuller@example.com',
          title: 'Trial Started!',
          contentPreview: "You 30-day trial has now started and..",
          files: [],
          received: '3 days ago',
        },
        {
          id: 11,
          user: 'Jack Greene',
          email: 'jack.greene@example.com',
          title: 'Invoice #INV001645',
          contentPreview: "This is the invoice for the project we..",
          files: [],
          received: '5 days ago',
        },
        {
          id: 12,
          user: 'Lori Moore',
          email: 'lori.moore@example.com',
          title: 'Friend Request!',
          contentPreview: "You have a new friend request. Click the..",
          files: [
            'file1.zip',
            'file2.zip',
            'file3.zip',
            'file4.zip',
            'file5.zip',
          ],
          received: '1 week ago',
        },
        {
          id: 13,
          user: 'Jose Wagner',
          email: 'jose.wagner@example.com',
          title: 'Enjoy life!',
          contentPreview: "Thank you for helping us with our cause...",
          files: [
            'file1.zip',
            'file2.zip',
            'file3.zip',
          ],
          received: '1 week ago',
        },
        {
          id: 14,
          user: 'Laura Carr',
          email: 'laura.carr@example.com',
          title: 'New Twitter follower!',
          contentPreview: "You have a new follower, congratulations..",
          files: [
            'file1.zip',
          ],
          received: '2 weeks ago',
        },
        {
          id: 15,
          user: 'Amanda Powell',
          email: 'amanda.powell@example.com',
          title: 'Huge Discount available!',
          contentPreview: "Due to the fact that you are a great..",
          files: [],
          received: '3 weeks ago',
        },
      ]
    }
  },
  mounted () {
    this.$root.$on('bv::modal::hidden', (bvEvent, modalId) => {
      if (modalId === 'one-inbox-message') {
        this.showMessage = 0
      }
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      // Alert with form input values
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      // Reset our form values
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''
    }
  }
}
</script>