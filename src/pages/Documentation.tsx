import React from 'react';
import DocumentationBlock from '../components/DocumentationBlock';

function Documentation() {
  return (
    <div className="documentation">
      <h1>Документация</h1>
      <p className="documentation__info">
        Для начала работы скачайте репозиторий в ваш проект
        <strong>
          <a href="https://github.com/NikitaDeveloperWeb/EazyUIComponents"> здесь.</a>
        </strong>
      </p>
      <p className="documentation__info">
        Или сколнируйте с помощью команды
        <div className="documentation__info__comands">
          git clone https://github.com/NikitaDeveloperWeb/EazyUIComponents
        </div>
      </p>
      <p className="documentation__info">Импортируйте необходимый вам компонент в ваш проект.</p>
      <p className="documentation__info">
        Версии технологий используемые для этого проекта:
        <br />
        <br />
        <div className="documentation__info__comands">"react":"^17.0.1"</div>
        <br />
        <div className="documentation__info__comands">"typescript":"^4.1.2"</div>
        <br />
        <div className="documentation__info__comands">"@emotion/react":"^11.1.5"</div>
        <br />
        <div className="documentation__info__comands">"@emotion/styled":"^11.1.5"</div>
        <br />
        <div className="documentation__info__comands">"@material-ui/core":"^4.11.3"</div>
        <br />
        <div className="documentation__info__comands">"@material-ui/icons":"^4.11.2"</div>
        <br />
      </p>
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Контейнеры"
        description=" Контейнеры центрирует содержимое по горизонтали. Это базовый элемент всех макетов. Несмотря
          на то, что контейнеры могут быть вложенными, большинство макетов не требуют вложенного
          контейнера."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Поля"
        description=" Текстовые поля позволяют пользователям вводить текст в интерфейсе. Обычно они появляются в формах и диалогах. Поля представляют собой полноценный элемент управления формы, включая метку (label), само поле ввода и вспомогательный текст."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Кнопки"
        description="Кнопки позволяют пользователям выполнять действия и делать выбор одним нажатием. Кнопки обозначают действия, которые могут выполнять пользователи. Они используются в таких местах пользовательского интерфейса, как:
        диалоги,
        всплывающие окно,
        формы,
        карточки,
        панели инструментов."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Формы"
        description="Формы являются одним из важных элементов любого сайта и предназначены для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Список"
        description="Компонент список используются для сбора информации, предоставленной пользователем, из списка параметров.Меню располагаются над вызвавшими их элементами таким образом, чтобы элемент меню, выбранный в данный момент, перекрывал вызывающий элемент."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Модальные окна"
        description="Модальный компонент обеспечивает прочную основу для создания диалогов, всплывающих окон, лайтбоксов и всего остального."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Слайдер"
        description="Это специальный элемент веб-дизайна, представляющий собой блок определенной ширины чаще всего в шапке веб-страницы. Главная его фишка в изменяющихся в ручном или автоматическом режиме элементах – картинок, текстов и ссылок. Популярность слайдеры приобрели с распространением javascript-фреймворков."
      />
      <div className="documentation__line"></div>
      <DocumentationBlock
        title="Меню"
        description="Меню временно отображают список вариантов.Меню отображает список выбранного на временной поверхности. Оно появляется когда пользователь взаимодействует с кнопкой или другим элементом управления.Простые меню по умолчанию открываются над якорным элементом (это поведение можно изменить с помощью props). Находясь вблизи края экрана, простое меню располагается таким образом, чтобы все элементы меню были полностью видны.Выбор варианта должен в идеале немедленно зафиксировать его и закрыть меню.Неточности: В отличии от простых меню, простые диалоги могут содержать дополнительную информацию относительно опций, доступных для элемента списка или предоставлять навигационные или ортогональные действия, относящиеся к главной задаче. Хотя они могут отображать один и тот же контент, простые меню более предпочтительны в отличии от простых диалогов, потому что они создают меньше препятствий текущему контексту пользователя."
      />
      <div className="documentation__line"></div>
    </div>
  );
}

export default Documentation;
