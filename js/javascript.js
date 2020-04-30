$(document).ready(function(){
    
    const formEL = $('.js-form'), //Константа для  form - формы в общем
          btnAddWork = $('.js-btn'), //Константа для элемента формы
          listEL = $('.js-list'),
          listCleanEl = $('.js-items__clean'), // Переменная для "Список пуст..."
          formWorkEl = $('.js-form__work'),
          formDeskrEl = $('.js-form__descr');
        //   itemsEL = $('.js-list_items');
       
        
        

    

    function onAddBtnClickWork(event) {
        event.preventDefault(); //отмена стандартного поведения для формы
        
        const name = formWorkEl.val(),//Забирает то что написали в input
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

    function deleteComment(item) {
        item.remove();

        const items = $('.js-list_items');

        // addToStorage();

        if (items.length ==0) {
            listCleanEl.show();
            // localStorage.removeItem('comments');
        }
    }

    
    /* При заполнении формы добавление дела - при нажатии на Enter */
    formEL.keypress(function(e) {
        if(e.which == 13) {
            $(this).blur();
            btnAddWork.focus().click();
        }
    });
    /* // При заполнении формы добавление дела - при нажатии на Enter */

    formEL.on('submit', onAddBtnClickWork);


      $('body').on('click', '.js-clear__btn', function(event){
        event.preventDefault();

        const item = $(this).parents('.js-list_items');

        // addToStorage();

        deleteComment(item);
    })

    function collapseComment(arrow) {
        arrow.slideToggle();
    }

    $('body').on('click', '.js-arrow', function(){ 
        const arrow = $(this).parents('.js-list_items').find('.js-coments_list');
        collapseComment(arrow);
    })


})

