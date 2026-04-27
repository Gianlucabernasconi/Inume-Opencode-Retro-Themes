# Inume Opencode Themes

Colección de temas personalizados para [OpenCode](https://opencode.ai/).

## Instalación

Copia el archivo `.json` del tema que quieras usar a tu directorio de temas de OpenCode:

```bash
mkdir -p ~/.config/opencode/themes
cp themes/nombre-del-tema.json ~/.config/opencode/themes/
```

Luego actívalo con el comando:

```
/theme nombre-del-tema
```

O configúralo en tu `tui.json`:

```json
{
  "$schema": "https://opencode.ai/tui.json",
  "theme": "nombre-del-tema"
}
```

## Temas disponibles

| Tema | Descripción | Preview |
|------|-------------|---------|
| `obsidian-red` | Negro puro con acentos rojos intensos | 🔴 |

## Estructura del repo

```
themes/         → Archivos JSON de cada tema
scripts/        → Utilidades de validación y test
.github/        → Workflows de CI
```

## Crear un nuevo tema

1. Copia `themes/obsidian-red.json` como base
2. Modifica los colores en `defs` y `theme`
3. Valida el JSON: `node scripts/validate.js`
4. Agrega una fila en la tabla del README

## Licencia

MIT
