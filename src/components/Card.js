import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import {grey500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import ContentClear from 'material-ui/svg-icons/content/clear';
import SocialShare from 'material-ui/svg-icons/social/share';

const CardContainer = () => (
  <Card>
    <CardHeader
      title="Listan nimi"
      subtitle="Listan omistajan nimi"
      titleColor="red"
      actAsExpander={true}
      showExpandableButton={true}
    >
      <SocialShare color={grey500}/>
    </CardHeader>

    <CardActions>
      <ActionDelete color={grey500}/>
      <ImageEdit color={grey500} />
    </CardActions>
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
