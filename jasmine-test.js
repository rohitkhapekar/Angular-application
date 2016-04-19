describe("Sample Test Suite", function() {

  it("sample thrutiness test", function() {
    expect(true).toBeTruthy();
  });

});




describe("Test cases for Controller,$scope,Factory", function() {


  (function() {
    'use strict';

    describe("Temperature_Monitor_Systems", function() {
      var ctrl;
      var scope;
      beforeEach(module('app'));
      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('tempCntrl', {
          $scope: scope
        });

      }));
      it('contrller Exists', inject(function($controller) {


        expect(ctrl).toBeDefined();
        expect(ctrl).not.toBeNull();
        expect(typeof ctrl).toBe('object');
      }));

      it('scope exists', function() {
        expect(scope.Temperatures).toBeDefined();
      });
      describe('Services and Factory', function() {
        var factory = null;
        beforeEach(inject(function(TemperatureMoniter) {
          factory = TemperatureMoniter;
        }))
        it('Methods are Defined', function() {
          expect(factory.getCurrentMedian).toBeDefined()
          expect(factory.getCurrentMedian).toEqual(jasmine.any(Function))
        });
      });
    });
  }());

  (function() {
    'use strict';
    describe("Record_Temperature", function() {
      it("Adding Temperature Sucessfully", function() {
        var result = recordTemperature(4)
        expect(result).toEqual([4]);
      })
    })
    describe("getCurrentMedian Method", function() {
      it("Test for Even Series ", function() {
        var unit_test = [-7, 1, 3, 5, 7, 8];
        var result = getCurrentMedian(unit_test)
        expect(result).toEqual(4);
      })

      it("Test for Odd Series ", function() {
        var unit_test = [-7, 1, 3, 5, 7, 8, 9];
        var result = getCurrentMedian(unit_test)
        expect(result).toEqual(5);
      })

    })
  }());
});