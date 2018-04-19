var antalGodbidder = 0;
 //her skal laves noget extrakode

$(window).on("load", start);

function start() {
    console.log("klar");
    $("#hundcontainer").removeClass("hundStartPos");

    $("#hundcontainer").addClass("hundKommerInd");
    $("#hundcontainer").on("animationend", hundInde);
}

function hundInde() {
    console.log("Hund inde");
    $("#hundcontainer").off("animationend", hundInde);
    $("#hundcontainer").removeClass("hundKommerInd");

    $("#hundcontainer").addClass("hundErInde");
 //her skal laves noget extrakode


    kanKlikke();
}


function kanKlikke() {
    console.log("kan klikke");
    $(".godbid").addClass("puls");
    $(".godbid").on("click", klikPaaGodbid);
}


function klikPaaGodbid() {
    console.log("klik på godbid");
    $(".godbid").removeClass("puls");
    $(".godbid").off("click", klikPaaGodbid);
    $(this).hide();
    antalGodbidder++;


    $("#hund").addClass("hundSpisGodbid");
    $("#hundcontainer").on("animationend", faerdig);
}

function faerdig() {
    console.log("Færdig med at spise en godbid");
    $("#hund").removeClass("hundSpisGodbid");
    $("#hundcontainer").off("animationend", faerdig);

    if (antalGodbidder >= 2) {
       //her skal laves noget extrakode

        hundTilKurv();
    } else {
        console.log("klik på godbid igen");
        kanKlikke();
    }

}






function hundTilKurv() {
    console.log("Hund til kurv");
    $("#hundcontainer").addClass("hundTilKurv");
    $("#hundcontainer").on("animationend", kurvMedHund);
}

function kurvMedHund() {
    console.log("Kurv med hund");
    $("#hundcontainer").removeClass();
//    $("#hundcontainer").removeClass("hundTilKurv");
    $("#hundcontainer").off("animationend");

    $("#hundcontainer").hide();

    $("#kurv").removeClass("kurvStartPic");
 //her skal laves noget extrakode
        $("#kurv").addClass("kurvMaet");

}
