import PageUtils from "page-utils";
import { renderToString } from 'react-dom'


export default class Grid extends React.Component{ //will go to page-utls
    
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.options = {
            draggable: {handle: '.widget-title'}
            ,row: 10
            ,column : 12
        }
        this.grid = GridStack.init(this.options);
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