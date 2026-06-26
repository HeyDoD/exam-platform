export interface TopicResource {
  topicId: string
  keyPoints: string[]
  examTips?: string[]
}

const RESOURCES: TopicResource[] = [
  // ── 科目 A ───────────────────────────────────────────────────────────────
  {
    topicId: 'A-01',
    keyPoints: [
      '2 的補數（Two\'s Complement）：正數前置 0，負數取 1 的補數再 +1',
      '6 位元 2 補數範圍：−32 ～ +31',
      'CRC 偵錯：將原始資料後補（n−1）個 0，對生成多項式做模 2 除法，取餘數作為 CRC 碼',
      '漢明碼：校驗位（Parity）放在 2 的次方位置（1,2,4,8…），偶校驗讓各群組 1 的個數為偶數',
      'BCD 碼：每 4 位元代表一個十進位數字（0=0000, 9=1001）',
      'Gray Code：相鄰數字只有 1 個位元不同，常用於旋轉編碼器',
      'XOR 閘在全加器中計算「和」(Sum)；AND 閘計算「進位」(Carry)',
    ],
    examTips: [
      '114 年考：6 位元 2 補數加法（100111 + 111000 = 011111 = 31）',
      '114 年考：CRC（G(x)=X³+X¹=1010，模 2 除法求餘數）',
      '114 年考：漢明碼偶校驗（原始資料 1011 → 完整碼 0110011）',
      '常見陷阱：加法結果超出表示範圍時需注意「溢位」',
    ],
  },
  {
    topicId: 'A-02',
    keyPoints: [
      'Array：O(1) 隨機存取，O(n) 插入/刪除（需搬移元素）',
      'Linked List：O(n) 存取，O(1) 插入/刪除（已知前一節點），不連續記憶體',
      'Stack（堆疊）：LIFO，Push/Pop，應用：函式呼叫、括號配對、Expression 求值',
      'Queue（佇列）：FIFO，Enqueue/Dequeue，應用：BFS、印表機、作業系統排程',
      'Circular Queue：解決 Queue 假滿問題，使用 (tail+1) % size 計算',
      'Deque：兩端皆可插入/刪除',
    ],
    examTips: [
      '考試常考：Stack 與 Queue 的應用場景選擇',
      '注意區分 Array 與 Linked List 的時間複雜度差異',
    ],
  },
  {
    topicId: 'A-03',
    keyPoints: [
      'BST（Binary Search Tree）：左 < 根 < 右，搜尋平均 O(log n)，最差 O(n)（退化為串列）',
      'AVL 樹：平衡因子（左子樹高度 − 右子樹高度）必須 ∈ {−1, 0, 1}，保證 O(log n)',
      '紅黑樹：新插入節點預設紅色，調整時透過旋轉與重新著色維持黑高度不變',
      '二元樹走訪：前序(根→左→右)、中序(左→根→右)、後序(左→右→根)',
      'Hash Table：衝突處理 — 鏈結法（Chaining）或開放定址（Linear/Quadratic Probing）',
      '圖的表示：相鄰矩陣 O(n²) 空間，相鄰串列 O(V+E) 空間',
    ],
    examTips: [
      '114 年考：由前序 + 中序重建樹，再求後序走訪',
      '114 年考：AVL 樹特性（平衡因子 −1≤BF≤1）',
      '114 年考：紅黑樹插入新節點預設紅色',
      '技巧：由前序知根節點，由中序劃分左右子樹，遞迴建樹',
    ],
  },
  {
    topicId: 'A-04',
    keyPoints: [
      '穩定排序（相等元素維持原始順序）：Insertion、Bubble、Merge、Counting、Bucket',
      '不穩定排序：Quick Sort、Heap Sort、Selection Sort',
      'Bucket Sort：元素均勻分布時達 O(n)；所有元素同桶時退化至桶內排序複雜度',
      'Quick Sort：平均 O(n log n)，最差 O(n²)（已排序＋選第一個作 pivot）',
      'Merge Sort：穩定，O(n log n)，需 O(n) 額外空間',
      'Heap Sort：不穩定，O(n log n)，O(1) 額外空間',
      '各排序比較：插入排序最佳 O(n)（幾乎已排序）',
    ],
    examTips: [
      '114 年考：Bucket Sort 何時達 O(n)（答：均勻分布）',
      '114 年考：「穩定排序」定義（答：相等元素保持原始相對順序）',
      '考試常考：各排序的時間/空間複雜度比較表',
    ],
  },
  {
    topicId: 'A-05',
    keyPoints: [
      '馮紐曼架構五大元件：輸入單元、輸出單元、算術邏輯單元（ALU）、控制單元（CU）、記憶體',
      '記憶體速度由快到慢：暫存器 > L1 快取 > L2 快取 > L3 快取 > DRAM > HDD/SSD',
      'CPU 核心元件：ALU、CU、Register；SRAM（快取）不是 CPU 核心組成',
      'RGB(0,0,0) = 黑色；RGB(255,255,255) = 白色；True Color = 24bit（R/G/B 各 8 bit）',
      '指令週期：Fetch → Decode → Execute → Write Back',
      '快取置換策略：LRU（最近最少使用）、FIFO、LFU',
    ],
    examTips: [
      '114 年考：CPU 不包含 SRAM（SRAM 用於快取，不在 CPU 核心內）',
      '114 年考：記憶體層次由快至慢順序',
      '114 年考：RGB(0,0,0) 產生黑色',
      '114 年考：馮紐曼架構五大組成',
    ],
  },
  {
    topicId: 'A-06',
    keyPoints: [
      'FCFS（First Come First Served）：簡單公平，但「護衛效應」導致平均等待時間長',
      'SJF（Shortest Job First）：平均等待時間最短，但需預知執行時間且可能飢餓',
      'Round Robin：公平輪流，Time Quantum 越小回應越快，但 Context Switch 越多',
      '優先權排程 + Aging 機制：隨等待時間提升優先權，防止低優先級程序永遠等待（飢餓）',
      'Deadlock 四個必要條件：互斥(Mutual Exclusion)、持有等待(Hold & Wait)、不可搶奪(No Preemption)、循環等待(Circular Wait)',
      '記憶體管理：分頁(Paging)、分段(Segmentation)、虛擬記憶體、Page Fault',
    ],
    examTips: [
      '114 年考：優先權排程防飢餓 → Aging 機制',
      '114 年考：FCFS 優點 → 簡單易懂、公平（非平均等待時間最短）',
      '考試常問：SJF vs RR 的適用場景（互動式系統用 RR）',
    ],
  },
  {
    topicId: 'A-07',
    keyPoints: [
      '強型別 vs 弱型別：是否允許隱式型別轉換（Python 不允許 "1"+1，屬強型別）',
      '靜態型別 vs 動態型別：型別在編譯期(Java) vs 執行期(Python/JS) 確定',
      'Python：強型別 + 動態型別；Java：強型別 + 靜態型別；JavaScript：弱型別 + 動態型別',
      'Java 多重繼承：class 不支援多重繼承，但可 implements 多個 interface',
      'Currying（柯里化）：函數式程式設計，將 f(a,b) 轉換為 f(a)(b)',
      'C 語言傳值(Pass by Value)：函式內修改參數不影響外部變數',
    ],
    examTips: [
      '114 年考：Python 是「強型別 + 動態型別」',
      '114 年考：Java 需用 interface 模擬多重繼承',
      '114 年考：C 語言 func(int p) 傳值，輸出仍為原值 3',
      '114 年考：Currying 屬於函數式程式設計',
    ],
  },
  {
    topicId: 'A-08',
    keyPoints: [
      'ACID：Atomicity（原子性）、Consistency（一致性）、Isolation（隔離性）、Durability（持久性）',
      '1NF：消除重複欄位（每格只有一個值）',
      '2NF：消除部分依賴（非主鍵欄位必須依賴完整主鍵）',
      '3NF：消除傳遞依賴（非主鍵欄位不依賴其他非主鍵欄位）',
      'BCNF：每個決定因子都是候選鍵',
      'Dirty Read：讀到另一交易已修改但未 COMMIT 的資料（READ UNCOMMITTED 層級）',
      'Phantom Read：同一查詢兩次結果不同（有新增/刪除的資料）',
      'B+Tree 索引：所有資料在葉節點，葉節點間有指標，適合範圍查詢',
    ],
    examTips: [
      '114 年考：ACID 正確縮寫（Consistency、Isolation，非 Concurrency）',
      '114 年考：Dirty Read 定義（讀到未提交的資料）',
      '114 年考：2NF 消除「部分依賴」，3NF 消除「傳遞依賴」（常考混淆點！）',
    ],
  },
  {
    topicId: 'A-09',
    keyPoints: [
      'Overfitting（過擬合）：訓練誤差低但測試誤差高，模型記憶訓練資料而非學習規律',
      '解決 Overfitting：增加訓練資料、Dropout、L1/L2 正規化、Cross-Validation',
      'Underfitting：訓練與測試誤差皆高，模型不夠複雜',
      'SMP（對稱多處理器）：多 CPU 共享記憶體；單 CPU 故障系統仍可運作',
      'GPU vs CPU：GPU 核心多但簡單，適合大量平行運算（如深度學習）',
    ],
    examTips: [
      '114 年考：Overfitting → 訓練誤差低、測試誤差高',
      '114 年考：SMP 中單一 CPU 故障不會導致整個系統停擺',
      '常見誤解：增加訓練資料不一定導致 Overfitting（反而有助於改善）',
    ],
  },
  {
    topicId: 'A-10',
    keyPoints: [
      'OSI 7 層（由低至高）：實體、資料鏈路、網路、傳輸、會話、表示、應用',
      'CSMA/CD：傳送前監聽，碰撞後二元指數退避（Binary Exponential Backoff）',
      '全雙工（Full Duplex）：收發走獨立頻道，消除碰撞域，不需 CSMA/CD',
      '16-QAM：每符號 4 bit（log₂16=4）；QPSK：每符號 2 bit — 同符號率下 16-QAM 資料率是 QPSK 的 2 倍',
      'Switch 交換器：第 2 層設備，依 MAC 位址轉送，每 port 獨立碰撞域',
    ],
    examTips: [
      '114 年考：16-QAM 相對 QPSK 資料率 = 4/2 = 2 倍',
      '114 年考：全雙工連線不會碰撞（消除碰撞域）',
      '114 年考：CSMA/CD 碰撞後 → 二元指數退避',
    ],
  },
  {
    topicId: 'A-11',
    keyPoints: [
      'CIDR 路由聚合：將多個網段的共同前綴找出，聚合為較大網段（/數字越小，網段越大）',
      'IP 分片：MTU=1500B，IP Header=20B，每片段有效負載=1480B；ceil(總負載/1480)=片段數',
      'IPv4 vs IPv6 常見差異：位址長度 32bit vs 128bit，Header 簡化，內建 IPSec',
      '網路層協定：ICMP、IGMP、OSPF、IP；UDP 是傳輸層（第 4 層）！',
      'Ping 用 ICMP Echo Request/Reply 測可達性；Traceroute 用遞增 TTL 推路徑節點',
    ],
    examTips: [
      '114 年考：UDP 不是網路層協定（是傳輸層）',
      '114 年考：2300B 負載/1480 = 1.55 → ceil = 2 片段',
      '114 年考：路由聚合 57.6.96.0/21 × 4 → 57.6.96.0/19',
      '114 年考：Ping 測可達性，Traceroute 推路徑節點',
    ],
  },
  {
    topicId: 'A-12',
    keyPoints: [
      'TCP 流量控制（Flow Control）：滑動視窗，防止接收端緩衝溢位',
      'TCP 擁塞控制（Congestion Control）：慢啟動、擁塞避免，防網路崩潰',
      'PMTUD（Path MTU Discovery）：設定 DF=1，路由器回 ICMP Fragmentation Needed（Type 3 Code 4）',
      'TCP 三向交握：SYN → SYN-ACK → ACK',
      'TCP vs UDP：TCP 可靠/有序/連接導向；UDP 低延遲/無連接/無保證',
    ],
    examTips: [
      '114 年考：TCP 流量控制防接收端緩衝溢位（不是擁塞崩潰）',
      '114 年考：PMTUD → 路由器回 ICMP Fragmentation Needed',
      '常考混淆：流量控制=接收端能力，擁塞控制=網路能力',
    ],
  },
  {
    topicId: 'A-13',
    keyPoints: [
      'HTTP 無狀態，Cookie 讓伺服器在客戶端儲存 Session ID 維持狀態',
      'DNS 迭代查詢：客戶端逐層詢問，每個 DNS 伺服器回覆「下一個問誰」',
      'DNS 遞迴查詢：客戶端只問一次，Resolver 代為查到底',
      'DoH（DNS over HTTPS）/ DoT（DNS over TLS）：加密 DNS 查詢，防中間人竊聽',
      'DNSSEC：對 DNS 回應做數位簽章，防 DNS 偽造（與 DoH/DoT 互補）',
      'DNS Open Resolver 風險：DDoS 放大攻擊、洩漏內部記錄（不會自動破解 HTTPS）',
    ],
    examTips: [
      '114 年考：DNS 迭代查詢 → 客戶端逐層查，伺服器告知「下一位詢問誰」',
      '114 年考：DNS Open Resolver 不會「導致 HTTPS MITM 攻擊自動成功」',
      '114 年考：HTTP 無狀態 → 用 Cookie 維持狀態',
    ],
  },
  {
    topicId: 'A-14',
    keyPoints: [
      'SQL Injection 防護：Prepared Statement（SQL 結構與資料分離、參數化）',
      'XSS（Cross-Site Scripting）：注入惡意腳本；防護：輸出編碼、CSP Header',
      'WAF（Web Application Firewall）：第 7 層，過濾 HTTP/HTTPS 應用層內容',
      'Blackholing/Sinkholing：DDoS 防護，將惡意流量導走或收容分析',
      'IAM（Identity Access Management）⊃ RBAC — RBAC 是 IAM 的授權實作方式之一',
      'MFA 三要素：所知之事（密碼）、所持之物（手機/Token）、所表之徵（生物特徵）；「所在之處」不是傳統三要素',
      'Anomaly-based IDPS：對未知攻擊（Zero-day）最有效；Signature-based 只能偵測已知攻擊',
      'Session Hijacking 手段：MITM、Sniffing、XSS；UDP 檔案傳輸不相關',
    ],
    examTips: [
      '114 年考：Prepared Statement 關鍵 → SQL 與資料綁定分離、參數化',
      '114 年考：WAF 差異 → 檢視應用層內容/命令（第 7 層）',
      '114 年考：MFA「所在之處」不屬於傳統三要素',
      '114 年考：RBAC⊂IAM；Anomaly-based 對未知攻擊最佳',
    ],
  },
  {
    topicId: 'A-15',
    keyPoints: [
      'Wi-Fi 隱藏節點問題：A 與 C 互相看不到，同時傳給 B 造成碰撞 → RTS/CTS 解決',
      'Wi-Fi 省電機制：TIM/Beacon 引導喚醒、PS-Poll、TWT（Target Wake Time）— STP BPDU 是有線協定，無關',
      '5G 特性：超低延遲（< 1ms）、高頻寬、大規模裝置連接（mMTC）— 覆蓋率下降不是設計目標',
      'Round Robin vs Weighted Round Robin：差異在於是否依伺服器「權重」比例分配',
      'Session Stickiness：負載平衡器將同一用戶請求持續導向同一後端，避免 Session 遺失',
    ],
    examTips: [
      '114 年考：Wi-Fi 隱藏節點 → RTS/CTS/ACK',
      '114 年考：Wi-Fi 省電未涉及 STP BPDU',
      '114 年考：5G 非屬特性 → 覆蓋率下降',
      '114 年考：Round Robin vs Weighted → 是否考量伺服器權重',
    ],
  },

  // ── 科目 B ───────────────────────────────────────────────────────────────
  {
    topicId: 'B-01',
    keyPoints: [
      'SDLC 六階段：需求分析 → 系統設計 → 實作 → 測試 → 部署 → 維護',
      'UML 用例圖（Use Case）：Actor（外部使用者）與系統功能的互動關係',
      'UML 類別圖（Class Diagram）：類別屬性/方法，及關係（繼承 / 組合 / 聚合 / 關聯）',
      'UML 時序圖（Sequence Diagram）：物件間訊息傳遞的時間順序',
      'UML 活動圖（Activity Diagram）：流程控制，包含平行（fork/join）與條件分支',
      'Agile 敏捷開發：迭代、擁抱變化；Waterfall 瀑布：線性、文件導向',
    ],
    examTips: [
      '申論題常要求畫 UML 圖或說明各圖用途',
      '注意組合（Composition）強依賴 vs 聚合（Aggregation）弱依賴的差異',
    ],
  },
  {
    topicId: 'B-02',
    keyPoints: [
      'IaaS（Infrastructure as a Service）：提供 VM、儲存、網路；用戶管理 OS 以上（AWS EC2, GCP VM）',
      'PaaS（Platform as a Service）：提供執行環境；用戶只管應用（Heroku, Google App Engine）',
      'SaaS（Software as a Service）：直接使用軟體服務（Gmail, Salesforce, Office 365）',
      '雲端部署模式：公有雲（成本低、彈性高）/ 私有雲（安全性高）/ 混合雲 / 社群雲',
      '雲端優勢：彈性擴展（Elasticity）、按用量計費（Pay-as-you-go）、高可用性',
    ],
    examTips: [
      '常考：IaaS / PaaS / SaaS 的責任劃分（用戶管理什麼？廠商管理什麼？）',
      '記憶口訣：I=基礎設施(機器)、P=平台(執行環境)、S=軟體(直接用)',
    ],
  },
  {
    topicId: 'B-03',
    keyPoints: [
      'ISO 27001：ISMS（資訊安全管理系統）國際標準，認證機構可進行稽核',
      'PDCA 循環：Plan（制定安全政策）→ Do（實施控制）→ Check（監控稽核）→ Act（持續改善）',
      'CIA 三元素：Confidentiality（機密性）、Integrity（完整性）、Availability（可用性）',
      '資安風險處理策略：避免（Avoid）、轉移（Transfer/保險）、接受（Accept）、降低（Mitigate）',
      '資安事件應變流程：偵測 → 遏制 → 清除 → 復原 → 事後學習',
    ],
    examTips: [
      '114 年科目B 考：SQL Injection / XSS / CSRF 攻擊原理與防護',
      '常考：CIA 三元素的定義與案例分析',
      '注意：PDCA 是管理循環，非技術控制',
    ],
  },
  {
    topicId: 'B-04',
    keyPoints: [
      'ER 模型：實體（Entity）、屬性（Attribute）、關係（Relationship）及其基數（1:1, 1:N, M:N）',
      'ER → 關聯式：M:N 關係需建立中間關係表；1:N 外鍵放在 N 端',
      'Clustered Index（叢集索引）：資料依索引實體排序，每個資料表只能有一個',
      'Non-clustered Index：另建索引結構，指向資料行，一個表可有多個',
      'B+Tree 索引：所有資料在葉節點，葉節點間有指標串聯，適合範圍查詢',
      'DDL（資料定義語言）：CREATE、ALTER、DROP；DML：INSERT、UPDATE、DELETE、SELECT',
    ],
    examTips: [
      '申論題常要求設計 ER 圖並轉換為關聯式綱要',
      'B+Tree 葉節點儲存實際資料（或指標），內部節點只存鍵值用於導航',
    ],
  },
  {
    topicId: 'B-05',
    keyPoints: [
      'INNER JOIN：取兩表都有的資料；LEFT JOIN：保留左表全部',
      'GROUP BY + HAVING：GROUP BY 分組，HAVING 過濾聚合後結果（WHERE 只能過濾列）',
      '關係除法（Division）：找出「對全部...都滿足條件」的記錄，常見題型：選出購買了所有商品的顧客',
      'EXISTS vs IN：EXISTS 效率通常更好（找到即停止）；IN 將子查詢結果載入記憶體',
      'Window Function：ROW_NUMBER(), RANK(), OVER(PARTITION BY...ORDER BY...)',
      '索引優化：避免全表掃描，但過多索引拖慢寫入速度',
    ],
    examTips: [
      '申論題常考：除法查詢（SQL 中用 NOT EXISTS 或 ALL 實現）',
      '注意 WHERE 與 HAVING 的差異：WHERE 在 GROUP BY 前過濾，HAVING 在後',
    ],
  },
  {
    topicId: 'B-06',
    keyPoints: [
      'C 語言傳值（Pass by Value）：func(int p) 修改 p 不影響外部；要影響需傳指標 func(int *p)',
      'Java 基本型別（Primitive）：int, char, boolean, double 等，存在 Stack',
      'Java 參考型別（Reference）：String, Object, Array 等，變數存的是 heap 上的位址',
      'Java String 不可變（Immutable）：修改 String 實際上是建立新物件',
      'Python 動態型別：變數不宣告型別，執行期決定；list 可變，tuple 不可變',
    ],
    examTips: [
      '114 年考：C 語言 func(int p)，a=3 傳入後 p 修改不影響 a，輸出仍為 3',
      '114 年科目B 考：Java 基本型別 vs 參考型別差異',
    ],
  },
  {
    topicId: 'B-07',
    keyPoints: [
      '封裝（Encapsulation）：private 屬性 + public Getter/Setter，隱藏實作細節',
      '繼承（Inheritance）：子類別 extends 父類別，重用程式碼；Java 只能單一繼承',
      '多型（Polymorphism）：Override（覆寫父類方法，執行期決定）vs Overload（同名不同參數）',
      'Abstract Class：可有抽象方法也可有實作，子類必須實作抽象方法',
      'Interface：Java 8+ 可有 default 方法；一個類別可 implements 多個 interface（模擬多重繼承）',
      'Java GC：使用 Mark-and-Sweep 或 Generational GC；Heap 空間不足時自動觸發',
    ],
    examTips: [
      '114 年科目B 考：Java 封裝/繼承/多型定義及實現方式（9 分大題）',
      '114 年科目B 考：GC 如何運作及何時觸發',
      '114 年考：Java 用 interface 模擬多重繼承（科目A Q12）',
    ],
  },
  {
    topicId: 'B-08',
    keyPoints: [
      '快樂數（Happy Number）：迴圈偵測用 Floyd 判圈法（快慢指標）或 HashSet 記錄已見過的數',
      '快樂數快慢指標：slow 每次移一步，fast 每次移兩步，若 fast==1 為快樂數，若 fast==slow 為循環（非快樂數）',
      'Insertion Sort：每次取一個元素插入已排序部分；最佳 O(n)（已排序），最差 O(n²）；穩定排序',
      '遞迴（Recursion）注意：Base Case（終止條件）、Stack Overflow 風險（深遞迴考慮迭代）',
    ],
    examTips: [
      '114 年科目B 考：設計 isHappy(int n) 函式（15 分）',
      '推薦解法：HashSet 記錄已出現的數；若再次出現表示進入循環，回傳 false',
    ],
  },
  {
    topicId: 'B-09',
    keyPoints: [
      'traceroute 原理：送出 TTL=1,2,3... 的封包；每個路由器收到 TTL=0 時回 ICMP Time Exceeded',
      '非對稱路由（Asymmetric Routing）：去程與回程路徑不同，導致 traceroute 延遲看起來不規律',
      '非對稱路由原因：不同 ISP 路由政策、Load Balancing、BGP 路由選擇',
      'DoH / DoT 與 DNSSEC 互補：DoH/DoT 加密傳輸防竊聽；DNSSEC 驗證資料完整性防偽造',
      'IPv6 vs IPv4 主要差異：128bit vs 32bit 位址、簡化 Header（固定 40B）、無分片（端點負責）、內建 IPSec',
    ],
    examTips: [
      '114 年科目B 考：TTL/ICMP 在路徑追蹤的角色（5 分）',
      '114 年科目B 考：非對稱路由原因（10 分）',
      '114 年科目B 考：DoH/DoT 與 DNSSEC 如何互補（15 分）',
      '114 年科目B 考：IPv4 vs IPv6 比較 10 種面向（10 分）',
    ],
  },
  {
    topicId: 'B-10',
    keyPoints: [
      'Scrum：Sprint（1-4 週迭代）、Product Backlog → Sprint Backlog → Done',
      'Daily Standup：昨天做了什麼、今天計畫、有什麼阻礙（15 分鐘站立會議）',
      'Sprint Review：展示完成功能給 stakeholder，確認是否符合需求',
      'Sprint Retrospective：團隊內部討論 — 什麼做得好、什麼需要改進',
      'WBS（Work Breakdown Structure）：將專案逐層分解為可管理的工作包',
      'Kanban：視覺化工作流程；To Do → In Progress → Done，不固定 Sprint',
    ],
    examTips: [
      '常考混淆：Sprint Review（展示給外部）vs Retrospective（內部改善）',
      '考試常問 Scrum 各角色：Product Owner、Scrum Master、Development Team',
    ],
  },

  // ── 共同科目 ─────────────────────────────────────────────────────────────
  {
    topicId: 'C-01',
    keyPoints: [
      '論文結構：破題（定義議題）→ 論述（分點展開，每點舉例+分析）→ 結語（呼應題目、展望）',
      '114 年題目：「因應人口變遷國營事業之創新作為及社會責任」',
      '常見面向：產品服務調整、聘僱中高齡/婦女、育才留才、職場環境改善、科技運用（AI/自動化）',
      '字數：通常 800～1200 字為宜，段落清晰，每段有主題句',
      '歷年常見題型：社會議題（少子化、高齡化）、科技與社會、國家政策方向',
    ],
    examTips: [
      '評分重點：論述邏輯清晰、舉例具體、結構完整',
      '避免：只列舉不分析、論點重複、未呼應題目關鍵字',
      '建議：寫考前準備 3-4 個萬用論述角度（科技/人才/社會責任/政策配合）',
    ],
  },
  {
    topicId: 'C-02',
    keyPoints: [
      '常見商業詞彙：disclose（揭露）、incorporate（整合）、logistics（物流）、compulsory（強制）',
      '科技/AI 詞彙：incorporation、deployment（部署）、implementation（實作）',
      '社會議題詞彙：deport（遣返）、infatuation（迷戀/癡迷）、celebrities（名人）',
      'towards（朝向）vs forward（向前）：go towards a goal（朝目標邁進）',
      '動詞精確用法：disclose≠enclose（附上）、contribute to（導致/貢獻）≠result from（源於）',
    ],
    examTips: [
      '字彙題最好從語境判斷：先看前後文，再看選項',
      '114 年字彙考點：towards/disclose/vast/compulsory/deport/incorporation/infatuation/celebrities/flattered/logistics',
    ],
  },
  {
    topicId: 'C-03',
    keyPoints: [
      '假設語氣（Subjunctive）：recommend/suggest/require that + S + V原形（不加 s/ed）',
      'help + V原形：help lower stress（不用 to lower 或 lowering）',
      '分詞構句主詞一致：Unsatisfied with her job, she... → 主詞都是 she',
      '比較句同類比較：more...than any other + 單數名詞（同類，如 Peter 在辦公室中最隨和）',
      'avoid / enjoy / keep + V-ing（動名詞）；recommend + V-ing 或 that S V原形',
      '結果連接詞：as a result（因此）≠ because（因為）≠ result in（導致）',
    ],
    examTips: [
      '114 年文法考點：but also / more or less / economical / meet（假設）/ as a result',
      'Suffering from arthritis, Julian... → 分詞構句，主詞為 Julian',
    ],
  },
  {
    topicId: 'C-04',
    keyPoints: [
      'hit the nail on the head：說到點子上、一針見血',
      'bite the bullet：咬牙撐過去',
      'break the ice：打破僵局',
      'cut corners：走捷徑、偷工減料',
      'come up with：想出（解決方案）；live up to：達到（期望）；look up to：仰慕',
      'capable of + V-ing：有能力做…；adherent to：堅守…；composed of：由…組成',
    ],
    examTips: [
      '114 年慣用語考：come up with（想出資金）、hit the nail on the head（一針見血）',
      'capable of：後接 V-ing；be able to：後接 V 原形',
    ],
  },
  {
    topicId: 'C-05',
    keyPoints: [
      '克漏字策略：先讀完整段再填，判斷邏輯關係（轉折/遞進/因果）',
      '常用轉折連接詞：however（轉折）、moreover（遞進）、in particular（特別是）、as a result（因此）',
      '介系詞搭配：due to（因為）、according to（根據）、integral to（不可或缺於）',
      '時態一致性：段落時態要統一（過去/現在完成）',
      '配搭詞（Collocation）：deployment of tools、consequence of/to、outdated concept',
    ],
    examTips: [
      '114 年克漏字主題：遠距工作趨勢、大學生就業困境',
      '114 年考點：outdated/consequence/in particular/deployment/integral/finding/due to/to estimate/according to/it has been',
    ],
  },
  {
    topicId: 'C-06',
    keyPoints: [
      '主旨題：選能概括全文的選項，注意「全文」而非單一段落；避免選太窄或太廣的選項',
      '細節題：回原文找精確答案，不過度推論；注意 NOT 題型（要選文中未提及的）',
      '推論題：文中未直說但可合理推斷；需有原文根據，不能全靠常識',
      '作者態度/語氣題：找情緒詞、評價詞；cautiously supportive（審慎支持）vs overwhelmingly optimistic',
      '114 年閱讀主題：AI 在學校的應用與挑戰（教師擔憂、實施不一致、需要國家策略）',
    ],
    examTips: [
      '114 年考：Most schools were still in the early stages（早期階段、實施不一致）',
      '114 年考：未提及的疑慮 → AI may lead to unemployment（文中無此內容）',
      '114 年考：作者態度 → Cautiously supportive（審慎支持）',
      '114 年考：主要挑戰 → Unclear guidance on safe and ethical use',
    ],
  },
]

const RESOURCE_MAP = new Map(RESOURCES.map((r) => [r.topicId, r]))

export function getResource(topicId: string): TopicResource | undefined {
  return RESOURCE_MAP.get(topicId)
}

export default RESOURCES
