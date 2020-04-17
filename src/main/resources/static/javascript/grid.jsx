import PageUtils from "page-utils";

export default class Grid extends React.Component{ //will go to page-utls
    
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div className="grid-stack">
                {PageUtils.renderWidgets()}
            </div>
        )
            
    }
}