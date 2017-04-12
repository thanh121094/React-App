/**
 * Created by Peter Hoang Nguyen on 4/11/2017.
 */
import React from 'react';
import './stylesheet.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import Draw from 'components/show-data/draw/Draw';
import Show from '../../show-data/show/Show';

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 11/04/2017
 **/
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentWillMount() {
        let {dispatch} = this.props;
    }

    render() {
        let menuList = ['Menu 01', 'Menu 02', 'Menu 03']
        return (
            <div className="main">
               {/*user: {process.env.REACT_APP_USER_LOCAL_STORAGE_KEY}*/}
                {/*<div className="left-menu">*/}
                    {/*<LeftMenu menu={menuList} header="day la header"/>*/}
                {/*</div>*/}
                {/*<div className="body-content">*/}
                    {/*body*/}
                    {/*<Draw onClick={this.drawonClick}/>*/}
                {/*</div>*/}
                <div className="right-menu">
                    <RightMenu/>
                </div>
                <Show/>
            </div>
        );
    }
}

export default Main;