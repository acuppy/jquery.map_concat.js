(function() {

  describe("#mapConcat", function() {
    it("should work without arguments", function() {
      return expect($.mapConcat("string", function() {
        return 'a';
      })).toEqual('aaaaaa');
    });
    it("should pass in a char as the first arg and index as the second", function() {
      return expect($.mapConcat("string", function(char, index) {
        if (index > 2) {
          return 'b';
        } else {
          return 'a';
        }
      })).toEqual('aaabbb');
    });
    return it("should return the char if the callback returns null", function() {
      return expect($.mapConcat("string", function(char, index) {
        if (index > 2) return 'c';
      })).toEqual('strccc');
    });
  });

}).call(this);
