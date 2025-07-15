import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react'

// Featured Products Component (temporary mock data)
function FeaturedProducts() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 256,
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 189,
    },
    {
      id: '3',
      name: 'Wireless Charging Pad',
      price: 49.99,
      originalPrice: 69.99,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 92,
    },
    {
      id: '4',
      name: 'Bluetooth Speaker',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 143,
    },
  ]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Популярные товары
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя наши самые популярные товары, которые выбирают тысячи довольных клиентов
          </p>
        </div>

        <div className="grid-responsive">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="product-card p-4 animate-fade-in"
            >
              <div className="relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="product-image"
                />
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-medium">
                    -25%
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">
              Посмотреть все товары
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: 'Бесплатная доставка',
      description: 'Бесплатная доставка при заказе от $100',
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: '2 года гарантии на все товары',
    },
    {
      icon: Headphones,
      title: 'Поддержка 24/7',
      description: 'Круглосуточная поддержка клиентов',
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Newsletter Section
function NewsletterSection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Подпишитесь на новости
          </h2>
          <p className="text-muted-foreground mb-8">
            Будьте первыми в курсе новых поступлений, акций и специальных предложений
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Подписаться</Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Добро пожаловать в{' '}
                  <span className="text-gradient">
                    NonceWallet Store
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Откройте для себя уникальную коллекцию качественных товаров для современной жизни. 
                  Лучшие цены, быстрая доставка, безупречный сервис.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-3">
                  <Link href="/products">
                    Начать покупки
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <Link href="/about">
                    Узнать больше
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>1000+ довольных клиентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Доставка по всему миру</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                  alt="Hero Image"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-lg p-4 shadow-lg animate-scale-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Качество гарантировано</p>
                    <p className="text-xs text-muted-foreground">100% оригинальные товары</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card border rounded-lg p-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Быстрая доставка</p>
                    <p className="text-xs text-muted-foreground">1-3 рабочих дня</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <Suspense fallback={<div className="h-96 bg-secondary/30 animate-pulse" />}>
        <FeaturedProducts />
      </Suspense>

      {/* Features */}
      <FeaturesSection />

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  )
}