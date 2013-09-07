$ = jQuery

$.mapConcat = (str, args...) ->
  separator = args.slice(0,1) if $.type(args[0]) == 'string' or $.type(args[0]) == 'regexp'
  separator or= ''
  chars = str.split(separator)
  rtn = []
  for char, i in chars
    rtn.push(args[0].call(str, char, i) or char)
 
  rtn.join('')