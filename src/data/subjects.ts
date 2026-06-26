export type SubjectKey = 'A' | 'B' | 'common'

export interface Topic {
  id: string
  title: string
  subtopics: string[]
}

export interface Subject {
  key: SubjectKey
  label: string
  subtitle: string
  weight: number
  color: string
  topics: Topic[]
}

export const SUBJECTS: Record<SubjectKey, Subject> = {
  A: {
    key: 'A',
    label: '科目 A',
    subtitle: '計算機原理・網路概論',
    weight: 0.4,
    color: '#4a90d9',
    topics: [
      { id: 'A-01', title: '數字系統與資料表示', subtopics: ['二進位與補數', '數值轉換', '進位加減法', 'BCD/Gray Code'] },
      { id: 'A-02', title: '資料結構 — 線性', subtopics: ['陣列', '鏈結串列', 'Stack', 'Queue'] },
      { id: 'A-03', title: '資料結構 — 非線性', subtopics: ['二元樹、BST', 'AVL 樹', '紅黑樹', '圖論', 'Hash Table'] },
      { id: 'A-04', title: '演算法', subtopics: ['排序（氣泡/插入/快排/合併/堆積/桶子）', '搜尋', 'Big-O 分析', 'Divide & Conquer'] },
      { id: 'A-05', title: '計算機組織', subtopics: ['馮紐曼架構', 'CPU 與 ALU', '暫存器', '記憶體層次（快取/DRAM）', '指令週期'] },
      { id: 'A-06', title: '作業系統', subtopics: ['行程管理（FCFS/SJF/RR/優先權）', '記憶體管理', '同步（Mutex/Semaphore）', '死結'] },
      { id: 'A-07', title: '程式語言概念', subtopics: ['強/弱型別', '動態/靜態型別', '物件導向', '函數式程式設計', 'Currying'] },
      { id: 'A-08', title: '資料庫基礎', subtopics: ['正規化（1NF~BCNF）', 'SQL 語法', 'Transaction（ACID）', 'B+Tree 索引'] },
      { id: 'A-09', title: '機器學習基礎', subtopics: ['過擬合（Overfitting）', '訓練/測試資料', 'SMP 多處理器'] },
      { id: 'A-10', title: '網路 — 實體與資料鏈路層', subtopics: ['OSI / TCP-IP 模型', '乙太網路', 'CSMA/CD', 'Switch 交換器'] },
      { id: 'A-11', title: '網路 — 網路層', subtopics: ['IPv4 / IPv6 差異', '路由協定', 'CIDR 路由聚合', 'NAT', 'IP 分片'] },
      { id: 'A-12', title: '網路 — 傳輸層', subtopics: ['TCP vs UDP', '流量控制', '三向交握', 'PMTUD'] },
      { id: 'A-13', title: '網路 — 應用層', subtopics: ['HTTP 無狀態/Cookie/Session', 'DNS 遞迴/迭代查詢', 'DoH/DoT', 'DNSSEC'] },
      { id: 'A-14', title: '網路安全', subtopics: ['DDoS / Blackholing', 'SQL Injection', 'XSS / CSRF', 'IAM / RBAC'] },
      { id: 'A-15', title: '無線與進階網路', subtopics: ['Wi-Fi / 隱藏節點 / RTS-CTS', '5G 特性', '負載平衡（Round Robin）', 'Session Stickiness'] },
    ],
  },
  B: {
    key: 'B',
    label: '科目 B',
    subtitle: '資訊管理・程式設計',
    weight: 0.4,
    color: '#4caf6e',
    topics: [
      { id: 'B-01', title: '系統分析與設計', subtopics: ['SDLC', 'UML 圖（用例/類別/時序/活動）', '需求分析'] },
      { id: 'B-02', title: '雲端運算', subtopics: ['SaaS / PaaS / IaaS', 'CSP 廠商實例', '雲端部署模式'] },
      { id: 'B-03', title: '資訊安全管理', subtopics: ['ISO 27001', 'ISMS PDCA 循環', '資安風險管理'] },
      { id: 'B-04', title: '資料庫設計', subtopics: ['ER 模型', 'DDL 語法', 'Clustered Index', 'B+Tree 硬碟頁估算'] },
      { id: 'B-05', title: '進階 SQL', subtopics: ['JOIN / 子查詢', '除法查詢（鐵粉問題）', '聚合函數', '效能調校'] },
      { id: 'B-06', title: '程式設計基礎', subtopics: ['C 語言傳值/傳參考', 'Python 型別特性', 'Java 型別系統'] },
      { id: 'B-07', title: '物件導向程式設計', subtopics: ['封裝/繼承/多型', 'Interface vs Abstract', 'Java GC 機制', '多重繼承'] },
      { id: 'B-08', title: '演算法實作', subtopics: ['Insertion Sort 實作', '快樂數問題', '因數計算', '遞迴與迭代'] },
      { id: 'B-09', title: '網路診斷與管理', subtopics: ['traceroute / TTL / ICMP', '非對稱路由', 'DNS Open Resolver', '測試矩陣'] },
      { id: 'B-10', title: '專案管理', subtopics: ['Sprint Review / Retrospective', 'Agile / Scrum', 'WBS'] },
    ],
  },
  common: {
    key: 'common',
    label: '共同科目',
    subtitle: '國文・英文',
    weight: 0.2,
    color: '#e8a94e',
    topics: [
      { id: 'C-01', title: '國文 — 論文寫作', subtopics: ['歷年題型分析', '寫作結構（破題/論述/結語）', '關鍵詞彙整理'] },
      { id: 'C-02', title: '英文 — 字彙', subtopics: ['商業管理詞彙', '科技/AI 詞彙', '社會議題詞彙', '高頻同義詞'] },
      { id: 'C-03', title: '英文 — 文法', subtopics: ['動詞時態', '假設語氣', '關係子句', '倒裝句', '分詞構句'] },
      { id: 'C-04', title: '英文 — 慣用語', subtopics: ['Phrasal Verbs', 'Idioms', '介系詞搭配'] },
      { id: 'C-05', title: '英文 — 克漏字', subtopics: ['段落邏輯推理', '語境理解', '轉折詞使用'] },
      { id: 'C-06', title: '英文 — 閱讀測驗', subtopics: ['主旨推論', '細節搜尋', '詞義判斷', '文章結構分析'] },
    ],
  },
}

export const EXAM_YEARS = [114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100]
