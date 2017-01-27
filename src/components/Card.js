import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import {List, ListItem} from 'material-ui/List';
import ContentClear from 'material-ui/svg-icons/content/clear';
import SocialShare from 'material-ui/svg-icons/social/share';

const styles = {
  card: {
    marginTop: 13,
    backgroundColor: '#fafafa',
  },
  icon: {
    marginLeft: 15,
    color: '#424242',
    cursor: 'pointer'
  },
  sharedWithText: {
    fontSize: 12,
    marginLeft: 14,
    marginTop: 20,
    marginBottom: 13,
    paddingBottom: 9,
    color: '#838383',
  },
  listItemStyle: {
    fontSize: 14
  },
}

const CardContainer = () => (
  <Card style={styles.card}>
    <CardHeader
      title="Listan nimi"
      subtitle="Listan omistajan nimi"
      titleColor="white"
      titleStyle={{fontSize: 16, textTransform: 'uppercase'}}
      subtitleColor='#838383'
      actAsExpander={true}
      showExpandableButton={true}
    >
    </CardHeader>

    <CardActions>
      <ActionDelete style={styles.icon} />
      <ImageEdit style={styles.icon} />
      <SocialShare  style={styles.icon} />
    </CardActions>
    <p style={styles.sharedWithText}>Jaettu: <span>Elias, Lasse, Susanna</span></p>
    <CardText expandable={true}>
      <List
        style={{
          width: '50%',
        }}
        
      >
        <ListItem style={styles.listItemStyle} primaryText="Tuote 1" leftIcon={<ContentClear style={styles.icon}/>} />
        <ListItem style={styles.listItemStyle} primaryText="Tuote 2" leftIcon={<ContentClear style={styles.icon}/>} />
        <ListItem style={styles.listItemStyle} primaryText="Tuote 3" leftIcon={<ContentClear style={styles.icon}/>} />
      </List>
    </CardText>
  </Card>
);

export default CardContainer;
