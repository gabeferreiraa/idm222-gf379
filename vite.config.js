import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // Base public path when served in development or production.
  base: "/",

  // Build-specific options
  build: {
    // Entry points for multiple page application
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        work: path.resolve(__dirname, "work.html"),
        contact: path.resolve(__dirname, "contact.html"),
      },
      // Additional options here
    },
    // Options for outputting files
    // Example: Separate chunks for vendor libraries
    outDir: "dist", // Output directory
    assetsDir: "assets", // Directory for assets within outDir
    // More options...
  },

  // Plugins - Add Vite plugins here
  plugins: [
    // Example: vue(), reactRefresh()
  ],

  build: {
    target: "esnext", // Use modern JavaScript
    sourcemap: true, // Enable source maps for better debugging
    outDir: "dist", // Customize the output directory if needed
  },

  // Server-specific options for development
  server: {
    port: 3000, // Development server port
    // More options...
  },

  // Define global variables here
  define: {
    // Example: '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },

  // Resolve options, such as aliasing
  resolve: {
    alias: {
      // Example: {'@': path.resolve(__dirname, 'src')},
    },
  },

  // CSS-specific options
  css: {
    // Example: Modules options, PostCSS config...
  },

  // More global configurations...
});
