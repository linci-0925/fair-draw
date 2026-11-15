const EXAM_PRACTICE = [
  {
    "topic": "科研与实证精神",
    "zh": "科学研究需要可靠的证据。研究者应分析已有文献，提出假设，并通过实证观察检验其有效性。只有采用严谨的方法，研究结论才能更有说服力。",
    "en": "Scientific research requires reliable evidence. Researchers should analyze existing literature, develop a hypothesis, and test its validity through empirical observation. Only with a rigorous methodology can their conclusions become more convincing.",
    "prompt": "Why should university students develop a scientific approach to learning?",
    "model": "Rather than accept a claim without question, students should analyze the evidence on which it is based.",
    "note": "“只有……才……”可用 Only with… can…，注意部分倒装；evidence 通常为不可数名词。"
  },
  {
    "topic": "批判性思维与信息判断",
    "zh": "面对大量信息，人们不应仅凭直觉作出判断。我们需要评估证据，反思自己的假定，并仔细检查不同解释。耐心的推理有助于减少误解。",
    "en": "Faced with abundant information, people should not make a judgment solely on intuition. We need to evaluate evidence, reflect on our assumptions, and scrutinize different explanations. Patient reasoning helps reduce misunderstanding.",
    "prompt": "How can critical thinking help students deal with online information?",
    "model": "Before we infer a conclusion, we should evaluate the evidence rather than assume that a popular claim is true.",
    "note": "“面对……”可用 Faced with…；reflect on 后接名词；不要将“流行”直接等同于“真实”。"
  },
  {
    "topic": "城市更新与老建筑利用",
    "zh": "城市更新不一定意味着拆除旧建筑。把老车站改造成公共空间，可以促进社区发展。这样的转变既保留了地方记忆，也帮助城市适应新的需求。",
    "en": "Urban renewal does not necessarily mean removing old buildings. To convert an old station into a public space can help a community thrive. Such a transition preserves local memories while helping a city adapt to new needs.",
    "prompt": "Should cities preserve old buildings when pursuing development?",
    "model": "Innovation can transform an unused building into a shared space and allow a stagnant neighborhood to thrive.",
    "note": "“把……改造成……”用 convert… into…；while 可连接同时发生的两种积极作用。"
  },
  {
    "topic": "小微企业与创业",
    "zh": "小企业在社区经济中发挥重要作用。创业者不仅需要资金，还需要控制开支并改善服务。在经济衰退期间，审慎投资有助于企业应对收入下降的压力。",
    "en": "Small businesses play an important role in the community economy. An entrepreneur needs capital as well as control over expenditure and better services. During a recession, prudent investment can help an enterprise cope with falling revenue.",
    "prompt": "What qualities are important for a student who hopes to start a business?",
    "model": "A successful enterprise depends not only on capital but also on the ability to turn limited investment into lasting value.",
    "note": "not only… but also… 两侧结构要平行；revenue 表示收入，不能直接替代 profit（利润）。"
  },
  {
    "topic": "社区融合与包容",
    "zh": "随着城市化发展，来自不同地区的人们在同一社区生活。尊重文化多样性、减少偏见，有助于加强社会凝聚力。真正的融合意味着让每个人都有参与公共生活的机会。",
    "en": "With urbanization, people from different regions live in the same community. Respect for cultural diversity and efforts to reduce prejudice can strengthen social cohesion. Genuine integration means giving everyone an opportunity to participate in public life.",
    "prompt": "How can university communities become more inclusive?",
    "model": "Inclusion requires us to challenge each stereotype and turn respect for diversity into everyday cooperation.",
    "note": "“随着……”可用 With＋名词；“意味着做某事”用 mean doing，区别于 mean to do（打算做）。"
  },
  {
    "topic": "生态保护与绿色发展",
    "zh": "保护河流不仅是改善水质，也是保护整个生态系统。减少污染、恢复植被以及使用可再生能源，都有助于可持续发展。生态保护需要居民、企业和公共部门共同参与。",
    "en": "Protecting a river means improving water quality and preserving the entire ecosystem. Reducing contamination, restoring vegetation, and using renewable energy all contribute to sustainable development. Conservation requires joint efforts from residents, businesses, and public authorities.",
    "prompt": "What can young people do to support sustainable development?",
    "model": "Conservation becomes more effective when individuals reduce waste and businesses protect biodiversity through sustainable practices.",
    "note": "三个动名词短语并列作主语时，谓语用复数；contribute to 中 to 是介词。"
  },
  {
    "topic": "科技创新与适老化",
    "zh": "技术创新应回应实际生活需求。通过数字模拟，研究人员可以在生产之前改进设备原型。设计便于老年人使用的交互界面，同样是创新的重要组成部分。",
    "en": "Technological innovation should respond to practical needs. Through digital simulation, researchers can improve a device prototype before production. Designing an interactive interface that older people can use easily is also an important part of innovation.",
    "prompt": "How can technology improve the lives of older people?",
    "model": "An ingenious device is valuable only when its sophisticated design remains compatible with users' everyday needs.",
    "note": "“便于……使用”可译为 that… can use easily；不要为追求高级词而忽略表达清楚。"
  },
  {
    "topic": "终身教育与学习动力",
    "zh": "终身教育使不同年龄的人都能继续学习。灵活的课程和职业培训可以提高人们的能力。除了传授知识，教育还应培养学习动力，并帮助学习者理解和运用所学内容。",
    "en": "Lifelong education enables people of different ages to continue learning. A flexible curriculum and vocational training can improve their competence. In addition to providing knowledge, education should cultivate motivation and help learners understand and apply what they learn.",
    "prompt": "Why is lifelong learning important in a changing society?",
    "model": "Lasting proficiency grows when a suitable curriculum combines motivation, comprehension, and opportunities for practice.",
    "note": "enable sb. to do 表示“使某人能够”；in addition to 后接名词或动名词。"
  },
  {
    "topic": "职业教育与实践能力",
    "zh": "职业教育把知识学习与工作实践联系起来。实习能够帮助学生积累专业经验，了解团队合作。评价人才时，既应考虑学历资格，也应重视实际能力和职业责任感。",
    "en": "Vocational education connects academic learning with practical work. An internship can help students develop expertise and learn to collaborate. When evaluating a candidate, employers should consider both formal qualification and practical competence, as well as professional responsibility.",
    "prompt": "Should universities offer more opportunities for practical work?",
    "model": "An internship allows a candidate to develop expertise that a formal qualification alone may not demonstrate.",
    "note": "“把……与……联系起来”用 connect… with…；expertise 通常不可数；注意学历与实际能力不是同一概念。"
  },
  {
    "topic": "沟通与冲突解决",
    "zh": "良好的沟通并不是一味说服别人。发生冲突时，人们应认真倾听，清楚传达自己的担忧，并尊重不同观点。通过对话寻找妥协，比相互指责更有助于达成共识。",
    "en": "Good communication is not simply an attempt to persuade others. In a conflict, people should listen carefully, convey their concerns clearly, and respect different views. Seeking a compromise through dialogue is more helpful in reaching consensus than blaming one another.",
    "prompt": "What role does empathy play in effective communication?",
    "model": "Empathy enables us to replace hostility with dialogue and negotiate a compromise based on mutual respect.",
    "note": "比较结构 more… than… 两侧保持一致；reach consensus 表示“达成共识”。"
  },
  {
    "topic": "情绪管理与挫折应对",
    "zh": "面对挫折，保持乐观并不意味着忽视困难。适当地表达焦虑、接受他人的关心，可以帮助我们重新获得动力。学会感激日常生活中的支持，也能增强内心的满足感。",
    "en": "In the face of frustration, optimism does not mean ignoring difficulties. Expressing anxiety appropriately and accepting compassion from others can help us regain motivation. Gratitude for everyday support can also strengthen our sense of contentment.",
    "prompt": "How should university students respond to setbacks?",
    "model": "Optimism is most useful when it helps us face anxiety with patience rather than hide frustration behind false enthusiasm.",
    "note": "“面对……”可用 In the face of…；gratitude for 后接感激的对象或事情。"
  },
  {
    "topic": "志愿服务与行动力",
    "zh": "志愿服务需要热情，也需要组织能力。组织者应明确任务的优先次序，协调参与者，并落实具体方案。每个人履行自己的承诺，才能把共同的目标转化为实际成果。",
    "en": "Volunteer work requires enthusiasm as well as organizational skills. Organizers should prioritize tasks, coordinate participants, and implement a specific plan. Only when each person can fulfill a commitment can a shared goal be turned into practical results.",
    "prompt": "Why is the ability to act important for personal growth?",
    "model": "To accomplish a meaningful goal, we must initiate practical steps and commit ourselves to carrying them out.",
    "note": "Only when 引导的状语位于句首时，主句部分倒装；commit oneself to 后接动名词。"
  },
  {
    "topic": "资源分配与公共服务",
    "zh": "有限的公共资源需要合理分配。通过整合配送并减少浪费，社区服务机构可以提高效率。优化资源使用，不仅能降低成本，也能帮助更多有需要的人。",
    "en": "Limited public resources need to be allocated appropriately. By combining deliveries and reducing waste, community service organizations can improve efficiency. Efforts to optimize resource use can minimize costs and help more people in need.",
    "prompt": "How can students make better use of limited resources?",
    "model": "When resources are scarce, we should allocate them carefully, utilize them efficiently, and minimize unnecessary waste.",
    "note": "need to be＋过去分词表达“需要被……”；by doing 表示手段；efficiently 修饰动词。"
  },
  {
    "topic": "规则意识与公平",
    "zh": "清晰的规则有助于保护公共利益。规则的执行应当公正，限制也应有合理依据。人们在遵守规定的同时，也应有机会通过合法程序表达意见。",
    "en": "Clear regulation helps protect the public interest. Its enforcement should be impartial, and any restriction should have a reasonable basis. While maintaining compliance, people should also have opportunities to express their views through legitimate procedures.",
    "prompt": "Why should fairness matter in the enforcement of rules?",
    "model": "A legitimate rule deserves respect, but impartial enforcement is essential if it is to win public trust.",
    "note": "“在……同时”可用 while doing；区分 legitimate（合法或合理）与 impartial（公正）。"
  },
  {
    "topic": "健康教育与生活方式",
    "zh": "健康教育可以帮助公众理解营养、卫生和疾病预防。对于久坐的人来说，建立适合自身情况的生活习惯十分重要。健康信息应当清楚可靠，而不能代替专业诊断。",
    "en": "Health education can help the public understand nutrition, hygiene, and disease prevention. For people with a sedentary lifestyle, it is important to develop habits suited to their own circumstances. Health information should be clear and reliable, but it cannot replace a professional diagnosis.",
    "prompt": "How can universities help students develop healthier habits?",
    "model": "Health education should improve understanding of nutrition and hygiene while encouraging students to seek professional advice when necessary.",
    "note": "it is important to do 用形式主语；“适合……”用 suited to；避免把练习内容写成具体医疗建议。"
  },
  {
    "topic": "文化遗产与传统工艺",
    "zh": "传统工艺是文化遗产的重要组成部分。博物馆通过展览展示精湛技艺，也让公众了解作品背后的历史。将传统与当代创造相结合，有助于让文化遗产走进日常生活。",
    "en": "Traditional craftsmanship is an important part of cultural heritage. Through an exhibition, a museum can display refined skills and help the public understand the history behind each work. Combining tradition with contemporary creativity can bring cultural heritage into everyday life.",
    "prompt": "How can traditional culture remain meaningful to young people?",
    "model": "An authentic tradition can gain new vitality when contemporary creativity respects the craftsmanship and stories behind it.",
    "note": "“是……的重要组成部分”用 an important part of…；“将……与……结合”用 combine… with…。 "
  },
  {
    "topic": "媒介素养与可信信息",
    "zh": "数字媒体让信息传播更加便捷，也增加了辨别真伪的难度。发布内容之前核实事实、尊重隐私和版权，有助于维护媒体的可信度。公众也需要识别报道中的偏见。",
    "en": "Digital media make it easier to disseminate information, but they also make it harder to distinguish truth from falsehood. Efforts to verify facts and respect privacy and copyright before publication help maintain credibility. The public also needs to recognize bias in reporting.",
    "prompt": "What responsibilities should people have when sharing information online?",
    "model": "Before we disseminate a claim, we should verify its source and consider whether it may distort the facts or violate privacy.",
    "note": "make it＋形容词＋to do 是常用结构；“真伪”可拆译为 truth and falsehood。"
  },
  {
    "topic": "证据与理性讨论",
    "zh": "理性讨论需要明确的论点和连贯的推理。相关性并不必然意味着因果关系。我们应当用证据支持结论，也应愿意在发现矛盾时修正原有假设。",
    "en": "Reasoned discussion requires an explicit argument and coherent reasoning. Correlation does not necessarily imply causation. We should use evidence to substantiate a conclusion and be willing to revise an assumption when a contradiction is found.",
    "prompt": "Why should students learn to support their opinions with evidence?",
    "model": "A persuasive conclusion rests on evidence, not on an assumption that we are unwilling to question.",
    "note": "not necessarily 表示“未必”，不是“一定不”；be willing to do 表示愿意做某事。"
  },
  {
    "topic": "质量意识与细节",
    "zh": "看似微小的问题可能产生显著影响。全面而严格的检查能够发现表面观察容易忽略的风险。无论学习还是工作，精确的判断都比随意的决定更可靠。",
    "en": "A seemingly negligible problem may have a substantial impact. A comprehensive and rigorous inspection can reveal risks that a superficial observation may miss. In study as in work, a precise judgment is more reliable than an arbitrary decision.",
    "prompt": "Why does attention to detail matter in study and work?",
    "model": "A subtle warning should not be dismissed as negligible before a rigorous assessment has been made.",
    "note": "seemingly 表示“表面上看”；that 从句限定 risks；“忽略”可用 dismiss… as…。 "
  },
  {
    "topic": "乡村阅读与公共文化",
    "zh": "乡村图书馆为居民提供接触知识的机会。然而，资金限制和自然灾害可能妨碍服务。社会各界的支持能够减轻负担，帮助社区克服困难，保持文化生活的活力。",
    "en": "Rural libraries offer residents opportunities to access knowledge. However, financial constraints and natural disasters may hinder their services. Support from different parts of society can alleviate the burden and help a community overcome adversity while sustaining its cultural life.",
    "prompt": "How can communities maintain resilience in difficult times?",
    "model": "Resilience grows when people work together to overcome an obstacle and alleviate the burden on those most in need.",
    "note": "“为某人提供做某事的机会”用 offer sb. opportunities to do；不要把 overcome 后误加介词。"
  },
  {
    "topic": "合作与良性竞争",
    "zh": "竞争可以推动进步，合作同样不可缺少。面对共同挑战，建立互惠的伙伴关系能够整合不同优势。相互尊重和团结有助于让短期合作转变为长期信任。",
    "en": "Competition can promote progress, but cooperation is equally necessary. In the face of a shared challenge, a reciprocal partnership can bring together different strengths. Mutual respect and solidarity can turn short-term cooperation into lasting trust.",
    "prompt": "Is cooperation as important as competition for success?",
    "model": "Competition may encourage us to outperform a rival, whereas cooperation allows different strengths to converge on a shared goal.",
    "note": "whereas 用于对比；turn… into… 表示转变；outperform 直接接宾语。"
  },
  {
    "topic": "城市空间与便民设计",
    "zh": "公共空间的布局影响居民的日常生活。学校、花园和服务设施之间的距离，需要在规划中统筹考虑。合理的结构和设施分布有助于让城市更加便利。",
    "en": "The configuration of public spaces affects residents' everyday lives. The proximity of schools, gardens, and service facilities needs to be considered in planning. A well-designed structure and a balanced distribution of facilities can make a city more convenient to live in.",
    "prompt": "What makes a public space friendly to its users?",
    "model": "A useful planning framework considers both the central area and peripheral neighborhoods rather than treating each component in isolation.",
    "note": "proximity 表示接近程度；“更适宜居住”可用 more convenient to live in，保留介词 in。"
  },
  {
    "topic": "时间管理与灵活规划",
    "zh": "合理规划时间有助于减少不必要的压力。人们应预先考虑可能的延误，区分临时安排与长期目标。当情况改变时，适当调整顺序比一再推迟任务更有效。",
    "en": "Careful time planning helps reduce unnecessary pressure. People should anticipate possible delays and distinguish temporary arrangements from long-term goals. When circumstances change, adjusting the sequence of tasks is more effective than repeatedly choosing to postpone them.",
    "prompt": "How can students balance careful planning with flexibility?",
    "model": "A deadline should encourage preparation, while periodic reflection allows us to adjust a temporary plan without abandoning our goal.",
    "note": "distinguish A from B 区分两者；比较时 adjusting 与 choosing 都用动名词保持平行。"
  },
  {
    "topic": "责任感与团队领导",
    "zh": "优秀的团队领导者应当正直、可靠，并愿意承担责任。给予成员自主权并不意味着放弃监督。耐心、勤奋和对他人的体贴，有助于建立持久的信任。",
    "en": "A good team leader should show integrity, be trustworthy, and accept accountability. Giving members autonomy does not mean abandoning supervision. Patience, diligence, and a considerate attitude toward others help build lasting trust.",
    "prompt": "What makes a person a responsible team leader?",
    "model": "A conscientious leader combines accountability with humility and gives others enough autonomy to develop their abilities.",
    "note": "give sb. autonomy 给予自主权；does not mean doing 表示“不意味着……”。"
  },
  {
    "topic": "清晰表达与有效写作",
    "zh": "有效的写作不一定依靠复杂词汇。作者应清楚表达观点，说明理由，并消除歧义。简洁而准确的语言往往比冗长的修辞更能帮助读者理解。",
    "en": "Effective writing does not necessarily depend on complex vocabulary. Writers should articulate their views, illustrate their reasons, and remove ambiguity. Concise and accurate language often helps readers understand more effectively than verbose rhetoric.",
    "prompt": "Why is clarity important in communication?",
    "model": "To convey an idea effectively, we should clarify its meaning and emphasize its essential points rather than merely elaborate on every detail.",
    "note": "articulate 可作动词“清楚表达”；elaborate on 表示详细说明；避免一味堆砌高级词。"
  },
  {
    "topic": "公共治理与透明决策",
    "zh": "公共设施建设与居民生活密切相关。透明的政策说明和充分沟通，可以帮助公众理解资金来源及项目安排。改善行政管理，有助于减少不必要的程序并提高公共服务质量。",
    "en": "The construction of public facilities is closely related to residents' lives. Transparency in policy explanations and sufficient communication can help the public understand funding sources and project arrangements. Reform in administration can reduce unnecessary procedures and improve public services.",
    "prompt": "Why is transparency important in public decision-making?",
    "model": "Effective governance requires transparency so that citizens can understand a policy and evaluate its effects.",
    "note": "be closely related to 表示密切相关；so that 引导目的或结果，依据上下文判断。"
  },
  {
    "topic": "理性消费与循环利用",
    "zh": "理性消费强调商品的耐用性，而不仅是低廉价格。清晰的保修和退款规则可以增强消费者信任。维修、回收以及减少一次性包装，有助于降低资源消耗。",
    "en": "Thoughtful consumption emphasizes durable goods rather than low prices alone. Clear warranty and refund policies can strengthen consumer trust. Repair, recycling, and reduced use of disposable packaging can help lower resource consumption.",
    "prompt": "How can consumers make more sustainable choices?",
    "model": "Before purchasing merchandise, we should consider whether it is durable and whether its useful life can be extended through repair.",
    "note": "rather than 表示“而不是”；whether 引导宾语从句；useful life 指使用寿命。"
  },
  {
    "topic": "科学方法与可靠结论",
    "zh": "可靠的科学结论需要准确测量和重复验证。研究者不仅要记录定量数据，也要重视定性观察。出现意外结果时，应检查仪器和方法，而不是简单地删去异常数据。",
    "en": "Reliable scientific conclusions require accurate measurement and repeated verification. Researchers should record quantitative data and value qualitative observation. When an unexpected result occurs, they should check the apparatus and the procedure rather than simply remove unusual data.",
    "prompt": "How should students respond when evidence challenges their expectations?",
    "model": "An unexpected observation should lead us to examine accuracy and reliability, not to discard evidence merely because it contradicts an estimate.",
    "note": "quantitative 与 qualitative 分别为定量和定性；apparatus 可指一套仪器；rather than 后保持结构平行。"
  },
  {
    "topic": "社区创新与可行方案",
    "zh": "社区创新可以从日常问题开始。初步调查有助于理解居民需求，审慎预算则能判断方案是否可行。一个有说服力的计划，应说明其意义、可能后果及实施方式。",
    "en": "Community innovation can begin with everyday problems. A preliminary survey helps identify residents' needs, while a careful budget shows whether an alternative is feasible. A persuasive plan should explain its significance, possible consequences, and how it can be implemented.",
    "prompt": "How can young people turn a useful idea into a practical project?",
    "model": "A viable alternative becomes persuasive when credible evidence demonstrates its relevance to a real problem.",
    "note": "whether 引导“是否”；explain 后并列名词与从句时注意语意清晰；feasible 与 viable 均可表达可行性。"
  }
];
