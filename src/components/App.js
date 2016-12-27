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
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
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
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/800.jpg?alt=media&token=62b0c4e8-54d4-4dfa-acbb-bb061b6875b9",
                    title: 'Todos',
                },
                {
                    id: 1,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/5002.jpg?alt=media&token=bb537804-84c1-4a36-9710-5d1e95ffd69c",
                    title: 'Bolos',
                },
                {
                    id: 2,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/450.jpg?alt=media&token=b8ed92b9-3e62-411a-8143-5b1e46ac905b",
                    title: 'Patês',
                },
            ],
            products: [
                {
                    id: 0,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/5002.jpg?alt=media&token=bb537804-84c1-4a36-9710-5d1e95ffd69c",
                    title: 'Bolo de Banana',
                    description: `
                    Lorem ipsum dolor sit amet, parturient tellus elit. At arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat

Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas

Dictum aliquam lectus lacinia, risus varius ultricies eu a tortor facilisis, sem tellus et aliquam convallis quis nibh, nisi proin wisi, rhoncus vestibulum. Faucibus in sodales ullamcorper amet eu condimentum, vitae turpis bibendum, lacinia nec nunc cras nunc, erat consectetuer tempor purus sociis, leo aptent donec blandit lorem metus. Id ipsum, mi urna justo. Accumsan quisque tempor metus, vitae feugiat in ac, tortor nulla. Sit amet velit amet tincidunt pellentesque, in eu eu id, dictum metus in gravida hendrerit, fugit vitae laoreet turpis nonummy a quis. Pellentesque et tincidunt molestias molestie adipiscing, risus mi commodo pellentesque orci, ipsum eget tincidunt facilisis

Sit non, nibh est sit. Justo sed dolor massa pede fermentum. Ac risus porttitor erat ornare. Aenean tellus. Luctus morbi libero felis erat nibh vulputate, sollicitudin aliquet aliquet feugiat vel, phasellus dui accumsan
`,
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 1,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/5002.jpg?alt=media&token=bb537804-84c1-4a36-9710-5d1e95ffd69c",
                    title: 'Bolo de Abacate',
                    description: `<strong>Lorem ipsum dolor sit amet, parturient tellus elit.</strong> \nAt arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat
Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas`,
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 2,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/5002.jpg?alt=media&token=bb537804-84c1-4a36-9710-5d1e95ffd69c",
                    title: 'Bolo de Cenoura',
                    description: `
                    Lorem ipsum dolor sit amet, parturient tellus elit. At arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat

Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas

Dictum aliquam lectus lacinia, risus varius ultricies eu a tortor facilisis, sem tellus et aliquam convallis quis nibh, nisi proin wisi, rhoncus vestibulum. Faucibus in sodales ullamcorper amet eu condimentum, vitae turpis bibendum, lacinia nec nunc cras nunc, erat consectetuer tempor purus sociis, leo aptent donec blandit lorem metus. Id ipsum, mi urna justo. Accumsan quisque tempor metus, vitae feugiat in ac, tortor nulla. Sit amet velit amet tincidunt pellentesque, in eu eu id, dictum metus in gravida hendrerit, fugit vitae laoreet turpis nonummy a quis. Pellentesque et tincidunt molestias molestie adipiscing, risus mi commodo pellentesque orci, ipsum eget tincidunt facilisis

Sit non, nibh est sit. Justo sed dolor massa pede fermentum. Ac risus porttitor erat ornare. Aenean tellus. Luctus morbi libero felis erat nibh vulputate, sollicitudin aliquet aliquet feugiat vel, phasellus dui accumsan
`,
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 3,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/450.jpg?alt=media&token=b8ed92b9-3e62-411a-8143-5b1e46ac905b",
                    title: 'Patê de Azeitona',
                    description: `
                    Lorem ipsum dolor sit amet, parturient tellus elit. At arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat

Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas

Dictum aliquam lectus lacinia, risus varius ultricies eu a tortor facilisis, sem tellus et aliquam convallis quis nibh, nisi proin wisi, rhoncus vestibulum. Faucibus in sodales ullamcorper amet eu condimentum, vitae turpis bibendum, lacinia nec nunc cras nunc, erat consectetuer tempor purus sociis, leo aptent donec blandit lorem metus. Id ipsum, mi urna justo. Accumsan quisque tempor metus, vitae feugiat in ac, tortor nulla. Sit amet velit amet tincidunt pellentesque, in eu eu id, dictum metus in gravida hendrerit, fugit vitae laoreet turpis nonummy a quis. Pellentesque et tincidunt molestias molestie adipiscing, risus mi commodo pellentesque orci, ipsum eget tincidunt facilisis

Sit non, nibh est sit. Justo sed dolor massa pede fermentum. Ac risus porttitor erat ornare. Aenean tellus. Luctus morbi libero felis erat nibh vulputate, sollicitudin aliquet aliquet feugiat vel, phasellus dui accumsan
`,
                    category: {
                        id: 2,
                        title: 'Patês',
                    },
                },
                {
                    id: 4,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/450.jpg?alt=media&token=b8ed92b9-3e62-411a-8143-5b1e46ac905b",
                    title: 'Patê de Grão de Bico',
                    description: `
                    Lorem ipsum dolor sit amet, parturient tellus elit. At arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat

Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas

Dictum aliquam lectus lacinia, risus varius ultricies eu a tortor facilisis, sem tellus et aliquam convallis quis nibh, nisi proin wisi, rhoncus vestibulum. Faucibus in sodales ullamcorper amet eu condimentum, vitae turpis bibendum, lacinia nec nunc cras nunc, erat consectetuer tempor purus sociis, leo aptent donec blandit lorem metus. Id ipsum, mi urna justo. Accumsan quisque tempor metus, vitae feugiat in ac, tortor nulla. Sit amet velit amet tincidunt pellentesque, in eu eu id, dictum metus in gravida hendrerit, fugit vitae laoreet turpis nonummy a quis. Pellentesque et tincidunt molestias molestie adipiscing, risus mi commodo pellentesque orci, ipsum eget tincidunt facilisis

Sit non, nibh est sit. Justo sed dolor massa pede fermentum. Ac risus porttitor erat ornare. Aenean tellus. Luctus morbi libero felis erat nibh vulputate, sollicitudin aliquet aliquet feugiat vel, phasellus dui accumsan
`,
                    category: {
                        id: 2,
                        title: 'Patês',
                    },
                },
                {
                    id: 5,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/5002.jpg?alt=media&token=bb537804-84c1-4a36-9710-5d1e95ffd69c",
                    title: 'Bolo Formigueiro',
                    description: `
                    Lorem ipsum dolor sit amet, parturient tellus elit. At arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat

Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas

Dictum aliquam lectus lacinia, risus varius ultricies eu a tortor facilisis, sem tellus et aliquam convallis quis nibh, nisi proin wisi, rhoncus vestibulum. Faucibus in sodales ullamcorper amet eu condimentum, vitae turpis bibendum, lacinia nec nunc cras nunc, erat consectetuer tempor purus sociis, leo aptent donec blandit lorem metus. Id ipsum, mi urna justo. Accumsan quisque tempor metus, vitae feugiat in ac, tortor nulla. Sit amet velit amet tincidunt pellentesque, in eu eu id, dictum metus in gravida hendrerit, fugit vitae laoreet turpis nonummy a quis. Pellentesque et tincidunt molestias molestie adipiscing, risus mi commodo pellentesque orci, ipsum eget tincidunt facilisis

Sit non, nibh est sit. Justo sed dolor massa pede fermentum. Ac risus porttitor erat ornare. Aenean tellus. Luctus morbi libero felis erat nibh vulputate, sollicitudin aliquet aliquet feugiat vel, phasellus dui accumsan
`,
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
                {
                    id: 6,
                    img: "https://firebasestorage.googleapis.com/v0/b/backend-example.appspot.com/o/5002.jpg?alt=media&token=bb537804-84c1-4a36-9710-5d1e95ffd69c",
                    title: 'Bolo Salgado',
                    description: `
                    Lorem ipsum dolor sit amet, parturient tellus elit. At arcu phasellus quis. Lorem et nam, sapien lacus metus id, amet at risus vitae wisi gravida, lacinia lorem lorem amet interdum. Sed lobortis ipsum proin in, porttitor lacinia nihil nulla non, lorem id massa nunc elit, tellus aliquam pellentesque. Ad a neque leo non harum nunc, eu in dis est neque fringilla, elit mauris vel. Vel sem convallis pharetra, sit lorem pede, aliquet donec mauris sit. Ac orci in blandit molestie. A aliquet turpis nonummy quis nisl erat, vulputate nulla aliquet tincidunt et lectus wisi, ut nam et odio odio lorem dui. Urna tristique, quisque quisque ligula nunc aut, class ac, nec volutpat fusce ante. Convallis adipiscing tellus ornare curabitur justo cum, eu dictum diam adipiscing, dapibus tempor donec lobortis erat

Tortor eu quisque, autem magna ipsum faucibus. Urna viverra venenatis ipsam, pellentesque morbi lorem mi magna facilis id, eu sodales sed venenatis dignissim dolor eleifend, mollis velit justo ligula ut. Nulla vulputate ante nibh nunc, tortor sapien neque condimentum ut et. Eros nostra vehicula, vivamus neque natoque dolor dolore, at vitae et in venenatis orci, enim neque nibh arcu arcu pharetra, justo aenean aliquam. Diam dis turpis adipiscing elementum elit eget, diam feugiat nullam venenatis pede nulla, lacinia etiam nisl aliquet dictumst euismod, volutpat arcu condimentum risus facilisis. Purus aenean ante. Amet eget, risus quis orci phasellus metus vitae pellentesque, nunc neque. Velit vehicula praesent enim ut lectus a, aliqua congue, lobortis ligula mauris libero pellentesque venenatis velit, id ut et non parturient. Urna mauris donec, sodales at vitae justo nibh sociosqu, adipiscing gravida scelerisque recusandae egestas malesuada. At et wisi in quisque elementum nibh, laoreet mi augue rhoncus eu lacus taciti, dui nam nunc metus ut ultrices lacus, luctus egestas

Dictum aliquam lectus lacinia, risus varius ultricies eu a tortor facilisis, sem tellus et aliquam convallis quis nibh, nisi proin wisi, rhoncus vestibulum. Faucibus in sodales ullamcorper amet eu condimentum, vitae turpis bibendum, lacinia nec nunc cras nunc, erat consectetuer tempor purus sociis, leo aptent donec blandit lorem metus. Id ipsum, mi urna justo. Accumsan quisque tempor metus, vitae feugiat in ac, tortor nulla. Sit amet velit amet tincidunt pellentesque, in eu eu id, dictum metus in gravida hendrerit, fugit vitae laoreet turpis nonummy a quis. Pellentesque et tincidunt molestias molestie adipiscing, risus mi commodo pellentesque orci, ipsum eget tincidunt facilisis

Sit non, nibh est sit. Justo sed dolor massa pede fermentum. Ac risus porttitor erat ornare. Aenean tellus. Luctus morbi libero felis erat nibh vulputate, sollicitudin aliquet aliquet feugiat vel, phasellus dui accumsan
`,
                    category: {
                        id: 1,
                        title: 'Bolos',
                    },
                },
            ],
            selectedProduct: undefined,
            filterProducts: '',
            productsColumns: Math.trunc(getWidth() / 250),
            selectedGridTile: props.selectedGridTile | 0,
            aboutDialogOpen: false,
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
        this.setState({
            productsColumns: Math.trunc(getWidth() / 250),
        })
    }

    handleFilterProducts(filter) {
        this.setState({
            filterProducts: filter.toLowerCase(),
        })
    }

    handleCloseProductDialog() {
        this.setState({
            selectedProduct: undefined,
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

    handleToggleAboutDialog() {
        const {aboutDialogOpen} = this.state;
        this.setState({
            aboutDialogOpen: !aboutDialogOpen,
        });
    }

    handleSelectProduct(selectedProduct) {
        this.setState({
            selectedProduct: selectedProduct,
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
                              title={`${product.title} (${product.category.title})`}
                              onTouchTap={(event) => {
                                  this.handleSelectProduct(product)
                              }}>
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
                              title={`${product.title} (${product.category.title})`}
                              onTouchTap={(event) => {
                                  this.handleSelectProduct(product)
                              }}>
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

    renderAboutDialog() {
        const {aboutDialogOpen} = this.state;
        const actions = [
            <FlatButton label="Fechar" onTouchTap={(event) => {
                this.handleToggleAboutDialog()
            }}/>,
            <FlatButton primary={true} label="Encomendar" href={'https://m.me/1774447839472734'} target="_blank"/>
        ];
        return (
            <Dialog
                className='product-dialog'
                contentClassName='product-dialog-content'
                autoDetectWindowHeight={true}
                titleStyle={{backgroundColor: 'rgb(255, 152, 0)', color: '#FFF'}}
                bodyStyle={{paddingTop: '1em'}}
                autoScrollBodyContent={true}
                title={<div>{`Sobre a Ovelha`}</div>}
                modal={false}
                open={aboutDialogOpen}
                actions={actions}
                onRequestClose={(event) => {
                    this.handleToggleAboutDialog()
                }}>
                <h3>{`Sobre`}</h3>
            </Dialog>
        )
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
                <List>
                    <ListItem onTouchTap={(event) => {this.handleToggleAboutDialog()}}>{`Sobre a Ovelha`}</ListItem>
                    <ListItem href={`https://m.me/1774447839472734`} target="_blank">{`Contato`}</ListItem>
                </List>
                {this.renderAboutDialog()}
            </Drawer>
        )
    }

    renderProductDialog() {
        const {selectedProduct} = this.state;
        if (selectedProduct !== undefined) {
            const actions = [
                <FlatButton label="Fechar" onTouchTap={(event) => {
                    this.handleCloseProductDialog()
                }}/>,
                <FlatButton primary={true} label="Encomendar" href={'https://m.me/1774447839472734'} target="_blank"/>
            ];
            return (
                <Dialog
                    className='product-dialog'
                    contentClassName='product-dialog-content'
                    autoDetectWindowHeight={true}
                    titleStyle={{backgroundColor: 'rgb(255, 152, 0)', color: '#FFF'}}
                    bodyStyle={{paddingTop: '1em'}}
                    autoScrollBodyContent={true}
                    title={<div><List>
                        <ListItem disabled={true} leftAvatar={
                            <Avatar src={selectedProduct.img}/>} style={{color: '#FFF'}}>
                            <span style={{fontSize: '2em'}}>{selectedProduct.title}</span>
                        </ListItem>
                    </List></div>}
                    modal={false}
                    open={selectedProduct !== undefined}
                    actions={actions}
                    onRequestClose={(event) => {
                        this.handleCloseProductDialog()
                    }}>
                    <h3>{selectedProduct.title}</h3>
                    {selectedProduct.description.split('\n').map((paragraph, index) => (
                        <p key={index} style={{textAlign: 'justify', maxWidth: '100%'}}>{paragraph}</p>))}
                </Dialog>
            )
        }
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
                {this.renderProductDialog()}
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