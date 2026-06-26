import { type EssayExam } from './types'

const exam114B: EssayExam = {
  year: 114,
  subject: 'B',
  title: '資訊管理・程式設計',
  type: 'essay',
  questions: [
    {
      id: 1,
      text: '用戶回報網路有「偶發高延遲」現象，網路管理員使用 traceroute 指令觀察到中間節點回應波動與路徑跳數不穩，請以 TTL 回應與非對稱路由概念診斷，試回答下列問題：',
      points: 25,
      subquestions: [
        {
          id: '1-1',
          text: 'TTL/ICMP 在路徑追蹤扮演何種角色？',
          points: 5,
        },
        {
          id: '1-2',
          text: '非對稱路徑可能出現的原因為何？',
          points: 10,
        },
        {
          id: '1-3',
          text: '請就以下 5 種測試矩陣維度：協定/埠號、封包大小、時間、路徑、觀察邊界設備，排查該現象（包含從遠端測回）？',
          points: 10,
        },
      ],
    },
    {
      id: 2,
      text: '請以企業域名(Domain Name)解析的角度，說明 DoH/DoT 與 DNSSEC 在資安功能上如何互補？',
      points: 15,
    },
    {
      id: 3,
      text: '請就以下 10 種面向：位址長度、位址型態、位址派發、標頭(Header)大小、鄰居探索、分片(Fragmentation)、QoS 標記欄位、總長度欄位、DNS 解析、行動(Mobility)路由模式，比較 IPv6 及 IPv4 之異同。',
      points: 10,
    },
    {
      id: 4,
      text: '定義「快樂數」為一個正整數 N 經過以下過程：\n1. 將 N 的每一位數字平方後相加，得到新數字。例如：25 → 2×2+5×5=29\n2. 重複此步驟，直到出現下述其中一種結果：\n   ① 得到 1，則 N 是快樂數\n   ② 進入循環（例如：4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4），則 N 非屬快樂數\n\n請設計一函式 isHappy(int n)，並註明所使用的程式語言：\n輸入：正整數 n (1 ≤ n ≤ 10⁹)\n輸出：若 n 是快樂數，回傳 true；否則回傳 false',
      points: 15,
    },
    {
      id: 5,
      text: 'Java 是一種常見的物件導向程式語言，請回答下列問題：',
      points: 20,
      subquestions: [
        {
          id: '5-1',
          text: 'Java 中基本型別(Primitive Type)與參考型別(Reference Type)差異為何？',
          points: 5,
        },
        {
          id: '5-2',
          text: 'Java 的垃圾回收機制(Garbage Collection)如何運作（3分）？何時觸發（3分）？',
          points: 6,
        },
        {
          id: '5-3',
          text: 'Java 物件導向的三大特性為封裝、繼承、多型，請分別說明其定義與如何在 Java 中實現。',
          points: 9,
        },
      ],
    },
    {
      id: 6,
      text: '請說明下列網站攻擊的行為原理及如何防禦：',
      points: 15,
      subquestions: [
        {
          id: '6-1',
          text: 'SQL Injection',
          points: 5,
        },
        {
          id: '6-2',
          text: 'Cross-Site Scripting, XSS',
          points: 5,
        },
        {
          id: '6-3',
          text: 'CSRF',
          points: 5,
        },
      ],
    },
  ],
}

export default exam114B
