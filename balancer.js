"use strict";
/* global Stack */

class SymbolBalancer {
    constructor(text) {
        this.text = text;
        this.stack = new Stack();
    }

    isBalanced(delimiters) {
        // TODO impelement code here
        for(let i=0;i<this.text.length;i++){
            for(let j=i+1;j<this.text.length;i++){
                this.count=0;
                if(this.text[i]===this.text[j]){
                   this.count++;
                }
                if(this.count%2!==0){
                    return false;
                }
            }  
        }
        return true;
    }
}
let text1=new SymbolBalancer("{}[]()");
//let delimeter=new SymbolBalancer("{}");

//console.log(delimeter);