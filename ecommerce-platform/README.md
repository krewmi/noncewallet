# 🛒 E-Commerce Platform - Современный интернет-магазин

Профессиональный e-commerce сайт с современным UX/UI дизайном, администраторской панелью и полной функциональностью интернет-магазина.

![E-Commerce Platform](https://via.placeholder.com/1200x600/0066cc/ffffff?text=E-Commerce+Platform)

## ✨ Основные возможности

### 🏪 Интернет-магазин
- **Современный дизайн** с адаптивной версткой для всех устройств
- **Главная страница** с баннерами, популярными товарами и отзывами
- **Каталог товаров** с фильтрами и поиском
- **Детальные карточки товаров** с галереей изображений
- **Корзина покупок** с возможностью редактирования
- **Оформление заказа** с выбором доставки и оплаты
- **Личный кабинет** пользователя с историей заказов

### 👨‍💼 Админ-панель
- **Dashboard** с аналитикой и графиками продаж
- **Управление товарами** (CRUD операции)
- **Управление категориями** и фильтрами
- **Управление заказами** и статусами
- **Управление пользователями** и ролями
- **Загрузка изображений** и медиа-файлов
- **Настройка промо-акций** и скидок

### 🔧 Технические особенности
- **SEO-оптимизация** с метатегами и sitemap
- **Поддержка нескольких языков** (i18n)
- **Адаптивный дизайн** для мобильных устройств
- **Высокая производительность** и оптимизация
- **Безопасность** и защита данных
- **Масштабируемая архитектура**

## 🚀 Технологический стек

### Frontend
- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - статическая типизация
- **TailwindCSS 4** - utility-first CSS фреймворк
- **shadcn/ui** - современные UI компоненты
- **Lucide React** - иконки и SVG
- **Zustand** - управление состоянием

### Backend & Database
- **Prisma ORM** - типобезопасная работа с БД
- **PostgreSQL** - реляционная база данных
- **NextAuth.js** - аутентификация и авторизация
- **Server Actions** - серверные операции

### UI & UX
- **Radix UI** - доступные примитивы UI
- **Class Variance Authority** - управление вариантами стилей
- **React Hook Form** - работа с формами
- **Zod** - валидация данных

### Платежи & Интеграции
- **Stripe** - платежная система
- **Cloudinary** - хранение и обработка изображений
- **React Hot Toast** - уведомления
- **Recharts** - графики и аналитика

## 📦 Установка и запуск

### Предварительные требования
- Node.js 18.17.0 или новее
- npm, yarn или pnpm
- PostgreSQL база данных

### 1. Клонирование репозитория
```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
```

### 2. Установка зависимостей
```bash
npm install
# или
yarn install
# или
pnpm install
```

### 3. Настройка переменных окружения
Скопируйте `.env.example` в `.env` и заполните необходимые переменные:

```bash
cp .env.example .env
```

Обязательные переменные:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce_db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Настройка базы данных
```bash
# Генерация Prisma клиента
npx prisma generate

# Применение миграций
npx prisma db push

# (Опционально) Заполнение тестовыми данными
npx prisma db seed
```

### 5. Запуск проекта
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

## 🗄️ Структура проекта

```
ecommerce-platform/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (admin)/        # Админ-панель
│   │   ├── (auth)/         # Аутентификация
│   │   ├── (shop)/         # Интернет-магазин
│   │   ├── api/            # API маршруты
│   │   ├── globals.css     # Глобальные стили
│   │   ├── layout.tsx      # Корневой layout
│   │   └── page.tsx        # Главная страница
│   └── components/          # React компоненты
│       ├── ui/             # UI компоненты (shadcn/ui)
│       ├── forms/          # Формы
│       ├── layout/         # Layout компоненты
│       └── product/        # Компоненты товаров
├── lib/                    # Утилиты и конфигурация
│   ├── prisma.ts          # Prisma клиент
│   ├── auth.ts            # NextAuth конфигурация
│   └── utils.ts           # Общие утилиты
├── types/                  # TypeScript типы
├── hooks/                  # Custom React hooks
├── stores/                 # Zustand stores
├── prisma/                 # Prisma схема и миграции
├── public/                 # Статические файлы
└── components.json         # shadcn/ui конфигурация
```

## 🎨 UI/UX Дизайн

Проект следует современным принципам UX/UI дизайна:

### Дизайн система
- **Минималистичный дизайн** с чистыми линиями
- **Современная типографика** с крупными заголовками
- **Согласованная цветовая палитра** с поддержкой темной темы
- **Плавные анимации** и микро-интеракции
- **Адаптивная сетка** для всех устройств

### Accessibility (Доступность)
- **WCAG 2.1 AA** соответствие
- **Клавиатурная навигация**
- **Screen reader** поддержка
- **Высокий контраст** текста
- **Семантическая разметка** HTML

### Performance (Производительность)
- **Оптимизация изображений** с lazy loading
- **Code splitting** и tree shaking
- **Кэширование** данных и ресурсов
- **Core Web Vitals** оптимизация

## 🔒 Безопасность

- **NextAuth.js** для аутентификации
- **CSRF защита** для форм
- **Валидация данных** с Zod
- **SQL injection** защита через Prisma
- **Rate limiting** для API
- **Secure headers** и HTTPS

## 🌐 Интернационализация (i18n)

Проект поддерживает множественные языки:
- **Русский** (основной)
- **Английский**
- **Другие языки** (легко добавить)

## 📈 Аналитика и SEO

### SEO оптимизация
- **Метатеги** для всех страниц
- **Open Graph** и Twitter Cards
- **Структурированные данные** (JSON-LD)
- **Sitemap.xml** автогенерация
- **Robots.txt** настройка

### Аналитика
- **Dashboard** с метриками продаж
- **Графики** выручки и заказов
- **Пользовательская активность**
- **Конверсия** и воронка продаж

## 🚀 Развертывание

### Vercel (Рекомендуется)
1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Развертывание произойдет автоматически

### Docker
```bash
# Сборка образа
docker build -t ecommerce-platform .

# Запуск контейнера
docker run -p 3000:3000 ecommerce-platform
```

### Ручное развертывание
```bash
# Сборка проекта
npm run build

# Запуск в production режиме
npm start
```

## 📝 Скрипты

```bash
npm run dev          # Запуск в development режиме
npm run build        # Сборка проекта
npm run start        # Запуск в production режиме
npm run lint         # Проверка кода ESLint
npm run type-check   # Проверка типов TypeScript
npm run db:push      # Применение изменений БД
npm run db:studio    # Prisma Studio для управления БД
npm run db:seed      # Заполнение тестовыми данными
```

## 🤝 Участие в разработке

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Стандарты кода
- **ESLint** для проверки кода
- **Prettier** для форматирования
- **TypeScript** строгие типы
- **Conventional Commits** для сообщений

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🆘 Поддержка

Если у вас есть вопросы или проблемы:

1. Проверьте [Issues](https://github.com/your-username/ecommerce-platform/issues)
2. Создайте новый Issue с подробным описанием
3. Свяжитесь с командой разработки

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - React фреймворк
- [TailwindCSS](https://tailwindcss.com/) - CSS фреймворк  
- [shadcn/ui](https://ui.shadcn.com/) - UI компоненты
- [Prisma](https://prisma.io/) - ORM для баз данных
- [Vercel](https://vercel.com/) - платформа развертывания

---

**Made with ❤️ by E-Commerce Platform Team**
