import { useEffect, useState } from 'react';

import { pickRandomQuestions, QuestionsType } from './assets/utils';

function App() {
	const [start, setStart] = useState<boolean>(false);
	const [showScore, setShowScore] = useState<boolean>(false);
	const [questions, setQuestions] = useState<QuestionsType[]>([]);
	const [userAnswers, setUserAnswers] = useState<string[]>([]);
	const [count, setCount] = useState<number>(0);
	const [currQuestion, setCurrQuestion] = useState<number>(0);

	// downloading random questions
	useEffect(() => {
		QuestionFetch();
	}, []);

	const handleAnswerChange = (newAnswer: string, questionNumber: number) => {
		setUserAnswers((prevState) => {
			const updatedAnswers = [...prevState];
			updatedAnswers[questionNumber] = newAnswer;
			return updatedAnswers;
		});
	};
	
	const handleRestart = () => {
		QuestionFetch();
		setUserAnswers([]);
		setCount(0);
		setCurrQuestion(0);
		setShowScore(!showScore);
		setStart(!start);
	};
	const handleNext = (questionNumber: number) => {
		//  checking if its last question and ending quiz statement
		if (questionNumber >= questions.length - 1) {
			userAnswers.forEach((answer, index) => {
				if (answer === questions[index].answers[questions[index].valid]) {
					setCount((prev) => prev + 1);
				}
			});
			setShowScore(!showScore);
		}
		setCurrQuestion(currQuestion + 1);
	};

	const QuestionFetch = () => {
		const q = pickRandomQuestions(5);
		setQuestions(q);
	};

	return (
		<main className='relative px-5 font-arialRounded flex w-full h-screen justify-center bg-[#BA4949] items-center'>
			{!start && (
				<div className='font-arialRounded text-center'>
					<h1 className='text-8xl font-arialRoundedBold'>QUIZ</h1>
					<p className='mt-2 text-2xl'>Wózki widłowe</p>
					<button
						className='bg-white text-2xl rounded-xl font-bold text-[#Ba4949] mt-6 px-6 py-3 active:pt-1 transition'
						type='button'
						onClick={() => setStart(!start)}
					>
						START
					</button>
				</div>
			)}

			{start && (
				<>
					{questions.map((q, i) => {
						if (i === currQuestion) {
							return (
								<div
									className='flex md:min-w-[650px] max-w-[650px] flex-col gap-4'
									key={i}
								>
									<div className='h-10'></div>
									<h3 className='absolute top-5 right-1/2 translate-x-1/2 text-3xl md:top-10 '>
										Pytanie {currQuestion + 1} / {questions.length}
									</h3>
									<p className='font-sans font-medium rounded-lg text-lg bg-[#C15C5C] p-2 md:text-xl md:p-4'>{q.question}</p>
									<div className='flex flex-col gap-3 items-start'>
										{q.answers.map((answer, i) => {
											return (
												<label
													key={i}
													className='flex font-mono cursor-pointer bg-white rounded-lg w-full px-3 py-2  md:text-xl md:p-4'
												>
													<input
														key={i}
														className='mr-4  cursor-pointer'
														name='question'
														checked={userAnswers[currQuestion] === answer}
														type='radio'
														value={answer}
														onChange={() => handleAnswerChange(answer, currQuestion)}
													/>
													{answer}
												</label>
											);
										})}
										{q.img && (
											<img
												className='rounded-lg'
												src={q.img}
												alt=''
											/>
										)}
									</div>
									<div className='flex justify-between'>
										<button
											onClick={() => {
												if (currQuestion > 0) {
													setCurrQuestion((prev) => prev - 1);
												}
											}}
											type='button'
											className='bg-white text-2xl rounded-xl font-bold text-[#Ba4949] px-6 py-3 active:pt-1 transition'
										>
											Wstecz
										</button>
										<button
											onClick={() => handleNext(currQuestion)}
											type='button'
											className='bg-white text-2xl rounded-xl font-bold text-[#Ba4949] px-6 py-3 active:pt-1 transition'
										>
											{currQuestion + 1 === questions.length ? 'Zakończ' : 'Dalej'}
										</button>
									</div>
								</div>
							);
						}
					})}
				</>
			)}

			{showScore && (
				<div className='text-center bg-[#C15C5C] py-6 rounded-xl text-xl md:px-10 md:py-10 md:text-2xl '>
					<h2 className='font-arialRoundedBold text-4xl text-center'>Gratulacje!</h2>
					<p className='my-5 '>
						Odpowiedziałeś poprawnie na {count} z {questions.length} pytań
					</p>
					<p className={`${count >= 11 ? 'text-green-400' : 'text-blue-700'} font-bold text-3xl`}>
						Test {count >= 11 ? 'zaliczony' : 'niezaliczony'}
					</p>
					<button
						onClick={handleRestart}
						
						className='bg-white rounded-xl mt-3 font-bold text-[#Ba4949] px-3 py-1.5 md:px-4 md:py-2 md:mt-5 active:pt-1 transition'
					>
						Ponów próbę
					</button>
				</div>
			)}
		</main>
	);
}

export default App;
