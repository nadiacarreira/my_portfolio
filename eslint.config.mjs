import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  // Configuración para archivos JS y TS
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // Configuración de globales para navegadores
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },

  // Configuración recomendada para TypeScript
  tseslint.configs.recommended,

  // Aquí van las reglas de accesibilidad
  {
    files: ["**/*.{html,ts}"], // Asegúrate de que se aplique tanto a archivos HTML como TypeScript
    rules: {
      // Reglas para accesibilidad en HTML
      "html/alt-text": ["warn", {
        "elements": ["img", "area", "input[type='image']"]
      }],
      "html/anchor-has-content": "warn",  // Asegúrate de que los enlaces tengan contenido
      "html/anchor-is-valid": "warn",    // Asegúrate de que los enlaces sean válidos
      "html/heading-has-content": "warn", // Asegúrate de que las cabeceras tengan contenido
      "html/html-has-lang": "warn",      // Asegúrate de que el HTML tenga un atributo lang
      "jsx-a11y/alt-text": "warn",       // Asegúrate de que las imágenes tengan texto alternativo
      "jsx-a11y/anchor-is-valid": "warn", // Verifica que los enlaces sean válidos
      "jsx-a11y/heading-has-content": "warn", // Asegúrate de que las cabeceras tengan contenido
      "jsx-a11y/label-has-associated-control": "warn" // Asegúrate de que los formularios sean accesibles
    },
  },
]);
