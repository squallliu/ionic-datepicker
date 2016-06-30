//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function () {
  'use strict';

  angular.module('ionic-datepicker')
    .service('IonicDatepickerService', IonicDatepickerService);

  IonicDatepickerService.$inject = [];
  function IonicDatepickerService() {
    this.monthsList = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    /**
     * Get years list
     */
    this.getYearsList = function (from, to) {
      var yearsList = [],
        minYear = 1900,
        maxYear = 2100;

      if (from) {
        minYear = new Date(from).getFullYear();
      }

      if (to) {
        maxYear = new Date(to).getFullYear();
      }

      for (var i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      }
      ;

      return yearsList;
    };
  }
})();