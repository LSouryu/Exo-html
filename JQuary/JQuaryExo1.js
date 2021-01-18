$(document).ready(function () {
    console.log("page Chargée")

    $('#btn').click(function () {
        console.log("Encore !!!")
    })

    $('.MyForm').submit(function (Nope) {
        Nope.preventDefault()
        console.log("Nope !!!!!")
    })
    $(".MDP").focus(function () {
        var str = ""
        $(".MDP").keydown(function (event) {
            if (event.keycode != 16);
            else if (event.keycode != 13);
            else if (event.keycode != 20);
            else if (event.keycode != 9);
            else if (event.keycode != 17);
            else if (event.keycode != 18);
            else if (event.keycode != 32);
            else if (event.keycode != 8);
            else if (event.keycode != 91);
            else if (event.keycode != 92);
            else if (event.keycode != 93);
                str += event.key;
            console.log(str);
        });
        $('.MDPSub').submit(function (Nope) {
            Nope.preventDefault()
            console.log(str)
        })
    });
})
