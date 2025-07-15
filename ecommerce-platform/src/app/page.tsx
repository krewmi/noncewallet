import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Star, TrendingUp, Users, Shield, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-glass">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="inline-block font-bold text-gradient">E-Commerce</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/catalog" className="text-sm font-medium transition-colors hover:text-primary">
                Каталог
              </Link>
              <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
                Категории
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                О нас
              </Link>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Контакты
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Вход
            </Button>
            <Button size="sm">
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Современный{" "}
                  <span className="text-gradient">интернет-магазин</span>{" "}
                  для ваших покупок
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Откройте для себя широкий ассортимент качественных товаров с быстрой доставкой, 
                  удобной оплатой и профессиональным сервисом.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="shadow-glow">
                    Начать покупки
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Смотреть каталог
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4" />
                    <span>Быстрая доставка</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8">
                  <div className="h-full w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <ShoppingBag className="h-16 w-16 mx-auto text-primary" />
                      <p className="text-lg font-semibold">Ваши покупки здесь</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">Товаров в каталоге</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Положительных отзывов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка клиентов</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Почему выбирают нас
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Мы предоставляем лучший сервис и качество для наших клиентов
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4 p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Лучшие цены</h3>
                <p className="text-muted-foreground">
                  Конкурентные цены и регулярные акции для наших клиентов
                </p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Все товары проходят проверку качества перед отправкой
                </p>
              </div>
              <div className="text-center space-y-4 p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Отличный сервис</h3>
                <p className="text-muted-foreground">
                  Профессиональная поддержка клиентов 24/7
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Популярные товары
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Самые востребованные товары наших клиентов
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingBag className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Товар {i}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">1 999 ₽</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    В корзину
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Что говорят наши клиенты
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Отзывы реальных покупателей о нашем сервисе
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Анна Иванова",
                  text: "Отличный магазин! Быстрая доставка и качественные товары. Рекомендую!",
                  rating: 5
                },
                {
                  name: "Дмитрий Петров", 
                  text: "Покупаю здесь уже второй год. Всегда довольный покупками и сервисом.",
                  rating: 5
                },
                {
                  name: "Елена Сидорова",
                  text: "Приятные цены и отзывчивая поддержка. Обязательно буду заказывать еще!",
                  rating: 5
                }
              ].map((review, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <div className="font-semibold">{review.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 dark:bg-gray-900">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6" />
                <span className="font-bold">E-Commerce</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современный интернет-магазин с широким ассортиментом товаров
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/catalog">Каталог</Link></li>
                <li><Link href="/delivery">Доставка</Link></li>
                <li><Link href="/payment">Оплата</Link></li>
                <li><Link href="/returns">Возврат</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">О нас</Link></li>
                <li><Link href="/contact">Контакты</Link></li>
                <li><Link href="/careers">Вакансии</Link></li>
                <li><Link href="/blog">Блог</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/help">Помощь</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/support">Техподдержка</Link></li>
                <li><Link href="/feedback">Обратная связь</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 E-Commerce Platform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
