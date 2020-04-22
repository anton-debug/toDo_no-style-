$(document).ready(function(){

    var listEl = $('.js-list'); //Переменная на список
        listClean = $('.js-items__clean'); //Переменная на 'Список пуст...'
        formWork = $('.js-form__work'); //Поле ввода названия дела input
        formDeskr = $('.js-form__descr'); // Поле ввода описания дела 'textarea'
        form = $('.js-form');

    function initialState() {
        if (localStorage.getItem('comments') == null) {
            listClean.show();
        } else {
            listEl.html(localStorage.getItem('comments'));
            listClean.hide();
        }
    }

    initialState();

    function addToStorage() {
        let content = listEl.html();
        console.log(content);
        localStorage.setItem('comments', content);
    }

    function addTodo(event) {
        event.preventDefault();
        let name = formWork.val(),//Забирает то что написали в input
            text = formDeskr.val(); // Забирает то что написали в textarea

        if (name && text) { //Проверяем написано ли что то в формах
           
            formWork.removeClass('error');
            formDeskr.removeClass('error');
            
            // $('.left-section-empty').hide(); //если написано, то скрываем "Список пуст..."
            // $('.todo__list').append(`
            
            //     <div class="left-block-list">
            //         <div class="business-items">
            //             <p class="left-section-text">
            //                 ${name}
            //             </p>

            //             <button class="clear-btn btn-clear"></button>

            //             <button class="arrow btn-clear"></button>
                        
            //         </div>

            //         <div class="descr-item">
            //             <p class="descr-item-coments">
            //                 ${text}
            //             </p>
            //         </div>
            //     </div>

            // `);
            listEl.append(`
                <li class="left-block-list js-list_items">
                    <article class="business-items js-article">
                        <header class="header__list">
                            <h2 class="left-section-text">
                                ${name}
                            </h2>

                            <button class="clear-btn btn-clear js-clear__btn"></button>
                            <button class="arrow btn-clear js-arrow"></button>
                        </header>
                    </article>
                    <p class="descr-item js-coments_list">
                        ${text}
                    </p>
                </li>
            `);

            /* Обнуляем/очищаем формы после добавления дела
            добавляя пустую строку в val('') */
            listClean.hide();

            name = formWork.val('');
            text = formDeskr.val('');

            addToStorage();

        } else { //Если в формах ничего нет и нажали кнопку добавить, то добавляется клас error
            formWork.addClass('error');
            formDeskr.addClass('error');
        }
    }

    function deleteComment(item) {
        item.remove();

        let items = $('.js-list_items');

        addToStorage();

        if (items.length ==0) {
            listClean.show();
            localStorage.removeItem('comments');
        }
    }

    form.submit(addTodo);

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