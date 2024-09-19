const utdPart1 = [
	//dozoru technicznego – przepisów
	//towaroznawstwa
	//przepisów bhp
	//przepisów dotyczących zaświadczeń
	//1
	{
		question: 'Urządzenie techniczne objęte dozorem technicznym może być eksploatowane na podstawie:',
		answers: [
			'A. Zezwolenia ustnego lub pisemnego wydanego przez upoważnionego konserwatora',
			'B. Ważnej decyzji zezwalającej na eksploatację wydanej przez organ właściwej jednostki dozoru technicznego',
			'C. Oznaczenia CE zamieszczonego na urządzeniu',
			'D. Deklaracji zgodności wystawionej przez wytwórcę',
		],
		valid: 1,
	},
	//2
	{
		question: 'Które z wymienionych czynności nie należą do zakresu obowiązków obsługującego UTB:',
		answers: [
			'A. Wykonywanie niewielkich napraw urządzenia w ramach posiadanego wykształcenia i umiejętności',
			'B. Przestrzeganie instrukcji eksploatacji w zakresie obsługi UTB',
			'C. Zapoznanie się z planem pracy i wielkością przenoszonych ładunków',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	//3
	{
		question: 'Terminy przeglądów konserwacyjnych urządzeń technicznych:',
		answers: [
			'A. Są zawarte w instrukcji eksploatacji urządzenia',
			'B. Określa konserwator urządzenia',
			'C. Określa w protokole inspektor wykonujący badanie',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	//4
	{
		question: 'Dozorem technicznym nazywamy:',
		answers: [
			'A. Określone ustawą działania zmierzające do zapewnienia bezpiecznego funkcjonowania urządzeń technicznych i urządzeń do odzyskiwania par paliwa oraz działania zmierzające do zapewnienia bezpieczeństwa publicznego w tych obszarach',
			'B. Instytucje kontrolujące stan techniczny urządzeń',
			'C. Urząd Dozoru Technicznego',
			'D. UDT, WDT, TDT',
		],
		valid: 0,
	},
	//5
	{
		question: 'Dozór techniczny nad urządzeniami technicznymi wykonuje:',
		answers: [
			'A. Urząd Dozoru Technicznego oraz specjalistyczne jednostki dozoru technicznego',
			'B. Urząd Dozoru Technicznego oraz upoważnione przez UDT organizacje',
			'C. Urząd Dozoru Technicznego i zagraniczne jednostki dozoru technicznego',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	//6
	{
		question: 'Zmiana parametrów technicznych lub zmiana konstrukcji urządzenia technicznego traktowana jest jako:',
		answers: [
			'A. Modernizacja urządzenia technicznego',
			'B. Naprawa urządzenia technicznego',
			'C. Usuwanie usterek i innych nieprawidłowości urządzenia technicznego',
			'D. Wytworzenie nowego urządzenia',
		],
		valid: 0,
	},
	//7
	{
		question: 'Uzgodnioną naprawę lub modernizację urządzeń technicznych może wykonać:',
		answers: [
			'A. Naprawiający lub modernizujący, który posiada uprawnienie wydane przez organ właściwej jednostki dozoru technicznego',
			'B. Eksploatujący urządzenie techniczne posiadający odpowiednie doświadczenie w zakresie napraw lub modernizacji',
			'C. Konserwator posiadający odpowiednie doświadczenie w zakresie napraw lub modernizacji',
			'D. W niewielkim zakresie kompetentny operator',
		],
		valid: 0,
	},
	//8
	{
		question: 'Ustawa o dozorze technicznym określa następujące formy dozoru technicznego:',
		answers: [
			'A. Całkowita, częściowa, ograniczona',
			'B. Pełna, ograniczona, uproszczona',
			'C. Pełna, cykliczna, sporadyczna',
			'D. UDT, WDT, TDT',
		],
		valid: 1,
	},
	//9
	{
		question: 'Decyzję zezwalającą na eksploatację urządzenia technicznego wydaje:',
		answers: [
			'A. Konserwator po wykonaniu przeglądu z wynikiem pozytywnym',
			'B. Organ właściwej jednostki dozoru technicznego lub eksploatujący urządzenie techniczne z upoważnienia organu właściwej jednostki dozoru technicznego',
			'C. Organ właściwej jednostki dozoru technicznego lub organ administracji publicznej z upoważnienia organu właściwej jednostki dozoru technicznego',
			'D. Organ właściwej jednostki dozoru technicznego',
		],
		valid: 3,
	},
	//10
	{
		question: 'Obsługujący urządzenie techniczne może podjąć pracę gdy:',
		answers: [
			'A. Urządzenie posiada ważną decyzję zezwalającą na eksploatację jeżeli wymagają tego odpowiednie przepisy',
			'B. Posiada zaświadczenie kwalifikacyjne odpowiedniej kategorii',
			'C. Urządzenie posiada aktualny pozytywny wynik przeglądu konserwacyjnego',
			'D. Wszystkie powyższe warunki muszą być spełnione jednocześnie',
		],
		valid: 3,
	},
	//11
	{
		question: 'Obsługujący urządzenie techniczne może podjąć pracę gdy:',
		answers: [
			'A. Urządzenie posiada aktualny wpis w dzienniku konserwacji potwierdzający sprawność urządzenia',
			'B. Przeszedł odpowiednie szkolenie stanowiskowe',
			'C. Urządzenie posiada ważną decyzję zezwalającą na eksploatację',
			'D. Wszystkie powyższe warunki muszą być spełnione jednocześnie',
		],
		valid: 3,
	},
	//12
	{
		question: 'W przypadku nieprzestrzegania przez eksploatującego przepisów o dozorze technicznym eksploatujący:',
		answers: [
			'A. Otrzymuje pisemne upomnienie',
			'B. Otrzymuje zalecenia pokontrolne',
			'C. Podlega grzywnie lub karze ograniczenia wolności',
			'D. Odpowiedź A i B jest prawidłowa',
		],
		valid: 2,
	},
	// 13
	{
		question: 'W przypadku stwierdzenia zagrożenia dla życia lub zdrowia ludzkiego oraz mienia i środowiska inspektor:',
		answers: [
			'A. Wydaje decyzję wstrzymującą eksploatację urządzenia technicznego',
			'B. Wystawia mandat karny',
			'C. Pisemnie poucza eksploatującego',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	// 14
	{
		question:
			'W przypadku niebezpiecznego uszkodzenia urządzenia technicznego lub nieszczęśliwego wypadku eksploatujący:',
		answers: [
			'A. Niezwłocznie powiadamia UDT o zaistniałym zdarzeniu',
			'B. Powiadamia producenta urządzenia o przyczynach powstałego zdarzenia',
			'C. Niezwłocznie dokonuje naprawy urządzenia i przekazuje do dalszej eksploatacji',
			'D. Zgłasza urządzenie do wykonania naprawy',
		],
		valid: 0,
	},
	// 15
	{
		question: 'Zaświadczenie kwalifikacyjne do obsługi może zostać cofnięte przez:',
		answers: [
			'A. Organ właściwej jednostki dozoru technicznego',
			'B. Eksploatującego urządzenie techniczne',
			'C. Inspektora bhp',
			'D. Państwową Inspekcję Pracy',
		],
		valid: 0,
	},
	// 16
	{
		question: 'Urządzenia techniczne nieobjęte dozorem technicznym to:',
		answers: [
			'A. Żurawie o udźwigu do 3,2 t',
			'B. Wciągniki i wciągarki oraz suwnice',
			'C. Wózki jezdniowe podnośnikowe oraz podesty ruchome',
			'D. Zawiesia transportowe',
		],
		valid: 3,
	},
	// 17
	{
		question: 'Urządzenia techniczne objęte dozorem technicznym to:',
		answers: [
			'A. Przenośniki kabinowe i krzesełkowe',
			'B. Układnice magazynowe oraz urządzenia dla osób niepełnosprawnych',
			'C. Wyciągi towarowe i wyciągi statków',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 18
	{
		question: 'Niebezpieczne uszkodzenie urządzenia technicznego to:',
		answers: [
			'A. Każda usterka UTB',
			'B. Nieprzewidziane uszkodzenie, w wyniku którego urządzenie nadaje się do częściowej eksploatacji',
			'C. Nieprzewidziane uszkodzenie, w wyniku którego nadaje się do eksploatacji tylko przy obniżonych parametrach',
			'D. Nieprzewidziane uszkodzenie, w wyniku którego urządzenie nie nadaje się do eksploatacji lub jego dalsza eksploatacja stanowi zagrożenie',
		],
		valid: 3,
	},
	// 19
	{
		question: 'Nieszczęśliwy wypadek to:',
		answers: [
			'A. Nagłe zdarzenie, które spowodowało obrażenia ciała lub śmierć',
			'B. Nagłe zdarzenie, które spowodowało przerwę w pracy',
			'C. Nagłe zdarzenie, które skutkuje wyłączeniem urządzenia technicznego z eksploatacji',
			'D. Każda usterka UTB spowodowana przyczyną losową',
		],
		valid: 0,
	},
	// 20
	{
		question:
			'Podnoszenie i przenoszenie osób przez urządzenie techniczne przeznaczone wyłącznie do transportu ładunków wymaga:',
		answers: [
			'A. Uzgodnienia z organem właściwej jednostki dozoru technicznego',
			'B. Uzgodnienia z przełożonym',
			'C. Uzgodnienia ze służbą BHP',
			'D. Jest możliwe przy zachowaniu szczególnej ostrożności i pod nadzorem inspektora',
		],
		valid: 0,
	},
	// 21
	{
		question: 'Odpowiedzialnym za zapewnienie właściwej obsługi i konserwacji urządzenia technicznego jest:',
		answers: [
			'A. Eksploatujący urządzenie techniczne',
			'B. Organ właściwej jednostki dozoru technicznego',
			'C. Państwowa Inspekcja Pracy',
			'D. Inspektor UDT',
		],
		valid: 0,
	},
	// 22
	{
		question: 'Wymagane przepisami prawa przeglądy konserwacyjne wykonuje:',
		answers: [
			'A. Osoba posiadająca zaświadczenie kwalifikacyjne do konserwacji',
			'B. Pracownik autoryzowanego serwisu producenta urządzenia (pod warunkiem posiadania zaświadczeń kwalifikacyjnych do konserwacji)',
			'C. Zakładowe służby utrzymania ruchu',
			'D. Odpowiedź A i B jest prawidłowa',
		],
		valid: 3,
	},
	// 23
	{
		question: 'Dziennik konserwacji urządzenia technicznego prowadzi:',
		answers: [
			'A. Inspektor UDT w księdze rewizyjnej urządzenia',
			'B. Uprawniony operator',
			'C. Wyznaczony pracownik eksploatującego',
			'D. Konserwator urządzenia technicznego',
		],
		valid: 3,
	},
	// 24
	{
		question: 'Badania odbiorcze przeprowadza się dla urządzeń technicznych:',
		answers: [
			'A. W terminach zgodnych z zapisami rozporządzenia w sprawie warunków technicznych dozoru technicznego',
			'B. Przed wydaniem pierwszej decyzji zezwalającej na eksploatacje',
			'C. Po naprawie urządzenia technicznego',
			'D. Po każdej zmianie eksploatującego',
		],
		valid: 1,
	},
	// 25
	{
		question: 'Badania okresowe przeprowadza się dla urządzeń technicznych objętych dozorem:',
		answers: ['A. Ograniczonym', 'B. Pełnym', 'C. Uproszczonym', 'D. Wszystkie odpowiedzi są poprawne'],
		valid: 1,
	},
	// 26
	{
		question: 'Nieobecność konserwującego na badaniu urządzenia technicznego wymaga min.:',
		answers: [
			'A. Wcześniejszego uzgodnienia tego faktu z organem właściwej jednostki dozoru technicznego',
			'B. Przedstawienia pisemnego usprawiedliwienia nieobecności konserwatora',
			'C. Przedstawienia zwolnienia lekarskiego potwierdzającego niezdolność konserwatora do pracy',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 0,
	},
	// 27
	{
		question: 'Kandydat na obsługującego urządzenie techniczne musi:',
		answers: [
			'A. Mieć ukończone 18 lat',
			'B. Posiadać przynajmniej wykształcenie zawodowe',
			'C. Posiadać przynajmniej 1 rok stażu pracy',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 0,
	},
	// 28
	{
		question: 'Obsługujący urządzenie techniczne ma obowiązek przerwać pracę gdy:',
		answers: [
			'A. Jego stan fizyczny i psychiczny w dniu pracy jest nieodpowiedni',
			'B. Stwierdzi, że dalsza praca urządzeniem stwarza zagrożenie',
			'C. Urządzenie jest niesprawne',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	// 29
	{
		question: 'Terminy przeglądów konserwacyjnych urządzenia mogą być określone:',
		answers: [
			'A. W instrukcji eksploatacji urządzenia',
			'B. W ustawie o dozorze technicznym',
			'C. W rozporządzeniu określającym warunki techniczne dozoru technicznego',
			'D. Odpowiedź A i C jest prawidłowa',
		],
		valid: 3,
	},
	// 30
	{
		question: 'Terminy badań okresowych i doraźnych kontrolnych UTB określone są:',
		answers: [
			'A. W ustawie o dozorze technicznym',
			'B. W rozporządzeniu określającym warunki techniczne dozoru technicznego',
			'C. W dokumentacji konstrukcyjnej urządzenia',
			'D. W dzienniku konserwacji',
		],
		valid: 1,
	},
	// 31
	{
		question: 'Obowiązkiem obsługującego urządzenie techniczne jest:',
		answers: [
			'A. Przestrzeganie instrukcji eksploatacji w zakresie obsługi urządzenia',
			'B. Przestrzeganie instrukcji eksploatacji w zakresie konserwacji urządzenia',
			'C. Wykonywanie napraw urządzenia',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	// 32
	{
		question: 'Urządzenie techniczne można eksploatować na podstawie:',
		answers: [
			'A. Aktualnej naklejki organu właściwej jednostki dozoru technicznego określającej termin kolejnego badania',
			'B. Aktualnego wpisu konserwatora urządzenia w dzienniku konserwacji',
			'C. Ważnej decyzji zezwalającej na eksploatację wydanej przez organ właściwej jednostki dozoru technicznego',
			'D. Pozytywnego protokołu z badania okresowego lub odbiorczego',
		],
		valid: 2,
	},
	// 33
	{
		question: 'Po wykonanych czynnościach przy urządzeniu technicznym inspektor sporządza:',
		answers: [
			'A. Instrukcję eksploatacji urządzenia',
			'B. Decyzję i protokół z wykonanych czynności',
			'C. Deklarację zgodności CE',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 1,
	},
	// 34
	{
		question: 'Naprawę i modernizację urządzenia technicznego wykonuje:',
		answers: [
			'A. Operator w ramach posiadanych umiejętności',
			'B. Konserwator',
			'C. Zakład uprawniony',
			'D. Eksploatujący',
		],
		valid: 2,
	},
	// 35
	{
		question: 'Bezpośrednio odpowiedzialnym za bezpieczną eksploatację urządzenia technicznego jest:',
		answers: ['A. Obsługujący urządzenie', 'B. Producent urządzenia', 'C. Zakładowy inspektor BHP', 'D. Inspektor UDT'],
		valid: 0,
	},
	// 36
	{
		question: 'Informacje dotyczące zasad bezpiecznej obsługi urządzenia są zawarte w:',
		answers: [
			'A. Instrukcji eksploatacji urządzenia',
			'B. Ustawie o dozorze technicznym',
			'C. Dzienniku konserwacji',
			'D. Protokole z badania wykonanego przez inspektora UDT',
		],
		valid: 0,
	},
	// 37
	{
		question: 'W ramach czynności przed rozpoczęciem pracy obsługujący:',
		answers: [
			'A. Sprawdza stan techniczny urządzenia poprzez oględziny',
			'B. Wykonuje próby statyczną i dynamiczną',
			'C. Wykonuje próby ruchowe urządzenia',
			'D. Odpowiedź A i C jest prawidłowa',
		],
		valid: 3,
	},
	// 38
	{
		question:
			'Zaświadczenia kwalifikacyjne do obsługi urządzeń technicznych podlegających dozorowi technicznemu wydaje:',
		answers: [
			'A. Firma szkoleniowa po pozytywnym wyniku egzaminu sprawdzającego',
			'B. Inspektor BHP na podstawie zaświadczenia o ukończeniu kursu',
			'C. Pracodawca na podstawie zdanego egzaminu',
			'D. Organ właściwej jednostki dozoru technicznego',
		],
		valid: 3,
	},
	// 39
	{
		question: 'Przeciążanie UTB w trakcie pracy:',
		answers: [
			'A. Jest zabronione',
			'B. Jest dopuszczalne',
			'C. Jest dopuszczalne ale tylko do 125% udźwigu nominalnego',
			'D. Jest dopuszczalne ale tylko do 110% udźwigu nominalnego',
		],
		valid: 0,
	},
	// 40
	{
		question: 'Badania doraźne eksploatacyjne wykonuje się m.in.:',
		answers: [
			'A. Po każdym usunięciu usterki przez konserwatora',
			'B. Po wymianie cięgien nośnych',
			'C. Raz na rok',
			'D. Po wypadku na urządzeniu',
		],
		valid: 1,
	},
	// 41
	{
		question: 'Obowiązki obsługującego określone są:',
		answers: [
			'A. W instrukcji eksploatacji urządzenia',
			'B. W dzienniku konserwacji',
			'C. W ustawie o dozorze technicznym',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	// 42
	{
		question: 'Badania okresowe urządzenia technicznego są wykonywane przez:',
		answers: [
			'A. Konserwatora posiadającego odpowiednie zaświadczenie kwalifikacyjne',
			'B. Inspektora organu właściwej jednostki dozoru technicznego',
			'C. Pracownika serwisu producenta',
			'D. Operatora',
		],
		valid: 1,
	},
	// 43
	{
		question: 'Jednostką dozoru technicznego jest:',
		answers: [
			'A. Urząd Dozoru Technicznego',
			'B. Wojskowy Dozór Techniczny',
			'C. Transportowy Dozór Techniczny',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	// 44
	{
		question: 'Zaświadczenia kwalifikacyjne uprawniające do obsługi urządzeń technicznych ważne są na terenie:',
		answers: [
			'A. Rzeczypospolitej Polskiej',
			'B. Unii Europejskiej',
			'C. Nie mają określonego obszaru ważności',
			'D. Krajów strefy Schengen',
		],
		valid: 0,
	},
	// 45
	{
		question: 'Obowiązek stosowania środków ochrony indywidualnej przez operatorów urządzeń technicznych wynika z:',
		answers: [
			'A. Instrukcji eksploatacji producenta',
			'B. Przepisów BHP',
			'C. Przepisów wewnątrzzakładowych',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 46
	{
		question:
			'Zgodnie z rozporządzeniem Rady Ministrów w sprawie rodzajów urządzeń technicznych podlegających dozorowi technicznemu przepisom dozoru technicznego podlegają:',
		answers: [
			'A. Dźwigi, żurawie, suwnice, wciągarki i wciągniki',
			'B. Wózki jezdniowe podnośnikowe z mechanicznym napędem podnoszenia, podesty ruchome',
			'C. Dźwignice linotorowe, przenośniki kabinowe i krzesełkowe',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 47
	{
		question: 'Instrukcja eksploatacji może nie zawierać:',
		answers: [
			'A. Informacji o terminach i zakresie przeglądów konserwacyjnych UTB',
			'B. Podstawowych parametrów i przeznaczenia UTB',
			'C. Terminów badań technicznych wykonywanych przez jednostkę inspekcyjną',
			'D. Informacji o sposobie obsługi urządzenia',
		],
		valid: 2,
	},
	// 48
	{
		question: 'Księga rewizyjna urządzenia musi zawierać:',
		answers: [
			'A. Zbiór protokołów z badań wykonywanych przez jednostkę inspekcyjną',
			'B. Dokument, w którym odnotowywane są przeglądy konserwacyjne',
			'C. Treść aktualnych aktów prawnych',
			'D. Wykaz uprawnionych operatorów',
		],
		valid: 0,
	},
	// 49
	{
		question: 'Decyzja wydana przez UDT:',
		answers: [
			'A. Nie podlega odwołaniu',
			'B. Może zostać zmieniona przez inspektora PIP',
			'C. Podlega możliwości odwołania się przez eksploatującego',
			'D. Każda odpowiedź jest niepoprawna',
		],
		valid: 2,
	},
	// 50
	{
		question: 'Do egzaminu sprawdzającego kwalifikacje może przystąpić osoba, która:',
		answers: [
			'A. Złożyła wniosek o sprawdzenie kwalifikacji',
			'B. Ukończyła 18 lat',
			'C. Nie ma przeciwwskazań zdrowotnych do obsługi urządzeń technicznych',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 51
	{
		question: 'Po zakończonym badaniu technicznym z wynikiem pozytywnym inspektor UDT:',
		answers: [
			'A. Przedłuża ważność świadectwa kwalifikacji operatora',
			'B. Oznakowuje urządzenie naklejką, która jest zezwoleniem na użytkowanie urządzenia',
			'C. Informuje użytkownika pisemnie w dzienniku konserwacji, że wyraża zgodę na eksploatację urządzenia',
			'D. Sporządza protokół z wykonanych czynności i wydaje decyzję administracyjną zezwalającą na eksploatację',
		],
		valid: 3,
	},
	// 52
	{
		question: 'Zaświadczenia kwalifikacyjne:',
		answers: [
			'A. Są ważne bezterminowo',
			'B. Są terminowe z okresem ważności uzależnionym od ilości uzyskanych punktów na egzaminie',
			'C. Są terminowe z okresem ważności zgodnym z zapisami rozporządzenia w sprawie trybu sprawdzenia kwalifikacji',
			'D. Są ważne przez okres 15 lat',
		],
		valid: 2,
	},
	// 53
	{
		question:
			'Dokonujący przeróbek urządzenia technicznego bez uzgodnienia z organem właściwej jednostki dozoru technicznego:',
		answers: [
			'A. Podlega karze grzywny lub ograniczenia wolności',
			'B. Podlega ukaraniu mandatem karnym',
			'C. Nie podlega karze',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 0,
	},
	// 54
	{
		question: 'Kto dopuszcza do eksploatacji urządzenie techniczne bez ważnej decyzji zezwalającej na eksploatację:',
		answers: [
			'A. Podlega karze grzywny lub ograniczenia wolności',
			'B. Nie podlega karze, jeżeli nie dojdzie do wypadku',
			'C. Podlega wyłącznie karze grzywny',
			'D. Podlega karze więzienia',
		],
		valid: 0,
	},
	// 55
	{
		question: 'Instrukcja eksploatacji to:',
		answers: [
			'A. Zbiór informacji niezbędnych do bezpiecznej eksploatacji urządzenia udostępniany przez producenta',
			'B. Zbiór zaleceń wydawanych przez Urząd Dozoru Technicznego',
			'C. Instrukcja, którą musi stworzyć użytkownik urządzenia',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	// 56
	{
		question: 'Zaświadczeń kwalifikacyjnych do obsługi nie wymaga się:',
		answers: [
			'A. Jeżeli urządzenie jest obsługiwane przez jego właściciela',
			'B. Jeżeli wszystkie mechanizmy urządzenia mają napęd ręczny',
			'C. Jeśli urządzenie jest wykorzystywane do celów prywatnych, nie zarobkowych',
			'D. Od osób po 60 roku życia',
		],
		valid: 1,
	},
	// 57
	{
		question: 'Osoba posiadająca zaświadczenia kwalifikacyjne może obsługiwać:',
		answers: [
			'A. Tylko urządzenia wymienione w zakresie uprawnienia',
			'B. Wszystkie urządzenia podlegające dozorowi technicznemu',
			'C. Inne urządzenia podlegające dozorowi technicznemu za zgodą pracodawcy',
			'D. Wszystkie UTB o udźwigu do 3,2 t',
		],
		valid: 0,
	},
	// 58
	{
		question: 'Obowiązkiem obsługującego urządzenie techniczne jest:',
		answers: [
			'A. Odmówić obsługi urządzenia, jeżeli wygasła decyzja zezwalająca na eksploatację tego urządzenia',
			'B. Zawsze stosować się do poleceń przełożonego nakazujących eksploatację urządzenia',
			'C. Stosować się do zapisów zawartych w instrukcji eksploatacji',
			'D. Odpowiedź a i c jest prawidłowa',
		],
		valid: 3,
	},
	// 59
	{
		question: 'Zaświadczenie kwalifikacyjne do obsługi urządzeń technicznych są:',
		answers: [
			'A. Ważne na terenie Unii Europejskiej',
			'B. Ważne z dowodem tożsamości',
			'C. Bezterminowe',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 1,
	},
	// 60
	{
		question: 'Obsługujący który jest świadkiem wypadku ma obowiązek:',
		answers: [
			'A. Udzielić pomocy ofierze (lub ofiarom) wypadku',
			'B. Zabezpieczyć miejsce zdarzenia',
			'C. Powiadomić przełożonego',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 61
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
	// 62
	{
		question: 'Formami dozoru technicznego są:',
		answers: [
			'A. Dozór pełny, dozór uproszczony, dozór ograniczony',
			'B. Badanie odbiorcze, badanie okresowe i badanie doraźne',
			'C. UDT, TDT, WDT',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 0,
	},
	// 63
	{
		question:
			'Podnoszenie osób urządzeniami, które zostały zaprojektowane i wykonane wyłącznie do podnoszenia ładunków:',
		answers: [
			'A. Jest dopuszczalne, po zapewnieniu odpowiedniego poziomu bezpieczeństwa',
			'B. Jest zabronione',
			'C. Jest dopuszczalne, po uzgodnieniu z organem właściwej jednostki dozoru technicznego szczegółowych warunków eksploatacji',
			'D. Jest dopuszczalne jednorazowo na pisemne polecenie przełożonego',
		],
		valid: 1,
	},
	// 64
	{
		question: 'Podnoszenie ładunków za pomocą dwóch lub więcej UTB:',
		answers: [
			'A. Jest dopuszczalne, pod warunkiem opracowania przez eksploatującego szczegółowych warunków eksploatacji, opisujących czynności organizacyjno-techniczne minimalizujące ryzyko',
			'B. Jest zawsze dopuszczalne jeżeli masa ładunku nie przekracza sumy udźwigów wykorzystywanych urządzeń',
			'C. Jest dopuszczalne jeżeli masa ładunku nie przekracza połowy udźwigu każdego z wykorzystanych urządzeń',
			'D. Nie jest nigdy dopuszczalna',
		],
		valid: 0,
	},
	// 65
	{
		question: 'Przebywanie osób pod ładunkiem przenoszonym jest:',
		answers: [
			'A. Zawsze niedozwolone',
			'B. Dozwolone dla osób kontrolującej spód ładunku',
			'C. Dozwolone jeżeli współczynnik bezpieczeństwa cięgien wynosi nie mniej niż 5',
			'D. Dozwolone jeżeli współczynnik bezpieczeństwa cięgien wynosi nie mniej niż 7',
		],
		valid: 0,
	},
	// 66
	{
		question: 'Przenoszenie ładunków nad osobami jest:',
		answers: [
			'A. Dozwolone pod warunkiem uzyskania pisemnego zezwolenia od osoby kierującej transportem',
			'B. Dozwolone, po zapewnieniu współczynników bezpieczeństwa dla cięgien i urządzeń chwytnych większych niż 10',
			'C. Dozwolone pod warunkiem powiadomienia osób i wyposażeniu ich w środki ochrony indywidualnej',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 2,
	},
	// 67
	{
		question:
			'Zaświadczenia kwalifikacyjne do obsługi urządzeń technicznych podlegających dozorowi technicznemu wydaje:',
		answers: ['A. Właściciel urządzenia', 'B. UDT, TDT, WDT', 'C. PIP', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 1,
	},
	// 68
	{
		question: 'Komisja egzaminacyjna powiadamia osobę zainteresowaną o wyniku egzaminu:',
		answers: [
			'A. W ciągu 7 dni po egzaminie w formie pisemnej',
			'B. Bezpośrednio po egzaminie',
			'C. W ciągu 14 dni po egzaminie w formie elektronicznej',
			'D. Listem poleconym lub pocztą elektroniczną po upływie 30 dni roboczych od daty egzaminu',
		],
		valid: 0,
	},
	// 69
	{
		question: 'Dziennik konserwacji powinien być prowadzony:',
		answers: [
			'A. Tylko w formie papierowej',
			'B. W formie elektronicznej lub papierowej',
			'C. Tylko w formie elektronicznej',
			'D. Przez obsługującego',
		],
		valid: 1,
	},
	// 70
	{
		question: 'Instrukcja stanowiskowa:',
		answers: [
			'A. Jest zawsze dostarczana wraz z instrukcją obsługi przez producenta urządzenia',
			'B. Stanowi niepisany zbiór zwyczajów przyjętych w zakładzie pracy',
			'C. Jest wydawana przez pracodawcę i zawiera szczegółowe wskazówki dotyczące bhp na stanowisku pracy',
			'D. Nie dotyczy operatorów urządzeń mobilnych',
		],
		valid: 2,
	},
	// 71
	{
		question: 'Po upływie terminu ważności zaświadczenia kwalifikacyjnego do obsługi urządzenia obsługujący:',
		answers: [
			'A. Może obsługiwać UTB o ile kontynuuje pracę u tego samego pracodawcy',
			'B. Może obsługiwać UTB o ile złoży wniosek o wydanie kolejnego zaświadczenia',
			'C. Może obsługiwać UTB dopiero po uzyskaniu nowego zaświadczenia kwalifikacyjnego',
			'D. Składa wniosek o przedłużenie terminu ważności zaświadczenia kwalifikacyjnego',
		],
		valid: 2,
	},
	// 72
	{
		question: 'Przedłużenie ważności zaświadczenia kwalifikacyjnego następuje:',
		answers: [
			'A. Na pisemny wniosek obsługującego',
			'B. Automatycznie po upływie terminu ważności zaświadczenia',
			'C. Na pisemne zgłoszenie pracodawcy obsługującego',
			'D. Po wcześniejszym zgłoszeniu telefonicznym',
		],
		valid: 0,
	},
	// 73
	{
		question: 'Udźwig UTB to parametr urządzenia bezpośrednio związany z:',
		answers: [
			'A. Maksymalną wysokością podnoszonego ładunku',
			'B. Maksymalną objętością podnoszonego ładunku',
			'C. Maksymalną masą podnoszonego ładunku',
			'D. Iloczynem masy i objętości podnoszonego ładunku',
		],
		valid: 2,
	},
	// 74
	{
		question: 'Masa netto 1000 l wody wynosi ok:',
		answers: ['A. 800 kg', 'B. 900 kg', 'C. 1000 kg', 'D. 1100 kg'],
		valid: 2,
	},
	// 75
	{
		question: 'Masa ładunku składającego się z 40 opakowań po 25 kg każdy wynosi:',
		answers: ['A. 800 kg', 'B. 1000 kg', 'C. 1100 kg', 'D. 900 kg'],
		valid: 1,
	},
	// 76
	{
		question: 'Masa 60 kartonów po 20 kg każdy wynosi:',
		answers: ['A. 800 kg', 'B. 1000 kg', 'C. 1100 kg', 'D. 1200 kg'],
		valid: 3,
	},
	// 77
	{
		question: 'Masę podnoszonego ładunku można określić na podstawie:',
		answers: [
			'A. Zawieszki zbiorczej znajdującej się na transportowanym ładunku',
			'B. Przeliczając uwzględniając ciężar właściwy i objętość',
			'C. Dokumentacji przewozowej i magazynowej',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	// 78
	{
		question: 'Informacja dotycząca udźwigu urządzenia może być zawarta:',
		answers: [
			'A. W instrukcji eksploatacji',
			'B. Na tabliczce znamionowej',
			'C. Na urządzeniu technicznym',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	// 79
	{
		question: 'Prawidłowe określenie jednostki udźwigu to:',
		answers: ['A. kg', 'B. Pa', 'C. mth', 'D. mm'],
		valid: 0,
	},
];
const utdPart2 = [
	//budowy wózka (część elektryczna, mechaniczna, hydraulika)
	// wymagań, które musi spełnić kandydat na operatora
	// wymagań, które musi spełnić operator
	// 80
	{
		question: 'Które z elementów nie wchodzą w skład układu hydraulicznego wózka jezdniowego podnośnikowego?',
		answers: [
			'A. Pompa, zamek hydrauliczny, filtr oleju',
			'B. Rozrusznik, potencjometr, silnik elektryczny',
			'C. Manometr, zawór zwrotny, odpowietrznik',
			'D. Wszystkie odpowiedzi są nieprawidłowe',
		],
		valid: 1,
	},
	// 81
	{
		question: 'Zamek hydrauliczny zapewnia ochronę przed:',
		answers: [
			'A. Nadmiernym wzrostem ciśnienia w układzie hydraulicznym',
			'B. Skutkami pęknięcia przewodu hydraulicznego',
			'C. Nieautoryzowanym uruchomieniem urządzenia',
			'D. Dzieleniem strumienia na poszczególne obwody układu hydraulicznego',
		],
		valid: 0,
	},
	// 82
	{
		question: 'Elementem przekształcającym ciśnienie oleju hydraulicznego w ruch mechaniczny jest:',
		answers: ['A. Pompa tłoczkowa', 'B. Siłownik hydrauliczny', 'C. Rozdzielacz hydrauliczny', 'D. Zawór przelewowy'],
		valid: 1,
	},
	// 83
	{
		question: 'Elementem wytwarzającym ciśnienie w układzie hydraulicznym wózka jezdniowego podnośnikowego jest:',
		answers: ['A. Silnik hydrauliczny', 'B. Pompa hydrauliczna', 'C. Kompresor', 'D. Sprężarka'],
		valid: 1,
	},
	// 84
	{
		question: 'Zawór przelewowy instalowany w układzie hydraulicznym wózków jezdniowych podnośnikowych ma za zadanie:',
		answers: [
			'A. Utrzymanie stałego ciśnienia w układzie hydraulicznym',
			'B. Utrzymanie siłownika w stałej pozycji',
			'C. Zabezpieczenie układu podnoszenia przed opadaniem',
			'D. Zasilanie układu hydraulicznego',
		],
		valid: 0,
	},
	// 85
	{
		question: 'Bezpieczny sposób sprawdzenia działania zaworu przelewowego przeprowadza się:',
		answers: [
			'A. Z ładunkiem nominalnym na wysokości ok 1/3 wysokości podnoszenia',
			'B. Z włączonym silnikiem bez ładunku',
			'C. Wychylając i przytrzymując dźwignię mechanizmu aż do momentu uzyskania przez układ skrajnego położenia',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 3,
	},
	// 86
	{
		question: 'Rozdzielacz hydrauliczny instalowany jest w układzie w celu:',
		answers: [
			'A. Dławienia ciśnienia w poszczególnych obwodach',
			'B. Zabezpieczenia układu przed nadmiernym wzrostem ciśnienia',
			'C. Skierowanie przepływu oleju hydraulicznego do poszczególnych obwodów',
			'D. Wszystkie odpowiedzi są nieprawidłowe',
		],
		valid: 2,
	},
	// 87
	{
		question: 'Elementem wykonawczym w układzie hydraulicznym wózka jezdniowego podnośnikowego jest:',
		answers: [
			'A. Siłownik mechanizmu podnoszenia',
			'B. Silnik hydrauliczny',
			'C. Siłownik mechanizmu przechyłu',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 88
	{
		question: 'Elementem chroniącym układ hydrauliczny przed nadmiernym wzrostem ciśnienia jest:',
		answers: ['A. Zamek hydrauliczny', 'B. Zawór dławiący', 'C. Rozdzielacz hydrauliczny', 'D. Zawór bezpieczeństwa'],
		valid: 3,
	},
	// 89
	{
		question: 'Zawór zwrotno-dławiący montowany w układzie podnoszenia wózka jezdniowego podnośnikowego ma na celu:',
		answers: [
			'A. Zmniejszenie ciśnienia oleju',
			'B. Zabezpieczenie pompy hydraulicznej przed uszkodzeniem',
			'C. Spowolnienie prędkości opuszczania podniesionego ładunku, podczas pęknięcia przewodu hydraulicznego',
			'D. Zablokowanie opuszczania siłownika podczas pęknięcia przewodu hydraulicznego',
		],
		valid: 2,
	},
	// 90
	{
		question: 'Zawór bezpieczeństwa w układzie hydraulicznym wózka jezdniowego podnośnikowego:',
		answers: [
			'A. Utrzymuje nurnik siłownika podnoszenia w stałym położeniu',
			'B. Jest elementem ograniczającym udźwig',
			'C. Zabezpiecza pompę hydrauliczną przed uszkodzeniem',
			'D. Ogranicza prędkość opuszczania podniesionego ładunku, w przypadku pęknięcia węża hydraulicznego',
		],
		valid: 2,
	},
	// 91
	{
		question: 'W przypadku wzrostu ciśnienia nadmiar oleju odprowadzany jest:',
		answers: [
			'A. Z powrotem do zbiornika oleju',
			'B. Na zewnątrz wózka',
			'C. Do innej sekcji rozdzielacza',
			'D. Do siłownika',
		],
		valid: 0,
	},
	// 92
	{
		question: 'Kryteria i warunki poprawnego wykonania prób układu hydraulicznego określa:',
		answers: ['A. Wytwórca urządzenia', 'B. Konserwator', 'C. Operator', 'D. Inspektor UDT'],
		valid: 0,
	},
	// 93
	{
		question: 'Akumulatory w elektrycznym wózku podnośnikowym:',
		answers: [
			'A. Są źródłem zasilania układów',
			'B. Zapewniają stateczność wózka',
			'C. Decydują o prędkości ruchów roboczych',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3,
	},
	// 94
	{
		question: 'Parametry podane przez producenta na tabliczce znamionowej akumulatorów to:',
		answers: [
			'A. Napięcie znamionowe [V]',
			'B. Pojemność [Ah]',
			'C. Masa własna [kg]',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3,
	},
	// 95
	{
		question: 'Wyłącznik bezpieczeństwa STOP jest:',
		answers: [
			'A. Zabezpieczony przed przypadkowym zadziałaniem',
			'B. Umieszczony blisko operatora',
			'C. Koloru czerwonego',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 3,
	},
	// 96
	{
		question: 'Wyłącznik bezpieczeństwa STOP:',
		answers: [
			'A. Wyłącza działanie mechanizmów jazdy',
			'B. Wyłącza działanie mechanizmów podnoszenia',
			'C. Uruchamia sygnalizację ostrzegawczą',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3,
	},
	// 97
	{
		question: 'Jakiego rodzaju ogumienie stosowane jest w wózkach jezdniowych podnośnikowych:',
		answers: ['A. Pełne', 'B. Superelastyczne', 'C. Pneumatyczne', 'D. Wszystkie odpowiedzi są prawidłowe'],
		valid: 3,
	},
	// 98
	{
		question: 'Kto decyduje o rodzaju i wielkości opon zastosowanych w wózku:',
		answers: ['A. Producent opon', 'B. Konserwator', 'C. Producent wózka', 'D. Inspektor UDT'],
		valid: 2,
	},
	// 99
	{
		question: 'Graniczne zużycie opon superelastycznych (w przypadku braku innych wytycznych) to:',
		answers: [
			'A. Minimalna wartość bieżnika 1,6 mm',
			'B. Zmniejszenie grubości opony o 25% lub do wskaźnika wyznaczającego graniczne zużycie',
			'C. Brak bieżnika',
			'D. Minimalna wartość bieżnika 2 mm',
		],
		valid: 1,
	},
	// 100
	{
		question: 'Jaki rodzaj zużycia wyklucza opony pełne z dalszej eksploatacji:',
		answers: [
			'A. Wszelkie przecięcia i rozwarstwienia gumy, uszkodzenia mechaniczne',
			'B. Brak bieżnika',
			'C. Zmniejszenie grubości opony poniżej wskaźnika wyznaczającego graniczne zużycie',
			'D. Odpowiedź a i c jest prawidłowa',
		],
		valid: 3,
	},
	// 101
	{
		question: 'Świecąca się kontrolka ciśnienia oleju może świadczyć o:',
		answers: [
			'A. Niskim poziomie oleju',
			'B. Podwyższonej temperaturze silnika',
			'C. Zbyt niskim ciśnieniu oleju',
			'D. Odpowiedź a i c jest prawidłowa',
		],
		valid: 3,
		img: '/pytanie101i245.png',
	},
	// 102
	{
		question: 'Oznaczenie przedstawione na rysunku znajduje się na dźwigni:',
		answers: [
			'A. Mechanizmu podnoszenia',
			'B. Mechanizmu przechyłu masztu',
			'C. Mechanizmu przesuwu wideł',
			'D. Mechanizmu przesuwu karetki',
		],
		valid: 0,
		img: '/pytanie102.png',
	},
	// 103
	{
		question: 'Widząc świecącą się kontrolkę operator:',
		answers: [
			'A. Powinien sprawdzić, czy pasy są prawidłowo zapięte',
			'B. Może kontynuować pracę',
			'C. Może kontynuować pracę ze zmniejszoną prędkością jazdy',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
		img: '/pytanie103.png',
	},
	// 104
	{
		question: 'Dźwignia oznaczona poniższym piktogramem po wychyleniu przez operatora do przodu spowoduje:',
		answers: [
			'A. Ruch wideł w dół',
			'B. Ruch wideł w górę',
			'C. Przechył masztu "na siebie"',
			'D. Przechył masztu "od siebie"',
		],
		valid: 0,
		img: '/pytanie104.png',
	},
	// 105
	{
		question: 'Dźwignia oznaczona poniższym piktogramem po wychyleniu przez operatora spowoduje:',
		answers: [
			'A. Ruch wideł w dół',
			'B. Ruch wideł w górę',
			'C. Ruch mechanizmu przechyłu masztu',
			'D. Ruch mechanizmu przesuwu karetki',
		],
		valid: 2,
		img: '/pytanie105.png',
	},
	//106
	{
		question: 'Wózki jezdniowe podnośnikowe czołowe z fotelem dla operatora muszą być wyposażone w:',
		answers: [
			'A. Hamulec zasadniczy',
			'B. Hamulec postojowy',
			'C. Mechanizm ryglujący koła jezdne',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3,
	},
	//107
	{
		question: 'Hamowanie jazdy wózka prowadzonego może być realizowane przez:',
		answers: [
			'A. Pedał hamulca nożnego',
			'B. Zwolnienie nacisku na dźwignię sterującą jazdę wózka',
			'C. Wychylenie dyszla prowadzącego w skrajne górne i dolne położenie',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 3,
	},
	//108
	{
		question: 'W skład układu mechanizmu podnoszenia wchodzi:',
		answers: [
			'A. Siłowniki układu podnoszenia',
			'B. Łańcuchy nośne',
			'C. Karetka',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	//109
	{
		question: 'Wózki jezdniowe podnośnikowe czołowe z fotelem dla operatora mogą być wyposażone w maszt typu:',
		answers: ['A. Duplex', 'B. Triplex', 'C. Maszt z wolnym skokiem', 'D. Wszystkie odpowiedzi są prawidłowe'],
		valid: 3,
	},
	//110
	{
		question:
			'Jakie elementy bezpieczeństwa chronią operatora w przypadku utraty stateczności wózka podnośnikowego czołowego?',
		answers: ['A. Łącznik STOP', 'B. Kabina wózka, pas bezpieczeństwa', 'C. Podpory', 'D. Przeciwwaga'],
		valid: 1,
	},
	//111
	{
		question: 'Jakie elementy mają wpływ na stateczność wózka podnośnikowego czołowego?',
		answers: [
			'A. Kabina wózka, pas bezpieczeństwa',
			'B. Łącznik STOP',
			'C. Stan zużycia opon',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	//112
	{
		question: 'Do zasilania wózków podnośnikowych spalinowych stosowane są butle gazowe:',
		answers: [
			'A. Z kołnierzem',
			'B. Koloru czerwonego',
			'C. Wykorzystywane do zasilania kuchenek gazowych',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3,
	},
	//113
	{
		question: 'W wózkach podnośnikowych łańcuch mechanizmu podnoszenia jest:',
		answers: ['A. Cięgnem nośnym', 'B. Cięgnem przeciwślizgowym', 'C. Cięgnem napędowym', 'D. Żadnym z powyższych'],
		valid: 0,
	},
	//114
	{
		question: 'Oznaczenie na poniższym rysunku przedstawia:',
		answers: [
			'A. Lampkę kontrolną świec żarowych',
			'B. Lampkę kontrolną ładowania',
			'C. Lampkę kontrolną ciśnienia oleju hydraulicznego',
			'D. Lampkę kontrolną oświetlenia',
		],
		valid: 2,
		img: '/pytanie114.png',
	},
	//115
	{
		question: 'Oznaczenie na poniższym rysunku przedstawia:',
		answers: [
			'A. Lampkę sygnalizującą błędne podłączenie biegunów akumulatora (dotyczy tylko wózków akumulatorowych)',
			'B. Lampkę sprawności akumulatora, która dotyczy tylko wózków akumulatorowych',
			'C. Lampkę kontrolną ładowania akumulatora',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3,
		img: '/pytanie115.png',
	},
	//116
	{
		question: 'Oznaczenie na poniższym rysunku przedstawia:',
		answers: [
			'A. Wskazania ogranicznika udźwigu wózka',
			'B. Lampkę kontrolną temperatury cieczy chłodzącej',
			'C. Lampkę kontrolną poziomu paliwa',
			'D. Lampkę kontrolną stopnia naładowania akumulatora',
		],
		valid: 1,
		img: '/pytanie116.png',
	},
	//117
	{
		question: 'Oznaczenie na poniższym rysunku przedstawia:',
		answers: [
			'A. Lampkę kontrolną - włączenia hamulca postojowego',
			'B. Lampkę kontrolną - awaria silnika',
			'C. Lampkę kontrolną - przeciążenie',
			'D. Lampkę kontrolną - nadmierna prędkość obrotowa silnika',
		],
		valid: 2,
		img: '/pytanie117.png',
	},
	//118
	{
		question: 'Zapalona lub migająca lampka kontrolna:',
		answers: [
			'A. Oznacza przekroczenie okresu serwisowego lub awarię urządzenia',
			'B. Oznacza konieczność regulacji naciągu cięgien nośnych',
			'C. Powinna być zapalona podczas pracy silnika',
			'D. Wszystkie odpowiedzi są nieprawidłowe',
		],
		valid: 0,
		img: '/pytanie118.png',
	},
	//119
	{
		question: 'Pracując wózkiem z osprzętem wymiennym operator powinien:',
		answers: [
			'A. Przestrzegać zapisów instrukcji eksploatacji wózka oraz instrukcji osprzętu wymiennego',
			'B. Przestrzegać przepisów zakładowych',
			'C. Stosować się do właściwego diagramu udźwigu',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	//120
	{
		question: 'Osprzęt wymienny może być zainstalowany do wózka przez:',
		answers: [
			'A. Konserwatora wózków jezdniowych',
			'B. Operatora wózków jezdniowych',
			'C. Producenta osprzętu wymiennego',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	//121
	{
		question: 'Jaki wpływ na udźwig wózka ma zamontowany dodatkowy osprzęt wymienny:',
		answers: [
			'A. Zwiększa udźwig wózka',
			'B. Zmniejsza udźwig wózka',
			'C. Nie ma wpływu',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 1,
	},
	//122
	{
		question: 'Po montażu osprzętu wymiennego przewidzianego przez wytwórcę wózka:',
		answers: [
			'A. Urządzenie należy zgłosić do badania w UDT',
			'B. Urządzenie można eksploatować bez dodatkowych badań w UDT',
			'C. Operator wykonuje próby z przeciążeniem',
			'D. Operator dokonuje wpisu w dzienniku konserwacji',
		],
		valid: 0,
	},
	//123
	{
		question: 'Dźwignia oznaczona poniższym piktogramem, po wychyleniu przez operatora powoduje:',
		answers: [
			'A. Uruchomienie mechanizmu podnoszenia',
			'B. Uruchomienie mechanizmu przechyłu',
			'C. Uruchomienie mechanizmu przesuwu bocznego',
			'D. Wszystkie odpowiedzi są nieprawidłowe',
		],
		valid: 0,
		img: '/pytanie123.png',
	},
	//124
	{
		question: 'Praca wózkiem z zamontowanymi przedłużkami do wideł jest dozwolona w przypadku gdy:',
		answers: [
			'A. Wytwórca nie zabronił takiej pracy',
			'B. Urządzenie jest wyposażone w stosowny diagram udźwigu',
			'C. Montaż przedłużek został wykonany zgodnie z zaleceniami wytwórcy',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	//125
	{
		question: 'Zabezpieczenie elektryczne montowane na zakończeniu dyszla wózka jezdniowego prowadzonego to:',
		answers: [
			'A. Łącznik STOP',
			'B. Łącznik brzuszny',
			'C. Kontakt zluzowania łańcucha nośnego',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 0,
	},
	//126
	{
		question: 'Który z elementów wyposażenia zabezpiecza przed uruchomieniem urządzenia przez osoby niepowołane?',
		answers: ['A. Łącznik STOP', 'B. Stacyjka', 'C. Klawiatura kodów dostępu', 'D. Odpowiedź b i c jest prawidłowa'],
		valid: 3,
	},
	//127
	{
		question: 'Cecha 1500 x 500 znajdująca się na widle nośnej oznacza:',
		answers: [
			'A. Maksymalny udźwig jednej widły wynoszący 1,5 t w odległości 500 mm od czoła widły',
			'B. Maksymalny udźwig pary wideł wynoszący 1,5 t w odległości 500 mm od czoła wideł',
			'C. Wymiary zewnętrzne widły nośnej',
			'D. Symbol kontroli jakości',
		],
		valid: 1,
	},
	//128
	{
		question: 'Maksymalny ładunek jaki można podnieść na parze wideł oznaczonych 2500 x 500 każda wynosi:',
		answers: ['A. 0,5 t', 'B. 2,5 t', 'C. 5,0 t', 'D. 12,0 t'],
		valid: 2,
	},
	//129
	{
		question:
			'Praca wózkiem jezdniowym podnośnikowym ze zbyt niskim poziomem oleju w układzie hydraulicznym może objawiać się:',
		answers: [
			'A. "Skokowym", przerywanym ruchem siłownika do góry',
			'B. Brakiem realizacji wykonania zadanych ruchów mechanizmu podnoszenia',
			'C. Głośną pracą pompy hydraulicznej',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3,
	},
	//130
	{
		question: '"Skokowy" ruch mechanizmu podnoszenia do góry może być spowodowany:',
		answers: [
			'A. Zbyt niskim poziomem oleju w układzie hydraulicznym',
			'B. Nadmierną korozją łańcucha układu podnoszenia',
			'C. Uszkodzoną rolką prowadzącą masztu',
			'D. Uszkodzonym przewodem hydraulicznym zasilającym siłownik podnoszenia',
		],
		valid: 0,
	},
	//131
	{
		question: 'Nieszczelność w układzie hydraulicznym wózka jezdniowego podnośnikowego może się objawiać:',
		answers: [
			'A. Wyciekiem zewnętrznym',
			'B. Niekontrolowanym opadaniem ładunku',
			'C. "Skokowym", przerywanym ruchem siłownika do góry',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3,
	},
	//132
	{
		question: 'Gęstość oleju hydraulicznego w temperaturze ujemnej:',
		answers: ['A. Maleje', 'B. Wzrasta', 'C. Temperatura nie ma wpływu na gęstość oleju', 'D. Pozostaje bez zmian'],
		valid: 1,
	},
	//133
	{
		question: 'Stan poziomu oleju w układzie hydraulicznym operator sprawdza:',
		answers: [
			'A. Zawsze przed rozpoczęciem i po zakończeniu pracy',
			'B. Zawsze 1 raz w miesiącu',
			'C. Zgodnie z zaleceniami zawartymi w instrukcji eksploatacji',
			'D. Zgodnie z zaleceniami zawartymi w protokole z badań okresowych',
		],
		valid: 2,
	},
	//134
	{
		question:
			'O ile wytwórca nie określi inaczej, maksymalne odchylenie od pionowego położenia masztu obciążonego ciężarem nominalnym, spowodowane wewnętrznym przeciekiem w układzie wychyłu nie powinno przekroczyć:',
		answers: [
			'A. 5% w czasie 10 min',
			'B. 5° w czasie 10 min',
			'C. 10° w czasie 10 min',
			'D. Brak ustalonych wytycznych',
		],
		valid: 1,
	},
	//135
	{
		question:
			'O ile wytwórca nie określi inaczej, składowa opadania mechanizmu podnoszenia wózka o udźwigu do 10 t obciążonego ciężarem nominalnym nie powinna przekroczyć:',
		answers: [
			'A. 100 mm w ciągu pierwszych 10 min',
			'B. 50% długości siłownika w ciągu pierwszych 10 min',
			'C. 200 mm w ciągu pierwszych 10 min',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 0, // Odpowiedź A
	},
	//136
	{
		question:
			'O ile wytwórca nie określi inaczej, składowa opadania mechanizmu podnoszenia wózka o udźwigu powyżej 10 t obciążonego ciężarem nominalnym nie powinna przekroczyć:',
		answers: [
			'A. 100 mm w ciągu pierwszych 10 min',
			'B. 50% długości siłownika w ciągu pierwszych 10 min',
			'C. 200 mm w ciągu pierwszych 10 min',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 2, // Odpowiedź C
	},
	//137
	{
		question:
			'Optymalne obciążenie potrzebne do przeprowadzenia próby szczelności wewnętrznej układu hydraulicznego wynosi:',
		answers: [
			'A. 50% obciążenia nominalnego',
			'B. 100% obciążenia nominalnego',
			'C. 110% obciążenia nominalnego',
			'D. 125% obciążenia nominalnego',
		],
		valid: 1, // Odpowiedź B
	},
	//138
	{
		question:
			'O ile wytyczne producenta nie stanowią inaczej, minimalna wysokość na jaką należy podnieść ładunek podczas próby szczelności wewnętrznej układu wychyłu masztu wynosi:',
		answers: ['A. 100 mm', 'B. 500 mm', 'C. 2500 mm', 'D. Próby nie wykonuje się'],
		valid: 1, // Odpowiedź B
	},
	//139
	{
		question: 'Sprawdzenie w bezpieczny sposób działania zaworu przelewowego należy wykonać:',
		answers: [
			'A. Z obciążeniem nominalnym',
			'B. Z obciążeniem 50% nominalnego',
			'C. Bez obciążenia',
			'D. Z obciążeniem 125% nominalnego',
		],
		valid: 3, // Odpowiedź D
	},
	//140
	{
		question: 'Sprawdzenie układu hydraulicznego w wózkach podnośnikowych obejmuje:',
		answers: [
			'A. Próbę szczelności wewnętrznej',
			'B. Próbę zaworu przelewowego',
			'C. Ocenę szczelności zewnętrznej',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3, // Odpowiedź D
	},
	//141
	{
		question: 'Sprawdzenie poprawności działania dźwigni sterowniczych należy wykonać:',
		answers: [
			'A. Sprawdzając zgodność realizowanych ruchów z oznaczeniami',
			'B. Bez obciążenia',
			'C. Wychylając dźwignie sterownicze we wszystkie przewidziane przez wytwórcę kierunki',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//142
	{
		question:
			'Zakres przeprowadzonych prób wózków jezdniowych podnośnikowych wyposażonych w hydrauliczny osprzęt dodatkowy obejmuje:',
		answers: [
			'A. Całe wyposażenia hydrauliczne wózka wraz z osprzętem dodatkowym',
			'B. Osprzęt nie stanowi wyposażenia wózka i nie podlega kontroli przez operatora',
			'C. Próby sprawdzające poprawność działania wykonuje tylko konserwator',
			'D. Próbę z obciążeniem 125%',
		],
		valid: 0, // Odpowiedź A
	},
	//143
	{
		question: 'Akumulatory kwasowe można ładować:',
		answers: [
			'A. W każdym pomieszczeniu niezależnie od przeznaczenia',
			'B. Tylko w pomieszczeniu klimatyzowanym',
			'C. W miejscu specjalnie do tego przeznaczonym',
			'D. Wyłącznie w pomieszczeniach ogrzewanych',
		],
		valid: 2, // Odpowiedź C
	},
	//144
	{
		question: 'Pomieszczenie, w którym odbywa się ładowanie akumulatorów wózka:',
		answers: [
			'A. Nie musi posiadać wentylacji, ale musi być ogrzewane',
			'B. Musi być ogrzewane i musi posiadać wentylację',
			'C. Musi posiadać wentylację',
			'D. Brak jednoznacznych wytycznych',
		],
		valid: 1, // Odpowiedź B
	},
	//145
	{
		question: 'Obowiązkiem operatora wózków jezdniowych podnośnikowych jest:',
		answers: [
			'A. Sprawdzenie stopnia naładowania akumulatora',
			'B. Sprawdzenie poziomu elektrolitu',
			'C. Sprawdzenie poprawności zamocowania akumulatora',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//146
	{
		question: 'Osoba dokonująca wymiany rozładowanych akumulatorów powinna:',
		answers: [
			'A. Posiadać uprawnienia elektryczne SEP',
			'B. Przestrzegać wytycznych zawartych w instrukcji',
			'C. Posiadać zaświadczenie kwalifikacyjne do konserwacji wózków',
			'D. Posiadać zaświadczenie kwalifikacyjne do obsługi wózków',
		],
		valid: 1, // Odpowiedź B
	},
	//147
	{
		question: 'Łącznik bezpieczeństwa "STOP" służy do:',
		answers: [
			'A. Awaryjnego zatrzymania pracy wózka',
			'B. Normalnego zatrzymania pracy silnika',
			'C. Zabezpiecza przed uruchomieniem wózka przez osoby nieuprawnione',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 0, // Odpowiedź A
	},
	//148
	{
		question: 'W przypadku stwierdzenia sytuacji niebezpiecznej operator wózka ma obowiązek:',
		answers: [
			'A. Zatrzymać wózek',
			'B. Przerwać pracę',
			'C. Opuscić ładunek (pod warunkiem nie zwiększenia zagrożenia)',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	}, //149
	{
		question: 'Sprawdzenie poprawności działania łącznika bezpieczeństwa STOP należy wykonać:',
		answers: [
			'A. Tylko podczas przeglądów konserwacyjnych',
			'B. Tylko w ramach przeglądów specjalnych',
			'C. Zawsze przed rozpoczęciem pracy',
			'D. Nie ma konieczności sprawdzania poprawności działania',
		],
		valid: 2, // Odpowiedź C
	},
	//150
	{
		question: 'Graniczne wartości zużycia ogumienia zawiera:',
		answers: [
			'A. Deklaracja zgodności CE',
			'B. Instrukcja eksploatacji wózka',
			'C. Protokół z badań UDT',
			'D. Dyrektywa maszynowa',
		],
		valid: 1, // Odpowiedź B
	},
	//151
	{
		question: 'Ciśnienie w oponach powinno być dostosowane do:',
		answers: [
			'A. Zaleceń instrukcji eksploatacji wózka',
			'B. Wyłącznie warunków panujących w miejscu eksploatacji',
			'C. Preferencji operatora',
			'D. Wymagań właściciela terenu',
		],
		valid: 0, // Odpowiedź A
	},
	//152
	{
		question: 'Nierówne ciśnienie w oponach na jednej osi może spowodować:',
		answers: [
			'A. Poprawę właściwości jezdnych wózka',
			'B. Zmniejszenie stateczności wózka podczas transportu ładunków',
			'C. Nie ma żadnego wpływu na stateczność wózka',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 1, // Odpowiedź B
	},
	//153
	{
		question: 'Wpływ na przyspieszone zużycie opon pneumatycznych ma:',
		answers: [
			'A. Gwałtowne hamowanie, najeżdżanie na przeszkody z dużą prędkością',
			'B. Jazda ze zbyt niskim ciśnieniem',
			'C. Manewrowanie wózkiem na małej przestrzeni',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3, // Odpowiedź D
	},
	//154
	{
		question: 'Nierównomierne zużycie opon pełnych znajdujących się na wspólnej osi:',
		answers: [
			'A. Poprawia właściwości jezdne wózka',
			'B. Nie ma żadnego wpływu na bezpieczną eksploatację',
			'C. Może spowodować utratę stateczności wózka',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 2, // Odpowiedź C
	},
	//155
	{
		question: 'Ocenę stanu technicznego ogumienia przeprowadza:',
		answers: [
			'A. Konserwator podczas przeglądów konserwacyjnych',
			'B. Operator w ramach czynności przed rozpoczęciem pracy',
			'C. Inspektor UDT w trakcie wykonywanych czynności',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 0, // Odpowiedź A
	}, //156
	{
		question:
			'W przypadku stwierdzenia uszkodzeń mechanicznych ogumienia, mających wpływ na bezpieczną eksploatację, operator wózka:',
		answers: [
			'A. Powiadamia przełożonego o stwierdzonej niezgodności, ale nie przerywa pracy',
			'B. Wstrzymuje pracę urządzenia i powiadamia przełożonego o stwierdzonej niezgodności',
			'C. Kontynuuje pracę zmniejszając prędkość jazdy',
			'D. Kontynuuje pracę zmniejszając prędkość poruszania się',
		],
		valid: 1, // Odpowiedź B
	},
	//157
	{
		question: 'Operator po zauważeniu podczas jazdy palącej się lampki kontrolnej ciśnienia oleju silnika powinien:',
		answers: [
			'A. Zjechać w bezpieczne miejsce, opuścić ładunek, wyłączyć silnik',
			'B. Może kontynuować jazdę jeśli stan oleju jest prawidłowy',
			'C. Nie musi podejmować żadnych działań',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 0, // Odpowiedź A
	},
	//158
	{
		question: 'Po zakończeniu pracy operator powinien:',
		answers: [
			'A. Upewnić się, że widły są opuszczone, wózek jest w miejscu stałego postoju i nie stwarza zagrożenia',
			'B. Uruchomić hamulec postojowy',
			'C. Wcisnąć łącznik STOP',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//159
	{
		question: 'Sprawne dźwignie sterujące:',
		answers: [
			'A. Po zwolnieniu nacisku powinny samoczynnie wracać do pozycji neutralnych',
			'B. Mogą nie mieć oznaczeń gdy operator wie do czego służą',
			'C. Powinny realizować kierunki ruchów zgodne z oznaczeniami',
			'D. Odpowiedź a i c jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//160
	{
		question: 'Opis próby sprawdzenia poprawności działania hamulca zasadniczego opisuje:',
		answers: [
			'A. Instrukcja obsługi wózka',
			'B. Ustawa o dozorze technicznym',
			'C. Dyrektywa maszynowa',
			'D. Wewnętrzne przepisy zakładowe',
		],
		valid: 0, // Odpowiedź A
	},
	//161
	{
		question: 'Informacje dotyczące sposobu sprawdzania poprawności działania hamulca pomocniczego są zawarte w:',
		answers: [
			'A. Rozporządzeniu w sprawie eksploatacji urządzeń transportu bliskiego',
			'B. Instrukcji obsługi wózka',
			'C. Ustawie o dozorze technicznym',
			'D. Wytycznych inspektora BHP',
		],
		valid: 1, // Odpowiedź B
	},
	//162
	{
		question: 'Podczas próby hamulca zasadniczego maszt powinien być w pozycji:',
		answers: [
			'A. Pozycja masztu nie ma znaczenia',
			'B. Przechylony ,,na siebie"',
			'C. Przechylony ,,od siebie"',
			'D. Pionowej',
		],
		valid: 3, // Odpowiedź D
	}, //163
	{
		question: 'Próbę hamulca zasadniczego należy przeprowadzać:',
		answers: [
			'A. Z ładunkiem 110% udźwigu urządzenia',
			'B. Z ładunkiem 125% udźwigu urządzenia',
			'C. Bez ładunku',
			'D. Bez ładunku a następnie z ładunkiem nominalnym',
		],
		valid: 3, // Odpowiedź C
	},
	//164
	{
		question:
			'Jeżeli w czasie próby hamulca pomocniczego operator uzna, że jego działanie jest nieprawidłowe powinien:',
		answers: [
			'A. Wstrzymać eksploatację urządzenia',
			'B. Poinformować przełożonego',
			'C. Kontynuować pracę ze zmniejszoną prędkością jazdy',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//165
	{
		question: 'W przypadku stwierdzenia awarii układu hamulcowego operator powinien:',
		answers: [
			'A. W ramach posiadanych kompetencji wykonać naprawę hamulca',
			'B. Wstrzymać eksploatację urządzenia',
			'C. Poinformować Urząd Dozoru Technicznego',
			'D. Kontynuować pracę z zachowaniem szczególnej ostrożności',
		],
		valid: 1, // Odpowiedź B
	},
	//166
	{
		question: 'W przypadku stwierdzenia wycieku płynu hamulcowego, operator powinien:',
		answers: [
			'A. Uzupełnić płyn hamulcowy i kontynuować jazdę do zakończenia pracy',
			'B. Wstrzymać eksploatację urządzenia i powiadomić przełożonego',
			'C. Wstrzymać eksploatację urządzenia i powiadomić inspektora UDT',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//167
	{
		question: 'W przypadku stwierdzenia niewłaściwego działania hamulca pomocniczego, operator:',
		answers: [
			'A. Na wyraźne polecenie przełożonego dokonuje jego naprawy',
			'B. Zgłasza awarię do UDT',
			'C. Wstrzymuje eksploatację urządzenia i powiadamia przełożonego',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 2, // Odpowiedź C
	},
	//168
	{
		question: 'Hamulec zasadniczy należy sprawdzać jadąc wózkiem podnośnikowym i hamując:',
		answers: ['A. Do przodu', 'B. Do tyłu', 'C. W obu kierunkach', 'D. Hamulec sprawdza tylko konserwator'],
		valid: 2, // Odpowiedź C
	},
	//169
	{
		question: 'Operator powinien przeprowadzić sprawdzenie hamulców:',
		answers: [
			'A. Zgodnie z terminami zawartymi w instrukcji konserwacji',
			'B. Raz na miesiąc',
			'C. Raz na tydzień',
			'D. Zawsze przed rozpoczęciem pracy',
		],
		valid: 0, // Odpowiedź A
	},
	//170
	{
		question: 'Schodząc z fotela operatora, obsługujący wózek powinien:',
		answers: [
			'A. Zawsze załączyć hamulec postojowy',
			'B. Załączyć hamulec postojowy tylko w przypadku postoju wózka na wzniesieniu',
			'C. Unieść widły na maksymalną wysokość',
			'D. Przechylić maszt w pozycję "na siebie"',
		],
		valid: 0, // Odpowiedź A
	}, //171
	{
		question: 'Zakres czynności kontrolnych masztu wózka podnośnikowego obejmuje:',
		answers: [
			'A. Sprawdzenie czy nie wystąpiły pęknięcia',
			'B. Sprawdzenie stanu rolek prowadzących',
			'C. Sprawdzenie ogranicznika krańcowego położenia karetki',
			'D. Wszystkie odpowiedzi są poprawne',
		],
		valid: 3, // Odpowiedź D
	},
	//172
	{
		question: 'Podczas jazdy wózkiem podnośnikowym z ładunkiem na widłach należy:',
		answers: [
			'A. Manipulować pochyłem masztu w zależności od ukształtowania terenu',
			'B. Poruszać się z masztem przechylonym "na siebie"',
			'C. Transportować ładunek w dowolny wybrany przez operatora sposób',
			'D. Manipulować pochyłem masztu w zależności od prędkości poruszania się',
		],
		valid: 1, // Odpowiedź B
	},
	//173
	{
		question: 'Ładunek należy transportować:',
		answers: [
			'A. Na wysokości powyżej linii wzroku operatora, jeżeli poprawia to widoczność',
			'B. Na wysokości około 20-30 cm nad poziomem podłoża',
			'C. Na dowolnej wysokości',
			'D. Na wysokości ok 90 cm',
		],
		valid: 1, // Odpowiedź B
	},
	//174
	{
		question: 'Podczas zjazdu z pochyłej rampy wózkiem czołowym podnośnikowym wraz z ładunkiem, operator:',
		answers: [
			'A. Porusza się przodem',
			'B. Porusza się tyłem',
			'C. Zachowuje szczególną ostrożność',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//175
	{
		question:
			'Podczas wjazdu na pochyłą rampę wózkiem jezdniowym podnośnikowym z ładunkiem ograniczającym widoczność, operator:',
		answers: [
			'A. Korzysta z pomocy drugiej osoby',
			'B. Porusza się przodem',
			'C. Porusza się tyłem',
			'D. Odpowiedź a i b jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//176
	{
		question: 'Poruszanie się wózkiem w poprzek pochyłej rampy jest:',
		answers: [
			'A. Zabronione',
			'B. Dozwolone',
			'C. Dopuszczalne pod warunkiem zachowania szczególnej ostrożności',
			'D. Dopuszczalne pod warunkiem obciążenia wózka ładunkiem uniesionym na minimalną wysokość',
		],
		valid: 0, // Odpowiedź A
	},
	//177
	{
		question: 'Poruszając się wózkiem z ładunkiem ograniczającym widoczność operator powinien:',
		answers: [
			'A. Jechać tyłem',
			'B. Jechać przodem, z pomocą osoby informującej o zagrożeniach',
			'C. Poruszać się z bezpieczną prędkością',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	}, //178
	{
		question: 'Podczas jazdy wózkiem jezdniowym podnośnikowym z ładunkiem należy:',
		answers: [
			'A. Unikać gwałtownych skrętów',
			'B. Przewozić ładunek na wysokości transportowej',
			'C. Dostosować prędkość jazdy do panujących warunków',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//179
	{
		question: 'Wylot zaworu butli gazowej powinien być skierowany:',
		answers: ['A. W dół', 'B. W górę', 'C. Poziomo', 'D. Pozycja nie ma znaczenia'],
		valid: 0, // Odpowiedź A
	},
	//180
	{
		question: 'Szczelność instalacji gazowej sprawdza się przy pomocy:',
		answers: [
			'A. Detektora gazu',
			'B. Specjalnego środka',
			'C. Wody mydlanej',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//181
	{
		question: 'Eksploatacja wózka jezdniowego w temperaturze poniżej -10°C:',
		answers: [
			'A. Jest dozwolona pod warunkiem wyposażenia wózka w ogrzewanie kabiny operatora',
			'B. Jest dozwolona jeśli instrukcja eksploatacji na to zezwala',
			'C. Jest zabroniona z uwagi na możliwości utraty przyczepności',
			'D. Jest zabroniona z uwagi na zmianę parametrów technicznych oleju hydraulicznego',
		],
		valid: 3, // Odpowiedź D
	},
	//182
	{
		question: 'Eksploatacja wózka jezdniowego w temperaturze powyżej 30°C:',
		answers: [
			'A. Jest zabroniona z uwagi na pogorszenie warunków pracy operatora',
			'B. Jest dozwolona pod warunkiem wyposażenia wózka w klimatyzowaną kabinę operatora',
			'C. Jest zabroniona z uwagi na zmianę parametrów technicznych oleju hydraulicznego',
			'D. Jest dozwolona jeśli instrukcja eksploatacji na to zezwala',
		],
		valid: 3, // Odpowiedź D
	},
	// 183 i 184 sa w part 3
	//185
	{
		question: 'Odstawiając ładunek na regał magazynowy operator powinien znać:',
		answers: [
			'A. Masę towaru i obciążenie maksymalne gniazda regału',
			'B. Masę towaru i obciążenie minimalne ramy regału',
			'C. Wymiary zewnętrzne transportowanego ładunku',
			'D. Odpowiedź a i c jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//186
	{
		question: 'Podczas transportu ładunków wielkogabarytowych operator powinien:',
		answers: [
			'A. Jechać tyłem',
			'B. Jechać przodem wychylając się poza obrys wózka',
			'C. Jechać przodem korzystając z pomocy drugiej osoby',
			'D. Odpowiedź a i c jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//187
	{
		question: 'Na co powinien zwrócić uwagę operator podczas wymiany baterii trakcyjnych?',
		answers: [
			'A. Na masę i wymiary baterii',
			'B. Na pojemność baterii',
			'C. Na dane adresowe producenta baterii',
			'D. Odpowiedzi a i b są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//188
	{
		question: 'Przyczyną utraty stateczności wózka może być:',
		answers: [
			'A. Zbyt niskie ciśnienie w oponach',
			'B. Szybka jazda w zakrętach',
			'C. Gwałtowne hamowanie przy jeździe z ładunkiem',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//189
	{
		question: 'Dopuszczalna prędkość jazdy wózka jest określona:',
		answers: [
			'A. W ustawie o dozorze technicznym',
			'B. W protokole badania wystawionym przez UDT',
			'C. W decyzji zezwalającej na eksploatację',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 1, // Odpowiedź B
	},
	//190
	{
		question: 'Przed rozpoczęciem pracy wózkiem należy sprawdzić funkcjonowanie:',
		answers: [
			'A. Układu hydraulicznego',
			'B. Układu hamulcowego',
			'C. Układu kierowniczego',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//191
	{
		question: 'Po zamontowaniu dodatkowego osprzętu wymiennego należy:',
		answers: [
			'A. Zapoznać się z właściwym diagramem udźwigu',
			'B. Zgłosić do UDT w celu wykonania badania technicznego',
			'C. Sprawdzić, czy zakres posiadanych uprawnień do obsługi obejmuje zamontowany osprzęt',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//192
	{
		question: 'Przed wjazdem wózkiem na rampę załadowczą operator powinien sprawdzić:',
		answers: [
			'A. Kąt nachylenia rampy, oraz zdolność wózka do pokonywania wzniesień',
			'B. Nośność rampy',
			'C. Ciężar ładunku oraz masę własną wózka',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//193
	{
		question: 'Podczas jazdy wózkiem podnośnikowym należy:',
		answers: [
			'A. Przestrzegać przepisów BHP',
			'B. Stosować się do znaków, oznaczeń i symboli umieszczonych w obszarze pracy wózka',
			'C. Przestrzegać instrukcji obsługi wózka',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//194
	{
		question: 'Gdzie znajduje się informacja dotycząca udźwigu wózka:',
		answers: [
			'A. W instrukcji eksploatacji wózka',
			'B. Na tabliczce znamionowej wózka',
			'C. Na diagramie udźwigu',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//195
	{
		question: 'Przed rozpoczęciem pracy wózkiem należy:',
		answers: [
			'A. Zapoznać się z zakresem pracy',
			'B. Określić masę transportowanego ładunku',
			'C. Sprawdzić, czy osprzęt wózka jest właściwie dobrany do ładunku',
			'D. Wszystkie odpowiedzi są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//196
	{
		question: 'Praca wózka z koszem do podnoszenia osób zakładanym na widły:',
		answers: [
			'A. Jest dozwolona wyłącznie po uzgodnieniu szczegółowych warunków eksploatacji z UDT',
			'B. Jest dozwolona bez dodatkowych wymagań',
			'C. Jest zabroniona',
			'D. Jest dozwolona za zgodą właściciela zakładu bez dodatkowych wymagań',
		],
		valid: 1, // Odpowiedź A
	},
	//197
	{
		question: 'W przypadku kiedy wózek traci stateczność, operator:',
		answers: [
			'A. Stara się opuścić kabinę wózka (przed jego wywróceniem się)',
			'B. Pozostaje w kabinie',
			'C. Utrzymuje pozycję siedzącą trzymając się mocno kierownicy',
			'D. Odpowiedź b i c jest prawidłowa',
		],
		valid: 3, // Odpowiedź D
	},
	//198
	{
		question: 'W chwili wywracania się wózka należy:',
		answers: [
			'A. Niezwłocznie wyskoczyć z kabiny',
			'B. Ostro zahamować',
			'C. Skręcić gwałtownie koła w kierunku przechylenia, by spróbować zapobiec wywróceniu',
			'D. Wszystkie odpowiedzi są niepoprawne',
		],
		valid: 3, // Odpowiedź D
	},
	//199
	{
		question: 'Wózek może stracić stateczność na skutek:',
		answers: [
			'A. Podnoszenia ładunku o ciężarze większym niż udźwig wózka',
			'B. Wykonywania gwałtownych skrętów kół podczas jazdy',
			'C. Zawracania wózkiem na wzniesieniu',
			'D. Wszystkie powyżej są prawidłowe',
		],
		valid: 3, // Odpowiedź D
	},
	//200
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, następujące w toku eksploatacji maksymalne wydłużenie łańcucha nośnego może wynosić:',
		answers: ['A. 3 cm', 'B. 3 mm', 'C. 3%', 'D. 10%'],
		valid: 3, // Odpowiedź C
	}, //201
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, dopuszczalna ilość pękniętych płytek łańcucha nośnego (konstrukcji Flyera) wynosi:',
		answers: [
			'A. 3% całkowitej ilości płytek',
			'B. 6 sztuk na długości 30 ogniw',
			'C. 1 sztuka na każdy metr łańcucha',
			'D. 0',
		],
		valid: 3, // Odpowiedź D
	},
	//202
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, minimalna dopuszczalna grubość poziomej części wideł zmierzona w pobliżu ich naroża (pięty) wynosi:',
		answers: [
			'A. 25 mm przy grubości nominalnej 30 mm',
			'B. 57 mm przy grubości nominalnej 60 mm',
			'C. 36 mm przy grubości nominalnej 40 mm',
			'D. Zawsze wynosi 50% grubości nominalnej wideł',
		],
		valid: 1, // Odpowiedź A
	},
	//203
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, minimalna dopuszczalna grubość poziomej części wideł zmierzona w pobliżu ich naroża (pięty) wynosi:',
		answers: [
			'A. 27 mm przy grubości nominalnej 30 mm',
			'B. 57 mm przy grubości nominalnej 60 mm',
			'C. 25 mm przy grubości nominalnej 30 mm',
			'D. Zawsze wynosi 50% grubości nominalnej wideł',
		],
		valid: 2, // Odpowiedź B
	},
	//204
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, minimalna dopuszczalna grubość poziomej części wideł zmierzona w pobliżu ich naroża (pięty) wynosi:',
		answers: [
			'A. 25 mm przy grubości nominalnej 30 mm',
			'B. 55 mm przy grubości nominalnej 60 mm',
			'C. 40 mm przy grubości nominalnej 60 mm',
			'D. Zawsze wynosi 50% grubości nominalnej wideł',
		],
		valid: 1, // Odpowiedź A
	},
	//205
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, minimalna dopuszczalna grubość poziomej części wideł zmierzona w pobliżu ich naroża (pięty) wynosi:',
		answers: [
			'A. 25 mm przy grubości nominalnej 30 mm',
			'B. 45 mm przy grubości nominalnej 50 mm',
			'C. 50 mm przy grubości nominalnej 60 mm',
			'D. Zawsze wynosi 50% grubości nominalnej wideł',
		],
		valid: 3, // Odpowiedź C
	},
	//206
	{
		question:
			'Jeżeli instrukcja wózka nie stanowi inaczej, maksymalne dopuszczalne rozgięcie widły względem wartości oryginalnej (zwykle 90 stopni), wynosi:',
		answers: ['A. 1 cm', 'B. 3%', 'C. 3 stopnie', 'D. 0 stopni'],
		valid: 3, // Odpowiedź D
	},
	// 245
	{
		question: 'Święcąca się kontrolka ciśnienia oleju może świadczyć o:',
		answers: [
			'A. Zbyt niskim poziomie płynu w układzie hamulcowym',
			'B. Podwyższonej temperaturze silnika',
			'C. Zbyt niskim ciśnieniu oleju',
			'D. Odpowiedź A i C jest prawidłowa',
		],
		valid: 2, 
		img: '/pytanie101i245.png',
	},
];
export const utdPart3 = [
	// 183
	{
		question: 'W oparciu o tabelę określ jakie maksymalne obciążenie może przenieść gniazdo ładunkowe regału:',
		answers: ['A. 1320 kg', 'B. 1100 kg', 'C. 2700 kg', 'D. 2200 kg'],
		valid: 3, // Indeks prawidłowej odpowiedzi w tablicy answers (3 oznacza, że odpowiedź 'D' jest prawidłowa)
        img: '/pytanie184.png',
	},
	// 184
	{
		question:
			'W oparciu o tabelę, określ na które najwyższe gniazdo ładunkowe podasz towar dysponując wózkiem o maksymalnej wysokości podnoszenia 2100 mm:',
		answers: ['A. gniazdo 1', 'B. gniazdo 2', 'C. gniazdo 3', 'D. gniazdo 4'],
		valid: 1,
		img: '/pytanie184.png',
	},
	//207
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony A:',
		answers: ['A. 4836 mm', 'B. 4030 mm', 'C. 3100 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 0,
		img: '/pytanie207i208.png',
	},
	//208
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony B:',
		answers: ['A. 3100 mm', 'B. 4836 mm', 'C. 4030 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 2, 
        img: '/pytanie207i208.png',
	},
	//209
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony A:',
		answers: ['A. 3510 mm', 'B. 4212 mm', 'C. 2700 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 0,
		img: '/pytanie209i210.png',
	},
	//210
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony B:',
		answers: ['A. 4212 mm', 'B. 2700 mm', 'C. 3520 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 3, 
		img: '/pytanie209i210.png',
	},
	//211
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony A:',
		answers: ['A. 2600 mm', 'B. 3380 mm', 'C. 4056 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 2,
		img: '/pytanie211i212.png',
	},
	//212
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony B:',
		answers: ['A. 4056 mm', 'B. 2600 mm', 'C. 3380 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie211i212.png',
	},
	//213
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony A:',
		answers: ['A. 3640 mm', 'B. 4368 mm', 'C. 2800 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 2, // Odpowiedź c jest poprawna
		img: '/pytanie213i214.png',
	},
	//214
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu i rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego od strony B:',
		answers: ['A. 2800 mm', 'B. 3640 mm', 'C. 4368 mm', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 3, // Odpowiedź C jest poprawna
        img: '/pytanie213i214.png',
	},
	//215
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną bezpieczną wysokość podnoszenia ładunku pobranego z kierunku A:',
		answers: ['A. 2350 mm', 'B. 3300 mm', 'C. 1400 mm', 'D. 1300 mm'],
		valid: 1, // Odpowiedź B jest poprawna
		img: '/pytanie215.png',
	},
	//216
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną bezpieczną wysokość podnoszenia, ładunku pobranego z kierunku A:',
		answers: ['A. 700 mm', 'B. 1200 mm', 'C. 4500 mm', 'D. 1800 mm'],
		valid: 2, 
		img: '/pytanie216.png',
	},
	// 217
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek wskaż, na który regał lub regały można postawić ładunek:',
		answers: ['A. Regał 1', 'B. Regał 2', 'C. Regał 3', 'D. Wszystkie odpowiedzi są poprawne'],
		valid: 3, // Odpowiedź D jest poprawna
		img: '/pytanie217.png',
	},

	// 218
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek wskaż, na który regał lub regały można postawić ładunek:',
		answers: ['A. Regał 1', 'B. Regał 2', 'C. Regał 3', 'D. Wszystkie odpowiedzi są poprawne'],
		valid: 0, // Odpowiedź a jest poprawna
		img: '/pytanie218.png',
	},

	// 219
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek wskaż, na który regał lub regały można postawić ładunek:',
		answers: ['A. Regał 1', 'B. Regał 2', 'C. Regał 3', 'D. Odpowiedź A i B jest prawidłowa'],
		valid: 3, // Odpowiedź D jest poprawna (Regał 1 i 2)
		img: '/pytanie219.png',
	},

	// 220
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną bezpieczną wysokość podnoszenia, ładunku pobranego z kierunku A:',
		answers: ['A. 5940 mm', 'B. 7890 mm', 'C. 3600 mm', 'D. 4500 mm'],
		valid: 0, // Odpowiedź A jest poprawna
		img: '/pytanie220i221.png',
	},

	// 221
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną bezpieczną wysokość podnoszenia, ładunku pobranego z kierunku B:',
		answers: ['A. 5940 mm', 'B. 7890 mm', 'C. 3600 mm', 'D. 4500 mm'],
		valid: 2, // Odpowiedź c jest poprawna
		img: '/pytanie220i221.png',
	},
	// 222
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną bezpieczną wysokość podnoszenia, ładunku pobranego z kierunku A:',
		answers: ['A. 4860 mm', 'B. 8820 mm', 'C. 7070 mm', 'D. 10820 mm'],
		valid: 2, // Odpowiedź c jest poprawna 
		img: '/pytanie222i223.png',
	},

	// 223
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną bezpieczną wysokość podnoszenia, ładunku pobranego z kierunku B:',
		answers: ['A. 4860 mm', 'B. 5660 mm', 'C. 7070 mm', 'D. 10820 mm'],
		valid: 1, // Odpowiedź b jest poprawna
        img: '/pytanie222i223.png',
	},

	// 224
	{
		question: 'W oparciu o przedstawiony diagram udźwigu określ maksymalny udźwig wózka na wysokości 6 m:',
		answers: ['A. 1300 kg', 'B. 1500 kg', 'C. 1700 kg', 'D. 2000 kg'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie224i225.png',
	},

	// 225
	{
		question: 'W oparciu o przedstawiony diagram udźwigu określ maksymalny udźwig wózka na wysokości 6,7 m:',
		answers: ['A. 1400 kg', 'B. 1200 kg', 'C. 1000 kg', 'D. 1300 kg'],
		valid: 2, // Odpowiedź c jest poprawna
		img: '/pytanie224i225.png',
	},

	// 226
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu określ maksymalną masę ładunku, o wymiarach podstawy 1,6 m x 1,6 m:',
		answers: ['A. 4,5 t', 'B. 4,0 t', 'C. 3,5 t', 'D. 3,0 t'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie226i227.png',
	},
	// 227
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu określ maksymalną masę ładunku, o wymiarach podstawy 2 m x 2 m:',
		answers: ['A. 2,5 t', 'B. 3,5 t', 'C. 4,5 t', 'D. 3,0 t'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie226i227.png',
	},

	// 228
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku pobranego od strony B:',
		answers: ['A. 1300 kg', 'B. 1400 kg', 'C. 1600 kg', 'D. 2300 kg'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie228i229.png',
	},

	// 229
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku pobranego od strony A:',
		answers: ['A. 1500 kg', 'B. 2000 kg', 'C. 2300 kg', 'D. 2500 kg'],
		valid: 2, // Odpowiedź c jest poprawna
        img: '/pytanie228i229.png',
	},

	// 230
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku pobranego od strony B:',
		answers: ['A. 1100 kg', 'B. 1450 kg', 'C. 1800 kg', 'D. 2300 kg'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie230i231.png',
	},

	// 231
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, jaką można bezpiecznie podnieść pobierając ładunek od strony A:',
		answers: ['A. 1500 kg', 'B. 2000 kg', 'C. 2300 kg', 'D. 1800 kg'],
		valid: 3, // Odpowiedź d jest poprawna
		img: '/pytanie230i231.png',
	},

	// 232
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, jaką można bezpiecznie podnieść pobierając ładunek od strony A:',
		answers: ['A. 2695 kg', 'B. 3185 kg', 'C. 3500 kg', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 2, // Odpowiedź c jest poprawna
		img: '/pytanie232i233.png',
	},

	// 233
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, jaką można bezpiecznie podnieść pobierając ładunek od strony B:',
		answers: ['A. 2695 kg', 'B. 3500 kg', 'C. 3185 kg', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 2, // Odpowiedź c jest poprawna
		img: '/pytanie232i233.png',
	},

	// 234
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu określ maksymalny udźwig wózka, podnoszącego ładunek na wysokość 3000 mm:',
		answers: ['A. 2400 kg', 'B. 3600 kg', 'C. 3500 kg', 'D. 1500 kg'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie234i235i236.png',
	},

	// 235
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu określ maksymalny udźwig wózka, podnoszącego ładunek na wysokość 4000 mm:',
		answers: ['A. 3300 kg', 'B. 4000 kg', 'C. 3400 kg', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 2, // Odpowiedź c jest poprawna
        img: '/pytanie234i235i236.png',
	},

	// 236
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu określ maksymalny udźwig wózka, podnoszącego ładunek na wysokość 5000 mm:',
		answers: ['A. 4000 kg', 'B. 2700 kg', 'C. 3400 kg', 'D. Wszystkie odpowiedzi są niepoprawne'],
		valid: 3, // Odpowiedź d jest poprawna
        img: '/pytanie234i235i236.png',
	},

	// 237
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku jaką można bezpiecznie podnieść na wysokość 4000 mm, pobierając od strony B:',
		answers: ['A. 3400 kg', 'B. 2900 kg', 'C. 2700 kg', 'D. 3600 kg'],
		valid: 1, // Odpowiedź b jest poprawna
		img: '/pytanie237i238.png',
	},

	// 238
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku jaką można bezpiecznie podnieść na wysokość 4000 mm, pobierając od strony A:',
		answers: ['A. 2900 kg', 'B. 3600 kg', 'C. 3400 kg', 'D. 3200 kg'],
		valid: 2, // Odpowiedź c jest poprawna
        img: '/pytanie237i238.png',
	},

	// 239
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, pobranego od strony B:',
		answers: ['A. 1000 kg', 'B. 1200 kg', 'C. 1500 kg', 'D. 2300 kg'],
		valid: 2, // Odpowiedź c jest poprawna
		img: '/pytanie239i240.png',
	},

	// 240
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, pobranego od strony A:',
		answers: ['A. 1600 kg', 'B. 1900 kg', 'C. 2300 kg', 'D. 2500 kg'],
		valid: 2,
		img: '/pytanie239i240.png'
	},

	// 241
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, pobranego od strony A:',
		answers: ['A. 400 kg', 'B. 600 kg', 'C. 1500 kg', 'D. 2000 kg'],
		valid: 3,
        img: '/pytanie241i242.png',
	},

	// 242
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, pobranego od strony B:',
		answers: ['A. 400 kg', 'B. 600 kg', 'C. 1500 kg', 'D. 2000 kg'],
		valid: 2,
		img: '/pytanie241i242.png',
	},

	// 243
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, pobranego od strony A:',
		answers: ['A. 1400 kg', 'B. 1255 kg', 'C. 1040 kg', 'D. 840 kg'],
		valid: 0, 
		img: '/pytanie2431i244.png',
	},

	// 244
	{
		question:
			'W oparciu o przedstawiony diagram udźwigu oraz rysunek określ maksymalną masę ładunku, pobranego od strony B:',
		answers: ['A. 1400 kg', 'B. 1255 kg', 'C. 1040 kg', 'D. 840 kg'],
		valid: 2, 
		img: '/pytanie2431i244.png',
	},
];
