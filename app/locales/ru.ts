import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import { LocaleType } from "./index";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";
// если вы добавляете новый перевод, используйте PartialLocaleType вместо LocaleType

const isApp = !!getClientConfig()?.isApp;
const ru: LocaleType = {
  WIP: "Скоро...",
  Error: {
    Unauthorized: isApp
      ? `Прежде чем начать:
    \\ нажмите [здесь](/#/settings), чтобы изменить настройки ⚙️`
      : `Прежде чем начать:
    \ нажмите [здесь](/#/settings), чтобы изменить настройки ⚙️
 `,
  },
  Auth: {
    Return: "Вернуться",
    Title: "Требуется код доступа",
    Tips: "Пожалуйста, введите код доступа ниже",
    SubTips: "Или введите свой ключ API OpenAI или Google",
    Input: "код доступа",
    Confirm: "Подтвердить",
    Later: "Позже",
    SaasTips: "Слишком сложно, используйте прямо сейчас",
    TopTips:
      "🥳 Акция запуска NextChat AI: мгновенно разблокируйте новейшие модели, такие как OpenAI o1, GPT-4o, Claude-3.5!",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} сообщений`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} сообщений`,
    EditMessage: {
      Title: "Редактировать все сообщения",
      Topic: {
        Title: "Тема",
        SubTitle: "Изменить текущую тему",
      },
    },
    Actions: {
      ChatList: "Перейти к списку чатов",
      CompressedHistory: "Сжатый запрос истории памяти",
      Export: "Экспортировать все сообщения в Markdown",
      Copy: "Копировать",
      Stop: "Остановить",
      Retry: "Повторить попытку",
      Pin: "Закрепить",
      PinToastContent: "Закреплено 1 сообщение в контекстных подсказках",
      PinToastAction: "Посмотреть",
      Delete: "Удалить",
      Edit: "Редактировать",
      FullScreen: "Полноэкранный режим",
      RefreshTitle: "Обновить заголовок",
      RefreshToast: "Отправлен запрос на обновление заголовка",
      Speech: "Воспроизвести",
      StopSpeech: "Остановить",
    },
    Commands: {
      new: "Начать новый чат",
      newm: "Начать новый чат с ролью",
      next: "Следующий чат",
      prev: "Предыдущий чат",
      clear: "Очистить контекст",
      fork: "Скопировать чат",
      del: "Удалить чат",
    },
    InputActions: {
      Stop: "Остановить",
      ToBottom: "К последнему",
      Theme: {
        auto: "Авто",
        light: "Светлая тема",
        dark: "Темная тема",
      },
      Prompt: "Подсказки",
      Masks: "Роли",
      Clear: "Очистить контекст",
      Settings: "Настройки",
      UploadImage: "Загрузить изображения",
    },
    Rename: "Переименовать чат",
    Typing: "Печатает...",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} для отправки`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для переноса";
      }
      return inputHints + ", / для поиска подсказок, : для использования команд";
    },
    Send: "Отправить",
    StartSpeak: "Начать говорить",
    StopSpeak: "Остановить речь",
    Config: {
      Reset: "Сбросить до настроек по умолчанию",
      SaveAs: "Сохранить как роль",
    },
    IsContext: "Контекстная подсказка",
    ShortcutKey: {
      Title: "Сочетания клавиш",
      newChat: "Открыть новый чат",
      focusInput: "Фокус на поле ввода",
      copyLastMessage: "Скопировать последний ответ",
      copyLastCode: "Скопировать последний блок кода",
      showShortcutKey: "Показать сочетания клавиш",
    },
  },
  Export: {
    Title: "Экспорт сообщений",
    Copy: "Скопировать все",
    Download: "Скачать",
    MessageFromYou: "Сообщение от вас",
    MessageFromChatGPT: "Сообщение от ChatGPT",
    Share: "Поделиться в ShareGPT",
    Format: {
      Title: "Формат экспорта",
      SubTitle: "Markdown или изображение PNG",
    },
    IncludeContext: {
      Title: "Включая контекст",
      SubTitle: "Экспортировать контекстные подсказки в роли или нет",
    },
    Steps: {
      Select: "Выбрать",
      Preview: "Предварительный просмотр",
    },
    Image: {
      Toast: "Захват изображения...",
      Modal: "Нажмите и удерживайте или щелкните правой кнопкой мыши, чтобы сохранить изображение",
    },
    Artifacts: {
      Title: "Поделиться артефактами",
      Error: "Ошибка совместного использования",
    },
  },
  Select: {
    Search: "Поиск",
    All: "Выбрать все",
    Latest: "Выбрать последние",
    Clear: "Очистить",
  },
  Memory: {
    Title: "Подсказка памяти",
    EmptyContent: "Пока ничего.",
    Send: "Отправить память",
    Copy: "Скопировать память",
    Reset: "Сбросить сеанс",
    ResetConfirm:
      "Сброс очистит текущую историю разговора и историческую память. Вы уверены, что хотите сбросить?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Подтвердите удаление выбранного разговора?",
    DeleteToast: "Чат удален",
    Revert: "Вернуть",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Все настройки",
    ShowPassword: "Показать пароль",
    Danger: {
      Reset: {
        Title: "Сбросить все настройки",
        SubTitle: "Сбросить все элементы настроек до значений по умолчанию",
        Action: "Сбросить",
        Confirm: "Подтвердите сброс всех настроек до значений по умолчанию?",
      },
      Clear: {
        Title: "Очистить все данные",
        SubTitle: "Очистить все сообщения и настройки",
        Action: "Очистить",
        Confirm: "Подтвердите очистку всех сообщений и настроек?",
      },
    },
    Lang: {
      Name: "Language", // ВНИМАНИЕ: если вы хотите добавить новый перевод, не переводите это значение, оставьте его как `Language`
      All: "Все языки",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер шрифта",
      SubTitle: "Настроить размер шрифта содержимого чата",
    },
    FontFamily: {
      Title: "Семейство шрифтов чата",
      SubTitle:
        "Семейство шрифтов содержимого чата, оставьте пустым, чтобы применить глобальный шрифт по умолчанию",
      Placeholder: "Название семейства шрифтов",
    },
    InjectSystemPrompts: {
      Title: "Внедрить системные подсказки",
      SubTitle: "Внедрить глобальную системную подсказку для каждого запроса",
    },
    InputTemplate: {
      Title: "Шаблон ввода",
      SubTitle: "Новое сообщение будет заполнено в этом шаблоне",
    },

    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последняя версия",
      CheckUpdate: "Проверить обновление",
      IsChecking: "Проверка обновления...",
      FoundUpdate: (x: string) => `Найдена новая версия: ${x}`,
      GoToUpdate: "Обновить",
      Success: "Обновление успешно.",
      Failed: "Не удалось обновить.",
    },
    SendKey: "Клавиша отправки",
    Theme: "Тема",
    TightBorder: "Плотная граница",
    SendPreviewBubble: {
      Title: "Показать пузырь предварительного просмотра отправки",
      SubTitle: "Предварительный просмотр уценки в пузыре",
    },
    AutoGenerateTitle: {
      Title: "Автоматически генерировать заголовок",
      SubTitle: "Создайте подходящий заголовок на основе содержимого разговора",
    },
    Sync: {
      CloudState: "Последнее обновление",
      NotSyncYet: "Еще не синхронизировано",
      Success: "Синхронизация прошла успешно",
      Fail: "Ошибка синхронизации",

      Config: {
        Modal: {
          Title: "Настройка синхронизации",
          Check: "Проверить соединение",
        },
        SyncType: {
          Title: "Тип синхронизации",
          SubTitle: "Выберите предпочитаемый сервис синхронизации",
        },
        Proxy: {
          Title: "Включить CORS прокси",
          SubTitle: "Включить прокси, чтобы избежать ограничений междоменного доступа",
        },
        ProxyUrl: {
          Title: "Конечная точка прокси",
          SubTitle:
            "Применимо только к встроенному прокси CORS для этого проекта",
        },

        WebDav: {
          Endpoint: "Конечная точка WebDAV",
          UserName: "Имя пользователя",
          Password: "Пароль",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Имя резервной копии",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Локальные данные",
      Overview: (overview: any) => {
        return `${overview.chat} чатов, ${overview.message} сообщений, ${overview.prompt} подсказок, ${overview.mask} масок`;
      },
      ImportFailed: "Не удалось импортировать из файла",
    },
    Mask: {
      Splash: {
        Title: "Заставка с ролями",
        SubTitle: "Показать заставку с ролями перед началом нового чата",
      },
      Builtin: {
        Title: "Скрыть встроенные роли",
        SubTitle: "Скрыть встроенные роли в списке ролей",
      },
    },
    Prompt: {
      Disable: {
        Title: "Отключить автозаполнение",
        SubTitle: "Введите / для запуска автозаполнения",
      },
      List: "Список подсказок",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} встроенных, ${custom} пользовательских`,
      Edit: "Редактировать",
      Modal: {
        Title: "Список подсказок",
        Add: "Добавить один",
        Search: "Поиск подсказок",
      },
      EditModal: {
        Title: "Редактировать подсказку",
      },
    },
    HistoryCount: {
      Title: "Количество прикрепленных сообщений",
      SubTitle: "Количество отправленных сообщений, прикрепленных к каждому запросу",
    },
    CompressThreshold: {
      Title: "Порог сжатия истории",
      SubTitle:
        "Будет сжимать, если длина несжатых сообщений превышает значение",
    },

    Usage: {
      Title: "Баланс аккаунта",
      SubTitle(used: any, total: any) {
        return `Использовано в этом месяце $${used}, подписка $${total}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверить",
      NoAccess: "Введите ключ API для проверки баланса",
    },
    Access: {
      SaasStart: {
        Title: "Использовать NextChat AI",
        Label: " (Самый экономичный вариант)",
        SubTitle:
          "Поддерживается NextChat, настройка не требуется, разблокируйте OpenAI o1, GPT-4o," +
          " Claude-3.5 и многое другое",
        ChatNow: "Начать сейчас",
      },
      AccessCode: {
        Title: "Код доступа",
        SubTitle: "Включен контроль доступа",
        Placeholder: "Введите код",
      },
      CustomEndpoint: {
        Title: "Пользовательская конечная точка",
        SubTitle: "Использовать пользовательский сервис Azure или OpenAI",
      },
      Provider: {
        Title: "Поставщик модели",
        SubTitle: "Выберите Azure или OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "Ключ API OpenAI",
          SubTitle: "Пользовательский ключ API OpenAI",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "Конечная точка OpenAI",
          SubTitle: "Должен начинаться с http(s):// или использовать /api/openai по умолчанию",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Ключ API Azure",
          SubTitle: "Проверьте свой ключ API в консоли Azure",
          Placeholder: "Ключ API Azure",
        },

        Endpoint: {
          Title: "Конечная точка Azure",
          SubTitle: "Пример: ",
        },

        ApiVerion: {
          Title: "Версия API Azure",
          SubTitle: "Проверьте версию своего API в консоли Azure",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Ключ API Anthropic",
          SubTitle:
            "Используйте пользовательский ключ Anthropic, чтобы обойти ограничения доступа по паролю",
          Placeholder: "Ключ API Anthropic",
        },

        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },

        ApiVerion: {
          Title: "Версия API (версия API Claude)",
          SubTitle: "Выберите и введите определенную версию API",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Ключ API Baidu",
          SubTitle: "Используйте пользовательский ключ API Baidu",
          Placeholder: "Ключ API Baidu",
        },
        SecretKey: {
          Title: "Секретный ключ Baidu",
          SubTitle: "Используйте пользовательский секретный ключ Baidu",
          Placeholder: "Секретный ключ Baidu",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "не поддерживается, настройте в .env",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "Ключ API Tencent",
          SubTitle: "Используйте пользовательский ключ API Tencent",
          Placeholder: "Ключ API Tencent",
        },
        SecretKey: {
          Title: "Секретный ключ Tencent",
          SubTitle: "Используйте пользовательский секретный ключ Tencent",
          Placeholder: "Секретный ключ Tencent",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "не поддерживается, настройте в .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "Ключ API ByteDance",
          SubTitle: "Используйте пользовательский ключ API ByteDance",
          Placeholder: "Ключ API ByteDance",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Ключ API Alibaba",
          SubTitle: "Используйте пользовательский ключ API Alibaba Cloud",
          Placeholder: "Ключ API Alibaba Cloud",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "Ключ API Moonshot",
          SubTitle: "Используйте пользовательский ключ API Moonshot",
          Placeholder: "Ключ API Moonshot",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },
      },
      XAI: {
        ApiKey: {
          Title: "Ключ API XAI",
          SubTitle: "Используйте пользовательский ключ API XAI",
          Placeholder: "Ключ API XAI",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },
      },
      Stability: {
        ApiKey: {
          Title: "Ключ API Stability",
          SubTitle: "Используйте пользовательский ключ API Stability",
          Placeholder: "Ключ API Stability",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "Ключ API Iflytek",
          SubTitle: "Используйте ключ API Iflytek",
          Placeholder: "Ключ API Iflytek",
        },
        ApiSecret: {
          Title: "Секрет API Iflytek",
          SubTitle: "Используйте секрет API Iflytek",
          Placeholder: "Секрет API Iflytek",
        },
        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },
      },
      CustomModel: {
        Title: "Пользовательские модели",
        SubTitle: "Параметры пользовательской модели, разделенные запятой",
      },
      Google: {
        ApiKey: {
          Title: "Ключ API",
          SubTitle: "Получите ключ API в Google AI",
          Placeholder: "Ключ API Google AI",
        },

        Endpoint: {
          Title: "Адрес конечной точки",
          SubTitle: "Пример: ",
        },

        ApiVersion: {
          Title: "Версия API (специфичная для gemini-pro)",
          SubTitle: "Выберите конкретную версию API",
        },
        GoogleSafetySettings: {
          Title: "Настройки безопасности Google",
          SubTitle: "Выберите уровень фильтрации безопасности",
        },
      },
    },

    Model: "Модель",
    CompressModel: {
      Title: "Модель для краткого изложения",
      SubTitle: "Модель, используемая для сжатия истории и создания заголовка",
    },
    Temperature: {
      Title: "Температура",
      SubTitle: "Чем больше значение, тем более случайным будет вывод",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Не изменяйте это значение вместе с температурой",
    },
    MaxTokens: {
      Title: "Максимальное количество токенов",
      SubTitle: "Максимальная длина входных токенов и сгенерированных токенов",
    },
    PresencePenalty: {
      Title: "Штраф за присутствие",
      SubTitle:
        "Чем больше значение, тем выше вероятность того, что речь пойдет о новых темах",
    },
    FrequencyPenalty: {
      Title: "Штраф за частоту",
      SubTitle:
        "Чем больше значение, тем меньше вероятность повторения одной и той же строки",
    },
    TTS: {
      Enable: {
        Title: "Включить TTS",
        SubTitle: "Включить службу преобразования текста в речь",
      },
      Autoplay: {
        Title: "Включить автовоспроизведение",
        SubTitle:
          "Автоматически генерировать речь и воспроизводить ее, сначала необходимо включить переключатель преобразования текста в речь",
      },
      Model: "Модель",
      Voice: {
        Title: "Голос",
        SubTitle: "Голос, который будет использоваться при создании аудио",
      },
      Speed: {
        Title: "Скорость",
        SubTitle: "Скорость генерируемого аудио",
      },
      Engine: "Движок TTS",
    },
  },
  Store: {
    DefaultTopic: "Новый разговор",
    BotHello: "Здравствуйте! Чем я могу вам помочь сегодня?",
    Error: "Что-то пошло не так, повторите попытку позже.",
    Prompt: {
      History: (content: string) =>
        "Это краткое изложение истории чата: " + content,
      Topic:
        "Пожалуйста, сгенерируйте заголовок из четырех-пяти слов, суммирующий наш разговор, без вводных слов, знаков препинания, кавычек, точек, символов, полужирного шрифта или дополнительного текста. Удалите заключительные кавычки.",
      Summarize:
        "Кратко изложите обсуждение в 200 словах или меньше, чтобы использовать его в качестве подсказки для будущего контекста.",
    },
  },
  Copy: {
    Success: "Скопировано в буфер обмена",
    Failed: "Не удалось скопировать, пожалуйста, предоставьте разрешение на доступ к буферу обмена",
  },
  Download: {
    Success: "Контент загружен в ваш каталог.",
    Failed: "Не удалось загрузить.",
  },
  Context: {
    Toast: (x: any) => `С ${x} контекстными подсказками`,
    Edit: "Настройки текущего чата",
    Add: "Добавить подсказку",
    Clear: "Контекст очищен",
    Revert: "Вернуть",
  },
  Discovery: {
    Name: "Открытие",
  },
  FineTuned: {
    Sysmessage: "Вы помощник, который",
  },
  SearchChat: {
    Name: "Поиск",
    Page: {
      Title: "Поиск по истории чата",
      Search: "Введите поисковый запрос для поиска по истории чата",
      NoResult: "Результаты не найдены",
      NoData: "Нет данных",
      Loading: "Загрузка...",

      SubTitle: (count: number) => `Найдено ${count} результатов`,
    },
    Item: {
      View: "Посмотреть",
    },
  },
  Plugin: {
    Name: "Плагин",
    Page: {
      Title: "Плагины",
      SubTitle: (count: number) => `${count} плагинов`,
      Search: "Поиск плагина",
      Create: "Создать",
      Find: "Вы можете найти замечательные плагины на github: ",
    },
    Item: {
      Info: (count: number) => `${count} метод`,
      View: "Посмотреть",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердить удаление?",
    },
    Auth: {
      None: "Нет",
      Basic: "Базовая",
      Bearer: "Носитель",
      Custom: "Пользовательская",
      CustomHeader: "Имя параметра",
      Token: "Токен",
      Proxy: "Использование прокси",
      ProxyDescription: "Использование прокси-серверов для устранения ошибки CORS",
      Location: "Местоположение",
      LocationHeader: "Заголовок",
      LocationQuery: "Запрос",
      LocationBody: "Тело",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактировать плагин ${readonly ? "(только для чтения)" : ""}`,
      Download: "Скачать",
      Auth: "Тип аутентификации",
      Content: "Схема OpenAPI",
      Load: "Загрузить по URL",
      Method: "Метод",
      Error: "Ошибка схемы OpenAPI",
    },
  },
  Mask: {
    Name: "Роль",
    Page: {
      Title: "Шаблон подсказки",
      SubTitle: (count: number) => `${count} шаблонов подсказок`,
      Search: "Поиск шаблонов",
      Create: "Создать",
    },
    Item: {
      Info: (count: number) => `${count} подсказок`,
      Chat: "Чат",
      View: "Посмотреть",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердить удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактировать шаблон подсказки ${readonly ? "(только для чтения)" : ""}`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
    Config: {
      Avatar: "Аватар бота",
      Name: "Имя бота",
      Sync: {
        Title: "Использовать глобальную конфигурацию",
        SubTitle: "Использовать глобальную конфигурацию в этом чате",
        Confirm: "Подтвердить перезапись пользовательской конфигурации глобальной конфигурацией?",
      },
      HideContext: {
        Title: "Скрыть контекстные подсказки",
        SubTitle: "Не показывать контекстные подсказки в чате",
      },
      Artifacts: {
        Title: "Включить артефакты",
        SubTitle: "Можно отображать HTML-страницу, если включены артефакты.",
      },
      CodeFold: {
        Title: "Включить сворачивание кода",
        SubTitle:
          "Автоматически сворачивать/разворачивать слишком длинные блоки кода, когда включено сворачивание кода",
      },
      Share: {
        Title: "Поделиться этой ролью",
        SubTitle: "Создать ссылку на эту роль",
        Action: "Скопировать ссылку",
      },
    },
  },
  NewChat: {
    Return: "Вернуться",
    Skip: "Просто начать",
    Title: "Выберите роль",
    SubTitle: "Общайтесь с душой, стоящей за ролью",
    More: "Найти еще",
    NotShow: "Больше не показывать",
    ConfirmNoShow: "Подтвердить отключение? Вы можете включить его позже в настройках.",
  },

  UI: {
    Confirm: "Подтвердить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Create: "Создать",
    Edit: "Редактировать",
    Export: "Экспорт",
    Import: "Импорт",
    Sync: "Синхронизация",
    Config: "Конфигурация",
  },
  Exporter: {
    Description: {
      Title: "Будут отображаться только сообщения после очистки контекста",
    },
    Model: "Модель",
    Messages: "Сообщения",
    Topic: "Тема",
    Time: "Время",
  },
  URLCommand: {
    Code: "Обнаружен код доступа из URL, подтвердить применение? ",
    Settings: "Обнаружены настройки из URL, подтвердить применение?",
  },
  SdPanel: {
    Prompt: "Подсказка",
    NegativePrompt: "Отрицательная подсказка",
    PleaseInput: (name: string) => `Пожалуйста, введите ${name}`,
    AspectRatio: "Соотношение сторон",
    ImageStyle: "Стиль изображения",
    OutFormat: "Формат вывода",
    AIModel: "Модель ИИ",
    ModelVersion: "Версия модели",
    Submit: "Отправить",
    ParamIsRequired: (name: string) => `${name} обязателен`,
    Styles: {
      D3Model: "3d-модель",
      AnalogFilm: "аналоговая пленка",
      Anime: "аниме",
      Cinematic: "кинематографический",
      ComicBook: "комикс",
      DigitalArt: "цифровое искусство",
      Enhance: "улучшить",
      FantasyArt: "фэнтези-арт",
      Isometric: "изометрический",
      LineArt: "линейное искусство",
      LowPoly: "низкополигональный",
      ModelingCompound: "моделирующий состав",
      NeonPunk: "неоновый панк",
      Origami: "оригами",
      Photographic: "фотографический",
      PixelArt: "пиксельное искусство",
      TileTexture: "текстура плитки",
    },
  },
  Sd: {
    SubTitle: (count: number) => `${count} изображений`,
    Actions: {
      Params: "Посмотреть параметры",
      Copy: "Скопировать подсказку",
      Delete: "Удалить",
      Retry: "Повторить попытку",
      ReturnHome: "Вернуться домой",
      History: "История",
    },
    EmptyRecord: "Пока нет изображений",
    Status: {
      Name: "Статус",
      Success: "Успешно",
      Error: "Ошибка",
      Wait: "Ожидание",
      Running: "Выполняется",
    },
    Danger: {
      Delete: "Подтвердить удаление?",
    },
    GenerateParams: "Сгенерировать параметры",
    Detail: "Подробнее",
  },
};

export default ru;
