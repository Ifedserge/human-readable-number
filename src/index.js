module.exports = function toReadable (number) {

    let NS = [
        { value: 900, str: 'nine hundred'},
        { value: 800, str: 'eight hundred'},
        { value: 700, str: 'seven hundred'},
        { value: 600, str: 'six hundred'},
        { value: 500, str: 'five hundred'},
        { value: 400, str: 'four hundred'},
        { value: 300, str: 'three hundred'},
        { value: 200, str: "two hundred"},
        { value: 100, str: "one hundred"},
        { value: 90, str: "ninety"},
        { value: 80, str: "eighty"},
        { value: 70, str: "seventy"},
        { value: 60, str: "sixty"},
        { value: 50, str: "fifty"},
        { value: 40, str: "forty"},
        { value: 30, str: "thirty"},
        { value: 20, str: "twenty"},
        { value: 19, str: "nineteen"},
        { value: 18, str: "eighteen"},
        { value: 17, str: "seventeen"},
        { value: 16, str: "sixteen"},
        { value: 15, str: "fifteen"},
        { value: 14, str: "fourteen"},
        { value: 13, str: "thirteen"},
        { value: 12, str: "twelve"},
        { value: 11, str: "eleven"},
        { value: 10, str: "ten"},
        { value: 9, str: "nine"},
        { value: 8, str: "eight"},
        { value: 7, str: "seven"},
        { value: 6, str: "six"},
        { value: 5, str: "five"},
        { value: 4, str: "four"},
        { value: 3, str: "three"},
        { value: 2, str: "two"},
        { value: 1, str: "one"},
    
      ];

      let result = '';
      if(number === 0){
          return 'zero';
      }
      for (var n of NS) {
        if(number>=n.value){
          if(number <=999){
            result += n.str;
            number -= n.value;
            if(number >0) result += ' ';
          } else {
            let t =  Math.floor(number / n.value);
            console.log(t);
            let d = number % n.value;
            if(d>0){
              return toReadable(t) + ' ' + n.str +' ' + toReadable(d);
            } else {
              return toReadable(t) + ' ' + n.str;
            }

          }
        
        }
      }
      return result;
    }
