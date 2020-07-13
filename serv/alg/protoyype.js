function checkClass(obj, class_name) {
    if (class_name === 'object') return true;
    if (!obj) return false;
    let proto = obj.__proto__.constructor;
    if (proto.name === class_name) return true;
    return checkClass(obj.__proto__, class_name);
}

function Person(name, age) {

    this.name = name;
    this.age = age;
    return this;
}

function Student(code) {
    this.__protp__ = new Person;
    this.code = code;
    return this;
}

let stu = new Student('1106655');

let isSuccess = checkClass(stu, 'Person');
console.log(isSuccess);