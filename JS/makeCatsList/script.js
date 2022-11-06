'use strict';

/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */
function makeChatsList(chats) {
const elementUl = document.createElement('ul');
for (let item of chats) {
    const elementLi = document.createElement('li');
    elementLi.style.borderBottom = '1px solid';
    elementLi.innerHTML = `<p>Title: ${item.title}</p><p>Last Massage: ${item.lastMassage}</p>`;
    elementUl.append(elementLi);
}
return elementUl;

}

const chats = [
    {id: 1, title: 'One chat', lastMassage: 'Bla bla...1'},
    {id: 1, title: 'Two chat', lastMassage: 'Bla bla...2'},
    {id: 2, title: 'Three chat', lastMassage: 'Bla bla...3'},
];

window.document.body.append(makeChatsList(chats))