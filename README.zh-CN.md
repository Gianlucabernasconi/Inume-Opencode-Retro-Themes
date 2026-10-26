<div align="center">

# Inume Opencode Retro Themes

[English](README.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · **简体中文**

**13 款面向 [OpenCode](https://opencode.ai/)（终端 AI 编程助手）的复古游戏主机与经典电脑主题。**

[![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue)](https://opencode.ai/)
[![Themes](https://img.shields.io/badge/themes-13-success)](#13-款复古主题)
[![Validate Themes](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml/badge.svg)](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

![13 款 OpenCode 复古主题的拼图：Windows 95、Norton Commander、IBM 终端、CGA、PlayStation 1 和 2、GameCube、Game Boy、Famicom、SNES、PCB 与霓虹](assets/cover.png)

[主题](#13-款复古主题) · [画廊](#主题画廊) · [安装](#在-opencode-中安装主题) · [激活](#在-opencode-中激活主题)

</div>

---

**Inume Opencode Retro Themes** 是 13 款免费、采用 MIT 许可证的主题合集，面向 [OpenCode](https://opencode.ai/) —— 开源的终端 AI 编程助手（TUI）。每款主题都复刻了经典硬件与软件的外观：Windows 95、Norton Commander、IBM 荧光终端、CGA 调色板、PlayStation 1 和 2、Nintendo GameCube、Game Boy、Famicom 与 SNES、PCB 电路板，以及老旧霓虹。这些主题以 JSON 主题文件的形式打包，放进 `~/.config/opencode/themes/` 即可使用。它们适用于 OpenCode 1.x 和 2.x，支持深色与浅色模式，最近一次测试使用的是 OpenCode 2.0.21（2026 年 10 月）。

每次推送时，[`scripts/validate.js`](scripts/validate.js) 都会校验每一款主题：必须使用 OpenCode 主题的 `$schema`，定义全部 50 个颜色 token 及其深色与浅色变体（OpenCode 2 会静默忽略缺少其中部分 token 的主题），并让关键的文字/背景配色组合保持不低于 1.8:1 的对比度。该比值只是可读性下限，并非 WCAG 无障碍检查。

## 13 款复古主题

| 主题 | 灵感来源 | 氛围 |
| --- | --- | --- |
| [`w95-classic`](themes/w95-classic.json) | Windows 95 | 蓝绿色桌面、灰色面板、老式桌面界面 |
| [`norton-commander`](themes/norton-commander.json) | Norton Commander | 蓝色文件管理器终端，高对比度 |
| [`ibm-old-terminal`](themes/ibm-old-terminal.json) | IBM PC 终端 | 绿色荧光、黑色屏幕，以命令行为中心 |
| [`cga`](themes/cga.json) | CGA 调色板 | 早期 PC 彩色、强烈对比、复古青色 |
| [`theme-station-1`](themes/theme-station-1.json) | PlayStation 1 | 浅灰色外壳、低饱和界面、经典主机手感 |
| [`theme-station-2`](themes/theme-station-2.json) | PlayStation 2 | 深黑色、蓝色光晕、主机开机的暗色能量 |
| [`theme-cube`](themes/theme-cube.json) | Nintendo GameCube | 紫色硬件，活泼的主机气质 |
| [`dot-matrix`](themes/dot-matrix.json) | Nintendo Game Boy | 豆绿色 LCD、四种色阶、掌机点阵屏 |
| [`family-computheme`](themes/family-computheme.json) | Nintendo Famicom | 奶油色与红色，复古的日本硬件 |
| [`super-theme`](themes/super-theme.json) | Super Nintendo (SNES) | 柔和灰色、紫色点缀、经典 SNES |
| [`super-color`](themes/super-color.json) | SNES (Super Nintendo) 多色 | 更明亮的主机配色，活泼的按键 |
| [`silicon-trace`](themes/silicon-trace.json) | PCB 电路 | 芯片走线、绿色板卡、硬件实验室 |
| [`faded-neon`](themes/faded-neon.json) | 老旧霓虹 | 暗淡光晕、粉绿点缀、深夜终端 |

> **固定配色主题。** `cga`、`dot-matrix`、`faded-neon`、`ibm-old-terminal`、`norton-commander`、`super-color`、`super-theme` 和 `w95-classic` 在浅色与深色模式下保持同一套配色，与原始硬件一致。

---

## 主题画廊

点击主题名称即可打开对应的 JSON 源文件。

### 经典电脑

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Windows 95 的蓝绿色、灰色窗口边框，以及老式桌面界面的对比。

![使用 w95-classic 主题的 OpenCode 终端界面：Windows 95 蓝绿色桌面与灰色面板](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

受经典文件管理器界面启发的蓝色终端面板。

![使用 norton-commander 主题的 OpenCode 终端界面：蓝色的 Norton Commander 文件管理器面板](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

黑色屏幕、绿色荧光，极简的 IBM 终端氛围。

![使用 ibm-old-terminal 主题的 OpenCode 终端界面：IBM 黑屏上的绿色荧光文字](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

早期 PC 的配色逻辑：醒目的青色、深色对比，以及 CGA 时代的锐利感。

![使用 cga 主题的 OpenCode 终端界面：黑底上的 CGA 青色、品红与白色](assets/screenshots/cga.png)

</td>
</tr>
</table>

---

### 游戏主机与电子游戏

<table>
<tr>
<td width="50%" valign="top">

#### [`theme-station-1`](themes/theme-station-1.json)

柔和的 PlayStation 灰，对比度内敛，呈现经典主机质感。

![使用 theme-station-1 主题的 OpenCode 终端界面：浅灰色的 PlayStation 1 配色](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

受 PS2 启发的深色配色，深黑搭配电光蓝高光。

![使用 theme-station-2 主题的 OpenCode 终端界面：深黑色的 PlayStation 2 配色，带蓝绿色高光](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

GameCube 的紫色与主机时代的饱和度，带来活泼的硬件感。

![使用 theme-cube 主题的 OpenCode 终端界面：Nintendo GameCube 的紫色](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

Game Boy 的豆绿色 LCD，四种色阶的点阵对比。

![使用 dot-matrix 主题的 OpenCode 终端界面：四色阶的 Game Boy 绿色 LCD](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Famicom 的奶油色与红色，调校出温暖的复古主机外观。

![使用 family-computheme 主题的 OpenCode 终端界面：Famicom 的奶油色与红色](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

经典 SNES 灰，紫色点缀克制，对比度清晰易读。

![使用 super-theme 主题的 OpenCode 终端界面：Super Nintendo 的灰色与紫色点缀](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

把 SNES 的多色按键转换成更明亮的终端配色。

![使用 super-color 主题的 OpenCode 终端界面：明亮的 SNES 多色配色](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### 电路板与霓虹

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

电路板的绿色与硬件实验室式的对比，打造受 PCB 启发的终端。

![使用 silicon-trace 主题的 OpenCode 终端界面：带铜色走线的绿色 PCB 电路板](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

暗淡的霓虹光晕，老旧的粉色与绿色点缀，适合深夜使用。

![使用 faded-neon 主题的 OpenCode 终端界面：深色背景上暗淡的薄荷绿与粉色霓虹](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## 在 OpenCode 中安装主题

### 方式 A — 一行命令（无需克隆）

把单个主题直接下载到你的 OpenCode 主题文件夹。将 `theme-name` 替换为上表中的任意一款主题：

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/main/themes/theme-name.json \
  -o ~/.config/opencode/themes/theme-name.json
```

### 方式 B — 安装脚本

克隆仓库并运行安装脚本，可以交互式挑选主题，也可以一次安装全部主题：

```bash
git clone https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes.git
cd Inume-Opencode-Retro-Themes
./install.sh                    # 交互式选择
./install.sh all                # 安装全部主题
./install.sh cga w95-classic    # 安装指定主题
./install.sh --project all      # 改为安装到 ./.opencode/themes
```

### 在 OpenCode 中激活主题

在 OpenCode 中运行 `/themes` 打开主题选择器（“Switch theme”），然后在列表中按名称选择你的主题（即去掉 `.json` 的文件名）：

```text
/themes
```

或者在 `cli.json` 中把它设为默认主题（OpenCode 2.x）：

```json
{
  "$schema": "https://opencode.ai/v2/cli.json",
  "theme": { "name": "theme-name" }
}
```

在 OpenCode 1.x 中，默认主题则写在 `tui.json` 里：

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "theme-name"
}
```

OpenCode 2.x 只读取一次 `tui.json`，用于将它迁移到 `cli.json`。

OpenCode 会从 `~/.config/opencode/themes/`、`<project-root>/.opencode/themes/` 和 `./.opencode/themes/` 加载自定义主题。靠后的目录优先级更高。

---

## 许可证

[MIT](LICENSE) © 2026 [Gianluca Bernasconi](https://github.com/Gianlucabernasconi)

本文档是英文 README 的简体中文译本（2026 年 10 月）。如有出入，以参考版本 [README.md](README.md) 为准。