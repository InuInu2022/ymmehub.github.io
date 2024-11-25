console.log("loaded");
$(window).on('load', function () {
    $.getJSON("/json/plugins.json", (data) => {
        data.map((value)=>{
            $.getJSON(`/json/${value}.json`, (data) => {
                $("#grid").append(
                    `<div class="column is-half">
                    <a id="cell" href="/item.html?file=${data.id}">
                        <div class="card is-fullheight">
                            <div class="card-image">
                                <figure class="image is-2by2 is-one-third">
                                    <img src="/file/img/${data.id}/1.png" alt="thunbnail"  />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">${data.name}</p>
                                        <p class="subtitle is-6">${data.author}</p>
                                        <div class="content">
                                            <p>${data.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    </div>
                    `);
            })
        })
    });
})
