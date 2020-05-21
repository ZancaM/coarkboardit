import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';
import SectionHeader from './SectionHeader';

import recentCorkboardUpdates from '../../mocks/recentCorkboardUpdates';

export default function RecentCorkboardUpdates(props) {
    return (
        <>
            <SectionHeader
                text="Recent CorkBoard Updates"
                buttonText="Popular Tags"
            />
            <Paper>
                <List>
                    {recentCorkboardUpdates.map((board, i) => {
                        const subtitle = `Updated by ${board.owner} on ${
                            board.lastupdated
                        }`;
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
