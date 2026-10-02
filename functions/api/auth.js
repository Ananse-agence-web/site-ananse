// Connexion GitHub pour Decap CMS — étape 1 : redirection vers GitHub.
// GitHub App « Ananse CMS » : droits limités aux dépôts où elle est installée (Contents en lecture/écriture).
// Variables d'environnement Cloudflare Pages : GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET.
export async function onRequestGet({ request, env }) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response("GITHUB_CLIENT_ID manquant dans Cloudflare Pages.", { status: 500 });
  }
  const url = new URL(request.url);
  const state = crypto.randomUUID();
  const github = new URL("https://github.com/login/oauth/authorize");
  github.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  github.searchParams.set("redirect_uri", `${url.origin}/api/callback`);
  github.searchParams.set("state", state);
  return new Response(null, {
    status: 302,
    headers: {
      Location: github.toString(),
      "Set-Cookie": `decap_state=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
