<div align="center">

# Inume Opencode Retro Themes

**English** · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

**13 retro console and classic-computer themes for [OpenCode](https://opencode.ai/), the terminal AI coding agent.**

[![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue)](https://opencode.ai/)
[![Themes](https://img.shields.io/badge/themes-13-success)](#the-13-retro-themes)
[![Validate Themes](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml/badge.svg)](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

![Mosaic of the 13 OpenCode retro themes: Windows 95, Norton Commander, IBM terminal, CGA, PlayStation 1 and 2, GameCube, Game Boy, Famicom, SNES, PCB and neon](assets/cover.png)

[Themes](#the-13-retro-themes) · [Gallery](#theme-gallery) · [Install](#install-the-themes-in-opencode) · [Activate](#activate-a-theme-in-opencode)

</div>

---

**Inume Opencode Retro Themes** is a collection of 13 free, MIT-licensed themes for [OpenCode](https://opencode.ai/), the open-source terminal AI coding agent (TUI). Each theme recreates the look of classic hardware and software — Windows 95, Norton Commander, IBM phosphor terminals, the CGA palette, PlayStation 1 and 2, the Nintendo GameCube, Game Boy, Famicom, and SNES, PCB circuit boards, and worn neon — packaged as JSON theme files you drop into `~/.config/opencode/themes/`. They work on OpenCode 1.x and 2.x, in dark and light mode, and were last tested with OpenCode 2.0.21 (October 2026).

Every theme is checked on each push by [`scripts/validate.js`](scripts/validate.js): it must use the OpenCode theme `$schema`, define all 50 color tokens with dark and light variants (OpenCode 2 silently ignores themes that miss some of them), and keep key text/background pairs at a contrast ratio of at least 1.8:1. That ratio is a legibility floor, not a WCAG accessibility check.

## The 13 Retro Themes

| Theme | Inspiration | Mood |
| --- | --- | --- |
| [`w95-classic`](themes/w95-classic.json) | Windows 95 | Teal desktop, gray panels, old desktop UI |
| [`norton-commander`](themes/norton-commander.json) | Norton Commander | Blue file-manager terminal, high contrast |
| [`ibm-old-terminal`](themes/ibm-old-terminal.json) | IBM PC terminal | Green phosphor, black screen, command-line focus |
| [`cga`](themes/cga.json) | CGA palette | Early PC color, hard contrast, retro cyan |
| [`theme-station-1`](themes/theme-station-1.json) | PlayStation 1 | Pale gray shell, muted UI, classic console feel |
| [`theme-station-2`](themes/theme-station-2.json) | PlayStation 2 | Deep black, blue aura, dark console boot energy |
| [`theme-cube`](themes/theme-cube.json) | Nintendo GameCube | Purple hardware, playful console tone |
| [`dot-matrix`](themes/dot-matrix.json) | Nintendo Game Boy | Pea-green LCD, four shades, handheld dot-matrix screen |
| [`family-computheme`](themes/family-computheme.json) | Nintendo Famicom | Cream, red, and vintage Japanese hardware |
| [`super-theme`](themes/super-theme.json) | Super Nintendo (SNES) | Soft gray, purple accents, classic SNES |
| [`super-color`](themes/super-color.json) | SNES (Super Nintendo) multicolor | Brighter console palette, playful controls |
| [`silicon-trace`](themes/silicon-trace.json) | PCB circuits | Chip traces, green board, hardware lab |
| [`faded-neon`](themes/faded-neon.json) | Worn neon | Dim glow, pink/green accents, late-night terminal |

> **Fixed-palette themes.** `cga`, `dot-matrix`, `faded-neon`, `ibm-old-terminal`, `norton-commander`, `super-color`, `super-theme`, and `w95-classic` keep the same palette in light and dark mode, like the original hardware.

---

## Theme Gallery

Click a theme name to open its JSON source file.

### Classic Computers

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Windows 95 teal, gray window chrome, and old desktop UI contrast.

![OpenCode terminal UI with the w95-classic theme: Windows 95 teal desktop and gray panels](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

Blue terminal panels inspired by the classic file-manager interface.

![OpenCode terminal UI with the norton-commander theme: blue Norton Commander file-manager panels](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

Black screen, green phosphor, and minimal IBM terminal atmosphere.

![OpenCode terminal UI with the ibm-old-terminal theme: green phosphor text on a black IBM screen](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

Early PC color logic with bold cyan, dark contrast, and CGA-era sharpness.

![OpenCode terminal UI with the cga theme: CGA cyan, magenta and white on black](assets/screenshots/cga.png)

</td>
</tr>
</table>

---

### Consoles & Video Games

<table>
<tr>
<td width="50%" valign="top">

#### [`theme-station-1`](themes/theme-station-1.json)

Soft PlayStation gray with muted contrast and a classic console surface.

![OpenCode terminal UI with the theme-station-1 theme: pale gray PlayStation 1 palette](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

Dark PS2-inspired palette with deep blacks and electric blue highlights.

![OpenCode terminal UI with the theme-station-2 theme: deep black PlayStation 2 palette with blue-green highlights](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

GameCube purple and console-era saturation with a playful hardware feel.

![OpenCode terminal UI with the theme-cube theme: Nintendo GameCube purple](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

Game Boy pea-green LCD with four shades of dot-matrix contrast.

![OpenCode terminal UI with the dot-matrix theme: four-shade green Game Boy LCD](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Famicom cream and red, tuned for a warm vintage console look.

![OpenCode terminal UI with the family-computheme theme: Famicom cream and red](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

Classic SNES gray with restrained purple accents and readable contrast.

![OpenCode terminal UI with the super-theme theme: Super Nintendo gray with purple accents](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

SNES multicolor controls translated into a brighter terminal palette.

![OpenCode terminal UI with the super-color theme: bright SNES multicolor palette](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### Circuit Board & Neon

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

Circuit-board greens and hardware-lab contrast for a PCB-inspired terminal.

![OpenCode terminal UI with the silicon-trace theme: green PCB circuit board with copper traces](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

Dim neon glow with worn pink and green accents for late-night sessions.

![OpenCode terminal UI with the faded-neon theme: dim mint and pink neon on a dark background](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## Install the Themes in OpenCode

### Option A — One-liner (no clone)

Download a single theme straight into your OpenCode themes folder. Replace `theme-name` with any theme from the table above:

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/main/themes/theme-name.json \
  -o ~/.config/opencode/themes/theme-name.json
```

### Option B — Install script

Clone the repo and run the installer to pick themes interactively or install them all:

```bash
git clone https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes.git
cd Inume-Opencode-Retro-Themes
./install.sh                    # interactive picker
./install.sh all                # install every theme
./install.sh cga w95-classic    # install specific themes
./install.sh --project all      # install into ./.opencode/themes instead
```

### Activate a Theme in OpenCode

Inside OpenCode, run `/themes` to open the theme selector ("Switch theme"), then pick your theme from the list by name (the file name without `.json`):

```text
/themes
```

Or set it as your default theme in `cli.json` (OpenCode 2.x):

```json
{
  "$schema": "https://opencode.ai/v2/cli.json",
  "theme": { "name": "theme-name" }
}
```

On OpenCode 1.x, the default theme goes in `tui.json` instead:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "theme-name"
}
```

OpenCode 2.x reads `tui.json` only once, to migrate it into `cli.json`.

OpenCode loads custom themes from `~/.config/opencode/themes/`, `<project-root>/.opencode/themes/`, and `./.opencode/themes/`. Later directories take precedence.

---

## License

[MIT](LICENSE) © 2026 [Gianluca Bernasconi](https://github.com/Gianlucabernasconi)
