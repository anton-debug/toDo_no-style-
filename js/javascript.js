$(document).ready(function(){

    function initialState() {
        if (localStorage.getItem('comments') == null) {
            $('.left-section-empty').show();
        } else {
            $('.todo__list').html(localStorage.getItem('comments'));
            $('.left-section-empty').hide();
        }
    }

    initialState();

    function addToStorage() {
        let content = $('.todo__list').html();
        console.log(content);
        localStorage.setItem('comments', content);
    }



    function addTodo() {
        let name = $('.name-form-work').val(),//Забирает то что написали в input
            text = $('.form-descr').val(); // Забирает то что написали в textarea

        if (name && text) { //Проверяем написано ли что то в формах
           
            $('.name-form-work').removeClass('error');
            $('.form-descr').removeClass('error');
            
            // $('.left-section-empty').hide(); //если написано, то скрываем "Список пуст..."
            $('.todo__list').append(`
            
                <div class="left-block-list">
                    <div class="business-items">
                        <p class="left-section-text">
                            ${name}
                        </p>

                        <button class="clear-btn btn-clear"></button>

                        <button class="arrow btn-clear"></button>
                        
                    </div>

                    <div class="descr-item">
                        <p class="descr-item-coments">
                            ${text}
                        </p>
                    </div>
                </div>

            `);

            /* Обнуляем/очищаем формы после добавления дела
            добавляя пустую строку в val('') */
            $('.left-section-empty').hide();

            name = $('.name-form-work').val('');
            text = $('.form-descr').val('');

            addToStorage();

        } else { //Если в формах ничего нет и нажали кнопку добавить, то добавляется клас error
            $('.name-form-work').addClass('error');
            $('.form-descr').addClass('error');
        }
    }

    function deleteComment(item) {
        item.remove();

        let items = $('.left-block-list');

        addToStorage();

        if (items.length ==0) {
            $('.left-section-empty').show();
            localStorage.removeItem('comments');
        }
    }

    $('.button').on('click', addTodo);

    $('body').on('click', '.clear-btn', function(event){
        event.preventDefault();

        let item = $(this).parents('.left-block-list');

        addToStorage();

        deleteComment(item);

        
    })

    function collapseComment(arrow) {
        arrow.slideToggle();
    }

    $('body').on('click', '.arrow', function(){ 
        let arrow = $(this).parents('.left-block-list').find('.descr-item');
        // $('.left-block-list').addClass('zeroHeight');
        collapseComment(arrow);
    })

})