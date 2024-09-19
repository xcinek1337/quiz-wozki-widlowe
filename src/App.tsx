import { useState } from 'react';

import { utdPart3 } from './assets/udt';
import { pickRandomQuestions } from './assets/utils';

function App() {
	const [start, setStart] = useState<boolean>(false);
	const [score, setScore] = useState<boolean>(false);
	const [answer, setAnswer] = useState<string>('');
	const [count, setCount] = useState<number>(0);
	const [currQuestion, setCurrQuestion] = useState<number>(0);

	const questions = pickRandomQuestions(5, utdPart3);
	
	const handleNext = (numbQuestion: number) => {
		if (answer === questions[numbQuestion].answers[questions[numbQuestion].valid]) {
			setCount(count + 1);
		}
		if (numbQuestion >= questions.length - 1) {
			setScore(!score);
		}
		console.log(`hi`);

		setCurrQuestion(currQuestion + 1);
	};
	return (
		<main className='flex w-full h-screen justify-center bg-[#BA4949] items-center'>
			{!start && (
				<div>
					<h1>QUIZ</h1>
					<button
						type='button'
						onClick={() => setStart(!start)}
					>
						start
					</button>
				</div>
			)}
			{start && (
				<>
					{questions.map((q, i) => {
						if (i === currQuestion) {
							return (
								<div
									className='flex flex-col gap-4'
									key={i}
								>
									<h3>
										Pytanie {i + 1} / {questions.length}
									</h3>
									<p>{q.question}</p>
									<div className='flex flex-col gap-0.5 items-start'>
										{q.answers.map((a, i) => {
											return (
												<label
													key={i}
													className='flex cursor-pointer border border-gray-600 w-full pr-4'
												>
													<input
														key={i}
														className='mr-4 cursor-pointer'
														name='question'
														type='radio'
														onChange={() => setAnswer(a)}
													/>
													{a}
												</label>
											);
										})}
										{q.img && (
											<img
												className='mt-4'
												src={q.img}
												alt=''
											/>
										)}
									</div>
									<div>
										<button
											onClick={() => {
												if (currQuestion > 0) {
													setCurrQuestion((prev) => prev - 1);
												}
											}}
											type='button'
											className='border-2 px-4 py-2'
										>
											Wstecz
										</button>
										<button
											onClick={() => handleNext(i)}
											type='button'
											className='border-2 px-4 py-2'
										>
											Dalej
										</button>
									</div>
								</div>
							);
						}
					})}
				</>
			)}
			{score && (
				<div>
					<h2>Gratulacje</h2>
					<p>Odpowiedziałeś poprawnie na {count} z 15 pytań</p>
					<p>test {count >= 11 ? 'zaliczony' : 'niezaliczony'}</p>
				</div>
			)}
		</main>
	);
}

export default App;
