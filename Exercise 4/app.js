new Vue({
  el: '#exercise',
  data: {
    isHighlight: true,
    classes: ['class1', 'class2', 'class3'],
    className: '',
    hasClass: true,
    bgColor: '',
    progressBar: {
      height: '20px',
      width: 0,
      backgroundColor: 'red',
      widthValue: 0
    }
  },
  methods: {
    startEffect: function () {
      this.isHighlight = !this.isHighlight;
      return this.isHighlight;
    },
    startProgress: function () {
      var vm = this;
      setInterval(function () {
        vm.progressBar.widthValue += 5 ;
        vm.progressBar.width = vm.progressBar.widthValue + 'px';
      }, 2000);
    }
  }
});