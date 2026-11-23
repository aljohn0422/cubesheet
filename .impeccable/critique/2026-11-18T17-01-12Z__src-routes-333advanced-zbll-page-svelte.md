---
target: ZBLL page
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 1
target_identity: "file:/Users/hannchyun/Documents/coding/homelab/cube/cubesheet/src/routes/333advanced/zbll/+page.svelte"
target_fingerprint: "sha256:ee9917ed4686c6d827e1f9063afec73f86c9e30d6609bba28da518790578141b"
target_path: /Users/hannchyun/Documents/coding/homelab/cube/cubesheet/src/routes/333advanced/zbll/+page.svelte
timestamp: 2026-11-18T17-01-12Z
slug: src-routes-333advanced-zbll-page-svelte
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — ZBLL（/333advanced/zbll）
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | 手機點小組後，內容在畫面下方約 800px 處更新（noScroll），眼前沒有反應 |
| 2 | Match System / Real World | 2 | 小組「Pi 1」裡有一個 case 也叫「Pi 1」；「U1」「Pi 1」「U 1」空格寫法混用 |
| 3 | User Control and Freedom | 3 | replaceState：上一頁直接離開本頁，而不是退回上一個篩選（可接受） |
| 4 | Consistency and Standards | 3 | CaseTile 用灰框圓角卡片，其他控制項都是 1px 墨框 |
| 5 | Error Prevention | 3 | — |
| 6 | Recognition Rather Than Recall | 3 | 形狀格沒有數量（H 40 個，其他 72 個） |
| 7 | Flexibility and Efficiency | 2 | 不能直接跳到第 N 個；替代公式不能收合，手機上一個 case 約 400px 高 |
| 8 | Aesthetic and Minimalist Design | 3 | 沒有說明文字，符合要求 |
| 9 | Error Recovery | 2 | 網址的 ?set 打錯時默默顯示 U |
| 10 | Help and Documentation | 3 | 不需要說明（進階玩家） |
| **Total** | | **27/40** | Good |

## Priority Issues
- [P1] case 名稱和小組名稱撞名（zbll.ts:43）：Pi 1 小組裡有 case「Pi 1」，Pi 2 既是 case 也是小組。改成小組內編號（Pi1-2）並統一空格寫法。
- [P2] 手機上大部分畫面是篩選格和替代公式：第一個 case 從 y≈810 才開始。替代公式收合成「另 3 條」；點小組後捲到第一段；小組圖示改用只顯示角塊的遮罩。
- [P2] 有 795 條公式最後要補一個 U，卡片上沒有任何提示。

## Detector
detect.mjs：0 findings（--no-config 也是 0）。瀏覽器 overlay：各頁都是 "No anti-patterns found"。
