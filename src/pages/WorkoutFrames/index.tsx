
// import Axios from 'axios';
import * as React from 'react';
import { Button, Col, Grid, Row, Thumbnail } from 'react-bootstrap';
// import { Plus as PlusIcon } from 'react-feather';
// import EditGridModal from '../../components/DataGrid/EditGridModal';

// import { Button } from 'react-bootstrap/lib/InputGroup';
import a from '../../assets/img/a.png';
import trash from '../../assets/img/delete.svg';
import './workoutFrames.css';

interface IReactFormState {
  data: object[];
  // fieldValues: object;
  openModal: boolean;
  isEdit: boolean;
  schema: any;
}

class WorkoutFrames extends React.PureComponent<IReactFormState> {
  public state: IReactFormState;

  constructor(props: any) {
    super(props);
    this.state = {
      data: [{'name': '1', 'status': 'Live', 'simulator': 'preview' }, {'name': '2', 'status': 'Live', 'simulator': 'preview' }],
      // fieldValues: {},
      isEdit: false,
      openModal: false,
      schema: []
    };
  }

  // public componentDidMount() {
  //   Axios.get('http://demo7355785.mockable.io//qwerty1').then(
  //     (response: any) => {
  //       this.setState({
  //         schema: response.data.components[1].components[0].components
  //       });
  //     }).catch((e: any) => {
  //       // tslint:disable-next-line:no-console
  //       console.log(e);
  //     });
  // }


  // public addNew = (values: any) => {
  //   this.setState({
  //     isEdit: false,
  //     openModal: true
  //   });
  // }

  // public toggleModal = () => (
  //   this.setState((previousState: IReactFormState) => ({ openModal: !previousState.openModal }))
  // )

  public render() {
    // const { data, fieldValues, isEdit, openModal, schema } = this.state;
    const { data } = this.state;
    return (
        <div className="salesForm container-fluid">
          <div className="panel panel-default col-md-3 mt-10 p-0 mr-5">
              <div className="panel-heading">
              <h4>Workout Frames</h4></div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>DEVICE SIZE</th>
                    <th>NO. OF FILES</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? data.map((item: any) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.batchNo}</td>
                    </tr>
                  )) : <tr>
                      <td colSpan={24} className="noDataFound"><div>No data available</div></td>
                    </tr>}
                </tbody>
              </table>
          </div>

          <div className="panel panel-default col-md-8 mt-10 p-0">
            <div className="panel-heading">
              <h4>Idpi
              </h4>
              <span className="float-right">
                <Button bsStyle="green">
                  +Upload Assests
                </Button>
              </span>
            </div>
            <Grid bsClass="grid">
              <Row >
                <Col md={2}>
                  <Thumbnail src={a} alt="242x200">
                    <h5>Thumbnail label</h5>
                    <p>
                      32kb
                      &nbsp;
                      <img className="action float-right" src={trash} />
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={2}>
                  <Thumbnail src={a} alt="242x200">
                    <h5>Thumbnail label</h5>
                    <p>
                      32kb
                      &nbsp;
                      <img className="action float-right" src={trash} />
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={2}>
                  <Thumbnail src={a} alt="242x200">
                    <h5>Thumbnail label</h5>
                    <p>
                      32kb
                      &nbsp;
                      <img className="action float-right" src={trash} />
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={2}>
                  <Thumbnail src={a} alt="242x200">
                    <h5>Thumbnail label</h5>
                    <p>
                      32kb
                      &nbsp;
                      <img className="action float-right" src={trash} />
                    </p>
                  </Thumbnail>
                </Col>
                <Col md={2}>
                  <Thumbnail src={a} alt="242x200">
                    <h5>Thumbnail label</h5>
                    <p>
                      32kb
                      &nbsp;
                      <img className="action float-right" src={trash} />
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}

// const mapStateToProps = (state: IState) => ({
//   loading: state.user.loading,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchUsers: () => dispatch(fetchUsers())
// });

// interface IStateProps {
//   salesBill: any[];
//   loading: boolean;
// }

// interface IDispatchProps {
//   fetchUsers: () => void;
// }

// export default compose(
//   withRouter,
//   connect<IStateProps, IDispatchProps>(
//     mapDispatchToProps
//   ),
//   withLocalize
// )(Workouts);

export default WorkoutFrames;
