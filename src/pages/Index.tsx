import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-cormorant text-primary">Natura</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О бренде</a>
            <a href="#products" className="hover:text-primary transition-colors">Продукция</a>
            <a href="#ingredients" className="hover:text-primary transition-colors">Состав</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20 px-6 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-cormorant mb-6 text-primary">
                Натуральная красота от природы
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Органическая косметика, созданная из чистых растительных компонентов для вашего естественного сияния
              </p>
              <Button size="lg" className="rounded-full">
                Смотреть каталог
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e3cebb7d-c28f-4bd1-8401-48ae4172d49a/files/f992e6d0-7b7f-4fa6-b2c2-cc2b82dfb11d.jpg" 
                alt="Натуральная косметика" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold font-cormorant mb-12 text-center text-primary">О бренде</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-lg animate-fade-in">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Leaf" size={32} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 font-cormorant">100% натурально</h3>
                  <p className="text-muted-foreground">Только органические ингредиенты без химии</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Heart" size={32} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 font-cormorant">С заботой</h3>
                  <p className="text-muted-foreground">Ручное производство с любовью к природе</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sparkles" size={32} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 font-cormorant">Эффективно</h3>
                  <p className="text-muted-foreground">Проверенные рецепты для вашей красоты</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold font-cormorant mb-12 text-center text-primary">Наша продукция</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://cdn.poehali.dev/projects/e3cebb7d-c28f-4bd1-8401-48ae4172d49a/files/f992e6d0-7b7f-4fa6-b2c2-cc2b82dfb11d.jpg" 
                  alt="Увлажняющий крем" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-cormorant font-semibold mb-2">Увлажняющий крем</h3>
                  <p className="text-muted-foreground mb-4">С маслом ши и алоэ вера</p>
                  <p className="text-2xl font-bold text-primary">1 490 ₽</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://cdn.poehali.dev/projects/e3cebb7d-c28f-4bd1-8401-48ae4172d49a/files/9139d09c-9a58-4d99-8bf2-e833f4360aa5.jpg" 
                  alt="Питательная сыворотка" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-cormorant font-semibold mb-2">Питательная сыворотка</h3>
                  <p className="text-muted-foreground mb-4">С витамином С и гиалуроновой кислотой</p>
                  <p className="text-2xl font-bold text-primary">2 290 ₽</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://cdn.poehali.dev/projects/e3cebb7d-c28f-4bd1-8401-48ae4172d49a/files/4ab5b38c-c94f-4861-bce3-8764300463af.jpg" 
                  alt="Натуральное мыло" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-cormorant font-semibold mb-2">Натуральное мыло</h3>
                  <p className="text-muted-foreground mb-4">С лавандой и эфирными маслами</p>
                  <p className="text-2xl font-bold text-primary">590 ₽</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="ingredients" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold font-cormorant mb-12 text-center text-primary">Натуральный состав</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start p-6 bg-card rounded-2xl shadow-sm">
                <Icon name="Flower2" size={28} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 font-cormorant">Растительные масла</h4>
                  <p className="text-muted-foreground">Масло ши, кокоса, жожоба — питают и восстанавливают кожу</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card rounded-2xl shadow-sm">
                <Icon name="Droplet" size={28} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 font-cormorant">Гиалуроновая кислота</h4>
                  <p className="text-muted-foreground">Глубокое увлажнение и сохранение упругости кожи</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card rounded-2xl shadow-sm">
                <Icon name="Sun" size={28} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 font-cormorant">Витамины C и E</h4>
                  <p className="text-muted-foreground">Антиоксиданты для молодости и сияния кожи</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card rounded-2xl shadow-sm">
                <Icon name="Sparkle" size={28} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 font-cormorant">Растительные экстракты</h4>
                  <p className="text-muted-foreground">Алоэ, ромашка, календула — успокаивают и лечат</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold font-cormorant mb-12 text-center text-primary">Отзывы наших клиентов</h2>
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"Потрясающий крем! Кожа стала намного мягче и увлажнённее. Очень рада, что нашла действительно натуральную косметику."</p>
                  <p className="font-semibold font-cormorant">— Анна, 32 года</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"Сыворотка превзошла все ожидания. Уже через неделю заметила, что кожа стала более упругой и сияющей."</p>
                  <p className="font-semibold font-cormorant">— Мария, 28 лет</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"Мыло с лавандой — моя любовь! Приятный аромат и кожа после него такая нежная. Беру уже третий раз."</p>
                  <p className="font-semibold font-cormorant">— Елена, 35 лет</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold font-cormorant mb-12 text-center text-primary">Свяжитесь с нами</h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Сообщение</label>
                    <Textarea placeholder="Расскажите, чем мы можем помочь..." className="rounded-xl min-h-32" />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-xl">
                    Отправить сообщение
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-border space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@natura-cosmetics.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>Москва, ул. Природная, 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-cormorant font-bold mb-4">Natura</h3>
          <p className="mb-6">Натуральная косметика для вашей естественной красоты</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="mt-8 text-sm opacity-80">© 2024 Natura. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
