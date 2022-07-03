let arr=[];
function insertNumberToArray(n) {
    // n là số nguyên cần nhập vào nhưng em cho làm tham số để thỏa mãn đề bài
    for (let i = 0; i < 6; i++) {
        let a = +prompt('Nhập 1 số');
        arr.push(a);
    }
    let index=+prompt('Nhập vị trí muốn chèn vào mảng');
    if(n<0 || n>arr.length){
        return arr;
    }else{
        arr.splice(index,0,n);
        return arr;
    }
}
console.log(insertNumberToArray(5));