import React from 'react';
import {injectI18N, t1} from "i18n/index";
import {connect} from 'react-redux';

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 11/04/2017
 **/
class Draw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
          
    }

    componentWillMount() {
        let {dispatch} = this.props;

    }

    render() {
        let {intl, dataToDraw, onClick} =this.props;
        let msg = t1(intl, "msg");

        return (
            <div onClick={() => {onClick()}}>
                Day la data: {dataToDraw}
            </div>
        );
    }
}

Draw.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

const mapStateToProp = (store) => {
    console.log("dataToDraw", store.admin.data);
    return {
        dataToDraw: store.admin.data
    }
}

export default connect(mapStateToProp)(injectI18N(Draw));