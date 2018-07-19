$(function () {
    setInterval(function () {
        console.log("INTERVAL")
        $.ajax({
            type: "GET",
            url: "http://exceed.srakrn.me/api/jacky-group/view",
            dataType: "text",
            success: function (response) {
                // let cleaned = response
                //     .replace(/&/g, '&amp;')
                //     .replace(/</g, '%lt;')
                //     .replace(/"/g, '&quot;')
                $('#box').append(`
                <div class="alert alert-warning" role="alert">
                    <h1>server</h1>
                    <h1>${response}</h1>
                </div>
                `)
                $('#box').animate({
                    scrollTop: $('#box').get(0).scrollHeight
                }, 1000);
            }
            
        });
    }, 1000)
})


$('#send-button').on('click', function () {
    $.ajax({
        type: "post",
        url: "http://exceed.srakrn.me/api/jacky-group/set/",
        data: {
            value: $('#text-input').val()
        },
        dataType: "json",
        success: function (response) {
            console.log(response)
        }
    });
    let input = $('#text-input').val()
    $('#box').append(`
            <div class="alert alert-info" role="alert">
                <div style="text-align: right;">
                    <h1>mnt.</h1>
                    <h1>${input}</h1>
                    <hr>
                </div>
            `)
})

// $(function () {
//     $('#send-button').on('click', function () {
//         let input = $('#text-input').val()
//         $('#box').append(`
//             <div class="alert alert-info" role="alert">
//                 <div style="text-align: right;">
//                     <h1>mnt.</h1>
//                     <h1>${input}</h1>
//                     <hr>
//                 </div>
//             `)
//     })
// }) 
