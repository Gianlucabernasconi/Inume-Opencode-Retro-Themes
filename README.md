<div align="center">

# Inume Opencode Retro Themes

**Retro console and classic computer themes for [OpenCode](https://opencode.ai/).**

![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue?logo=code)
![Themes](https://img.shields.io/badge/themes-13-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

![The 13 Inume Opencode Retro Themes side by side](assets/cover.png)

Classic machines, old CRT palettes, console dashboards, worn neon, and chunky UI nostalgia translated into modern OpenCode themes.

</div>

---

**Inume Opencode Retro Themes** is a collection of 13 free, MIT-licensed themes for [OpenCode](https://opencode.ai/), the open-source terminal AI coding agent (TUI). Each theme recreates the look of classic hardware — Windows 95, the CGA palette, SNES and PlayStation consoles, the Nintendo GameCube, Game Boy, and Famicom, IBM phosphor terminals, PCB circuit boards, and worn neon — packaged as JSON theme files you drop into `~/.config/opencode/themes/`.

## Theme Lineup

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
| [`super-theme`](themes/super-theme.json) | Super Nintendo | Soft gray, purple accents, classic SNES |
| [`super-color`](themes/super-color.json) | SNES multicolor | Brighter console palette, playful controls |
| [`silicon-trace`](themes/silicon-trace.json) | PCB circuits | Chip traces, green board, hardware lab |
| [`faded-neon`](themes/faded-neon.json) | Worn neon | Dim glow, pink/green accents, late-night terminal |

> **Fixed-palette themes.** Some themes keep the same palette in light and dark mode, just like the original hardware. See [which themes look the same in light and dark mode](#which-themes-look-the-same-in-light-and-dark-mode).

---

## Quick Installation

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

### Activate

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

## Theme Gallery

Click a theme name to open its JSON source file.

### Classic Computers

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Windows 95 teal, gray window chrome, and old desktop UI contrast.

![W95 Classic preview](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

Blue terminal panels inspired by the classic file-manager interface.

![Norton Commander preview](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

Black screen, green phosphor, and minimal IBM terminal atmosphere.

![IBM Old Terminal preview](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

Early PC color logic with bold cyan, dark contrast, and CGA-era sharpness.

![CGA preview](assets/screenshots/cga.png)

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

![Theme Station 1 preview](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

Dark PS2-inspired palette with deep blacks and electric blue highlights.

![Theme Station 2 preview](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

GameCube purple and console-era saturation with a playful hardware feel.

![Theme Cube preview](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

Game Boy pea-green LCD with four shades of dot-matrix contrast.

![Dot Matrix preview](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Famicom cream and red, tuned for a warm vintage console look.

![Family Computheme preview](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

Classic SNES gray with restrained purple accents and readable contrast.

![Super Theme preview](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

SNES multicolor controls translated into a brighter terminal palette.

![Super Color preview](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### Special Themes

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

Circuit-board greens and hardware-lab contrast for a PCB-inspired terminal.

![Silicon Trace preview](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

Dim neon glow with worn pink and green accents for late-night sessions.

![Faded Neon preview](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## FAQ

### What is OpenCode?

OpenCode is an open-source AI coding agent built for the terminal (a TUI), available at [opencode.ai](https://opencode.ai/). It supports custom JSON themes loaded from `~/.config/opencode/themes/`.

### Are there retro or vintage themes for OpenCode?

Yes. This repository provides retro themes inspired by classic computers and game consoles, including Windows 95, the CGA palette, SNES, PlayStation 1 and 2, GameCube, Game Boy, Famicom, and IBM terminals.

### How do I install an OpenCode theme?

Copy any theme JSON file into `~/.config/opencode/themes/`, then run `/themes` inside OpenCode and pick it from the selector. See [Quick Installation](#quick-installation) for one-liner and script options.

### How do I switch the active OpenCode theme?

Run `/themes` inside OpenCode and choose the theme from the selector, or set it as your default in `cli.json` with `"theme": { "name": "theme-name" }` (OpenCode 2.x) or in `tui.json` with `"theme": "theme-name"` (OpenCode 1.x). The theme name is the file name without `.json`.

### Which themes look the same in light and dark mode?

The fixed-palette themes — `cga`, `dot-matrix`, `faded-neon`, `ibm-old-terminal`, `norton-commander`, `super-color`, `super-theme`, and `w95-classic` — render identically in light and dark mode to preserve the original hardware look. The rest change their palette according to the mode: `silicon-trace`, `theme-cube`, and `theme-station-2` switch the whole palette, while `family-computheme` and `theme-station-1` keep a light background in both modes and only adjust a few tokens.

### Can I create my own OpenCode theme?

Yes. Any of these JSON files is a good starting template — copy one, edit the `defs` palette and `theme` tokens, and drop it into `~/.config/opencode/themes/`. See the [official theme docs](https://opencode.ai/docs/themes/).

---

## License

[MIT](LICENSE)
