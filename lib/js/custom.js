$(document).ready(function () {
    $(function () {
        $("#slider")
            .slider({
                value: 17,
            })
    });
    $('#tryBtn').on('click', () => {
        $("#slider")
            .slider({
                value: 0,
            })
    })
})
