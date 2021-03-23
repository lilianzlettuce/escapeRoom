document.addEventListener('DOMContentLoaded', () => {
    //rules start
    var r1 = "This one is self explanatory. Thank me for making this #1. And if you already scrolled to the bottom..... Haha sucks for you I guess.";
    var r8 = "All the inputs should make sense in the way that they are not just a bunch of randomly scrabbled letters.";
    var r9 = "All the inputs do not necessarily make sense in the way that they match their labels.";
    var r11 = "After you have filled out all the inputs in a box, click the Submit button. Yes, it's the same submit button for all of them. No, the submit button is not missing. If all the inputs in that box are correct, something will happen.";
    var r12 = "Be sure to scroll. I cannot be sure of the order in which you will discover these."
    var r13 = "Your progress is not being saved, so you'd better write stuff down if you want to continue later.";
    var r14 = "Click the red circle.";
    var r15 = "Confused?";
    var r16 = "To answer your question: No, nothing is wrong. Trust me.";
    var r17 = "Don't trust red text.";
    var r18 = "Google is your friend.";
    var r19 = "I am watching you."; 
    var r20 = "I am always watching.";
    var r21 = "Always. <br> Btw, regarding Menu CAPITALS, I'm referring to the info numbers of the words.";
    var r22 = "Inputs are case sensitive.";
    var r24 = "Oh, also, there's a lot of invisible stuff. A lot of... important, invisible stuff. Good luck with that.";
    var r25 = "There's a squash sitting on the floor. It's been there for almost 3 years... I wonder if it has rotten. Perhaps it is a magic squash?";
    var r26 = "Hmmmm....... try mixing things up a bit. Also, go read #9 and #6 again.";
    var r28 = "I wonder what's hiding behind the menu... ";
    var r29 = "Lol, there's nothing there...........................yet.";
    var r30 = "Info 381 is 3053891126866912522653706897556949434 -pollux cipher";
    var r31 = "Me and you, and you and me, no matter how the toss the dice, it had to be... The only one for me is you, and you for me, so happy togetheeeeerrrrrrr."
    var r32 = "What do you call a parched raccoon? Godzilla!";
    var r33 = "Just pretend you get it.";
    var r34 = "*High pitched sounds*";
    var r35 = "If all else fails, turn to Instant Death. If you look deep enough into the abyss, within it you will find that what you knew wasn't what you thought you knew, but rather something else entirely. Something that more closely resembles a beheaded rooster standing upon the culmination of your life failures than your grossly unsupported biases.";

    var r380 = "Try clicking the escape button after submitting <strong>1</strong> <br> (That means you have to reload the page. As my great-grandmother used to say, &quotLife is all and well until someone asks you to reload a page. Just deal with it and stop complaining, you annoying child.&quot)";

    //rules end

    var qbutton = document.getElementById("buttonQ");
    var back2 = document.getElementById("backScene2");
    
    var hasClicked = 0;
    var onQClick = function() { 
        hasClicked++;
        document.getElementById("scene1").style.display = "none";
        document.getElementById("scene2").style.display = "block";
        if (hasClicked === 1){
            document.getElementById("main-head").style.width = "170px";
            document.getElementById("key1").style.opacity = "30%";
            document.getElementById("key1").style.backgroundColor = "rgb(188, 189, 255)";
            document.getElementById("r5").textContent = "Beware everything, actually.";
            document.getElementById("r5").style.textAlign = "left";
            document.getElementById("r28").textContent = r28;
            document.getElementById("r28").style.textAlign = "left";
        }
        if (hasClicked === 2) {
            document.getElementById("main-head").style.width = "115px";
            document.getElementById("key1").style.opacity = "70%";
            document.getElementById("r3").textContent = "The previous statement was a lie.";
            document.getElementById("r3").style.textAlign = "left";
        }
        if (hasClicked === 3) {
            document.getElementById("main-head").style.width = "65px";
            document.getElementById("key1").style.opacity = "100%";
            document.getElementById("submit").className = "button";
            document.getElementById("lightmode").className = "button";
            document.getElementById("sasageyo").className = "button";
            document.getElementById("breakit").className = "button";
        }
        if (hasClicked === 4) {
            document.getElementById("main-head").style.width = "0px";
            document.getElementById("key1").style.zIndex = "8";
            document.getElementById("submit").className = "button whitetext";
            document.getElementById("lightmode").className = "button whitetext";
            document.getElementById("sasageyo").className = "button whitetext";
            document.getElementById("breakit").className = "button whitetext";
        }
        if (hasClicked === 5) {
            document.getElementById("r6").textContent = "Input boxes are the exact length of their respective correct inputs. Meaning you can easily find out how many letters are in each input.";
            document.getElementById("r6").style.textAlign = "left";
        }
    }
    var onback2Click = function() {
        document.getElementById("scene1").style.display = "block";
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene2-message").style.display = "none";
        document.getElementById("yeah").style.display = "none";
        document.getElementById("nope").style.display = "none";
        document.getElementById("down").style.display = "block";
        document.getElementById("sayDown").style.display = "block";
    }

    qbutton.addEventListener("click", onQClick); 
    backScene2.addEventListener("click", onback2Click); 

    var night = document.getElementById("nightmode");
    var onNightClick = function() {
        document.body.style.backgroundColor = "black";
        var arr = document.getElementsByClassName("whitecolor");
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.display = "block";
        }
    }
    night.addEventListener("click", onNightClick);

    var light = document.getElementById("lightmode");
    var onLightClick = function() {
        document.body.style.backgroundColor = "white";
        document.getElementById("r30").innerHTML = r30;
        document.getElementById("r30").style.textAlign = "left";
    }
    light.addEventListener("click", onLightClick);

    var countEsc = false;
    var escape1 = document.getElementById("escape1");
    var onEscape1Click = function() {
        document.getElementById("scene1").style.display = "none";
        document.getElementById("scene2").style.display = "none";
        document.getElementById("sceneDeath").style.display = "none";
        document.getElementById("escape1").style.display = "none";
        document.getElementById("scene3").style.display = "block";
        if(countEsc === true){
            document.body.style.backgroundColor = "black";
        }
    }
    escape1.addEventListener("click", onEscape1Click);

    var back3 = document.getElementById("back3");
    var onBack3Click = function() {
        document.getElementById("scene1").style.display = "block";
        document.getElementById("scene3").style.display = "none";
        document.getElementById("scene2").style.display = "none";
        document.getElementById("sceneDeath").style.display = "none";
    }
    back3.addEventListener("click", onBack3Click);


    var down = document.getElementById("down");
    var onDownClick = function() {
        document.getElementById("instr1").style.display = "none";
        document.getElementById("instr2").style.display = "none";
        document.getElementById("instr3").style.display = "none";
        document.getElementById("instr4").style.display = "none";
        document.getElementById("r29").innerHTML = r29;
        document.getElementById("r29").style.textAlign = "left";
    }
    down.addEventListener("click", onDownClick); 

    var yeah = document.getElementById("yeah");
    var nope = document.getElementById("nope");
    var onYeahClick = function() {
        yeah.style.display = "none";
        nope.style.display = "none";
        alert("Ha! You think I'd tell you?");
    }
    var onNopeClick = function() {
        yeah.style.display = "none";
        nope.style.display = "none";
        alert("ok, cool.");
    }
    yeah.addEventListener("click", onYeahClick);
    nope.addEventListener("click", onNopeClick);
    
    var redCircle = document.getElementById("maincircle3");
    var rCHC = 0;
    var onRedCircleClick = function() {
        rCHC++;
        if (rCHC === 3) {
            document.getElementById("r15").innerHTML = r15;
            document.getElementById("r15").style.textAlign = "left";
        }
        if (rCHC === 7) {
            document.getElementById("r16").innerHTML = r16;
            document.getElementById("r16").style.textAlign = "left";
        }
        if (rCHC === 13) {
            redCircle.style.opacity = "50%";
            document.getElementById("r10").textContent = "YY is the previous info#.";
            document.getElementById("r10").style.textAlign = "left";
        }
    }
    redCircle.addEventListener("click", onRedCircleClick);

    var blackCircle = document.getElementById("maincircle1");
    var onBlackCircleClick = function() {
        document.getElementById("r14").innerHTML = r14;
        document.getElementById("r14").style.textAlign = "left";
    }
    blackCircle.addEventListener("dblclick", onBlackCircleClick);

    var menu = document.getElementById("menubutton");
    var instr = document.getElementById("instrbutton");
    var set = document.getElementById("setbutton");
    var pan1 = document.getElementById("instr1");
    var pan2 = document.getElementById("instr2");
    var pan3 = document.getElementById("instr3");
    pan1.style.display = "block";
    var onMenuClick = function() {
        pan1.style.display = "block";
        pan2.style.display = "none";
        pan3.style.display = "none";
        document.getElementById("r1").innerHTML = r1;
        document.getElementById("r1").style.textAlign = "left";
    }
    var onInstrClick = function() {
        pan2.style.display = "block";
        pan1.style.display = "none";
        pan3.style.display = "none";
        document.getElementById("r2").textContent = "With a few exceptions, all new info will appear near the bottom of this list.";
        document.getElementById("r2").style.textAlign = "left";
    }
    var onSetClick = function() {
        pan3.style.display = "block";
        pan2.style.display = "none";
        pan1.style.display = "none";
        document.getElementById("r4").textContent = "Beware the buttons.";
        document.getElementById("r4").style.textAlign = "left";
    }
    menu.addEventListener("click", onMenuClick);
    instr.addEventListener("click", onInstrClick);
    set.addEventListener("click", onSetClick);

    var up = document.getElementById("up");
    var pan4 = document.getElementById("instr4");
    var onUpClick = function() {
        pan4.style.display = "block";
    }
    up.addEventListener("click", onUpClick);

    var input1 = document.getElementById("inputs");
    var onInput1Click = function() {
        document.getElementById("r7").textContent = "To enter an input, simply type something in the box and leave it there. You can change it if you change your mind. Don't press Enter and freak out when nothing happens.";
        document.getElementById("r7").style.textAlign = "left";
    }
    input1.addEventListener("click", onInput1Click);

    var input2 = document.getElementById("inputs2");
    var onInput2Click = function() {
        document.getElementById("r11").textContent = r11;
        document.getElementById("r11").style.textAlign = "left";
    }
    input2.addEventListener("click", onInput2Click);

    var input3 = document.getElementById("inputs3");
    var onInput3Click = function() {
        document.getElementById("r12").textContent = r12;
        document.getElementById("r12").style.textAlign = "left";
    }
    input3.addEventListener("click", onInput3Click);

    var input4 = document.getElementById("inputs4");
    var onInput4Click = function() {
        document.getElementById("r13").innerHTML = r13;
        document.getElementById("r13").style.textAlign = "left";
    }
    input4.addEventListener("click", onInput4Click);

    var input5 = document.getElementById("inputs5");
    var onInput5Click = function() {
        document.getElementById("r24").innerHTML = r24;
        document.getElementById("r24").style.textAlign = "left";
    }
    input5.addEventListener("click", onInput5Click);

    var input6 = document.getElementById("sasageyo");
    var onInput6Click = function() {
        document.getElementById("r22").innerHTML = r22;
        document.getElementById("r22").style.textAlign = "left";
    }
    input6.addEventListener("click", onInput6Click);

    var input7 = document.getElementById("inputs7");
    var onInput7Click = function() {
        document.getElementById("r31").innerHTML = r31;
        document.getElementById("r31").style.textAlign = "left";
    }
    input7.addEventListener("click", onInput7Click);

    var input8 = document.getElementById("inputs8");
    var onInput8Click = function() {
        document.getElementById("r34").innerHTML = r34;
        document.getElementById("r34").style.textAlign = "left";
    }
    input8.addEventListener("click", onInput8Click);

    var help = document.getElementById("help");
    var onHelpClick = function() {
        alert("help is for babies.");
        document.getElementById("r35").innerHTML = r35;
        document.getElementById("r35").style.textAlign = "left";
        document.getElementById("help2").style.display = "block";
    }
    help.addEventListener("click", onHelpClick);

    var help2 = document.getElementById("help2");
    var onHelp2Click = function() {
        alert("ok dude, fine.");
        document.getElementById("scene2").style.display = "none";
        document.getElementById("sceneHelp").style.display = "block";
        document.body.style.backgroundColor = "rgb(246, 247, 211)";
    }
    help2.addEventListener("click", onHelp2Click);

    var br = document.getElementById("breakit");
    var onBreakClick = function() {
        document.getElementById("scene1").style.display = "block";
        document.getElementById("scene1").style.zIndex = "1";
        document.getElementById("scene2").style.display = "block";
        document.getElementById("sceneDeath").style.display = "block";
        document.getElementById("sceneHelp").style.display = "block";
        document.getElementById("breath").style.display = "block";
        document.body.style.backgroundColor = "black";
        var temp = 1;
        while(temp < 30){
            $("body").animate({opacity: "0%"}, 1000);
            $("body").animate({opacity: "100%"}, 1000);
            temp++;
        }
    }
    br.addEventListener("click", onBreakClick);

    var deathCount = 0;
    var deathButton = document.getElementById("death");
    var onDeathClick = function() {
        deathCount++;
        document.getElementById("sceneDeath").style.display = "block";
        document.getElementById("scene1").style.display = "none";
        document.getElementById("r17").textContent = r17;
        document.getElementById("r17").style.textAlign = "left";
        document.getElementById("r8").textContent = r8;
        document.getElementById("r8").style.textAlign = "left";
        if (deathCount === 3){
            document.getElementById("r9").textContent = r9;
            document.getElementById("r9").style.textAlign = "left";
        }
    }
    deathButton.addEventListener("click", onDeathClick);

    var backDeath = document.getElementById("backDeath");
    var onBackDeathClick = function() {
        document.getElementById("sceneDeath").style.display = "none";
        document.getElementById("scene1").style.display = "block";
    }
    backDeath.addEventListener("click", onBackDeathClick);

    var leave = document.getElementById("leave");
    var onLeaveClick = function() {
        document.getElementById("scene2").style.display = "none";
        document.getElementById("scene1").style.display = "none";
        document.getElementById("scene4").style.display = "block";
        document.body.style.backgroundColor = "black";
    }
    leave.addEventListener("click", onLeaveClick);

    var vis = document.getElementById("visible");
    var onVisClick = function() {
        var arr1 = document.getElementsByClassName("whitetext");
        for (var i = 0; i < arr1.length; i++) {
            arr1[i].style.opacity = "100%";
        }
    }
    vis.addEventListener("click", onVisClick);

    var backH = document.getElementById("backH");
    var onBackHClick = function() {
        document.getElementById("sceneHelp").style.display = "none";
        document.getElementById("scene2").style.display = "block";
        document.body.style.backgroundColor = "white";
    }
    backH.addEventListener("click", onBackHClick);

    var escapeClick = 0;
    var submit = document.getElementById("submit");
    var onSubmitClick = function() {
        var fnVal = document.getElementById("fn").value;
        var lnVal1 = document.getElementById("ln1").value;
        var lnVal2 = document.getElementById("ln2").value;
        var lnVal3 = document.getElementById("ln3").value;
        var bdayVal = document.getElementById("bday").value;
        var speciesVal = document.getElementById("species").value;
        if (fnVal === "Smith" && bdayVal === "werewolf" && speciesVal === "John"){
            if (lnVal1 == "04" && lnVal2 == "01" && lnVal3 == "09"){
                document.getElementById("inputsshadow").style.zIndex = "3";
                document.getElementById("nightmode").style.display = "block";
                if (escapeClick === 0){
                    document.getElementById("escape1").style.display = "block";
                }
                escapeClick++;
            }
        }
        if (fnVal === "John"){
            document.getElementById("r26").innerHTML = r26;
            document.getElementById("r26").style.textAlign = "left";
        }

        var spiderVal = document.getElementById("spiders").value;
        if (spiderVal === "spiders"){
            document.getElementById("inputsshadow2").style.zIndex = "3";
            document.getElementById("r18").innerHTML = r18;
            document.getElementById("r18").style.textAlign = "left";
        }

        var limitVal = document.getElementById("limit").value;
        if (limitVal === "zero"){
            document.getElementById("inputsshadow3").style.zIndex = "3";
            document.getElementById("r19").innerHTML = r19;
            document.getElementById("r19").style.textAlign = "left";
        }

        var messVal = document.getElementById("mess").value;
        var ageVal = document.getElementById("age").value;
        if (messVal === "Mess" && ageVal === "age"){
            alert("April Fools!");
            document.getElementById("up").style.display = "block";
            document.getElementById("r20").innerHTML = r20;
            document.getElementById("r20").style.textAlign = "left";
        }

        var wordVal = document.getElementById("word").value;
        var passVal = document.getElementById("pass").value;
        if (wordVal === "word" && passVal === "pass"){
            document.getElementById("inputsshadow5").style.zIndex = "3";
            document.getElementById("r25").innerHTML = r25;
            document.getElementById("r25").style.textAlign = "left";
            document.getElementById("r18").innerHTML = r18;
            document.getElementById("r18").style.textAlign = "left";
            document.getElementById("fnB").innerHTML = "Last Name: ";
            document.getElementById("lnB").innerHTML = "Birthday: ";
            document.getElementById("bdayB").innerHTML = "Species: ";
            document.getElementById("speciesB").innerHTML = "First Name: ";
            document.getElementById("nextToPW").style.display = "block";
        }

        var sasaVal = document.getElementById("sasageyo").value;
        if (sasaVal === "SASAGEYO"){
            document.getElementById("inputsshadow6").style.display = "block";
            document.getElementById("r21").innerHTML = r21;
            document.getElementById("r21").style.textAlign = "left";
            alert("Combine the CAPITALS in the Menu in this order: Click. On. The. Red.");
        }

        var tpVal = document.getElementById("tp").value;
        if (tpVal === "toilet paper"){
            document.getElementById("r380").innerHTML = r380;
            document.getElementById("r380").style.textAlign = "left";
        }

        var trollVal = document.getElementById("troll").value;
        if (trollVal === "youjustgottrolled"){
            countEsc = true;
            document.getElementById("inputsshadow7").style.zIndex = "3";
            document.getElementById("r32").innerHTML = r32;
            document.getElementById("r32").style.textAlign = "left";
            document.getElementById("stm1").style.color = "red";
            document.getElementById("stm1").innerHTML = "Don't scroll.";
            document.getElementById("stm2").style.color = "orange";
            document.getElementById("stm3").style.color = "yellow";
            document.getElementById("stm4").style.color = "green";
            document.getElementById("stm5").style.color = "blue";
            document.getElementById("stm5").style.fontSize = "500px";
            document.getElementById("stm5").innerHTML = "&quotLet's party!!!&quot";
            var arr = document.getElementsByClassName("whitecolor2");
            for (var i = 0; i < arr.length; i++) {
                arr[i].style.display = "block";
            }
            var arr = document.getElementsByClassName("whitecolor");
            for (var i = 0; i < arr.length; i++) {
                arr[i].style.display = "block";
            }
        }

        var strongVal = document.getElementById("strongpw").value;
        var darthVal = document.getElementById("darth").value;
        var replyVal = document.getElementById("reply").value;
        if (darthVal === "Let's party!!!" && strongVal === "$^(@sG34t99f$[_!3JqeFu3%3"
            && replyVal === "I love you."){
            document.getElementById("inputsshadow8").style.zIndex = "3";
            document.getElementById("r33").innerHTML = r33;
            document.getElementById("r33").style.textAlign = "left";
            document.getElementById("leave").style.display = "block";
            alert("Ew, gross.");
        }
    }
    submit.addEventListener("click", onSubmitClick);

    var done = document.getElementById("done");
    var onDoneClick = function() {
        var inVal = document.getElementById("in4").value;
        document.getElementById("scene4").style.display = "none";
        if(inVal.length === 19){
            document.getElementById("sceneWin").style.display = "block";
        }else{
            document.getElementById("sceneFail").style.display = "block";
        }
    }
    done.addEventListener("click", onDoneClick);


    var initialAlert = function() {
        alert("Note that this is indeed finished and solvable. If you get stuck, go look at the help page.");
    }

    document.body.addEventListener("onload", initialAlert());
    //¯\_(ツ)_/¯
})