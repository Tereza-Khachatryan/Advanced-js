var a = {
    valueOf: function() {
        return 'hello';
    }
}; // NaN


var b = {
    valueOf: function() {
        return 3;
    }
};  // 3


var c = {
    valueOf: function() {
        return new Number(3);
    }
};  //    NaN

var d = {
    toString: function() {
        return 123;
    }
}; // '123'

var e = {
    toString: function() {
        return new Number(3);
    }
};  // NaN

 console.log(String(e))




