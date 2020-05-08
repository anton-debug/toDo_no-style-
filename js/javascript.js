$(document).ready(function(){
    
    const formEL = $('.js-form'), //Константа для  form - формы в общем
          btnAddWork = $('.js-btn'), //Константа для элемента формы
          listEL = $('.js-list'),
          listCleanEl = $('.js-items__clean'), // Переменная для "Список пуст..."
          formWorkEl = $('.js-form__work'),
          formDeskrEl = $('.js-form__descr');
          
    function formSubmitHandler(event) {
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

                            <button class="clear-btn btn-clear js-clear__btn" type="button" aria-label="Удалить" name="clearBtnCard"></button>

                            <button class="arrow btn-clear js-arrow" type="button" aria-label="Свернуть" name="arrowBtnCard"></button>
                        </header>

                        <p class="general-items_style descr-item js-coments_list">
                        ${text}
                        </p>
                    </article>
                </li>
            `);

            listCleanEl.hide();
            this.reset();
    }

        // Функция удаления карточки дела
    // function deleteComment(item) {
    //     // item.remove();

    //     const items = $('.js-list_items');

    //     if (items.length ==0) {
    //         listCleanEl.show();
    //     } else {
    //         listCleanEl.hide();
    //     }
    // }

    formEL.on('submit', formSubmitHandler);

      $('body').on('click', '.js-clear__btn', function(event){
        event.preventDefault();

        const item = $(this).parents('.js-list_items');

        item.remove();
        
        const items = $('.js-list_items');

        if (items.length ==0) {
            listCleanEl.show();
        } else {
            // listCleanEl.hide();
        }

        // deleteComment(item);
    })

    // function collapseComment(arrow) {
        // arrow.slideToggle(300);

    //     // const arrowDwn = $('.js-arrow');
    //     //       arrowDwn.toggleClass('js-arrow-up');
    // }

    $('body').on('click', '.js-arrow', function(){ 
        const arrow = $(this).parents('.js-article').children('.js-coments_list');

        arrow.slideToggle(500);

        $(this).toggleClass('js-arrow-up');
    })

})

