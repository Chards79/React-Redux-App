import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Comic from './Comic';

import { fetchComic } from '../actions';

const GetComic = props => {
    useEffect(() => {
        props.fetchComic();
    }, []);
    if (props.isFetching) {
        //spinner
        return <h2>Loading XKCD Comic...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            <Comic comic={props.getComic} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getComic: state.getComic,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchComic })(GetComic);