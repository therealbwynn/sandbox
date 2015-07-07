// create an immediate instantiated function, thus protecting the content
//(function() {

  // constructor function to fiddle around with
  /*var Collection = function() {};

  Collection.prototype.albums = function(arg) {
    var result = [];
    result.push[arg];
    return result;
  }*/

  // create an object literal with an array to help us determine the array length,
  // in practical application, this will be how we determine the number of
  // navigation list items to create, which can then get the pertinent information
  // to populate
  var collection = {
    albums: ['one', 'two', 'three', 'seventeen', 'forty two', 'four']
  };

  // create an anon function to get length of albums
  var albumLength = function() {
    return collection.albums.length;
  };

  // anon function to create container boxes
    // create for loop using albumLength method for sizing
      // get placement container
      // create div container element
      // assign class attribute to newly created element
      // propagate creation of boxes

  // function to build the list items -- in this case it's a p element, but
  // it's demonstrating proof of concept
  var buildIt = function() {
    // get number of container objects from above anon function
    // loop through the container elements
      // create semantic element for content placement
      // apply class attributes as necessary
      // append elements into containers
      // append content from collection object to set content
    for (var i = 0; i < albumLength(); i++) {
      // create element
      var placement = document.getElementById("placement");
          elem = document.createElement("p");

      // append content into its container
      placement.appendChild(elem);

      // set the class attribute to allow for styling of elements.
      elem.setAttribute("class", "navigation-boxes");

      // append content based on the collection.albums' array content.
      elem.innerHTML = collection.albums[i];
    }
  };

  // instantiate the buildIt function
  buildIt();

//}());
