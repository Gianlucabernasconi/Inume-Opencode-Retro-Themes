<div align="center">

# Inume Opencode Retro Themes

[English](README.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Français](README.fr.md) · **Русский** · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

**13 ретро-тем в стиле консолей и классических компьютеров для [OpenCode](https://opencode.ai/) — терминального AI-агента для программирования.**

[![OpenCode](https://img.shields.io/badge/OpenCode-Themes-blue)](https://opencode.ai/)
[![Themes](https://img.shields.io/badge/themes-13-success)](#13-ретро-тем)
[![Validate Themes](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml/badge.svg)](https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

![Мозаика из 13 ретро-тем OpenCode: Windows 95, Norton Commander, терминал IBM, CGA, PlayStation 1 и 2, GameCube, Game Boy, Famicom, SNES, печатная плата и неон](assets/cover.png)

[Темы](#13-ретро-тем) · [Галерея](#галерея-тем) · [Установка](#установка-тем-в-opencode) · [Активация](#активация-темы-в-opencode)

</div>

---

**Inume Opencode Retro Themes** — это коллекция из 13 бесплатных тем под лицензией MIT для [OpenCode](https://opencode.ai/), открытого терминального AI-агента для программирования (TUI). Каждая тема воссоздаёт облик классического железа и софта — Windows 95, Norton Commander, фосфорных терминалов IBM, палитры CGA, PlayStation 1 и 2, Nintendo GameCube, Game Boy, Famicom и SNES, печатных плат (PCB) и выцветшего неона, — и поставляется в виде JSON-файлов темы, которые вы кладёте в `~/.config/opencode/themes/`. Они работают в OpenCode 1.x и 2.x, в тёмном и светлом режиме, и последний раз проверялись на OpenCode 2.0.21 (октябрь 2026).

Каждая тема проверяется при каждом push скриптом [`scripts/validate.js`](scripts/validate.js): она должна использовать `$schema` темы OpenCode, определять все 50 цветовых токенов с тёмным и светлым вариантами (OpenCode 2 молча игнорирует темы, в которых некоторых из них нет) и держать контраст ключевых пар текст/фон не ниже 1.8:1. Это соотношение — нижняя граница читаемости, а не проверка доступности по WCAG.

## 13 ретро-тем

| Тема | Вдохновение | Настроение |
| --- | --- | --- |
| [`w95-classic`](themes/w95-classic.json) | Windows 95 | Бирюзовый рабочий стол, серые панели, интерфейс старой настольной ОС |
| [`norton-commander`](themes/norton-commander.json) | Norton Commander | Синий терминал файлового менеджера, высокий контраст |
| [`ibm-old-terminal`](themes/ibm-old-terminal.json) | Терминал IBM PC | Зелёный фосфор, чёрный экран, акцент на командной строке |
| [`cga`](themes/cga.json) | Палитра CGA | Ранний цвет в ПК, жёсткий контраст, ретро-циан |
| [`theme-station-1`](themes/theme-station-1.json) | PlayStation 1 | Бледно-серый корпус, приглушённый интерфейс, ощущение классической консоли |
| [`theme-station-2`](themes/theme-station-2.json) | PlayStation 2 | Глубокий чёрный, синяя аура, энергия загрузки тёмной консоли |
| [`theme-cube`](themes/theme-cube.json) | Nintendo GameCube | Фиолетовое железо, игривый консольный тон |
| [`dot-matrix`](themes/dot-matrix.json) | Nintendo Game Boy | Салатовый LCD, четыре оттенка, экран карманной точечно-матричной консоли |
| [`family-computheme`](themes/family-computheme.json) | Nintendo Famicom | Кремовый, красный и винтажное японское железо |
| [`super-theme`](themes/super-theme.json) | Super Nintendo (SNES) | Мягкий серый, фиолетовые акценты, классическая SNES |
| [`super-color`](themes/super-color.json) | SNES (Super Nintendo) в нескольких цветах | Более яркая палитра консоли, игривые элементы управления |
| [`silicon-trace`](themes/silicon-trace.json) | Печатные платы (PCB) | Дорожки чипов, зелёная плата, аппаратная лаборатория |
| [`faded-neon`](themes/faded-neon.json) | Выцветший неон | Тусклое свечение, розовые и зелёные акценты, ночной терминал |

> **Темы с фиксированной палитрой.** `cga`, `dot-matrix`, `faded-neon`, `ibm-old-terminal`, `norton-commander`, `super-color`, `super-theme` и `w95-classic` сохраняют одну и ту же палитру в светлом и тёмном режиме, как оригинальное железо.

---

## Галерея тем

Нажмите на название темы, чтобы открыть её исходный JSON-файл.

### Классические компьютеры

<table>
<tr>
<td width="50%" valign="top">

#### [`w95-classic`](themes/w95-classic.json)

Бирюзовый Windows 95, серые рамки окон и контраст интерфейса старой настольной ОС.

![Интерфейс терминала OpenCode с темой w95-classic: бирюзовый рабочий стол Windows 95 и серые панели](assets/screenshots/w95-classic.png)

</td>
<td width="50%" valign="top">

#### [`norton-commander`](themes/norton-commander.json)

Синие панели терминала, вдохновлённые интерфейсом классического файлового менеджера.

![Интерфейс терминала OpenCode с темой norton-commander: синие панели файлового менеджера Norton Commander](assets/screenshots/norton-commander.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`ibm-old-terminal`](themes/ibm-old-terminal.json)

Чёрный экран, зелёный фосфор и минималистичная атмосфера терминала IBM.

![Интерфейс терминала OpenCode с темой ibm-old-terminal: зелёный фосфорный текст на чёрном экране IBM](assets/screenshots/ibm-old-terminal.png)

</td>
<td width="50%" valign="top">

#### [`cga`](themes/cga.json)

Логика раннего цвета в ПК: смелый циан, тёмный контраст и резкость эпохи CGA.

![Интерфейс терминала OpenCode с темой cga: циан, маджента и белый на чёрном в стиле CGA](assets/screenshots/cga.png)

</td>
</tr>
</table>

---

### Консоли и видеоигры

<table>
<tr>
<td width="50%" valign="top">

#### [`theme-station-1`](themes/theme-station-1.json)

Мягкий серый PlayStation с приглушённым контрастом и поверхностью классической консоли.

![Интерфейс терминала OpenCode с темой theme-station-1: бледно-серая палитра PlayStation 1](assets/screenshots/theme-station-1.png)

</td>
<td width="50%" valign="top">

#### [`theme-station-2`](themes/theme-station-2.json)

Тёмная палитра в духе PS2: глубокий чёрный и электрик-синие блики.

![Интерфейс терминала OpenCode с темой theme-station-2: глубокая чёрная палитра PlayStation 2 с сине-зелёными бликами](assets/screenshots/theme-station-2.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`theme-cube`](themes/theme-cube.json)

Фиолетовый GameCube и насыщенность консольной эпохи с игривым ощущением железа.

![Интерфейс терминала OpenCode с темой theme-cube: фиолетовый Nintendo GameCube](assets/screenshots/theme-cube.png)

</td>
<td width="50%" valign="top">

#### [`dot-matrix`](themes/dot-matrix.json)

Салатовый LCD Game Boy с контрастом из четырёх оттенков точечной матрицы.

![Интерфейс терминала OpenCode с темой dot-matrix: зелёный LCD Game Boy с четырьмя оттенками](assets/screenshots/dot-matrix.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`family-computheme`](themes/family-computheme.json)

Кремовый и красный Famicom, настроенные на тёплый винтажный вид консоли.

![Интерфейс терминала OpenCode с темой family-computheme: кремовый и красный Famicom](assets/screenshots/family-computheme.png)

</td>
<td width="50%" valign="top">

#### [`super-theme`](themes/super-theme.json)

Классический серый SNES со сдержанными фиолетовыми акцентами и читаемым контрастом.

![Интерфейс терминала OpenCode с темой super-theme: серый Super Nintendo с фиолетовыми акцентами](assets/screenshots/super-theme.png)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### [`super-color`](themes/super-color.json)

Многоцветные элементы управления SNES, переведённые в более яркую палитру терминала.

![Интерфейс терминала OpenCode с темой super-color: яркая многоцветная палитра SNES](assets/screenshots/super-color.png)

</td>
<td width="50%"></td>
</tr>
</table>

---

### Печатная плата и неон

<table>
<tr>
<td width="50%" valign="top">

#### [`silicon-trace`](themes/silicon-trace.json)

Зелёные тона печатной платы и контраст аппаратной лаборатории для терминала в духе PCB.

![Интерфейс терминала OpenCode с темой silicon-trace: зелёная печатная плата PCB с медными дорожками](assets/screenshots/silicon-trace.png)

</td>
<td width="50%" valign="top">

#### [`faded-neon`](themes/faded-neon.json)

Тусклое неоновое свечение с выцветшими розовыми и зелёными акцентами для ночных сессий.

![Интерфейс терминала OpenCode с темой faded-neon: тусклый мятный и розовый неон на тёмном фоне](assets/screenshots/faded-neon.png)

</td>
</tr>
</table>

---

## Установка тем в OpenCode

### Вариант A — одна команда (без клонирования)

Скачайте одну тему прямо в папку тем OpenCode. Замените `theme-name` на любую тему из таблицы выше:

```bash
mkdir -p ~/.config/opencode/themes
curl -fsSL https://raw.githubusercontent.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes/main/themes/theme-name.json \
  -o ~/.config/opencode/themes/theme-name.json
```

### Вариант B — скрипт установки

Клонируйте репозиторий и запустите установщик, чтобы выбрать темы интерактивно или установить их все:

```bash
git clone https://github.com/Gianlucabernasconi/Inume-Opencode-Retro-Themes.git
cd Inume-Opencode-Retro-Themes
./install.sh                    # интерактивный выбор
./install.sh all                # установить все темы
./install.sh cga w95-classic    # установить конкретные темы
./install.sh --project all      # установить в ./.opencode/themes
```

### Активация темы в OpenCode

Внутри OpenCode выполните `/themes`, чтобы открыть выбор темы («Switch theme»), затем выберите свою тему из списка по имени (имя файла без `.json`):

```text
/themes
```

Или задайте её как тему по умолчанию в `cli.json` (OpenCode 2.x):

```json
{
  "$schema": "https://opencode.ai/v2/cli.json",
  "theme": { "name": "theme-name" }
}
```

В OpenCode 1.x тема по умолчанию указывается в `tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "theme-name"
}
```

OpenCode 2.x читает `tui.json` только один раз — чтобы перенести его в `cli.json`.

OpenCode загружает пользовательские темы из `~/.config/opencode/themes/`, `<project-root>/.opencode/themes/` и `./.opencode/themes/`. Каталоги, указанные позже, имеют приоритет.

---

## Лицензия

[MIT](LICENSE) © 2026 [Gianluca Bernasconi](https://github.com/Gianlucabernasconi)

Это перевод README на английском языке (октябрь 2026). Если версии расходятся, эталонной считается [README.md](README.md).