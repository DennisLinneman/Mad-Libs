function createParagraph() {

    var wordOne = document.getElementById("wordOne").value;
    var wordTwo = document.getElementById("wordTwo").value;
    var wordThree = document.getElementById("wordThree").value;
    var wordFour = document.getElementById("wordFour").value;
    var wordFive = document.getElementById("wordFive").value;
    var wordSix = document.getElementById("wordSix").value;
    var wordSeven = document.getElementById("wordSeven").value;
    var wordEight = document.getElementById("wordEight").value;
    var wordNine = document.getElementById("wordNine").value;
    var wordTen = document.getElementById("wordTen").value;
    var wordEleven = document.getElementById("wordEleven").value;
    var wordTwelve = document.getElementById("wordTwelve").value;
    var wordThirteen = document.getElementById("wordThirteen").value;
    var wordFourteen = document.getElementById("wordFourteen").value;
    var wordFifteen = document.getElementById("wordFifteen").value;

    var paragraph = 'Ye can always pretend to be a bloodthirsty ' + wordOne + ' threatening everyone by waving yet ' + wordTwo +
    ' sword in the air, but until ye learn to ' + wordThree + ' like a pirate, ye\'ll never be ' + wordFour +
    ' accepted as an authentic ' + wordFive + '. So here\'s what ye do: Cleverly work into your daily conversations ' +
    wordSix + ' pirate phrases such as "Ahoy there, ' + wordSeven + '." "Avast, ye ' + wordEight + '," and "Shiver me ' +
    wordNine + '." Remember to drop all yer gs when ye say such words as sailin, and fightin. This will give ye a/an ' +
    wordTen + ' start to being recognized as a swashbucklin\' ' + wordEleven + '. Once ye ' +
    'have the lingo down pat, it helps to wear a three-cornered ' + wordTwelve + ' on yer head, stash a/an ' + wordThirteen +
    ' in yer pants, and keep a/an ' + wordFourteen + ' perched atop yer ' + wordFifteen + '. Aye, now ye be a real pirate!';

    document.getElementById("answer").textContent = paragraph;
}