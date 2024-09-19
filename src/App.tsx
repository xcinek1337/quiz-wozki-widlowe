import { useState } from 'react';

const questions = [
	{
		question: 'Obsługującemu nie wolno:',
		answers: [
			'A. Podnosić ładunków, których masy nie potrafi określić',
			'B. Kontrolować stanu technicznego urządzenia',
			'C. Stosować się do zapisów zawartych w instrukcji eksploatacji',
			'D. Dokonywać oględzin zewnętrznych urządzenia',
		],
		valid: 0,
	},
	{
		question: 'Podczas próby hamulca zasadniczego maszt powinien być w pozycji:',
		answers: [
			'A. Pozycja masztu nie ma znaczenia',
			'B. Przechylony „na siebie”',
			'C. Przechylony „od siebie”',
			'D. Pionowej',
		],
		valid: 0,
	},
	{
		question: 'mroczny rycerz',
		answers: ['bialego', 'czerwonego', 'zoltego', 'niebieskiego'],
		valid: 0,
	},
	{
		question: 'Lorem ipsimum haha',
		answers: ['bialego', 'czerwonego', 'zoltego', 'niebieskiego'],
		valid: 3,
	},
	{
		question: 'Sprzedalem dzisiaj iphone',
		answers: ['bialego', 'czerwonego', 'zoltego', 'niebieskiego'],
		valid: 3,
	},
	{
		question: 'w sobote jade do gniezna',
		answers: ['bialego', 'czerwonego', 'zoltego', 'niebieskiego'],
		valid: 1,
	},
];

function App() {
	const [start, setStart] = useState<boolean>(false);
	const [score, setScore] = useState<boolean>(false);
	const [answer, setAnswer] = useState<string>('');
	const [count, setCount] = useState<number>(0);
	const [currQuestion, setCurrQuestion] = useState<number>(0);

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
