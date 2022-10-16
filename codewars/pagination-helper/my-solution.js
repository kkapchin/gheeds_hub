//not solved yet

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this._collection = collection;
    this._itemsPerPage = itemsPerPage;
    this._counter = itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this._collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this._collection.length / this._itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if(pageIndex > this.pageCount()) {
      return -1;
    }
    return this._collection.slice(this._itemsPerPage * pageIndex - this._itemsPerPage, this._itemsPerPage * pageIndex)
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this._collection.length) {
      this._counter = this._itemsPerPage;
      return -1;
    } else if (itemIndex < this._counter) {
      this._counter = this._itemsPerPage;
      return (this._counter / this._itemsPerPage);
    } else {
      this._counter =+ this._itemsPerPage;
      this.pageIndex(itemIndex);
      console.log(this._counter)
    }
}
