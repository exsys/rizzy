module.exports = {
    apps: [{
        name: "rizzy",
        script: "./index.js"
    }],
    deploy: {
        production: {
            user: "exsys",
            host: "45.131.109.53 -p 42069",
            key: "~/.ssh/id_ed25519.pub",
            ref: "origin/main",
            repo: "git@github.com:exsys/rizzy.git",
            path: "/home/exsys/rizzy",
            "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
        }
    }
}