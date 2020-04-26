$(document).ready(function(){
    
    const formEL = $('.js-form'), //Константа для  form - формы в общем
          btnAddWork = $('.js-btn'), //Константа для элемента формы
          listEL = $('.js-list'),
          listCleanEl = $('.js-items__clean'), // Переменная для "Список пуст..."
          formWorkEl = $('.js-form__work'),
          formDeskrEl = $('.js-form__descr');
       
        
        

    

    function onBtnClickWork(event) {
        event.preventDefault(); //отмена стандартного поведения для формы
        
        let name = formWorkEl.val(),//Забирает то что написали в input
            text = formDeskrEl.val(); // Забирает то что написали в textarea

        // if (name && text) { //Проверяем написано ли что то в формах
        
            // formWorkEl.removeClass('error');
            // formDeskrEl.removeClass('error');
            
            listEL.append(`
                <li class="left-block-list js-list_items">
                    <article class="js-article">
                        <header class="header general-items_style">
                            <h2 class="left-section-text">
                                ${name}
                            </h2>

                            <button class="clear-btn btn-clear js-clear__btn" type="button" name="clearBtnCard"></button>

                            <button class="arrow btn-clear js-arrow" type="button" name="arrowBtnCard"></button>
                        </header>

                        <p class="general-items_style descr-item js-coments_list">
                        ${text}
                        </p>
                    </article>
                </li>
            `);

            /* Обнуляем/очищаем формы после добавления дела
            добавляя пустую строку в val('') */
            listCleanEl.hide();
            this.reset();

            // name = formWorkEl.val('');
            // text = formDeskrEl.val('');


        // // } else { //Если в формах ничего нет и нажали кнопку добавить, то добавляется клас error
        //     formWorkEl.addClass('error');
        //     formDeskrEl.addClass('error');
        // }
    }

    formEL.on('submit', onBtnClickWork);
})

