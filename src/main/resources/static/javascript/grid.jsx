import PageUtils from "page-utils";
import { renderToString } from 'react-dom'


export default class Grid extends React.Component{ //will go to page-utls
    
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.grid = GridStack.init();
        console.log("grid init")
        this.widgets = $('.widget')

        console.log("render widgets", this.widgets)
        this.widgets.each((_, widget) => {

            console.log(widget, widget[0]);
            this.grid.addWidget(widget, 0, 0, 1, 1, true);

        });
    }

    render() {
        return (
            <div>
                <div className="grid-stack">
                    {this.props.children}
                </div>
            </div>
        )  
    }

    addWidget(el){
        console.log(el);
        this.grid.addWidget(el);
    }
}