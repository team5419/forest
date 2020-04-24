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

        // var el = $.parseHTML("<div class=\"grid-stack-item-content\"> First Widget Content </div> ");
        // this.grid.addWidget(el)
        

        // var el = PageUtils.renderWidgets();
        // console.log(el)
        // this.grid.addWidget(el[0])
        console.log(this.props.children)
        // for (var i =0; this.props.children.length; i++){
        //     this.grid.addWidget(this.props.children[i]);
        // }
       
  
        

    }
    
        
    
}