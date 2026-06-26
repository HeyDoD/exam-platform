import type { MixedExam } from './types'

const exam110Common: MixedExam = {
  year: 110,
  subject: 'common',
  title: `110年度新進職員甄試試題 - 共同科目（國文、英文）`,
  type: 'mixed',
  sections: [
    {
      id: 'chinese',
      title: '壹、國文（論文寫作）',
      type: 'essay',
      questions: [
        { id: 1, text: `壹、國文：論文寫作：100 分(請在答案卷作答，必須抄題) 
寫作題目：新型冠狀病毒肺炎疫情促使ESG(Environment, Social, 
Governance，即環境、社會、治理)成為全球企業經營管理
的關鍵課題，進而帶動企業經營目的，由「股東資本主
義」(shareholder capitalism)轉型為「利害關係人資本主
義」(stakeholder capitalism)。國營事業肩負政策任務，亦
與同類民營事業具有同等之權利與義務，爰如何順應國際
ESG 潮流，將成為未來經營重點。請以「國營事業在
ESG 發展趨勢下的機會與挑戰」為題，寫作論文
一篇，並加以闡述。`, points: 100 },
      ],
    },
    {
      id: 'english',
      title: '貳、英文（單選題）',
      type: 'mc',
      questions: [
        { id: 1, text: `In the literary history of the world, two of the greatest love stories have always been very popular and ______ - Shakespeare’s Romeo and Juliet and the Chinese folk tale: The Cowherd and the Weaver Girl.`, options: [`intertwining`, `influential`, `arguable`, `sensible`], answer: 'B', topic: '' },
        { id: 2, text: `Some critics argue that if people rely on alternative medicine too much, they could delay getting treatment for potentially serious problems or possibly ______ illness.`, options: [`well-known`, `eye-catching`, `life-threatening`, `long-lasting`], answer: 'C', topic: '' },
        { id: 3, text: `Sarah ______ Marian’s help. She is thankful for her assistance.`, options: [`obtains`, `endures`, `motivates`, `appreciates`], answer: 'A', topic: '' },
        { id: 4, text: `Police are still ______ how the accident happened. They try to find more clues.`, options: [`puzzling`, `investigating`, `stalking`, `reinforcing`], answer: 'B', topic: '' },
        { id: 5, text: `______ food does not contain any meat or fish.`, options: [`Country`, `Processed`, `Greasy`, `Vegetarian`], answer: 'D', topic: '' },
        { id: 6, text: `Simon is ______. He is aggressive and prone to cause an argument.`, options: [`manipulative`, `confrontational`, `unanimous`, `dubious`], answer: 'B', topic: '' },
        { id: 7, text: `The United Nations Educational, Scientific and Cultural Organization is usually _____ to UNESCO.`, options: [`abbreviated`, `associated`, `abstracted`, `affiliated`], answer: 'A', topic: '' },
        { id: 8, text: `The extinction of bees would have ______ effects for all other living things on earth.`, options: [`hypocritical`, `extroverted`, `vulnerable`, `catastrophic`], answer: 'D', topic: '' },
        { id: 9, text: `The delivery person was instructed to handle the ______ package with the utmost care.`, options: [`fragile`, `fertile`, `famished`, `fatigue`], answer: 'A', topic: '' },
        { id: 10, text: `Everyone has been talking about the hyper-violent thriller that has become a massive ______ ever since it launched on Netflix two weeks ago.`, options: [`cast`, `fling`, `medium`, `hit 二、文法及慣用語`], answer: 'D', topic: '' },
        { id: 11, text: `The couples make vows and promises to ______ each other in sickness and in health, through good and bad times.`, options: [`embark on`, `result in`, `care for`, `come up with`], answer: 'C', topic: '' },
        { id: 12, text: `Medicines should be ______ the reach of children.`, options: [`kept out of`, `kept in with`, `cut off`, `caught out`], answer: 'A', topic: '' },
        { id: 13, text: `Nowadays there are plenty of different methods teaching us how to live longer, from impossible diet plans to rigorous yoga routines, ______ suggest that you sleep before 10:00 p.m. and wake up at 4:00 a.m. to practice yoga daily.`, options: [`that`, `which`, `what`, `whom`], answer: 'B', topic: '' },
        { id: 14, text: `You don’t have to pay for your first drink; it’s ______.`, options: [`on sale`, `in season`, `on the house`, `on the go`], answer: 'C', topic: '' },
        { id: 15, text: `Stress relief is one of the most important factors for a longer life, and ______ suitable methods for releasing stress is important.`, options: [`have`, `having`, `being having`, `has`], answer: 'B', topic: '' },
        { id: 16, text: `Simon is working on three jobs while attending school. I hope he does not ______.`, options: [`bring the community to his knees`, `go to the end of the earth`, `make mountains out of molehills`, `bite off more than he can chew`], answer: 'D', topic: '' },
        { id: 17, text: `With her loud voice and colorful outfit, Martha always ______. She gets all the attention.`, options: [`cuts it out`, `takes a hike`, `takes center stage`, `stays put`], answer: 'C', topic: '' },
        { id: 18, text: `The current white rhino population ______ at only 17,000 to 18,000.`, options: [`is estimated`, `estimated`, `is estimating`, `estimates`], answer: 'A', topic: '' },
        { id: 19, text: `I would have bought a house last year if I ______ money then.`, options: [`have`, `had`, `would have`, `had had`], answer: 'D', topic: '' },
        { id: 20, text: `Sally likes vegetable in general, and broccoli ______.`, options: [`in particular`, `on the other hand`, `in truth`, `for example`], answer: 'A', topic: '' },
        { id: 21, text: `______ no denying that the quality of service is the main standard hotels are judged on.`, options: [`It is`, `They are`, `There has`, `There is`], answer: 'D', topic: '' },
        { id: 22, text: `The billionaire is happy to donate one million to the charity because it’s just ______ for him.`, options: [`a drop in the bucket`, `a pipe dream`, `the lion’s share`, `a long shot`], answer: 'A', topic: '' },
        { id: 23, text: `If we ______ our trip in advance, we would have booked the seats.`, options: [`should have planned`, `had planned`, `plan`, `planned`], answer: 'B', topic: '' },
        { id: 24, text: `It is essential ______ these instructions carefully to ensure his computer system has the technical capabilities he needs to fulfil the task.`, options: [`that he reads`, `he reads`, `that he read`, `he must read`], answer: 'C', topic: '' },
        { id: 25, text: `Please note that all applications must be received ______ Friday, December 10. Any late submission will not be accepted.`, options: [`no later than`, `no less than`, `no more than`, `no sooner than 三、克漏字 Numerous opportunities exist for people who want to travel abroad to experience a foreign culture. Homestays, study abroad programs, student exchanges, and international competitions all offer rich opportunities for cross-cultural    (26)   . There are also government-run programs, such as the Peace Corps. .   (27)    US president John F. Kennedy in 1961, the organization has sent volunteers all over the globe to take part in community enriching programs. Since its inception four decades ago, the Peace Corps has sent 200,000 Americans abroad. They’ve traveled to 139 countries, with the majority serving in Africa and Latin America. Volunteers    (28)    27 months of service, which includes pre-service training and time spent overseas. Their assignments may be in one of many fields, such as education, agriculture, health, business, and youth development. Since many of these fields require   (29)   knowledge, 89% of volunteers hold university   (30)   .`], answer: 'A', topic: '' },
        { id: 26, text: `（克漏字，第 26 格空白）`, options: [`competition`, `interview`, `interaction`, `business`], answer: 'C', topic: '' },
        { id: 27, text: `（克漏字，第 27 格空白）`, options: [`Established by`, `Declared by`, `Establishing`, `Announced`], answer: 'A', topic: '' },
        { id: 28, text: `（克漏字，第 28 格空白）`, options: [`make up`, `commit to`, `consist of`, `depend on`], answer: 'B', topic: '' },
        { id: 29, text: `（克漏字，第 29 格空白）`, options: [`general`, `personal`, `political`, `specialized`], answer: 'D', topic: '' },
        { id: 30, text: `（克漏字，第 30 格空白）`, options: [`documents`, `degrees`, `papers`, `proofs The Stanford Marshmallow experiment is a psychological experiment to    (31)    children’s ability to control their impulses. The idea was to see    (32)    the difference was between children who managed to control their impulses and those who could not. The results showed that those who succeeded in    (33)   . the immediate temptation to eat the marshmallow were able to perform better at exams and    (34)    in other aspects of their lives than those who had grabbed the marshmallow directly. The researchers were also able to show that the impulsive group also seemed to suffer more    (35)    stress and problems in relationship in later life.`], answer: 'B', topic: '' },
        { id: 31, text: `（克漏字，第 31 格空白）`, options: [`look away`, `look after`, `look into`, `look for`], answer: 'C', topic: '' },
        { id: 32, text: `（克漏字，第 32 格空白）`, options: [`what`, `how`, `where`, `in which`], answer: 'A', topic: '' },
        { id: 33, text: `（克漏字，第 33 格空白）`, options: [`resisting`, `accepting`, `identifying`, `insisting`], answer: 'A', topic: '' },
        { id: 34, text: `（克漏字，第 34 格空白）`, options: [`being more stable`, `be more stable`, `was more stable`, `were more stable`], answer: 'B', topic: '' },
        { id: 35, text: `（克漏字，第 35 格空白）`, options: [`of`, `with`, `from`, `in 四、閱讀測驗 Recent biological research indicates that there is a biochemical basis to love, which explains why people in love feel as if they were in a more beautiful world. Psychologists such as Dr. Elaine Hatfield, Robert Sternberg and Zick Rubin posit that love consists of three or more stages. The three main stages are lust, attraction, and attachment, while some of the other stages are intimacy, trust, and jealousy. Each stage is ruled or initiated by specific hormonal controllers. In their studies, every love passes through some of these stages and occurs due to the mediation of certain molecules in these specific chemical controllers. Biological research has shown that the hormones dominant in the different phases include testosterone and estrogen (the sexual hormones); dopamine, norepinephrine and serotonin (these are the “pleasure chemicals” - the hormones invoking feelings of pleasure and excitement); and oxytocin (the “cuddle chemical” - the hormone producing feelings of attachment to another person). For example, in the second phase of attraction, when people have the feeling of being in love, the little molecule phenylethylamine (known as PEA), controlling the love chemicals dopamine and noreinephrine, can cause feelings of elation, exhilaration and euphoria. People feel excited and fulfilled. Additionally, biological anthropologist Helen Fisher, an expert on romantic love, discusses what happens in the brain when people are in love and proposes that there is a dramatic increase in the amount of dopamine and norepinephrine present in the brain when one first becomes infatuated with another person.`], answer: 'C', topic: '' },
        { id: 36, text: `What is the passage mainly about?`, options: [`Variations of love`, `Love in different cultures`, `Chemistry of love`, `Psychological effects of love`], answer: 'C', topic: '' },
        { id: 37, text: `According to the researchers, which of the following chemicals is most closely related to the feeling of being in love?`, options: [`testosterone`, `oxytocin`, `estrogen`, `dopamine`], answer: 'D', topic: '' },
        { id: 38, text: `Which of the following is closest in meaning to the word “attachment”?`, options: [`assistance`, `concentration`, `connection`, `enclosure`], answer: 'C', topic: '' },
        { id: 39, text: `According to the scientists, which of the following about how love occurs is NOT true?`, options: [`Every love passes through three or more stages - lust, attraction, attachment, etc.`, `PEA is a hormone our bodies produce that promotes mutual feelings of connection and bonding.`, `There is an increase in the amount of dopamine present in the brain when people are in love.`, `People’s brains are influenced by hormones and chemicals that cause them to feel the way they feel.`], answer: 'A', topic: '' },
        { id: 40, text: `What does the passage imply about love?`, options: [`Most people are not controlled by love.`, `Science may help explain how love takes place.`, `Love can be expressed precisely by words or actions.`, `People can easily find the right person everywhere.`], answer: 'B', topic: '' },
      ],
    },
  ],
}

export default exam110Common