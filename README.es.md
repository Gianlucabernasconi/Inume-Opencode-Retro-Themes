<div align="center">

# Inume Opencode Retro Themes

[English](README.md) · **Español** · [Português (Brasil)](README.pt-BR.md) · [Français](README.fr.md) · [Русский](README.ru.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

**13 temas de consolas retro y computadoras clásicas para [OpenCode](https://opencode.ai/), el agente de programación con IA para terminal.**

[![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue)](https://opencode.ai/)
[![Themes](https://img.shields.io/badge/themes-13-success)](#los-13-temas-retro)
[![Validate Themes](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml/badge.svg)](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

![Mosaico de los 13 temas retro de OpenCode: Windows 95, Norton Commander, terminal IBM, CGA, PlayStation 1 y 2, GameCube, Game Boy, Famicom, SNES, PCB y neón](assets/cover.png)

[Temas](#los-13-temas-retro) · [Galería](#galería-de-temas) · [Instalar](#instalar-los-temas-en-opencode) · [Activar](#activar-un-tema-en-opencode)

</div>

---

**Inume Opencode Retro Themes** es una colección de 13 temas gratuitos con licencia MIT para [OpenCode](https://opencode.ai/), el agente de programación con IA de código abierto para terminal (TUI). Cada tema recrea la apariencia de hardware y software clásicos — Windows 95, Norton Commander, terminales de fósforo IBM, la paleta CGA, PlayStation 1 y 2, la Nintendo GameCube, Game Boy, Famicom y SNES, placas de circuito PCB y neón desgastado — empaquetados como archivos JSON de tema que colocas en `~/.config/opencode/themes/`. Funcionan en OpenCode 1.x y 2.x, en modo oscuro y claro, y se probaron por última vez con OpenCode 2.0.21 (octubre de 2026).

Cada tema se comprueba en cada push con [`scripts/validate.js`](scripts/validate.js): debe usar el `$schema` de temas de OpenCode, definir los 50 tokens de color con variantes oscura y clara (OpenCode 2 ignora en silencio los temas a los que les falta alguno de ellos) y mantener los pares clave de texto y fondo con una relación de contraste de al menos 1.8:1. Esa relación es un piso de legibilidad, no una comprobación de accesibilidad WCAG.

## Los 13 temas retro

| Tema | Inspiración | Ambiente |
| --- | --- | --- |
| [`w95-classic`](themes/w95-classic.json) | Windows 95 | Escritorio verde azulado, paneles grises, interfaz de escritorio antigua |
| [`norton-commander`](themes/norton-commander.json) | Norton Commander | Terminal azul de gestor de archivos, alto contraste |
| [`ibm-old-terminal`](themes/ibm-old-terminal.json) | Terminal del IBM PC | Fósforo verde, pantalla negra, foco en la línea de comandos |
| [`cga`](themes/cga.json) | Paleta CGA | Color de PC temprano, contraste duro, cian retro |
| [`theme-station-1`](themes/theme-station-1.json) | PlayStation 1 | Carcasa gris pálida, interfaz apagada, sensación de consola clásica |
| [`theme-station-2`](themes/theme-station-2.json) | PlayStation 2 | Negro profundo, aura azul, energía del arranque de una consola oscura |
| [`theme-cube`](themes/theme-cube.json) | Nintendo GameCube | Hardware morado, tono de consola juguetón |
| [`dot-matrix`](themes/dot-matrix.json) | Nintendo Game Boy | LCD verde guisante, cuatro tonos, pantalla portátil de matriz de puntos |
| [`family-computheme`](themes/family-computheme.json) | Nintendo Famicom | Crema, rojo y hardware japonés vintage |
| [`super-theme`](themes/super-theme.json) | Super Nintendo (SNES) | Gris suave, acentos morados, SNES clásica |
| [`super-color`](themes/super-color.json) | SNES (Super Nintendo) multicolor | Paleta de consola más brillante, controles juguetones |
| [`silicon-trace`](themes/silicon-trace.json) | Circuitos PCB | Pistas de chip, placa verde, laboratorio de hardware |
| [`faded-neon`](themes/faded-neon.json) | Neón desgastado | Brillo tenue, acentos rosa y verde, terminal de madrugada |

> **Temas de paleta fija.** `cga`, `dot-matrix`, `faded-neon`, `ibm-old-terminal`, `norton-commander`, `super-color`, `super-theme` y `w95-classic` mantienen la misma paleta en modo claro y oscuro, como el hardware original.

---

## Galería de temas

Haz clic en el nombre de un tema para abrir su archivo JSON de origen.

### Computadoras clásicas

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Verde azulado de Windows 95, bordes de ventana grises y contraste de interfaz de escritorio antigua.

![Interfaz de terminal de OpenCode con el tema w95-classic: escritorio verde azulado de Windows 95 y paneles grises](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

Paneles de terminal azules inspirados en la interfaz clásica del gestor de archivos.

![Interfaz de terminal de OpenCode con el tema norton-commander: paneles azules del gestor de archivos Norton Commander](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

Pantalla negra, fósforo verde y una atmósfera minimalista de terminal IBM.

![Interfaz de terminal de OpenCode con el tema ibm-old-terminal: texto en fósforo verde sobre una pantalla IBM negra](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

Lógica de color de PC temprano con cian intenso, contraste oscuro y la nitidez de la era CGA.

![Interfaz de terminal de OpenCode con el tema cga: cian, magenta y blanco CGA sobre negro](assets/screenshots/cga.png)

</td>
</tr>
</table>

---

### Consolas y videojuegos

<table>
<tr>
<td width="50%" valign="top">

#### [`theme-station-1`](themes/theme-station-1.json)

Gris suave de PlayStation con contraste apagado y una superficie de consola clásica.

![Interfaz de terminal de OpenCode con el tema theme-station-1: paleta gris pálida de PlayStation 1](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

Paleta oscura inspirada en la PS2 con negros profundos y reflejos azul eléctrico.

![Interfaz de terminal de OpenCode con el tema theme-station-2: paleta negra profunda de PlayStation 2 con reflejos azul verdosos](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

Morado de GameCube y saturación de la era de las consolas con una sensación de hardware juguetón.

![Interfaz de terminal de OpenCode con el tema theme-cube: morado de Nintendo GameCube](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

LCD verde guisante de Game Boy con cuatro tonos de contraste de matriz de puntos.

![Interfaz de terminal de OpenCode con el tema dot-matrix: LCD verde de Game Boy en cuatro tonos](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Crema y rojo de Famicom, ajustados para un aspecto cálido de consola vintage.

![Interfaz de terminal de OpenCode con el tema family-computheme: crema y rojo de Famicom](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

Gris clásico de SNES con acentos morados contenidos y contraste legible.

![Interfaz de terminal de OpenCode con el tema super-theme: gris de Super Nintendo con acentos morados](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

Controles multicolor de SNES trasladados a una paleta de terminal más brillante.

![Interfaz de terminal de OpenCode con el tema super-color: paleta multicolor brillante de SNES](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### Placas de circuito y neón

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

Verdes de placa de circuito y contraste de laboratorio de hardware para una terminal inspirada en PCB.

![Interfaz de terminal de OpenCode con el tema silicon-trace: placa de circuito PCB verde con pistas de cobre](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

Brillo de neón tenue con acentos rosa y verde desgastados para sesiones de madrugada.

![Interfaz de terminal de OpenCode con el tema faded-neon: neón menta y rosa tenue sobre fondo oscuro](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## Instalar los temas en OpenCode

### Opción A — Una sola línea (sin clonar)

Descarga un solo tema directamente en tu carpeta de temas de OpenCode. Reemplaza `theme-name` por cualquier tema de la tabla anterior:

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/main/themes/theme-name.json \
  -o ~/.config/opencode/themes/theme-name.json
```

### Opción B — Script de instalación

Clona el repositorio y ejecuta el instalador para elegir temas de forma interactiva o instalarlos todos:

```bash
git clone https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes.git
cd Inume-Opencode-Retro-Themes
./install.sh                    # selector interactivo
./install.sh all                # instala todos los temas
./install.sh cga w95-classic    # instala temas concretos
./install.sh --project all      # instala en ./.opencode/themes en su lugar
```

### Activar un tema en OpenCode

Dentro de OpenCode, ejecuta `/themes` para abrir el selector de temas ("Switch theme") y luego elige tu tema de la lista por su nombre (el nombre del archivo sin `.json`):

```text
/themes
```

O configúralo como tema predeterminado en `cli.json` (OpenCode 2.x):

```json
{
  "$schema": "https://opencode.ai/v2/cli.json",
  "theme": { "name": "theme-name" }
}
```

En OpenCode 1.x, el tema predeterminado va en `tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "theme-name"
}
```

OpenCode 2.x lee `tui.json` una sola vez, para migrarlo a `cli.json`.

OpenCode carga los temas personalizados desde `~/.config/opencode/themes/`, `<project-root>/.opencode/themes/` y `./.opencode/themes/`. Los directorios posteriores tienen prioridad.

---

## Licencia

[MIT](LICENSE) © 2026 [Gianluca Bernasconi](https://github.com/Gianlucabernasconi)

Esta es una traducción del README en inglés (octubre de 2026). Si hay diferencias, la versión de referencia es [README.md](README.md).