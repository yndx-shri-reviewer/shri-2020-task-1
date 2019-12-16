# Контентные блоки

Контентные блоки задают содержимое страницы и состоят из базовых блоков.

Если необходимо, контентные блоки могут содержать собственные уникальные или косметические стили. Значения свойств в стилях всех визуальных сущностей нужно брать из модификаторов темы (цвет, размер, регистр).

## Блоки, которые нужно собрать

### `.payment` — блок платежной формы
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/payment.png)

Из уровня дизайн-сиcтемы должны использоваться:

- cтили блока-паттерна `.form`,
- стили контентного блока `.text`, `button`.

Кроме того, блок должен содержать собственные уникальные дополнительные стили.

#### Исходные стили
- размер границ — `3px`.


### `.warning` — блок предупреждения
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/warning.png)
 
Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.informer`,
- стили контентных блоков `.text`, `placeholder`, `button`,
- стили блока темы.

Кроме того, блок должен содержать собственные уникальные дополнительные стили.

#### Исходные стили

- минимальная высота — `335px`,
- размер внешних вертикальных отступов вложенного блока placeholder — `m`.


### `.product` — блок карточки товара
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/product.png)

[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/product2.png)(в инвёрсной теме)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`,
- стили контентного блока `.text`.

Кроме того, блок должен содержать собственные уникальные дополнительные стили.

#### Исходные стили

- минимальная высота — `300px`,
- размер границ — `3px`,
- высота изображения — `160px`.


### `.history` — блок истории операций
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/history.png)

[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/history2.png)(в раскрытом виде)
 
Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.list`,
- стили контентных блоков `.text`, `brand-logo`.

Кроме того, блок должен содержать собственные уникальные дополнительные стили и логику раскрытия.

#### Исходные стили
- размер границ — `3px`.


### `.cover` — блок обложки товара
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/cover.png)

Из уровня дизайн-сиcтемы блок должен использовать:
- стили блока-паттерна `.card`,
- стили контентного блока `.text`.

Кроме того, блок должен содержать собственные уникальные дополнительные стили.

#### Исходные стили

- минимальная высота — `472px`,
- отступ между изображением и текстом — `l`,
- высота изображения — `180px`,
- высота кнопки — `l`.


### `.event` — блок мероприятия
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/event.png)

Из уровня дизайн-сиcтемы блок должен использовать:

- стили блока-паттерна `.card`,
- стили контентных блоков `.text`, `avatar`, `brand-logo`.

Кроме того, блок должен содержать собственные уникальные дополнительные стили.

#### Исходные стили

- минимальная высота — `400px`,
- величина отступа между логотипами и первой строкой равна значению `xxl`,
- величина отступа между заголовком и текстом — `s`,
- величина отступа между логотипами — `xs`.


### `.header` — сквозной блок шапки
[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/header.png)

Блок должен содержать собственные уникальные стили.

#### Исходные стили

- значения вертикальных отступов: `xxxl` — вертикальный, `--gap` горизонтальный;
- к краю экрана не прилипает;
- фиксированная ширину логотипа — `179px`, высота — `34px`, цвет соответствует цвету основного текста;
- максимальная ширина контента внутри блока — `1280px`.


### `.onoffswitch` — сквозной блок переключателя тем

Должен содержать собственные уникальные стили и логику переключения тем (располагается внутри шапки).
Осуществляет переключение между дефолтной и инверсной темами. Блоки с темами `project-warning` и `project-brand` остаются без изменений.

#### Исходные стили

- фиксированная ширину — `97px`, высота — `32px`;
- фиксированная ширина ползунка — `24px`, высота — `24px`;
- цвет фона ползунка соответствует цвету границ;
- ширина границы — `2px`.

### `.footer` — сквозной блок подвала

[Скриншот](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/footer.png)

Из уровня дизайн-сиcтемы блок использует стили контентного блока `.text`

Кроме того, блок должен содержать собственные уникальные дополнительные стили.

#### Исходные стили

- значения вертикальных отступов: `xxxl` — вертикальный, `--gap` — горизонтальный;
- к краю экрана не прилипает;
- максимальная ширина контента — `1280px`.

## Помощь: подробная спецификация блоков с подсказками, на каком узле и в какой модификации используется блок паттерна или его элементы.

### Смысловой блок: `.payment`
#### Примиксованные блоки паттернов:

- `payment (form_border_all)`,
- `payment__header` (`form__item_space-v_l` `form__item_space-h_xl` `form__item_border_bottom`),
- `payment__content` (`form__item_space-v_xxxl` `form__item_space-h_xl` `form__item_border_bottom`),
- `payment__footer` (`form__item_distribute_between` `form__item_border_bottom` `form__item_vertical-align_center` `form__item_space-v_l` `form__item_space-h_xl`),
- `form__item` (`form__item_indent-b_xl` `form__item_distribute_between` `form__item_vertical-align_center`),
- `form__label` (`form__label_width_default`).

#### Вложенные контентные блоки:
- `text` `text_view_primary` `text_size_l`, `text_size_xxl` (для заголовка формы),
- `button` `button_size_l`,
- `input` `input_size_l`.


### Смысловой блок: `.warning`
#### Примиксованные блоки паттернов:

- `warning` (`informer_view_default` `informer_border_all` `theme_color_project-warning`),
- `warning__content` (`informer__content_distribute_center` `informer__content_space-a_xxl`),
- `warning__button-wrapper` (`informer__action_distribute_center` `informer__action_space-a_xl`).

#### Вложенные контентные блоки:

- `text` `text_view_primary` `text_size_xl` `text_align_center`,
- `placeholder` `placeholder_view_primary` `placeholder_size_m`,
- `button` `button_size_l`.


### Смысловой блок: `.product`

#### Примиксованные блоки паттернов:

- product (card_view_default card_border_all),
- product__content (card__content card__content_space-a_m),
- product__footer (card__footer card__footer_space-a_m),
- product__image (theme_color_project-inverse или theme_color_project-default).

#### Вложенные контентные блоки:

- `text` `text_view_primary` `text_size_m`,
- `text` `text_view_primary` `text_size_s`,
- `image`.


### Смысловой блок: `.history`
#### Примиксованные блоки паттернов:

- `history` (`list_view_default` `list_border_all`),
- `history__transaction` (`list__item_border_bottom` `list__item_space-a_m`)[пункт истории],
- `history__show` (`e-accordion__short` `list__item_vertical-align_center list__item_indent-t_m`)[контейнер для видимой части строки],
- `history__hide` (`e-accordion__more` `e-accordion__more_view_default list__item` `list__item_indent-t_m`)[контейнер для раскрывающейся части строки],
- `history__destination` (`icon-plus icon-plus_vertical-align_center`)[объединяющий блок логотипа и текста],
- `history__pic` (`icon-plus__icon` `icon-plus__icon_indent-r_s` `icon-plus__icon_indent-l_l`)[контейнер для логотипа],
- `history__label` (`icon-plus__block`)[контейнер для текста],
- `history__description` (`list__item_indent-b_m`)[две строки текста в расхлопе],
- `history__actions` (`list__item_distribute_between` `list__item_indent-b_l`)[нижняя строка в расхлопнутом элементе с двумя блоками],

#### Элементы без примиксованных блоков паттернов:

- `history__details` [объединяет блок времени, логотипа и текста],
- `history__time` [блок времени (серые полосы слева)],
- `history__quantity` [правый блок текста в видимой области],

#### Вложенные контентные блоки:

- `brand-logo` `brand-logo_name_blue` `brand-logo_size_m`,
- `brand-logo` `brand-logo_name_green` `brand-logo_size_m`,
- `brand-logo` `brand-logo_name_red` `brand-logo_size_m`,
- `brand-logo` `brand-logo_name_purple` `brand-logo_size_m`,
- `text` `text_view_primary` `text_size_l`,
- `text` `text_view_ghost` `text_size_s`.


### Смысловой блок: `.cover`
#### Примиксованные блоки паттернов:

- `cover` (`card card_view_default` `theme theme_color_project-brand`),
- `cover__info` (`card__content_space-a_xxl`),
- `cover__preview` (`theme_color_project-brand`),
- `cover__footer` (`card__footer_space-a_xxl`),

#### Вложенные контентные блоки:

- `text` `text_view_primary` `text_size_xxl`,
- `image`.


### Смысловой блок: `.event`
#### Примиксованные блоки паттернов:

- `event` (`card_view_default` `theme_color_project-inverse`),
- `event__content` (`card__content_vertical-align_center` `card__content_distribute_center` `card__content_space-a_xxxl`),
- `event__footer` (`card__footer_vertical-align_center` `card__footer_distribute_center` `card__footer_space-a_xxl`).

#### Элементы без примиксованных блоков паттернов:

- `event__preview` (контейнер для изображений),
- `event__speaker` (левое изображение в блоке),
- `event__title` (заголовок события),
- `event__description` (описание события).

#### Вложенные контентные блоки:

- `avatar` `avatar_size_m`,
- `brand-logo` `brand-logo_name_blue` `brand-logo_size_m`,
- `text` `text_view_primary` `text_size_xxl` `text_align_center`,
- `text` `text_view_primary` `text_size_l` `text_align_center`,
- `text` `text_view_link` `text_size_xl` `text_align_center`.


### Смысловой блок: `.product`
#### Примиксованные блоки паттернов:

- `product` (`card_view_default` `card_border_all`),
- `product__content` (`card__content_space-a_m`),
- `product__footer` (`card__footer_space-a_m`).

#### Вложенные контентные блоки:

- `text` `text_view_primary text_size_m`,
- `text` `text_view_primary text_size_s`,
- `image`.


### Сквозной блок: `.header`

- Содержит в себе переключатель темы.

#### Элементы без примиксованных блоков паттернов:

- `header__content` (содержимое блока),
- `header__logo` (логотип слева).

### Сквозной блок: `.onoffswitch`

- Вкладывается в шапку.

#### Элементы без примиксованных блоков паттернов:

- `onoffswitch__button` (квадратная кнопка переключателя).

### Сквозной блок: `.footer`

#### Вложенные контентные блоки:

- `text` `text_view_primary` `text_size_l`.

#### Элементы без примиксованных блоков паттернов
- `footer__content` (содержимое блока).