import React from 'react';
import { Grid } from 'semantic-ui-react';
import MainNavigation from './MainNavigation';
import SecondaryNavigation from './SecondaryNavigation';

export default () => (
    <div>
        <MainNavigation />
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={4}>
                    <SecondaryNavigation />
                </Grid.Column>
                <Grid.Column width={12}>
                    <p>This is the main content area</p>
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