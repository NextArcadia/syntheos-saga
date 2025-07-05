# AGENTS.md — Syntheos Saga AI / Codex Usage Guide

## 📊 モデルポリシー
| Model   | 用途                   | 上限コスト目安                |
| ------- | ---------------------- | ----------------------------- |
| GPT‑4o  | デフォルト会話・小修正 | 15 USD / 1M 出力              |
| GPT‑4.1 | 中規模コード生成       | 30 USD / 1M 出力              |
| o3      | 大規模リファクタ       | 80 USD / 1M 出力 < 5 % of月間 |

## 🚀 ブラウザ Codex
- タスク入力テンプレ  
```text
### Task
<概要>

### Acceptance
- <AC1>
- <AC2>
````

* ブランチ形式 `codex/{feature}`

## 🛠 CLI Codex

```bash
codex diff \
  --model gpt-4.1 \
  --prompt .github/prompts/feat-map.md \
  src/
```

## 🔐 シークレット

| Name             | Scope                   | Rotation |
| ---------------- | ----------------------- | -------- |
| OPENAI_API_KEY | devcontainer, Codex env | 手動 90d |

## 📈 Usage & Billing

```bash
codex usage --since 30d > reports/usage_$(date +%F).csv
```

> **最初は 200 行未満でも良い** ので、日々学んだ知見を **随時追記** するリビングドキュメントにするのがコツです。
