import { boot } from 'quasar/wrappers'
import mitt from 'mitt'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  const emitter = mitt();

  app.config.globalProperties.$on = emitter.on
  app.config.globalProperties.$off = emitter.off
  // app.config.globalProperties.$emitValue = emitter.emit
  app.provide('emitter', emitter);
})
