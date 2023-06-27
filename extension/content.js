const colorS = [('#c9bc4f'),
    ('#b0be57'),
    ('#98be63'),
    ('#81bd71'),
    ('#6bbb7f'),
    ('#57b88d'),
    ('#45b499'),
    ('#3aafa4'),
    ('#38aaab'),
    ('#3fa4b0')];



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    if(message.txt === "hii"){
        let selectD = document.getElementsByTagName('p');

        let totalP = document.getElementsByTagName('p').length;
        const pArr = new Array(totalP);

        console.log(pArr.length);

        let j = 0;
        for(elt of selectD){
            for(let i = 0; i < totalP; i++){
                elt.style['background-color'] = colorS[j];
                j++;
                if(j > colorS.length){
                    j = 0;
                }
            }
        }
    }
}