// https://playcode.io/880124

(function () {

    class Tooltip {
        constructor() {
            // Создается dom-element дял отображения подсказки
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';
            this.el.classList.add(this.name);

            document.body.appendChild(this.el);

            this.onHide = this.onHide.bind(this);
            this.listeners = []

        }

        get name() {
            return 'tooltip';
        }

        get indent() {
            return 5;
        }

// Создает обработчик элементу
        delegate(eventName, element, cssSelector, callback) {
            const fn = event => {
                if (!event.target.matches(cssSelector)) {
                    return;
                }

                callback(event);
            };

            element.addEventListener(eventName, fn);
            this.listeners.push({fn, element, eventName});
            return this;
        }

        onShow = (event) => {
            //У эл-та добавить класс tooltip_active

            // Эл-нт на который навели
            const targetEl = event.target;
            // Получение значения из атрибута и вставляем его
            this.el.innerHTML = targetEl.getAttribute('data-tooltip');
            // Добавляем класс актив
            this.el.classList.add(`${this.name}_active`)
            // Применям метод для получения координат
            const coords = targetEl.getBoundingClientRect();
            // Растояние от верха + доп
            let top = coords.bottom + this.indent;

            // Если элемент не влезает, показываем подсказку сверху
            if (top + coords.height > document.documentElement.clientHeight) {
                top = coords.top - this.indent - coords.height;
            }
            // Применяем стили для подсказки
            this.el.style.top = `${top}px`;
            this.el.style.left = `${coords.left}px`;

            // Пример добавления проскролленой области
           // this.el.style.top = `${top + window.screenY}px`;
        }

        onHide() {
            //У эл-та удалить класс tooltip_active
            this.el.classList.remove(`${this.name}_active`)
        }

        // Навешивает обработчик на root эл-нт, в нашем случае document.body. Если у event-target селектор соответсвует
        // переданному ([data-tooltip]), то вызывается указанный коллбэк.
        // Навешиваем на события ухода и прихода мышки на эл-ты
        attach(root) {
            this
                .delegate('mouseover', root, '[data-tooltip]', this.onShow)
                .delegate('mouseout', root, '[data-tooltip]', this.onHide);
        }

        detach() {
            //Перебераем все элементы и удаляем с них события
            for (const {fn, element, eventName} of this.listeners) {
                element.removeEventListener(eventName, fn);
            }

            // Удаляем всех слушателей из масива
            this.listeners = [];
        }
    }

    window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);