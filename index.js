
const merge = (lA, rA) => {

	let output = [];
	
	while(lA.length > 0 && rA.length > 0) {

		output.push(lA[0] < rA[0] ? lA.shift() : rA.shift());
	}

	return [...output, ...lA, ...rA];

};

const mergeSort = arr => {
	if(arr.length <= 1) {
		return arr;
	}

	const mid = parseInt(arr.length / 2);

	return merge(
		mergeSort(arr.slice(0, mid)),
		mergeSort(arr.slice(mid))
	);
};

const inputArr = [11, 43, 1223, 3083,
				3, 5, 42, 6, 3, 434, 
				8, 482, 434, 2];

console.log('Input Array', inputArr);

const res = mergeSort(inputArr);

console.log('Result: ', res);


/**
 * I implemented this version of Merge Sort based on this video
 * that I found in YouTube: 
 * https://www.youtube.com/watch?v=x_Z9FcAPmbk&t=935s
 */