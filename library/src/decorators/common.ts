export function Logger(message: string) {
  // console.log(`Message: ${message}`);

  return function (target: any) {
    // console.log(`Decorated class: ${target}`);
    // console.log(target);
  }
}

export function connect() {
  console.log('Decorator CONNECT --> evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorator CONNECT  --> invoked');
  };
}

export function counter() {
  console.log('Decorator COUNTER --> evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorator COUNTER  --> invoked');
  };
}

export function test() {
  console.log('Decorator TEST --> evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorator TEST  --> invoked');
  };
}