# 🚀 Przewodnik Deploymentu

Kompletny przewodnik jak opublikować stronę Kiełpina w internecie **ZA DARMO**.

## 📋 Przygotowanie

### 1. Utwórz konto GitHub

1. Idź na https://github.com
2. Zarejestruj darmowe konto
3. Zainstaluj Git: https://git-scm.com/downloads

### 2. Utwórz repozytorium

```bash
# W katalogu projektu
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA/kielpino.git
git push -u origin main
```

---

## 🎨 Frontend - Vercel (DARMOWY)

### Krok 1: Zarejestruj się w Vercel

1. Idź na https://vercel.com
2. Zaloguj się przez GitHub

### Krok 2: Importuj projekt

1. Kliknij "Add New Project"
2. Wybierz swoje repo z GitHub
3. Vercel automatycznie wykryje Next.js

### Krok 3: Konfiguracja

- **Framework Preset**: Next.js
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### Krok 4: Zmienne środowiskowe

Dodaj:
```
NEXT_PUBLIC_BACKEND_URL=https://twoj-backend.up.railway.app
```

### Krok 5: Deploy

Kliknij "Deploy" - gotowe w ~2 minuty!

### Domena Własna (opcjonalnie)

1. W Vercel: Settings → Domains
2. Dodaj swoją domenę (np. `kielpino.pl`)
3. Ustaw DNS u rejestratora:
   - Type: CNAME
   - Name: www
   - Value: `cname.vercel-dns.com`
4. Czekaj 5-60 minut

**URL**: `https://kielpino.vercel.app` (lub Twoja domena)

---

## ⚙️ Backend - Railway (DARMOWY $5/miesiąc kredytu)

### Krok 1: Zarejestruj się

1. Idź na https://railway.app
2. Zaloguj się przez GitHub

### Krok 2: Nowy projekt

1. Kliknij "New Project"
2. Wybierz "Deploy from GitHub repo"
3. Wybierz swoje repo

### Krok 3: Konfiguracja

Railway automatycznie wykryje Dockerfile!

1. **Root Directory**: `backend`
2. **Start Command**: `./api`

### Krok 4: Zmienne środowiskowe

W Railway dashboard dodaj:
```
PORT=8080
CONTENT_PATH=/app/content
```

### Krok 5: Deploy

Railway automatycznie buduje i deployuje!

### Uzyskaj URL backendu

1. W Railway kliknij swój serwis
2. Settings → Generate Domain
3. Skopiuj URL (np. `kielpino-backend.up.railway.app`)

### Zaktualizuj Frontend

Wróć do Vercel i zaktualizuj `NEXT_PUBLIC_BACKEND_URL` na Railway URL.

**URL**: `https://twoj-projekt.up.railway.app`

---

## 🗄️ Baza Danych - Railway PostgreSQL (opcjonalnie)

Jeśli w przyszłości potrzebujesz bazy danych:

1. W Railway projekcie: "New" → "Database" → "Add PostgreSQL"
2. Railway automatycznie ustawi zmienne środowiskowe
3. Gotowe!

---

## 🔄 Automatyczny Deployment

Teraz gdy pushjesz zmiany do GitHub:

```bash
git add .
git commit -m "Add new feature"
git push
```

**Automatycznie**:
- ✅ Vercel przebuduje frontend (~2 min)
- ✅ Railway przebuduje backend (~3 min)
- ✅ Strona zaktualizowana na całym świecie!

---

## 📊 Monitoring

### Vercel Analytics (DARMOWE)

1. Vercel Dashboard → Analytics
2. Zobacz ruch, performance, itp.

### Railway Logs

1. Railway Dashboard → Deployment
2. Zobacz logi backendu w czasie rzeczywistym

---

## 💰 Koszty

| Usługa | Darmowy Limit | Koszt |
|--------|---------------|-------|
| **Vercel** | 100GB bandwidth, unlimited deploys | **$0** |
| **Railway** | $5 kredytu/miesiąc | **$0-5** |
| **GitHub** | Nieograniczone publiczne repo | **$0** |
| **Domena** | - | **50-100 PLN/rok** |

**SUMA**: 0-100 PLN/rok (tylko jeśli kupisz domenę!)

---

## 🆘 Troubleshooting

### Frontend nie łączy się z backendem

- Sprawdź `NEXT_PUBLIC_BACKEND_URL` w Vercel
- Upewnij się że Railway backend działa
- Sprawdź CORS w `backend/cmd/api/main.go`

### Railway przekroczył limit

- Railway daje $5/miesiąc (wystarczy na ~500h)
- Upgrade do płatnego planu: $5/miesiąc

### Błąd budowania Next.js

- Sprawdź logi w Vercel
- Upewnij się że wszystkie dependencies są w `package.json`
- Spróbuj lokalnie: `npm run build`

---

## ✅ Checklist Deploymentu

- [ ] Kod w GitHub
- [ ] Vercel połączony z GitHub
- [ ] Frontend zdeployowany na Vercel
- [ ] Railway połączony z GitHub
- [ ] Backend zdeployowany na Railway
- [ ] `NEXT_PUBLIC_BACKEND_URL` ustawiony w Vercel
- [ ] Strona działa: `https://twoj-projekt.vercel.app`
- [ ] API działa: `https://twoj-backend.up.railway.app/health`
- [ ] Domena podpięta (opcjonalnie)

---

## 🎉 Gotowe!

Twoja strona jest teraz dostępna na całym świecie, 24/7, za darmo!

Każdy push do `main` branch automatycznie aktualizuje stronę.
