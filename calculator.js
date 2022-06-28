"use strict"

      function display (value){
          if(value === '+/-'){
          document.getElementById("input").innerHTML *= -1
          console.log("hai", value)
        }
        else{
          document.getElementById("input").innerHTML += value
        }
      }

      function clearac(){
        document.getElementById("input").innerHTML = ""
      }

      function equall (){
        console.log ("hello")
        let x = document.getElementById("input").innerText
        console.log(x,eval(x),"prasanna")
        document.getElementById("input").innerHTML = eval(x)
      }
      
      document.addEventListener("keypress",prasanna);
      
      function prasanna(e) {
        console.log("keui",e)
        switch (e.key) {
          case "1":
          display('1')
            break;
          case "2":
          display('2')
            break;
          case "3":
            display('3')
            break;
          case "4":
           display('4')
            break;
          case "5":
           display('5')
            break;
          case "6":
           display('6')
            break;
          case "7":
            display('7')
            break;
          case "8":
           display('8')
            break;
          case "9":
            display('9')
            break;  
          case "0":
            display('0')
            break;  
          case "Enter":
            equall()
            break;
          case "=":
          display('+')
          break;  
          case "-":
          display('-')
          break;
          case "x":
          display('*')
          break;
          case "/":
            display('/')
            break;
          case "\\":
            display('%')
            break;  
            case "'":
            display('+/-')
            break; 
        }
      
      
      }
      document.addEventListener("keydown",sujai);
      function sujai(e){
        switch (e.keyCode) {
          case 27:
          clearac('AC')
            break; 
        }
      }
      
   
