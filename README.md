# Garra Crema - Universitario de Deportes Theme

Tema visual para VS Code y Cursor inspirado en la identidad visual crema y granate.

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Crema (base) | #FFFEF4 | Status bar, keywords, cursor |
| Granate (principal) | #A6192E | Activity bar, title bar, funciones |
| Negro (acento) | #000000 | Sombra |
| Crema secundario | #FEFCEB | Hover elements |
| Rojo secundario | #DA291C | Errores |
| Granate oscuro | #7C2629 | Sidebar, selección |
| Gris | #A7A8A9 | Comentarios, texto secundario |
| Dorado/beige | #C6AA76 | Strings, constantes |
| Fondo editor | #1A1310 | Background principal |
| Sidebar | #2A1416 | Panel lateral |
| Texto general | #EDE6D6 | Texto del editor |

## Características

- Tema oscuro con acentos crema y granate
- Syntax highlighting optimizado para JavaScript, TypeScript, y otros lenguajes
- Iconos personalizados para el explorador
- Compatibilidad con VS Code y Cursor
- Alto contraste para mejor legibilidad

## Instalación

### Desde VSIX

1. Genera el archivo VSIX:
   ```bash
   npx @vscode/vsce package --allow-missing-repository --skip-license
   ```

2. En VS Code:
   - Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
   - Selecciona "Extensions: Install from VSIX..."
   - Elige el archivo `garra-crema-theme-1.0.0.vsix` generado

3. Activar el tema:
   - Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
   - Selecciona "Preferences: Color Theme"
   - Elige "Garra Crema"

4. Activar los íconos de archivos:
   - Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
   - Selecciona "Preferences: File Icon Theme"
   - Elige "Garra Crema (File Icons)"

### Desarrollo

Para trabajar en el tema localmente:

1. Clona el repositorio
2. En VS Code, presiona `F5` para abrir una nueva ventana con el tema cargado
3. Los cambios se reflejan automáticamente al recargar la ventana

## Estructura del Proyecto

```
universitario-vscode-theme/
├── icons/                 # Íconos SVG personalizados
├── images/               # Imágenes de preview
├── samples/              # Archivos de ejemplo
├── themes/               # Definición del tema de colores
├── package.json          # Manifest de la extensión
└── README.md            # Este archivo
```

## Comandos de Desarrollo

```bash
# Empaquetar la extensión
npx @vscode/vsce package --allow-missing-repository --skip-license

# Publicar en marketplace (requiere token)
npx @vscode/vsce publish
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o envía un pull request para mejoras y correcciones.

## Licencia

MIT