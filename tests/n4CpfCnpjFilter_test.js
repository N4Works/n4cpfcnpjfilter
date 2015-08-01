"use strict";

describe('CpfCnpjFilter', function()
{
  var _cpfCnpjFilter;

  beforeEach(module('n4CpfCnpjFilter'));

  beforeEach(inject(function($injector)
  {
    _cpfCnpjFilter = $injector.get('CpfCnpjFilter');
  }));

  describe('Methods', function()
  {
    it('should return an empty string when no value is specified', function()
    {
      expect(_cpfCnpjFilter()).toEqual('');
    });

    it('should return masked CNPJ when a CNPJ string is specified', function()
    {
        expect(_cpfCnpjFilter('11111111111111')).toEqual('11.111.111/1111-11');
    });

    it('should return masked CPF when a CPF string is specified', function()
    {
        expect(_cpfCnpjFilter('11111111111')).toEqual('111.111.111-11');
    });

    it('should return an empty string when an invalid string is specified', function()
    {
        expect(_cpfCnpjFilter('11111111')).toEqual('');
    });

  });
});
