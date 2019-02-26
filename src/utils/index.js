export function sortOffersObject (array, key){
    function compare(a,b) {
        if (a.sortIndexes[key] < b.sortIndexes[key])
            return -1;
        if (a.sortIndexes[key] > b.sortIndexes[key])
            return 1;
        return 0;
    }
    return array.sort(compare);
}
