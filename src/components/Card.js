import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import {grey500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import ContentClear from 'material-ui/svg-icons/content/clear';
import SocialShare from 'material-ui/svg-icons/social/share';

const styles = {
  card: {
    marginTop: 13,
  },
  icon: {
    marginLeft: 15,
  },
  sharedWithText: {
    fontSize: 12,
    marginLeft: 14,
    marginTop: 20,
    marginBottom: 13,
    paddingBottom: 9,
  },
}

const CardContainer = () => (
  <Card style={styles.card}>
    <CardHeader
      title="Listan nimi"
      subtitle="Listan omistajan nimi"
      titleColor="red"
      actAsExpander={true}
      showExpandableButton={true}
    >
    </CardHeader>

    <CardActions>
      <ActionDelete color={grey500}  style={styles.icon} />
      <ImageEdit color={grey500} style={styles.icon} />
      <SocialShare color={grey500} style={styles.icon} />
    </CardActions>
    <p style={styles.sharedWithText}>Jaettu: <span>Elias, Lasse, Susanna</span></p>
    <CardText expandable={true}>
      <List
        style={{
          width: '50%'
        }}
      >
        <ListItem primaryText="Tuote 1" leftIcon={<ContentClear />} />
        <ListItem primaryText="Tuote 2" leftIcon={<ContentClear />} />
        <ListItem primaryText="Tuote 3" leftIcon={<ContentClear />} />
      </List>
    </CardText>
  </Card>
);

export default CardContainer;
