#!/usr/bin/env bash
# Instalador de los temas Inume Opencode Retro Themes.
#
# Uso:
#   ./install.sh                      Selector interactivo
#   ./install.sh all                  Instala todos los temas
#   ./install.sh cga w95-classic      Instala temas concretos (por nombre, sin .json)
#   ./install.sh --project [temas]    Instala en ./.opencode/themes en vez de en el usuario
#   ./install.sh --list               Lista los temas disponibles
#
# Por defecto instala en ~/.config/opencode/themes (todos tus proyectos).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
THEMES_DIR="$SCRIPT_DIR/themes"

DEST="$HOME/.config/opencode/themes"
declare -a REQUESTED=()
WANT_ALL=0
LIST_ONLY=0

for arg in "$@"; do
  case "$arg" in
    --project) DEST=".opencode/themes" ;;
    --list)    LIST_ONLY=1 ;;
    -h|--help) grep '^#' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    all)       WANT_ALL=1 ;;
    -*)        echo "Opción desconocida: $arg" >&2; exit 1 ;;
    *)         REQUESTED+=("$arg") ;;
  esac
done

if [ ! -d "$THEMES_DIR" ]; then
  echo "No se encontró la carpeta themes/ junto al script." >&2
  exit 1
fi

# Recolectar temas disponibles (nombres sin extensión)
declare -a AVAILABLE=()
while IFS= read -r f; do
  AVAILABLE+=("$(basename "$f" .json)")
done < <(find "$THEMES_DIR" -maxdepth 1 -name '*.json' | sort)

if [ "${#AVAILABLE[@]}" -eq 0 ]; then
  echo "No hay temas en $THEMES_DIR" >&2
  exit 1
fi

if [ "$LIST_ONLY" -eq 1 ]; then
  printf 'Temas disponibles (%d):\n' "${#AVAILABLE[@]}"
  printf '  - %s\n' "${AVAILABLE[@]}"
  exit 0
fi

# Determinar qué instalar
declare -a TO_INSTALL=()
if [ "$WANT_ALL" -eq 1 ]; then
  TO_INSTALL=("${AVAILABLE[@]}")
elif [ "${#REQUESTED[@]}" -gt 0 ]; then
  TO_INSTALL=("${REQUESTED[@]}")
else
  # Selector interactivo
  echo "Temas disponibles:"
  i=1
  for t in "${AVAILABLE[@]}"; do printf '  %2d) %s\n' "$i" "$t"; i=$((i + 1)); done
  echo
  printf 'Números a instalar (separados por espacio), "a" para todos, Enter para cancelar: '
  read -r reply
  if [ -z "${reply:-}" ]; then echo "Cancelado."; exit 0; fi
  if [ "$reply" = "a" ]; then
    TO_INSTALL=("${AVAILABLE[@]}")
  else
    for n in $reply; do
      if [[ "$n" =~ ^[0-9]+$ ]] && [ "$n" -ge 1 ] && [ "$n" -le "${#AVAILABLE[@]}" ]; then
        TO_INSTALL+=("${AVAILABLE[$((n - 1))]}")
      else
        echo "Selección inválida: $n" >&2; exit 1
      fi
    done
  fi
fi

mkdir -p "$DEST"

installed=0
for name in "${TO_INSTALL[@]}"; do
  src="$THEMES_DIR/$name.json"
  if [ ! -f "$src" ]; then
    echo "  ✗ '$name' no existe (usa --list para ver los disponibles)" >&2
    continue
  fi
  cp "$src" "$DEST/$name.json"
  echo "  ✓ $name → $DEST/$name.json"
  installed=$((installed + 1))
done

echo
if [ "$installed" -gt 0 ]; then
  echo "Instalados $installed tema(s). Actívalos en OpenCode con /themes (o theme.name en cli.json)"
else
  echo "No se instaló ningún tema."
  exit 1
fi
