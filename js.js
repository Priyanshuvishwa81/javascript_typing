

let system_value = document.getElementById("system_type").innerText;

let full_text = document.getElementById("system_type");
let back = document.getElementById("user_type").innerText;
let system_value_arr = system_value.split(" ");
let system_value_arr2 = system_value.split("");
var text = "";
var text_color_change = "";
let right_word = 0;
let wrong_word = 0;
let right_char = 0;
let wrong_char = 0;
let time = 1;

let rotate_interval;
let play_time_interval;
let play_time_value = 0;
let total_words;
let total_char;

let play_time = () => {
    play_time_value = play_time_value + 1;

}




let key_fun = (event) => {
    let key = event.key;
    if (key == "Backspace") {
        event.returnValue = false;
        event.cancleBubble = true;
    }
}

let system_value_remover = (index_val) => {

    for (var i = 0; i <= index_val; i++) {
        delete system_value_arr[index_val]
    }
}


let color_change_right = (text_change, index) => {


    if (text_change != undefined) {

        system_value_remover(index);

        full_text_inner_value = system_value_arr.join(" ");
        text_color_change += '<span style="color:blue">' + text_change + " " + '</span>';
        let not_change_color = '<span >' + full_text_inner_value + '</span>';
        full_text.innerHTML = text_color_change + not_change_color;

        right_word++;
    }

}


let color_change_wrong = (text_change, index) => {

    if (text_change != undefined && text_change != "") {
        system_value_remover(index);
        full_text_inner_value = system_value_arr.join(" ");
        text_color_change += '<span style="color:red">' + text_change + " " + '</span>';
        let not_change_color = '<span >' + full_text_inner_value + '</span>';
        full_text.innerHTML = text_color_change + not_change_color;
        wrong_word++;
    }

}




function my_filter(elm) {
    return (elm != null && elm !== "")
}



let user_value_fun = () => {


    let user_value = document.getElementById("user_type").value;
    let user_value_arr = user_value.split(" ");
    let user_value_arr2 = user_value.split("");

    total_words = user_value;

    var data1 = user_value_arr2[user_value_arr2.length - 1];

    for (i = user_value_arr2.length - 1; i <= user_value_arr2.length - 1; i++) {

        if (system_value_arr2[i] == user_value_arr2[i]) {
            right_char++;

        }
        else {
            wrong_char++;
        }
    }



    if (data1 == " ") {
        var data2 = user_value_arr.filter(my_filter);

        user_value_arr2 = "";

        for (i = data2.length - 1; i <= data2.length - 1; i++) {


            if (system_value_arr[i] === data2[i]) {
                color_change_right(system_value_arr[i], i);
                system_value_arr[i] = "";

            }



            else {
                color_change_wrong(system_value_arr[i], i);

                system_value_arr[i] = "";

            }

        }


    }




}

let level = ""
let select_level = (value) => {
    level = document.getElementById("drd_body").innerText = value;
    let system_type = document.getElementById("system_type");
    let system_type2 = document.getElementById("system_type2");
    let system_type3 = document.getElementById("system_type3");


    if (level == "Midium") {
        alert("sorry levels are currently unavailable")
    }
    else if (level == "Hard") {

        alert("sorry levels are currently unavailable")

    }
    else {
        alert("sorry levels are currently unavailable")
    }
}



let select_time = (value) => {
    time = document.getElementById("drd_time_body").innerText = value;
    // alert(time);

}


let user_type = document.getElementById("user_type");
let start_btn = document.getElementById("start_btn");
let stop_btn = document.getElementById("stop_btn");

let count_down_body = document.getElementById("count_down_body");
let count_down = document.getElementById("count_down");

var sett;
let c_d = 3;
let set_time_out;
let start_the_game = () => {




    c_d = 3;
    document.getElementById("user_type").innerText = "";
    count_down_body.style.opacity = 9;

    sett = setInterval(count_down_start, 1000);


    user_type.disabled = false;
    start_btn.disabled = true;
    stop_btn.disabled = false;
    start_btn.className = "btn_disabled start btn"
    stop_btn.className = " stop btn"

}
let = reloded = () => {
    location.reload();
}   

let end_the_game = () => {


    clearTimeout(set_time_out);
    clearInterval(rotate_interval);
    clearInterval(play_time_interval);
    start_btn.disabled = false;
    user_type.disabled = true;
    stop_btn.disabled = true;
    stop_btn.className = "btn_disabled stop btn"
    start_btn.className = " start btn"

    // start_btn.removeAttributeNode('onclick');

    // start_btn.setAttribute('onclick', reloded());



    const user_value_arr = total_words.split(" ");
    const user_value_arr2 = total_words.split("");

    total_words = user_value_arr.length - 1;
    total_char = user_value_arr2.length - 1;

    let minute = Math.floor(play_time_value / 60);
    let ext_sec = play_time_value % 60;
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (ext_sec < 10) {
        ext_sec = "0" + ext_sec;
    }


    document.getElementById("times").innerHTML = minute + ":" + ext_sec;
    document.getElementById("total_words").innerHTML = total_words;
    document.getElementById("total_char").innerHTML = total_char;
    document.getElementById("currect_word").innerHTML = right_word;
    document.getElementById("wrong_word").innerHTML = wrong_word;
    document.getElementById("currect_char").innerHTML = right_char;
    document.getElementById("wrong_char").innerHTML = wrong_char;

    let total_min_found = parseFloat(minute + "." + ext_sec);

    let speed = parseInt((total_char / 5) / total_min_found);
    let accuracy = parseInt((right_char / total_char) * 100);
    let speed_awpm = parseInt(speed * (accuracy / 100));
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("speed_awpm").innerHTML = speed_awpm;

    document.getElementById("speed").innerHTML = speed;


}

let count_down_start = () => {
    count_down.innerHTML = c_d;

    if (c_d == 0) {
        clearInterval(sett);
        count_down.innerHTML = "Start";
        setTimeout(() => {
            count_down_body.style.opacity = 0;
            document.getElementById("user_type").focus();

            play_time_interval = setInterval(play_time, 1000);
            let all_time = parseInt(time) * 60000;
            set_time_out = setTimeout(end_the_game, all_time);

            clock();
        }, 1000);


    }

    c_d = c_d - 1;



}




// clock 
let clock = () => {
    var my_min = time;
    var total_time = 60 * my_min;
    var total_angle = 360 / total_time;
    var m_deg = total_angle;
    var m_deg2 = total_angle;
    min = 0;

    var stick_angle = document.getElementById("stick");

    var rotate = () => {

        if (min >= total_time) {
            m_deg = 0;
            clearInterval(rotate_interval);
            alert("good morning")

        }
        stick_angle.style.transform = "rotate(" + m_deg + "deg)";

        m_deg = m_deg + m_deg2;
        min++;

    }

    rotate_interval = setInterval(rotate, 1000);

}


// hour_angle.style.transform = "rotate(180deg)"
// rotate();
