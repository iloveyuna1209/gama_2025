// Strict content from "簡報詳細分配" & Gama & Magistretti (2025)
window.SLIDES_DATA = [
  {
    id: "p1",
    label: "p1",
    type: "cover",
    tag: "論文導讀",
    tagColor: "teal",
    titleZh: "創新管理中的人工智慧：",
    subtitleZh: "創新能力之系統性回顧與 AI 應用分類法",
    titleEn: "Artificial intelligence in innovation management: A review of innovation capabilities and a taxonomy of AI applications",
    authors: "Fábio Gama¹,² & Stefano Magistretti³",
    journal: "Journal of Product Innovation Management (2025), 42(1), 76–111",
    presenter: "報告人：黃俊銘　｜　報告日期：11/20"
  },
  {
    id: "p2",
    label: "p2",
    type: "roadmap",
    tag: "導讀路線",
    tagColor: "teal",
    title: "概念地圖：本論文三大研究主軸路線",
    lead: "沿著系統性回顧脈絡，依序呈現「資料篩選 → 能力分類 → 應用動機」：",
    steps: [
      {
        num: "01",
        color: "navy",
        header: "1. 文獻三階段回顧",
        sub: "如何挑出研究資料？",
        items: ["規劃、執行、綜合整理", "Scopus 檢索 3,566 篇", "篩出 62 篇核心實證論文"]
      },
      {
        num: "02",
        color: "gold",
        header: "2. TOE 分類 AI 創新能力",
        sub: "創新能力的分類：",
        items: [
          "a. T、O、E 三標準對應 13 種創新能力",
          "b. 賦能 (Enabling) 與增強 (Enhancing) 兩大主類型"
        ]
      },
      {
        num: "03",
        color: "coral",
        header: "3. AI 三大應用類型",
        sub: "企業採用 AI 的動機：",
        items: ["取代（Replace）", "強化（Reinforce）", "揭示（Reveal）"]
      }
    ],
    source: "結構依據：Gama & Magistretti (2025)"
  },
  {
    id: "p3",
    label: "p3",
    type: "columns3",
    tag: "核心價值",
    tagColor: "blue",
    title: "摘要：本篇論文的核心價值與貢獻",
    lead: "說明這篇論文提供了甚麼價值（彙整 62 篇實證研究）：",
    cards: [
      {
        header: "價值 01｜能力二分法",
        color: "gold",
        lead: "將創新能力分為<strong class='kw-blue'>賦能型</strong>與<strong class='kw-purple'>增強型</strong>能力",
        bullets: [
          "賦能型 (Enabling)：導入前所需基礎技能與常規。",
          "增強型 (Enhancing)：導入後轉化或創造的新能力。"
        ]
      },
      {
        header: "價值 02｜3R 應用動機",
        color: "coral",
        lead: "定義了企業在 AI 應用的<strong class='kw-coral'>三個動機 (3R)</strong>",
        bullets: [
          "<strong class='kw-gold'>取代 (Replace)</strong>",
          "<strong class='kw-coral'>強化 (Reinforce)</strong>",
          "<strong class='kw-teal'>揭示 (Reveal)</strong>"
        ]
      },
      {
        header: "價值 03｜TOE 系統框架",
        color: "teal",
        lead: "用<strong class='kw-teal'>系統性框架</strong>分類整理能力與動機",
        bullets: [
          "以 T、O、E 構面整理目前 AI 採用的創新能力與應用動機情形。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) Abstract & Section 1"
  },
  {
    id: "p4",
    label: "p4",
    type: "columns2",
    tag: "研究動機 1/2",
    tagColor: "green",
    title: "為甚麼要研究 AI 與企業創新？（潛力）",
    cards: [
      {
        header: "1. 案例證實 AI 改寫創新結構",
        color: "green",
        bullets: [
          "AI 正在改寫<strong class='kw-green'>新產品、服務、流程與商業模式</strong>：",
          "<strong class='kw-blue'>IBM Watson</strong>：協助醫師進行醫療影像診斷。",
          "<strong class='kw-coral'>Netflix</strong>：靠數據驅動分析輔助內容創作。",
          "<strong class='kw-gold'>Mastercard</strong>：毫秒級攔截詐欺交易不延誤刷卡。",
          "<strong class='kw-teal'>生成式 AI</strong>：擴大問題與解法空間（ChatGPT）。"
        ]
      },
      {
        header: "2. AI 的兩大核心技術特質",
        color: "blue",
        bullets: [
          "AI 具備兩大能力（Yoo et al., 2010）：",
          "<strong class='kw-blue'>可重編程性 (Re-programmability)</strong>：能靈活應用於不同領域、適應各種情境且跨領域，具備<strong class='kw-navy'>通用型技術</strong>特質。",
          "<strong class='kw-blue'>自我參照 (Self-reference)</strong>：透過與使用者不斷互動，進行自我調校與重新訓練。"
        ]
      }
    ],
    source: "來源：Yoo et al., 2010；Magistretti et al., 2019；Verganti et al., 2020；Dell, 2021；Bouschery et al., 2023"
  },
  {
    id: "p5",
    label: "p5",
    type: "split_1_2",
    tag: "研究動機 2/2",
    tagColor: "coral",
    title: "為甚麼要研究 AI 與企業創新？（議題）",
    leftCard: {
      header: "3. 既有文獻的三大缺口",
      color: "coral",
      bullets: [
        "<strong class='kw-coral'>a. 缺乏理論</strong>：多為零星個案，沒有一套通用指引。",
        "<strong class='kw-coral'>b. 規範性與本質主義 (Normative & essentialist)</strong>：假定某種本質是唯一標準；只重 AI 技術程度而盲目導入，極少培養組織理解與學習。",
        "<strong class='kw-coral'>c. 視野過於狹隘</strong>：研究只聚焦特定領域或產業，缺乏全面視角。"
      ]
    },
    rightTopCard: {
      header: "4. 企業訪談揭露實務痛點",
      color: "purple",
      bullets: [
        "訪談各產業創新主管與 AI 顧問（IBM、Deloitte Digital 等）。",
        "結論：主管急需<strong class='kw-purple'>系統化指引</strong>，掌握導入時機與準備事項。"
      ]
    },
    rightBottomCard: {
      header: "5. 能力生命週期與選擇事件",
      color: "navy",
      bullets: [
        "<strong class='kw-navy'>能力生命週期 (Capability Lifecycle)</strong>：萌芽期 ➔ 發展期 ➔ 成熟期（成為 SOP 與慣例）。",
        "<strong class='kw-navy'>選擇事件 (Selection Event)</strong>：外部衝擊迫使成熟能力淘汰或轉型；導入 AI 即為選擇事件。"
      ]
    },
    source: "來源：Helfat & Peteraf, 2003；Yang et al., 2021；Haenlein & Kaplan, 2019"
  },
  {
    id: "p6",
    label: "p6",
    type: "grid2x2",
    tag: "核心提問",
    tagColor: "blue",
    title: "研究問題（Research Questions）",
    cards: [
      {
        header: "RQ 1｜AI 與創新能力角色",
        color: "blue",
        zh: "AI 在影響創新能力方面扮演什麼角色？",
        en: "What is the role of AI in influencing innovation capabilities?",
        note: "→ AI 帶給創新能力哪些力量？"
      },
      {
        header: "RQ 2｜理論概念化框架",
        color: "teal",
        zh: "如何依理論概念化 AI 能力，揭示兩者關係？",
        en: "How can AI capabilities be conceptualized with relevant theories?",
        note: "→ 找出框架整理零散案例現象？"
      },
      {
        header: "RQ 3｜AI 應用的主要差異",
        color: "gold",
        zh: "創新管理中的 AI 應用主要有哪些差異？",
        en: "What are the main differences in AI applications for innovation management?",
        note: "→ 明白企業導入 AI 的動機。"
      },
      {
        header: "RQ 4｜分類法對領域參考",
        color: "coral",
        zh: "不同應用的 AI 分類法如何為領域提供參考？",
        en: "How might an AI taxonomy inform the innovation management field?",
        note: "→ 導入前後能力檢核系統化 To-Do List。"
      }
    ],
    source: "來源：Gama & Magistretti (2025), Section 1 (p. 78)"
  },
  {
    id: "p7",
    label: "p7",
    type: "method_fig",
    tag: "研究方法",
    tagColor: "navy",
    title: "系統性文獻回顧：三階段篩選與分析",
    steps: [
      {
        header: "1. 規劃（Planning）",
        color: "navy",
        text: "先搞懂目前相關研究做了哪些地方，有哪些缺口尚未解決。"
      },
      {
        header: "2. 執行（Conducting）",
        color: "blue",
        text: "選跨領域 <strong class='kw-blue'>Scopus</strong> 資料庫（截至 2023/7）；布林檢索 (AI / intelligent system / ML / DL) AND innovat*，篩出 <strong class='kw-blue'>3,566 篇</strong>。"
      },
      {
        header: "3. 綜合整理（Synthesizing）",
        color: "teal",
        text: "排除純數學模型、非組織創新與未列入 <strong class='kw-teal'>ABS</strong> 期刊得 <strong class='kw-teal'>62 篇</strong>；<strong class='kw-teal'>MAXQDA</strong> 主軸編碼整理 TOE 能力與 3R 分類法。"
      }
    ],
    imgTitle: "Figure 1 Selection of articles",
    imgSrc: "assets/paper/fig1_selection.png",
    source: "來源：Tranfield et al., 2003；Gama & Magistretti (2025) Figure 1 (p. 82)"
  },
  {
    id: "p8",
    label: "p8",
    type: "toe_intro",
    tag: "理論視角",
    tagColor: "teal",
    title: "TOE 架構是什麼？為什麼使用此架構？",
    leftCard: {
      header: "架構起源與採用原因",
      color: "navy",
      bullets: [
        "<strong class='kw-navy'>提出來源</strong>：Tornatzky、Fleischer 與 Chakrabarti（1990）提出，為科技採納與擴散理論經典架構。",
        "<strong class='kw-navy'>打破盲點</strong>：過去研究偏重演算法，TOE 以三視角打破「<strong class='kw-coral'>技術決定論</strong>」盲點。",
        "<strong class='kw-navy'>核心功能</strong>：解釋情境與企業層級如何影響創新中的技術採用。"
      ]
    },
    rightCards: [
      {
        header: "T｜技術面（Technological）",
        color: "blue",
        text: "與技術本身相關的特性與條件，含企業現有軟硬體實力，及市場可取得的外部技術特質。"
      },
      {
        header: "O｜組織面（Organizational）",
        color: "coral",
        text: "企業內部的結構、管理制度、文化與資源。"
      },
      {
        header: "E｜環境面（Environmental）",
        color: "teal",
        text: "企業所處外部商業生態圈，涵蓋政府法規、產業競爭壓力、供應商與合作夥伴連動。"
      }
    ],
    source: "來源：Tornatzky, Fleischer & Chakrabarti, 1990；Baker, 2012"
  },
  {
    id: "p9",
    label: "p9",
    type: "enabling_enhancing",
    tag: "雙重能力觀",
    tagColor: "purple",
    title: "創新能力兩大主軸：賦能 vs. 增強",
    topDef: {
      title: "1. 先定義創新能力 (Innovation capabilities)：",
      body: "企業為有效吸收、掌握、改進現有技術並創造新技術，所具備的「<strong class='kw-navy'>知識、個人技能與組織運作常規 (Routines)</strong>」。",
      highlight: "➜ 「能力」主體是「組織與人」而非 AI；AI 僅扮演「催化劑」。"
    },
    leftCard: {
      header: "賦能型能力 (Enabling)",
      color: "gold",
      bullets: [
        "<strong class='kw-navy'>時點</strong>：實施或導入 AI <strong class='kw-blue'>之前</strong>。",
        "<strong class='kw-navy'>內涵</strong>：企業／組織所應該具備的技能與基礎條件。",
        "<strong class='kw-blue'>比喻</strong>：可視為 AI 採用的「<strong class='kw-blue'>原料</strong>」。"
      ]
    },
    centerBadge: "AI 導入\n分水嶺",
    rightCard: {
      header: "增強型能力 (Enhancing)",
      color: "purple",
      bullets: [
        "<strong class='kw-purple'>時點</strong>：實施或導入 AI <strong class='kw-purple'>之後</strong>。",
        "<strong class='kw-purple'>內涵</strong>：組織透過 AI 達成工作加速、轉型或創新的成效。",
        "<strong class='kw-purple'>比喻</strong>：可視為 AI 採用的「<strong class='kw-purple'>產物</strong>」。"
      ]
    },
    source: "來源：Romijn & Albaladejo, 2002 (p. 1054)；Gama & Magistretti (2025)"
  },
  {
    id: "p10",
    label: "p10",
    type: "r3_theory",
    tag: "3R 分類法",
    tagColor: "coral",
    title: "企業在 AI 應用的三個動機：3R 理論",
    topBoxes: [
      {
        title: "弱 AI (Weak AI) ➜ 取代",
        color: "blue",
        text: "基礎例行任務自動化，替換重複機械工作；不需理解即可替換，較不需發展新能力。"
      },
      {
        title: "強 AI (Strong AI) ➜ 強化／揭示",
        color: "purple",
        text: "模擬管理者推理與複雜決策，輔助決策並提點子；需具備創新能力來理解消化產出。"
      }
    ],
    cards: [
      {
        header: "1. 取代 (Replace)",
        color: "gold",
        bullets: [
          "目標：協助、最佳化、控制或加速既有流程（重績效）。",
          "能力：通常不需 T/O/E 能力。",
          "隱喻：AI 視為「<strong class='kw-navy'>工具</strong>」。"
        ]
      },
      {
        header: "2. 強化 (Reinforce)",
        color: "coral",
        bullets: [
          "目標：強化人類決策、加速發現並即時創造價值。",
          "能力：需大量組織與一定技術能力。",
          "隱喻：AI 視為「<strong class='kw-coral'>槓桿</strong>」。"
        ]
      },
      {
        header: "3. 揭示 (Reveal)",
        color: "teal",
        bullets: [
          "目標：發掘人類過去無法實現的創新解決方案。",
          "能力：需大量技術理解與環境感知。",
          "隱喻：AI 視為「<strong class='kw-teal'>聲納</strong>」。"
        ]
      }
    ],
    source: "來源：Iansiti & Lakhani, 2020；Shrestha et al., 2019"
  },
  {
    id: "p11",
    label: "p11",
    type: "qa_2col",
    tag: "Q&A Q1",
    tagColor: "gold",
    title: "討論問題 Q1：綜述探討的問題與組織架構",
    question: "問題：本綜述探討了哪些問題？綜述如何組織？",
    cards: [
      {
        header: "研究問題與研究設計",
        color: "blue",
        bullets: [
          "<strong class='kw-blue'>研究問題</strong>：AI 能帶給創新能力哪些力量？適合用什麼框架分類？分析企業採用 AI 的動機。",
          "<strong class='kw-blue'>研究設計</strong>：先從理論背景證實 AI 影響創新能力並區分弱／強 AI；再篩選 62 篇實證研究，以 TOE 架構提出 2 種能力、13 項子能力與 3 種動機。"
        ]
      },
      {
        header: "TOE、實證研究與能力觀點價值",
        color: "teal",
        bullets: [
          "<strong class='kw-teal'>TOE 框架</strong>：打破「只看技術面」盲點，依 T、O、E 三層級多視角分類。",
          "<strong class='kw-teal'>62 項實證</strong>：跳脫規範性與本質論空泛描述，具真實組織觀察基礎。",
          "<strong class='kw-teal'>能力觀點</strong>：整合零散技能、流程與常規成指引，看清不同時點影響。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) Sections 1–3"
  },
  // p12–p14 Technological capabilities
  {
    id: "p12",
    label: "p12",
    type: "capability",
    capNum: "01",
    tag: "技術脈絡",
    ctxColor: "blue",
    title: "能力 01：功能能力",
    enSub: "Functional Competence",
    analogyImg: "assets/illus/cap01_analogy.jpg",
    caseImg: "assets/illus/cap01_case.jpg",
    defBullets: [
      "<strong class='kw-blue'>定義</strong>：在裝置與平台內外蒐集、處理、傳輸資料，並將演算法整合至產品、服務及流程的專業熟練度。",
      "<strong class='kw-blue'>通用能力 (Generic)</strong>：跨領域基礎技能（程式、建模）→ <span class='analogy-tag'>如廚師辨識食材與刀工</span>。",
      "<strong class='kw-blue'>AI 專屬 (AI-specific)</strong>：綁定特定任務／資料庫（訓練模型、建 Agent）→ <span class='analogy-tag'>如廚師用烹飪電器</span>。",
      "<strong class='kw-blue'>認知與社交技能 (Cognitive & social)</strong>：跨部門整合變革 → <span class='analogy-tag'>如廚師品味與取得副手信任</span>。"
    ],
    caseTitle: "案例：無人自動化園林農具",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：偏遠崎嶇地區網路收訊差、延遲嚴重。",
      "<strong class='kw-navy'>作法</strong>：將邊緣 AI 整合進割草硬體，無網路仍快速判斷且省下雲端成本。"
    ],
    guessType: "enabling",
    guessAnswer: "答案：賦能能力（Enabling）",
    guessReason: "須先具備演算法嵌入硬體與跨裝置資料處理的內部專業，才能開發部署產品。",
    source: "來源：Bessen et al., 2022；Agarwal et al., 2021；Karaevli et al., 2020"
  },
  {
    id: "p13",
    label: "p13",
    type: "capability",
    capNum: "02",
    tag: "技術脈絡",
    ctxColor: "blue",
    title: "能力 02：資安管理",
    enSub: "Cybersecurity Management",
    analogyImg: "assets/illus/cap02_analogy.jpg",
    caseImg: "assets/illus/cap02_case.jpg",
    defBullets: [
      "<strong class='kw-blue'>定義</strong>：開發、使用及維護 AI 服務，使其免受內外部漏洞影響的新興能力。",
      "<strong class='kw-blue'>1. 即時資料共享安全 (Secure data-sharing)</strong>：通道加密防竊聽 → <span class='analogy-tag'>外送訂單無誤送達廚房</span>。",
      "<strong class='kw-blue'>2. 存取權限保護 (Protect access rights)</strong>：控管調閱權限 → <span class='analogy-tag'>限定店員查閱配方</span>。",
      "<strong class='kw-blue'>3. 入侵偵測防禦 (Intrusion detection)</strong>：主動攔截攻擊 → <span class='analogy-tag'>監視器與防盜鎖</span>。",
      "<strong class='kw-blue'>4. 資料完整性 (Data integrity)</strong>：防竄改污染 → <span class='analogy-tag'>餐廳配方 SOP</span>。"
    ],
    caseTitle: "案例：船舶控制系統公司",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：網路傳輸資料增加安全漏洞風險。",
      "<strong class='kw-navy'>作法</strong>：建立即時威脅監控常規，依感測器真實數據執行燃料／航線最佳化與預測維護。"
    ],
    guessType: "enabling",
    guessAnswer: "答案：賦能能力（Enabling）",
    guessReason: "離岸作業前須先規劃因應內外部漏洞的機制，才能提前預防意外發生。",
    source: "來源：Hepfer & Powell, 2020；Brock & von Wangenheim, 2019；Sjödin et al., 2021"
  },
  {
    id: "p14",
    label: "p14",
    type: "capability",
    capNum: "03",
    tag: "技術脈絡",
    ctxColor: "blue",
    title: "能力 03：雙元能力",
    enSub: "Ambidextrous Competence",
    analogyImg: "assets/illus/cap03_analogy.jpg",
    caseImg: "assets/illus/cap03_case.jpg",
    defBullets: [
      "<strong class='kw-blue'>定義</strong>：導入 AI 後能同時利用既有 IT 知識維持效率，並探索新技能創造差異化顧客價值。",
      "<strong class='kw-blue'>利用型 (Exploitative)</strong>：以既有 IT 降本增效 → <span class='analogy-tag'>如標準餐點與固定參數電器</span>。",
      "<strong class='kw-blue'>探索型 (Exploratory)</strong>：感知新科技機會 → <span class='analogy-tag'>如節日或每季推出新菜</span>。",
      "<strong class='kw-blue'>動態調整</strong>：萌芽期偏探索、成熟期偏利用（<strong class='kw-coral'>此屬個人觀點，非論文觀點</strong>）。"
    ],
    caseTitle: "案例：新型抗生素 Halicin",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：製藥團隊須兼顧量產舊藥與開發新藥壓力。",
      "<strong class='kw-navy'>作法</strong>：「利用」既有化學資料庫與藥理知識，結合 AI「探索」未知連結；複合型人才為關鍵。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "AI 導入讓領域專家擴大既有知識邊界並加速新知識產出，提升創新速度。",
    source: "來源：Lou & Wu, 2021；Chatterjee, Rana, Tamilmani, & Sharma, 2021"
  },
  {
    id: "p15",
    label: "p15",
    type: "summary",
    tag: "小結 1/3",
    ctxColor: "blue",
    title: "技術脈絡創新能力小結",
    question: "為什麼這三項能力會被分在「技術脈絡（Technological context）」？",
    rows: [
      { name: "01｜功能能力 (Functional)", q: "企業能不能了解並整合 AI 技術本身的細節？", type: "enabling", badge: "賦能能力" },
      { name: "02｜資安管理 (Cybersecurity)", q: "企業能不能確保 AI 技術使用安不安全？", type: "enabling", badge: "賦能能力" },
      { name: "03｜雙元能力 (Ambidextrous)", q: "企業能不能透過 AI 技術加速研發創新？", type: "enhancing", badge: "增強能力" }
    ],
    takeaway: "共通核心：這三項能力都直接涉及到 AI 的「工具與工程層面」。",
    source: "來源：Gama & Magistretti (2025) Section 4.1 & Table 2"
  },
  // p16–p20 Organizational capabilities
  {
    id: "p16",
    label: "p16",
    type: "capability",
    capNum: "04",
    tag: "組織脈絡",
    ctxColor: "coral",
    title: "能力 04：搜尋並重組知識",
    enSub: "Search and Recombine Knowledge",
    analogyImg: "assets/illus/cap04_analogy.jpg",
    caseImg: "assets/illus/cap04_case.jpg",
    defBullets: [
      "<strong class='kw-coral'>定義</strong>：導入 AI 前，管理者主動探尋外部方案與內部知識，提撥資源與空間，並透過經驗分享、回饋與激勵，鼓勵員工試誤實驗的常規與文化。",
      "<strong class='kw-coral'>關鍵作為</strong>：",
      "• 提供員工低風險小規模試錯的機會與資源。",
      "• 在組織普及 AI 知識，凝聚採用共識。",
      "• 推動跨部門創新並找尋外部解決方案。"
    ],
    caseTitle: "案例：通用汽車與礦業設備",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：基層員工被動接收新科技，導入受阻。",
      "<strong class='kw-navy'>作法</strong>：通用汽車立明確原則與激勵（零件減重 40%、強度升 20%）；礦業用儀表板展示 AI 成效。"
    ],
    guessType: "enabling",
    guessAnswer: "答案：賦能能力（Enabling）",
    guessReason: "導入前須備妥資源讓員工試錯，管理者亦須事前尋求方案與承擔風險。",
    source: "來源：Warner & Wäger, 2019；Füller et al., 2022；Sjödin et al., 2021"
  },
  {
    id: "p17",
    label: "p17",
    type: "capability",
    capNum: "05",
    tag: "組織脈絡",
    ctxColor: "coral",
    title: "能力 05：數位專案治理",
    enSub: "Digital Project Governance",
    analogyImg: "assets/illus/cap05_analogy.jpg",
    caseImg: "assets/illus/cap05_case.jpg",
    defBullets: [
      "<strong class='kw-coral'>定義</strong>：採用 AI 前透過內部政策、隱私準則、加密與專責職務制定專案管理程序。",
      "<strong class='kw-coral'>三大程序</strong>（<span class='analogy-tag'>如餐廳 QR 點餐與配方 SOP</span>）：資料管理 (Data management)、維護隱私 (User privacy)、所有權與知情同意 (Ownership & consent)。",
      "<strong class='kw-coral'>三大倫理</strong>：公平性 (Fairness)、問責性 (Accountability)、透明性 (Transparency)。",
      "<strong class='kw-coral'>概念漂移 (Concept Drift)</strong>：定期審查更新防準確度退化。",
      "<strong class='kw-blue'>與資安差異</strong>：治理重「內部程序／人員」，資安重「演算法／網路／資料庫」。"
    ],
    caseTitle: "案例：Vodafone、CNH、Google",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：客服與農機涉個資土地隱私，演算法恐有偏見。",
      "<strong class='kw-navy'>作法</strong>：Vodafone 對話加密、CNH 數位平台控存取、Google 設 AI 諮詢委員會並定期檢視。"
    ],
    guessType: "enabling",
    guessAnswer: "答案：賦能能力（Enabling）",
    guessReason: "導入前須先立好規矩與道德規範，避免缺乏標準檢視而損害組織與利害關係人。",
    source: "來源：Correani et al., 2020；Mikalef et al., 2021；Tambe et al., 2019"
  },
  {
    id: "p18",
    label: "p18",
    type: "capability",
    capNum: "06",
    tag: "組織脈絡",
    ctxColor: "coral",
    title: "能力 06：強化決策",
    enSub: "Augmented Decision-Making",
    analogyImg: "assets/illus/cap06_analogy.jpg",
    caseImg: "assets/illus/cap06_case.jpg",
    defBullets: [
      "<strong class='kw-coral'>定義</strong>：導入 AI 後利用演算法放大感知力、提供精準評估、加速即時決策並精簡研發資源分配，提升決策品質。",
      "<strong class='kw-coral'>餐廳比喻</strong>：<span class='analogy-tag'>如同請美食專家評鑑菜色調整配方</span>，顯著改善決策品質。",
      "<strong class='kw-coral'>風險警訊</strong>：須小心<strong class='kw-navy'>過度依賴 (Overreliance)</strong>，接受建議前仍要系統性檢視（美食專家未必代表大眾味蕾）。"
    ],
    caseTitle: "案例：Unanimous AI 協作平台",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：傳統團隊會議決策易受偏誤與限制。",
      "<strong class='kw-navy'>作法</strong>：打造演算法協作平台匯聚專家與成員意見，讓人類保留在決策中（放大而非取代）。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "精準評估、即時決策與精簡資源皆為導入後帶來的好處，用以加速組織決策。",
    source: "來源：Keding & Meissner, 2021；Chaudhuri et al., 2021；Metcalf et al., 2019"
  },
  {
    id: "p19",
    label: "p19",
    type: "capability",
    capNum: "07",
    tag: "組織脈絡",
    ctxColor: "coral",
    title: "能力 07：流程最佳化",
    enSub: "Process Optimization",
    analogyImg: "assets/illus/cap07_analogy.jpg",
    caseImg: "assets/illus/cap07_case.jpg",
    defBullets: [
      "<strong class='kw-coral'>定義</strong>：擷取並分析服務系統數據，改善或個人化服務互動，透過統計／認知／預測模型提升商業敏捷度。",
      "<strong class='kw-coral'>雙重效益</strong>：省成本並提升體驗 → <span class='analogy-tag'>如自動出餐系統減少用料錯誤與等待時間</span>。",
      "<strong class='kw-coral'>任務差異</strong>：",
      "• <strong class='kw-blue'>機械式 (Mechanical)／分析型 (Analytical)</strong>：適合 AI（如配餐自動化）。",
      "• <strong class='kw-purple'>直覺式 (Intuitive)／同理型 (Empathetic)</strong>：須謹慎（如點餐禮儀服務）。"
    ],
    caseTitle: "案例：eBay 與澳洲稅務局 ATO",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：跨國買賣語言不通；傳統報稅繁瑣易算錯。",
      "<strong class='kw-navy'>作法</strong>：eBay 導入機器翻譯增出口額；ATO 預填表單減錯加速（兩者皆具明確標準流程）。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "須先有 AI 運行產出的數據，才能據以改善或加速現有流程與服務。",
    source: "來源：Akter et al., 2021, 2022；Huang & Rust, 2018；Brynjolfsson et al., 2019"
  },
  {
    id: "p20",
    label: "p20",
    type: "capability",
    capNum: "08",
    tag: "組織脈絡",
    ctxColor: "coral",
    title: "能力 08：自動問題解決",
    enSub: "Automatic Problem-Solving",
    analogyImg: "assets/illus/cap08_analogy.jpg",
    caseImg: "assets/illus/cap08_case.jpg",
    defBullets: [
      "<strong class='kw-coral'>定義</strong>：在演算法支援下快速搜尋、提煉並排定點子優先順序，解決具價值問題、未滿足或未言明渴望。",
      "<strong class='kw-coral'>運作方式</strong>：從線上社群或群眾外包挑出有價值點子 → <span class='analogy-tag'>如餐廳參考美食評鑑掌握大眾口味喜好</span>。",
      "<strong class='kw-coral'>監督式機器學習</strong>：以「<strong class='kw-navy'>新穎性、可行性、價值</strong>」標籤評估篩選；須謹慎檢視結果避免偏誤。"
    ],
    caseTitle: "案例：Nøgne Ø 與丹麥接頭商",
    caseBullets: [
      "<strong class='kw-navy'>作法</strong>：挪威精釀啤酒廠用演算法找出無麩質啤酒需求；丹麥膨脹接頭商觀察客戶改裝研發新品。",
      "<strong class='kw-navy'>價值</strong>：助企業篩選分類並擴展問題搜尋思考方向。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "須有 AI 協助才能一次處理大量資訊，並擴大問題搜尋與創新假設範圍。",
    source: "來源：Christensen et al., 2017, 2018；Govindan, 2022；Lebovitz et al., 2021"
  },
  {
    id: "p21",
    label: "p21",
    type: "summary",
    tag: "小結 2/3",
    ctxColor: "coral",
    title: "組織脈絡創新能力小結",
    question: "為什麼這五項能力會被分在「組織脈絡（Organizational context）」？",
    rows: [
      { name: "04｜搜尋並重組知識", q: "組織管理者如何尋找能讓組織使用 AI 的機會。", type: "enabling", badge: "賦能" },
      { name: "05｜數位專案治理", q: "企業如何制定內部規則管控組織在 AI 使用的邊界。", type: "enabling", badge: "賦能" },
      { name: "06｜強化決策", q: "企業如何透過 AI 提升組織進行決策的效率與品質。", type: "enhancing", badge: "增強" },
      { name: "07｜流程最佳化", q: "企業如何透過 AI 提升自身產品或服務的流程效率與品質。", type: "enhancing", badge: "增強" },
      { name: "08｜自動問題解決", q: "企業如何透過 AI 擴大找尋需求與能夠創新的範圍。", type: "enhancing", badge: "增強" }
    ],
    takeaway: "共通核心：這些能力所具備或發生的場域都在「企業與組織內部」。",
    source: "來源：Gama & Magistretti (2025) Section 4.2 & Table 3"
  },
  // p22–p26 Environmental capabilities
  {
    id: "p22",
    label: "p22",
    type: "capability",
    capNum: "09",
    tag: "環境脈絡",
    ctxColor: "teal",
    title: "能力 09：法規篩查",
    enSub: "Screening Regulations",
    analogyImg: "assets/illus/cap09_analogy.jpg",
    caseImg: "assets/illus/cap09_case.jpg",
    defBullets: [
      "<strong class='kw-teal'>定義</strong>：導入 AI 之前，持續審視與監控外部法規環境的常規能力（如 GDPR、CCPA、PDPA）。",
      "<strong class='kw-teal'>挑戰與比喻</strong>：AI 監管變化極快且各國標準不一，須防踩紅線 → <span class='analogy-tag'>如餐廳定期檢查食材符合食安規範並隨時更新</span>。",
      "<strong class='kw-coral'>實務落差 (Stahl et al., 2023)</strong>：文獻強調法規重要，但實務專家竟未將 AI 法規列為最優先事項，認知與風險存有落差。"
    ],
    caseTitle: "案例：人力仲介 AI 履歷篩選",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：履歷表含大量敏感個資，抓取分析恐侵犯隱私。",
      "<strong class='kw-navy'>作法</strong>：事前落實法規篩查掌握個資法規，分析時秉持去識別化與知情同意機制。"
    ],
    guessType: "enabling",
    guessAnswer: "答案：賦能能力（Enabling）",
    guessReason: "作為 AI 採用的「合法執照」與「防護門檻」，導入前須先確認行為合法不踩線。",
    source: "來源：von Hippel & Kaulartz, 2021；Stahl et al., 2023；Trocin et al., 2021"
  },
  {
    id: "p23",
    label: "p23",
    type: "capability",
    capNum: "10",
    tag: "環境脈絡",
    ctxColor: "teal",
    title: "能力 10：夥伴合作敏捷性",
    enSub: "Partnering Agility",
    analogyImg: "assets/illus/cap10_analogy.jpg",
    caseImg: "assets/illus/cap10_case.jpg",
    defBullets: [
      "<strong class='kw-teal'>定義</strong>：迅速協調並控制外部夥伴推動 AI 開發落地 → <span class='analogy-tag'>如餐廳先與漁港合作保食材、與學校育廚師</span>。",
      "<strong class='kw-teal'>三種網絡</strong>：<strong class='kw-navy'>策略型</strong> (Strategic)、<strong class='kw-navy'>擴展型</strong> (Extended 跨界學研)、<strong class='kw-navy'>虛擬型</strong> (Virtual 雲端即時合作)。",
      "<strong class='kw-teal'>四種應用</strong>：偵測未來技術 (Detect future technologies)、建立知識聯盟 (Knowledge alliances)、重塑商模 (Renew business models)、預測顧客使用 (Forecast use)。"
    ],
    caseTitle: "案例：瑞典採礦企業重型機具",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：重型機械維護涉及機械商、感測器商、AI 與雲端專家、工人與礦主多方角色。",
      "<strong class='kw-navy'>作法</strong>：導入前對齊需求規範、共議目標，並透過夥伴外包加快導入效率。"
    ],
    guessType: "enabling",
    guessAnswer: "答案：賦能能力（Enabling）",
    guessReason: "導入前須先找夥伴講好需求、目標與治理制度，猶如大家看過的「企劃書」。",
    source: "來源：Teece et al., 2016；Warner & Wäger, 2019；Burström et al., 2021"
  },
  {
    id: "p24",
    label: "p24",
    type: "capability",
    capNum: "11",
    tag: "環境脈絡",
    ctxColor: "teal",
    title: "能力 11：多模態價值共創",
    enSub: "Multimodal Value Co-Creation",
    analogyImg: "assets/illus/cap11_analogy.jpg",
    caseImg: "assets/illus/cap11_case.jpg",
    defBullets: [
      "<strong class='kw-teal'>定義</strong>：導入 AI 後，與外部供應商、客戶、使用者等利害關係人展開迭代且協同的合作，透過高參與度與即時互動共創價值。",
      "<strong class='kw-teal'>溝通橋梁</strong>：AI 讓企業與利害關係人隨時雙向即時溝通，透過互相反饋動態調整服務。",
      "<strong class='kw-teal'>餐廳比喻</strong>：<span class='analogy-tag'>服務人員餐後詢問顧客口味與環境意見</span>，透過即時反饋採納改善建議。"
    ],
    caseTitle: "案例：Mastercard 與醫療照護",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：防詐過嚴會卡頓；醫護忙行政難顧病患。",
      "<strong class='kw-navy'>作法</strong>：Mastercard 即時攔詐不延誤正常刷卡；醫療 AI 處方／語音辨識減負，助醫病交流。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "跨組織合作常存矛盾意見，導入 AI 簡化溝通並快速傳遞回饋，迅速改善服務。",
    source: "來源：Li et al., 2021；Verganti et al., 2020；Gallego-Gomez & De-Pablos-Heredero, 2020；Kumar et al., 2023"
  },
  {
    id: "p25",
    label: "p25",
    type: "capability",
    capNum: "12",
    tag: "環境脈絡",
    ctxColor: "teal",
    title: "能力 12：平台生態系統協調",
    enSub: "Platform Ecosystem Orchestration",
    analogyImg: "assets/illus/cap12_analogy.jpg",
    caseImg: "assets/illus/cap12_case.jpg",
    defBullets: [
      "<strong class='kw-teal'>定義</strong>：利用 AI 建立並調度模組化數位平台生態系統，促進價值鏈上下游順暢交換產品、服務與資料。",
      "<strong class='kw-teal'>SaaS / PaaS</strong>：<strong class='kw-navy'>SaaS</strong> 提供終端完整應用；<strong class='kw-navy'>PaaS</strong> 提供工程師開發環境，免自建系統。",
      "<strong class='kw-teal'>模組化價值</strong>：打包零散服務降低外部使用門檻 → <span class='analogy-tag'>如餐廳推熱門餐點即食包，買回家加熱即食</span>。"
    ],
    caseTitle: "案例：IBM Watson 雲端平台",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：頂尖 AI 若只當封閉軟體賣，企業難導入且採納意願低。",
      "<strong class='kw-navy'>作法</strong>：開放 API 轉為雲端服務供企業串接自動化決策，提升黏著度並規模化採用。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "須先導入 AI 打造標準化流程與規格，才打包開放外部使用，屬導入後效果。",
    source: "來源：Garbuio & Lin, 2019；Kulkov, 2021；Russo-Spena et al., 2019"
  },
  {
    id: "p26",
    label: "p26",
    type: "capability",
    capNum: "13",
    tag: "環境脈絡",
    ctxColor: "teal",
    title: "能力 13：以情境為基礎的知識分享",
    enSub: "Context-Based Knowledge Sharing",
    analogyImg: "assets/illus/cap13_analogy.jpg",
    caseImg: "assets/illus/cap13_case.jpg",
    defBullets: [
      "<strong class='kw-teal'>定義</strong>：透過 AI 擴展內外部知識萃取、儲存、分析與分發，在不改原意下高精準高速轉移<strong class='kw-navy'>內隱 (Tacit)</strong> 與<strong class='kw-navy'>外顯 (Explicit)</strong> 知識。",
      "<strong class='kw-teal'>知識傳遞與比喻</strong>：AI 將隱性知識外化並助人內化 → <span class='analogy-tag'>如主廚將經驗手法編為手冊或書籍，供新進廚師實作與民眾在家自學</span>。"
    ],
    caseTitle: "案例：Symrise × OpenAI GPT-3",
    caseBullets: [
      "<strong class='kw-coral'>痛點</strong>：調香氣味偏好與配方極主觀、難以言喻。",
      "<strong class='kw-navy'>作法</strong>：引進 LLM 做文字摘要、主題建模與情緒分析，對應調香筆記與市場偏好並建氣味標籤。"
    ],
    guessType: "enhancing",
    guessAnswer: "答案：增強能力（Enhancing）",
    guessReason: "須先以 AI 文字探勘與情緒分析找對應資訊，並將隱性知識貼標結構化。",
    source: "來源：Arias-Pérez & Huynh, 2023；Bouschery et al., 2023；Kar & Kushwaha, 2021"
  },
  {
    id: "p27",
    label: "p27",
    type: "summary",
    tag: "小結 3/3",
    ctxColor: "teal",
    title: "環境脈絡創新能力小結",
    question: "為什麼這五項能力會被分在「環境脈絡（Environmental context）」？",
    rows: [
      { name: "09｜法規篩查", q: "企業如何隨時監控並適應外部政治與法律環境變動。", type: "enabling", badge: "賦能" },
      { name: "10｜夥伴合作敏捷性", q: "企業如何在外部尋找夥伴合作，共同執行專案與找尋方案。", type: "enabling", badge: "賦能" },
      { name: "11｜多模態價值共創", q: "企業透過 AI 如何改變與外部利害關係人的互動程度。", type: "enhancing", badge: "增強" },
      { name: "12｜平台生態系統協調", q: "企業如何透過 AI 將自身產品或服務串連到外部其他企業。", type: "enhancing", badge: "增強" },
      { name: "13｜以情境為基礎的知識分享", q: "企業透過 AI 打通企業與外部市場之間的知識傳遞。", type: "enhancing", badge: "增強" }
    ],
    takeaway: "共通核心：這些能力所關注的範圍都已「擴大到企業以外的領域」。",
    source: "來源：Gama & Magistretti (2025) Section 4.3 & Table 4"
  },
  {
    id: "p28",
    label: "p28",
    type: "qa_2col",
    tag: "Q&A Q2",
    tagColor: "gold",
    title: "討論問題 Q2：賦能能力與增強能力的區別",
    question: "問題：賦能與增強創新能力的區別是什麼？（比喻：AI 採用＝遊戲，企業＝玩家）",
    cards: [
      {
        header: "賦能能力＝遊戲「操作說明書」",
        color: "gold",
        bullets: [
          "<strong class='kw-navy'>定位</strong>：如何支持 AI 採用；導入 AI <strong class='kw-blue'>前</strong>必備基礎條件與例行公事。",
          "<strong class='kw-blue'>技術面</strong>：教玩家學基本操作、設置帳號密碼。",
          "<strong class='kw-teal'>組織／環境面</strong>：提供破關規則路徑、遵守使用者條款、組隊一同獲取遊戲資源。"
        ]
      },
      {
        header: "增強能力＝「通關技巧／秘訣」",
        color: "purple",
        bullets: [
          "<strong class='kw-purple'>定位</strong>：如何被轉化或創造；導入 AI <strong class='kw-purple'>後</strong>透過演算法創造新價值與技能。",
          "<strong class='kw-blue'>技術面</strong>：解主線同時發展支線任務。",
          "<strong class='kw-coral'>組織面</strong>：累積破關戰術、快速通關法、觀察抽中大獎機率。",
          "<strong class='kw-teal'>環境面</strong>：與隊友找解方、研究出裝組合、發佈攻略供人效仿。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) Section 5.1；簡報詳細分配"
  },
  // p28.5 Interactive Matching Mini-Game inserted between p28 and p29!
  {
    id: "p28.5",
    label: "互動遊戲",
    type: "game",
    tag: "p28–p29 互動挑戰",
    tagColor: "coral",
    title: "13 項創新能力配對小遊戲：投入正確籤筒！",
    source: "遊戲依據：Gama & Magistretti (2025) Figure 2 與簡報詳細分配 13 項能力"
  },
  {
    id: "p29",
    label: "p29",
    type: "fig_focus",
    tag: "整合架構 1/2",
    tagColor: "purple",
    title: "創新能力 × TOE：能力從何而來？",
    question: "這張表解釋能力從何而來：企業要導入 AI，這項能力本身的本質到底是長在哪裡？",
    imgSrc: "assets/paper/fig2_capabilities.png",
    caption: "Figure 2 The role of AI in innovation capabilities（左：6 項賦能能力 ➜ 中：AI Adoption 分水嶺 ➜ 右：7 項增強能力）",
    source: "來源：Gama & Magistretti (2025) Figure 2 (p. 90)"
  },
  {
    id: "p30",
    label: "p30",
    type: "table5_split",
    tag: "整合架構 2/2",
    tagColor: "coral",
    title: "採用目的 × TOE：實質改變與衝擊",
    imgSrc: "assets/paper/table5_zh.png",
    cards: [
      {
        header: "取代 (Replace)｜局部流程改善",
        color: "gold",
        bullets: [
          "<strong class='kw-navy'>T/O/E</strong>：換舊工具與任務、代員工執行、換手動外部介面。",
          "<strong class='kw-navy'>衝擊</strong>：原有架構制度未推翻，影響局限既有流程局部改善。"
        ]
      },
      {
        header: "強化 (Reinforce)｜組織實質轉變",
        color: "coral",
        bullets: [
          "<strong class='kw-coral'>T/O/E</strong>：注入新功能、重塑決策模式、強化外部趨勢監控。",
          "<strong class='kw-coral'>衝擊</strong>：<strong class='kw-coral'>組織面實質轉變 (強烈)</strong>；技術與環境在原框架強化。"
        ]
      },
      {
        header: "揭示 (Reveal)｜突破技術與環境",
        color: "teal",
        bullets: [
          "<strong class='kw-teal'>T/O/E</strong>：揭開全新可能、揭示內部潛力、捕捉潛在新商機。",
          "<strong class='kw-teal'>衝擊</strong>：<strong class='kw-teal'>技術與環境突破範圍 (密集)</strong>；組織面主要配合運作。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) 表 5 (p. 91)"
  },
  {
    id: "p31",
    label: "p31",
    type: "qa_3col",
    tag: "Q&A Q3",
    tagColor: "gold",
    title: "討論問題 Q3：3R 與雙重能力框架比較",
    question: "問題：取代–強化–揭示分類法與賦能–增強能力框架有何不同？",
    cards: [
      {
        header: "1. 分析層次不同",
        color: "blue",
        bullets: [
          "<strong class='kw-blue'>能力框架</strong>：討論「組織在 AI 採用前後應該具備什麼樣的技能」。",
          "<strong class='kw-coral'>應用分類 (3R)</strong>：討論「組織要用 AI 達成什麼目的」。"
        ]
      },
      {
        header: "2. 關注焦點不同",
        color: "teal",
        bullets: [
          "<strong class='kw-blue'>能力框架</strong>：看重「AI 採用前與採用後企業應該做哪些事情」。",
          "<strong class='kw-teal'>應用分類 (3R)</strong>：看重「人與 AI 互動的模式與產生的結果」。"
        ]
      },
      {
        header: "3. 尚未配對連結",
        color: "coral",
        bullets: [
          "目前能力框架與應用分類在此研究<strong class='kw-coral'>尚未進行配對連結</strong>。",
          "因此不能直接將某種能力配上某種應用（留待未來實證）。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) Section 5.3 & 5.4"
  },
  {
    id: "p32",
    label: "p32",
    type: "columns2",
    tag: "研究貢獻 1/2",
    tagColor: "blue",
    title: "理論意涵 (Theoretical Implications)",
    cards: [
      {
        header: "意涵 01｜以能力觀點整合",
        color: "blue",
        bullets: [
          "以<strong class='kw-blue'>能力觀點</strong>（賦能型與增強型能力）為 AI 採用進行整理歸納。",
          "聚焦於 AI 如何隨時間推移要求或放大創新能力。",
          "透過理論化清楚點出 AI 使用如何影響特定時點的組織行為（慣例、實務與流程）。"
        ]
      },
      {
        header: "意涵 02｜建立 3R 與 TOE 基礎",
        color: "teal",
        bullets: [
          "建立了<strong class='kw-teal'>三類 AI 應用目的</strong>（取代、強化、揭示），減少概念歧義。",
          "根據 TOE 架構將 AI 採用能力系統性分類，建立跨領域共通語言。",
          "可作為後續創新管理研究的理論架構基礎。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) Section 5.4.1 (pp. 93–94)"
  },
  {
    id: "p33",
    label: "p33",
    type: "columns3_simple",
    tag: "研究貢獻 2/2",
    tagColor: "green",
    title: "管理意涵 (Managerial Implications)",
    cards: [
      {
        header: "01｜拆解複雜特性",
        color: "green",
        text: "幫助管理者了解 AI 採用有多種特性（可分為<strong class='kw-green'>能力</strong>與<strong class='kw-green'>應用目的</strong>），並能以 TOE 框架拆解複雜情境。"
      },
      {
        header: "02｜釐清採用前後",
        color: "blue",
        text: "幫助管理者釐清哪些能力是 AI 採用<strong class='kw-blue'>前</strong>須具備的（賦能）？哪些是 AI 採用<strong class='kw-purple'>後</strong>所帶來的（增強）？"
      },
      {
        header: "03｜因地制宜評估",
        color: "gold",
        text: "幫助管理者認知並非每次 AI 採用都一樣，在採用 AI 之前應該先評估採用的<strong class='kw-navy'>情境與目的</strong>。"
      }
    ],
    source: "來源：Gama & Magistretti (2025) Section 5.4.2 (pp. 94–95)"
  },
  {
    id: "p34",
    label: "p34",
    type: "elsa",
    tag: "倫理與治理",
    tagColor: "purple",
    title: "倫理意涵：ELSA 風險與因應",
    topTitle: "什麼是 ELSA？（Ethical 倫理、Legal 法律、Social 社會 Aspects 層面）",
    topText: "統稱新興科技（如 AI）在導入過程中，除了純技術以外，對人類道德、法規合規與社會價值所產生的<strong class='kw-purple'>非預期衝擊</strong>（如演算法偏見、自動化自滿、問責模糊）。",
    cardTitle: "組織應制定並實施一套可實際執行的 ELSA 因應方法",
    actions: [
      { title: "1. 初步環境評估", color: "blue", text: "Preliminary landscape assessment：導入前評估風險與偏見。" },
      { title: "2. 錯誤管理", color: "coral", text: "Error management：建立錯誤監控與修正機制。" },
      { title: "3. 多方參與回饋", color: "teal", text: "Multi-stakeholder & cross-sector feedback：跨領域檢視。" },
      { title: "4. 營運維護工具", color: "gold", text: "Tools for adoption, operationalization & maintenance。" }
    ],
    source: "來源：Gama & Magistretti (2025) Section 5.4.3；Akter et al., 2022；Benbya et al., 2020"
  },
  {
    id: "p35",
    label: "p35",
    type: "columns2_simple",
    tag: "研究限制",
    tagColor: "coral",
    title: "研究限制 (Limitations)",
    cards: [
      {
        header: "研究限制 01｜文獻篩選標準",
        color: "coral",
        text: "系統性文獻的<strong class='kw-coral'>納入與排除標準</strong>（Inclusion and exclusion criteria）可能影響篩選文章的不同，因而有不同的歸納結果。"
      },
      {
        header: "研究限制 02｜TOE 架構選擇",
        color: "navy",
        text: "本論文是採用 <strong class='kw-navy'>TOE 架構</strong>來討論 AI 採用的創新能力，使用不同架構可能會有不同結果。"
      }
    ],
    source: "來源：Gama & Magistretti (2025) Section 5.4.4 (p. 95)"
  },
  {
    id: "p36",
    label: "p36",
    type: "agenda",
    tag: "未來研究",
    tagColor: "teal",
    title: "未來議程：創新能力與 AI 應用研究方向",
    left: {
      header: "針對創新能力（對應表 6）",
      color: "blue",
      bullets: [
        "<strong class='kw-blue'>技術</strong>：隨專案與創新類型動態調整？資安防外洩與資料中毒？",
        "<strong class='kw-blue'>組織</strong>：準備度影響？準確 vs. 看得懂？合規與決策轉向 AI？",
        "<strong class='kw-blue'>環境</strong>：倫理管演算法？外部合作失調？經驗餵 AI 防機密外流？"
      ],
      imgSrc: "assets/paper/table6_zh.png",
      imgLabel: "表 6 AI 採用所引發之創新能力研究議程"
    },
    right: {
      header: "針對 AI 應用（對應表 7）",
      color: "teal",
      bullets: [
        "<strong class='kw-teal'>技術</strong>：取代條件績效、開黑盒子找新功能、外包挖隱藏價值。",
        "<strong class='kw-teal'>組織</strong>：克服家族／非家族障礙與人機設計、中小企槓桿。",
        "<strong class='kw-teal'>環境</strong>：倫理社會衝擊、用 AI 解讀趨勢塑未來、外部前因。"
      ],
      imgSrc: "assets/paper/table7_zh.png",
      imgLabel: "表 7 AI 分類法的研究議程"
    },
    source: "來源：Gama & Magistretti (2025) 表 6 (p. 92) & 表 7 (p. 94)"
  },
  {
    id: "p37",
    label: "p37",
    type: "qa_2col",
    tag: "Q&A Q4",
    tagColor: "gold",
    title: "討論問題 Q4：主要限制與未解問題",
    question: "問題：主要限制與未解問題為何？",
    cards: [
      {
        header: "四大研究限制",
        color: "coral",
        bullets: [
          "1. 僅收錄至 2023/7 文獻，多早於<strong class='kw-coral'>生成式 AI (Generative AI)</strong> 普及浪潮。",
          "2. 「賦能－增強」關係為跨文獻歸納架構，非單一大樣本直接因果檢驗。",
          "3. 系統性文獻納入與排除標準影響結果。",
          "4. 採用 TOE 架構，換不同架構結果可能不同。"
        ]
      },
      {
        header: "未解問題（創新能力 & AI 應用）",
        color: "blue",
        bullets: [
          "<strong class='kw-blue'>創新能力 (T/O/E)</strong>：技術動態調整與防資料中毒；組織準備度、準確 vs. 看得懂、合規與決策轉向 AI；主管倫理管演算法、合作失調與防機密外流。",
          "<strong class='kw-teal'>AI 應用 (T/O/E)</strong>：取代條件績效、開黑盒子與非傳統外包；家族／非家族障礙、人機設計與中小企槓桿；倫理社會衝擊、趨勢塑未來與外部前因。"
        ]
      }
    ],
    source: "來源：Gama & Magistretti (2025) Sections 5.3 & 5.4.4"
  },
  {
    id: "p38",
    label: "p38",
    type: "qa_fill",
    tag: "Q&A Q5",
    tagColor: "gold",
    title: "討論問題 Q5：核心句填空總結",
    questionPrompt: "根據 Gama 與 Magistretti（2025），成功的 AI 採用需要 <span class='blank'>________</span> 能力，而 AI 採用則能轉化為或創造 <span class='blank'>________</span> 能力。",
    answerHtml: "根據 Gama 與 Magistretti（2025），成功的 AI 採用需要 <strong class='kw-blue'>賦能（Enabling）</strong> 能力，而 AI 採用則能轉化為或創造 <strong class='kw-purple'>增強（Enhancing）</strong> 能力。",
    source: "來源：Gama & Magistretti (2025) Abstract & Section 5.1"
  },
  {
    id: "p39",
    label: "p39",
    type: "bridge",
    tag: "下篇引導",
    tagColor: "purple",
    title: "下篇論文引導：Chen et al. (2024)",
    lead: "Chen, Balasubramanian, & Forman (2024) 論文引導：",
    cards: [
      {
        header: "引導問題 01｜能力的來源與建構者",
        color: "blue",
        text: "Gama & Magistretti 論文建立了賦能創新能力的框架，但這引出了一個問題：那就是<strong class='kw-blue'>這些能力怎麼來？需要靠誰來建構？</strong>"
      },
      {
        header: "引導問題 02｜實務中的打造機制",
        color: "teal",
        text: "Gama & Magistretti 論文的賦能創新能力，在<strong class='kw-teal'>實務中是如何被打造出來的？</strong>"
      },
      {
        header: "引導問題 03｜能力的移動性與載具",
        color: "coral",
        text: "Gama & Magistretti 論文預設只要具備足夠的賦能創新能力，企業就能成功推動 AI 採用，但並沒有考慮到<strong class='kw-coral'>這項創新能力是可能移動的，並取決於這項能力存在的載具中</strong>。"
      }
    ],
    source: "來源：Chen, Balasubramanian, & Forman (2024)；簡報詳細分配 p39"
  }
];

// Game data for the 13 capabilities (no T/O/E hint on ball, plain explanation + reason on correct drop)
window.GAME_CAPABILITIES = [
  {
    id: 1,
    name: "功能能力",
    target: "enabling",
    toe: "T",
    plainExplain: "團隊懂得蒐集、處理資料，並把 AI 演算法順利寫進產品或硬體（例如邊緣 AI 割草機）的工程實作力。",
    reason: "導入 AI 前，企業必須先具備把演算法整合到裝置與流程的內部功能專業，否則產品根本開發不出來。"
  },
  {
    id: 2,
    name: "資安管理",
    target: "enabling",
    toe: "T",
    plainExplain: "保護 AI 系統與即時傳輸資料不被竊聽、越權偷看、惡意入侵或資料被竄改（例如離岸船舶防駭監控）。",
    reason: "在正式啟用 AI 服務前，企業必須先規劃好內外部漏洞的防護機制與應變流程，才能安全上線並建立信任。"
  },
  {
    id: 3,
    name: "雙元能力",
    target: "enhancing",
    toe: "T",
    plainExplain: "一手用既有 IT 知識穩住日常效率，一手用 AI 探索全新突破（例如結合藥理資料庫與 AI 發現新抗生素 Halicin）。",
    reason: "是因為導入 AI 之後，領域專家得以擴大既有知識邊界並加速新知識產出，屬於導入後帶來的創新加速效果。"
  },
  {
    id: 4,
    name: "搜尋並重組知識",
    target: "enabling",
    toe: "O",
    plainExplain: "主管主動找外部方案、撥出研發資源與低風險試錯空間，並透過獎勵與儀表板讓員工願意接觸 AI。",
    reason: "導入 AI 之前，組織必須先備妥資源、試錯文化與主管的探索支持，基層員工才不會抗拒而能跨部門嘗試。"
  },
  {
    id: 5,
    name: "數位專案治理",
    target: "enabling",
    toe: "O",
    plainExplain: "訂立資料存取權限、隱私加密、知情同意與公平／問責／透明倫理規範，並定期檢查模型是否概念漂移。",
    reason: "導入 AI 之前就必須先立好規矩與道德邊界，否則導入後缺乏檢視標準，容易損害使用者或利害關係人權益。"
  },
  {
    id: 6,
    name: "強化決策",
    target: "enhancing",
    toe: "O",
    plainExplain: "用演算法放大團隊感知力、精準評估並加速即時決策（例如 Unanimous AI 匯聚專家群體智慧），同時留意過度依賴。",
    reason: "精準評估、加速即時決策與精簡資源分配，都是 AI 導入組織後才產生的好處，用來放大並強化人類決策。"
  },
  {
    id: 7,
    name: "流程最佳化",
    target: "enhancing",
    toe: "O",
    plainExplain: "擷取服務系統互動產生的數據來加速或個人化流程（例如 eBay 機器翻譯、澳洲稅務局預填報稅表單）。",
    reason: "必須先讓 AI 運行並產生互動數據，企業才能根據這些數據回頭改善並加速現有的產品或服務流程。"
  },
  {
    id: 8,
    name: "自動問題解決",
    target: "enhancing",
    toe: "O",
    plainExplain: "靠演算法與監督式機器學習從社群或海量評論中篩選點子、排定優先順序（例如發掘無麩質啤酒需求）。",
    reason: "必須借助 AI 一次處理海量資訊並自動分類篩選，才能擴大組織找尋問題與形成創新假設的範圍。"
  },
  {
    id: 9,
    name: "法規篩查",
    target: "enabling",
    toe: "E",
    plainExplain: "持續監控各國快速變動的隱私與 AI 法規（如 GDPR、CCPA、PDPA），確保不踩法律紅線（如履歷去識別化）。",
    reason: "法規篩查是企業採用 AI 的「合法執照」與「防護門檻」，導入前就必須先確認行為合法合規。"
  },
  {
    id: 10,
    name: "夥伴合作敏捷性",
    target: "enabling",
    toe: "E",
    plainExplain: "快速協調外部供應商、技術夥伴與學研機構，建立策略／擴展／虛擬夥伴網絡並對齊目標（如瑞典礦業外包協作）。",
    reason: "導入 AI 之前必須先找好外部夥伴並談妥各方需求、目標與治理規範，就像動工前要先完成的「企劃書」。"
  },
  {
    id: 11,
    name: "多模態價值共創",
    target: "enhancing",
    toe: "E",
    plainExplain: "把 AI 當作溝通橋梁，與外部客戶、供應商及使用者即時雙向互動並動態調整服務（如 Mastercard 即時防詐、醫療對話）。",
    reason: "跨組織利害關係人常有矛盾目標，是在導入 AI 之後才讓溝通簡化、回饋即時傳遞，促成產品與服務快速共創改善。"
  },
  {
    id: 12,
    name: "平台生態系統協調",
    target: "enhancing",
    toe: "E",
    plainExplain: "用 AI 把零散能力打包成標準化雲端平台或 API（SaaS / PaaS），降低外部使用門檻（如 IBM Watson 開放雲端 API）。",
    reason: "必須先在企業內部導入 AI 並建立出標準化流程與規格，才能進一步打包成模組化生態系開放給外部串接。"
  },
  {
    id: 13,
    name: "以情境為基礎的知識分享",
    target: "enhancing",
    toe: "E",
    plainExplain: "用 AI 高精準轉移內隱與外顯知識，把主觀經驗轉成可搜尋分析的結構（如 Symrise 用 GPT-3 對應調香筆記與偏好）。",
    reason: "需要 AI 先透過文字探勘、主題建模與情緒分析進行萃取，才能將隱性知識分類貼標並高精準傳遞給內外部夥伴。"
  }
];
