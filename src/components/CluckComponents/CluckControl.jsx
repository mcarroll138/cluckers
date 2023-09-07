import React from 'react';
import Cluck from './Cluck';
import CluckList from './CluckList';
import NewCluckForm from './NewCluckForm';
import ClucksButton from '../ClucksButton';

class CluckCotrol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCluckList: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    handleAddingNewCluckToList = (newCluck) => {
        const newMainCluckList = this.state.mainCluckList.concat(newCluck);
        this.setState({mainCluckList: newMainCluckList,
        formVisibleOnPage: false
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCluckForm onNewCluckCreation={this.handleAddingNewCluckToList} />;
            buttonText = "See all clucks";
        } else {
            currentlyVisibleState = <CluckList cluckList={this.state.mainCluckList} />;
            buttonText = "Cluck About it!";

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