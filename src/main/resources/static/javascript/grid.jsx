import PageUtils from "page-utils";
import { renderToString } from 'react-dom'


export default class Grid extends React.Component{ //will go to page-utls
    
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.widgets = $('.widget');
        console.log(this.grid);
        this.widgets.each((i, widget) => {
            this.grid.addWidget(widget, 0, 0, 12%i, i, true);
        });
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