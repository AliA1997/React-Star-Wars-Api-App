//import React and PureComponent to have the ability to have a shallow comparison of props and state
import React, { PureComponent } from 'react';
//import your action creator from store for getting assynchronous operations.
import {  getPeople } from './redux/store';
//import connect method connecting your component to have access to redux state and dispatchers
import { connect } from 'react-redux';

class List extends PureComponent {
    componentDidMount() {
        //Dispatch your dispatcher
        this.props.getPeople();
    }
    render() {
    // const { people, loading } = this.state;
    const { people, loading } = this.props;
        if(!loading) {
            return (
            <div className='container'>
                {people.length ? people.map((person, i) => <p className='welcome' key={i}>{person.name}</p>) : <p>No People</p>}
            </div>
            );
        } else {
            return (
            <div className='container'>
                <p className='welcome'>Loading...........</p>
            </div>
            )
        }
    }
}
  

//Map the redux state to your props.
const mapStateToProps = state => ({
    people: state.people,
    loading: state.loading,
  })

//Map your action creators to your props.
const mapDispatchToProps = {
    getPeople,
}

//export your list as a default export 
export default connect(mapStateToProps, mapDispatchToProps)(List);