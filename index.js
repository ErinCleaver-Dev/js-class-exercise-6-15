/**
 * complete "Clever Progammer Dictionary" for the programming concepts, it works as keyword-description engine, 
 * you define the list of words and their description and once somebody search for a given word it will display 
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

  /*
  # used to add a key and value pair to a dictionary
  # first checks to see if it has a value
  # 

  */

  set(key, value) {
    //returns true or false
    //->true if a set (word,meaning) added successfully to dictionary
    if(key != null || value != null) {
      this.table[key] = new ValuePair(key, value)
      return true;
    } else {
      return false;
    }
    //->false if not added
  }

  get(key) {
    for(var term in this.table) {
     if(term == key) {
      return this.table[term].value;
     }
    }
    //return the value of that given key from the dictionary if found
    
  }

  hasKey(key) {
    let keyFound =false;
    for(var term in this.table) {
      if(term == key) {
       keyFound = true;
      }
     }
    return keyFound
    //returns if the given key is in dictionary
  }

  remove(key) {

    if(this.hasKey(key)) {
      delete this.table[key];
      return true;
    } else {
      return false;
    }
    //returns true or false
    //->true if word is is deleted
    //->false if not deleted
  }

  isEmpty() {
    if(this.size() === 0) {
      return true;
    } else {
      return false;
    }
    //check if size() === 0;
  }

  size() {
    let count = 0;
    for(var term in this.table) {
      count++;
    }

    return count;
    //return the length of the dictionary
  }

  clear() {
    this.table = {};
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
console.log(`Testing for class key ${dictionary.hasKey('object')}`);
console.log(`Testing for class key ${dictionary.hasKey('apple')}`);
console.log(`The size is ${dictionary.size()}`);
console.log(`The size is ${dictionary.isEmpty()}`);
console.log(`The removed is ${dictionary.remove("")}`);
console.log(`The size is ${dictionary.size()}`);
console.log(`The removed is ${dictionary.remove('class')}`);
console.log(`The size is ${dictionary.size()}`);
dictionary.clear()
console.log(`The dictionary is empty ${dictionary.isEmpty()}`);



