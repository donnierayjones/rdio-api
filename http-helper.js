define(function() {

  var HttpHelper = function(settings) {
    var x = $.ajax; // alias

    this.post = function(method, args, callback) {
      x({
        type: 'POST',
        dataType: 'json',
        data: args,
        beforeSend: function(xhr){
          xhr.withCredentials = true;
        },
        contentType: 'application/x-www-form-urlencoded',
        url: settings.endpoint + '/' + method,
        success: function(data, success, xhr) {
          callback(data);
        }
      });
    };
  };

  return HttpHelper;
});
