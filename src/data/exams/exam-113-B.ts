import type { EssayExam } from './types'

const exam113B: EssayExam = {
  year: 113,
  subject: 'B',
  title: `113年度新進職員甄試試題 - 專業科目B（資訊管理、程式設計）`,
  type: 'essay',
  questions: [
    { id: 1, text: `一、某書店資料庫中有數個資料表，其DDL 如下，請回答下列問題：（3 題，共16 分） 
CREATE TABLE Product ( 
pNo CHAR(6) NOT NULL, 
pName VARCHAR(30), 
unitPrice int, 
PRIMARY KEY (pNo) 
); 
CREATE INDEX PriceIndex  
ON Product(unitPrice)  
CLUSTER; 
CREATE TABLE Member ( 
mId CHAR(8) NOT NULL, 
name VARCHAR(50) NOT NULL, 
email VARCHAR(50) NOT NULL, 
PRIMARY KEY (mId) 
); 
CREATE TABLE Buy ( 
mId CHAR(8) NOT NULL, 
pNo CHAR(6) NOT NULL, 
BuyTime DATETIME NOT NULL, 
amount INT, 
PRIMARY KEY (mId, pNo, BuyTime), 
FOREIGN KEY (mId) REFERENCES Member(mId), 
FOREIGN KEY (pNo) REFERENCES Product(pNo) 
); 
CREATE TABLE Author ( 
pNo CHAR(6) NOT NULL, 
name VARCHAR(50), 
PRIMARY KEY (pNo, name), 
FOREIGN KEY (pNo)  
      REFERENCES Product(pNo) 
); 
(一)試以SQL 語法，列出各作者之銷售總金額。（3 分） 
(二)當某讀者把某作者的所有書都買過，我們稱該讀者為「鐵粉」。試以SQL 語法，列出
達文西(Author.name='達文西')的所有「鐵粉」姓名。（3 分）  
(三)本DBMS 是由高速電腦建置的非分散式資料庫系統，執行SQL語法查詢時，需先將資
料從硬碟載入記憶體才能運算，為了減少硬碟存取次數，每次載入量為一個硬碟頁。
由於存取硬碟頁的耗用時間，是本DBMS 進行SQL 語法查詢的最主要成本，故實際執
行查詢前，估算硬碟頁存取次數將是效能調校關鍵。已知Product 資料表裡共有
100,000 筆，每一硬碟頁可存放200 筆資料，以pNo 及unitPrice 為索引所建立的B+ tree
各有4 層(含葉節點)，試問以下語法，將分別平均存取幾個硬碟頁? 請列示計算過程。 
(1)執行「Select * from Product where pNo='xxxxxx'」（5 分） 
(2)執行「Select * from Product where unitPrice>z」(z 為任意整數)（5 分） 
【請翻頁繼續作答】 

 1.資訊管理 2.程式設計 第 2 頁，共 2 頁`, points: 3 },
    { id: 2, text: `二、請簡要回答下列問題：（2 題，共18 分） 
(一)各雲端服務提供者(CSP)，採SaaS、PaaS、IaaS 雲端運算服務模式提供不同型態之服
務，例如Google 提供Gmail，即為SaaS 實例。請針對該3 種模式，分別列出2 個CSP
實例。（6 分） 
(二)請繪圖說明ISO 27001 資訊安全管理系統(ISMS)的PDCA 循環。（12 分）`, points: 6 },
    { id: 3, text: `三、UML(統一建模語言)是一種用於系統設計與分析的標準語言，用以幫助系統分析師和設計
師視覺化、設計和記錄系統構造。請列舉4 種UML 常用圖表並分別繪圖說明。（16 分）`, points: 16 },
    { id: 4, text: `四、請依下列條件畫出樹狀圖：（2 題，每題6 分，共12 分） 
(一)依據前序(prefix)表示法JBHCDIGAEF 及中序(infix)表示法CHBIDJEAGF，畫出唯一的
二元樹。 
(二)在1 個空的AVL 樹，依序插入53、68、72、5、47、14、36、21，畫出完成後的AVL
樹。` },
    { id: 5, text: `五、請實作下列函式以完成設計1 個插入排序法(Insertion Sort)，據以依參數值決定排序方式採
遞增或遞減。（18 分） 
 
bool isInverse(int x, int y, bool isAsc);  //判斷傳入的x、y 是否反序 
 
void InsertionSort(int *arr, int len, bool isAsc);  //插入排序 
(註：參數arr 為傳入的整數陣列；參數len 為整數陣列的長度；參數isAsc 為是否遞增， 
函式InsertionSort 應呼叫函式isInverse。) 
六、請使用程式語言設計1 個低時間複雜度的函式，傳入a、b 皆為不大於230的正整數後，可
判斷出 |a െ b| 的值是否只有3 個因數，並註明所使用的程式語言。（20 分） 
(註：該函式只允許呼叫平方根函式。)`, points: 18 },
  ],
}

export default exam113B