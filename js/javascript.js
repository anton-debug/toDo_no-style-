$(document).ready(function(){

    let listEL = $('.js-list'); //Переменная на список
    
    const LIST_CLEAN_EL = $('.js-items__clean'); //Константа на 'Список пуст...'
          BTN_ADD_WORK = $('.js-btn'); // Кнопка Добавить дело

          formWorkEL = $('.js-form__work'); //Поле ввода названия дела input
          formDeskrEL = $('.js-form__descr'); // Поле ввода описания дела 'textarea'
          formEL = $('.js-form'); // Форма "Добавить новое дело"
        
        

    function initialState() {
        if (localStorage.getItem('comments') == null) {
            LIST_CLEAN_EL.show();
        } else {
            listEL.html(localStorage.getItem('comments'));
            LIST_CLEAN_EL.hide();
        }
    }

    initialState();

    function addToStorage() {
        let content = listEL.html();
        console.log(content);
        localStorage.setItem('comments', content);
    }

    function addTodo(event) {
        event.preventDefault();
        let name = formWorkEL.val(),//Забирает то что написали в input
            text = formDeskrEL.val(); // Забирает то что написали в textarea

        if (name && text) { //Проверяем написано ли что то в формах
           
            formWorkEL.removeClass('error');
            formDeskrEL.removeClass('error');
            
            listEL.append(`
                <li class="left-block-list js-list_items">
                    <article class="js-article">
                        <header class="header general-items_style">
                            <h2 class="left-section-text">
                                ${name}
                            </h2>

                            <button class="clear-btn btn-clear js-clear__btn"></button>
                            <button class="arrow btn-clear js-arrow"></button>
                        </header>
                        <p class="general-items_style descr-item js-coments_list">
                        ${text}
                        </p>
                    </article>
                    
                </li>
            `);

            /* Обнуляем/очищаем формы после добавления дела
            добавляя пустую строку в val('') */
            LIST_CLEAN_EL.hide();

            name = formWorkEL.val('');
            text = formDeskrEL.val('');

            addToStorage();

        } else { //Если в формах ничего нет и нажали кнопку добавить, то добавляется клас error
            formWorkEL.addClass('error');
            formDeskrEL.addClass('error');
        }
    }

    function deleteComment(item) {
        item.remove();

        let items = $('.js-list_items');

        addToStorage();

        if (items.length ==0) {
            LIST_CLEAN_EL.show();
            localStorage.removeItem('comments');
        }
    }

    
    /* При заполнении формы добавление дела - при нажатии на Enter */
    formEL.keypress(function(e) {
        if(e.which == 13) {
            $(this).blur();
            BTN_ADD_WORK.focus().click();
        }
    });

    formEL.on('submit', addTodo);

    /* // При заполнении формы добавление дела - при нажатии на Enter */

    $('body').on('click', '.js-clear__btn', function(event){
        event.preventDefault();

        let item = $(this).parents('.js-list_items');

        addToStorage();

        deleteComment(item);
    })

    function collapseComment(arrow) {
        arrow.slideToggle();
    }

    $('body').on('click', '.js-arrow', function(){ 
        let arrow = $(this).parents('.js-list_items').find('.js-coments_list');
        // $('.left-block-list').addClass('zeroHeight');
        collapseComment(arrow);
    })

})