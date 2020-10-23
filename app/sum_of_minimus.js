function getRndNumber(min, max){
    min=Math.floor(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1) ) + min;
}
function getRndArray(rows, columns){
    let arr = new Array();

    for (let i = 0; i < rows; i++) {
        let arr_2dim = new Array();
        arr.push(arr_2dim);
        for (let j = 0; j < columns; j++) {
            arr_2dim.push(getRndNumber(1, 100));

        }
    }
    return arr;
}
function getRndArray_1dim(length){
    let arr = new Array();
    for (let i = 0; i < length; i++) {
        arr.push(getRndNumber(1,100));
    }
    return arr;
}
function sum_of_minimums() {
    rows = prompt('Type number of rows');
    columns = prompt('Type number of columns');
    let arr = getRndArray(rows, columns);
    alert(JSON.stringify(arr));
    let sum_of_min = 0;
    let min_in_row = 0;
    for (let i = 0; i < rows; i++) {
        min_in_row = arr[i][0];
        for (let j = 0; j < columns; j++) {
            if (min_in_row > arr[i][j]) {
                min_in_row = arr[i][j];
            }
        }
        sum_of_min += min_in_row;
    }
    alert(`Sum of minimums = ${sum_of_min}`);
}
function get_two_oldest_ages(incoming_arr){
    let arr = incoming_arr;
    let outcoming_arr=new Array(0);
    let index = 0;
    let max_value;
    while(outcoming_arr.length!=2){
        max_value=0;
        for (let i = 1; i < arr.length; i++) {
        if (max_value<arr[i]){
            max_value=arr[i];
            index=i;
        }
    }
        outcoming_arr.push(max_value);
        delete arr[index];
        //arr.splice(index, 1);
    }
    if (outcoming_arr[0]>outcoming_arr[1]){
        outcoming_arr.reverse();
    }
    return outcoming_arr;
}
function two_oldest_ages(){
    let length;
    do {
        length = parseInt(prompt('Type amount of elements:'));
    }while (length<2);
    let arr = getRndArray_1dim(length);
    alert(JSON.stringify(arr));
    let arr2 = get_two_oldest_ages(arr);
    alert(JSON.stringify(arr));
    alert(JSON.stringify(arr2));

}
function shortest_word(){
    let str = prompt('type your string');
    let str_split = str.split(' ');
    let min_str = "";
    let min_length = str.length;
    for (let i = 1; i < str_split.length; i++) {
        if (min_length>str_split[i].length){
            min_length=str_split[i].length;
            min_str=str_split[i];
        }
    }
    alert(`${min_str} - the shortest word\nLength of this word is ${min_length}`);
}
