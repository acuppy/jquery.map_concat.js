describe "#mapConcat", ->
  it "should work without arguments", ->
    expect($.mapConcat("string", ->
        'a'
      )
    ).toEqual('aaaaaa')

  it "should pass in a char as the first arg and index as the second", ->
    expect($.mapConcat("string", (char, index) ->
        if index > 2 then 'b' else 'a'
      )
    ).toEqual('aaabbb')

  it "should return the char if the callback returns null", ->
    expect($.mapConcat("string", (char, index) ->
        if index > 2 then 'c'
      )
    ).toEqual('strccc')