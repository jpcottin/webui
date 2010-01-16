var lang = [
	"Файли-торрент||*.torrent||Усі файли (*.*)||*.*||",
	"Уподобання",
	"Гаразд",
	"Скасувати",
	"Мова:",
	"Приватність",
	"Автоматично перевіряти оновлення",
	"Оновити до бета-версії",
	"Відсилити анонімну інформації коли перевіряются оновлення",
	"При завантаженні",
	"Додавати .!ut до незавершених файлів",
	"Pre-allocate all files",
	"Prevent standby if there are active torrents",
	"Підтвердження при видаленні торентів",
	"Альтернатив. фоновий колір списку:",
	"Показ. поточну швидкість в панелі заголовку",
	"При доданні торентів",
	"Не стартувати завантаження автоматично",
	"Місце скачаних файлів",
	"Класти нові завант. в:",
	"Діалог при ручному додаванні",
	"Переносити закінчені завант. в:",
	"Додати мітку торента",
	"Перенос. тільки з теки за промовчанням",
	"Місце для .torrents",
	"Зберіг. .torrents в:",
	"Переносити закінчені .torrents в:",
	"Автоматично завант. .torrents з:",
	"Видаляти завант. .torrents",
	"Порт прослуховування",
	"Порт для вхідних з'єднань:",
	"Випадк. порт",
	"Випадк. порт при кожному старті",
	"Увімк. маппінг порта UPnP",
	"Увімк. маппінг порта NAT-PMP",
	"Проксі Сервер",
	"Тип:",
	"Проксі:",
	"Порт:",
	"Аутентифікація",
	"Логін:",
	"Пароль:",
	"Розв. хост-імена через проксі",
	"Викор. проксі сервер для peer-to-peer з'єднань",
	"Add Windows Firewall exception",
	"Глобал. ліміт відвантаження",
	"Макс. відвантаження (кб/с): [0: необмежено]",
	"Автоматично",
	"Альтернат. відвантаження, коли не качається: (кб/с):",
	"Глобал. ліміт завантаження",
	"Макс. завантаження (кб/с): [0: необмежено]",
	"Кількість з'єднань",
	"Макс. глобальна кількість з'єднань:",
	"Макс. кількість приєднаних пірів на торент:",
	"Кількість слотів відвант. на торент:",
	"Викор. додаткові слоти відвант. при швидкості < 90%",
	"Базові можливості BitTorrent",
	"Увімк. мережу DHT",
	"Питати у трекера scrape іформацію",
	"Увімк. DHT для нових торентів",
	"Увімк. обмін пірів",
	"Увімк. виявлення локал. пірів",
	"Ліміт. пропуск. здатність локал. пірів",
	"IP/Hostname для трекера:",
	"Шифрування протоколу",
	"Вихідн.:",
	"Дозвол. успадков. вхідні з'єднання",
	"Увімкнути обмеження передачі",
	"Налаштування обмежень",
	"Зупинити торенти, коли:",
	"досягають",
	"за останні",
	"дні(в)",
	"Налашт. Черги",
	"Макс. кількість активних торентів (Завант. і Відван.):",
	"Макс. кількість активних закачок:",
	"Сидувати доки [Промовчання]",
	"Співвідн. <=",
	"%   або час сидування:",
	"Роздачі мають вищий пріоритет ніж завантедення",
	"When µTorrent Reaches the Seeding Goal",
	"Обмеж. швид. відвантаження (кб/с):[0: стоп]",
	"Увімк. Планувальник",
	"Опції планувальника",
	"Обмеж. відвантаження (кб/с):",
	"Обмеж. завантаження (кб/с):",
	"Вимк. DHT при вимкненні",
	"Увімк. Web UI",
	"Автентифікація",
	"Логін:",
	"Пароль:",
	"Увімк. аккаунт Гість з логіном:",
	"З'єднання",
	"Альтернативний порт прослуховування:",
	"Заборонити доступ до наступних IP (декілька розділяти комами):",
	"Дод. опції [УВАГА: Не змінювати!]",
	"Persistent Labels [Separate multiple labels with a | character]",
	"Базові налаштування кешу",
	"The disk cache is used to keep frequently accessed data in memory to reduce the number of reads and writes to the hard drive. µTorrent normally manages the cache automatically, but you may change its behavior by modifying these settings.",
	"Перезаписувати автоматично розмір кешу і вкагувати розмір кешу вручну (МБ):",
	"Понижувати використання пам'яті коли кеш не потрібний",
	"Додаткові опції кешу",
	"Кключити кешування диску запис",
	"Write out untouched blocks every 2 minutes",
	"Write out finished pieces immediately",
	"Кключити кешування диску читання",
	"Turn off read caching if the upload speed is slow",
	"Видаляти старі блоки з кешу",
	"Increase automatic cache size when cache thrashing",
	"Скачувати кешування диску Windows для запису",
	"Скачувати кешування диску Windows для читання",
	"Властивості торента",
	"Так",
	"Скасувати",
	"Trackers (separate tiers with an empty line)",
	"Bandwidth Settings",
	"Максимальний поріг роздачі (кБ.с): [0:стандартно]",
	"Максимальний поріг завантаження (кБ.с): [0:стандартно]",
	"Число слотів для роздачі: [0: стандартно]",
	"Сідувати поки",
	"Перезаписати стандартні налаштування",
	"Рейтинг: <=",
	"% або час сідування:",
	"Інші налаштування",
	"Initial Seeding",
	"Включити DHT",
	"Peer Exchange",
	"Готово",
	"Назва",
	"%",
	"Пріоритет",
	"Розмір",
	"пропустити",
	"низький",
	"нормальний",
	"високий",
	"Завантажено:",
	"Викачано:",
	"Розповсюдж.:",
	"Залишилося:",
	"Шв. закачки:",
	"Шв. викачки:",
	"Пірів:",
	"Доля участі:",
	"Хеш:",
	"Передача",
	"%d з %d з'єднані (%d в черзі)",
	"З:%s U:%s - %s",
	"Показувати список категорій",
	"Показувати докладну інформацію",
	"Не закачувати",
	"Високий пріоритет",
	"Низький пріоритет",
	"Нормальний пріоритет",
	"Вилучити дані",
	"Форсувати переперевірку",
	"Форсувати старт",
	"Мітка",
	"Пауза",
	"Властивості",
	"Усунути",
	"Видалити і",
	"Старт",
	"Стоп",
	"Активний",
	"Усе",
	"Завершено",
	"Скачується",
	"Неактивний",
	"Без мітки",
	"||Наявн.||Наявність",
	"Готово",
	"Скачано",
	"Швидкість закачки",
	"До кінця лишилось",
	"Мітка",
	"Назва",
	"#",
	"Піри",
	"Залишилось",
	"Розповсюджувачі",
	"Сіди/Піри",
	"Співвідношення",
	"Розмір",
	"Статус",
	"Викачано",
	"Швидкість викачки",
	"Are you sure you want to remove the %d selected torrents and all associated data?",
	"Are you sure you want to remove the selected torrent and all associated data?",
	"Are you sure you want to remove the %d selected torrents?",
	"Are you sure you want to remove the selected torrent?",
	"Перевірено%:.1d%%",
	"Скачується",
	"Помилка: %s",
	"Закінчено",
	"На паузі",
	"У черзі",
	"Розповсюдж.",
	"Зупинено",
	"Введіть мітку",
	"Введіть нову мітку для обраних торентів:",
	"Нова мітка...",
	"Видалити мітку",
	"Загальне||Індикатор||Піри||Частини||Файли||Журнал||",
	"Додати торрент",
	"Пауза",
	"Уподобання",
	"Видалити",
	"Старт",
	"Стоп",
	"ҐБ",
	"кБ",
	"МБ",
	"Додатково",
	"Пропускна здатність",
	"З'єднання",
	"Дисковий кеш",
	"Каталоги",
	"Загальне",
	"Розклад",
	"Організація Черги",
	"BitTorrent",
	"Веб-Інтерфейс",
	"Transfer Cap",
	"Вимкнено||Ввімкнено||Форсовано||",
	"(жодного)||Socks4||Socks5||HTTPS||HTTP||",
	"Відв-ння||Зав-ння||Відв-ння + Зав-ння||",
	"МБ||ГБ||",
	"1||2||5||7||10||14||15||20||21||28||30||31||",
	"Назва",
	"Значення",
	"<= %d годин",
	"(Ігнорувати)",
	"<= %d хвилин",
	"%dd %dh",
	"%dh %dm",
	"%dm %ds",
	"%ds",
	"%dw %dd",
	"%dy %dw"
], lang_code = "ua";