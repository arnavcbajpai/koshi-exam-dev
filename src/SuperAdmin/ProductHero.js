import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {PeopleOutline, LocalLibrary, MenuBook, CloudUpload, Business } from "@material-ui/icons";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Typography from 'components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import InstituionList from './TotalInstitution'
import TeacherList from './TotalTeacher'
import StudentList from './TotalStudent'
import ExamList from './TotalExam'
import DropzoneDialog from "Student/UploadFiles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Manage your resources 
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {'A successful Organisation recognises Assets & Liabilities'}
      </Typography>
     
      <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Instituions",
                    tabIcon: Business,
                    tabContent: (
                      <InstituionList/>
                    )
                  },
                  {
                    tabName: "Faculties",
                    tabIcon: PeopleOutline,
                    tabContent: (
                      <TeacherList/>
                    )
                  },
                  {
                    tabName: "Students",
                    tabIcon: LocalLibrary,
                    tabContent: (
                      <StudentList/>
                    )
                  },
                  {
                    tabName: "Exams",
                    tabIcon: MenuBook,
                    tabContent: (<>
                      <ExamList/>
                      </>
                    )
                  },
                  {
                    tabName: "Upload Files",
                    tabIcon: CloudUpload,
                    tabContent: (
                      <div style={{width:'100%', height:'100%'}}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                        <DropzoneDialog/>
                        </GridItem>                        
                      </GridContainer>
                    </div>
                    )
                  },
                  {
                    tabName: "Messages",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Feature Coming Soon.
                      </p>)
                  },
                  {
                    tabName: "Settings",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Feature Coming Soon.
                      </p>)
                  }
                ]}
              />
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
