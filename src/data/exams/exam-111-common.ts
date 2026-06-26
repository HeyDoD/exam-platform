import type { MixedExam } from './types'

const exam111Common: MixedExam = {
  year: 111,
  subject: 'common',
  title: `111年度新進職員甄試試題 - 共同科目（國文、英文）`,
  type: 'mixed',
  sections: [
    {
      id: 'chinese',
      title: '壹、國文（論文寫作）',
      type: 'essay',
      questions: [
        { id: 1, text: `壹、國文：論文寫作：100 分(請在答案卷作答，必須抄題) 
寫作題目：近年來對於建立企業韌性(resilience)日益受到重視，所謂「企
業韌性」，簡言之，就是企業透過風險管控，強化其作業流
程、內控機制及對外在環境的感知與想像，當面對衝擊時，
能夠保有彈性和調適的能力，不僅可避免(或減少)損失，度
過危機，更進而化危機為轉機，並從中獲得利益，使企業得
以持續成長。請以「如何建立國營事業企業韌性之
我見」為題，寫作論文一篇，並加以闡述。`, points: 100 },
      ],
    },
    {
      id: 'english',
      title: '貳、英文（單選題）',
      type: 'mc',
      questions: [
        { id: 1, text: `Different scientists, analyzing the same data, may arrive at wholly different and sometimes ______ interpretations.`, options: [`unsuitable`, `unintelligible`, `conflicting`, `invalid`], answer: 'C', topic: '' },
        { id: 2, text: `In some developing countries, the sales of imported brands are severely affected by the widespread availability of cheaper ______ goods that look almost exactly the same.`, options: [`counterfeit`, `smuggled`, `circulated`, `predominated`], answer: 'A', topic: '' },
        { id: 3, text: `The French philosopher Jean-Paul Sartre’s ______ writing theme was that man is alone in the world and has to shape his own life.`, options: [`phenomenal`, `observant`, `superficial`, `dominant`], answer: 'D', topic: '' },
        { id: 4, text: `Some safe ______ methods are recommended by doctors to get fertility control.`, options: [`counteractive`, `contradictory`, `contrastive`, `contraceptive`], answer: 'D', topic: '' },
        { id: 5, text: `The prices of goods are soaring, and the government is trying very hard to fight the ______.`, options: [`inflation`, `deflation`, `reflation`, `conflation`], answer: 'A', topic: '' },
        { id: 6, text: `His interpersonal relationship does not take place in physical reality. Most of his friends are ______.`, options: [`fantastic`, `realistic`, `imaginary`, `imaginative`], answer: 'C', topic: '' },
        { id: 7, text: `John lost his life in a ______ effort to save the child from drowning.`, options: [`consequential`, `conscientious`, `contemporary`, `contemptuous`], answer: 'B', topic: '' },
        { id: 8, text: `How did a man of so little personal ______ get to be prime minister?`, options: [`aversion`, `affection`, `charisma`, `affliction`], answer: 'C', topic: '' },
        { id: 9, text: `She's been in the ______ recently, following her heated debate on some political issues.`, options: [`limelight`, `daylight`, `fanlight`, `apple light`], answer: 'A', topic: '' },
        { id: 10, text: `I didn't ______ my high school classmate until she introduced herself to me at the conference.`, options: [`recognize`, `forget`, `overlook`, `neglect 二、文法及慣用語`], answer: 'A', topic: '' },
        { id: 11, text: `The suspect denies ______ into the house, but there is quite enough convincing evidence ______ him guilty.`, options: [`to break, proving`, `break, proven`, `broken, having proven`, `breaking, to prove`], answer: 'D', topic: '' },
        { id: 12, text: `Each of them ______ to bring ______ own book to the next class.`, options: [`are, his`, `is, their`, `is, his`, `are, them`], answer: 'B', topic: '' },
        { id: 13, text: `I’m not surprised that they are good students. They do nothing but ______.`, options: [`study`, `studied`, `studying`, `to study`], answer: 'A', topic: '' },
        { id: 14, text: `______, inform their parents.`, options: [`The children misbehave`, `Would the children misbehave`, `Were the children to misbehave`, `Should the children misbehave`], answer: 'D', topic: '' },
        { id: 15, text: `Supposing no one ______, what would you do with all the food you have prepared?`, options: [`comes`, `came`, `had come`, `would come`], answer: 'B', topic: '' },
        { id: 16, text: `Adam has a lot of experience ______ teaching young children; moreover, he has considerable patience ______ them.`, options: [`at, from`, `for, for`, `with, towards`, `in, with`], answer: 'D', topic: '' },
        { id: 17, text: `If Kim thinks that I’m going to let her copy my math homework, she’s ______.`, options: [`beating around the bush`, `getting stuck between a rock and a hard place`, `barking up at the wrong tree`, `standing up for herself`], answer: 'C', topic: '' },
        { id: 18, text: `I cannot ______ my new boss. He is too demanding.`, options: [`get up`, `get over`, `get on with`, `get out`], answer: 'C', topic: '' },
        { id: 19, text: `As a customer service representative, he has to deal with complaints from clients, ______ are hard to please.`, options: [`many of who`, `many of which`, `many of them`, `of whom many`], answer: 'D', topic: '' },
        { id: 20, text: `We feel very sorry to cancel the appointment ______, and we will do everything within our power to make up for it.`, options: [`at your earliest convenience`, `at your own risk`, `for your own trouble`, `on such short notice`], answer: 'D', topic: '' },
        { id: 21, text: `The monthly rent is the same ______ how many occupants there are.`, options: [`irrespective of`, `despite of`, `according to`, `in proportion as`], answer: 'A', topic: '' },
        { id: 22, text: `Animal rights groups are opposed ______ health and beauty products on animals.`, options: [`to test`, `testing`, `tests of`, `to testing`], answer: 'D', topic: '' },
        { id: 23, text: `A number of automobile ______ agencies are located on the lower level of the airport.`, options: [`renting`, `rents`, `rental`, `rented`], answer: 'C', topic: '' },
        { id: 24, text: `Some construction firms look for ways to ______ in order to earn a greater profit.`, options: [`cut short`, `cut corners`, `cut off`, `cut down`], answer: 'B', topic: '' },
        { id: 25, text: `You should have avoided ______ her divorce.`, options: [`to talk about`, `mentioning`, `to mention`, `being mentioned 三、克漏字 The antismoking lobby succeeded __(26)__ people knew without being told that cigarettes were killing their friends and families. They demanded hard data about the risks of breathing in secondhand smoke. They disbelieved glib assurances that cigarettes were __(27)__ and that the right to smoke __(28)__ the right to breathe clean air. More important, antismoking activists changed our idea of what smoking is all about. They uncooled the cigarette companies and their brands, forever __(29)__ smoking and death in all of our minds. It was, perhaps, the first victory in the fight for our mental environment—an ecology as rife with __(30)__ as any befouled river or cloud of smog. We long ago learned to watch what we dump into nature or absorb into our bodies; now we need to be equally careful about what we take into our minds.`], answer: 'B', topic: '' },
        { id: 26, text: `（克漏字，第 26 格空白）`, options: [`that`, `because`, `although`, `if`], answer: 'B', topic: '' },
        { id: 27, text: `（克漏字，第 27 格空白）`, options: [`safe`, `dangerous`, `difficult`, `commercial`], answer: 'A', topic: '' },
        { id: 28, text: `（克漏字，第 28 格空白）`, options: [`superseded`, `superimposed`, `substituted`, `outnumbered`], answer: 'A', topic: '' },
        { id: 29, text: `（克漏字，第 29 格空白）`, options: [`connect`, `connected`, `connecting`, `connective`], answer: 'C', topic: '' },
        { id: 30, text: `（克漏字，第 30 格空白）`, options: [`creatures`, `illnesses`, `myths`, `pollutants Insomnia, also known as sleeplessness, is a __(31)__ disorder in which people have trouble sleeping. They may have difficulty falling asleep, or staying asleep __(32)__ desired. Insomnia is typically followed by daytime sleepiness, low energy, __(33)__, and a depressed mood. It may result in an increased risk of motor vehicle collisions, as well as problems __(34)__. Insomnia can be short term, lasting for days or weeks, or long term, lasting more than a month. The concept of the word insomnia has two possibilities: insomnia disorder and insomnia symptoms, and many __(35)__ of randomized controlled trials and systematic reviews often underreport on which of these two possibilities the word insomnia refers to.`], answer: 'D', topic: '' },
        { id: 31, text: `（克漏字，第 31 格空白）`, options: [`sleeping`, `sleepy`, `sleep`, `asleep`], answer: 'C', topic: '' },
        { id: 32, text: `（克漏字，第 32 格空白）`, options: [`as long as`, `as soon as`, `as more as`, `no sooner than`], answer: 'A', topic: '' },
        { id: 33, text: `（克漏字，第 33 格空白）`, options: [`irritating`, `irritable`, `irritability`, `irritative`], answer: 'C', topic: '' },
        { id: 34, text: `（克漏字，第 34 格空白）`, options: [`study and to work`, `studying for work`, `focusing and learning`, `focus and learn`], answer: 'C', topic: '' },
        { id: 35, text: `（克漏字，第 35 格空白）`, options: [`abstracts`, `subtracts`, `distracts`, `attracts 四、閱讀測驗 For a long time, many psychologists embraced a victim narrative about trauma, believing that severe stress causes long-lasting and perhaps irreparable damage to one's psyche and health. In 1980, post-traumatic stress disorder (PTSD) was added to the list of mental disorders and has since received a lot of attention in the media and among ordinary individuals trying to understand what happens to people in the wake of tragic life events. Yet psychologists now know that only a small percentage of people develop the full-blown disorder while, on average, anywhere from one half to two-thirds of trauma survivors exhibit what's known as post-traumatic growth. After a crisis, most people acquire a newfound sense of purpose, develop deeper relationships, have a greater appreciation of life, and report other benefits. In American culture, when people are feeling depressed or anxious, they are often advised to do what makes them happy; they are encouraged to distract themselves from bad news and difficult feelings, to limit their time on social media and to exercise. However, the happy feelings one gets by doing pleasant things fade fast, and soon the sad mood takes over, plunging one into a deeper abyss of melancholy. A better strategy to cope with trauma has to do with meaning-seeking. When people search for meaning, they often do not feel happy, because the things that make our lives meaningful, like volunteering or working, are stressful and require effort. But months later, the meaning seekers not only reported fewer negative moods but also felt more enriched, inspired and part of something greater than themselves. Therefore, although none of us can avoid suffering, we can still learn to suffer well.`], answer: 'A', topic: '' },
        { id: 36, text: `What is this passage mainly about?`, options: [`PTSD as a widespread mental disorder.`, `A good way to deal with trauma.`, `How to find happiness in life.`, `Suffering as a meaning of life.`], answer: 'B', topic: '' },
        { id: 37, text: `Which of the following statements is true about the first paragraph?`, options: [`Stress inevitably causes permanent damage to one's mind and body.`, `PTSD should have been listed earlier as one of the mental disorders.`, `Most people are able to survive and grow from a traumatic experience.`, `The more serious one's crisis is, the more growth one can exhibit.`], answer: 'C', topic: '' },
        { id: 38, text: `According to the second paragraph, which of the following options can best help one to recover from a traumatic experience?`, options: [`To do something cheerful as distraction.`, `To find meaning in the unhappy experience.`, `To seek help from a professional psychologist.`, `To eat well, exercise well, and sleep well.`], answer: 'B', topic: '' },
        { id: 39, text: `Which of the following is closest in meaning to the phrase in the wake of in the first paragraph?`, options: [`before`, `after`, `conscious of`, `suffering from`], answer: 'B', topic: '' },
        { id: 40, text: `Which of the following has the least to do with post-traumatic growth?`, options: [`To awaken to the futility of all struggles.`, `To discover new sense of purpose in life.`, `To appreciate the meaning of life better.`, `To develop a closer bond with loved ones.`], answer: 'A', topic: '' },
      ],
    },
  ],
}

export default exam111Common