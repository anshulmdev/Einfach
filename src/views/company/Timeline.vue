<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Overview" subtitle="Visualise your company activities">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Calendar</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded content-full>
        <b-row class="items-push">
          <b-col md="8" lg="7" xl="9">
            <!-- Full Calendar Component -->
            <full-calendar
              ref="fullCalendar"
              :options="calendarOptions"
            ></full-calendar>
            <!-- END Full Calendar Component -->
          </b-col>
          <b-col md="4" lg="5" xl="3">
            <!-- Add Event Form -->
            <b-form @submit.prevent="addNewEvent" class="push">
              <b-input-group>
                <b-form-input ref="inputAddEvent" v-model="calendarNewEvent" placeholder="Add Event.."></b-form-input>
                <template #append>
                  <b-input-group-text class="input-group-text-alt">
                    <i class="fa fa-fw fa-plus-circle"></i>
                  </b-input-group-text>
                </template>
              </b-input-group>
            </b-form>
            <!-- END Add Event Form -->

            <!-- Event List -->
            <ul id="calendar-events" class="list list-events">
              <li v-for="(event, index) in calendarNewEvents" :key="`events-${index}`" class="p-0">
                <div class="js-event p-2 font-size-sm font-w600 text-white" :class="`bg-${event.color}`">{{ event.title }}</div>
              </li>
            </ul>
            <div class="text-center">
              <em class="font-size-sm text-muted">
                <i class="fa fa-arrows-alt"></i> Drag and drop events on the calendar
              </em>
            </div>
            <!-- END Event List -->
          </b-col>
        </b-row>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// FullCalendar Custom overrides
@import './src/assets/scss/vendor/fullcalendar';
</style>

<script>
// FullCalendar, for more info and examples you can check out https://fullcalendar.io/
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap'

export default {
  components: {
    FullCalendar
  },
  data () {
    return {
      calendarOptions: {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'title',
          right: 'prev,next today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
          bootstrapPlugin
        ],
        weekends: true,
        events: [],
        themeSystem: 'bootstrap',
        editable: true,
        droppable: true,
        firstDay: 1,
        dateClick: this.handleDateClick,
        eventDrop: this.handleEventDrop,
        eventReceive: this.handleExternalDrop,
      },
      calendarNewEvent: '',
      calendarNewEvents: [
        {
          title: 'Applicant Applied',
          color: 'info'
        },
        {
          title: 'Applicant Invited',
          color: 'info'
        },
        {
          title: 'Applicant Rejected',
          color: 'info'
        },
        {
          title: 'Applicant Shortlisted',
          color: 'success'
        },
        {
          title: 'Error Reported',
          color: 'warning'
        },
        {
          title: 'Software Crash',
          color: 'danger'
        },
      ]
    }
  },
  created () {
    // Get current year, month and day
    let date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth()
    let d = date.getDate()

    // Populate calendar with predefined events
    this.calendarOptions.events = [
      {
        title: '10 Invited',
        start: new Date(y, m, 1),
        allDay: true
      },
      {
        title: 'Software Updates',
        start: new Date(y, m, 9),
        end: new Date(y, m, 12),
        allDay: true,
        color: '#e04f1a'
      },
      {
        title: '24 Shortlisted',
        start: new Date(y, m, 17),
        end: new Date(y, m, 19),
        allDay: true,
        color: '#82b54b'
      },
      {
        title: '2 Error Reported',
        start: new Date(y, m, d - 3),
        end: new Date(y, m, d - 3),
        allDay: true,
        color: '#ffb119'
      },
    ]
  },
  mounted () {
    // Init draggable calendar events
    new Draggable(document.getElementById('calendar-events'), {
      itemSelector: '.js-event',
      eventData (eventEl) {
        return {
          title: eventEl.innerText,
          backgroundColor: getComputedStyle(eventEl).backgroundColor,
          borderColor: getComputedStyle(eventEl).backgroundColor,
          create: true
        }
      }
    })
  },
  methods: {
    handleDateClick (arg) {
      // Add new event data to the calendar on date click
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarOptions.events.push({
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    },
    handleEventDrop (eventDropInfo) {
      // When dropping an existing event to another date
      window.console.log(eventDropInfo)
    },
    handleExternalDrop (info) {
      // When dropping an external event and is added to the calendar
      window.console.log(info)
    },
    addNewEvent () {
      // Add event form submission
      if (this.calendarNewEvent) {
        // Add the event to the draggable list
        this.calendarNewEvents.unshift({
          title: this.calendarNewEvent,
          color: 'info'
        })

        // Reset and focus the input 
        this.calendarNewEvent = ''
        this.$refs.inputAddEvent.$el.focus()
      }
    }
  }
}
</script>
