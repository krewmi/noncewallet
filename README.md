# 🛍️ NonceWallet Store - Современный E-commerce

Профессиональный интернет-магазин, построенный на современных технологиях с фокусом на высокое качество UX/UI-дизайна и масштабируемость.

## ✨ Особенности

### 🎯 Пользовательский интерфейс
- **Главная страница** с крупным баннером, популярными товарами и акциями
- **Каталог товаров** с фильтрами (категория, цена, бренд, наличие)
- **Карточка товара** с галереей, описанием, вариантами и отзывами
- **Корзина покупок** с редактированием количества и оформлением заказа
- **Личный кабинет** с историей заказов и сохраненными адресами

### 🔧 Административная панель
- **Dashboard** со статистикой и графиками
- **CRUD интерфейс** для товаров и категорий
- **Управление заказами** и пользователями
- **Система ролей** и прав доступа
- **Промо-акции** и маркетинговые инструменты

### 🚀 Технические особенности
- **Next.js 15** с App Router и Partial Prerendering
- **TypeScript** для типобезопасности
- **TailwindCSS** для современного дизайна
- **Prisma ORM** с PostgreSQL
- **NextAuth.js** для аутентификации
- **Zustand** для управления состоянием
- **Stripe** для обработки платежей
- **SEO-оптимизация** и поддержка i18n

## 🛠️ Технологический стек

### Frontend
- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Статическая типизация
- **TailwindCSS** - Utility-first CSS фреймворк
- **Lucide React** - Современные иконки
- **React Hook Form** - Управление формами
- **Zustand** - Легковесное управление состоянием

### Backend
- **Next.js API Routes** - Серверная логика
- **Prisma** - Type-safe ORM
- **PostgreSQL** - Реляционная база данных
- **NextAuth.js** - Аутентификация и авторизация
- **Zod** - Валидация данных

### DevOps & Инструменты
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование кода
- **TypeScript** - Проверка типов
- **Git Hooks** - Автоматизация качества кода

## 📁 Структура проекта

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API маршруты
│   ├── (admin)/        # Административные страницы
│   ├── (shop)/         # Магазин
│   └── globals.css     # Глобальные стили
├── components/          # React компоненты
│   ├── ui/             # Базовые UI компоненты
│   ├── layout/         # Layout компоненты
│   ├── common/         # Переиспользуемые компоненты
│   └── admin/          # Административные компоненты
├── lib/                # Бизнес-логика и утилиты
├── stores/             # Zustand stores
├── types/              # TypeScript типы
├── hooks/              # Кастомные React hooks
└── utils/              # Вспомогательные функции
```

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 18.17 или выше
- npm/yarn/pnpm
- PostgreSQL база данных
- Stripe аккаунт для платежей

### Установка

1. **Клонируйте репозиторий**
```bash
git clone https://github.com/your-username/noncewallet-ecommerce.git
cd noncewallet-ecommerce
```

2. **Установите зависимости**
```bash
npm install
# или
yarn install
# или
pnpm install
```

3. **Настройте переменные окружения**
```bash
cp .env.example .env.local
```

Заполните `.env.local`:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce_db"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4. **Настройте базу данных**
```bash
# Примените миграции
npx prisma db push

# Сгенерируйте Prisma Client
npx prisma generate

# (Опционально) Заполните тестовыми данными
npm run db:seed
```

5. **Запустите сервер разработки**
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📚 Документация API

### Продукты
- `GET /api/products` - Получить список товаров с фильтрацией
- `POST /api/products` - Создать новый товар (админ)
- `GET /api/products/[id]` - Получить товар по ID
- `PUT /api/products/[id]` - Обновить товар (админ)
- `DELETE /api/products/[id]` - Удалить товар (админ)

### Корзина
- `GET /api/cart` - Получить корзину пользователя
- `POST /api/cart` - Добавить товар в корзину
- `PATCH /api/cart/[id]` - Обновить количество товара
- `DELETE /api/cart/[id]` - Удалить товар из корзины

### Заказы
- `GET /api/orders` - Получить заказы пользователя
- `POST /api/orders` - Создать новый заказ
- `GET /api/orders/[id]` - Получить заказ по ID
- `PATCH /api/orders/[id]` - Обновить статус заказа (админ)

## 🎨 UI/UX Дизайн

### Дизайн-система
- **Минималистичный** современный дизайн
- **Адаптивная** верстка для всех устройств
- **Темная/светлая** темы
- **Плавные анимации** и переходы
- **Доступность** (a11y) и семантическая разметка

### Цветовая палитра
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

## 🔒 Безопасность

- **HTTPS** для всех соединений
- **JWT токены** для аутентификации
- **Валидация** всех входных данных с Zod
- **Ролевая модель** доступа (RBAC)
- **Защищенные API** endpoints
- **Безопасное** хранение паролей с bcrypt

## 📈 SEO и производительность

- **Server-Side Rendering** (SSR)
- **Static Site Generation** (SSG)
- **Partial Prerendering** (PPR)
- **Image Optimization** с Next.js Image
- **Meta теги** и Open Graph
- **Structured Data** для поисковиков
- **Sitemap** и robots.txt

## 🌐 Интернационализация

- Поддержка **нескольких языков**
- **RTL** поддержка
- **Локализация** валют и дат
- **next-intl** для переводов

## 🧪 Тестирование

```bash
# Запуск тестов
npm run test

# Покрытие кода
npm run test:coverage

# E2E тесты
npm run test:e2e
```

## 📦 Развертывание

### Vercel (рекомендуется)
1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Разверните автоматически

### Docker
```bash
# Сборка образа
docker build -t noncewallet-store .

# Запуск контейнера
docker run -p 3000:3000 noncewallet-store
```

### Самостоятельно
```bash
# Сборка проекта
npm run build

# Запуск в продакшене
npm start
```

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для подробностей.

## 👥 Команда

- **Automation Engineer** - Архитектура и разработка
- **UI/UX Designer** - Дизайн и пользовательский опыт
- **DevOps Engineer** - Инфраструктура и развертывание

## 📞 Поддержка

Если у вас есть вопросы или предложения:

- 📧 Email: support@noncewallet.com
- 💬 Discord: [Наш сервер](https://discord.gg/noncewallet)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/noncewallet-ecommerce/issues)

---

Made with ❤️ by NonceWallet Team