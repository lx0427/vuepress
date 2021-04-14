# dart

## 变量定义

> 自动推断数据类型

```dart
// 变量定义
var c = 3;

// 常量定义
const a = 1;

// 单次赋值
final b;
b = 2;
```

## 类型定义

> [API 构造函数文档](https://api.dart.dev/stable/2.12.2/dart-core/dart-core-library.html#classes)

```dart
int a = 1;
double b = 2.2;
double b = 2;
String c = 1;
String str = '''
多行文本
输出
''';
bool d = true;
List e = [1, 2, 3];
List<int> e = [1, 2, 3];
Map arguments = {'argA': 'hello', 'argB': 42};
Map<String, dynamic> arguments = {'argA': 'hello', 'argB': 42};
```

### 控制台输出

```dart
int a = 1;
int b = 2;
int str = 'hello';
// 字符串拼接
print("$a$str ${a+b}")
```

### 类型检查

```dart
int a = 1;
print(a.runtimeType)
```

### 类型判断

```dart
int a = 1;
print(a is int)
```

### 类型转换

```dart
String a = "1.2";
print(double.parse(a).runtimeType);

String b = "1";
print(double.parse(b).runtimeType);
```

## 运算符

```dart
int a = 7;
int b = 3;
print(a%/b); // 取余
print(a~/b); // 取整
print(a/b); // 除

// 连缀操作 ..
Personp1=newPerson();
p1..name='zs' // 不要加分号
..age=18;
```

## 数组操作

> [文档地址](https://api.dart.dev/stable/2.12.2/dart-core/List-class.html)

```dart
List list = [1, 2, 3]
// 数组新增
list.add(4);
list.addAll([5,6])

// 数组翻转
List rlist = list.reversed.toList()
```

## Map 操作

> [文档地址](https://api.dart.dev/stable/2.12.2/dart-core/Map-class.html)

```dart
Map map1 = {'argA': 'hello', 'argB': 42};
// 属性访问
print(map1.argA); // X 不可以使用这种方式
print(map1['argA']);

// 新增
map1.addAll({
  "age":38,
  "school":"清华"
})
print(map1);
```

## 函数使用

```dart
void main() {
  void printName(age,name){
    print("$age $name")
  }

  printName(18,"张飞");
}
```

### 命名参数

```dart
void main() {
  void printName({age,name,school="清华"}){
    print("$age $name")
  }

  printName(name:"张飞", age:18);
}
```

### 可选参数

```dart
void main() {
  void printName(city,[age,name,school="清华"]){
    print("$age $name")
  }

  printName("北京");
}
```

## async await Future

```dart
Future buyHouse() {
  Future result = Future(() {
    print("buy a house");
  });

  return result;
}

void main() async {
  print('商量结婚');
  print('买完房再谈');
  await buyHouse();
  print('商量婚期');
}
```

## 类

```dart
class Vehicle {
  int? wheels = 4;

  void getWheelsNum() {
    print(wheels);
  }
}
```

### 构造函数

```dart
class Person {
  String? name;
  int age = 18;
  int gender = 1;

  // Person(this.name, this.age, this.gender);
  Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

Person pe = new Person('das', 16, 0);
```

### 抽象类 extends & implements

> 抽象类通过 abstract 关键字来定义<br />
> 抽象类中不实现方法体的方法就叫抽象方法<br />
> 如果某个类 extends 一个抽象类，则必须实现抽象类中的抽象方法<br />
> 如果某个类 implements 一个抽象类,则必须实现抽象类中的所有属性和方法<br />
> 抽象类不能被 new（实例化）,只有继承或实现它的子类可以<br />

```dart
abstract class Vehicle {
  int? wheels = 4;
  // 抽象方法
  void getWheelsNum();
}
```

extends

> 复用抽象类里的方法，并且希望用抽象方法约束子类实现，就可以用 extends

```dart
class Car extends Vehicle {
  @override
  void getWheelsNum() {
    print("car has $wheels wheels");
  }
}
Car car1 = new Car();
car1.getWheelsNum();
```

implements

> 只是把抽象类当标准,就用 implements

```dart
class Car implements Vehicle {
  int? wheels;
  Car(this.wheels);

  @override
  void getWheelsNum() {
    print("car has $wheels wheels");
  }
}
Car car1 = new Car(6);
car1.getWheelsNum();
```

### 私有变量

> \_wheels: 私有属性<br />
> 需要分文件<br />

```dart
class Vehicle {
  int? _wheels = 4;

  void getWheelsNum() {
    print(_wheels);
  }
}
```

### 静态属性及静态方法

> 非静态方法可以访问静态或非静态成员<br />
> 静态方法只可以访问静态成员<br />

```dart
class Vehicle {
  static wheels = 4;

  static void getWheelsNum() {
    print(_wheels);
  }
}

// 调用
Vehicle.getWheelsNum()
```

### show & hide

> 部分导入

```dart
import 'Vehicle.dart' show Car;

import 'Vehicle.dart' hide Vehicle;
```

### 第三方库

内置库

```dart
import'package:flutter/material.dart';
import'dart/math';
```

[外部库 https://pub.dev/packages](https://pub.dev/packages)
