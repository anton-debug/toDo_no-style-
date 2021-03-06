$(document).ready(function(){
    
    const formEL = $('.js-form'), //Константа для  form - формы в общем
          itemsList = $('.js-list_items'), //Константа для элемента формы
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

                            <button class="arrow btn-clear js-arrow" type="button" aria-label="Collapse comment" name="arrowBtnCard"></button>
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

    formEL.on('submit', formSubmitHandler);

      $(listEL).on('click', '.js-clear__btn', function(event){
        event.preventDefault();

        const item = $(this).parents('.js-list_items');

        item.remove();
        
        let items = itemsList.children();

        if (items.length ==0) {
            listCleanEl.show();
        } else {
            
        }

        
    })

    $(listEL).on('click', '.js-arrow', function(event){ 
        event.preventDefault();

        // Работа метода .find() схожа с .children(), который осуществляет поиск подходящих дочерних элементов. Отличие заключается в том, что .find() проводит поиск не только среди дочерних элементов, но и внутри них тоже (т.е. поиск проходит на всех вложенных уровнях иерархии DOM, в то время как .children() ищет только на одном уровне).

        const collapseEl = $(this).parents('.js-article').find('.js-coments_list');
            collapseEl.slideToggle(500);
            $(this).toggleClass('js-arrow-up');



        let items = listEL.children();

        console.log(items.length)
    
        if (items.length ==0) {
            listCleanEl.show();
        } else {

        }
        
        
        if ($(this).attr('aria-label') == 'открыть коментарий') {

            $(this).attr('aria-label', 'закрыть коментарий') 
        } else {

            $(this).attr('aria-label', 'открыть коментарий') 
        }
          
          
    })

})

