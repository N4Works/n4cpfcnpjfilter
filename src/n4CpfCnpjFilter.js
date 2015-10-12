;
(function(ng) {
  "use strict";

  ng
    .module("n4CpfCnpjFilter", [])
    .filter("CpfCnpj", function() {
      return function(cpfCnpj) {
        if (!cpfCnpj) {
          return "";
        }

        var digitos = cpfCnpj.replace(/\D/g, "");

        if (digitos.length === 14) {
          return digitos.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        } else if (digitos.length === 11) {
          return digitos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else {
          return "";
        }
      };
    });
}(angular));
