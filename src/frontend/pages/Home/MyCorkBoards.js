import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';
import SectionHeader from './SectionHeader';
import { withRouter } from 'react-router-dom';
import myCorkBoards from '../../mocks/myCorkBoards';

class MyCorkBoards extends React.Component {

    onAddButtonClick = () => {
        this.props.history.push('/corkboards/add');
    };

    render() {
        return (
        <>
            <SectionHeader text="My CorkBoards" onButtonClick={this.onAddButtonClick} buttonText="Add CorkBoard" />
            <Paper>
                <List>
                    {myCorkBoards.map((board, i) => {
                        const subtitle = `with ${board.pushpins} PushPins`;
                        return (
                            <ListItem key={i}>
                                <ListItemText
                                    primary={board.title}
                                    secondary={subtitle}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>
        </>
        );
    }
}
export default withRouter(MyCorkBoards);
