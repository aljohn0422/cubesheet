---
target: blindfold practice page
total_score: 23
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/Users/hannchyun/Documents/coding/homelab/cube/cubesheet/src/routes/333bld/practice/+page.svelte"
target_fingerprint: "sha256:c11d6469ae38fecb68b924deeb8ba436412586f37718e64ad5d6966fd05dd5d0"
target_path: /Users/hannchyun/Documents/coding/homelab/cube/cubesheet/src/routes/333bld/practice/+page.svelte
timestamp: 2026-11-18T17-01-12Z
slug: src-routes-333bld-practice-page-svelte
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — 盲解練習（/333bld/practice）
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | 打亂產生中時，兩欄都顯示「已經在正確位置」 |
| 2 | Match System / Real World | 3 | EO／CO 沒有解釋 |
| 3 | User Control and Freedom | 2 | 空白鍵直接丟掉目前的打亂，不能回上一組；模式沒記在網址 |
| 4 | Consistency and Standards | 2 | radiogroup 沒有方向鍵；聚焦在選項上按空白鍵會換題；RotateCcw 在播放器是「從頭」，這裡是「換一組」 |
| 5 | Error Prevention | 2 | 打亂做到一半誤按空白鍵就沒了 |
| 6 | Recognition Rather Than Recall | 2 | 頁面上沒有 Speffz 字母對照 |
| 7 | Flexibility and Efficiency | 3 | 空白鍵和點整張卡都很順手 |
| 8 | Aesthetic and Minimalist Design | 3 | 兩段說明把練習區推到第一屏以下 |
| 9 | Error Recovery | 2 | 打亂產生器載入失敗時永遠停在「產生打亂中…」 |
| 10 | Help and Documentation | 2 | 沒解釋 EO/CO、parity、循環中斷 |
| **Total** | | **23/40** | Acceptable |

## Priority Issues
- [P1] 打亂模式一開始就顯示答案（practice/+page.svelte:165-199）：記憶練習沒得練。改成「看答案」再顯示，空白鍵先顯示再換題；展開圖保留。
- [P1] 載入中顯示假的「已經在正確位置」（56-60 行）；載入失敗沒有錯誤訊息。改成有打亂才畫，失敗時顯示錯誤和重試。
- [P2] 分段按鈕的鍵盤語意（segmented.svelte）：宣稱是 radiogroup 但沒有方向鍵，空白鍵被全域快捷鍵吃掉。改用 aria-pressed，或補上方向鍵並在 Space 處理排除 radio；加 aria-live 播報新題目。
- [P2] 沒有 parity 提示：邊、角目標數都是奇數時沒有任何標示。

## Detector
detect.mjs：0 findings。瀏覽器 overlay：三個模式都是 "No anti-patterns found"。
