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
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import {getWidth} from '../utils';
import './App.min.css'

const classNames = require('classnames');

class App extends Component {
    static propTypes = {
        selectedGridTile: PropTypes.number,
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
            filterProducts: '',
            productsColumns: Math.trunc(getWidth() / 250),
            selectedGridTile: props.selectedGridTile | 0,
            appbarStatus: {
                searching: false,
            }
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

    handleFilterProducts(filter) {
        this.setState({
            filterProducts: filter.toLowerCase(),
        })
    }

    handleToggleSearchBar(event) {
        const {appbarStatus} = this.state;
        this.setState({
            appbarStatus: {
                searching: !appbarStatus.searching
            }
        });
    }

    handleCloseeSearchBar(event) {
        this.setState({
            appbarStatus: {
                searching: false
            }
        });
    }

    renderProducts() {
        const {products, selectedGridTile, productsColumns, filterProducts} = this.state;

        let renderedProducts = '';
        if (filterProducts === '') {
            renderedProducts = products
                .filter((product) => (selectedGridTile === 0 || product.category.id === selectedGridTile))
                .map((product) => (
                    <GridTile key={product.id}
                              style={{margin: 0, padding: 0,}}
                              title={`${product.title} (${product.category.title})`}>
                        <img src={product.img} alt="product"/>
                    </GridTile>
                ))
        }
        else {
            renderedProducts = products
                .filter((product) => (product.title.toLowerCase().indexOf(filterProducts) !== -1
                && (selectedGridTile === 0
                || product.category.id === selectedGridTile)))
                .map((product) => (
                    <GridTile key={product.id}
                              style={{margin: 0, padding: 0,}}
                              title={`${product.title} (${product.category.title})`}>
                        <img src={product.img} alt="product"/>
                    </GridTile>
                ))
        }

        return (
            <GridList style={{margin: 0, padding: 0,}}
                      cols={productsColumns}>
                {renderedProducts}
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
        const {appbarStatus} = this.state;
        return (
            <main>
                {/*<ResizeSensor onResize={this.handleResizeColumnSizes}/>*/}
                <AppBar
                    className={classNames('appBar', {
                        searching: appbarStatus.searching,
                    })}
                    iconElementRight={
                        <Search color="#FFF"/>
                    }
                    style={{position: 'fixed'}}
                    iconStyleRight={{margin: 'auto'}}
                    iconStyleLeft={{margin: 'auto'}}
                    onRightIconButtonTouchTap={(event) => {
                        this.handleToggleSearchBar();
                        document.getElementById('productFilter').focus();
                    }}
                    onLeftIconButtonTouchTap={(event) => (this.handleMenuIconClick())}
                    title={"Ovelha Negra"}/>
                <AppBar
                    className={classNames('searchBar', {
                        searching: appbarStatus.searching,
                    })}
                    iconElementLeft={
                        <KeyboardBackspace/>
                    }
                    iconStyleRight={{margin: 'auto'}}
                    iconStyleLeft={{margin: 'auto'}}
                    titleStyle={{margin: 'auto', padding: '0 1% 0 1%'}}
                    title={
                        <div>
                            <TextField onChange={(event => this.handleFilterProducts(event.target.value))} fullWidth={true}
                                       id="productFilter" onKeyDown={(event) => {
                                if (event.keyCode === 27) {
                                    this.handleCloseeSearchBar()
                                }
                            }}/>
                        </div>
                    }
                    iconElementRight={<Search/>}
                    style={{position: 'fixed', backgroundColor: "#FFF"}}
                    onLeftIconButtonTouchTap={(event) => (this.handleToggleSearchBar())}
                    onRightIconButtonTouchTap={(event) => {
                        this.handleToggleSearchBar();
                        document.getElementById('productFilter').blur();
                    }}/>

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