import type { MixedExam } from './types'

const exam113Common: MixedExam = {
  year: 113,
  subject: 'common',
  title: `113年度新進職員甄試試題 - 共同科目（國文、英文）`,
  type: 'mixed',
  sections: [
    {
      id: 'chinese',
      title: '壹、國文（論文寫作）',
      type: 'essay',
      questions: [
        { id: 1, text: `壹、國文：論文寫作：100 分(請在答案卷作答，必須抄題) 
寫作題目：面對氣候變遷之挑戰，全球已有超過150 個國家宣布淨零碳
排目標，我國除公布2050 年淨零排放路徑圖，總統府更成立
國家氣候變遷對策委員會。此外，許多國內外企業也宣布淨
零及綠電使用的目標。身為國營事業員工，如何從能源、營
運、科技、運輸、建築、生活等各個面向，推動減碳工作，
甚至創造綠色商機，十分重要。請以「國營事業如何因應
淨零排放之我見」為題，寫作論文一篇，並進行闡述。`, points: 100 },
      ],
    },
    {
      id: 'english',
      title: '貳、英文（單選題）',
      type: 'mc',
      questions: [
        { id: 1, text: `That wide-eyed ______ look and those full lips reminded him of a fairytale princess.`, options: [`temporary`, `innocent`, `gradual`, `previous`], answer: 'B', topic: '' },
        { id: 2, text: `Health experts are now ______ that even a little exercise is far better than none at all.`, options: [`inheriting`, `surging`, `preaching`, `disposing`], answer: 'C', topic: '' },
        { id: 3, text: `The compensation bill offers the miners or their ______ as much as $100,000 apiece.`, options: [`survivors`, `knights`, `creators`, `outlines`], answer: 'A', topic: '' },
        { id: 4, text: `In African languages, there is a close ______ between sounds and letters.`, options: [`poultry`, `interpretation`, `reminder`, `correspondence`], answer: 'D', topic: '' },
        { id: 5, text: `In her difficulty, she turned down her eyelids again and ______ over face and neck.`, options: [`blushed`, `emerged`, `intended`, `consulted`], answer: 'A', topic: '' },
        { id: 6, text: `Scientists could not ______ the strange lights in the sky since there was no scientific proof.`, options: [`travel`, `prefer`, `cancel`, `explain`], answer: 'D', topic: '' },
        { id: 7, text: `Tom seemed polite enough, but his manner was distinctly ______.`, options: [`florid`, `frigid`, `fluid`, `fetid`], answer: 'B', topic: '' },
        { id: 8, text: `A _____ under international humanitarian law is a person who is not a member of his or her country’s armed forces.`, options: [`charity`, `civilian`, `colleague`, `council`], answer: 'B', topic: '' },
        { id: 9, text: `The vessel showcases the impeccable British craftsmanship for which Princess is ______, with a vast teak deck and gleaming stainless-steel rails.`, options: [`edible`, `captive`, `renowned`, `mournful`], answer: 'C', topic: '' },
        { id: 10, text: `While walking along a side street, John was _____ by three youths.`, options: [`boycotted`, `conveyed`, `looped`, `mugged 二、文法及慣用語`], answer: 'D', topic: '' },
        { id: 11, text: `In most cases, rabbits can keep themselves ______ with the help of their owners.`, options: [`cleanly`, `cleanliness`, `clean`, `to clean`], answer: 'C', topic: '' },
        { id: 12, text: `Read the instructions carefully before starting to ______ the form.`, options: [`fill out`, `find out`, `fit in`, `feel like`], answer: 'A', topic: '' },
        { id: 13, text: `I have been in only three cities since I came to Taiwan. One is Taipei, and _____ are Taichung and Tainan.`, options: [`others`, `the other`, `other`, `the others`], answer: 'D', topic: '' },
        { id: 14, text: `Kevin said that you can get into the club for free if you wear red, but I'm taking it ______.`, options: [`with one stone`, `with a grain of salt`, `with flying colors`, `with a full deck`], answer: 'B', topic: '' },
        { id: 15, text: `By the end of this month, the new employees _____ a range of tasks and challenges that may turn out to be more difficult than they anticipated.`, options: [`will expose to`, `will have exposed to`, `will have been exposed to`, `will have been exposing to`], answer: 'C', topic: '' },
        { id: 16, text: `The farmhouse we stayed in was completely _____.`, options: [`off the beaten track`, `on the beaten track`, `off the well-worn track`, `on the well-worn track`], answer: 'A', topic: '' },
        { id: 17, text: `It is necessary ______ steps to amend our laws in order to free up these funds.`, options: [`take us`, `to take us`, `to us take`, `for us to take`], answer: 'D', topic: '' },
        { id: 18, text: `The report ______ that more resources ______ devoted to teaching four-year-olds.`, options: [`recommends; be`, `thinks; is`, `suggests; are`, `indicates; have`], answer: 'A', topic: '' },
        { id: 19, text: `He followed her to the family room and made sure she was safely ______ down before he left.`, options: [`laying`, `lying`, `lie`, `to lay`], answer: 'B', topic: '' },
        { id: 20, text: `Antonin Dvorak ______as a major composer before he celebrated his fiftieth birthday in 1893.`, options: [`had emerged`, `has emerged`, `had been emerged`, `has been emerged`], answer: 'A', topic: '' },
        { id: 21, text: `Violence as a way of achieving racial justice is impractical because it is a descending ______ ending in destruction for all.`, options: [`force`, `legacy`, `spiral`, `boat`], answer: 'C', topic: '' },
        { id: 22, text: `However logical their explanation might be, the decision is simply not going to ______ with customers.`, options: [`flux`, `fling`, `flax`, `fly`], answer: 'D', topic: '' },
        { id: 23, text: `If Kathy _____ to resign, who would help us with managing the project?`, options: [`were`, `is`, `be`, `was`], answer: 'A', topic: '' },
        { id: 24, text: `This hotel has been standing for over 50 years, and you can really see the _____ on the furniture in the room.`, options: [`up and down`, `wear and tear`, `here and there`, `ins and outs`], answer: 'B', topic: '' },
        { id: 25, text: `My father loves reading and also enjoys creating stories and _____ ideas for books and movies.`, options: [`calling at`, `colliding in`, `conjuring up`, `coming up 三、克漏字 In recent years, the concept of sustainability    (26)    significant momentum. In 2015, the United Nations adopted the 2030 Agenda for Sustainable Development, establishing the Sustainable Development Goals (SDGs) as a framework for fostering global    (27)    . Among the 17 SDGs, Goal 10, which aims to reduce inequality both within and between countries, is particularly relevant to the indigenous communities’    (28)    justice and equality. For these communities, addressing inequalities involves securing land rights, ensuring    (29)    culturally respectful education, achieving fair representation in governance, and equitably sharing the benefits of resources found on and beneath their lands. It goes without saying that achieving genuine sustainable development necessitates the inclusion and active participation of all societal groups,    (30)    indigenous peoples.`], answer: 'C', topic: '' },
        { id: 26, text: `（克漏字，第 26 格空白）`, options: [`is gained`, `was gained`, `had gained`, `has gained`], answer: 'D', topic: '' },
        { id: 27, text: `（克漏字，第 27 格空白）`, options: [`pros and cons`, `peace and prosperity`, `cause and effect`, `trial and error`], answer: 'B', topic: '' },
        { id: 28, text: `（克漏字，第 28 格空白）`, options: [`quest for`, `questing for`, `demand to`, `demanding for`], answer: 'A', topic: '' },
        { id: 29, text: `（克漏字，第 29 格空白）`, options: [`subject to`, `opposed to`, `access to`, `reaction to`], answer: 'C', topic: '' },
        { id: 30, text: `（克漏字，第 30 格空白）`, options: [`include`, `including`, `included`, `to include Fake news by amplification occurs when small-scale events become amplified through the    (31)__ actions of everyday users, mass media gatekeepers, and social media    (32)    . Events that are amplified risk becoming    (33)    as they circulate, with users    (34)    their own context and interpretations. The resulting fake news is difficult to    (35)    because it goes beyond questions of fact and enters the realm of interpretation, enabled by widespread networked belief.`], answer: 'B', topic: '' },
        { id: 31, text: `（克漏字，第 31 格空白）`, options: [`divergent`, `emergent`, `convergent`, `exurgent`], answer: 'C', topic: '' },
        { id: 32, text: `（克漏字，第 32 格空白）`, options: [`algebras`, `logarithms`, `theorems`, `algorithms`], answer: 'D', topic: '' },
        { id: 33, text: `（克漏字，第 33 格空白）`, options: [`extorted`, `retorted`, `distorted`, `bistorted`], answer: 'C', topic: '' },
        { id: 34, text: `（克漏字，第 34 格空白）`, options: [`supplying`, `applying`, `complying`, `multiplying`], answer: 'A', topic: '' },
        { id: 35, text: `（克漏字，第 35 格空白）`, options: [`encounter`, `counter`, `recounter`, `discounter 四、閱讀測驗 The Great Migration is the largest herd movement of animals on the planet. The numbers are astonishing: over 1.5 million wildebeests, zebras, and antelopes move in a constant cycle through the Serengeti-Mara ecosystem in search of nutritious grass and water. Guided by survival instinct, each wildebeest will cover 800 to 1,000 km on its individual journey along age-old migration routes. Hungry predators, including lions, leopards, cheetahs, hyenas, wild dogs, and crocodiles, ensure the strongest survive in this natural spectacle. This is also known as ‘the greatest show on Earth.’ The animals travel from the Ngorongoro Conservation Area in southern Serengeti, Tanzania, through the Serengeti, into the Masai Mara in Kenya, and then back again. The journey is beset with danger: young calves are snatched by predators, the slow ones are brought down by prides of lion, brave beasts break legs on steep river slopes, crocodiles take their share of the stragglers, and the weak and exhausted drown. As for the three major animals of the migrant grazers, they have different grass-eating habits: as one group eats the top of the tallest grass, the next group will eat away some of the medium-height grass until finally it is almost completely eaten, and the herds move on. This means each group sticks to its kind with only a tiny overlap in their distributions. The grasses of the plains have the highest protein content throughout the Serengeti and are also high in calcium. It is unclear how the wildebeests know which way to go. However, it is generally believed that their journey is dictated primarily by their response to the weather. They probably follow the rains and new grass growth. Some experts believe the animals react to lightning and thunderstorms in the distance. It has even been suggested that wildebeest can locate rain more than 50 km away.`], answer: 'B', topic: '' },
        { id: 36, text: `What is the main purpose of this article?`, options: [`It mainly introduces African wildlife that can move freely on the vast rolling plains of the Serengeti.`, `It mainly indicates the solutions to the problem of some roads crossing the path of the Great Migration.`, `It mainly describes the ever-moving circular migration of over a million animals across the Serengeti-Mara ecosystem.`, `It mainly shows that the Great Migration is slowly collapsing due to widespread habitat loss.`], answer: 'C', topic: '' },
        { id: 37, text: `According to this article, why can the wildebeests know their routes in the Great Migration?`, options: [`They tend to choose the routes away from hungry predators.`, `They rely on their reaction to the earth’s magnetic fields.`, `They can find cut shorts to return to Tanzania.`, `They can detect rain more than 50 km away.`], answer: 'D', topic: '' },
        { id: 38, text: `Which of the following is closest in meaning to the word “dictated” in Paragraph 4?`, options: [`permitted`, `directed`, `teased`, `fastened`], answer: 'B', topic: '' },
        { id: 39, text: `According to this article, which of the following statements is NOT true?`, options: [`Cheetahs, hyenas, and lions belong to the predators in the Great Migration.`, `The stragglers can be eaten by crocodiles.`, `The Great Migration of the African animals takes place in Kenya and Tanzania.`, `The major grazers compete with one another for grass eating.`], answer: 'D', topic: '' },
        { id: 40, text: `According to this article, what nutrients can the grass-eating animals get from the grasses of the plains?`, options: [`proteins`, `water`, `carbohydrates`, `vitamins`], answer: 'A', topic: '' },
      ],
    },
  ],
}

export default exam113Common