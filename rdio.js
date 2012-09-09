define(['rdio-api-proxy'], function(RdioApiProxy) {
  var _proxy;

  var Rdio = function(rdioApiProxy) {
    _proxy = rdioApiProxy || new RdioApiProxy();

    this.search = function(query, types, callback) {
      _proxy.execute(
        'search',
        { query: query, types: types },
        function(data) {
          callback(data);
        });
    };

    this.addToCollection = function(keys, callback) {
      _proxy.execute(
        'addToCollection',
        { keys: keys },
        function(data) {
          callback(data);
        });
    };

    this.setAvailableOffline = function(keys, offline, callback) {
      _proxy.execute(
        'setAvailableOffline',
        { keys: keys, offline: offline },
        function(data) {
          callback(data);
        });
    };
  };

  return Rdio;
});
