/**
 * complete "Clever Progammer Dictionary" for the programming concepts, it works as keyword-description engine, you define the list of words and their description and once somebody search for a given word it will display the descirption of the matched word
 * 
 */

class ValuePair {
  constructor(key, value, isDeleted = false) {
    this.key = key;
    this.value = value;
    this.isDeleted = isDeleted;
  }
}

class Dictionary {
  constructor(toStrFn = 'CleverProgammerDictionary') {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) {
    //returns true or false
    //->true if a set (word,meaning) added successfully to dictionary
    //->false if not added
  }

  get(key) {
    //return the value of that given key from the dictionary if found
  }

  hasKey(key) {
    //returns if the given key is in dictionary
  }

  remove(key) {
    //returns true or false
    //->true if word is is deleted
    //->false if not deleted
  }

  isEmpty() {
    //check if size() === 0;
  }

  size() {
    //return the length of the dictionary
  }

  clear() {
    //clear all words in dictionary
  }
}

var dictionary = new Dictionary();
dictionary.set('object', 'object is an instance of class');
dictionary.set(
  'class',
  'class is an object type, its a general template to create objects'
);
dictionary.set(
  'constructor',
  'is a unique function used to create instances of classes, it works as initializer for objects'
);
dictionary.set('oop', 'object oriented programming');
console.log(dictionary.get('oop'));

//make a test for all given methods
