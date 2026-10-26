<div align="center">

# Inume Opencode Retro Themes

[English](README.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · **Français** · [Русский](README.ru.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

**13 thèmes de consoles rétro et d'ordinateurs classiques pour [OpenCode](https://opencode.ai/), l'agent de codage IA en terminal.**

[![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue)](https://opencode.ai/)
[![Themes](https://img.shields.io/badge/themes-13-success)](#les-13-thèmes-rétro)
[![Validate Themes](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml/badge.svg)](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

![Mosaïque des 13 thèmes rétro OpenCode : Windows 95, Norton Commander, terminal IBM, CGA, PlayStation 1 et 2, GameCube, Game Boy, Famicom, SNES, PCB et néon](assets/cover.png)

[Thèmes](#les-13-thèmes-rétro) · [Galerie](#galerie-des-thèmes) · [Installer](#installer-les-thèmes-dans-opencode) · [Activer](#activer-un-thème-dans-opencode)

</div>

---

**Inume Opencode Retro Themes** est une collection de 13 thèmes gratuits, sous licence MIT, pour [OpenCode](https://opencode.ai/), l'agent de codage IA en terminal (TUI) open source. Chaque thème recrée l'apparence d'un matériel ou d'un logiciel classique — Windows 95, Norton Commander, les terminaux à phosphore IBM, la palette CGA, la PlayStation 1 et 2, la Nintendo GameCube, la Game Boy, la Famicom et la SNES, les cartes de circuits imprimés PCB et un néon usé — chacun conditionné en fichier de thème JSON que vous déposez dans `~/.config/opencode/themes/`. Ils fonctionnent sur OpenCode 1.x et 2.x, en mode sombre et clair, et ont été testés pour la dernière fois avec OpenCode 2.0.21 (octobre 2026).

Chaque thème est vérifié à chaque push par [`scripts/validate.js`](scripts/validate.js) : il doit utiliser le `$schema` des thèmes OpenCode, définir les 50 jetons de couleur avec des variantes sombre et claire (OpenCode 2 ignore silencieusement les thèmes auxquels il en manque certains) et maintenir les paires texte/fond essentielles à un rapport de contraste d'au moins 1.8:1. Ce rapport est un plancher de lisibilité, pas un contrôle d'accessibilité WCAG.

## Les 13 thèmes rétro

| Thème | Inspiration | Ambiance |
| --- | --- | --- |
| [`w95-classic`](themes/w95-classic.json) | Windows 95 | Bureau bleu canard, panneaux gris, ancienne interface de bureau |
| [`norton-commander`](themes/norton-commander.json) | Norton Commander | Terminal de gestionnaire de fichiers bleu, contraste élevé |
| [`ibm-old-terminal`](themes/ibm-old-terminal.json) | Terminal IBM PC | Phosphore vert, écran noir, orientation ligne de commande |
| [`cga`](themes/cga.json) | Palette CGA | Couleurs des débuts du PC, contraste marqué, cyan rétro |
| [`theme-station-1`](themes/theme-station-1.json) | PlayStation 1 | Boîtier gris pâle, interface sobre, sensation de console classique |
| [`theme-station-2`](themes/theme-station-2.json) | PlayStation 2 | Noir profond, aura bleue, énergie de démarrage d'une console sombre |
| [`theme-cube`](themes/theme-cube.json) | Nintendo GameCube | Matériel violet, ton ludique de console |
| [`dot-matrix`](themes/dot-matrix.json) | Nintendo Game Boy | Écran LCD vert petit pois, quatre nuances, écran matriciel portatif |
| [`family-computheme`](themes/family-computheme.json) | Nintendo Famicom | Crème, rouge et matériel japonais d'époque |
| [`super-theme`](themes/super-theme.json) | Super Nintendo (SNES) | Gris doux, accents violets, SNES classique |
| [`super-color`](themes/super-color.json) | SNES (Super Nintendo) multicolore | Palette de console plus vive, commandes ludiques |
| [`silicon-trace`](themes/silicon-trace.json) | Circuits PCB | Pistes de puces, carte verte, laboratoire matériel |
| [`faded-neon`](themes/faded-neon.json) | Néon usé | Lueur tamisée, accents rose/vert, terminal de fin de nuit |

> **Thèmes à palette fixe.** `cga`, `dot-matrix`, `faded-neon`, `ibm-old-terminal`, `norton-commander`, `super-color`, `super-theme` et `w95-classic` conservent la même palette en mode clair et sombre, comme le matériel d'origine.

---

## Galerie des thèmes

Cliquez sur le nom d'un thème pour ouvrir son fichier source JSON.

### Ordinateurs classiques

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Bleu canard de Windows 95, habillage de fenêtre gris et contraste de l'ancienne interface de bureau.

![Interface de terminal OpenCode avec le thème w95-classic : bureau bleu canard Windows 95 et panneaux gris](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

Panneaux de terminal bleus inspirés de l'interface classique du gestionnaire de fichiers.

![Interface de terminal OpenCode avec le thème norton-commander : panneaux bleus de gestionnaire de fichiers Norton Commander](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

Écran noir, phosphore vert et atmosphère minimale de terminal IBM.

![Interface de terminal OpenCode avec le thème ibm-old-terminal : texte au phosphore vert sur un écran IBM noir](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

Logique de couleur des débuts du PC, avec un cyan franc, un contraste sombre et la netteté de l'ère CGA.

![Interface de terminal OpenCode avec le thème cga : cyan, magenta et blanc CGA sur noir](assets/screenshots/cga.png)

</td>
</tr>
</table>

---

### Consoles et jeux vidéo

<table>
<tr>
<td width="50%" valign="top">

#### [`theme-station-1`](themes/theme-station-1.json)

Gris PlayStation doux, contraste sobre et surface de console classique.

![Interface de terminal OpenCode avec le thème theme-station-1 : palette gris pâle de la PlayStation 1](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

Palette sombre inspirée de la PS2, avec des noirs profonds et des reflets bleu électrique.

![Interface de terminal OpenCode avec le thème theme-station-2 : palette noir profond de la PlayStation 2 avec des reflets bleu-vert](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

Violet GameCube et saturation de l'ère des consoles, pour une sensation de matériel ludique.

![Interface de terminal OpenCode avec le thème theme-cube : violet de la Nintendo GameCube](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

Écran LCD vert petit pois de la Game Boy, avec quatre nuances de contraste matriciel.

![Interface de terminal OpenCode avec le thème dot-matrix : écran LCD vert à quatre nuances de la Game Boy](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Crème et rouge Famicom, réglés pour un aspect chaleureux de console d'époque.

![Interface de terminal OpenCode avec le thème family-computheme : crème et rouge Famicom](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

Gris SNES classique, accents violets discrets et contraste lisible.

![Interface de terminal OpenCode avec le thème super-theme : gris Super Nintendo avec des accents violets](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

Commandes multicolores de la SNES transposées en une palette de terminal plus vive.

![Interface de terminal OpenCode avec le thème super-color : palette multicolore vive de la SNES](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### Circuit imprimé et néon

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

Verts de carte électronique et contraste de laboratoire matériel pour un terminal inspiré des PCB.

![Interface de terminal OpenCode avec le thème silicon-trace : carte de circuit imprimé PCB verte avec des pistes cuivrées](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

Lueur néon tamisée, accents rose et vert usés, pour les sessions de fin de nuit.

![Interface de terminal OpenCode avec le thème faded-neon : néon menthe et rose tamisé sur fond sombre](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## Installer les thèmes dans OpenCode

### Option A — Une seule ligne (sans clonage)

Téléchargez un seul thème directement dans votre dossier de thèmes OpenCode. Remplacez `theme-name` par n'importe quel thème du tableau ci-dessus :

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/main/themes/theme-name.json \
  -o ~/.config/opencode/themes/theme-name.json
```

### Option B — Script d'installation

Clonez le dépôt et lancez le script d'installation pour choisir les thèmes de façon interactive ou les installer tous :

```bash
git clone https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes.git
cd Inume-Opencode-Retro-Themes
./install.sh                    # sélecteur interactif
./install.sh all                # installer tous les thèmes
./install.sh cga w95-classic    # installer des thèmes précis
./install.sh --project all      # installer plutôt dans ./.opencode/themes
```

### Activer un thème dans OpenCode

Dans OpenCode, exécutez `/themes` pour ouvrir le sélecteur de thèmes ("Switch theme"), puis choisissez votre thème dans la liste par son nom (le nom du fichier sans `.json`) :

```text
/themes
```

Ou définissez-le comme thème par défaut dans `cli.json` (OpenCode 2.x) :

```json
{
  "$schema": "https://opencode.ai/v2/cli.json",
  "theme": { "name": "theme-name" }
}
```

Sur OpenCode 1.x, le thème par défaut va dans `tui.json` à la place :

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "theme-name"
}
```

OpenCode 2.x ne lit `tui.json` qu'une seule fois, pour le migrer vers `cli.json`.

OpenCode charge les thèmes personnalisés depuis `~/.config/opencode/themes/`, `<project-root>/.opencode/themes/` et `./.opencode/themes/`. Les répertoires suivants ont la priorité.

---

## Licence

[MIT](LICENSE) © 2026 [Gianluca Bernasconi](https://github.com/Gianlucabernasconi)

Cette page est une traduction du README en anglais (octobre 2026). En cas de différence, la version de référence est [README.md](README.md).