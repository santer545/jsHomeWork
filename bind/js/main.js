function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var connectObject = {
  option: 'Hello world',
  sayHi: function() {
    console.log(this.option);
  }
};

setTimeout(myBind(connectObject.sayHi, connectObject), 1000);