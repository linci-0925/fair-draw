const THEMES = ['学术研究','思考判断','变化发展','经济商业','社会议题','环境生态','科技创新','教育成长','工作职业','人际沟通','情绪态度','行动决策','资源管理','法律规则','健康生活','文化艺术','信息媒体','逻辑论证','程度特征','困难挑战','合作竞争','空间结构','时间过程','个人品质','语言表达','公共事务','生产消费','科学方法','综合巩固'];
const RAW = `
analyze|分析;hypothesis|假设;evidence|证据;empirical|实证的;theoretical|理论的;methodology|方法论;variable|变量;discipline|学科;cite|引用;validity|有效性
perceive|感知;infer|推断;assume|假定;assess|评估;evaluate|评价;contemplate|深思;discern|辨别;presume|推定;scrutinize|仔细检查;insight|洞察力
transform|转变;evolve|演变;fluctuate|波动;accelerate|加速;diminish|减少;expand|扩大;decline|下降;transition|过渡;innovation|创新;adapt|适应
revenue|收入;expenditure|支出;deficit|赤字;surplus|盈余;inflation|通货膨胀;investment|投资;commodity|商品;transaction|交易;enterprise|企业;monopoly|垄断
inequality|不平等;poverty|贫困;discrimination|歧视;diversity|多样性;welfare|福利;demographic|人口统计的;migration|迁移;urbanization|城市化;community|社区;integration|融合
ecology|生态学;biodiversity|生物多样性;conservation|保护;sustainable|可持续的;renewable|可再生的;emission|排放;contamination|污染;habitat|栖息地;depletion|消耗;ecosystem|生态系统
automation|自动化;algorithm|算法;artificial|人工的;virtual|虚拟的;digital|数字的;infrastructure|基础设施;patent|专利;prototype|原型;device|设备;breakthrough|突破
curriculum|课程体系;literacy|读写能力;competence|能力;proficiency|熟练;tuition|学费;scholarship|奖学金;assessment|评估;comprehension|理解;motivation|动力;cultivate|培养
occupation|职业;recruit|招募;candidate|候选人;qualification|资格;promotion|晋升;incentive|激励;productivity|生产率;expertise|专业知识;hierarchy|等级制度;collaborate|合作
negotiate|谈判;persuade|说服;consult|咨询;convey|传达;interact|互动;consensus|共识;compromise|妥协;conflict|冲突;empathy|共情;rapport|融洽关系
anxiety|焦虑;frustration|沮丧;enthusiasm|热情;optimism|乐观;pessimism|悲观;resentment|怨恨;indifference|漠不关心;skeptical|怀疑的;reluctant|不情愿的;ambivalent|矛盾的
implement|实施;initiate|发起;execute|执行;prioritize|优先处理;resolve|解决;undertake|承担;commit|承诺;intervene|干预;facilitate|促进;coordinate|协调
allocate|分配;distribute|分发;utilize|利用;exploit|开发利用;reserve|储备;scarcity|短缺;abundance|充裕;efficiency|效率;capacity|容量;budget|预算
legislation|立法;regulation|法规;compliance|遵从;violate|违反;legitimate|合法的;liable|负有法律责任的;prohibit|禁止;restrict|限制;authorize|授权;jurisdiction|管辖权
nutrition|营养;metabolism|新陈代谢;immunity|免疫力;chronic|慢性的;acute|急性的;diagnosis|诊断;therapy|治疗;rehabilitation|康复;sedentary|久坐的;hygiene|卫生
heritage|遗产;aesthetic|审美的;creativity|创造力;interpretation|解释;symbolism|象征手法;narrative|叙事;authentic|真实的;contemporary|当代的;tradition|传统;exhibition|展览
broadcast|广播;coverage|报道;publicity|宣传;censorship|审查;credibility|可信度;bias|偏见;distort|歪曲;disseminate|传播;verify|核实;privacy|隐私
premise|前提;conclusion|结论;contradiction|矛盾;correlation|相关性;causation|因果关系;justify|证明合理;refute|驳斥;substantiate|证实;coherent|连贯的;explicit|明确的
substantial|大量的;negligible|微不足道的;profound|深刻的;superficial|表面的;comprehensive|全面的;precise|精确的;ambiguous|模棱两可的;arbitrary|任意的;inherent|固有的;predominant|占主导地位的
obstacle|障碍;adversity|逆境;dilemma|困境;constraint|限制;vulnerability|脆弱性;resilience|韧性;endure|忍受;overcome|克服;mitigate|减轻;alleviate|缓解
cooperation|合作;competition|竞争;alliance|联盟;mutual|相互的;reciprocal|互惠的;solidarity|团结;rival|竞争对手;dominate|支配;outperform|表现优于;reconcile|调和
adjacent|相邻的;proximity|接近;dimension|维度;configuration|布局;component|组成部分;framework|框架;structure|结构;boundary|边界;interval|间隔;distribution|分布
subsequent|随后的;preceding|先前的;simultaneous|同时的;consecutive|连续的;temporary|暂时的;permanent|永久的;duration|持续时间;chronological|按时间顺序的;anticipate|预期;postpone|推迟
integrity|正直;diligence|勤奋;perseverance|毅力;humility|谦逊;autonomy|自主;accountability|责任;curiosity|好奇心;versatile|多才多艺的;meticulous|一丝不苟的;prudent|谨慎的
articulate|清楚表达;elaborate|详细阐述;illustrate|说明;clarify|澄清;paraphrase|改述;summarize|概括;emphasize|强调;acknowledge|承认;assert|断言;imply|暗示
policy|政策;governance|治理;bureaucracy|官僚体制;transparency|透明度;subsidy|补贴;taxation|税收;municipal|市政的;administration|行政管理;reform|改革;referendum|全民公决
manufacture|制造;consumption|消费;procurement|采购;inventory|库存;logistics|物流;retail|零售;wholesale|批发;demand|需求;supply|供应;durable|耐用的
observation|观察;experiment|实验;specimen|样本;replicate|重复验证;quantitative|定量的;qualitative|定性的;random|随机的;sample|样本;accuracy|准确性;reliability|可靠性
implication|可能的影响;perspective|视角;phenomenon|现象;alternative|替代选择;fundamental|根本的;conventional|传统的;controversial|有争议的;feasible|可行的;inevitable|不可避免的;significant|显著的
`;
const BASE_WORDS = RAW.trim().split('\n').flatMap((line,day)=>line.split(';').map(pair=>{const [word,meaning]=pair.split('|');return {id:word,word,meaning,day:day+1,theme:THEMES[day]};}));

const EXTRA_RAW = `abstract|抽象的;academic|学术的;academy|专科院校;thesis|论文;dissertation|学位论文;survey|调查;literature|文献;empiricism|经验主义;analytical|分析的;criterion|标准
cognition|认知;intuition|直觉;reasoning|推理;deduce|推导;conceive|构想;reflect|反思;deliberate|深思熟虑的;speculate|推测;recognition|识别;judgment|判断
alter|改变;modify|修改;convert|转化;revolution|革命;progressive|进步的;dynamic|动态的;stagnant|停滞的;deteriorate|恶化;prosper|繁荣;thrive|兴旺
equity|股权；公平;asset|资产;liability|负债;capital|资本;currency|货币;bankruptcy|破产;recession|经济衰退;entrepreneur|企业家;dividend|股息;fiscal|财政的
minority|少数群体;majority|多数;ethnic|民族的;prejudice|偏见;stereotype|刻板印象;segregation|隔离;assimilation|同化;disparity|差距;cohesion|凝聚力;inclusion|包容
pollutant|污染物;erosion|侵蚀;deforestation|毁林;extinction|灭绝;drought|干旱;precipitation|降水;vegetation|植被;fertility|肥力;recycle|回收利用;biodegradable|可生物降解的
sophisticated|精密复杂的;obsolete|过时的;compatible|兼容的;interactive|交互的;simulation|模拟;telecommunication|电信;transmission|传输;semiconductor|半导体;sensor|传感器;ingenious|巧妙的
pedagogy|教学法;enrollment|入学人数;undergraduate|本科生;postgraduate|研究生;vocational|职业的;compulsory|义务的；强制的;aptitude|天赋;intellect|智力;memorize|记忆;retention|保持；记忆保留
profession|职业;vocation|职业；使命;apprentice|学徒;internship|实习;remuneration|报酬;compensation|补偿；薪酬;redundancy|裁员；冗余;resignation|辞职;supervise|监督;delegate|委派
mediation|调解;dialogue|对话;discourse|话语;assertive|坚定自信的;diplomatic|圆通的；外交的;tactful|得体的;courtesy|礼貌;hostility|敌意;intimacy|亲密;alienation|疏离
apprehension|忧虑;agitation|焦躁;contentment|满足;gratitude|感激;indignation|愤慨;apathy|冷漠;nostalgia|怀旧;compassion|同情;melancholy|忧郁;euphoria|兴奋
pursue|追求;strive|努力;endeavor|努力尝试;accomplish|完成;attain|达到;fulfill|履行;enforce|执行；强制实施;mobilize|动员;orchestrate|精心安排;rectify|纠正
replenish|补充;retrieve|取回;preserve|保存;accumulate|积累;disperse|分散;consolidate|巩固；合并;optimize|优化;maximize|最大化;minimize|最小化;exhaust|耗尽
constitution|宪法;statute|成文法;amendment|修正案;litigation|诉讼;testimony|证词;verdict|裁决;prosecution|起诉;defendant|被告;sanction|制裁；批准;impartial|公正的
symptom|症状;syndrome|综合征;epidemic|流行病;pandemic|大流行病;pathogen|病原体;antibody|抗体;vaccine|疫苗;prescription|处方;malnutrition|营养不良;obesity|肥胖
sculpture|雕塑;portrait|肖像;masterpiece|杰作;renaissance|复兴；文艺复兴;folklore|民间传说;mythology|神话;ritual|仪式;patronage|资助；惠顾;craftsmanship|工艺;antiquity|古代
journalism|新闻业;editorial|社论;circulation|发行量；循环;propaganda|宣传;headline|标题;subscription|订阅;copyright|版权;plagiarism|抄袭;anonymous|匿名的;confidential|保密的
analogy|类比;paradox|悖论;fallacy|谬误;assumption|假设;proposition|命题;deduction|推论;induction|归纳;inference|推断;counterpart|对应的人或物;concession|让步
intrinsic|内在的;extrinsic|外在的;notable|显著的;marginal|微小的；边缘的;drastic|剧烈的;subtle|微妙的;conspicuous|显眼的;obscure|晦涩的；不知名的;rigorous|严格的;plausible|似乎合理的
setback|挫折;hardship|艰苦;predicament|困境;plight|困境；苦境;hazard|危险;jeopardy|危险处境;burden|负担;ordeal|严峻考验;hinder|阻碍;impede|妨碍
partnership|伙伴关系;coalition|联合体；联盟;affiliate|使隶属;associate|联系；伙伴;unify|统一;converge|汇聚;diverge|分歧；分开;contend|竞争；主张;prevail|占上风；盛行;undermine|逐渐削弱
peripheral|外围的;central|中心的;horizontal|水平的;vertical|垂直的;parallel|平行的;diagonal|对角线的;symmetry|对称;diameter|直径;circumference|周长;latitude|纬度
precedent|先例;succession|连续；继承;sequence|顺序;periodic|周期性的;intermittent|间歇的;perpetual|永久的；不停的;transient|短暂的;prolong|延长;expire|到期；失效;deadline|截止日期
conscientious|认真负责的;resourceful|足智多谋的;tenacious|坚韧的;adaptable|适应力强的;trustworthy|可信赖的;imaginative|富有想象力的;considerate|体贴的;modest|谦虚的;arrogant|傲慢的;impulsive|冲动的
rhetoric|修辞；辞令;eloquent|雄辩的;concise|简洁的;succinct|简明的;verbose|冗长的;literal|字面的;figurative|比喻的;irony|反讽；讽刺;metaphor|隐喻;ambiguity|歧义
sovereignty|主权;diplomacy|外交;bilateral|双边的;multilateral|多边的;treaty|条约;convention|公约；惯例;delegation|代表团;constituency|选区;electorate|全体选民;mandate|授权；任期
merchandise|商品;merchandising|商品推销;franchise|特许经营权;outlet|销售点；出口;warranty|保修；保证;refund|退款;rebate|返利；折扣;lucrative|获利丰厚的;disposable|一次性的；可支配的;perishable|易腐烂的
apparatus|仪器；装置;calibrate|校准;measure|测量;estimate|估计;approximate|近似的;precision|精密度;deviation|偏差;variance|方差；差异;probability|概率;statistical|统计的
indispensable|不可或缺的;preliminary|初步的;tentative|暂定的;viable|可行的;credible|可信的;controversy|争议;consequence|后果;relevance|相关性;significance|重要性;persuasive|有说服力的`;
const EXTRA_WORDS=EXTRA_RAW.trim().split("\n").flatMap((line,day)=>line.split(";").map(pair=>{const [word,meaning]=pair.split("|");return {id:word,word,meaning,day:day+1,theme:THEMES[day]};}));
const WORDS=[...BASE_WORDS,...EXTRA_WORDS].sort((a,b)=>a.day-b.day);
