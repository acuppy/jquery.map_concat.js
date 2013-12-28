## jQuery Map Concat
[![Code Climate](https://codeclimate.com/github/acuppy/jquery.map_concat.js.png)](https://codeclimate.com/github/acuppy/jquery.map_concat.js)

## Usage

    $.mapConcat("string", function(){
      return 'a'
    }); => "aaaaaa"

    $.mapConcat("string", function(character, index){
      if (index > 2) return 'c';
    }); => "strccc"
