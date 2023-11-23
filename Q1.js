// let arr = [6,2,5,4,5,1,6];
let arr = [7, 2, 8, 9, 1, 3, 6, 5]

let width = 1;
let area = 0;
for(let i=1; i<=arr.length; i++){
    //pair formation,
    let pair = i;
    
    for(let j=0; j<=arr.length; j++){
        //divide the array based on the pair formation j , pair
        let arrToWorkOn = arr.slice(j,pair);

        //inorder to calculate the max area, we need to find out the lowest value from the array and multiply it will the lenght of the sliced array inorder to find the area
        let lowestNumb = Math.min(...arrToWorkOn);

        if(!isNaN(lowestNumb) || lowestNumb!=undefined || lowestNumb!=Infinity){
            let width = arrToWorkOn.length;
            let height = lowestNumb;
            let calArea = width*height;

            //compare @area and @calArea
            if((calArea > area) && (!isNaN(calArea))){
                area = calArea;
            }
        }
        
        pair++;
    }
}

console.log(area);