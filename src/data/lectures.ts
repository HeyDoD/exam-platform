// Auto-generated from NotebookLM study guides — 110–114年甄試試題精析

export interface ChapterLecture {
  topicId: string
  /** 核心概念 / 關鍵概念 / 考試重點 */
  coreConcepts: string[]
  /** 重要原理公式 / 常考申論方向 / 歷屆出題方向 */
  principles: string[]
  /** 高頻考點 / 答題架構建議 / 備考技巧 */
  examHighlights: string[]
}

const LECTURES_A: ChapterLecture[] = [
  {
    topicId: "A-01",
    coreConcepts: [
    "**進位制轉換**：涵蓋二進位、八進位、十進位與十六進位間的轉換。",
    "**補數系統**：用於表示負數，2 的補數（2's complement）為目前主流，114 年考點涉及補數加法運算。",
    "**邏輯閘**：基本閘（AND, OR, NOT）與組合閘（NAND, NOR, XOR, XNOR）。其中 NAND 與 NOR 被稱為「萬用閘」。",
    "**偵錯與校正**：包含奇偶校驗（Parity Check）、漢明碼（Hamming Code）及循環冗餘檢查（CRC）。",
  ],
    principles: [
    "**漢明距離 (Hamming Distance)**：兩等長字串間對應位元不同的數量（110, 114年考點）。",
    "**布林代數簡化**：如 $X = \\bar{A}\\bar{B} + AB$ 為 XNOR 閘（110年考點）；$X + XY = X$（112年考點）。",
    "**CRC 計算**：透過生成多項式（如 $X^3+X^1$）進行除法運算求得餘數（114年考點）。",
  ],
    examHighlights: [
    "**進位轉換與運算**：(110, 111, 112, 113, 114)",
    "**補數運算與溢位檢測**：(111, 114)",
    "**邏輯閘與萬用閘辨識**：(110, 111, 113)",
    "**漢明碼與校驗位計算**：(110, 114)",
  ],
  },
  {
    topicId: "A-02",
    coreConcepts: [
    "**行程管理 (Process Management)**：包含行程狀態轉換（Ready, Running, Waiting）與 PCB 內容。",
    "**CPU 排程**：搶奪式（Preemptive）與非搶奪式。",
    "**死結 (Deadlock)**：四個必要條件：互斥、占用並等候、不可強奪、循環等候。",
    "**記憶體管理**：虛擬記憶體、分頁法（Paging）、分段法及輾轉混亂（Thrashing）。",
  ],
    principles: [
    "**阿姆達爾定律 (Amdahl's Law)**：用於計算平行處理的加速比（112年考點）。",
    "**磁碟陣列 (RAID)**：",
    "RAID 0：效能高但無容錯。",
    "RAID 1：磁碟鏡像，安全性最高（111, 113年考點）。",
    "RAID 5：分散式奇偶校驗，至少需3顆硬碟。",
  ],
    examHighlights: [
    "**CPU 排程演算法 (SJF, SRTF, RR, FCFS)**：(110, 111, 113, 114)",
    "**分頁替換演算法與布雷第異常 (Belady’s Anomaly)**：(112)",
    "**死結處理與預防 (Timestamp Priority)**：(110, 113)",
    "**磁碟排程演算法 (SSTF, SCAN, C-LOOK)**：(110)",
  ],
  },
  {
    topicId: "A-03",
    coreConcepts: [
    "**線性結構**：陣列（Array）、堆疊（Stack）、佇列（Queue）、鏈結串列（Linked List）。",
    "**非線性結構**：二元樹（Binary Tree）、AVL樹（平衡二元樹）、紅黑樹（Red-Black Tree）、堆積（Heap）。",
  ],
    principles: [
    "**二元樹走訪**：前序、中序、後序（114年考點）。",
    "**AVL 樹平衡因子**：介於 -1 與 1 之間（114年考點）。",
    "**堆疊性質**：後進先出（LIFO），111 年考點涉及多層 Push/Pop 運算。",
  ],
    examHighlights: [
    "**堆疊運算與應用**：(111)",
    "**二元樹走訪與重建**：(114)",
    "**AVL 樹與紅黑樹特性**：(114)",
    "**鏈結串列與陣列效能比較**：(111, 113)",
  ],
  },
  {
    topicId: "A-04",
    coreConcepts: [
    "**排序 (Sorting)**：包含穩定排序（Stable Sorting）與非穩定排序。",
    "**搜尋 (Search)**：二分搜尋法（Binary Search）、雜湊搜尋（Hashing）。",
    "**圖形演算法**：最小成本擴張樹（MST: Prim, Kruskal）、最短路徑（Dijkstra, Bellman-Ford）。",
  ],
    principles: [
    "**時間複雜度 (Time Complexity)**：由低至高為 $O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)$。",
    "**二分搜尋比對次數**：最多為 $\\lceil \\log_2 N \\rceil$ 次（111年考點）。",
  ],
    examHighlights: [
    "**各種排序法之時間複雜度及穩定性**：(111, 112, 113, 114)",
    "**MST 與最短路徑演算法適用情境**：(112, 113)",
    "**遞迴程式特性與分治法**：(111, 113)",
  ],
  },
  {
    topicId: "A-05",
    coreConcepts: [
    "**參數傳遞**：傳值（Call by Value）、傳址（Call by Reference）、傳名（Call by Name）。",
    "**物件導向 (OOP)**：封裝、繼承、多型（重載 Overload 與覆寫 Override）。",
    "**語言特性**：強型別 vs 弱型別；編譯式 vs 直譯式。",
  ],
    principles: [
    "**垃圾收集 (Garbage Collection)**：Java 具備此機制，C/C++ 則無（112年考點）。",
    "**Java 繼承限制**：不支持多重繼承，需透過介面（Interface）模擬（114年考點）。",
  ],
    examHighlights: [
    "**參數傳遞方式與執行結果預測**：(111, 112, 114)",
    "**OOP 概念（重載、介面、繼承）**：(111, 114)",
    "**Python 與 Java 之資料型態特性**：(111, 114)",
  ],
  },
  {
    topicId: "A-06",
    coreConcepts: [
    "**軟體測試**：",
    "**黑箱測試**：不考慮程式內部邏輯（單元、系統、整合測試皆可應用，但 113 年指出單元測試較不適合純黑箱）。",
    "**白箱測試**：根據程式碼內部結構設計測試用例。",
  ],
    principles: [],
    examHighlights: [
    "**測試方法論 (Black-box vs White-box)**：(113)",
    "**OWASP Top 10 安全漏洞辨識**：(112)",
  ],
  },
  {
    topicId: "A-07",
    coreConcepts: [
    "**正規化 (Normalization)**：1NF（原子性）、2NF（消除部分功能依賴）、3NF（消除傳遞功能依賴）、BCNF。",
    "**交易特性 (ACID)**：原子性、一致性、隔離性、持久性。",
    "**隔離層級問題**：Dirty Read（讀取到未提交數據）、Phantom Read。",
  ],
    principles: [
    "**SQL 與 View**：View 本身不儲存資料，僅提供邏輯視圖（111, 112年考點）。",
  ],
    examHighlights: [
    "**正規化各階段定義與目的**：(112, 114)",
    "**ACID 特性與交易併發問題**：(114)",
    "**關聯式與非關聯式 (NoSQL) 資料庫辨識**：(113)",
  ],
  },
  {
    topicId: "A-08",
    coreConcepts: [
    "**OSI 七層模型與 PDU**：實體層（Bit）、資料連結層（Frame）、網路層（Packet）、傳輸層（Segment）。",
    "**IPv4 與 IPv6**：位址長度（32 bit vs 128 bit）、表頭欄位（IPv6 無 Checksum）。",
    "**路由協定**：距離向量（RIP）與鏈路狀態（OSPF）。",
  ],
    principles: [
    "**子網路計算 (CIDR)**：如 /20 遮罩為 255.255.240.0（112年考點）。",
    "**常見通訊埠 (Port)**：FTP(20,21)、Telnet(23)、SMTP(25)、DNS(53)、HTTP(80)、SNMP(161)、HTTPS(443)。",
  ],
    examHighlights: [
    "**IPv4 位址分級與子網路遮罩計算**：(111, 112, 113, 114)",
    "**OSI 模型各層功能與協定歸類**：(111, 112, 113, 114)",
    "**TCP 三向交握與流量控制**：(110, 113, 114)",
  ],
  },
  {
    topicId: "A-09",
    coreConcepts: [
    "**加密技術**：",
    "**對稱式**：DES, AES（速度快）。",
    "**非對稱式**：RSA, DSA（安全性高，需公/私鑰）。",
    "**攻擊手法**：DDoS, SYN Flood（利用三向交握機制）、SQL Injection、XSS、零時差攻擊（Zero-day）。",
  ],
    principles: [
    "**數位簽章**：寄件者用私鑰加密訊息摘要（不可否認性），收件者用寄件者公鑰解密（110, 111年考點）。",
  ],
    examHighlights: [
    "**加密與數位簽章原理**：(110, 111, 112)",
    "**網路攻擊類型辨識 (XSS, CSRF, Injection)**：(110, 113, 114)",
    "**防火牆、IDS、IPS 之功能差異**：(111, 112, 113, 114)",
  ],
  },
  {
    topicId: "A-10",
    coreConcepts: [
    "**CPU 組成**：ALU、控制單元（CU）、暫存器（Register）。",
    "**指令架構**：RISC（精簡指令集）與 CISC（複雜指令集）。",
    "**記憶體階層**：暫存器 > 快取 > 主記憶體 > 輔助記憶體（硬碟）。",
  ],
    principles: [
    "**馮紐曼架構**：輸入/輸出單元、運算器、控制器、記憶體（114年考點）。",
    "**管路危機 (Pipeline Hazard)**：結構、資料、控制危障（113年考點）。",
  ],
    examHighlights: [
    "**匯流排頻寬與定址能力計算**：(110, 112)",
    "**記憶體層次與存取速度比較**：(112, 114)",
    "**RISC 與 CISC 特性對比**：(111, 113)",
  ],
  },
  {
    topicId: "A-11",
    coreConcepts: [
    "**分散式系統**：事件先後關係之偏序（滿足反身、反對稱、遞移律）。",
    "**系統介面**：AGP, IDE, SATA, SCSI, USB 等硬碟與周邊傳輸介面。",
  ],
    principles: [],
    examHighlights: [],
  },
  {
    topicId: "A-12",
    coreConcepts: [
    "**服務模型**：",
    "**IaaS**：如 Amazon EC2。",
    "**PaaS**：平台服務。",
    "**SaaS**：軟體服務。",
  ],
    principles: [],
    examHighlights: [
    "**IaaS/PaaS/SaaS 的歸類與實例**：(110, 111)",
  ],
  },
  {
    topicId: "A-13",
    coreConcepts: [
    "**三層架構**：感知層（最底層）、網路層、應用層（110, 112年考點）。",
    "**通訊技術**：Zigbee（低功耗、近距離）、NB-IoT、LoRa（長距離）。",
  ],
    principles: [],
    examHighlights: [],
  },
  {
    topicId: "A-14",
    coreConcepts: [
    "**機器學習**：過擬合（Overfitting，訓練誤差低但測試誤差高）、降維（PCA）。",
    "**神經網路**：RNN 常見梯度消失或爆炸問題。",
    "**自然語言處理 (NLP)**：文字向量化、機器翻譯。",
  ],
    principles: [],
    examHighlights: [],
  },
  {
    topicId: "A-15",
    coreConcepts: [
    "**ISO 27001:2013**：包含 14 個領域與 35 個控制目標（111年考點）。",
    "**備份 3-2-1 原則**：3 份備份、2 種媒體、1 份異地（112年考點）。",
    "**網路管理五大功能**：故障、組態、安全、效能、帳務（或事件）管理。",
  ],
    principles: [],
    examHighlights: [],
  },
]

const LECTURES_B: ChapterLecture[] = [
  {
    topicId: "B-01",
    coreConcepts: [
    "**SSDLC (Secure System Development Life Cycle)**：依據國家資通安全防護整合服務計畫，指在系統開發生命週期中納入安全控制措施，確保 WEB 應用程式之安全性。",
    "**UML (Unified Modeling Language)**：統一建模語言，用於系統設計與分析之標準化語言，協助分析師與設計師視覺化、設計並記錄系統構造。",
  ],
    principles: [
    "**SSDLC 各階段控制措施 (111年)**：要求說明開發、測試、部署與維運階段之具體安全控制項目。",
    "**UML 圖表應用 (113年)**：列舉並繪製說明 4 種常用 UML 圖表。",
  ],
    examHighlights: [
    "**SSDLC 類：** 建議採表格或條列式，依「開發（5項）」、「測試（2項）」、「部署維運（3項）」層次分明地列出控制措施。",
    "**UML 類：** 先定義 UML 目的，再分點說明圖表名稱（如：使用案例圖、類別圖等），並搭配簡圖與適用場景描述。",
  ],
  },
  {
    topicId: "B-02",
    coreConcepts: [
    "**數位轉型 (Digital Transformation)**：企業利用數位科技進行全面性變革，以在後疫情時代下存續。",
    "**物聯網 (IoT)**：涵蓋四項主要技術範疇之聯網架構。",
    "**機器學習 (Machine Learning)**：包含監督式學習與非監督式學習兩大實務應用類別。",
  ],
    principles: [
    "**數位轉型之推動 (112年)**：定義數位轉型、成功轉型須兼顧的 5 大層面，以及轉型經歷的 3 個階段。",
    "**機器學習分類 (111年)**：比較監督式與非監督式學習之定義、處理問題及演算法。",
    "**物聯網與資訊倫理 (110年)**：說明 IoT 範疇與資訊倫理之定義。",
  ],
    examHighlights: [
    "**轉型階段類：** 應由淺入深描述（如：數位化 -> 數位優化 -> 數位轉型）。",
    "**比較類題目：** 建議使用表格比較「監督式」與「非監督式」之差異。",
  ],
  },
  {
    topicId: "B-03",
    coreConcepts: [
    "**Stack (堆疊)**：一種「後進先出」(LIFO) 的資料結構。",
    "**Garbage Collection (垃圾回收)**：Java 等語言中自動管理記憶體之機制，負責回收不再使用的物件空間。",
  ],
    principles: [
    "**Stack 的實務應用與實作 (112年)**：定義 Stack、列舉 2 個應用案例（如回溯、函式呼叫），並撰寫基本操作程式碼。",
    "**Java 記憶體管理 (114年)**：說明垃圾回收之運作原理及觸發時機。",
    "**DBMS 效能調校 (113年)**：計算 B+ tree 索引架構下，不同 SQL 語法存取硬碟頁 (Disk Page) 的次數。",
  ],
    examHighlights: [
    "**計算類：** 必須列出詳細計算過程，例如：`總筆數 / 每頁筆數 = 葉節點頁數`，加上索引層級數目。",
    "**原理類：** 清楚說明「何時觸發」（如：記憶體不足時）與「如何運作」。",
  ],
  },
  {
    topicId: "B-04",
    coreConcepts: [
    "**Relational Database (關聯式資料庫)**：使用資料表 (Table) 儲存資料，並透過主鍵 (Primary Key) 與外鍵 (Foreign Key) 建立關聯。",
    "**SQL 萬用字元與 EXISTS**：進階查詢語法，用於模糊比對及子查詢存在性判斷。",
  ],
    principles: [
    "**複雜 SQL 查詢 (110-113年)**：包含排序 (ORDER BY)、聚合計算 (SUM, AVG)、分組 (GROUP BY) 及多表關聯 (JOIN)。",
    "**DDL 與索引建置 (113年)**：建立資料表、定義主外鍵約束及建立 CLUSTER INDEX。",
    "**進階篩選 (111-112年)**：使用萬用字元篩選特定模式之字串，或四捨五入計算銷售折扣。",
  ],
    examHighlights: [
    "**SQL 指令撰寫：**",
    "注意關鍵字大小寫（慣例上）。",
    "明確標註 Table JOIN 的條件。",
    "若題目要求計算，需在 SELECT 項目中使用運算式。",
  ],
  },
  {
    topicId: "B-05",
    coreConcepts: [
    "**TTL (Time To Live)**：封包生存時間，防止封包在網路中無限循環，也是 Traceroute 之核心原理。",
    "**非對稱路由 (Asymmetric Routing)**：封包去程與回程經過不同路徑之現象。",
    "**DNSSEC/DoH/DoT**：強化域名解析安全之技術，DoH/DoT 著重加密傳輸，DNSSEC 著重資料完整性驗證。",
  ],
    principles: [
    "**網路診斷與 Traceroute (114年)**：解釋 TTL/ICMP 角色、非對稱路徑成因，以及排查「偶發高延遲」之測試矩陣。",
    "**IPv4 與 IPv6 比較 (114年)**：從位址長度、標頭大小、分片、QoS 等 10 種面向進行對比。",
    "**DNS 安全 (114年)**：說明 DoH/DoT 與 DNSSEC 如何在功能上互補。",
  ],
    examHighlights: [
    "**對比類：** 強烈建議使用 10 列之表格，逐項對齊 IPv4 與 IPv6 之異同。",
    "**排查類：** 依題目給予的維度（協定、封包大小、路徑等）分項說明診斷方法。",
  ],
  },
  {
    topicId: "B-06",
    coreConcepts: [
    "**雲端運算服務模型**：",
    "**IaaS (基礎設施即服務)**：提供基礎運算資源。",
    "**PaaS (平台即服務)**：提供開發平台。",
    "**SaaS (軟體即服務)**：透過網路直接使用軟體。",
  ],
    principles: [
    "**雲端服務分類與實例 (110, 113年)**：定義 3 種服務種類，並提供 CSP (雲端服務提供者) 實例（如 Google Gmail 屬 SaaS）。",
    "**雲端部署模型 (112年)**：說明 4 種部署模型（公有雲、私有雲、混合雲、社群雲）之特性。",
  ],
    examHighlights: [
    "**定義類：** 先給出標準定義，再列舉具體業者或產品名稱作為佐證。",
  ],
  },
  {
    topicId: "B-07",
    coreConcepts: [
    "**ISO 27001 (ISMS)**：資訊安全管理系統國際標準。",
    "**PDCA 循環**：Plan-Do-Check-Act，持續改進之架構。",
    "**Web 攻擊行為**：",
    "**SQL Injection**：惡意注入 SQL 指令。",
    "**XSS (Cross-Site Scripting)**：跨站腳本攻擊。",
    "**CSRF (Cross-Site Request Forgery)**：跨站請求偽造。",
  ],
    principles: [
    "**資安技術防護措施 (110年)**：針對硬體及軟體之 5 個資安防護技術。",
    "**ISMS 維運 (113年)**：繪圖說明 ISO 27001 之 PDCA 循環。",
    "**雲端資安指引 (112年)**：機關使用雲端服務應考量之 6 個資安政策項目。",
    "**網站攻擊與防禦 (110, 114年)**：說明攻擊原理及防範對策。",
  ],
    examHighlights: [
    "**防禦類：** 採取「攻擊原理」＋「防禦措施」兩段式回答。",
    "**管理類：** PDCA 需畫出圓形循環圖，並分別標註各階段（P-規劃、D-實施、C-監控、A-改進）之內涵。",
  ],
  },
  {
    topicId: "B-08",
    coreConcepts: [
    "**Recursion (遞迴)**：函式呼叫自身以解決問題。",
    "**Sorting (排序)**：Quick Sort (快速排序)、Insertion Sort (插入排序) 等演算法。",
  ],
    principles: [
    "**遞迴演算 (110-111年)**：費氏數列 (Fibonacci)、最大公因數 (GCD)、細胞分裂總數計算。",
    "**排序實作 (111, 113年)**：撰寫 Quick Sort 或 Insertion Sort 程式碼，並考慮遞增/遞減參數。",
    "**演算法邏輯 (112, 114年)**：資料清理腳本（驗證 ID、手機、Email）、快樂數 (Happy Number) 判斷。",
  ],
    examHighlights: [
    "**程式碼撰寫：**",
    "注意遞迴之「停止條件」。",
    "若題目要求「非遞迴」方式，應使用迴圈實作。",
    "需注意邊界條件驗證（如手機 10 位數、09 開頭）。",
  ],
  },
  {
    topicId: "B-09",
    coreConcepts: [
    "**封裝 (Encapsulation)**：隱藏物件細節，僅暴露介面。",
    "**繼承 (Inheritance)**：子類別繼承父類別之特徵與行為。",
    "**多型 (Polymorphism)**：同一介面可有多種實現方式。",
  ],
    principles: [
    "**Java OOP 三大特性 (114年)**：說明封裝、繼承、多型之定義及在 Java 中如何實現（如 `private`, `extends`, `interface`）。",
    "**型別比較 (114年)**：比較基本型別 (Primitive) 與參考型別 (Reference) 之差異。",
  ],
    examHighlights: [
    "**特性說明：** 應配合 Java 語法關鍵字進行解釋，使回答更具體。",
  ],
  },
  {
    topicId: "B-10",
    coreConcepts: [
    "**業務邏輯實作**：將企業營運規則（如會員折扣、銷售統計）轉化為資料庫查詢。",
  ],
    principles: [
    "**銷售與折扣計算 (110, 112年)**：計算會員 vs 非會員之購買總額，或因輸入錯誤導致的損失（92 折誤植為 82 折）。",
    "**人事資料管理 (111年)**：撰寫程式檢查員工代號校驗碼，並篩選特定部門之特別費合計。",
    "**排程與隊列應用 (110年)**：設計取號機服務 (GetNumber) 及電梯調度系統 (SelElev)。",
  ],
    examHighlights: [
    "**商業邏輯類：** 需仔細閱讀題目給予的折扣公式或校驗規則（如：第 6 碼為前 5 碼總和之個位數），並將其精確轉化為 SQL 或程式判斷式。",
  ],
  },
]

const LECTURES_C: ChapterLecture[] = [
  {
    topicId: "C-01",
    coreConcepts: [
    "根據歷屆試題顯示，共同科目中的國文部分目前以「論文寫作」為核心考點。在提供的 110 年至 114 年試卷中，國文科並未包含選擇題形式的閱讀理解。測驗重點在於考生對當前社會趨勢、企業經營理念以及國營事業社會責任的理解與論述能力。",
  ],
    principles: [
    "由於本章節與「C-02 國文作文」高度重合，考題多要求考生閱讀一段引言（包含定義與背景說明）後進行寫作。此引言實則測試考生的「閱讀理解」能力，需準確掌握如 ESG、企業韌性、AI 發展、人口變遷等概念之內涵。",
  ],
    examHighlights: [
    "**精讀題幹引言：** 作文題目通常會附帶長篇背景說明，考生必須精準提取引言中的關鍵字（如：利害關係人資本主義、風險管控、科技運用），並將其納入論述。",
    "**關注時事術語：** 雖然沒有選擇題，但對時事術語的理解程度將決定作文的深度。",
  ],
  },
  {
    topicId: "C-02",
    coreConcepts: [
    "**題型：** 論文寫作 1 篇，占 100 分。",
    "**規範：** 須用黑色或藍色原子筆或鋼筆在答案卷指定範圍內作答，且**必須抄題**。",
    "**核心目標：** 評量考生對企業轉型、管理趨勢及國營事業定位的分析與表達能力。",
  ],
    principles: [
    "**110 年** — 國營事業在 ESG 發展趨勢下的機會與挑戰 — ESG (環境、社會、治理)、利害關係人資本主義",
    "**111 年** — 如何建立國營事業企業韌性之我見 — 企業韌性 (Resilience)、風險管控、化危機為轉機",
    "**112 年** — 國營事業員工如何面對 AI 浪潮之我見 — 人工智慧 (AI)、生成式 AI (ChatGPT)、工作環境變遷",
    "**114 年** — 因應人口變遷國營事業之創新作為及社會責任 — 超高齡社會、少子化、勞動力短缺、中高齡/婦女就業",
  ],
    examHighlights: [
    "**結構化論述：** 建議採用「起、承、轉、合」結構，並針對題目要求之「機會與挑戰」或「因應對策」進行並重論述。",
    "**緊扣國營事業特質：** 題目通常明確要求以「國營事業」或其「員工」為立論主體，切勿偏離至一般民營企業。",
    "**注意時限與格式：** 國文與英文合併考試時間為 120 分鐘，需合理分配時間給作文（建議至少預留 60-70 分鐘）。",
  ],
  },
  {
    topicId: "C-03",
    coreConcepts: [
    "英文文法與慣用語部分分布於單選題（第 11-25 題）以及克漏字測驗中。考點涵蓋時態、被動語態、假設語氣、關代用法、動名詞、不定詞及常見習語。",
  ],
    principles: [
    "**假設語氣：** 頻繁出現。如 110 年「had had」(與過去事實相反)、112 年「Should you have any questions...」(萬一，省略 if 的倒裝)。",
    "**動詞用法與語態：** 如 111 年「deny breaking」(deny 後接動名詞)、112 年「has been treating」(現在完成進行式)。",
    "**習語與慣用語：**",
    "110 年：bite off more than one can chew (眼高手低)",
    "111 年：cut corners (偷工減料/走捷徑)",
    "114 年：hit the nail on the head (一針見血)",
  ],
    examHighlights: [
    "**掌握倒裝句與假設：** 這是該考試的進階必考點（如：Only if..., Should...）。",
    "**區分相似片語：** 例如 114 年測驗的 `result from` (起因於) 與 `contribute to` (導致)。",
  ],
  },
  {
    topicId: "C-04",
    coreConcepts: [
    "閱讀理解通常包含 1 至 2 篇文章，每篇文章配有 5 個題目。文章主題廣泛，涉及科學、心理學、社會學及科技能源。",
  ],
    principles: [
    "**110 年：** 愛情的生物化學基礎 (Biochemical basis of love)，探討多巴胺、催產素等激素在愛情階段的作用。",
    "**111 年：** 創傷後成長 (Post-traumatic growth)，討論如何在遭受挫折後尋找意義而非單純追求快樂。",
    "**112 年：** 海洋波浪能 (Ocean wave energy)，探討再生能源的潛力與「磁致伸縮」(magnetostriction) 技術。",
    "**114 年：** AI 在教育中的應用 (AI in education)，分析 AI 對教學負擔的減輕及可能帶來的倫理與安全風險。",
  ],
    examHighlights: [
    "**定位關鍵字：** 題目常詢問細節（如：哪種激素與愛有關？），需回文快速定位。",
    "**詞彙推斷：** 考試常出現「Which of the following is closest in meaning to...」題型，需具備根據上下文推斷難詞（如 attachment, in the wake of）的能力。",
  ],
  },
  {
    topicId: "C-05",
    coreConcepts: [
    "詞彙題集中在單選題前 10 題，難度介於高中至大學程度，強調商業、社會與專業技術相關詞彙。",
  ],
    principles: [
    "**110 年：** life-threatening (威脅生命的)、abbreviated (縮寫的)、catastrophic (災難性的)。",
    "**111 年：** counterfeit (偽造的)、inflation (通貨膨脹)、charisma (個人魅力)。",
    "**112 年：** credibility (信譽)、indifference (漠不關心)、kidnapped (綁架)。",
    "**114 年：** disclose (透露)、compulsory (義務的/強制性的)、logistics (物流/規劃細節)。",
  ],
    examHighlights: [
    "**字根字首記憶：** 許多單字具有相似結構，如 `credibility` 與 `credence`，需精確辨析。",
    "**留意一字多義：** 並結合克漏字進行脈絡化的詞彙學習。",
  ],
  },
  {
    topicId: "C-06",
    coreConcepts: [
    "根據提供的 110 年至 114 年「共同科目」試題資訊，英文部分僅包含**單選題 40 題**，涵蓋字彙、文法、克漏字與閱讀測驗。在目前提供的資料範圍內，該甄試之共同科目**並不包含英文聽力測試**。",
  ],
    principles: [],
    examHighlights: [
    "**專注於閱讀與寫作：** 既然目前的考試架構以紙筆測驗為主，考生應將心力集中於擴展詞彙量、精鍊語法結構與提升閱讀速度，並加強國文論文的論述邏輯。",
  ],
  },
]

const LECTURE_MAP = new Map<string, ChapterLecture>([
  ...LECTURES_A.map((l): [string, ChapterLecture] => [l.topicId, l]),
  ...LECTURES_B.map((l): [string, ChapterLecture] => [l.topicId, l]),
  ...LECTURES_C.map((l): [string, ChapterLecture] => [l.topicId, l]),
])

export function getLecture(topicId: string): ChapterLecture | undefined {
  return LECTURE_MAP.get(topicId)
}
