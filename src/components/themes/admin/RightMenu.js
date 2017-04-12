import React from 'react';
import {connect} from 'react-redux';
import {letShowTheValue} from './AdminActionCreator';

class RightMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit() {
    let {dataToShow, dispatch} = this.props;
    dataToShow = dataToShow || [];
    dataToShow = [...dataToShow, this.state.value];
    console.log(dataToShow);
    dispatch(letShowTheValue(dataToShow));
  }

  render() {
    let {dataToShow} = this.props;
        return (
            <div>
              <form>
                <input type="text" value={this.state.value} className="" onChange={this.handleChange}/>
                <input type="submit" onClick={(e) => {
                    this.handleSubmit();
                    e.preventDefault();
                }}/>
              </form>
                {/*<p>Edit</p>*/}
                {/*</div>*/}
                {/*<div>{dataToShow &&*/}
                {/*dataToShow.map((data, index) => <input type="text" value={data} className="" onChange={this.handleChange}/>)}*/}
            </div>
        );
  }

}
const mapStateToProps = (store) => {
  return {
    dataToShow: store.admin.data
  }
}

export default connect(mapStateToProps)(RightMenu);