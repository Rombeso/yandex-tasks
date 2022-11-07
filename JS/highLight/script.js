'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */

function highlight(table) {

    let newTable = table
    let tr = newTable.querySelector('tbody').children
    //let tr = table.querySelector('tbody').getElementsByTagName('tr')

    for (let item of tr) {
        // console.log(tr)
        let td = item.children
        //console.log(td)
        let count = 0;
        for (let elem of td) {
            // console.log(elem.dataset.role)
            if (count === 3) {
                if (
                    elem.dataset.role === 'admin'
                ) {
                    elem.classList.add('admin')
                }
                if (elem.dataset.role === 'regular') {
                    elem.classList.add('regular')
                }
                if (!elem.dataset.role) {
                    console.log(elem)
                    elem.setAttribute('hidden', 'true')
                }
            }
            if (count === 2) {
                if (elem.textContent === 'm') {
                    elem.classList.add('male')
                }
                if (elem.textContent === 'f') {
                    elem.classList.add('female')
                }
            }
            if (count === 1) {
                if (+elem.textContent < 18) {
                    elem.style.textDecoration = 'line-through'
                }
            }
            count++
        }

    }
}
