// Connexion GitHub pour Decap CMS (/admin/) — étape 2 : échange du code contre un jeton,
// puis transmission du jeton à la fenêtre /admin/ (même origine uniquement).
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookie = (request.headers.get("Cookie") || "").match(/(?:^|;\s*)decap_state=([^;]+)/);

  let status = "error";
  let content = { message: "Connexion refusée." };

  if (code && state && cookie && cookie[1] === state) {
    const reponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "User-Agent": "ananse-decap" },
      body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code }),
    });
    const data = await reponse.json();
    if (data.access_token) {
      status = "success";
      content = { token: data.access_token, provider: "github" };
    } else {
      content = { message: data.error_description || "Échec de la connexion GitHub." };
    }
  }

  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  const html = `<!doctype html><meta charset="utf-8"><title>Connexion…</title><p>Connexion en cours…</p>
<script>
  (function () {
    var origine = ${JSON.stringify(url.origin)};
    window.addEventListener("message", function (e) {
      if (e.origin !== origine) return;
      window.opener.postMessage(${JSON.stringify(message).replace(/</g, String.fromCharCode(92) + "u003c")}, origine);
    }, false);
    window.opener.postMessage("authorizing:github", origine);
  })();
</script>`;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Set-Cookie": "decap_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
    },
  });
}
