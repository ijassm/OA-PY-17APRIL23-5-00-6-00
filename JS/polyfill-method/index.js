const arrayProto = Array.prototype;

// Array.prototype.myMap = () => {};

if (!arrayProto.map) {
  arrayProto.map = function (logicFunc) {
    const output = [];
    for (let i = 0; i < this.length; i++)
      output.push(logicFunc(this[i], i, this));
    return output;
  };
} else {
  console.log(Boolean(!arrayProto.map), "map already exists");
}

if (!arrayProto.filter) {
  arrayProto.filter = function (cb) {
    const output = [];
    for (let i = 0; i < this.length; i++)
      if (cb(this[i], i, this)) output.push(this[i]);
    return output;
  };
} else {
  console.log(Boolean(!arrayProto.filter), "filter already exists");
}

if (!arrayProto.reduce) {
  arrayProto.reduce = function (cb, initialValue) {
    let acc = initialValue ?? this[0];
    if (initialValue) {
      for (let i = 0; i < this.length; i++) acc = cb(acc, this[i], i, this);
    } else {
      for (let i = 1; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
      }
    }

    return acc;
  };
} else {
  console.log(Boolean(!arrayProto.reduce), "reduce already exists");
}

const arr = [1, 3, 5];

// console.log(arr.myMap);
// console.log(Array.prototype.myMap);
