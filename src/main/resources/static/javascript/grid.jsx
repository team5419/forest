import PageUtils from "page-utils";
import React, { Component } from 'react';

export default class Grid extends Component{ //will go to page-utls
    
    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <div>
                <div className="grid-stack"></div>
                {this.init()}

            </div>
            
        )
            
    }
    init(){
        this.grid = GridStack.init();
        this.grid.addWidget(el, 0, 0, 3, 2, true);
        grid.addWidget('<div class="grid-stack-item"><div class="grid-stack-item-content"> test </div></div>', {width: 2})

    }
}