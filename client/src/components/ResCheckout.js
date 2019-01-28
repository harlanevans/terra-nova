import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import { SubHeader } from "../styles/AppStyles";
import ResCheckoutForm from "./ResCheckoutForm";
import { withNamespaces } from 'react-i18next';


class ResCheckout extends React.Component {
  renderRoomDetails = () => {
    const {
      room: { room_type, cost, description,},
      userSpecs: { start_date, end_date, adults, children }
    } = this.props.location.state;

    const startDate = start_date.toString();
    const endDate = end_date.toString();

    return (
      <Segment.Group horizontal raised>
        <Segment>
          <Image alt="" />
        </Segment>
        <Segment>
          <Header as="h2">{room_type}</Header>
          <hr />
          <Header as="h4">Room Description</Header>
          <p>{description}</p>
          <Header as="h4">Reservation Details</Header>
          <p>Price: ${cost}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>Adults: {adults}</p>
          <p>Children: {children}</p>
        </Segment>
      </Segment.Group>
    );
  };

  render() {
    const { t } = this.props
    return (
      <Container style={styles.background}>
        <SubHeader>{t("Reservation Checkout")}</SubHeader>
        <hr />
        <ResCheckoutForm
          userSpecs={this.props.history.location.state.userSpecs}
          room={this.props.history.location.state.room}
          history={this.props.history}
        />
        <hr />
        {t(this.renderRoomDetails())}
      </Container>
    );
  }
}

export default withNamespaces()(ResCheckout);


const styles = {
  background: {
    marginTop: '100px',
  }
}