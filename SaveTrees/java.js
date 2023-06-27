let secondCC = "styleE.css";




setInterval(
    function(){
        document.querySelector("link").href = secondCC;

        let selectorAW = "body > h1";
        let action = document.querySelector(selectorAW);
        action.innerHTML = "Wood & Co.";

        let selectNav = "body > .mainB > .horBar > #Nav1";
        let act1 = document.querySelector(selectNav);
        act1.innerHTML = "Types";

        let selectNav2 = "body > .mainB > .horBar > #Nav2";
        let act2 = document.querySelector(selectNav2);
        act2.innerHTML = "Sourced";

        let selectNav3 = "body > .mainB > .horBar > #Nav3";
        let act3 = document.querySelector(selectNav3);
        act3.innerHTML = "Properties";

        let selectNav4 = "body > .mainB > .horBar > #Nav4";
        let act4 = document.querySelector(selectNav4);
        act4.innerHTML = "Sale";

        let abtHeader = "body > .mainB > .about > .aboutHeader";
        let aboutH= document.querySelector(abtHeader);
        aboutH.innerHTML = "TYPES";

        let abt1 = "body > .mainB > .about > .aboutText > #A";
        let about1= document.querySelector(abt1);
        about1.innerHTML = "Wood & Co carries a wide selection of wood, such as: Oak, Birch, Cocobolo, Koa, African Blackwood, Pink Ivory, Sandal, and Agar. If the wood you are looking for is not on this list, contact a memeber of our team.";

        let abt2 = "body > .mainB > .about > .aboutText > #B";
        let about2= document.querySelector(abt2);
        about2.innerHTML = "SOURCED";

        let abt3 = "body > .mainB > .about > .aboutText > #C";
        let about3 = document.querySelector(abt3);
        about3.innerHTML = "Here at Wood & Co. we put the customer first. That means providing the best quality products. To maintain this standard, we harvest all off our products from their native enviornments. You can see our many farms in the properties section.";


        let backLoc = "body > .locatS";
        let backLoct = document.querySelector(backLoc);
        backLoct.style.backgroundColor ="rgb(219, 206, 197)";
        backLoct.style.borderRadius ="10px";
        


        let locat = "body > .locatS > h2";
        let loct= document.querySelector(locat);
        loct.innerHTML = "Properties";

        let locat0 = "body > .locatS > p";
        let loct0= document.querySelector(locat0);
        loct0.innerHTML = "All of our farms have been marked on the map below.";

        let locat1 = "body > .locatS > #locatP";
        let loct1= document.querySelector(locat1);
        loct1.innerHTML = "";


        let locat2 = "body > .locatS > .flexContain";
        let loct2 = document.querySelector(locat2);
        loct2.innerHTML = "";

        let woodS = document.getElementById('wodMap');
        woodS.style.display = 'unset';

        let dontSale = "body > .donations > .donateTxt > h2";
        let saleRE = document.querySelector(dontSale);
        saleRE.innerHTML = "Sale";
        saleRE.style.borderBottom = "rgb(69, 55, 42) dashed 3px";

        let dontS = "body > .donations > .donateTxt > p";
        let dontS0 = document.querySelector(dontS);
        dontS0.innerHTML = "";

        let donateBye = document.getElementById('hideDonate');
        donateBye.style.display = "none";

        let salePics = document.getElementById('sale_pics');
            salePics.style.display = 'flex';
            salePics.style.flexDirection= "row";
            salePics.style.flexWrap = "wrap";
            salePics.style.marginLeft = "100px"
            salePics.style.backgroundColor = "rgb(204, 191, 182)";
            salePics.style.borderRadius = "10px";

    }
 ,8000);