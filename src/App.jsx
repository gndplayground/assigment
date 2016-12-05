import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="container">
                    <h1 className="page__title">Mua hàng thỏa thích tại GND</h1>
                </div>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.node,
};

export default App;