function loadData(request, targetId, sourceId) {
    $.ajax({
        url: 'https://web1-api.herokuapp.com/api/' + request,
        cache: false,
        success: function (data) {
            console.log(data);
            let jsonData = {
                data: data
            };
            let target = $(targetId);
            let source = $(sourceId).html();
            let template = Handlebars.compile(source);
            $(target).html(template(jsonData));
        }
    });
}