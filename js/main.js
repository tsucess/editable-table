let table = document.querySelector('#example');
let cells = table.querySelectorAll('td');

// console.log(cells);

cells.forEach( cell => {
        cell.onclick = function (){
                console.log(cell);
                
                if(this.hasAttribute('data-clicked')){
                        return;
                    }
                    
                    
            this.setAttribute('data-clicked', 'yes');
            this.setAttribute('data-text', this.textContent);


            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.value = this.textContent;
            input.style.width = this.offsetWidth - (this.clientLeft * 2) + "px";
            input.style.height = this.offsetHeight - (this.clientTop * 2) + "px";
            input.style.border = "0px";
            input.style.fontFamily = "inherit";
            input.style.fontSize = "inherit";
            input.style.textAlign = "inherit";
            input.style.backgroundColor = "LightGoldenRodYellow";

            input.onblur = function(){
                let td = input.parentElement;
                let orig_text = input.parentElement.getAttribute('data-text');
                let current_text = this.value;
                
                if(orig_text != current_text){
                    // there are changes in the cells text 
                    // save our new data to db using ajax 
                    td.removeAttribute('data-clicked');
                    td.removeAttribute('data-text');
                    td.innerHTML = current_text;
                    td.style.cssText = "padding: 5px";
                    confirm(orig_text + ' is changed to ' + current_text);

                }else{
                    td.removeAttribute('data-clicked');
                    td.removeAttribute('data-text');
                    td.innerHTML = orig_text;
                    td.style.cssText = "padding: 5px";
                    alert('No changes made');
                }
            }
            this.textContent = " ";
            this.style.cssText = "padding: 0px 0px";
            this.append(input);
            this.firstElementChild.select();
        }
});
