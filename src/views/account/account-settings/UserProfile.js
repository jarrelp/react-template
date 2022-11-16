// material-ui
import { Grid, Stack, TextField } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import Face2Icon from '@mui/icons-material/Face2';

// ==============================|| PROFILE - USER PROFILE ||============================== //

const UserProfile = () => (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Avatar alt="User" sx={{ height: 80, width: 80 }}>
                        <Face2Icon sx={{ height: 60, width: 60 }} />
                    </Avatar>
                </Grid>
                <Grid item sm zeroMinWidth>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <input accept="image/*" style={{ display: 'none' }} id="contained-button-file" multiple type="file" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField fullWidth label="User Name" defaultValue="Jan" />
        </Grid>
    </Grid>
);

export default UserProfile;
