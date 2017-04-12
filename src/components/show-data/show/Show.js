import React from 'react';
import {connect} from 'react-redux';
import {letDeleteTheValue} from '../../themes/admin/AdminActionCreator';
import {letEditTheValue} from '../../themes/admin/AdminActionCreator';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

    getInitialState() {
        return {editable: false}
    }

  handleDelete(index) {
    let {dataToShow, dispatch} = this.props;
    dataToShow.splice(index, 1);
    dataToShow = [...dataToShow];
    dispatch(letDeleteTheValue(dataToShow));
  }

  handleEdit(index) {
      let {dataToShow, dispatch} = this.props;
      dispatch(letEditTheValue(dataToShow[index]));
  }

  render() {
    let {dataToShow} = this.props;
    return (
      <table>
            {dataToShow &&
            dataToShow.map((data, index) =>
          <tr>
            <td key={index}> {data} </td>
            <td>
              <a href="" onClick={(e) => {
                  this.handleEdit(index);
                  e.preventDefault();
              }}>Edit</a>
            </td>
            <td>
              <a href="" onClick={(e) => {
                this.handleDelete(index);
                e.preventDefault();
              }}>Delete</a>
            </td>
          </tr>
        )
        }
      </table>
    );
  }
}

Show.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

const mapStateToProps = (store) => {
  return {
    dataToShow: store.admin.data
  }
}

export default connect(mapStateToProps)(Show);