import type { MixedExam } from './types'

const exam112Common: MixedExam = {
  year: 112,
  subject: 'common',
  title: `112年度新進職員甄試試題 - 共同科目（國文、英文）`,
  type: 'mixed',
  sections: [
    {
      id: 'chinese',
      title: '壹、國文（論文寫作）',
      type: 'essay',
      questions: [
        { id: 1, text: `壹、國文：論文寫作：100 分(請在答案卷作答，必須抄題) 
寫作題目：自2022 年ChatGPT 問世以來，人工智慧（以下簡稱AI）例
如：機器人、聊天軟體、無人機等等，快速發展，不論任何
領域均可看到AI被加速引進或全力研發。AI的運用與發展，
改變了企業原有的運作方式，員工也將面對一個嶄新的工作
環境；因此分析AI 對工作帶來什麼影響？進而思考應以什麼
樣的態度、行為、或能力強化來因應，進而運用AI 提升自己
在企業裡的競爭力尤為重要。請以「國營事業員工如何面
對AI 浪潮之我見」撰寫論文ㄧ篇。`, points: 100 },
      ],
    },
    {
      id: 'english',
      title: '貳、英文（單選題）',
      type: 'mc',
      questions: [
        { id: 1, text: `The famous scientist lost all ______ once his fabricated data came to light.`, options: [`credibility`, `credence`, `credulity`, `credo`], answer: 'A', topic: '' },
        { id: 2, text: `Nicole’s ______ that she had stolen the money had shocked everyone.`, options: [`adjustment`, `admission`, `admittance`, `adoption`], answer: 'B', topic: '' },
        { id: 3, text: `Public ______ to the problem of litter has left the city’s park in a total mess.`, options: [`disbelief`, `dispute`, `fastidiousness`, `indifference`], answer: 'D', topic: '' },
        { id: 4, text: `The cars are ______ in price, but far apart in terms of performance.`, options: [`communicative`, `compact`, `comparable`, `compassionate`], answer: 'C', topic: '' },
        { id: 5, text: `No new business can succeed without hard-working and ______ employees.`, options: [`compatible`, `competent`, `complacent`, `complimentary`], answer: 'B', topic: '' },
        { id: 6, text: `In a laboratory, it is important to be ______ when measuring substances.`, options: [`potential`, `peculiar`, `precise`, `primary`], answer: 'C', topic: '' },
        { id: 7, text: `The ______ for setting the drinking age at 18 is that self-control and good judgement are still being developed before that age.`, options: [`rationale`, `recession`, `retort`, `revulsion`], answer: 'A', topic: '' },
        { id: 8, text: `A microscope can ______ a cell and make it large for our eyes to see.`, options: [`modify`, `maintain`, `mislead`, `magnify`], answer: 'D', topic: '' },
        { id: 9, text: `The ______ child was found safe after a week-long search, but the criminal demanded $1 million in exchange for the child.`, options: [`invested`, `defeated`, `performed`, `kidnapped`], answer: 'D', topic: '' },
        { id: 10, text: `This country’s military ______ near the border have raised concerns about a possible invasion, despite the claim to test their readiness of the armed forces.`, options: [`outskirts`, `wardrobes`, `maneuvers`, `parameters 二、文法及慣用語`], answer: 'C', topic: '' },
        { id: 11, text: `The doctor ______ the patient’s cancer for several months now, and the patient is responding well to the treatment.`, options: [`has been treating`, `has been treated`, `is treating`, `treats`], answer: 'A', topic: '' },
        { id: 12, text: `This year, only two applicants joined the job interview, but ______ of the candidates was qualified for the job.`, options: [`both`, `either`, `neither`, `all`], answer: 'C', topic: '' },
        { id: 13, text: `There are lots of cover-ups in the business world, ______ involve fraud and corruption.`, options: [`one of them`, `some of them`, `one of which`, `some of which`], answer: 'D', topic: '' },
        { id: 14, text: `Dell was struggling ______ the demands of his boss.`, options: [`to keep up`, `to keep down`, `to keep in`, `to keep up with`], answer: 'D', topic: '' },
        { id: 15, text: `The keys to happier marriage include not ______ change from your spouse.`, options: [`demand`, `demanding`, `to demand`, `by demanding`], answer: 'B', topic: '' },
        { id: 16, text: `It is intriguing to travel in foreign lands ______ cultures are different from our own.`, options: [`with`, `which`, `whose`, `what`], answer: 'C', topic: '' },
        { id: 17, text: `______ you have any questions, please do not hesitate to contact us.`, options: [`Should`, `Would`, `Could`, `Will`], answer: 'A', topic: '' },
        { id: 18, text: `Zoey moved to New York on her own when she was 17, ______ her family in Louisiana.`, options: [`left aside`, `leaving behind`, `leaving aside`, `to leave behind`], answer: 'B', topic: '' },
        { id: 19, text: `If you have something to say about his notorious behavior, ______. It is no use to complain to me.`, options: [`say nothing of it`, `enjoy yourself`, `like it or not`, `say it to his face`], answer: 'D', topic: '' },
        { id: 20, text: `______ entering the concert hall, I noticed that refreshments were being served.`, options: [`On`, `About`, `To`, `Of`], answer: 'A', topic: '' },
        { id: 21, text: `Only if the arrogant man sees the world through the eyes of a child ______ truly appreciate natural beauty.`, options: [`he`, `that he`, `he does`, `does he`], answer: 'D', topic: '' },
        { id: 22, text: `Though Abby may seem like a simple person when you first meet her, there’s more to her ______.`, options: [`than meet the eyes`, `than meets the eye`, `then meets the eye`, `yet meets the eye`], answer: 'B', topic: '' },
        { id: 23, text: `That restaurant managed to survive the pandemic ______.`, options: [`one way or another`, `by no means`, `in no way`, `at all`], answer: 'A', topic: '' },
        { id: 24, text: `“My son doesn’t mind fruit, but vegetables are a whole different story.” That means ______`, options: [`My son doesn’t like fruit, but he likes vegetables.`, `My son doesn’t like either fruit or vegetables.`, `My son eats fruit but not vegetables.`, `My son doesn’t eat fruit, but he eats vegetables.`], answer: 'C', topic: '' },
        { id: 25, text: `“Tyler is no less intelligent than his brother” means the same as “Tyler is ______ his brother.”`, options: [`more stupid than`, `as smart as`, `sharper than`, `as stupid as 三、克漏字 Jane and Philip are in general a happily married couple; however, they do struggle over one point of __ (26)__ . They disagree as to how their family should follow the traditions of seasonal holidays. In her opinions, the emphasis __(27)__ presents has made the season lucrative for all those mercenary retailers who overcharge at holiday time. In addition, people should be watching their expenses and avoid unnecessary __(28)__ in their budgets. Therefore, she aspires to keep her home free of all such customs and wants her children to __(29)__ from traditions such as gift-giving and dyeing Easter eggs. Although Philip understands her concerns, he prefers the conventional way of celebrating holidays. He believes that children enjoy the customary __(30)__ that are connected with the holidays.`], answer: 'B', topic: '' },
        { id: 26, text: `（克漏字，第 26 格空白）`, options: [`dissent`, `relief`, `deficit`, `harmony`], answer: 'A', topic: '' },
        { id: 27, text: `（克漏字，第 27 格空白）`, options: [`at`, `on`, `by`, `of`], answer: 'B', topic: '' },
        { id: 28, text: `（克漏字，第 28 格空白）`, options: [`wealth`, `surplus`, `shortfall`, `adequacy`], answer: 'C', topic: '' },
        { id: 29, text: `（克漏字，第 29 格空白）`, options: [`desire`, `affiliate`, `prompt`, `abstain`], answer: 'D', topic: '' },
        { id: 30, text: `（克漏字，第 30 格空白）`, options: [`burdens`, `sections`, `downers`, `activities Memorizing information is something we all need to do. There are __(31)__ ways to improve our memory, one of which is known as mind-mapping. A mind map is like a __(32)__ of thoughts, starting from a single idea, and spreading __(33)__ to new ideas, showing the connections between them. The theory behind it is that by drawing the map on paper, we are made to __(34)__ the information clearly. Later as we look at the mind map again and again, we __(35)__ our knowledge of the information and then memorize it.`], answer: 'D', topic: '' },
        { id: 31, text: `（克漏字，第 31 格空白）`, options: [`vulnerable`, `inevitable`, `various`, `identical`], answer: 'C', topic: '' },
        { id: 32, text: `（克漏字，第 32 格空白）`, options: [`drill`, `diagram`, `frontier`, `machine`], answer: 'B', topic: '' },
        { id: 33, text: `（克漏字，第 33 格空白）`, options: [`inside`, `over`, `outward`, `downward`], answer: 'C', topic: '' },
        { id: 34, text: `（克漏字，第 34 格空白）`, options: [`minimize`, `isolate`, `schedule`, `visualize`], answer: 'D', topic: '' },
        { id: 35, text: `（克漏字，第 35 格空白）`, options: [`reinforce`, `reverse`, `reward`, `terminate 四、閱讀測驗 Ocean waves represent our planet’s last untapped large-scale renewable energy resource. Over 70 % of the earth’s surface is covered with water. The energy contained within waves has the potential to produce up to 80,000 TWh (1012 watt-hours) of electricity per year—sufficient to meet our global energy demand five times over. No wonder the idea of extracting energy from ocean waves and turning it into electricity is an alluring one. The first serious attempt to do so dates back to 1974, when Stephen Salter of Edinburgh University came up with the idea of “ducks”: house-sized buoys tethered to the sea floor that would convert the swell into rotational motion to drive generators. It failed, as have many subsequent efforts to perform the trick. But the idea of wave power will not go away, and the latest attempt—the brainchild of researchers at Oscilla Power, a firm based in Seattle—is trying to address head-on the reason why previous efforts have foundered. This reason, according to Rahul Shendure, the firm’s boss, is that those efforts took technologies developed for landlubbers (often as components of wind turbines) and tried to modify them for marine use. The consequence was kit too complicated and sensitive for the rough-and-tumble of life on the ocean waves, and also too vulnerable to corrosion. Better, he reckons, to start from scratch. Instead of generators with lots of moving parts, Oscilla is developing ones that barely move at all. These employ a little-explored phenomenon called magnetostriction, in which ferromagnetic materials (things like iron, which can be magnetized strongly) change their shape slightly in the presence of a magnetic field. Like many physical processes, this also works in reverse. Apply stresses or strains to such a material and its magnetic characteristics alter. Do this in the presence of permanent magnets and a coil of wire, such as are found in conventional generators, and it will generate electricity.`], answer: 'A', topic: '' },
        { id: 36, text: `What are NOT true about ocean waves?`, options: [`They can be turned into electricity.`, `Stephen Salter successfully used “ducks” to convert them into electricity.`, `There have been attempts to convert them into electricity.`, `Oscilla Power is one of the firms to convert them into electricity.`], answer: 'B', topic: '' },
        { id: 37, text: `What is true about Oscilla Power?`, options: [`It is based in Seattle.`, `Its boss is Stephen Salter.`, `It adopts a similar approach to other previous efforts.`, `It copies some of the previous designs.`], answer: 'A', topic: '' },
        { id: 38, text: `What are true about Oscilla’s generators?`, options: [`They have many moving parts.`, `They move along with the waves.`, `They do not have coils of wire.`, `The phenomenon magnetostriction is employed.`], answer: 'D', topic: '' },
        { id: 39, text: `What are the advantages of ocean wave energy?`, options: [`It’s easily available.`, `It’s easily tapped.`, `It’s renewable.`, `It can be recycled.`], answer: 'C', topic: '' },
        { id: 40, text: `Why had the previous ocean wave energy conversion efforts failed?`, options: [`Because they all relied on buoys.`, `Because they were vulnerable to corrosion.`, `Because they were not modified for marine use.`, `Because they were not tethered to the sea floor.`], answer: 'B', topic: '' },
      ],
    },
  ],
}

export default exam112Common