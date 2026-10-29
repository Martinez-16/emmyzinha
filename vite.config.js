import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { textos } from './src/conteudo/textos.js';

const escapar = valor => valor.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export default defineConfig({
  server: { allowedHosts: ['terminal.local'] },
  plugins: [{
    name: 'metadados-do-presente',
    transformIndexHtml(html, contexto) {
      const titulo = contexto.path.includes('galeria') ? textos.meta.galeriaTitulo : textos.meta.titulo;
      return html.replace('<title></title>', `<title>${escapar(titulo)}</title>`)
        .replace('<!-- descricao -->', `<meta name="description" content="${escapar(textos.meta.descricao)}">`)
        .replace('<!-- sem-javascript -->', `<noscript>${escapar(textos.interface.semJavascript)}</noscript>`);
    }
  }],
  build: { rollupOptions: { input: {
    principal: fileURLToPath(new URL('./index.html', import.meta.url)),
    galeria: fileURLToPath(new URL('./galeria.html', import.meta.url))
  } } }
});
