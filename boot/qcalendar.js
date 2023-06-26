import {
  QCalendar,
  QCalendarMonth,
  QCalendarMultiDay,
  QCalendarAgenda
} from '@quasar/quasar-app-extension-qcalendar/component'

export default async ({ app }) => {
  app.component('q-calendar', QCalendar)
  app.component('q-calendar-month', QCalendarMonth)
  app.component('q-calendar-multi-day', QCalendarMultiDay)
  app.component('q-calendar-agenda', QCalendarAgenda)
}
