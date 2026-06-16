# Инструкция по деплою VK Mini App

## 🔧 Что было исправлено

1. **Убран конфликт инициализации VK Bridge** — теперь он инициализируется только один раз после рендера
2. **Добавлен `vercel.json`** — конфигурация для корректного деплоя

---

## 🚀 Вариант 1: Vercel (Рекомендуется)

### Шаг 1: Установи Vercel CLI (опционально)
```bash
npm install -g vercel
```

### Шаг 2: Деплой через веб-интерфейс (проще)

1. Зайди на [vercel.com](https://vercel.com)
2. Нажми **"Add New Project"**
3. Нажми **"Import Git Repository"** и выбери свой репозиторий
4. Настрой параметры:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
5. Нажми **"Deploy"**

### Шаг 3: Деплой через CLI

```bash
# Установи Vercel CLI
npm install -g vercel

# Войди в аккаунт
vercel login

# Запусти деплой
vercel

# Для деплоя в продакшен
vercel --prod
```

### Шаг 4: Настрой домен для VK

1. В панели Vercel зайди в **Settings → Domains**
2. Добавь свой домен (например, `hero-bot.vercel.app`)
3. Скопируй URL и вставь в настройки VK Mini App

---

## ⚡ Вариант 2: Cloudflare Pages (Быстрее в РФ)

### Шаг 1: Создай аккаунт Cloudflare

1. Зайди на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Войди через Cloudflare аккаунт (или создай)

### Шаг 2: Подключи репозиторий

1. Нажми **"Create a project"**
2. Выбери **"Connect to Git"**
3. Выбери свой репозиторий GitHub/GitLab

### Шаг 3: Настрой сборку

| Параметр | Значение |
|----------|----------|
| **Framework preset** | Create React App |
| **Build command** | `npm run build` |
| **Build output directory** | `build` |
| **Node version** | 18 |

### Шаг 4: Нажми **"Save and Deploy"**

---

## 🌐 Вариант 3: GitHub Pages

### Шаг 1: Добавь в `package.json`

Уже есть! Проверь:
```json
"homepage": ".",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Шаг 2: Запусти деплой

```bash
npm install
npm run deploy
```

### Шаг 3: Включи GitHub Pages

1. Зайди в настройки репозитория → **Pages**
2. Выбери источник: **gh-pages** branch
3. Сохрани

---

## ✅ Проверка после деплоя

1. Открой URL приложения
2. Открой консоль разработчика (F12)
3. Проверь:
   - Нет ли ошибок красного цвета
   - Загружаются ли картинки
   - Есть ли сообщение `✅ VK Mini App инициализировано успешно!`

---

## 🔍 Если белый экран

### Проверь консоль браузера:
1. F12 → Console
2. Посмотри на ошибки

### Возможные причины:
- **Ошибка загрузки JS** — проверь пути в `index.html`
- **Ошибка VK Bridge** — приложение работает только внутри VK
- **Ошибка импорта картинок** — проверь, что все файлы в `src/image/`

### Быстрое решение:
```bash
# Локальная проверка перед деплоем
npm run build
npm run serve # или npx serve -s build
```

---

## 📝 Настройка VK Mini App

После деплоя вставь новый URL в:
1. [VK Developers](https://dev.vk.com/mini-apps)
2. Твое приложение → **Настройки**
3. **URL приложения** → новый URL от Vercel/Cloudflare

---

## 🆘 Поддержка

- [Документация Vercel](https://vercel.com/docs)
- [Документация Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [VK Mini Apps docs](https://dev.vk.com/mini-apps/deployment)
