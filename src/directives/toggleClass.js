/*
 * Toggle Class fuctionality
 */

export default {
  bind: function (el, binding) {
    let targetId = binding.value.targetId || false
    let classList = binding.value.class ? binding.value.class.split(' ') : false

    // Setup toggle class functionality
    el.toggleClass = function () {
      let target = document.getElementById(targetId)

      if (target && classList) {
        classList.forEach(item => {
          target.classList.toggle(item)
        })
      }
    }

    // Attach the click event to the element
    el.addEventListener('click', function () {
      el.toggleClass()
    })
  },
  unbind: function (el) {
    el.removeEventListener('click', el.toggleClass)
  }
}
