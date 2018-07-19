$(function () {
    $('#append-button').on('click', function () {
        console.log('asdfsa')
        let topics = $('#new-ID').val()
        let descrition = $('#new-Detail').val()
        $('#box').append(`
            <div>
                <h2>${topics}</h2>
                <p>${descrition}</p>
                <hr>
            </div>
        `)
        $('#topic').val('')

    })

})
