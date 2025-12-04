# CI/CD Pipeline Dokumentation

Diese Dokumentation beschreibt die GitHub Actions CI/CD Pipeline für das Docusaurus-Blog-Projekt.

## Übersicht

Das Projekt verwendet mehrere GitHub Actions Workflows für verschiedene Zwecke:

1. **CI Pipeline** (`ci.yml`) - Kontinuierliche Integration
2. **Deploy Pipeline** (`deploy.yml`) - Automatisches Deployment zu GitHub Pages
3. **Preview Pipeline** (`preview.yml`) - Preview-Builds für Pull Requests
4. **Release Pipeline** (`release.yml`) - Release-Builds und Assets

## Workflows

### 1. CI Pipeline (`ci.yml`)

**Trigger:**
- Push zu `main` oder `feature/**` Branches
- Pull Requests zu `main` oder `feature/**` Branches
- Manuell via `workflow_dispatch`

**Jobs:**

#### Lint and Type Check
- Führt ESLint aus
- Führt TypeScript Type-Checking aus
- Prüft Code-Formatierung mit Prettier
- Kommentiert PRs bei Fehlern

#### Build
- Installiert Dependencies
- Erstellt Production Build
- Lädt Build-Artefakte hoch (7 Tage Retention)

#### Security Audit
- Führt `pnpm audit` aus
- Prüft auf moderate Sicherheitslücken
- Läuft auch bei Fehlern weiter (`continue-on-error: true`)

### 2. Deploy Pipeline (`deploy.yml`)

**Trigger:**
- Push zu `main` Branch
- Push zu `feature/devsecops-blog-setup` Branch
- Manuell via `workflow_dispatch`
- Aufgerufen von anderen Workflows (`workflow_call`)

**Jobs:**

#### Build
- Erstellt Docusaurus Build
- Kopiert Build zu `github-pages` Verzeichnis
- Lädt Build-Artefakt hoch

#### Deploy
- Deployed zu GitHub Pages
- Läuft nur auf Default Branch
- Benötigt `pages: write` Permission

### 3. Preview Pipeline (`preview.yml`)

**Trigger:**
- Pull Requests zu `main` oder `feature/**` Branches
- Manuell via `workflow_dispatch`

**Jobs:**

#### Preview Build
- Erstellt Preview-Build für PRs
- Kommentiert PRs mit Build-Status
- Lädt Build-Artefakte hoch (3 Tage Retention)

### 4. Release Pipeline (`release.yml`)

**Trigger:**
- GitHub Release veröffentlicht
- Manuell via `workflow_dispatch` (mit Version Input)

**Jobs:**

#### Release Build
- Erstellt Release-Build
- Erstellt `release-build.tar.gz` Archiv
- Lädt Release-Asset hoch
- Lädt Build-Artefakte hoch (30 Tage Retention)

## Konfiguration

### Environment Variables

Die Workflows verwenden folgende Environment Variables (aus `example.env`):

- `DEPLOYMENT_URL` - Production URL
- `BASE_URL` - Base URL Path
- `GITHUB_ORG` - GitHub Organization/Username
- `GITHUB_PROJECT` - Repository Name
- `DEPLOYMENT_BRANCH` - Deployment Branch
- `BLOG_ENABLED` - Blog Feature Flag

### GitHub Pages Setup

Um GitHub Pages zu aktivieren:

1. Gehe zu Repository Settings → Pages
2. Wähle "GitHub Actions" als Source
3. Der `deploy.yml` Workflow deployed automatisch bei Push zu `main`

### Permissions

Die Workflows benötigen folgende Permissions:

- `contents: read` - Repository lesen
- `pages: write` - GitHub Pages deployen
- `id-token: write` - OIDC Token für Pages
- `pull-requests: write` - PRs kommentieren (optional)

## Workflow-Ablauf

### Standard Development Flow

1. **Feature Branch erstellen:**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Änderungen committen und pushen:**
   ```bash
   git add .
   git commit -m "feat: Add new feature"
   git push origin feature/my-feature
   ```

3. **CI Pipeline läuft automatisch:**
   - Linting & Type-Checking
   - Build-Validierung
   - Security Audit

4. **Pull Request erstellen:**
   - Preview Pipeline erstellt Preview-Build
   - CI Pipeline validiert Code-Qualität

5. **Nach Merge zu `main`:**
   - Deploy Pipeline deployed automatisch zu GitHub Pages

### Manuelle Trigger

#### CI Pipeline manuell starten:
```bash
# Via GitHub Actions UI oder:
gh workflow run ci.yml
```

#### Deploy Pipeline manuell starten:
```bash
gh workflow run deploy.yml
```

#### Release erstellen:
```bash
gh release create v1.0.0 --title "Release v1.0.0" --notes "Release notes"
```

## Troubleshooting

### Build schlägt fehl

1. Prüfe GitHub Actions Logs
2. Stelle sicher, dass `.env` Datei korrekt ist
3. Prüfe Dependencies: `pnpm install`
4. Teste lokal: `pnpm build`

### Deployment schlägt fehl

1. Prüfe GitHub Pages Settings
2. Stelle sicher, dass `pages: write` Permission vorhanden ist
3. Prüfe ob Default Branch korrekt ist
4. Prüfe `DEPLOYMENT_URL` und `BASE_URL` in Config

### CI Checks schlagen fehl

1. Führe lokal aus: `pnpm validate`
2. Fixe Linting-Fehler: `pnpm lint:fix`
3. Fixe Formatierung: `pnpm format`
4. Prüfe TypeScript-Fehler: `pnpm typecheck`

## Best Practices

1. **Immer lokal testen** bevor pushen:
   ```bash
   pnpm validate
   pnpm build
   ```

2. **Feature Branches verwenden** für neue Features

3. **Pull Requests erstellen** für Code-Review

4. **Commits sinnvoll benennen** (Conventional Commits)

5. **Regelmäßig mergen** von `main` in Feature Branches

## Monitoring

- GitHub Actions Dashboard: `https://github.com/USERNAME/REPO/actions`
- GitHub Pages Status: Repository Settings → Pages
- Build-Artefakte: GitHub Actions Run → Artifacts

## Weitere Ressourcen

- [GitHub Actions Dokumentation](https://docs.github.com/en/actions)
- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)

