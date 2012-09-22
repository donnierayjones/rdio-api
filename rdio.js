define(['rdio-api-proxy'], function(RdioApiProxy) {
  var _proxy;

  var isFunction = function(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
  };

  var handleCallback = function(callback, data) {
    if(isFunction(callback)) {
      callback(data);
    }
  };

  var Rdio = function(rdioApiProxy) {
    _proxy = rdioApiProxy || new RdioApiProxy();

    this.search = function(query, types, callback) {
      _proxy.execute(
        'search',
        { query: query, types: types },
        function(data) {
          handleCallback(callback, data);
        });
    };

    this.addToCollection = function(keys, callback) {
      _proxy.execute(
        'addToCollection',
        { keys: keys },
        function(data) {
          handleCallback(callback, data);
        });
    };

    this.setAvailableOffline = function(keys, offline, callback) {
      _proxy.execute(
        'setAvailableOffline',
        { keys: keys, offline: offline },
        function(data) {
          handleCallback(callback, data);
        });
    };

    this.getPlaylists = function(callback) {
      _proxy.execute(
        'getPlaylists',
        null,
        function(data) {
          handleCallback(callback, data);
        });
    };

    this.createPlaylist = function(opt, callback) {
      _proxy.execute(
        'createPlaylist',
        opt,
        function(data) {
          handleCallback(callback, data);
        });
    };

    this.addToPlaylist = function(playlistKey, trackKeys, callback) {
      _proxy.execute(
        'addToPlaylist',
        {
          playlist: playlistKey,
          tracks: trackKeys
        },
        function(data) {
          handleCallback(callback, data);
        });
    };
  };

  return Rdio;
});
