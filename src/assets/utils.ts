import { utdPart1, utdPart2, utdPart3 } from './udt';

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
export const pickRandomQuestions = (howManyPerSection: number) => {
	const array1 = pickRandomIndex(howManyPerSection, utdPart1);
	const array2 = pickRandomIndex(howManyPerSection, utdPart2);
	const array3 = pickRandomIndex(howManyPerSection, utdPart3);
	const result = array1.concat(array2).concat(array3);
	return result;
};
