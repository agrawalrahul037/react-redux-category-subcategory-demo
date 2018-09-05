import React, { Component } from 'react';
import { myConfig } from '../constants/constant';
import { connect } from 'react-redux';

class TileDisplay extends Component {
    render() {
        var myStyle = {
            color: '#FF0000',
            background: '#eeeeee',
            width: 300,
            height: 300
        }
        const products = this.props;
        return (
            <div style={myStyle}>
                {products.products1.simpleReducer.result !== undefined && products.products1.simpleReducer.result.subCategories.map((post,index) =>
                    (post.id == myConfig.selectedSubCat) ? <div key={'mykey' + index}>{post.images !== undefined && post.images.map((post1,index) => <img  key={'mykey' + index} src={post1.url} alt={post1.url}></img>)}</div> : ""
                )}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products1: state
});

export default connect(mapStateToProps)(TileDisplay);