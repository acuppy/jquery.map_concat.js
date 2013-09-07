(function() {
  var $,
    __slice = Array.prototype.slice;

  $ = jQuery;

  $.mapConcat = function() {
    var args, char, chars, i, rtn, separator, str, _len;
    str = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if ($.type(args[0]) === 'string' || $.type(args[0]) === 'regexp') {
      separator = args.slice(0, 1);
    }
    separator || (separator = '');
    chars = str.split(separator);
    rtn = [];
    for (i = 0, _len = chars.length; i < _len; i++) {
      char = chars[i];
      rtn.push(args[0].call(str, char, i) || char);
    }
    return rtn.join('');
  };

}).call(this);
