require(['config'], function(Config) { 
  describe('Config', function() {
    describe('endpoint', function() {
      it('should not be empty', function() {
        expect(Config.endpoint).not.toBe('');
      });
    });
  });
});
