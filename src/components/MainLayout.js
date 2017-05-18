import React from 'react';
import { Grid } from 'semantic-ui-react';
import MainNavigation from './MainNavigation';
import SecondaryNavigation from './SecondaryNavigation';

export default ({ children }) => (
    <div>
        <MainNavigation />
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={4}>
                    <SecondaryNavigation />
                </Grid.Column>
                <Grid.Column width={12}>
                    { children }
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <p>This is the footer</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);