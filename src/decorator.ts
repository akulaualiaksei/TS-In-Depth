export const sealed = (p: string) => {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${p}`);

        Object.seal(target); // static
        Object.seal(target.prototype); // methods
        // Object.freeze(target.prototype); // methods
        // Object.freeze();
        // Object.preventExtensions();
    }
}

export const logger = <Tfunction extends Function>(target: Tfunction):Tfunction => {
    const newCunstructor: Function = function () {
        console.log('Creating new instance')
        console.log(target)

        this.age = 30;
    };

    newCunstructor.prototype = Object.create(target.prototype);

    newCunstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`)
    }

    return newCunstructor as Tfunction;
}

export const writable = (isWritable: boolean) => {
    // target Func of obj
    return function (target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(`Decor writable sets value isWritable ${isWritable}`)

        descriptor.writable = isWritable;
        return descriptor;
    }
}

export const timeout = (ms: number = 0) => {
    return (target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalMethod = descriptor.value;

        // TODO use Parametrs utility
        descriptor.value = (...args: any[0]) => {
            if (window.confirm('Are you sure?')) {
                setTimeout(()=> {
                    originalMethod.apply(this, args);
                }, ms);
            }
        }
        return descriptor;
    }
}

export const logParameter = (target: any, methodName: string, index: number): void => {
    const key = `${methodName}_decor_params_indexes`;

    if (Array.isArray(target[key])) {
        target[key].push(index)
    } else {
        target[key] = [index];
    }
}

export const logMethod = (target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value;

    descriptor.value = (...args: any[]) => {
        const key = `${methodName}_decor_params_indexes`;
        const indexes = target[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            });
        }

        // originalMethod.apply(this, args);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();
    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export const format = (pref: string = 'Mr./Mrs.') => {
    return (target: any, propertyName: string): void => {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    }
}

export function positiveInteger(target: any, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalSet = descriptor.set;

    descriptor.set = function(value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('invalid value');
        }

        originalSet.call(this, value);
    }

    return descriptor;
}
