/**
 * Created by Peter Hoang Nguyen on 4/11/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {letDrawTheContent} from './AdminActionCreator';

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 11/04/2017
 **/
class LeftMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.showLiHtml = this.showLiHtml.bind(this);
    }

    componentWillMount() {
        let {dispatch} = this.props;
    }

    showLiHtml(data) {
        let {dispatch} = this.props;
        this.setState({clickedMenu: data});
        console.log("dispatch: ", data);
        dispatch(letDrawTheContent(data))
    }

    render() {
        let {menu, header} = this.props;

        return (
            <ul>
                {menu &&
                    menu.map((data, index) =>
                         <li key={index} onClick={() => {
                             this.showLiHtml(data);
                         }}> {data}</li>
                    )
                }

                <li>clicked Menu: {this.state.clickedMenu}</li>
            </ul>
        );
    }
}

export default connect()(LeftMenu);



// let functionA = () => {
//     console.log('aaaaaaaaaa');
// }
//
// let functionA = () => console.log('aaaaaaaaaa');
//
// let functionA = function(){
//     console.log('aaaaaaaaaa');
// }
//
// let functionA = (pra1, pra2) => {
//     console.log(pra1, pra2);
// }
//
// let functionB = (pra1, pra2) => console.log(pra1, pra2);;
//
// let functionB = function(pra1, pra2){
//     console.log(pra1);
//     console.log(pra2s);
//     console.log('aaaaaaaaaa');
// }
