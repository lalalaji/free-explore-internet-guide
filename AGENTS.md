# 🤖 AGENTS.md

## 📌 Git 提交规范 (Commit Guidelines)

### 📐 提交格式

```text
<emoji> <type>(<scope>): <description>
```

> 注：`<scope>` 为选填，用于指定影响范围/模块。

---

### 🏷️ 类型说明 (Commit Types)

- ✨ `feat`: 新增功能或页面内容
- 🐛 `fix`: 修复 Bug 或内容错误
- 📝 `docs`: 文档新增、修订或说明补充
- 💄 `style`: 样式调整、排版优化、格式化（不影响逻辑）
- ♻️ `refactor`: 代码/结构重构（既不修复 bug 也不添加功能）
- ⚡️ `perf`: 性能优化与加载加速
- 🧪 `test`: 添加或更新测试用例
- 🔧 `chore`: 依赖更新、构建配置、工作流维护
- ⏪ `revert`: 代码回退 / 撤销历史提交

---

### 📋 提交准则

1. 🎯 **单一职责**：每次 Commit 仅包含一个独立、原子性的修改。
2. ✍️ **精炼清晰**：标题限制在 50 字以内，描述具体改动意图。
3. 🔍 **动词开头**：使用清晰的动作陈述（如 `feat(guide): 新增快速上手教程`）。

---

## 🔀 版本控制与 Jujutsu (`jj`) 规范

- **VCS 协同模式**：项目全面支持并推荐使用 **Jujutsu (`jj`)** 与 Git 协同（Co-located 模式，`jj git init --colocate`）。`jj` 与 `git` 可无缝混用。
- **更新变更描述**：使用 `jj describe -m "<emoji> <type>(<scope>): <description>"` 设置当前变更描述。
- **提交与新工作副本**：使用 `jj new` 固化当前变更并开启干净的工作副本。
- **自动吸收整理**：使用 `jj absorb` 自动将补丁修正折叠回对应历史变更。
- **分支与推送**：保持本地 bookmark 追踪远端分支（如 `jj bookmark track main@origin`），推送时使用 `jj git push --bookmark main` 或标准 `git push`。
