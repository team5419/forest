import PageUtils from "page-utils";
import SocketHandler from "socket-handler";
import Grid from "grid";

$(function() { // runs when document finishes loading
    if(PageUtils.loadPageConfig()) {
        SocketHandler.connect(PageUtils.getWebSocketPageAddress());
        ReactDOM.render(
            <div>
            <Grid>
                {PageUtils.renderWidgets()}
                </Grid> 
            
            
            
           </div>,
            $('#reactapp')[ 0 ]
        );
    } else {
        let err = textStatus + ', ' + error;
        ReactDOM.render(
        <div>
            <div class='alert alert-danger p-2 show' role='alert'>
                There was an error loading the JSON config from the robot:
                <br />
                <b>{err}</b>
            </div>
        </div>,
        $('#reactapp')[ 0 ]);
    }
});
