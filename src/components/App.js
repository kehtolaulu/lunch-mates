import React from 'react';
import LunchesList from './LunchesList';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="content">
                    <LunchesList />
                </div>
            </div>
        );
    }
}

export default App;
