/**
 * Created by gomes on 14/12/16.
 */
import React, {PropTypes, Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';


class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);
        let docked = false;
        this.state = {
            menuDrawerOpen: docked,
            docked: docked,
        }
    }

    handleMenuIconClick() {
        this.setState({menuDrawerOpen: !this.state.menuDrawerOpen});
    }

    renderDrawer() {
        return (
            <Drawer open={this.state.menuDrawerOpen}
                    onRequestChange={(event) => (this.handleMenuIconClick())}
                    docked={this.state.docked}
                    width={300}>
                <AppBar showMenuIconButton={false} title="Menu"
                        iconElementRight={
                            <Avatar src="https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-9/15181357_1776011285983056_7062364725086917173_n.png?oh=bcc11f73e3754b463610b970bc2996a3&oe=58E70F07"/>
                        }/>
            </Drawer>
        )
    }

    render() {
        return (
            <div style={{backgroundColor: "#FFF8E1", height: "100%"}}>
                <AppBar
                    iconElementRight={
                        <Avatar src="https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-9/15181357_1776011285983056_7062364725086917173_n.png?oh=bcc11f73e3754b463610b970bc2996a3&oe=58E70F07"/>
                    }
                    onLeftIconButtonTouchTap={(event) => (this.handleMenuIconClick())}/>
                {this.renderDrawer()}
                <div className="row">
                    <div className="four columns">
                    </div>
                    <div className="eigth columns">
                    </div>
                </div>
            </div>

        )
    };
}

export default App;