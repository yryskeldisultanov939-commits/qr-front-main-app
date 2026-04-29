# Project Structure

- `src/App.jsx` - понятная логика переходов между экранами
- `src/components/LoginScreen.jsx` - экран входа
- `src/components/SeatMap.jsx` - экран с картой рабочих мест
- `src/components/ScannerScreen.jsx` - экран сканирования QR
- `src/components/Icon.jsx` - все SVG-иконки в одном месте
- `src/data/workspaces.js` - данные по столам (позиции и статусы)
- `src/data/constants.js` - общие константы (экраны, статусы)

## Как читать код студенту

1. Начни с `src/App.jsx`.
2. Посмотри объект `SCREEN` в `src/data/constants.js`.
3. Затем открой каждый экран в `src/components`.
4. Данные карты всегда лежат в `src/data/workspaces.js`.

## Правила для команды

1. Не используй магические строки, бери значения из `constants.js`.
2. UI каждого экрана меняй только в его файле.
3. Иконки добавляй только в `Icon.jsx`.
4. Позиции столов меняй только в `workspaces.js`.
