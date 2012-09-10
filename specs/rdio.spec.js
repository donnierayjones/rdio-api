require(['rdio'], function(Rdio) {
  describe('Rdio', function() {
    it('can construct without error', function() {
      var rdio = new Rdio();
    });

    describe('search', function() {
      it('can find artist NEEDTOBREATHE', function() {
        var data;
        var search = function() {
          var rdio = new Rdio();
          rdio.search('NEEDTOBREATHE', 'Artist', function(res) {
            data = res;
          });
        };

        runs(search, 'search async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'results were not set', 5000);

        runs(function() {
          expect(data.result.results[0].name).toBe('NEEDTOBREATHE');
        });
      });
    });

    describe('search', function() {
      it('can find track for NEEDTOBREATHE', function() {
        var data;
        var search = function() {
          var rdio = new Rdio();
          rdio.search('NEEDTOBREATHE White Fences', 'Artist,Track', function(res) {
            data = res;
          });
        };

        runs(search, 'search async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'results were not set', 5000);

        runs(function() {
          expect(data.result.results[0].name).toBe('White Fences');
        });
      });
    });

    describe('addToCollection', function() {
      it('returns error status if unknown key', function() {
        var data;
        var addToCollection = function() {
          var rdio = new Rdio();
          rdio.addToCollection('asdfasdf', function(res) {
            data = res;
          });
        };

        runs(addToCollection, 'addToCollection async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'data never received', 5000);

        runs(function() {
          expect(data.status).toBe('error');
        });
      });
    });

    describe('addToCollection', function() {
      it('returns true if valid key', function() {
        var data;
        var addToCollection = function() {
          var rdio = new Rdio();
          rdio.addToCollection('t11463545', function(res) {
            data = res;
          });
        };

        runs(addToCollection, 'addToCollection async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'data never received', 5000);

        runs(function() {
          expect(data.status).toBe('ok');
          expect(data.result).toBe(true);
        });
      });
    });
  });
});
