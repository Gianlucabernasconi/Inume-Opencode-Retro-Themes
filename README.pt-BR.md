<div align="center">

# Inume Opencode Retro Themes

[English](README.md) · [Español](README.es.md) · **Português (Brasil)** · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

**13 temas retrô de consoles e computadores clássicos para o [OpenCode](https://opencode.ai/), o agente de programação com IA no terminal.**

[![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue)](https://opencode.ai/)
[![Themes](https://img.shields.io/badge/themes-13-success)](#os-13-temas-retrô)
[![Validate Themes](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml/badge.svg)](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

![Mosaico dos 13 temas retrô do OpenCode: Windows 95, Norton Commander, terminal IBM, CGA, PlayStation 1 e 2, GameCube, Game Boy, Famicom, SNES, PCB e neon](assets/cover.png)

[Temas](#os-13-temas-retrô) · [Galeria](#galeria-de-temas) · [Instalação](#instalar-os-temas-no-opencode) · [Ativação](#ativar-um-tema-no-opencode)

</div>

---

**Inume Opencode Retro Themes** é uma coleção de 13 temas gratuitos, licenciados sob MIT, para o [OpenCode](https://opencode.ai/), o agente de programação com IA de código aberto para terminal (TUI). Cada tema recria a aparência de hardware e software clássicos — Windows 95, Norton Commander, terminais de fósforo IBM, a paleta CGA, PlayStation 1 e 2, o Nintendo GameCube, Game Boy, Famicom e SNES, placas de circuito PCB e neon desgastado — e vem como um arquivo de tema JSON que você coloca em `~/.config/opencode/themes/`. Eles funcionam no OpenCode 1.x e 2.x, nos modos escuro e claro, e foram testados pela última vez com o OpenCode 2.0.21 (outubro de 2026).

Todo tema é verificado a cada push pelo [`scripts/validate.js`](scripts/validate.js): ele precisa usar o `$schema` de tema do OpenCode, definir os 50 tokens de cor com variantes escura e clara (o OpenCode 2 ignora silenciosamente temas que não tenham alguns deles) e manter os principais pares de texto/fundo com uma taxa de contraste de pelo menos 1.8:1. Essa taxa é um piso de legibilidade, não uma verificação de acessibilidade WCAG.

## Os 13 temas retrô

| Tema | Inspiração | Atmosfera |
| --- | --- | --- |
| [`w95-classic`](themes/w95-classic.json) | Windows 95 | Área de trabalho verde-azulada, painéis cinza, interface de desktop antiga |
| [`norton-commander`](themes/norton-commander.json) | Norton Commander | Terminal azul de gerenciador de arquivos, alto contraste |
| [`ibm-old-terminal`](themes/ibm-old-terminal.json) | Terminal IBM PC | Fósforo verde, tela preta, foco na linha de comando |
| [`cga`](themes/cga.json) | Paleta CGA | Cor dos primeiros PCs, contraste duro, ciano retrô |
| [`theme-station-1`](themes/theme-station-1.json) | PlayStation 1 | Carcaça cinza-clara, interface atenuada, sensação de console clássico |
| [`theme-station-2`](themes/theme-station-2.json) | PlayStation 2 | Preto profundo, aura azul, a energia do boot de um console escuro |
| [`theme-cube`](themes/theme-cube.json) | Nintendo GameCube | Hardware roxo, tom lúdico de console |
| [`dot-matrix`](themes/dot-matrix.json) | Nintendo Game Boy | LCD verde-ervilha, quatro tons, tela dot-matrix portátil |
| [`family-computheme`](themes/family-computheme.json) | Nintendo Famicom | Creme, vermelho e hardware japonês vintage |
| [`super-theme`](themes/super-theme.json) | Super Nintendo (SNES) | Cinza suave, detalhes roxos, SNES clássico |
| [`super-color`](themes/super-color.json) | SNES (Super Nintendo) multicolorido | Paleta de console mais viva, controles lúdicos |
| [`silicon-trace`](themes/silicon-trace.json) | Circuitos PCB | Trilhas de chip, placa verde, laboratório de hardware |
| [`faded-neon`](themes/faded-neon.json) | Neon desgastado | Brilho tênue, detalhes rosa/verde, terminal de madrugada |

> **Temas de paleta fixa.** `cga`, `dot-matrix`, `faded-neon`, `ibm-old-terminal`, `norton-commander`, `super-color`, `super-theme` e `w95-classic` mantêm a mesma paleta nos modos claro e escuro, como o hardware original.

---

## Galeria de temas

Clique no nome de um tema para abrir seu arquivo-fonte JSON.

### Computadores clássicos

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Verde-azulado do Windows 95, molduras de janela cinza e o contraste da interface de desktop antiga.

![Interface de terminal do OpenCode com o tema w95-classic: área de trabalho verde-azulada do Windows 95 e painéis cinza](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

Painéis de terminal azuis inspirados na interface clássica do gerenciador de arquivos.

![Interface de terminal do OpenCode com o tema norton-commander: painéis azuis do gerenciador de arquivos Norton Commander](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

Tela preta, fósforo verde e uma atmosfera minimalista de terminal IBM.

![Interface de terminal do OpenCode com o tema ibm-old-terminal: texto em fósforo verde sobre uma tela IBM preta](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

Lógica de cor dos primeiros PCs com ciano vibrante, contraste escuro e a nitidez da era CGA.

![Interface de terminal do OpenCode com o tema cga: ciano, magenta e branco da CGA sobre preto](assets/screenshots/cga.png)

</td>
</tr>
</table>

---

### Consoles e videogames

<table>
<tr>
<td width="50%" valign="top">

#### [`theme-station-1`](themes/theme-station-1.json)

Cinza suave do PlayStation com contraste atenuado e uma superfície de console clássica.

![Interface de terminal do OpenCode com o tema theme-station-1: paleta cinza-clara do PlayStation 1](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

Paleta escura inspirada no PS2 com pretos profundos e destaques em azul elétrico.

![Interface de terminal do OpenCode com o tema theme-station-2: paleta preta profunda do PlayStation 2 com destaques em azul-esverdeado](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

Roxo do GameCube e saturação da era dos consoles, com uma sensação lúdica de hardware.

![Interface de terminal do OpenCode com o tema theme-cube: roxo do Nintendo GameCube](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

LCD verde-ervilha do Game Boy com quatro tons de contraste dot-matrix.

![Interface de terminal do OpenCode com o tema dot-matrix: LCD verde do Game Boy em quatro tons](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Creme e vermelho do Famicom, ajustados para um visual quente de console vintage.

![Interface de terminal do OpenCode com o tema family-computheme: creme e vermelho do Famicom](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

Cinza clássico do SNES com detalhes roxos discretos e contraste legível.

![Interface de terminal do OpenCode com o tema super-theme: cinza do Super Nintendo com detalhes roxos](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

Controles multicoloridos do SNES traduzidos em uma paleta de terminal mais viva.

![Interface de terminal do OpenCode com o tema super-color: paleta multicolorida e vibrante do SNES](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### Placa de circuito e neon

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

Verdes de placa de circuito e contraste de laboratório de hardware para um terminal inspirado em PCB.

![Interface de terminal do OpenCode com o tema silicon-trace: placa de circuito PCB verde com trilhas de cobre](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

Brilho de neon tênue com detalhes rosa e verde desgastados para sessões de madrugada.

![Interface de terminal do OpenCode com o tema faded-neon: neon verde-menta e rosa tênues sobre fundo escuro](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## Instalar os temas no OpenCode

### Opção A — Comando único (sem clonar)

Baixe um único tema diretamente na sua pasta de temas do OpenCode. Substitua `theme-name` por qualquer tema da tabela acima:

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/main/themes/theme-name.json \
  -o ~/.config/opencode/themes/theme-name.json
```

### Opção B — Script de instalação

Clone o repositório e execute o instalador para escolher temas interativamente ou instalar todos eles:

```bash
git clone https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes.git
cd Inume-Opencode-Retro-Themes
./install.sh                    # seletor interativo
./install.sh all                # instala todos os temas
./install.sh cga w95-classic    # instala temas específicos
./install.sh --project all      # instala em ./.opencode/themes
```

### Ativar um tema no OpenCode

Dentro do OpenCode, execute `/themes` para abrir o seletor de temas ("Switch theme") e escolha o seu tema na lista pelo nome (o nome do arquivo sem `.json`):

```text
/themes
```

Ou defina-o como seu tema padrão em `cli.json` (OpenCode 2.x):

```json
{
  "$schema": "https://opencode.ai/v2/cli.json",
  "theme": { "name": "theme-name" }
}
```

No OpenCode 1.x, o tema padrão fica em `tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "theme-name"
}
```

O OpenCode 2.x lê o `tui.json` apenas uma vez, para migrá-lo para o `cli.json`.

O OpenCode carrega temas personalizados de `~/.config/opencode/themes/`, `<project-root>/.opencode/themes/` e `./.opencode/themes/`. Os diretórios posteriores têm precedência.

---

## Licença

[MIT](LICENSE) © 2026 [Gianluca Bernasconi](https://github.com/Gianlucabernasconi)

Esta é uma tradução do README em inglês (outubro de 2026). Em caso de divergência, a versão de referência é o [README.md](README.md).