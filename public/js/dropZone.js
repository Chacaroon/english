$(document).ready(function() {

    let dropZone = $('#dropZone')
        , input = $('#file');

    // Проверка поддержки браузером
    if (typeof(window.FileReader) === 'undefined') {
        dropZone.text('Не поддерживается браузером!');
        dropZone.addClass('bg-danger error');
    }

    // Добавляем класс hover при наведении
    dropZone[0].ondragover = function() {
        dropZone.addClass('hover');
        return false;
    };

    // Убираем класс hover
    dropZone[0].ondragleave = function() {
        dropZone.removeClass('hover');
        return false;
    };

    // Обрабатываем событие Drop
    dropZone[0].ondrop = function(event) {
        event.preventDefault();

        sendFile(event.dataTransfer.files[0]);
    };
    
    input.change(function () {
        sendFile(this.files[0]);
    });

    function sendFile(file) {

        let fd = new FormData()
            , type = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

        dropZone.addClass('hover');

        if (type.indexOf(file.type) !== -1) {
            fd.append('file', file);
        } else {
            error('Недопустимый тип файла');
        }

        $.ajax({
            url: '/uploadFile'
            , data: fd
            , processData: false
            , contentType: false
            , type: 'POST'
            , complete: stateChange
            , xhr: function () {
                let xhr = $.ajaxSettings.xhr();

                xhr.upload.addEventListener('progress', uploadProgress);

                return xhr
            }
            , error: function (xhr, textStatus, err) {
                error('При загрузке возникла ошибка');
            }
        })
    }

    function uploadProgress(event) {
        $('#progress').width(parseInt(event.loaded / event.total * 100) + '%');
    }

    function stateChange(jqXHR, textStatus) {
        if (jqXHR.readyState === 4) {
            if (jqXHR.status === 200) {
                dropZone
                    .empty()
                    .addClass('bg-success success')
                    .append('<h3>Загрузка успешно завершеа</h3>');
                location.reload();
            } else {
                error('При загрузке возникла ошибка')
            }
        }
    }

    function error(msg) {
        dropZone
            .empty()
            .addClass('bg-danger error')
            .append('<h3>' + msg + '</h3>');
        setTimeout(function () {
            location.reload();
        }, 3000);
    }

});
