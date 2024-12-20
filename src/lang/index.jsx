export const lang = {
  russian: "Russian",
  english: "English",
  uzbek: "Uzbek",
};
export let selectionsLang = "English";
export const setSelectionsLang = (body) => {
  localStorage.setItem("lang", body);
  selectionsLang = body;
  window.location.reload();
};

export const language = {
  english: {
    header: {
      about: "About us",
      service: "Service",
      contact: "Contact",
      manufacturers: "Manufacurers",
      catalog: "Catalogs",
    },
    footer: {
      about: "About us",
      service: "Service",
      contact: "Contact",
      manufacturers: "Manufacurers",
      catalog: "Catalogs",
      informations: "Informations",
    },
    homePG: {
      heroSC: {
        title: "Offers advanced processing solutions",
        desc: `Milling, turning and drilling of parts in one
        installation. This reduces preparation time and costs
        tool, which increases productivity and overall accuracy`,
        contact: "Contact",
      },
      catalogSC: {
        title: " INDUSTRIAL EQUIPMENT AND COMPONENTS",
        frezerniy: "Milling machines",
        tokarniy: "Lathes",
        zuboobrat: "Gear cutting machines",
        list: "Tube and Sheet Metal Processing",
        shlif: "Grinding machines",
        dvigatel: "Engine repair machines",
        svarka: "Welding and heat treatment",
        litiye: "Metal casting",
      },
      aboutSC: {
        title: "What do they say about us?",
        desc: `Our clients are industrial enterprises,
        engineering, transport, auto repair companies,
        energy and telecommunications enterprises, as well as light and
        food industry, etc.`,
        educationYear: "Year of formation",
        partner: "Partners",
        equipment: "Units of equipment",
        successfulEq: " Successful transactions",
        machineTypes: "Machine types",
        satisfiedClient: "Satisfied clients",
      },
      manufacturerSC: {
        title: "OUR PARTNERS",
        desc: ` We offer high quality products from world renowned brands
        manufacturers, at the same time being their official representative
        in Uzbekistan. Our company has partners in a number of European and
        Asian countries such as Germany, Italy, Spain, Slovenia,
        Czech Republic, Turkey, China, Taiwan and others.`,
      },
      contactSC: {
        title: "DID NOT FIND WHAT YOU WERE LOOKING FOR?",
        desc: `Fill out the application and our specialists will contact you as soon as possible
        time. We will find the product for you or select a suitable analogue!`,
        name: "Please write your name",
        number: "Please write your number",
        email: "Please write your email",
        btn: "Submit",
      },
    },
    aboutPG: {
      heroSC: {
        title: "About company",
        desc: `   We offer only high quality products only from famous
        worldwide manufacturers. Our specialists will help you with
        choice, get a free consultation from professionals`,
      },
      wrapSC: {
        title: `The largest supplier of machine tools in Uzbekistan. All types of machines
        only in RAYYON GROUP`,
        desc: `  We offer only high quality products only from famous
        worldwide manufacturers. Our specialists will help you with
        choice, get a free consultation from professionals`,
        btn: "  Submit your application",
      },
    },
    servicePG: {
      title: "SERVICES",
      desc: `The RAYYON GROUP company offers its customers
      services for all types of equipment repairs
      technological group, modernization and commissioning.
      We will conduct a technical audit using our own specialists
      of your equipment and machinery, we will carry out timely service
      service, and we will provide post-warranty maintenance of machines and
      equipment of any complexity!`,
      wrap1: {
        title: "Comprehensive solution of technological problems",
        desc: `Our company can undertake the development of control programs for CNC machines, guaranteeing the smooth operation of your high-tech production.`,
      },
      wrap2: {
        title: "Equipment selection",
        desc: `When selecting equipment, we look for a balance between the customer’s wishes, cost, power and energy efficiency, productivity and operational safety. Our qualified specialists can help you with the choice.`,
      },
      wrap3: {
        title: "Creation of CNC control programs",
        desc: `Our company can undertake the development of control programs for CNC machines, guaranteeing the smooth operation of your high-tech production.`,
      },
      wrap4: {
        title: "Delivery of equipment to customers",
        desc: `Based on your order, our employees will professionally organize the delivery of machines and equipment by road or rail, which will save you from the hassle of delivering the equipment purchased from us.`,
      },
      wrap5: {
        title: "Installation and commissioning",
        desc: `Our service team will independently launch the equipment at your enterprise, as well as set it up to reach the established standards and indicators. Commissioning with us will be carried out efficiently and without delays.`,
      },
      wrap6: {
        title: "Instruction and training",
        desc: `Our company provides training for specialists to work on machines, which includes training for machine operators and software engineers from our highly qualified specialists.`,
      },
      wrap7: {
        title: "Warranty and post-warranty service",
        desc: `Warranty and post-warranty service are important aspects when purchasing any product. Warranty service provides free repair or replacement of the product if it malfunctions during the warranty period. Out-of-warranty service provides the opportunity to receive repairs or replacement of the product at an additional cost after the warranty period has expired. It is important to familiarize yourself with the terms of warranty and post-warranty service before purchasing a product to be confident in its quality and durability.`,
      },
      wrap8: {
        title: "Service and diagnostics",
        desc: `The service team will provide you with technical support, diagnostics and ensure the operational reliability of the equipment and guarantee the stable operation of the equipment purchased from us.`,
      },
    },
    catalogPG: {
      title: "Machine catalog",
      desc: ` We offer only high-quality products only from world-renowned manufacturers. Our specialists will help you with your choice, get free advice from professionals`,
      wrapTitle: "Select machine category:",
    },
    frezerniyPG: {
      title: "Select machine category:",
      titleS: "Horizontal milling machining centers",
      titleT: "5-axis machining centers",
      titleF: "Vertical CNC Machining Center",
      taiwan: "Taiwan",
      country: "Country:",
      manufacturer: "Manufacturer:",
    },
    tokarPG: {
      titleS: "Multifunctional turning centers",
      titleT: "Vertical CNC lathes",
    },
    zuboobratPG: {
      germany: "Germany",
      titleS: "CNC Hobbing Machines",
      titleT: "CNC gear shaping machines",
    },
    listPG: {
      titleS: "Press brakes",
      titleT: "Sheet bending machines",
      turkey: "Turkey",
      china: "China",
    },
    shlifPG: {
      titleS: "Cylindrical grinding machines",
      titleT: "Head and block grinding machines",
      titleF: "Surface grinding machines",
      italy: "Italy",
    },
    dvigatelPG: {
      titleT: "Boring machines",
      titleF: "Cylinder head boring machine",
      titleFi: "Valve sharpening machine",
      titleSix: "Other additional machines",
      titleSvarka: "EDM drills",
    },
  },
  uzbek: {
    header: {
      about: "Biz haqimizda",
      service: "Xizmatlar",
      contact: "Aloqa",
      manufacturers: "Ishlab chiqaruvchilar",
      catalog: "Kataloglar",
    },
    footer: {
      about: "Biz haqimizda",
      service: "Xizmatlar",
      contact: "Aloqa",
      manufacturers: "Ishlab chiqaruvchilar",
      catalog: "Kataloglar",
      informations: "Ma'lumotlar",
    },
    homePG: {
      heroSC: {
        title: "Ilg'or ishlov berish yechimlarini taklif qiladi",
        desc: `Birida qismlarni frezalash, tornalash va burg'ulash
        o'rnatish. Bu tayyorgarlik vaqtini va xarajatlarni kamaytiradi
        mahsuldorlikni va umumiy aniqlikni oshiradigan vosita`,
        contact: "Aloqa",
      },
      catalogSC: {
        title: " SANOAT USKUNALARI VA KOMPONENTLAR",
        frezerniy: "Frezeleme mashinalari",
        tokarniy: "Torna stanoklari",
        zuboobrat: "Tishli kesish mashinalari",
        list: "Quvurlar va plitalarni qayta ishlash",
        shlif: "Silliqlash mashinalari",
        dvigatel: "Dvigatel ta'mirlash mashinalari",
        svarka: "Payvandlash va issiqlik bilan ishlov berish",
        litiye: "Metall quyish",
      },
      aboutSC: {
        title: "Ular biz haqimizda nima deyishadi?",
        desc: `Bizning mijozlarimiz sanoat korxonalari,
        muhandislik, transport, avtomobil ta'mirlash kompaniyalari,
        energetika va telekommunikatsiya korxonalari, shuningdek, yorug'lik va
        oziq-ovqat sanoati va boshqalar.`,
        educationYear: "Yaratilgan yili",
        partner: "Hamkorlar",
        equipment: "Uskunalar birliklari",
        successfulEq: " Muvaffaqiyatli tranzaktsiyalar",
        machineTypes: "Mashina turlari",
        satisfiedClient: "Qoniqarli mijozlar",
      },
      manufacturerSC: {
        title: "BIZNING HAMKORLIK",
        desc: ` Biz jahonga mashhur brendlarning yuqori sifatli mahsulotlarini taklif etamiz
        ishlab chiqaruvchilar, ayni paytda ularning rasmiy vakili
        O'zbekistonda. Kompaniyamiz Yevropa va bir qator hamkorlari bor
        Osiyo mamlakatlari: Germaniya, Italiya, Ispaniya, Sloveniya,
        Chexiya, Turkiya, Xitoy, Tayvan va boshqalar.`,
      },
      contactSC: {
        title: "Izlagan narsangni topolmadingmi?",
        desc: `Arizani to'ldiring va bizning mutaxassislarimiz imkon qadar tezroq siz bilan bog'lanadi
        vaqt. Biz siz uchun mahsulotni topamiz yoki mos analogni tanlaymiz!`,
        name: "Iltimos, ismingizni yozing",
        number: "Iltimos, nomeringizni yozing",
        email: "Iltimos, elektron pochtangizni yozing",
        btn: "Yuborish",
      },
    },
    aboutPG: {
      heroSC: {
        title: "Kompaniya haqida",
        desc: `Biz faqat mashhur mahsulotlarning yuqori sifatli mahsulotlarini taklif qilamiz
        butun dunyo bo'ylab ishlab chiqaruvchilar. Bizning mutaxassislarimiz sizga yordam berishadi
        tanlash, professionallardan bepul maslahat olish`,
      },
      wrapSC: {
        title: `O'zbekistondagi eng yirik stanoklar yetkazib beruvchi. Barcha turdagi mashinalar
        faqat RAYYON GROUP`,
        desc: `    Biz faqat mashhur mahsulotlarning yuqori sifatli mahsulotlarini taklif qilamiz
        butun dunyo bo'ylab ishlab chiqaruvchilar. Bizning mutaxassislarimiz sizga yordam berishadi
        tanlash, professionallardan bepul maslahat olish`,
        btn: "  Arizangizni yuboring",
      },
    },
    servicePG: {
      title: "XIZMATLAR",
      desc: `RAYYON GROUP kompaniyasi o'z mijozlariga taklif etadi
      barcha turdagi uskunalarni ta'mirlash bo'yicha xizmatlar
      texnologik guruh, modernizatsiya va ishga tushirish.
      Biz o'z mutaxassislarimiz yordamida texnik audit o'tkazamiz
      Sizning asbob-uskunalar va mashinalaringiz uchun biz o'z vaqtida xizmat ko'rsatamiz
      xizmat ko'rsatamiz va biz mashinalarga kafolatdan keyingi texnik xizmat ko'rsatamiz va
      har qanday murakkablikdagi uskunalar!`,
      wrap1: {
        title: "Texnologik muammolarni kompleks hal qilish",
        desc: `Bizning kompaniyamiz yuqori texnologiyali ishlab chiqarishingizning uzluksiz ishlashini kafolatlaydigan CNC dastgohlari uchun nazorat dasturlarini ishlab chiqishni o'z zimmasiga olishi mumkin.`,
      },
      wrap2: {
        title: "Uskunani tanlash",
        desc: `Uskunani tanlashda biz mijozning xohishi, narxi, quvvat va energiya samaradorligi, mahsuldorlik va ish xavfsizligi o'rtasidagi muvozanatni qidiramiz. Bizning malakali mutaxassislarimiz sizga tanlovda yordam berishlari mumkin.`,
      },
      wrap3: {
        title: "CNC boshqaruv dasturlarini yaratish",
        desc: `Bizning kompaniyamiz yuqori texnologiyali ishlab chiqarishingizning uzluksiz ishlashini kafolatlaydigan CNC dastgohlari uchun nazorat dasturlarini ishlab chiqishni o'z zimmasiga olishi mumkin.`,
      },
      wrap4: {
        title: "Uskunalarni mijozlarga yetkazib berish",
        desc: `Sizning buyurtmangiz asosida bizning xodimlarimiz mashina va uskunalarni avtomobil yoki temir yo'l orqali yetkazib berishni professional tarzda tashkil qiladi, bu sizni bizdan sotib olingan uskunani yetkazib berish bilan bog'liq qiyinchiliklardan xalos qiladi.`,
      },
      wrap5: {
        title: "O'rnatish va ishga tushirish",
        desc: `Bizning xizmat ko'rsatuvchi jamoamiz korxonangizda uskunani mustaqil ravishda ishga tushiradi, shuningdek, belgilangan standartlar va ko'rsatkichlarga erishish uchun sozlashni amalga oshiradi. Biz bilan ishga tushirish samarali va kechiktirmasdan amalga oshiriladi.`,
      },
      wrap6: {
        title: "Ko'rsatma va trening",
        desc: `Kompaniyamiz yuqori malakali mutaxassislarimizdan dastgoh operatorlari va dasturiy ta'minot muhandislarini tayyorlashni o'z ichiga olgan dastgohlarda ishlaydigan mutaxassislarni o'rgatadi.`,
      },
      wrap7: {
        title: "Kafolat va kafolatdan keyingi xizmat ko'rsatish",
        desc: `Kafolat va kafolatdan keyingi xizmat har qanday mahsulotni sotib olishda muhim jihatlardir. Kafolat xizmati, agar mahsulot kafolat muddati davomida ishlamay qolsa, uni bepul ta'mirlash yoki almashtirishni ta'minlaydi. Kafolatdan tashqari xizmat ko'rsatish kafolat muddati tugagandan so'ng mahsulotni qo'shimcha haq evaziga ta'mirlash yoki almashtirishni olish imkoniyatini beradi. Mahsulotni sotib olishdan oldin uning sifati va mustahkamligiga ishonch hosil qilish uchun kafolat shartlari va kafolatdan keyingi xizmat ko‘rsatish shartlari bilan tanishib chiqish muhimdir.`,
      },
      wrap8: {
        title: "Xizmat va diagnostika",
        desc: `Xizmat ko'rsatish guruhi sizga texnik yordam, diagnostika va uskunaning ishlash ishonchliligini ta'minlaydi va bizdan sotib olingan uskunaning barqaror ishlashini kafolatlaydi.`,
      },
    },
    catalogPG: {
      title: "Mashina katalogi",
      desc: ` Biz faqat jahonga mashhur ishlab chiqaruvchilarning yuqori sifatli mahsulotlarini taklif qilamiz. Bizning mutaxassislarimiz sizga tanlovingizda yordam beradi, professionallardan bepul maslahat oladi`,
      wrapTitle: " Mashina toifasini tanlang:",
    },
    frezerniyPG: {
      title: "Mashina toifasini tanlang:",
      titleS: "Gorizontal frezalash ishlov berish markazlari",
      titleT: "5 o'qli ishlov berish markazlari",
      titleF: "Vertikal CNC ishlov berish markazi",
      taiwan: "Tayvan",
      country: "Davlat:",
      manufacturer: "Ishlab chiqaruvchi:",
    },
    tokarPG: {
      titleS: "Ko'p funktsiyali burilish markazlari",
      titleT: "Vertikal CNC stanoklari",
    },
    zuboobratPG: {
      germany: "Germaniya",
      titleS: "CNC hobbing mashinalari",
      titleT: "CNC tishli shakllantirish mashinalari",
    },
    listPG: {
      titleS: "Tormozlarni bosing",
      titleT: "Plitalar bukuvchi mashinalar",
      turkey: "Turkiya",
      china: "Xitoy",
    },
    shlifPG: {
      titleS: "Silindrsimon silliqlash mashinalari",
      titleT: "Bosh va blokli silliqlash mashinalari",
      titleF: "Yuzaki silliqlash mashinalari",
      italy: "Italiya",
    },
    dvigatelPG: {
      titleT: "Burg'ulash mashinalari",
      titleF: "Silindr boshini burg'ulash mashinasi",
      titleFi: "Vana charxlash mashinasi",
      titleSix: "Boshqa qo'shimcha mashinalar",
      titleSvarka: "EDM matkaplar",
    },
  },

  russian: {
    header: {
      about: "О нас",
      service: "Услуга",
      contact: "Контакт",
      manufacturers: "Производители",
      catalog: "Каталоги",
    },
    footer: {
      about: "О нас",
      service: "Услуга",
      contact: "Контакт",
      manufacturers: "Производители",
      catalog: "Каталоги",
      informations: "Информация",
    },
    homePG: {
      heroSC: {
        title: " Предлагает передовие решения для обработки",
        desc: `Фрезерование , токарная обработка и сверление деталей за одну
        установку. Таким образом сокращаются время подготовки и затраты на
        инструмент , что увеличивает производительность и общую точность`,
        contact: "Контакт",
      },
      catalogSC: {
        title: " ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ И КОМПЛЕКТУЮЩИЕ",
        frezerniy: "Фрезерные станки",
        tokarniy: "Токарные станки",
        zuboobrat: "Зубообратывающие  станки",
        list: "Обработка труб и листового металла",
        shlif: "Шлифовальные станки",
        dvigatel: "Станки для ремонта двигателей",
        svarka: "Сварка и термообработка",
        litiye: "Литье металла",
      },
      aboutSC: {
        title: "Что о нас говорят?",
        desc: `Нашими клиентами являются промышленные предприятия,
        машиностроительные, транспортные, авторемонтные компании,
        предприятия энергетики и телекоммуникации, а также легкой и
        пищевой промышленности и др.`,
        educationYear: "Год образования",
        partner: "Партнеров",
        equipment: "Единиц оборудования",
        successfulEq: " Успешных сделок",
        machineTypes: "Типов машин",
        satisfiedClient: "Довольных клиентов",
      },
      manufacturerSC: {
        title: "НАШИ ПАРТНЕРЫ",
        desc: ` Мы предлагаем высококачественные товары от известных во всем мире
        производителей, одновременно являясь их официальным представителем
        в Узбекистане. Наша компания имеет партнеров в ряде Европейских и
        Азиатских стран, таких как Германия, Италия, Испания, Словения,
        Чехия, Турция, Китай, Тайвань и других.`,
      },
      contactSC: {
        title: "НЕ НАШЛИ ТО, ЧТО ИСКАЛИ?",
        desc: `Заполните заявку и наши специалисты свяжутся с вами в ближайшее
время. Мы найдем товар за Вас или подберем подходящий аналог!`,
        name: "Пожалуйста, напишите свое имя",
        number: "Пожалуйста, напишите свой номер",
        email: "Пожалуйста, напишите свой адрес электронной почты",
        btn: "Представлять на рассмотрение",
      },
    },
    aboutPG: {
      heroSC: {
        title: "О Компании",
        desc: `     Мы предлагаем только высококачественные товары только от известных
        во всем мире производителей. Наши специалисты помогут вам с
        выбором, получите бесплатную консультацию от профессионалов`,
      },
      wrapSC: {
        title: `Самый крупный поставщик станков в Узбекистане. Все виды станков
только в RAYYON GROUP`,
        desc: `       Мы предлагаем только высококачественные товары только от известных
во всем мире производителей. Наши специалисты помогут вам с
выбором, получите бесплатную консультацию от профессионалов`,
        btn: "  Оставить заявку",
      },
    },
    servicePG: {
      title: "УСЛУГИ",
      desc: `Компания «RAYYON GROUP» предлагает своим клиентам
      услуги по всем видам ремонтных работ оборудования любой
      технологической группы, модернизации и пуско-наладочным работам.
      Силами собственных специалистов проведем технический аудит
      Вашего оборудования и техники, проведем своевременное сервисное
      обслуживание, и возьмемна постгарантийное обслуживание станков и
      оборудования любой сложности!`,
      wrap1: {
        title: "Комплексное решение технологических задач",
        desc: `Наша компания может взять на себя разработку управляющих программ длястанков с ЧПУ гарантируя слаженную деятельность вашего высокотехнологичного производства.`,
      },
      wrap2: {
        title: "Подбор оборудования",
        desc: `Подбирая оборудование, мы ищем баланс между пожеланиями заказчика истоимостью, мощностью и энергоэффективностью, производительностью и безопасностью приэксплуатации. Наши квалифицированные специалисты могут вам с выбором.`,
      },
      wrap3: {
        title: "Создание управляющих программ ЧПУ",
        desc: `Наша компания может взять на себя разработку управляющих программ для станков с ЧПУ гарантируя слаженную деятельность вашего высокотехнологичного производства.`,
      },
      wrap4: {
        title: "Доставка оборудования Заказчикам",
        desc: `Наши сотрудники по Вашему заказу профессионально организуют доставку станков и оборудования автомобильным или железнодорожным транспортом, что избавит Вас от хлопот по доставке приобретенного у нас оборудования.`,
      },
      wrap5: {
        title: "Монтаж и пуско-наладочные работы",
        desc: `Наша Сервисная бригада самостоятельно проведет запуск оборудования на Вашем предприятии, а также его наладку с выходом на установленные нормы и показатели. Пуско-наладка с нами пройдет качественно и без задержек.`,
      },
      wrap6: {
        title: "Инструктаж и тренинг",
        desc: `Наша компания проводит подготовку специалистов для работы на станках, которая включает обучение операторов станков и инженеров-программистов от наших высококвалифицированных специалистов.`,
      },
      wrap7: {
        title: "Гарантийное и послегарантийное обслуживание",
        desc: `Гарантийное и послегарантийное обслуживание - это важные аспекты при покупке любого продукта. Гарантийное обслуживание обеспечивает бесплатный ремонт или замену продукта в случае его неисправности в течение гарантийного периода. Послегарантийное обслуживание предоставляет возможность получения ремонта или замены продукта за дополнительную плату после истечения гарантийного периода. Важно ознакомиться с условиями гарантийного и послегарантийного обслуживания перед покупкой продукта, чтобы быть уверенным в его качестве и долговечности.`,
      },
      wrap8: {
        title: "Сервис и диагностика",
        desc: `Сервисная бригада окажет Вам техническую поддержку, диагностику и обеспечит эксплуатационную надежность обрудования и гарантирует стабильность работы приобретенного у нас оборудования.`,
      },
    },
    catalogPG: {
      title: "Каталог станков",
      desc: ` Мы предлагаем только высококачественные товары только от известных во всем мире производителей. Наши специалисты помогут вам с выбором, получите бесплатную консультацию от профессионалов`,
      wrapTitle: " Выберите категорию станков:",
    },
    frezerniyPG: {
      title: "Выберите категорию станков:",
      titleS: "Горизонтально-фрезерные обрабатывающие центры",
      titleT: "5-осевые обрабатывающие центры",
      titleF: "Вертикальный обрабатывающий центр с ЧПУ",
      taiwan: "Тайвань",
      country: "Страна:",
      manufacturer: "Производитель:",
    },
    tokarPG: {
      titleS: "Многофункциональные токарные центры",
      titleT: "Вертикальные токарные станки с ЧПУ",
    },
    zuboobratPG: {
      germany: "Германия",
      titleS: "Зубофрезерные станки с ЧПУ",
      titleT: "Зубодолбежные станки c ЧПУ",
    },
    listPG: {
      titleS: "Листогибочные прессы",
      titleT: "Листогибочные станки",
      turkey: "Турция",
      china: "Китай",
    },
    shlifPG: {
      titleS: "Цилиндрические шлифовальные станки",
      titleT: "Станки для шлифования головок и блоков",
      titleF: "Плоскошлифовальные станки",
      italy: "Италия",
    },
    dvigatelPG: {
      titleT: "Расточные станки",
      titleF: "Станок для расточки головок цилиндров",
      titleFi: "Станок для заточки клапанов",
      titleSix: "Прочие дополнительные станки",
      titleSvarka: "Электроэрозионные сверла",
    },
  },
};
