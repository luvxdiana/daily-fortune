// Interface

const uiTranslations = {
  en: {
    subtitle: "A little fortune for a brighter you",
    paperLabel: "Today's message",
    prompt: "Tap the envelope to reveal your fortune.",
    openButton: "Open your fortune",
    closedHelper: "Kind words. Brighter days. Every day.",
    openedButton: "Come back tomorrow",
    openedHelper: "Your fortune is already open for today.",
    timerTitle: "Your next fortune unlocks in",
    timerNote: "New message every day at midnight.",
    languageLabel: "Choose language",
  },

  uk: {
    subtitle: "Трішки магії для яскравішого дня",
    paperLabel: "Послання на сьогодні",
    prompt: "Натисни на конверт, щоб дізнатися передбачення.",
    openButton: "Відкрий передбачення",
    closedHelper: "Теплі слова. Світліші дні. Щодня.",
    openedButton: "Повертайся завтра",
    openedHelper: "Сьогоднішнє передбачення вже відкрито.",
    timerTitle: "Нове передбачення через",
    timerNote: "Нове послання щодня опівночі.",
    languageLabel: "Обрати мову",
  },

  no: {
    subtitle: "Litt magi for en lysere dag",
    paperLabel: "Dagens beskjed",
    prompt: "Trykk på konvolutten for å se dagens spådom.",
    openButton: "Åpne dagens spådom",
    closedHelper: "Gode ord. Lysere dager. Hver dag.",
    openedButton: "Kom tilbake i morgen",
    openedHelper: "Du har allerede åpnet dagens spådom.",
    timerTitle: "Neste spådom er klar om",
    timerNote: "Ny beskjed hver dag ved midnatt.",
    languageLabel: "Velg språk",
  },
};

// Fortunes

const fortuneTranslations = [
  // Soft & Sweet

  {
    en: "Today is a good day to be gentle with yourself.",
    uk: "Сьогодні саме той день, щоб бути ніжнішою до себе.",
    no: "I dag er en fin dag for å være litt snillere mot deg selv.",
  },
  {
    en: "A small step today will become a big win tomorrow.",
    uk: "Маленький крок сьогодні стане великою перемогою завтра.",
    no: "Et lite skritt i dag kan bli en stor seier i morgen.",
  },
  {
    en: "Your kindness will return to you in a beautiful way.",
    uk: "Твоя доброта повернеться до тебе чимось прекрасним.",
    no: "Godheten din kommer tilbake til deg på en vakker måte.",
  },
  {
    en: "Something soft and lovely is making its way to you.",
    uk: "До тебе вже прямує щось ніжне й чудове.",
    no: "Noe mykt og fint er på vei inn i livet ditt.",
  },
  {
    en: "Trust your pace. You are not behind.",
    uk: "Рухайся у своєму темпі. Ти нікуди не запізнюєшся.",
    no: "Ta ting i ditt eget tempo. Du ligger ikke etter.",
  },
  {
    en: "A calm heart will help you hear the right answer.",
    uk: "Спокійне серце допоможе почути правильну відповідь.",
    no: "Et rolig hjerte gjør det lettere å finne svaret.",
  },
  {
    en: "You are closer to your goal than you think.",
    uk: "Ти ближче до мети, ніж тобі здається.",
    no: "Du er nærmere målet enn du tror.",
  },
  {
    en: "A happy surprise may find you very soon.",
    uk: "Незабаром на тебе може чекати приємний сюрприз.",
    no: "En hyggelig overraskelse kan dukke opp snart.",
  },
  {
    en: "Let today be simple, warm, and enough.",
    uk: "Нехай сьогодні буде просто, тепло — і цього достатньо.",
    no: "La dagen være enkel og varm. Det er mer enn nok.",
  },
  {
    en: "Your light is more visible than you realize.",
    uk: "Твоє світло помітніше, ніж ти думаєш.",
    no: "Lyset ditt synes mer enn du aner.",
  },
  {
    en: "Rest is productive too.",
    uk: "Відпочинок — теж корисна справа.",
    no: "Hvile er også produktivt.",
  },
  {
    en: "You are allowed to begin again, softly.",
    uk: "Ти можеш почати знову. Ніжно, без поспіху.",
    no: "Du har lov til å begynne på nytt, helt rolig.",
  },
  {
    en: "A peaceful day starts with one kind thought.",
    uk: "Спокійний день починається з однієї доброї думки.",
    no: "En fredelig dag starter med én god tanke.",
  },
  {
    en: "The energy you need will return step by step.",
    uk: "Сили повернуться до тебе поступово.",
    no: "Energien kommer tilbake, litt etter litt.",
  },
  {
    en: "Believe in your quiet magic.",
    uk: "Вір у свою тиху магію.",
    no: "Tro på din egen stille magi.",
  },
  {
    en: "You are growing even when it feels slow.",
    uk: "Ти зростаєш, навіть коли цього не відчуваєш.",
    no: "Du vokser, selv når det ikke føles sånn.",
  },
  {
    en: "Today may bring clarity where there was doubt.",
    uk: "Сьогодні сумніви можуть нарешті розвіятися.",
    no: "I dag kan du få klarhet i noe du har tvilt på.",
  },
  {
    en: "Your dream deserves patience and care.",
    uk: "Твоя мрія варта терпіння й турботи.",
    no: "Drømmen din fortjener tid og omsorg.",
  },
  {
    en: "Even a tiny victory counts today.",
    uk: "Навіть крихітна перемога сьогодні має значення.",
    no: "Selv en bitteliten seier teller i dag.",
  },
  {
    en: "You are creating a brighter future for yourself.",
    uk: "Ти створюєш для себе світліше майбутнє.",
    no: "Du skaper en lysere fremtid for deg selv.",
  },

  // Girl Power

  {
    en: "The universe says you're expensive. Act accordingly. 💋",
    uk: "Всесвіт каже, що ти дорога штучка. Поводься відповідно. 💋",
    no: "Universet sier at du er eksklusiv. Oppfør deg deretter. 💋",
  },
  {
    en: "You're not everyone's cup of tea. You're champagne, darling. 🥂",
    uk: "Ти не всім до смаку. Ти ж шампанське, люба. 🥂",
    no: "Du er ikke alles kopp te. Du er champagne, kjære. 🥂",
  },
  {
    en: "Your standards aren't too high. Their effort is too low.",
    uk: "Це не твої стандарти завищені. Це їхні старання замалі.",
    no: "Kravene dine er ikke for høye. Innsatsen deres er for lav.",
  },
  {
    en: "You're the prize. Stop acting like the contestant. 👑",
    uk: "Ти — головний приз. Припини поводитися як учасниця конкурсу. 👑",
    no: "Du er premien. Slutt å oppføre deg som en deltaker. 👑",
  },
  {
    en: "Pretty face, expensive taste, unstoppable mind.",
    uk: "Гарне личко, дорогий смак і нестримний розум.",
    no: "Pent ansikt, dyr smak og en hjerne som ikke lar seg stoppe.",
  },
  {
    en: "Your future is brighter than his excuses.",
    uk: "Твоє майбутнє яскравіше за його виправдання.",
    no: "Fremtiden din skinner sterkere enn unnskyldningene hans.",
  },
  {
    en: "You're not difficult. You're limited edition.",
    uk: "Ти не складна. Ти — лімітована колекція.",
    no: "Du er ikke vanskelig. Du er i begrenset opplag.",
  },
  {
    en: "Never lower your standards. Raise your heels. 👠",
    uk: "Не знижуй стандарти. Підвищуй підбори. 👠",
    no: "Ikke senk standarden. Hev hælene. 👠",
  },
  {
    en: "The universe didn't make you this pretty to settle.",
    uk: "Всесвіт не створив тебе такою красунею, щоб ти погоджувалася на абищо.",
    no: "Universet gjorde deg ikke så vakker for at du skulle nøye deg med mindre.",
  },
  {
    en: "You're the main character. Stop auditioning for a side role.",
    uk: "Ти — головна героїня. Годі ходити на кастинги для ролі другого плану.",
    no: "Du er hovedpersonen. Slutt å gå på audition for en birolle.",
  },

  // Love & Drama

  {
    en: "Your soulmate is coming. Hopefully with emotional intelligence.",
    uk: "Твоя споріднена душа вже в дорозі. Сподіваємося, з емоційним інтелектом.",
    no: "Sjelevennen din er på vei. Forhåpentligvis med emosjonell intelligens.",
  },
  {
    en: "If he wanted to, he would. Next question. 💅",
    uk: "Якби він хотів, то зробив би. Наступне питання. 💅",
    no: "Hvis han ville, hadde han gjort det. Neste spørsmål. 💅",
  },
  {
    en: "Love is in the air. So are red flags. Stay alert.",
    uk: "Кохання в повітрі. Червоні прапорці — теж. Будь уважна.",
    no: "Kjærlighet ligger i luften. Det gjør røde flagg også. Følg med.",
  },
  {
    en: "Your ex was a lesson, not a soulmate.",
    uk: "Твій колишній був уроком, а не долею.",
    no: "Eksen din var en lærepenge, ikke din store kjærlighet.",
  },
  {
    en: "Someone is thinking about you. Let's hope they're rich. 💸",
    uk: "Хтось думає про тебе. Сподіваймося, він багатий. 💸",
    no: "Noen tenker på deg. La oss håpe de er rike. 💸",
  },
  {
    en: "Butterflies are cute. Consistency is hotter.",
    uk: "Метелики в животі — мило. Стабільність — ще гарячіше.",
    no: "Sommerfugler i magen er søtt. Stabilitet er hetere.",
  },
  {
    en: "You deserve flowers, not mixed signals. 💐",
    uk: "Ти заслуговуєш на квіти, а не суперечливі сигнали. 💐",
    no: "Du fortjener blomster, ikke blandede signaler. 💐",
  },
  {
    en: "The right person won't make you question your worth.",
    uk: "Правильна людина не змусить тебе сумніватися у своїй цінності.",
    no: "Den rette får deg ikke til å tvile på din egen verdi.",
  },
  {
    en: "Your next love story deserves a better casting director.",
    uk: "Твоїй наступній історії кохання потрібен кращий кастинг-директор.",
    no: "Din neste kjærlighetshistorie trenger en bedre castingansvarlig.",
  },
  {
    en: "Stop chasing. You're not a delivery service.",
    uk: "Припини бігати за кимось. Ти не служба доставки.",
    no: "Slutt å løpe etter folk. Du er ikke et budfirma.",
  },

  // Money & Luxury

  {
    en: "Money can't buy happiness, but it can buy plane tickets. ✈️",
    uk: "За гроші щастя не купиш, зате купиш квитки на літак. ✈️",
    no: "Penger kan ikke kjøpe lykke, men de kan kjøpe flybilletter. ✈️",
  },
  {
    en: "Your bank account deserves a glow-up too.",
    uk: "Твоєму банківському рахунку теж потрібен глоу-ап.",
    no: "Bankkontoen din fortjener også en skikkelig glow-up.",
  },
  {
    en: "A rich future is calling. Pick up, gorgeous. 💸",
    uk: "Багате майбутнє телефонує. Бери слухавку, красуне. 💸",
    no: "En rik fremtid ringer. Ta telefonen, vakre deg. 💸",
  },
  {
    en: "Manifesting money, peace, and excellent skincare.",
    uk: "Маніфестуємо гроші, спокій і бездоганний догляд за шкірою.",
    no: "Vi manifesterer penger, fred og fantastisk hudpleie.",
  },
  {
    en: "Your financial independence era looks fabulous.",
    uk: "Твоя ера фінансової незалежності виглядає розкішно.",
    no: "Din økonomisk uavhengige æra ser fantastisk ut.",
  },
  {
    en: "The universe says: dream big, budget smart.",
    uk: "Всесвіт радить: мрій масштабно, бюджет плануй розумно.",
    no: "Universet sier: Drøm stort, men ha kontroll på budsjettet.",
  },
  {
    en: "Romance is lovely. Financial stability is divine.",
    uk: "Романтика — чудово. Фінансова стабільність — божественно.",
    no: "Romantikk er nydelig. Økonomisk trygghet er himmelsk.",
  },
  {
    en: "Your next blessing might have a currency symbol.",
    uk: "Твоє наступне благословення може мати знак валюти.",
    no: "Din neste velsignelse kan ha et valutasymbol.",
  },
  {
    en: "Soft life, strong boundaries, solid savings.",
    uk: "Ніжне життя, міцні кордони й солідні заощадження.",
    no: "Mykt liv, tydelige grenser og solide sparepenger.",
  },
  {
    en: "May your coffee be strong and your income stronger.",
    uk: "Нехай кава буде міцною, а дохід — ще міцнішим.",
    no: "Må kaffen være sterk og inntekten enda sterkere.",
  },

  // Sweet & Savage

  {
    en: "You're glowing. Must be the lack of unnecessary drama.",
    uk: "Ти сяєш. Мабуть, тому що позбулася зайвої драми.",
    no: "Du stråler. Det må være mangelen på unødvendig drama.",
  },
  {
    en: "Today's forecast: 100% chance of being iconic. ✨",
    uk: "Прогноз на сьогодні: 100% імовірності бути іконою стилю. ✨",
    no: "Dagens værmelding: 100 % sjanse for å være ikonisk. ✨",
  },
  {
    en: "Protect your peace like it's designer. Because it is.",
    uk: "Бережи свій спокій, наче він дизайнерський. Бо так і є.",
    no: "Beskytt roen din som om den var designervare. Det er den.",
  },
  {
    en: "Not every opinion deserves a response, princess.",
    uk: "Не кожна думка заслуговує на відповідь, принцесо.",
    no: "Ikke alle meninger fortjener et svar, prinsesse.",
  },
  {
    en: "Your confidence is making insecure people nervous.",
    uk: "Твоя впевненість нервує невпевнених у собі людей.",
    no: "Selvtilliten din gjør usikre mennesker nervøse.",
  },
  {
    en: "Stay sweet, but never be easy to manipulate.",
    uk: "Залишайся милою, але не дозволяй собою маніпулювати.",
    no: "Vær søt, men aldri lett å manipulere.",
  },
  {
    en: "Some doors close because you deserve a better view.",
    uk: "Деякі двері зачиняються, бо на тебе чекає кращий краєвид.",
    no: "Noen dører lukkes fordi du fortjener bedre utsikt.",
  },
  {
    en: "Your energy is luxury. Stop giving free samples.",
    uk: "Твоя енергія — розкіш. Годі роздавати безплатні пробники.",
    no: "Energien din er luksus. Slutt å dele ut gratisprøver.",
  },
  {
    en: "Be kind, be cute, and know when to walk away.",
    uk: "Будь доброю, милою і знай, коли час піти.",
    no: "Vær snill, vær søt, og vit når du skal gå.",
  },
  {
    en: "The stars said: less overthinking, more fabulous living.",
    uk: "Зірки сказали: менше накручування, більше розкішного життя.",
    no: "Stjernene sier: Mindre overtenking, mer glamorøst liv.",
  },

  // Bad News, Kitten

  {
    en: "Bad news, kitten. The universe has jokes today. 🐈‍⬛",
    uk: "Погані новини, кицю. У Всесвіту сьогодні чудове почуття гумору. 🐈‍⬛",
    no: "Dårlige nyheter, pus. Universet er i tullehumør i dag. 🐈‍⬛",
  },
  {
    en: "Bad news, princess. Your patience will be tested today.",
    uk: "Погані новини, принцесо. Сьогодні твоє терпіння випробують.",
    no: "Dårlige nyheter, prinsesse. Tålmodigheten din blir satt på prøve.",
  },
  {
    en: "The stars have spoken. They're judging your taste in men.",
    uk: "Зірки висловилися. Вони засуджують твій смак на чоловіків.",
    no: "Stjernene har talt. De dømmer smaken din i menn.",
  },
  {
    en: "Your bank account would like to have a serious conversation. 💸",
    uk: "Твій банківський рахунок хоче серйозно поговорити. 💸",
    no: "Bankkontoen din vil gjerne ha en alvorlig samtale. 💸",
  },
  {
    en: "Bad news, darling. Pretty privilege cannot fix everything.",
    uk: "Погані новини, люба. Красою не все вирішиш.",
    no: "Dårlige nyheter, kjære. Et pent ansikt løser ikke alt.",
  },
  {
    en: "Someone will annoy you today. Try not to catch a case. 💅",
    uk: "Сьогодні хтось тебе дістане. Спробуй не потрапити до поліції. 💅",
    no: "Noen kommer til å irritere deg i dag. Prøv å unngå håndjern. 💅",
  },
  {
    en: "The universe checked your wishlist and started laughing.",
    uk: "Всесвіт побачив твій список бажань і розсміявся.",
    no: "Universet så ønskelisten din og begynte å le.",
  },
  {
    en: "Today's prediction: disappointment, but make it aesthetic.",
    uk: "Передбачення на сьогодні: розчарування, але естетичне.",
    no: "Dagens spådom: skuffelse, men gjør den estetisk.",
  },
  {
    en: "Your delusions have been detected by the universe. 💋",
    uk: "Всесвіт виявив твої ілюзії. 💋",
    no: "Universet har avslørt vrangforestillingene dine. 💋",
  },
  {
    en: "A minor inconvenience is coming. Dress fabulously for it.",
    uk: "Насувається дрібна неприємність. Одягнися на всі сто.",
    no: "En liten irritasjon er på vei. Kle deg fantastisk for anledningen.",
  },
  {
    en: "Bad news, babe. The plot is plotting against you.",
    uk: "Погані новини, кицю. Сюжет плете інтриги проти тебе.",
    no: "Dårlige nyheter, pus. Handlingen har vendt seg mot deg.",
  },
  {
    en: "Your intuition was right. Unfortunately.",
    uk: "Твоя інтуїція мала рацію. На жаль.",
    no: "Magefølelsen din hadde rett. Dessverre.",
  },
  {
    en: "The universe says no. Your shopping cart says yes.",
    uk: "Всесвіт каже «ні». Твій кошик покупок каже «так».",
    no: "Universet sier nei. Handlekurven din sier ja.",
  },
  {
    en: "Today, even your guardian angel needs a coffee.",
    uk: "Сьогодні навіть твоєму янголу-охоронцю потрібна кава.",
    no: "I dag trenger til og med skytsengelen din en kaffe.",
  },
  {
    en: "Your wallet is about to experience emotional damage.",
    uk: "На твій гаманець чекає емоційна травма.",
    no: "Lommeboken din er på vei mot et følelsesmessig sammenbrudd.",
  },
  {
    en: "A red flag is approaching. Please use your brain this time.",
    uk: "Наближається червоний прапорець. Цього разу думай головою.",
    no: "Et rødt flagg nærmer seg. Bruk hodet denne gangen.",
  },
  {
    en: "Bad news, kitten. Not every frog is secretly a prince.",
    uk: "Погані новини, кицю. Не кожна жаба — зачарований принц.",
    no: "Dårlige nyheter, pus. Ikke alle frosker er prinser i forkledning.",
  },
  {
    en: "Today's energy: expensive problems, questionable solutions.",
    uk: "Енергія дня: дорогі проблеми й сумнівні рішення.",
    no: "Dagens energi: dyre problemer og tvilsomme løsninger.",
  },

  // Plot Twists

  {
    en: "Plot twist: you're the rich husband you've been waiting for.",
    uk: "Неочікуваний поворот: багатий чоловік, якого ти чекала, — це ти сама.",
    no: "Plottvri: Den rike ektemannen du venter på, er deg selv.",
  },
  {
    en: "Your next obsession might actually be a good decision.",
    uk: "Твоє наступне захоплення може виявитися хорошою ідеєю.",
    no: "Din neste besettelse kan faktisk være et godt valg.",
  },
  {
    en: "Someone is about to underestimate you. How embarrassing for them.",
    uk: "Хтось ось-ось тебе недооцінить. Як незручно для нього.",
    no: "Noen kommer til å undervurdere deg. Så flaut for dem.",
  },
  {
    en: "A little chaos is coming. At least your outfit is cute.",
    uk: "Наближається трохи хаосу. Зате образ у тебе чудовий.",
    no: "Litt kaos er på vei. Antrekket ditt er i det minste søtt.",
  },
  {
    en: "Your villain era has been postponed. You're too pretty for prison.",
    uk: "Твою еру лиходійки відкладено. Ти надто гарна для в'язниці.",
    no: "Skurkefasen din er utsatt. Du er for pen for fengsel.",
  },
  {
    en: "The next chapter might be messy. The character development? Iconic.",
    uk: "Наступний розділ може бути хаотичним. Але розвиток героїні — культовий.",
    no: "Neste kapittel kan bli rotete. Karakterutviklingen? Ikonisk.",
  },
  {
    en: "You will receive a sign today. Please don't text your ex.",
    uk: "Сьогодні ти отримаєш знак. Тільки не пиши колишньому.",
    no: "Du får et tegn i dag. Ikke send melding til eksen.",
  },
  {
    en: "A mysterious opportunity is coming. Read the fine print, gorgeous.",
    uk: "На горизонті загадкова можливість. Читай дрібний шрифт, красуне.",
    no: "En mystisk mulighet er på vei. Les det med liten skrift, vakre deg.",
  },
  {
    en: "Something unexpected is approaching. Hopefully not another situationship.",
    uk: "Наближається щось несподіване. Сподіваймося, не чергові недостосунки.",
    no: "Noe uventet nærmer seg. Forhåpentligvis ikke enda en nesten-kjæreste.",
  },
  {
    en: "Your life is giving romantic comedy. Heavy on the comedy.",
    uk: "Твоє життя — романтична комедія. Особливо комедія.",
    no: "Livet ditt er en romantisk komedie. Mest komedie.",
  },
  {
    en: "The universe is preparing a plot twist. Lip gloss recommended.",
    uk: "Всесвіт готує сюжетний поворот. Блиск для губ обов'язковий.",
    no: "Universet forbereder en plottvri. Lipgloss anbefales.",
  },
  {
    en: "Your next big decision deserves both intuition and common sense.",
    uk: "Наступне важливе рішення потребує і інтуїції, і здорового глузду.",
    no: "Din neste store avgjørelse krever både magefølelse og sunn fornuft.",
  },

  // Cosmic Chaos

  {
    en: "Mercury isn't in retrograde. He's just an idiot.",
    uk: "Меркурій не ретроградний. Він просто ідіот.",
    no: "Merkur er ikke retrograd. Han er bare en idiot.",
  },
  {
    en: "The moon says you're dramatic. The moon is also dramatic. 🌙",
    uk: "Місяць каже, що ти драматизуєш. Сам Місяць теж. 🌙",
    no: "Månen sier at du er dramatisk. Månen er det også. 🌙",
  },
  {
    en: "Venus approves of your outfit but questions your decisions.",
    uk: "Венера схвалює твій образ, але сумнівається у твоїх рішеннях.",
    no: "Venus godkjenner antrekket, men stiller spørsmål ved valgene dine.",
  },
  {
    en: "The stars aligned. Your schedule did not.",
    uk: "Зірки зійшлися. Твій розклад — ні.",
    no: "Stjernene står på linje. Kalenderen din gjør ikke det.",
  },
  {
    en: "Your aura is pink, but your tolerance is running low.",
    uk: "Твоя аура рожева, але терпіння закінчується.",
    no: "Auraen din er rosa, men tålmodigheten er snart brukt opp.",
  },
  {
    en: "The universe sent you a sign. You left it on read.",
    uk: "Всесвіт надіслав знак. Ти залишила його непрочитаним.",
    no: "Universet sendte deg et tegn. Du lot det stå på lest.",
  },
  {
    en: "Today's lucky color is whatever makes you look expensive.",
    uk: "Твій щасливий колір сьогодні — будь-який, у якому ти виглядаєш дорого.",
    no: "Dagens lykkefarge er den som får deg til å se dyr ut.",
  },
  {
    en: "Your guardian angel has requested a vacation. Again.",
    uk: "Твій янгол-охоронець знову попросив відпустку.",
    no: "Skytsengelen din har søkt om ferie. Igjen.",
  },
  {
    en: "The cosmos recommends fewer screenshots and more boundaries.",
    uk: "Космос радить менше скриншотів і більше особистих кордонів.",
    no: "Kosmos anbefaler færre skjermbilder og tydeligere grenser.",
  },
  {
    en: "The stars say you're iconic. Your sleep schedule disagrees.",
    uk: "Зірки кажуть, що ти ікона. Твій режим сну не погоджується.",
    no: "Stjernene sier at du er ikonisk. Søvnrytmen din er uenig.",
  },
];
