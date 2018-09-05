import React, { Component } from 'react';
import { myConfig } from '../constants/constant';
import { connect } from 'react-redux';
import * as myAction from '../actions/simpleAction'

class CategoryComp extends Component {
    constructor(props) {
        super(props);
        this.catChange = this.catChange1.bind(this);
    }
    catChange1(event) {
        myConfig.selectedCat = event.target.value;
        var temp = this.props.products1.simpleReducer.result.subCategories.filter(subObj => subObj.catId === myConfig.selectedCat);
        myConfig.selectedSubCat = temp[0].id;
        this.props.dispatch(myAction.categorySelection());
    }
    render() {
        const products = this.props;

        return (
            <div>
                <select onChange={this.catChange}>
                    {products.products1.simpleReducer.result !== undefined && products.products1.simpleReducer.result.categories.map((post, index) =>
                        <option key={'mykey' + index} value={post.id}>{post.name}</option>
                    )}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products1: state
});

export default connect(mapStateToProps)(CategoryComp);
