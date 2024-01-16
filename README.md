# TOP-HashMap
Implementing a hash map data structure in Javascript, as part of The Odin Project Curriculum

JavaScript’s dynamic nature of array allow us to insert and retrieve indexes that are outside our array size range. Example: if we create an array of size 16 to be our buckets size, nothing stopping us from storing items at index 500. This defeats the purpose we are trying to demonstrate, so we need to put some self restriction to work around this.

We are going to throw an error if this occurs.
