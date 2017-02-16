export interface ObjectLiteral {
  [key: string]: any;
}

export type ObjectType<T> = {new (): T}|Function;

export type PropertyKey = string | number | symbol;

export interface ObjectConstructor {
  new (value?: any): Object;
  (): any;
  (value: any): any;

  /** A reference to the prototype for a class of objects. */
  readonly prototype: Object;
  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   */
  assign<T, U>(target: T, source: U): T & U;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   */
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The first source object from which to copy properties.
   * @param source2 The second source object from which to copy properties.
   * @param source3 The third source object from which to copy properties.
   */
  assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more source objects from which to copy properties
   */
  assign(target: any, ...sources: any[]): any;

  /**
   * Returns the prototype of an object.
   * @param o The object that references the prototype.
   */
  getPrototypeOf(o: any): any;

  /**
   * Sets the prototype of a specified object o to  object proto or null. Returns the object o.
   * @param o The object to change its prototype.
   * @param proto The value of the new prototype or null.
   */
  setPrototypeOf(o: any, proto: any): any;

  /**
   * Returns an array of all symbol properties found directly on object o.
   * @param o Object to retrieve the symbols from.
   */
  getOwnPropertySymbols(o: any): symbol[];

  /**
   * Returns the names of the own properties of an object.
   * The own properties of an object are those that are defined directly
   * on that object, and are not inherited from the object's prototype.
   * The properties of an object include both fields (objects) and functions.
   * @param o Object that contains the own properties.
   */
  getOwnPropertyNames(o: any): string[];

  /**
   * Gets the own property descriptor of the specified object.
   * An own property descriptor is one that is defined directly on the object and is not
   * inherited from the object's prototype.
   * @param o Object that contains the property.
   * @param p Name of the property.
   */
  getOwnPropertyDescriptor(o: any, propertyKey: PropertyKey): PropertyDescriptor;

  /**
   * Creates an object that has null prototype.
   * @param o Object to use as a prototype. May be null
   */
  create(o: null): any;

  /**
   * Creates an object that has the specified prototype, and that optionally contains specified properties.
   * @param o Object to use as a prototype. May be null
   */
  create<T>(o: T): T;

  /**
   * Creates an object that has the specified prototype, and that optionally contains specified properties.
   * @param o Object to use as a prototype. May be null
   * @param properties JavaScript object that contains one or more property descriptors.
   */
  create(o: any, properties: PropertyDescriptorMap): any;

  /**
   * Adds a property to an object, or modifies attributes of an existing property.
   * @param o Object on which to add or modify the property. This can be a native JavaScript
   * object (that is, a user-defined object or a built in object) or a DOM object.
   * @param p The property name.
   * @param attributes Descriptor for the property. It can be for a data property or an accessor
   *  property.
   */
  defineProperty(o: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): any;

  /**
   * Adds one or more properties to an object, and/or modifies attributes of existing properties.
   * @param o Object on which to add or modify the properties.
   * This can be a native JavaScript object or a DOM object.
   * @param properties JavaScript object that contains one or more descriptor objects.
   * Each descriptor object describes a data property or an accessor property.
   */
  defineProperties(o: any, properties: PropertyDescriptorMap): any;

  /**
   * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  seal<T>(o: T): T;

  /**
   * Prevents the modification of existing property attributes and values,
   * and prevents the addition of new properties.
   * @param o Object on which to lock the attributes.
   */
  freeze<T>(o: T): T;

  /**
   * Prevents the addition of new properties to an object.
   * @param o Object to make non-extensible.
   */
  preventExtensions<T>(o: T): T;

  /**
   * Returns true if the values are the same value, false otherwise.
   * @param value1 The first value.
   * @param value2 The second value.
   */
  is(value1: any, value2: any): boolean;

  /**
   * Returns true if existing property attributes cannot be modified in an object
   * and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isSealed(o: any): boolean;

  /**
   * Returns true if existing property attributes and values cannot be modified in an object,
   * and new properties cannot be added to the object.
   * @param o Object to test.
   */
  isFrozen(o: any): boolean;

  /**
   * Returns a value that indicates whether new properties can be added to an object.
   * @param o Object to test.
   */
  isExtensible(o: any): boolean;

  /**
   * Returns the names of the enumerable properties and methods of an object.
   * @param o Object that contains the properties and methods.
   * This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  keys(o: any): string[];
  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods.
   * This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values<T>(o: { [s: string]: T }): T[];

  /**
   * Returns an array of values of the enumerable properties of an object
   * @param o Object that contains the properties and methods.
   * This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  values(o: any): any[];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods.
   * This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T>(o: { [s: string]: T }): [string, T][];

  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods.
   * This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries(o: any): [string, any][];
}