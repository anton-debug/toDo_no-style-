$(document).ready(function(){

    function initialState() {
        if (localStorage.getItem('comments') == null) {
            $('.js-items__clean').show();
        } else {
            $('.js-list').html(localStorage.getItem('comments'));
            $('.js-items__clean').hide();
        }
    }

    initialState();

    function addToStorage() {
        let content = $('.js-list').html();
        console.log(content);
        localStorage.setItem('comments', content);
    }



    function addTodo() {
        let name = $('.js-form__work').val(),//Забирает то что написали в input
            text = $('.js-form__descr').val(); // Забирает то что написали в textarea

        if (name && text) { //Проверяем написано ли что то в формах
           
            $('.js-form__work').removeClass('error');
            $('.js-form__descr').removeClass('error');
            
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
            $('.js-list').append(`
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
            $('.js-items__clean').hide();

            name = $('.js-form__work').val('');
            text = $('.js-form__descr').val('');

            addToStorage();

        } else { //Если в формах ничего нет и нажали кнопку добавить, то добавляется клас error
            $('.js-form__work').addClass('error');
            $('.js-form__descr').addClass('error');
        }
    }

    function deleteComment(item) {
        item.remove();

        let items = $('.js-list_items');

        addToStorage();

        if (items.length ==0) {
            $('.js-items__clean').show();
            localStorage.removeItem('comments');
        }
    }

    $('.button').on('click', addTodo);

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