export type QuestionsType = {
	question: string;
	answers: string[];
	valid: number;
	img?: string;
};

const pickRandomIndex = (howMany: number, array: QuestionsType[]) => {
	const newArray = array
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
		.splice(0, howMany);
	return newArray;
};
export const pickRandomQuestions = (howMany: number, ...arrays: QuestionsType[][]) => {
	const array = arrays[0];
	const array1 = pickRandomIndex(howMany, array);
	// const array2 = arrays[1];
	// const array3 = arrays[2];
	console.log('hehe', array1);
	return array1
};

// {
// 	question:
// 		'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony B:',
// 	answers: ['A. 3100 mm', 'B. 4836 mm', 'C. 4030 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
// 	valid: 2,
// 	img: '/pytanie207i208.png',
// },
