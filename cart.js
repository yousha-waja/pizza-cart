

 document.addEventListener("alpine:init", () => {
    Alpine.data('counter', ()=>({
      visibleS:false,
      visibleM:false,
      visibleL:false,
      visible:false,
      enjoy:false,
      pay:false,
      niks:false,
      empty: false,

      smallC :1,
      priceS:60.00,

      mediumC :1,
      priceM:89.90,


      largeC :1,
      priceL:104.90,

      total:0.00,
      count:0,
      


      calcS(){ if(this.visible === false && this.visibleS === false){
        this.visible =! this.visible,
        this.visibleS = true
        this.count ++,
        this.total += 60.00
      } else if(this.visible === true && this.visibleS === false){
        this.visibleS = true,
        this.count ++,
        this.total += 60.00
      } else if(this.visibleS===true){
        this.smallC ++,
        this.priceS += 60.00,
        this.count ++,
        this.total += 60.00
       }
      },
      calcM(){ if(this.visible === false && this.visibleM === false){
        this.visible =! this.visible,
        this.visibleM = true,
        this.count ++,
        this.total += 89.90
      } else if(this.visible === true && this.visibleM === false){
        this.visibleM = true,
        this.count ++,
        this.total += 89.90
      } else if(this.visibleM===true){
        this.mediumC ++,
        this.priceM += 89.90,
        this.count ++,
        this.total += 89.90
       }
      },
      calcL(){ if(this.visible === false && this.visibleL === false){
        this.visible =! this.visible,
        this.visibleL = true,
        this.count ++,
        this.total += 104.90
      } else if(this.visible === true && this.visibleL === false){
        this.visibleL = true,
        this.count ++,
        this.total += 104.90
      } else if(this.visibleL===true){
        this.largeC ++,
        this.priceL += 104.90,
        this.count ++,
        this.total += 104.90
       }
      },
      checkout() {
        var input = document.querySelector("input");
        if (this.enjoy === false && parseFloat(input.value) >= parseFloat(this.total)) {
          this.enjoy = true;
          setTimeout(() => {
            this.enjoy = false;
          }, 2000);
          input.value = '';
          this.visibleS = false;
          this.visibleM = false;
          this.visibleL = false;
          this.visible =false;
          this.count = 0;
          this.total = 0;
        } 
        else if (this.count === 0 && this.total === 0 && this.input !=='') {
            this.empty = true;
            setTimeout(() => {
              this.empty = false;
            }, 2000);
          }else if (this.pay === false && parseFloat(input.value) < parseFloat(this.total)) {
          this.pay = true;
          setTimeout(() => {
            this.pay = false;
          }, 2000);
          input.value = '';
        } else if (input.value === '') {
          this.niks = true;
          setTimeout(() => {
            this.niks = false;
          }, 2000);
        } else if (this.count === 0 && this.total === 0) {
          this.empty = true;
          setTimeout(() => {
            this.empty = false;
          }, 2000);
        }
      }
    }));
  });