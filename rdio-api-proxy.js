define(['config', 'http-helper'], function(Config, HttpHelper) {
  var RdioApi = function(settings) {
    var _config = {};

    _.extend(_config, Config);

    if(settings !== undefined) {
      _.extend(_config, settings);
    }

    var httpHelper = new HttpHelper(_config);

    this.getEndpoint = function() {
      return _config.endpoint;
    };

    this.execute = function(method, args, callback) {
      httpHelper.post(method, args, function(data) {
        callback(data[1].result);
      });
    };
  };

  return RdioApi;
});
