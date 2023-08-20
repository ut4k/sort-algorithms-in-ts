/**
 * @param numbersToSort {number[]} 並び変えたい数値の配列
 * @return {number[]} 昇順に並び替え後の数値の配列
 */
function quickSort(numbersToSort: number[]): number[] {
    //長さ1以下ならそのまま返す
    if (numbersToSort.length <= 1) {
        return numbersToSort;
    }
    const pivot = numbersToSort[0]; //先頭要素をピボットにする
    const lt = numbersToSort.filter(x => pivot > x) //ピボットより小さい要素
    const gt = numbersToSort.filter(x => pivot < x) //ピボットより大きい要素

    //※「...」 ---> Spread syntax (https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    //ピボットより小さい要素 + ピボット自体 + ピボットより大きい要素を連結する
    return [...quickSort(lt), pivot, ...quickSort(gt)];
}

// 実行例
const exampleInput: number[] = [31, 22, 50, 38, 75, 66, 11, 25, 12, 99, 41, 51, 21, 48];
const result: number[] = quickSort(exampleInput);
console.log(result);

// 正しく並び替えられたか承認する
const want: number[] = [11, 12, 21, 22, 25, 31, 38, 41, 48, 50, 51, 66, 75, 99];
console.assert(JSON.stringify(want) === JSON.stringify(result), "Error: not sorted as expected!");
