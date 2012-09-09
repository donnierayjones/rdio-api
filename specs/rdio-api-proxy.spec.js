require(['config', 'rdio-api-proxy'], function(Config, RdioApiProxy) {
  describe('RdioApiProxy', function() {
    it('uses values passed in', function() {
      var rdioApi = new RdioApiProxy({
        endpoint: 'localhost:9283'
      });

      expect(rdioApi.getEndpoint()).toBe('localhost:9283');
    });

    it('uses config if no consumer info provided', function() {
      var rdioApi = new RdioApiProxy();

      expect(rdioApi.getEndpoint()).toBe(Config.endpoint);
    });
  });
});
