
function selSort(array){
    for(var i=0;i<array.length;i++){
        var min=i;
        for(var j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min=j;
            }
        }
        swap(array,i,min);
    }
    return array;
}

function swap(arr,i,min){
    var temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}

var a=[4,3,6,1];
var sortedArray=selSort(a);
console.log(sortedArray);



//min=3
//4 3 6 1
//1 3 6 4
//j->3 6 1
//min=3
