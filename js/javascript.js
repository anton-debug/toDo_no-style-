$(document).ready(function(){
    
    const formEL = $('.js-form'), //Константа для  form - формы в общем
          btnAddWork = $('.js-btn'), //Константа для элемента формы
          listEL = $('.js-list'),
          listCleanEl = $('.js-items__clean'), // Переменная для "Список пуст..."
          formWorkEl = $('.js-form__work'),
          formDeskrEl = $('.js-form__descr');
          
    function onAddFormWork(event) {
        event.preventDefault(); //отмена стандартного поведения для формы
        
        const name = formWorkEl.val(),//Забирает то что написали в input
            text = formDeskrEl.val(); // Забирает то что написали в textarea

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
    }

    function deleteComment(item) {
        item.remove();

        const items = $('.js-list_items');

        if (items.length ==0) {
            listCleanEl.show();
        }
    }

    formEL.on('submit', onAddFormWork);

      $('body').on('click', '.js-clear__btn', function(event){
        event.preventDefault();

        const item = $(this).parents('.js-list_items');

        deleteComment(item);
    })

    function collapseComment(arrow) {
        arrow.slideToggle(20);

        const arrowDwn = $('.js-arrow');
              arrowDwn.toggleClass('js-arrow-up');
    }

    $('body').on('click', '.js-arrow', function(){ 
        const arrow = $(this).parents('.js-list_items').find('.js-coments_list');
        collapseComment(arrow);
    })

})

