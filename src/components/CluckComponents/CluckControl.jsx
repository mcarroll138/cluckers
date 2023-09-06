import React from 'react';
import Cluck from './Cluck';
import CluckList from './CluckList';
import NewCluckForm from './NewCluckForm';
import ClucksButton from '../ClucksButton';

class CluckCotrol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCluckForm />;
            buttonText = "See all clucks";
        } else {
            currentlyVisibleState = <CluckList />;
            buttonText = "Cluck";

        }

        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </ React.Fragment >
        );
    }
}
export default CluckCotrol;