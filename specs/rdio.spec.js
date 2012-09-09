require(['rdio'], function(Rdio) {
  describe('Rdio', function() {
    it('can construct without error', function() {
      var rdio = new Rdio();
    });

    describe('search', function() {
      it('can find artist NEEDTOBREATHE', function() {
        var results;
        var search = function() {
          var rdio = new Rdio();
          rdio.search('NEEDTOBREATHE', 'Artist', function(data) {
            results = data.results;
          });
        };

        runs(search, 'search async method');

        waitsFor(function() {
          return results !== undefined;
        }, 'results were not set', 5000);

        runs(function() {
          expect(results[0].name).toBe('NEEDTOBREATHE');
        });
      });
    });

    /* Note: this won't work till I figure out Authentication
       in tests

    describe('setAvailableOffline', function() {
      it('can add to mobile', function() {
        var data;
        var setAvailableOffline = function() {
          var rdio = new Rdio();
          rdio.setAvailableOffline('298342', true, function(data) {
            results = data.results;
          });
        };

        runs(setAvailableOffline, 'setAvailableOffline async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'data never received', 5000);

        runs(function() {
          expect(data).toBeTruthy();
        });
      });
    }); */
  });
});
