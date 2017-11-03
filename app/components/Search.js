const React = require('react');


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { querySearch: '' };  
    this.handleSearch = (event) => {
      this.setState({querySearch: event.target.value})
      return this.props.inputName(event.target.value), this.props.filterNames(event.target.value);
    }
  }
  render() {
    return (
      <form className='search' style={{textAlign: 'center'}}>
        <input style={{margin: '10px -20px', width: '75%'}}
          onChange={this.handleSearch}
          value={this.state.querySearch}
          type="text"
          placeholder="Search here" required
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    )
  }
}

module.exports = Search;
