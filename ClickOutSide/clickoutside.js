Vue.directive('clickoutside', {
    bind: function (el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        function documentESC(e){
            if (binding.expression) {
                binding.value(e);
            }
        }
        el._vueClickOutside_ = documentHandler;
        el._vueESCOutside_ = documentESC;
        document.addEventListener('click', documentHandler);
        document.addEventListener('keydown', documentESC);
    },
    unbind: function (el, binding) {
        document.removeEventListener('click', el._vueClickOutside_);
        document.removeEventListener('keydown', el._vueESCOutside_);
        delete el._vueESCOutside_;
        delete el._vueClickOutside_;
    }
})