/**
 * @param numbersToSort {number[]} 並び変えたい数値の配列
 * @return {number[]} 昇順に並び替え後の数値の配列
 */
function bogoSort(numbersToSort: number[]): number[] {
    //ソート完了有無を判断する
    const sorted = (arr: number[]): boolean => {
        for(var i = 1; i < arr.length; i++){
            //前のインデックスの要素が、現在のインデックスの要素より大きい = ソート未完了
            //ex. [..., 3, 2, ...]の順序が存在したらNG
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        //すべて昇順になっていればソート完了
        return true;
    }
    //配列をシャッフルする (Fisher-Yatesアルゴリズム)
    const shuffle = (arr: number[]): number[] => {
        let l = arr.length
        while(l) {
            let i = Math.floor(Math.random() * l--); //長さから1引いた数値から、ランダムなインデックスを決める
            [arr[l], arr[i]] = [arr[i], arr[l]]; //ランダムなインデックスと長さ-1を入れ替え
        }
        return arr;
    }

    //運よくソートが完了するまでランダムに並べ替続ける...
    let shuffleCount = 0;
    while(!sorted(numbersToSort)) {
        numbersToSort = shuffle(numbersToSort);
        // console.log(numbersToSort);
        ++shuffleCount;
    }
    console.log("ソート完了まで" + shuffleCount + "回シャッフルしました。"); 
    return numbersToSort
}

// 実行例
// const exampleInput: number[] = [31, 22, 50, 38, 75, 66, 11, 25, 12, 99, 41, 51, 21, 48];
const exampleInput: number[] = [4, 1, 3, 5, 2, 6, 8, 7];
const result: number[] = bogoSort(exampleInput);
console.log(result);

// 正しく並び替えられたか承認する
const want: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.assert(JSON.stringify(want) === JSON.stringify(result), "Error: not sorted as expected!");
