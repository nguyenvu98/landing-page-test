module.exports = {
  apps: [
    {
      name: "landing-page",
      script: "npm",
      args: "start",
      cwd: "/var/www/landing-page-test",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      error_file: "/var/www/landing-page-test/logs/error.log",
      out_file: "/var/www/landing-page-test/logs/out.log",
      time: true,
    },
  ],
};
