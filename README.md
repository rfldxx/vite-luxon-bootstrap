# Vite + TypeScript + Luxon + Bootstrap

Адаптивная страница с локальными часами в формате `dd.LL.y HH:mm:ss`.

## Локальный запуск

```bash
npm install
npm run dev
```

Production-сборка:

```bash
npm run build
npm run preview
```

## Публикация на GitHub Pages

1. Создайте пустой публичный репозиторий на GitHub.
2. Загрузите в него **всё содержимое этой папки**, включая скрытую папку `.github`.
3. Убедитесь, что основной branch называется `main`.
4. Откройте репозиторий: **Settings → Pages**.
5. В поле **Source** выберите **GitHub Actions**.
6. Откройте вкладку **Actions** и дождитесь зелёного результата workflow `Deploy Vite site to GitHub Pages`.
7. Ссылка появится в **Settings → Pages** и в результате workflow.

Благодаря `base: "./"` проект работает по адресу `https://USERNAME.github.io/REPOSITORY/` без изменения имени репозитория в конфигурации.
