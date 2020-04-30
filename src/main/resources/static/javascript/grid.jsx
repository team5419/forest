import PageUtils from "page-utils";


export default class Grid extends React.Component{ //will go to page-utls
    
    constructor(props){
        super(props)

        
    }
    componentDidMount(){
        this.init()
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
        this.grid.addWidget(el);
    }
    
    init(){

        this.grid = GridStack.init();
       

        this.widgets = PageUtils.renderWidgets();

        for (var i =0; this.props.children.length; i++){
            this.grid.addWidget(this.props.children[i].toString(), 0, 0, 1, 1, true);
        }
 
  
        

    }
    
        
    
}