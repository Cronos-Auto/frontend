module.exports = {
  apps: [
    {
      name: "web-app",
      script: "node_modules/.bin/next",
      args: "start -p " + (process.env.PORT || 4200),
      cwd: __dirname + "/packages/web",
      interpreter: "none",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      restart_delay: 1000,
      env: {
        PORT: process.env.PORT || 4200,
        API_URL: process.env.API_URL || `http://localhost:${process.env.API_PORT || 4201}`,
      },
    },
    {
      name: "api",
      cwd: __dirname + "/packages/api",
      script: "dist/index.js",
      interpreter: "node",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      restart_delay: 1000,
      env: {
        API_PORT: process.env.API_PORT || 4201,
      },
    },
  ],
};
