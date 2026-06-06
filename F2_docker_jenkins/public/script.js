fetch('/api/status')
.then(res => res.json())
.then(data => {

    document.getElementById("server").innerText =
        "✅ " + data.server;

    document.getElementById("docker").innerText =
        "✅ " + data.docker;

    document.getElementById("pipeline").innerText =
        "✅ " + data.pipeline;

    document.getElementById("environment").innerText =
        data.environment;

    document.getElementById("time").innerText =
        data.time;
});