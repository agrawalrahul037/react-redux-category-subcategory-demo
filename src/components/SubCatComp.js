import React, { Component } from 'react';
import { myConfig } from '../constants/constant';
import { connect } from 'react-redux';
import * as myAction from '../actions/simpleAction'

class SubCatComp extends Component {
    constructor(props) {
        super(props);
        this.subCatChange = this.subCatChange1.bind(this);
    }
    subCatChange1(event) {
        myConfig.selectedSubCat = event.target.value;
        this.props.dispatch(myAction.categorySelection());
    }
    render() {
        const products = this.props;
        return (
            <div>
                <select onChange={this.subCatChange}>
                    {products.products1.simpleReducer.result !== undefined && products.products1.simpleReducer.result.subCategories.map((post,index) =>
                        (post.catId == myConfig.selectedCat) ? <option  key={'mykey' + index} value={post.id}>{post.name}</option> : ""
                    )}
                </select>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products1: state
});

export default connect(mapStateToProps)(SubCatComp);
