function bubble(arr){
    for(var i = 0;i<arr.length-1;i++){
        for (var j = i+1; j < arr.length; j++) {
            var temp = arr[i];
            if (arr[j]<arr[i]) {
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

function func(){
    alert("方法");
}