# Projet partogramme

Suivi du travail en salle de naissance : patientes, grossesses, examens
(partogramme), enfants, praticiens. Site statique (HTML/CSS/JS, Supabase via CDN).

## Base de données Supabase

- Projet : `uzxpmrmbyfvhbjpvnfmy` (MCP `supabase` déjà connecté par jeton).
- Tables (schéma `public`) : `patiente`, `grossesse`, `praticien`, `orientation`,
  `examen`, `enfant`. Colonnes id : `id_patiente`, `id_grossesse`, etc.
- Tout est en **minuscules** : le site appelle les tables et colonnes en minuscules,
  ne pas recréer de tables avec majuscules.
- Types énumérés : `Groupe sanguin` (A+, A-, …, Inconnu), `Specialite`
  (Sage-femme, Anesthésiste, Obstétricien, Pédiatre), `Sexe` (Fille, Garçon).
  Le type `Groupe sanguin` contient bien une espace dans son nom.
- RLS ouverte sur les 6 tables (policies `acces_public_*` : lecture, ajout,
  modification, suppression pour `anon`) : données fictives du TP, c'est voulu.
- La base est vidée à chaque début de TP : il faut que le site fonctionne avec
  des tables vides comme avec des données.

## Clés et sécurité

- [config.js](config.js) contient seulement l'URL et la **clé publishable**.
  Ne jamais y remettre une clé secrète (service_role ou sb_secret).
- En 2026-09, un fichier config.js contenant des clés secrètes collées a existé
  en local ; rotation des clés secrètes non vérifiée (gh non connecté). Si la
  rotation est faite, rien à faire côté site.

## Tester en local

- Pas de Python sur ce PC, et `npx` est bloqué par la stratégie d'exécution
  PowerShell. Seul `node` marche : lancer un petit serveur statique
  (exemple : `node serve-parto.js`) puis ouvrir http://localhost:8000/.
- Le protocole `file://` est bloqué dans le navigateur MCP Playwright : toujours
  passer par un serveur local pour vérifier.