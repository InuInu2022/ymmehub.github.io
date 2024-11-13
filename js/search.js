$(window).on('load', function () {
    $("#search_btn").click(function (e) { 
        e.preventDefault();
        $.getJSON("/json/plugins.json", (data) => {
            const resultFilter = data.plugins.filter(d => {
                return d.plugins.name === $("#search_ipt").val();
            })
            console.log(resultFilter);
        });
    });
})