/**
 * Created by gomes on 14/12/16.
 */
import React, {PropTypes, Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {GridList, GridTile} from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import {getWidth} from '../utils';
import './App.min.css'

const classNames = require('classnames');

class App extends Component {
    static propTypes = {
        selectedGridTile: PropTypes.integer,
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);
        let docked = false;
        this.state = {
            menuDrawerOpen: docked,
            docked: docked,
            categories: [
                {
                    id: 0,
                    img: "http://loremflickr.com/800/800",
                    title: 'Todos',
                },
                {
                    id: 1,
                    img: "http://loremflickr.com/300/500",
                    title: 'Bolos',
                },
                {
                    id: 2,
                    img: "http://loremflickr.com/400/500",
                    title: 'Patês',
                },
            ],
            products: [
                {
                    id: 0,
                    img: "http://loremflickr.com/800/800",
                    title: 'Bolo de Banana',
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 1,
                    img: "http://loremflickr.com/300/500",
                    title: 'Bolo de Abacate',
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 2,
                    img: "http://loremflickr.com/400/500",
                    title: 'Bolo de Cenoura',
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 3,
                    img: "http://loremflickr.com/500/300",
                    title: 'Patê de Azeitona',
                    category: {
                        id: 2,
                        title: 'Patês',
                    },
                },
                {
                    id: 4,
                    img: "http://loremflickr.com/450/500",
                    title: 'Patê de Grão de Bico',
                    category: {
                        id: 2,
                        title: 'Patês',
                    },
                },
                {
                    id: 5,
                    img: "http://loremflickr.com/450/450",
                    title: 'Bolo Formigueiro',
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 6,
                    img: "http://loremflickr.com/500/500",
                    title: 'Bolo Salgado',
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
            ],
            productsColumns: Math.trunc(getWidth() / 250),
            selectedGridTile: props.selectedGridTile | 0,
        };
        this.handleResizeColumnSizes = this.handleResizeColumnSizes.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResizeColumnSizes);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResizeColumnSizes);
    }

    handleMenuIconClick() {
        this.setState({menuDrawerOpen: !this.state.menuDrawerOpen});
    }

    handleGridTileCategoryClick(gridTileID) {
        this.setState({
            selectedGridTile: gridTileID,
        })
    }

    handleResizeColumnSizes(event) {
        console.log(event);
        this.setState({
            productsColumns: Math.trunc(getWidth() / 250),
        })
    }

    renderProducts() {
        const {products, selectedGridTile, productsColumns} = this.state;

        return (
            <GridList style={{margin: 0, padding: 0,}}
                      cols={productsColumns}>
                {products
                    .filter((product) => (selectedGridTile === 0 || product.category.id === selectedGridTile))
                    .map((product) => (
                        <GridTile key={product.id}
                                  style={{margin: 0, padding: 0,}}
                                  title={`${product.title} (${product.category.title})`}>
                            <img src={product.img} alt="product"/>
                        </GridTile>
                    ))
                }
            </GridList>
        );
    }


    renderCategoryTiles() {
        // let categories = Array.from(new Array(10), (val, index) => index + 1);
        const {categories} = this.state;
        const styles = {
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
            },
            titleStyle: {
                // color: 'rgb(0, 188, 212)',
            },
        };

        return (
            <GridList className="categories-tiles">
                {categories.map((category) => (
                    <GridTile key={category.id}
                              title={category.title}
                              titleStyle={styles.titleStyle}
                              onTouchTap={(event) => (this.handleGridTileCategoryClick(category.id))}
                              className={classNames('category-tile', {
                                  selected: this.state.selectedGridTile == category.id,
                              })}>
                        <img src={category.img} alt="category"/>
                    </GridTile>
                ))}
            </GridList>
        );
    };

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
            <main>
                {/*<ResizeSensor onResize={this.handleResizeColumnSizes}/>*/}
                <AppBar
                    iconElementRight={
                        <Avatar src="https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-9/15181357_1776011285983056_7062364725086917173_n.png?oh=bcc11f73e3754b463610b970bc2996a3&oe=58E70F07"/>
                    }
                    style={{position: 'fixed'}}
                    onLeftIconButtonTouchTap={(event) => (this.handleMenuIconClick())}/>
                {this.renderDrawer()}
                <Divider/>
                <div className="content">
                    <div className="row">
                        {this.renderCategoryTiles()}
                    </div>
                    <div className="row">
                        {this.renderProducts()}
                    </div>
                </div>
            </main>

        )
    };
}

export default App;