/**
 * PM2 Ecosystem Configuration — Caimanera Landing
 *
 * ⚠️  SECURITY: This file is committed to git.
 *     NEVER put secrets here.
 *
 * 📌  NEXT_PUBLIC_* variables are inlined at BUILD time.
 *     Set them before `pnpm build`; PM2 env does not affect an existing build.
 *
 * 📋  Uso:
 *     pnpm build
 *     pm2 start ecosystem.config.js
 *     pm2 save
 */
module.exports = {
  apps: [
    {
      name: "caimanera-landing",
      cwd: __dirname,
      // Ejecuta `next start` con Node para que PM2 gestione las señales del proceso.
      script: "node_modules/next/dist/bin/next",
      // 127.0.0.1: pensado para Nginx/Caddy en el mismo servidor.
      // Si necesitas acceso directo por LAN, cambia a 0.0.0.0.
      args: "start -p 5000 -H 127.0.0.1",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      // Next.js necesita tiempo para cerrar peticiones en curso al reiniciar.
      kill_timeout: 10000,
      time: true,
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
