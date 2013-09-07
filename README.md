## Usage

    $.mapConcat("string", function(){
      return 'a'
    }); => "aaaaaa"

    $.mapConcat("string", function(character, index){
      if (index > 2) return 'c';
    }); => "strccc"