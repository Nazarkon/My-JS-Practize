function Range(first,second){
    if(second - first === 2){

        return [first+1]
    }else{
        let list  = Range(first,second - 1);
        list.push(second - 1);
        return list
    }
}
console.log(Range(2,9))