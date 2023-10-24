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

export function init<T extends { new (...args: any[]): {} }>(constructor: T) {
  console.log(constructor);

  return class extends constructor {
    total = 10;
    description = "New property";
  };
}

export function frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

export function confirm(status: boolean) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (status) {
        const result = original.apply(this, args);

        return result;
      } else {
        return 0;
      }
    }
  }
}

export function prefix(label: string) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = () => {
      return value;
    }

    const setter = (next: string) => {
      console.log(`updating value...`);
      value = `${label} ${next}`;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}
