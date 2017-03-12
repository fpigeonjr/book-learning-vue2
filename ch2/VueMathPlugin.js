export default {
    install: function(Vue) {
        Vue.directive('square', (el, binding) => {
            el.innerHTML = Math.pow(binding.value, 2)
        })

        Vue.directive('sqrt', (el, binding) => {
            el.innerHTML = Math.sqrt(binding.value)
        })

        Vue.directive('sine', (el, binding) => {
            el.innerHTML = Math.sin(binding.value)
        })

        Vue.directive('cosine', (el, binding) => {
            el.innerHTML = Math.cos(binding.value)
        })

        Vue.directive('tangent', (el, binding) => {
            el.innerHTML = Math.tan(binding.value)
        })
    }
}