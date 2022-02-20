let bloodSupplies = [];
bloodSupplies[0] = document.getElementById("supply-01");
bloodSupplies[1] = document.getElementById("supply-02");
bloodSupplies[2] = document.getElementById("supply-03");
bloodSupplies[3] = document.getElementById("supply-04");
bloodSupplies[4] = document.getElementById("supply-05");
bloodSupplies[5] = document.getElementById("supply-06");
bloodSupplies[6] = document.getElementById("supply-07");
bloodSupplies[7] = document.getElementById("supply-08");


window.onscroll = function() { bloodSupply()};
    let flag = 0;
    function bloodSupply() {
          if ( window.pageYOffset > 350 && flag === 0) {            
           for(let i = 0; i < bloodSupplies.length; i++){
                bloodSupplies[i].style.height = Math.floor(Math.random() * 101) + '%';
           }
           flag = 1;
        }
}
