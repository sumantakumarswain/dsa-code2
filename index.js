class Queue {
    constructor(){
        this.item = []
        this.length = 0
        this.enqueue = function(item){
          var enqueued =  this.item[this.length] = item;
            this.length++
            return enqueued
        }
        this.dequeue = function(){
           var dequeued = this.item.splice(0,1);
            this.length--
            return dequeued
        }
        this.front = function(){
            return this.item[0]
        }
    }
}

var queue = new Queue();

function findMaxValOfArray(arr,k){

   for(var i = 0 ; i < arr.length  ; i++){
    if(arr.length >= k){
       queue.enqueue(arr.slice(i,k))
      k++
    } 
  }
   var maximumValue = [];

  for(var i = 0 ; i < queue.item.length; i++){
     var max = 0;
     for (var j = 0; j < queue.item[i].length; j++){
      if(max < queue.item[i][j]){
         max = queue.item[i][j]
      }
    }
    maximumValue.push(max)
  }
 console.log(maximumValue) 

}

findMaxValOfArray([1,2,3,2,3,4,3,5,8,7,9],3)


