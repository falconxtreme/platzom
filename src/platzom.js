export default function platzom(str){
	let translation = str;

	if(str.toLowerCase().endsWith("ar")){
		translation = str.slice(0, -2);
	}

	if(str.toLowerCase().startsWith("z")){
		translation += "pe";
	}

	const length = translation.length;
	if(length>=10){
		const firstHalf = translation.slice(0,length/2)
		const secondHalf = translation.slice(length/2,length)
		translation = `${firstHalf}-${secondHalf}`;
	}

	const reverse = str => str.toLowerCase().split('').reverse().join('')

  	const minMay = str => str.split('').map(c => str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')

  	translation = str == reverse(str) ? minMay(str) : translation

	return translation;
}