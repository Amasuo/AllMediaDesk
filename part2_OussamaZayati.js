const IncreasingNum = ( start,  out,  n, tab) =>
    {
        const arr = [...tab];
        if (n == 0)
        {
            tab.push(parseInt(out));
        }
        for (let i = start; i <= 9; i++)
        {
            let str = out + i.toString();
            IncreasingNum(i + 1, str, n - 1,tab);
        }
        return tab;
    }

const main = () => {
    const arr = IncreasingNum(0, " ", 2,[]);
    const inPut = 43; 
    const array = Array.from(String(inPut), Number);
    const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);
    if(isSorted(array)){
        console.log(inPut);
        return;
    }
    let minDiff = Infinity;
    let outPut = arr[0];
    arr.map(e =>{
        if(inPut-e<minDiff && inPut-e>0){
            minDiff = inPut-e
            outPut = e;
        }
    })
    console.log(outPut);
}
main();

