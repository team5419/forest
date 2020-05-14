import PageUtils from "page-utils";
import { renderToString } from 'react-dom'
//dyn change rows and col
//min width and heights for the width
//hidden widget (another grid)

export default class Grid extends React.Component{ //will go to page-utls
    
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.options = {
            draggable: {handle: '.widget-header'}
            ,row: 10
            ,column : 12
            ,verticalMargin: 20 //defu
        }
        this.grid = GridStack.init(this.options);


        //this.hiddengrid = GridStack.init(this.options);
    
    }

    render() {
        return (
            <div className="grid-stack">
                {this.props.children}
            </div>        
        )  
    }

    addWidget(el){
        console.log(el);
        this.grid.addWidget(el);
    }
}