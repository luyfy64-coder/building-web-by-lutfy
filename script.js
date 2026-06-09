let html = "";

function generate() {
  const nama = document.getElementById("nama").value;
  const bio = document.getElementById("bio").value;
  const skill = document.getElementById("skill").value.split(",");
  const project = document.getElementById("project").value;

  html = `
  <html>
  <body style="font-family:sans-serif;background:#020617;color:white;padding:20px">
    <h1 style="color:#38bdf8">${nama}</h1>
    <p>${bio}</p>

    <h3>Skill</h3>
    <ul>
      ${skill.map(s => `<li>${s}</li>`).join("")}
    </ul>

    <h3>Project</h3>
    <p>${project}</p>
  </body>
  </html>
  `;

  document.getElementById("preview").srcdoc = html;
}

function download() {
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "portfolio.html";
  a.click();
}