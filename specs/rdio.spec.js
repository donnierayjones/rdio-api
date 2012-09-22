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

    describe('getPlaylists', function() {
      it('returns nonempty owned collection', function() {
        var data;
        var getPlaylists = function() {
          var rdio = new Rdio();
          rdio.getPlaylists(function(res) {
            data = res;
          });
        };

        runs(getPlaylists, 'getPlaylists async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'data never received', 5000);

        runs(function() {
          expect(data.result.owned.length).toBeGreaterThan(0);
        });
      });
    });

    describe('createPlaylist', function() {
      it('can create with empty tracks', function() {
        var data;
        var createPlaylist = function() {
          var rdio = new Rdio();
          var playlist = {
            name: 'PandoRdio Test',
            description: 'For PandoRdio test',
            tracks: ''
          };
          rdio.createPlaylist(playlist, function(res) {
            data = res;
          });
        };

        runs(createPlaylist, 'createPlaylist async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'data never received', 5000);

        runs(function() {
          expect(data.result.name).toBe('PandoRdio Test');
        });
      });
    });

    describe('addToPlaylist', function() {
      it('adds track to playlist', function() {
        var data;
        var addToPlaylist = function() {
          var rdio = new Rdio();
          rdio.getPlaylists(function(playlistsRes) {
            var playlist = _.find(playlistsRes.result.owned, function(playlist) {
              return playlist.name === 'PandoRdio Test';
            });
            var trackKey = 't11463545';
            rdio.addToPlaylist(playlist.key, trackKey, function(res) {
              data = res;
            });
          });
        };

        runs(addToPlaylist, 'addToPlaylist async method');

        waitsFor(function() {
          return data !== undefined;
        }, 'data never received', 5000);

        runs(function() {
          // addToPlaylist returns the Playlist the track
          // was added to.
          expect(data.result.name).toBe('PandoRdio Test');
        });
      });
    });
  });
});
